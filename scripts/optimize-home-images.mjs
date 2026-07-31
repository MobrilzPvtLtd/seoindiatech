/**
 * Compress critical homepage images for faster LCP.
 * Run: node scripts/optimize-home-images.mjs
 */
import sharp from 'sharp'
import { existsSync, statSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.join(__dirname, '..', 'public')

const TARGETS = [
  { file: 'images/Google-Ai-Overviews.png', maxWidth: 1200, quality: 82 },
  { file: 'images/seo-banner.jpg', maxWidth: 1400, quality: 80 },
  { file: 'images/about.png', maxWidth: 900, quality: 82 },
  { file: 'images/herobg.jpg', maxWidth: 900, quality: 80 },
  { file: 'images/services/geo.png', maxWidth: 600, quality: 82 },
  { file: 'images/home/intgra.png', maxWidth: 400, quality: 85 },
  { file: 'images/home/logo2.png', maxWidth: 300, quality: 85 },
]

async function optimizeOne({ file, maxWidth, quality }) {
  const input = path.join(publicDir, file)
  if (!existsSync(input)) {
    console.log(`skip (missing): ${file}`)
    return
  }

  const before = statSync(input).size
  const ext = path.extname(file).toLowerCase()
  const tmp = `${input}.opt`

  let pipeline = sharp(input).rotate().resize({ width: maxWidth, withoutEnlargement: true })

  if (ext === '.png') {
    pipeline = pipeline.png({ quality, compressionLevel: 9, palette: true })
  } else {
    pipeline = pipeline.jpeg({ quality, mozjpeg: true })
  }

  await pipeline.toFile(tmp)

  const { renameSync, unlinkSync } = await import('fs')
  unlinkSync(input)
  renameSync(tmp, input)

  const after = statSync(input).size
  console.log(
    `${file}: ${(before / 1024).toFixed(0)} KB → ${(after / 1024).toFixed(0)} KB`
  )
}

for (const target of TARGETS) {
  await optimizeOne(target)
}

console.log('Done.')
