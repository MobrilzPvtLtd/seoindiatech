const fs = require('fs');
const path = require('path');

const root = process.cwd();
const scanDirs = ['pages', 'component', 'public'];
const exts = ['.js', '.jsx', '.ts', '.tsx'];

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

function read(fp) {
    try { return fs.readFileSync(fp, 'utf8'); } catch (e) { return ''; }
}

const imgNoSize = [];
const formsNoAction = [];
const linksMissingText = [];
const scriptCounts = [];
let totalScripts = 0;
let scriptsWithAsyncOrDefer = 0;
const scriptsInHeadFiles = [];
let textXsCount = 0;
const smallTapCandidates = [];

const files = scanDirs.flatMap(d => walk(path.join(root, d)));
if (fs.existsSync(path.join(root, 'pages'))) {
    files.push(...walk(path.join(root, 'pages')));
}

files.forEach((file) => {
    const rel = path.relative(root, file).replace(/\\/g, '/');
    const s = read(file);
    // images
    const imgRe = /<img\b[^>]*>/g;
    let m;
    while ((m = imgRe.exec(s)) !== null) {
        const tag = m[0];
        if (!/\b(width|height)=/.test(tag)) {
            imgNoSize.push({ file: rel, tag: tag.slice(0, 120) });
        }
    }
    // forms without action
    const formRe = /<form\b([^>]*)>/g;
    while ((m = formRe.exec(s)) !== null) {
        const attrs = m[1];
        if (!/\baction=/.test(attrs)) formsNoAction.push({ file: rel, tag: m[0] });
    }
    // links missing text or aria-label
    const aRe = /<a\b([^>]*)>([\s\S]*?)<\/a>/g;
    while ((m = aRe.exec(s)) !== null) {
        const attrs = m[1];
        const inner = m[2].trim();
        const hasAria = /aria-label=/.test(attrs) || /aria-labelledby=/.test(attrs);
        const hasText = inner.replace(/<[^>]+>/g, '').trim().length > 0;
        if (!hasText && !hasAria) linksMissingText.push({ file: rel, attrs: attrs.slice(0, 100), inner: inner.slice(0, 80) });
    }
    // script tags
    const scriptRe = /<script\b([^>]*)>/g;
    let count = 0, withAsync = 0;
    while ((m = scriptRe.exec(s)) !== null) {
        count++;
        const attr = m[1];
        if (/\basync\b/.test(attr) || /\bdefer\b/.test(attr)) withAsync++;
    }
    if (count > 0) {
        scriptCounts.push({ file: rel, count, withAsync });
        totalScripts += count;
        scriptsWithAsyncOrDefer += withAsync;
    }
    // check pages/_document.js for scripts in head
    if (rel === 'pages/_document.js' || rel === 'pages/_document.jsx' || rel === 'pages/_document.tsx') {
        if (/<Head[\s\S]*?>[\s\S]*?<\/Head>/.test(s)) {
            const headContent = s.match(/<Head[\s\S]*?>[\s\S]*?<\/Head>/)[0];
            const sc = (headContent.match(/<script\b/g) || []).length;
            if (sc > 0) scriptsInHeadFiles.push({ file: rel, count: sc });
        }
    }
    // Tailwind small text classes
    const smallTextMatches = s.match(/text-(xs|\[\d+px\]|sm)\b/g);
    if (smallTextMatches) textXsCount += smallTextMatches.length;
    // small w/h classes (= possible small tap targets)
    const sizeMatch = s.match(/w-(\d|\[\d+px\])|h-(\d|\[\d+px\])/g);
    if (sizeMatch && sizeMatch.length > 0) {
        // heuristics: w-4 h-4 etc
        const small = sizeMatch.filter(x => /w-(1|2|3|4|5|6|7|8)\b|h-(1|2|3|4|5|6|7|8)\b/.test(x));
        if (small.length > 0) smallTapCandidates.push({ file: rel, sample: small.slice(0, 6) });
    }
});

// Summaries
const filesWithManyScripts = scriptCounts.filter(x => x.count >= 5).sort((a, b) => b.count - a.count).slice(0, 30);

const summary = {
    totalFilesScanned: files.length,
    imagesMissingSize: imgNoSize.length,
    imagesMissingSample: imgNoSize.slice(0, 20),
    formsMissingAction: formsNoAction.length,
    formsMissingSample: formsNoAction.slice(0, 20),
    linksMissingText: linksMissingText.length,
    linksMissingSample: linksMissingText.slice(0, 20),
    totalScriptTags: totalScripts,
    scriptsWithAsyncOrDefer,
    asyncPercent: totalScripts ? Math.round((scriptsWithAsyncOrDefer / totalScripts) * 100) : 0,
    filesWithManyScripts: filesWithManyScripts,
    scriptsInHeadFiles,
    smallTextClassCount: textXsCount,
    smallTapCandidates: smallTapCandidates.slice(0, 30),
};

console.log(JSON.stringify(summary, null, 2));
