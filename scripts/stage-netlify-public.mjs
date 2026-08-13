/**
 * Netlify + Next plugin serves /images/* reliably; root-level public files can 301-loop.
 * Mirror critical root assets under public/images/ for CDN + netlify.toml 200 rewrites.
 */
import { copyFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

const root = process.cwd()
const brandDir = join(root, 'public', 'images', 'brand')
const siteDir = join(root, 'public', 'images', 'site')

mkdirSync(brandDir, { recursive: true })
mkdirSync(siteDir, { recursive: true })

function mirror(srcRel, destRel) {
  const src = join(root, srcRel)
  const dest = join(root, destRel)
  if (!existsSync(src)) {
    console.warn(`stage-netlify-public: skip missing ${srcRel}`)
    return
  }
  copyFileSync(src, dest)
  console.log(`stage-netlify-public: ${srcRel} -> ${destRel}`)
}

mirror('public/sit-transparent.png', 'public/images/brand/sit-transparent.png')
mirror('public/sit-logo.svg', 'public/images/brand/sit-logo.svg')
mirror('public/images/brand/sit-transparent.png', 'public/images/brand/favicon.png')

mirror('public/robots.txt', 'public/images/site/robots.txt')
mirror('public/sitemap.xml', 'public/images/site/sitemap.xml')
mirror('public/llms.txt', 'public/images/site/llms.txt')
mirror('public/agents.json', 'public/images/site/agents.json')
mirror('public/agent-instructions.md', 'public/images/site/agent-instructions.md')

console.log('stage-netlify-public: done')
