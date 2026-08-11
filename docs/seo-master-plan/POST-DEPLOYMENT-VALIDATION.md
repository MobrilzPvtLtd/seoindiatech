# Post-Deployment Validation — SEO India Tech

**Production URL:** https://www.seoindiatech.com  
**Validation date:** 2026-08-11  
**Implementation:** Approved (local build ready)  
**Live deployment status:** **PENDING — not yet deployed from this environment**

---

## 1. Pre-deployment validation (local) — PASS

| Check | Result |
|-------|--------|
| `npm run build` | **PASS** — compiled successfully |
| Sitemap URL count | **115** (`validate-sitemap.mjs` postbuild) |
| `/services/technical-seo` in build | **YES** (static route) |
| `/services/seo` in build | **YES** |
| `/contact-us` in build | **YES** |
| `/services/international-seo` in build | **YES** |
| Draft blog in sitemap | **NO** (`google-core-update-may-2026-*` excluded) |
| Blog posts in sitemap | **28** (29 in legacy minus 1 draft) |
| Unintended new URLs | **None** — only approved `/services/technical-seo` added |
| `npm run check-seo` | **PASS** (38 page files) |
| `npm run seo:audit-technical` | **PASS** — 0 CRITICAL / 0 HIGH / 0 MEDIUM open |
| `npm run seo:audit-links` | **PASS** — 0 invalid destinations; 115/115 URL alignment |
| `npm run seo:keyword-architecture` | **PASS** — 0 issues |

### Routing & Netlify configuration (reviewed — no changes made)

