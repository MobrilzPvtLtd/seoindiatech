const fs = require('fs');
const path = require('path');

const root = process.cwd();
const scanDirs = ['pages', 'component'];
const exts = ['.js', '.jsx'];

function walk(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  fs.readdirSync(dir).forEach((file) => {
    const fp = path.join(dir, file);
    const st = fs.statSync(fp);
    if (st.isDirectory()) results = results.concat(walk(fp));
    else if (exts.includes(path.extname(fp))) results.push(fp);
  });
  return results;
}

function isDataStringLine(line) {
  return /:\s*'/.test(line) || /:\s*"/.test(line) || /^\s*'/.test(line) || /^\s*"/.test(line);
}

function fixLine(line) {
  if (!line.includes("\\'")) return line;
  if (isDataStringLine(line)) return line;

  const trimmed = line.trimStart();
  if (
    trimmed.startsWith('//') ||
    trimmed.startsWith('*') ||
    trimmed.startsWith('import ') ||
    trimmed.startsWith('export ')
  ) {
    return line;
  }

  return line.replace(/\\'/g, "'");
}

function main() {
  const files = scanDirs.flatMap((dir) => walk(path.join(root, dir)));
  let changed = 0;

  files.forEach((fp) => {
    const original = fs.readFileSync(fp, 'utf8');
    const next = original.split('\n').map(fixLine).join('\n');
    if (next !== original) {
      fs.writeFileSync(fp, next, 'utf8');
      changed += 1;
      console.log(`Fixed JSX apostrophes: ${path.relative(root, fp)}`);
    }
  });

  console.log(`\nDone. ${changed} file(s) updated.`);
}

main();
