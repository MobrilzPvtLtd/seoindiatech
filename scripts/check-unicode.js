const fs = require('fs');
const path = require('path');

const root = process.cwd();
const scanDirs = ['pages', 'component', 'utils'];
const exts = ['.js', '.jsx'];

const forbiddenPattern =
  /[\u2013\u2014\u2018\u2019\u201C\u201D\u2026\u00B0\u2192\u00B7\u2022\u203A\u00A9\u2600-\u27BF\u{1F300}-\u{1FAFF}]/gu;

const allowedEntityPattern = /&(mdash|ndash|lsquo|rsquo|ldquo|rdquo|hellip);/;

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

function checkFile(fp) {
  const content = fs.readFileSync(fp, 'utf8');
  const lines = content.split('\n');
  const violations = [];

  lines.forEach((line, index) => {
    const matches = [...line.matchAll(forbiddenPattern)];
    matches.forEach((match) => {
      const start = match.index;
      const before = line.slice(Math.max(0, start - 8), start);
      if (allowedEntityPattern.test(before + match[0])) return;
      violations.push({
        line: index + 1,
        char: match[0],
        text: line.trim(),
      });
    });
  });

  return violations;
}

function main() {
  const files = scanDirs.flatMap((dir) => walk(path.join(root, dir)));
  let total = 0;

  files.forEach((fp) => {
    const violations = checkFile(fp);
    if (violations.length) {
      console.log(`\n${path.relative(root, fp)}`);
      violations.forEach((v) => {
        console.log(`  L${v.line}: ${v.char} | ${v.text}`);
      });
      total += violations.length;
    }
  });

  if (total) {
    console.error(`\nFound ${total} forbidden Unicode character(s).`);
    process.exit(1);
  }

  console.log('No forbidden Unicode characters found.');
}

main();
