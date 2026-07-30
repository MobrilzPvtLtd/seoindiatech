const fs = require('fs');
const path = require('path');

const root = process.cwd();
const scanDirs = ['pages', 'component', 'utils'];
const exts = ['.js', '.jsx'];

const contractionPatterns = [
  /\b(\w+)'(\w+)\b/g,
];

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

function fixSingleQuotedStrings(content) {
  return content.replace(/'([^'\\]*(?:\\.[^'\\]*)*)'/g, (match, inner) => {
    if (!inner.includes("'")) return match;
    const escaped = inner.replace(/'/g, "\\'");
    return `'${escaped}'`;
  });
}

function main() {
  const files = scanDirs.flatMap((dir) => walk(path.join(root, dir)));
  let changed = 0;

  files.forEach((fp) => {
    const original = fs.readFileSync(fp, 'utf8');
    const next = fixSingleQuotedStrings(original);
    if (next !== original) {
      fs.writeFileSync(fp, next, 'utf8');
      changed += 1;
      console.log(`Escaped apostrophes: ${path.relative(root, fp)}`);
    }
  });

  console.log(`\nDone. ${changed} file(s) updated.`);
}

main();
