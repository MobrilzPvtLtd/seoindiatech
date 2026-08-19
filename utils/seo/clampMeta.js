export const SEO_TITLE_MAX = 60
export const SEO_DESC_MAX = 155

export function clampSeo(text, max) {
  const value = String(text || '')
    .replace(/\s+/g, ' ')
    .trim()
  if (value.length <= max) return value
  const cut = value.slice(0, max)
  const space = cut.lastIndexOf(' ')
  return (space > Math.floor(max * 0.55) ? cut.slice(0, space) : cut).trim()
}

export function brandTitle(core) {
  const suffix = ' | SEO India Tech'
  const clipped = clampSeo(core, SEO_TITLE_MAX - suffix.length)
  return clampSeo(`${clipped}${suffix}`, SEO_TITLE_MAX)
}

export function clampPageSeo(seo) {
  if (!seo) return seo
  return {
    ...seo,
    title: clampSeo(seo.title, SEO_TITLE_MAX),
    description: clampSeo(seo.description, SEO_DESC_MAX),
  }
}