| Item | Configuration | Status |
|------|---------------|--------|
| Build command | `npm run build` in `netlify.toml` | OK |
| Next.js plugin | `@netlify/plugin-nextjs` | OK |
| Apex → www HTTPS | `netlify.toml` 301 redirects | OK |
| App redirects | `next.config.mjs` — contactus, woocommerce-seo, seo-web-design, locations/* | OK |
| Trailing slash | `/contact-us/` → `/contact-us` 301 | OK |
| Security headers | HSTS, X-Frame-Options, etc. | OK |
| robots.txt | `public/robots.txt` — allows `/`, blocks `/api/`, `/new`, `/old` | OK |
| Sitemap reference | `Sitemap: https://www.seoindiatech.com/sitemap.xml` | OK |

### Pre-deployment technical checklist (codebase)

| Area | Status |
|------|--------|
| Canonical URLs | `SeoHead` → `https://www.seoindiatech.com` + path |
| robots.txt | Crawlable; sitemap declared |
| sitemap.xml | Dynamic; 115 URLs from `utils/seoRoutes.js` |
| noindex | Only `/404`, `/new`, `/old`, not-found stubs |
| Redirects | 5 approved aliases in `next.config.mjs` + host redirects in `netlify.toml` |
| Trailing slash | Canonicals without trailing slash |
| HTTP → HTTPS | Netlify force redirects |
| www canonicalization | Apex/http → `https://www.seoindiatech.com` |
| 404 handling | Custom `/404` with `noindex` |
| Internal links | Matrix 747 rows; 0 invalid destinations |
| JSON-LD | Service, Breadcrumb, FAQ on premium pages |
| Page titles / meta | Registry + premium overrides |
| H1 hierarchy | `check-headings` run — see audit output |

---

## 2. Deployment status

| Item | Status |
|------|--------|
| Netlify CLI deploy from this environment | **BLOCKED** |
| Reason | `NETLIFY_AUTH_TOKEN` not set; `netlify login` required |
| Git push deploy | **Not available** — git not configured in this workspace |
| Production currently serving | **Previous build** (pre-implementation) |

### Deploy steps (run on your machine or CI)

```bash
cd D:\Webiste\seoindiatech
npm run build

# Option A — Netlify CLI (recommended)
npx netlify-cli login
npx netlify-cli link          # link to existing seoindiatech site
npx netlify-cli deploy --prod

# Option B — CI token
# Set NETLIFY_AUTH_TOKEN and NETLIFY_SITE_ID, then:
# npx netlify-cli deploy --prod --build

# Option C — Git-connected Netlify
# Commit, push to connected branch; Netlify auto-builds from netlify.toml
```

After deploy completes, re-run live validation:

```bash
node scripts/post-deploy-live-validation.mjs
```

---

## 3. Live production validation (2026-08-11) — FAIL (old build still live)

**Script:** `scripts/post-deploy-live-validation.mjs`  
**Report:** `docs/seo-master-plan/audit-reports/post-deploy-live-validation-latest.json`

### Summary

| Metric | Live (now) | Expected (after deploy) |
|--------|------------|---------------------------|
| Implementation deployed | **NO** | YES |
| Priority URLs HTTP 200 | **11 / 14** | 14 / 14 |
| `/services/technical-seo` | **404** | 200 |
| `/services/international-seo` | **404** | 200 |
| Sitemap URL count | **114** | **115** |
| Draft blog in sitemap | **YES** (live) | **NO** |
| Approved redirects working | **0 / 5** (301) | 5 / 5 |
| robots.txt | **PASS** | PASS |

---

## 4. Priority URL status (live)

| URL | HTTP | Notes |
|-----|------|-------|
| `/` | 200 | Minor canonical note: `https://www.seoindiatech.com` (no trailing slash on homepage — acceptable) |
| `/services/seo` | 200 | **Old title** on live: *SEO Services India \| Full-Service Digital Agency* — new build: *SEO Services in India \| SEO India Tech* |
| `/services/technical-seo` | **404** | New page — deploy required |
| `/services/local-seo-service` | 200 | OK |
| `/services/international-seo` | **404** | Exists in new build — deploy required |
| `/services/content-marketing` | 200 | OK |
| `/services/social-media-marketing` | 200 | OK |
| `/services/e-commerce-seo` | 200 | OK |
| `/services/ui-ux-design` | 200 | OK |
| `/industries/wineries-seo` | 200 | OK |
| `/industries/optometrist-seo` | 200 | OK |
| `/contact-us` | 200 | **Old meta** on live — new build is enquiry-focused |
| `/seo-services/seo-services-in-noida` | 200 | OK (pre-deploy meta on live) |
| `/seo-services/seo-services-in-delhi` | 200 | OK (pre-deploy meta on live) |

---

## 5. Redirect status (live)

| Source | Expected | Live result | Issue |
|--------|----------|-------------|-------|
| `/contactus` | 301 → `/contact-us` | **308** → `/contact-us` (1 hop) | Works but **308** not 301; may be Netlify/Next default |
| `/services/woocommerce-seo` | 301 → `/services/e-commerce-seo` | **404** | Redirect not active on live build |
| `/services/seo-web-design` | 301 → `/services/ui-ux-design` | **404** | Redirect not active on live build |
| `/locations/noida` | 301 → `/seo-services/seo-services-in-noida` | **404** | Redirect not active on live build |
| `/locations/delhi` | 301 → `/seo-services/seo-services-in-delhi` | **404** | Redirect not active on live build |

**After deploy:** Re-test all five. New build includes redirects in `next.config.mjs`; Netlify Next plugin should serve them as permanent redirects.

---

## 6. Sitemap status (live)

**URL:** https://www.seoindiatech.com/sitemap.xml

| Check | Live | Expected after deploy |
|-------|------|------------------------|
| HTTP 200 | YES | YES |
| URL count | **114** | **115** |
| `/services/technical-seo` included | **NO** | YES |
| Draft blog URL included | **YES** (`/blog/google-core-update-may-2026-*`) | **NO** |
| All URLs `https://www.seoindiatech.com` | YES | YES |
| Duplicate URLs | None detected | None |

---

## 7. Robots status (live) — PASS

**URL:** https://www.seoindiatech.com/robots.txt

- `Allow: /` for major crawlers
- `Disallow: /api/`, `/new`, `/old`
- `Sitemap: https://www.seoindiatech.com/sitemap.xml` present
- Important SEO paths not blocked

---

## 8. Canonical status

| Page | Live | Notes |
|------|------|-------|
| Priority commercial pages (200) | Self-referencing `https://www.seoindiatech.com/...` | OK |
| Homepage | `https://www.seoindiatech.com` (no path slash) | Minor inconsistency; not blocking |
| 404 pages | N/A | — |

No canonical conflicts detected on live 200 pages.

---

## 9. Schema status (live sample)

| Page | Schema types present |
|------|---------------------|
| `/services/seo` | WebSite, Organization, BreadcrumbList, WebPage, Service, FAQPage, HowTo |
| `/contact-us` | Organization, ContactPage, BreadcrumbList, WebPage, FAQPage |
| `/services/local-seo-service` | Service, FAQPage, BreadcrumbList, HowTo |
| `/services/technical-seo` | N/A (404 on live) |

**After deploy:** `/services/technical-seo` should include Service, BreadcrumbList, FAQPage (via `PremiumServiceSchema`).

---

## 10. Page intent checks (live vs approved)

### `/services/seo` (live — pre-deploy content)

- Title targets commercial SEO but **not yet** the approved *SEO Services in India* hub expansion.
- Does not appear to compete aggressively with `/contact-us` on live.
- **After deploy:** Expanded hub content, semantic topics, pillar links to technical/local/international services.

### `/contact-us` (live)

- Title: *Contact SEO India Tech \| Free SEO Consultation*
- H1: *Let's Start a Conversation*
- Enquiry-focused; limited generic India SEO targeting on live.
- **After deploy:** Updated registry title *Contact SEO India Tech \| Free Consultation & Project Enquiry*; links to SEO hub without commercial keyword stuffing.

### `/services/technical-seo` (live)

- **404** — cannot validate until deploy.

### Expected after deploy (`/services/technical-seo`)

| Element | Expected value |
|---------|----------------|
| Title | Technical SEO Services in India \| Technical SEO Company \| SEO India Tech |
| Meta description | Technical SEO services in India: audits, crawlability, Core Web Vitals… |
| Canonical | `https://www.seoindiatech.com/services/technical-seo` |
| H1 | Technical SEO Services That Fix What Blocks Rankings |
| H2/H3 | Editorial blocks, pillars, FAQs (premium template) |
| Schema | Service + BreadcrumbList + FAQPage |
| Internal links | `/services/seo`, technical checklist blog, `/contact-us` |
| CTA | Free audit → `/contact-us` |

---

## 11. Internal-link status

| Scope | Local (ready) | Live (now) |
|-------|---------------|------------|
| Matrix invalid destinations | 0 | N/A |
| technical-seo in matrix | YES | Page 404 |
| international-seo in matrix | YES | Page 404 |
| Broken draft blog links | Removed | Draft still in live sitemap |

---

## 12. Live crawl findings

| Category | Live finding |
|----------|--------------|
| HTTP errors | `/services/technical-seo` 404; `/services/international-seo` 404 |
| Broken links | New service URLs 404 until deploy |
| Redirect chains | `/contactus` single-hop 308 (acceptable functionally) |
| Canonical conflicts | None on indexable 200 pages |
| noindex issues | None on priority URLs |
| Missing metadata | Only on 404 URLs |
| Schema errors | None parsed on 200 priority pages |
| Sitemap mismatches | Live 114 vs codebase 115; draft blog on live only |

---

## 13. Performance status (live)

PageSpeed Insights API returned **429 (rate limited)** during this run. Re-test manually after deploy:

| URL | Mobile | Desktop |
|-----|--------|---------|
| `/services/technical-seo` | Not available (404) | Not available (404) |
| `/services/seo` | Rate limited | — |

**Manual check (after deploy):**

- https://pagespeed.web.dev/analysis?url=https://www.seoindiatech.com/services/technical-seo
- https://pagespeed.web.dev/analysis?url=https://www.seoindiatech.com/services/seo
- https://pagespeed.web.dev/analysis?url=https://www.seoindiatech.com/contact-us

Record LCP, INP, CLS from field data where available (CrUX).

---

## 14. Google Search Console — URLs to submit for indexing

Submit **after successful production deploy** via GSC → URL Inspection → Request indexing.  
Do not use unsupported bulk-indexing methods.

### Priority order

1. https://www.seoindiatech.com/services/technical-seo **(new — highest priority)**
2. https://www.seoindiatech.com/services/seo **(materially updated hub)**
3. https://www.seoindiatech.com/services/international-seo **(page + linking updated)**
4. https://www.seoindiatech.com/services/local-seo-service
5. https://www.seoindiatech.com/contact-us **(only if meta/body changes visible after deploy)**

### Optional follow-up (not urgent)

- https://www.seoindiatech.com/industries/wineries-seo
- https://www.seoindiatech.com/industries/optometrist-seo
- https://www.seoindiatech.com/seo-services/seo-services-in-noida
- https://www.seoindiatech.com/seo-services/seo-services-in-delhi

### After indexing requests

1. Resubmit sitemap in GSC: `https://www.seoindiatech.com/sitemap.xml`
2. Monitor Coverage for excluded draft blog URL removal
3. Monitor Performance for `/contact-us` vs `/services/seo` impression split (4–8 weeks)

---

## 15. Remaining issues

| Issue | Severity | Action |
|-------|----------|--------|
| **Deploy blocked** — no Netlify credentials in agent environment | **BLOCKER** | Deploy via Netlify CLI, dashboard, or git push |
| Live site on old build | **HIGH** | Deploy approved implementation |
| Live sitemap includes draft blog | **MEDIUM** | Fixed in new build — resolves on deploy |
| Live redirects 404 for 4 aliases | **HIGH** | Fixed in `next.config.mjs` — resolves on deploy |
| `/contactus` returns 308 not 301 on live | **LOW** | Verify after deploy; functionally OK |
| PageSpeed API rate limit | **LOW** | Manual PSI after deploy |
| 64 matrix orphan pages | **LOW** | No artificial nav; contextual links only |
| GSC baseline export missing | **MEDIUM** | Upload 28-day Performance export |

---

## 16. Post-deploy acceptance checklist

Re-run after Netlify production deploy:

```bash
npm run build
node scripts/post-deploy-live-validation.mjs
```

Confirm all of the following:

- [ ] 14/14 priority URLs return HTTP 200
- [ ] Sitemap shows **115** URLs including `/services/technical-seo`
- [ ] No draft blog URL in sitemap
- [ ] 5 approved redirects are single-hop permanent (301 or acceptable 308)
- [ ] `/services/technical-seo` title, canonical, H1, Service schema present
- [ ] `/services/seo` shows *SEO Services in India* hub content
- [ ] `/contact-us` enquiry-focused meta (no generic India SEO title)
- [ ] Submit GSC indexing URLs (§14)
- [ ] Run PageSpeed on technical-seo + seo hub + contact

---

*Pre-deployment validation complete. Production deploy pending Netlify authentication. Live validation captured baseline of current (pre-implementation) production.*
