const fs = require('fs');
const path = require('path');

const root = process.cwd();
const filePath = path.join(root, 'utils', 'locations.js');
let content = fs.readFileSync(filePath, 'utf8');

// Fix inner straight quotes that were converted from curly quotes inside double-quoted strings.
content = content.replace(/"([^"\\]*(?:\\.[^"\\]*)*)"/g, (match, inner) => {
  if (!inner.includes('"')) return match;
  const escaped = inner.replace(/"/g, '\\"');
  return `"${escaped}"`;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed double-quoted strings in utils/locations.js');
