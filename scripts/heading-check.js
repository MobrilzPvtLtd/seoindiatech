const fs = require('fs');
const path = require('path');

const root = process.cwd();
const dirs = ['pages', 'component'];

function walk(dir) {
  const results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results.push(...walk(filePath));
    } else if (/\.jsx?$/.test(filePath) || filePath.endsWith('.js')) {
      results.push(filePath);
    }
  });
  return results;
}

function extractHeadings(content) {
  // Remove JS/JSX comments {/* ... */} to avoid commented out headings
  content = content.replace(/\{\/*[\s\S]*?\*\/\}/g, '');
  const re = /<h([1-6])\b[^>]*>/g;
  const headings = [];
  let m;
  while ((m = re.exec(content)) !== null) {
    headings.push({ level: parseInt(m[1], 10), index: m.index });
  }
  return headings;
}

const report = [];

dirs.forEach((d) => {
  const dirPath = path.join(root, d);
  if (!fs.existsSync(dirPath)) return;
  const files = walk(dirPath);
  files.forEach((file) => {
    const rel = path.relative(root, file).replace(/\\/g, '/');
    try {
      const content = fs.readFileSync(file, 'utf8');
      const headings = extractHeadings(content);
      const levels = headings.map(h => h.level);
      const skips = [];
      for (let i = 1; i < levels.length; i++) {
        const prev = levels[i-1];
        const cur = levels[i];
        if (cur > prev + 1) {
          skips.push({ atIndex: i, prev, cur });
        }
      }
      report.push({ file: rel, headings: levels, firstHeading: levels[0] || null, skips });
    } catch (e) {
      console.error('Error reading', file, e.message);
    }
  });
});

// Also check pages root files directly (already included in pages)

// Summarize
const filesWithSkips = report.filter(r => r.skips && r.skips.length > 0);
const componentsWithHighFirst = report.filter(r => r.firstHeading && r.firstHeading >= 3);

console.log(JSON.stringify({ totalFiles: report.length, filesWithSkips, componentsWithHighFirst, full: report }, null, 2));
