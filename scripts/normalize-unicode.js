const fs = require('fs');
const path = require('path');

const root = process.cwd();
const scanDirs = ['pages', 'component', 'utils'];
const exts = ['.js', '.jsx'];

// Files that need manual lucide refactors for emojis/symbols - skip emoji/symbol chars only
const skipEmojiSymbolFiles = new Set([
  path.join(root, 'component', 'home', 'Services.js'),
  path.join(root, 'component', 'solution', 'market_research', 'WhyMarketResearch.js'),
  path.join(root, 'component', 'solution', 'CRM&Tool', 'WhyCRM.js'),
  path.join(root, 'component', 'social-media-marketing', 'Communicate.js'),
  path.join(root, 'pages', 'privacy-policy', 'index.js'),
  path.join(root, 'pages', 'terms', 'index.js'),
  path.join(root, 'component', 'services', 'social-media-optimization', 'SMOWhyHire.js'),
  path.join(root, 'component', 'seo-packege', 'PackageFeatures.js'),
  path.join(root, 'component', 'new-home', 'TrustedBy.js'),
]);

const textReplacements = [
  ['\u2014', '-'], // em-dash
  ['\u2013', '-'], // en-dash
  ['&mdash;', '-'],
  ['&ndash;', '-'],
  ['\u2018', "'"], // left single quote
  ['\u2019', "'"], // right single quote
  ['\u201C', '"'], // left double quote
  ['\u201D', '"'], // right double quote
  ['\u2026', '...'], // ellipsis
  ['\u00B0', '-degree'], // degree
  ['\u2192', '→'], // right arrow (keep unicode, safe in JSX strings)
  ['\u00B7', ' | '], // middle dot
  ['\u2022', '-'], // bullet
  ['\u203A', '>'], // single right-pointing angle quotation mark
  ['\u00A9', '(c)'], // copyright
];

const emojiSymbolPattern = /[\u2600-\u27BF\u{1F300}-\u{1FAFF}]/gu;

function walk(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fp = path.join(dir, file);
    const st = fs.statSync(fp);
    if (st.isDirectory()) results = results.concat(walk(fp));
    else if (exts.includes(path.extname(fp))) results.push(fp);
  });
  return results;
}

function normalizeContent(content, skipEmojiSymbols) {
  let next = content;
  for (const [from, to] of textReplacements) {
    next = next.split(from).join(to);
  }
  if (!skipEmojiSymbols) {
    next = next.replace(emojiSymbolPattern, '');
  }
  return next;
}

function main() {
  const files = scanDirs.flatMap((dir) => walk(path.join(root, dir)));
  let changedFiles = 0;
  let totalReplacements = 0;

  files.forEach((fp) => {
    const original = fs.readFileSync(fp, 'utf8');
    const skipEmojiSymbols = skipEmojiSymbolFiles.has(fp);
    const normalized = normalizeContent(original, skipEmojiSymbols);

    if (normalized !== original) {
      const diff = original.length - normalized.length;
      fs.writeFileSync(fp, normalized, 'utf8');
      changedFiles += 1;
      totalReplacements += Math.abs(diff);
      console.log(`Updated: ${path.relative(root, fp)}`);
    }
  });

  console.log(`\nDone. ${changedFiles} file(s) updated.`);
}

main();
