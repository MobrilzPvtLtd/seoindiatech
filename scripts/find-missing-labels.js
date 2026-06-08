const fs = require('fs');
const path = require('path');
const root = process.cwd();
const exts = ['.js', '.jsx', '.ts', '.tsx'];
function walk(dir) {
  let res = [];
  const names = fs.readdirSync(dir);
  for (const name of names) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) res = res.concat(walk(p));
    else if (exts.includes(path.extname(p))) res.push(p);
  }
  return res;
}
const dirs = ['pages', 'component'];
const files = dirs.flatMap((d) => {
  const dir = path.join(root, d);
  return fs.existsSync(dir) ? walk(dir) : [];
});
const inputRe = /<input\b([^>]*?)\/?\>/g;
const textareaRe = /<textarea\b([^>]*?)>([\s\S]*?)<\/textarea>/g;
const results = [];
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = inputRe.exec(text))) {
    const attrs = match[1];
    if (/type\s*=\s*['\"](?:hidden|submit|button|image|reset)['\"]/i.test(attrs)) continue;
    if (/aria-label=|aria-labelledby=|id=/.test(attrs)) continue;
    if (/name=/.test(attrs) || /type=/.test(attrs)) {
      results.push({ file: path.relative(root, file), tag: `<input ${attrs.slice(0, 120)}>` });
      break;
    }
  }
  while ((match = textareaRe.exec(text))) {
    const attrs = match[1];
    if (/aria-label=|aria-labelledby=|id=/.test(attrs)) continue;
    results.push({ file: path.relative(root, file), tag: `<textarea ${attrs.slice(0, 120)}>` });
    break;
  }
}
console.log(JSON.stringify(results, null, 2));
