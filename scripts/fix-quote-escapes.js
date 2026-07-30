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

function isWordChar(ch) {
  return /[A-Za-z0-9]/.test(ch);
}

function fixContent(content) {
  let result = '';
  let state = 'code';
  let i = 0;

  while (i < content.length) {
    const ch = content[i];
    const next = content[i + 1];

    if (state === 'line-comment') {
      result += ch;
      i += 1;
      if (ch === '\n') state = 'code';
      continue;
    }

    if (state === 'block-comment') {
      result += ch;
      i += 1;
      if (ch === '*' && next === '/') {
        result += '/';
        i += 1;
        state = 'code';
      }
      continue;
    }

    if (state === 'single') {
      if (ch === '\\') {
        result += ch;
        i += 1;
        if (i < content.length) {
          result += content[i];
          i += 1;
        }
        continue;
      }

      if (ch === "'") {
        const prev = result[result.length - 1];
        if (isWordChar(prev) && isWordChar(next)) {
          result += "\\'";
          i += 1;
          continue;
        }

        result += ch;
        i += 1;
        state = 'code';
        continue;
      }

      result += ch;
      i += 1;
      continue;
    }

    if (state === 'double') {
      if (ch === '\\') {
        result += ch;
        i += 1;
        if (i < content.length) {
          result += content[i];
          i += 1;
        }
        continue;
      }

      if (ch === '"') {
        const prev = result[result.length - 1];
        if (isWordChar(prev) && isWordChar(next)) {
          result += '\\"';
          i += 1;
          continue;
        }

        result += ch;
        i += 1;
        state = 'code';
        continue;
      }

      result += ch;
      i += 1;
      continue;
    }

    if (state === 'template') {
      if (ch === '\\') {
        result += ch;
        i += 1;
        if (i < content.length) {
          result += content[i];
          i += 1;
        }
        continue;
      }

      if (ch === '`') {
        result += ch;
        i += 1;
        state = 'code';
        continue;
      }

      if (ch === '$' && next === '{') {
        result += ch + next;
        i += 2;
        state = 'code';
        continue;
      }

      result += ch;
      i += 1;
      continue;
    }

    if (ch === '/' && next === '/') {
      result += ch + next;
      i += 2;
      state = 'line-comment';
      continue;
    }

    if (ch === '/' && next === '*') {
      result += ch + next;
      i += 2;
      state = 'block-comment';
      continue;
    }

    if (ch === "'") {
      result += ch;
      i += 1;
      state = 'single';
      continue;
    }

    if (ch === '"') {
      result += ch;
      i += 1;
      state = 'double';
      continue;
    }

    if (ch === '`') {
      result += ch;
      i += 1;
      state = 'template';
      continue;
    }

    result += ch;
    i += 1;
  }

  return result;
}

function main() {
  const files = scanDirs.flatMap((dir) => walk(path.join(root, dir)));
  let changed = 0;

  files.forEach((fp) => {
    const original = fs.readFileSync(fp, 'utf8');
    const next = fixContent(original);
    if (next !== original) {
      fs.writeFileSync(fp, next, 'utf8');
      changed += 1;
      console.log(`Fixed: ${path.relative(root, fp)}`);
    }
  });

  console.log(`\nDone. ${changed} file(s) updated.`);
}

main();
