const fs = require('fs');
const path = require('path');

const root = process.cwd();
const scanDirs = ['pages', 'component', 'utils'];
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

function fixSingleQuotedApostrophes(content) {
  let result = '';
  let i = 0;

  while (i < content.length) {
    const ch = content[i];

    if (ch !== "'") {
      result += ch;
      i += 1;
      continue;
    }

    result += ch;
    i += 1;

    while (i < content.length) {
      const inner = content[i];

      if (inner === '\\') {
        result += inner;
        i += 1;
        if (i < content.length) {
          result += content[i];
          i += 1;
        }
        continue;
      }

      if (inner === "'") {
        const next = content[i + 1];
        const endsString =
          next === undefined ||
          /[\s,;:\)\]\}\.\!\?\-\+]/.test(next);

        if (endsString) {
          result += inner;
          i += 1;
          break;
        }

        result += "\\'";
        i += 1;
        continue;
      }

      result += inner;
      i += 1;
    }
  }

  return result;
}

function fixJsxArrows(content) {
  return content.replace(/>([^<{]*?)(\s-\>)/g, (match, before, arrowPart) => {
    if (before.includes('{') || before.includes('<')) return match;
    return `>${before}{'->'}`;
  });
}

function main() {
  const files = scanDirs.flatMap((dir) => walk(path.join(root, dir)));
  let changed = 0;

  files.forEach((fp) => {
    const original = fs.readFileSync(fp, 'utf8');
    let next = fixSingleQuotedApostrophes(original);
    next = fixJsxArrows(next);

    if (next !== original) {
      fs.writeFileSync(fp, next, 'utf8');
      changed += 1;
      console.log(`Fixed: ${path.relative(root, fp)}`);
    }
  });

  console.log(`\nDone. ${changed} file(s) fixed.`);
}

main();
