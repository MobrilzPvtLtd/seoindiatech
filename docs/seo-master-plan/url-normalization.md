# URL Normalization — SEO India Tech

**Date:** 2026-07-30  
**Principle:** Do not change public URLs unnecessarily.

---

## Canonical Host

| Variant | Preferred | Action |
|---------|-----------|--------|
| `https://www.seoindiatech.com/*` | **Yes** | Canonical in SeoHead, sitemap, schema |
| `https://seoindiatech.com/*` | No | 301 → www (netlify.toml) |
| `http://seoindiatech.com/*` | No | 301 → https www |
| `http://www.seoindiatech.com/*` | No | 301 → https www |

**Implementation:** `netlify.toml` host redirects + `SITE_URL` in `utils/siteConfig.js`

---

## Trailing Slash

| Pattern | Rule |
|---------|------|
| Paths without trailing slash | **Preferred** (`/contact-us` not `/contact-us/`) |
| Exception | `/contact-us/` → 301 `/contact-us` (next.config.mjs) |
| Homepage | `/` only |

`absoluteUrl()` strips trailing slashes except homepage.

---

## HTTP / HTTPS

- All canonicals use `https://`
- HSTS enabled (`Strict-Transport-Security` in next.config + netlify headers)

---

## www / non-www

- **www** is canonical everywhere (sitemap, schema, `llms.txt`, `agents.json`)
- Apex domain redirects to www at CDN layer

---

## Query Parameters

| Parameter | Handling |
|-----------|----------|
| UTM / tracking (`?utm_*`) | Not used in internal links; canonical ignores params |
| Blog search `?q=` | **Removed from schema** — no search feature on /blog |
| Pagination | Blog uses single index page — no paginated archives |

**Recommendation:** If analytics adds query params to internal links, ensure canonical remains clean path.

---

## Case Sensitivity

- All routes lowercase (`/services/ai-seo`)
- No mixed-case public URLs

---

## Duplicate Route Aliases

| Alias | Canonical | Status |
|-------|-----------|--------|
| `/services/pay-per-click` | `/services/ppc-advertising` | 301 redirect; page file still exists — **review for removal** |
| `/contactus` | `/contact-us` | 301 |
| `/new` | `/` | 301 + robots Disallow |
| `/old` | `/` | 301 + robots Disallow |

**Not in sitemap:** redirect-only URLs.

---

## Dynamic Routes

| Pattern | Slug source | Invalid slug |
|---------|-------------|--------------|
| `/blog/[slug]` | BlogPost index | `notFound: true` at build |
| `/industries/[slug]` | industries list | `fallback: false` |
| `/seo-services/[slug]` | locations.js | `fallback: false` |
| `/services/[slug]` | Hub slugs only | `fallback: false` |

---

## International / Language

- **Single language:** English (`lang="en"` on `<html>`, `inLanguage: en-IN` in schema)
- **No hreflang** — no alternate language/regional URL sets exist
- Europe-focused **content** does not require hreflang without separate locale URLs

---

## Sitemap URL Format

```
https://www.seoindiatech.com/path-without-trailing-slash
```

113 paths — validated by `npm run check-sitemap`.

---

## Do Not Change Without Approval

- Service URL slugs (`/services/*`)
- Blog slugs (`/blog/*`)
- Industry slugs (`/industries/*`)
- City slugs (`/seo-services/*`)
- Mass 301 consolidation of city or industry pages

---

## Verification Checklist

- [ ] `curl -I https://seoindiatech.com/` returns 301 to www
- [ ] Canonical tag matches sitemap `<loc>`
- [ ] GSC preferred domain = www
- [ ] No mixed HTTP references in schema `url` fields
