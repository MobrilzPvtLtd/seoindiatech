# LLM Content Audit — SEO India Tech

Generated during Phase 4 (LLM / AI Search Optimization).  
This is a governance log—not a full content rewrite backlog.

## Summary

| Severity | Count | Action in Phase 4 |
|----------|-------|-------------------|
| Critical | 1 | Fixed |
| High | 4 | Flagged / partial |
| Medium | 6 | Flagged |
| Low | 5 | Flagged |

---

## Critical

| URL / Area | Issue | Recommendation | Status |
|------------|-------|----------------|--------|
| Organization schema (`utils/aiSeo.js`) | Unverified `aggregateRating` (4.9 / 120 reviews) injected into JSON-LD | Remove unless backed by verifiable third-party review data on-page | **Fixed** — removed |

---

## High

| URL / Area | Issue | Recommendation | Status |
|------------|-------|----------------|--------|
| Premium service pages | Testimonial names/quotes appear illustrative; not linked to verifiable case studies | Replace with verified client stories or label as anonymized examples | **Not fixed** — requires client approval |
| `/blog/seo-healthcare-businesses-europe` | YMYL healthcare topic; author credentials not independently verifiable in codebase | Author/reviewer information required with real credentials | **Not fixed** — report only |
| `/blog/seo-law-firms-complete-guide` | Legal YMYL topic; no licensed reviewer attribution | Author/reviewer information required | **Not fixed** — report only |
| `public/agent-instructions.md` | States "10+ FAQs per article" — not true for all posts | Soften to "FAQ sections where appropriate" | **Deferred** — minor doc tweak in Phase 5 |

---

## Medium

| URL / Area | Issue | Recommendation | Status |
|------------|-------|----------------|--------|
| Legacy blogs (9) | No `answerFirst` block; weaker AI-parseable intro | Add selective quick answers only where high value | **Partial** — premium blogs only |
| Service `toolsTrust.certifications` | Third-party certification claims (Google Ads Certified, etc.) | Verify team holds certs or remove from visible copy | **Not fixed** — needs HR verification |
| Service `toolsTrust.awards` | "Top SEO Agency India (Clutch)" etc. | Link to live profile or remove | **Not fixed** |
| Generic service `geoAnswer` | Some leaf services still use template definition | Custom definitions added for 9 priority services | **Partial** |
| Homepage schema FAQ | Large FAQPage on homepage — ensure answers match visible FAQ | Audit visible FAQ parity | **OK** — matches `FAQAndContact` |
| Blog author (`utils/blog/blogAuthor.js`) | Single author for all premium posts | Confirm Rahul Sharma bio is accurate and approved | **Author/reviewer information required** if unverified |

---

## Low

| URL / Area | Issue | Recommendation | Status |
|------------|-------|----------------|--------|
| Industry pages | Answer block exists in `whySeoMatters` but below hero | `answerFirst` added for services/hubs; industries use existing GeoQuickAnswer | **Acceptable** |
| City pages | No dedicated answer-first block | Add only if local intent queries justify it | **Deferred** |
| Image ALT on generated SVG heroes | Decorative; ALT is title-based | Adequate for current SVG heroes | **OK** |
| `BlogSection.js` (old home) | Placeholder author "John Doe" | Remove or replace with real author | **Not fixed** — legacy component |
| Missing blog in Excel plan | `/blog/google-core-update-may-2026...` | Do not create until content approved | **Intentionally skipped** |

---

## AI language patterns spotted (no mass rewrite)

- Repetitive "SEO India Tech delivers..." openings on generated service editorial blocks
- Template case study metrics (+186%, +172%) repeated across services
- Generic comparison table rows shared across service types

**Recommendation:** Refresh with real client metrics in a future content phase—not automated replacement.

---

## Phase 4 fixes applied

1. Removed unverified Organization `aggregateRating` from schema helper
2. Added crawlable Quick Answer blocks (`answerFirst`) after hero on premium service/hub pages
3. Added Quick Answer blocks to 10 priority premium blogs
4. Improved `llms.txt` structure (About, Core Services, Industries, Resources, Contact)
5. Updated `agents.json` with `sameAs` and disclaimer
6. Added `Bingbot` and confirmed `OAI-SearchBot` in `robots.txt`
7. Added table rendering in `PremiumBlogArticle` for comparison content
8. Aligned Organization `sameAs` URLs in `siteConfig.js`

---

## Author / reviewer information required

The following need human verification before adding credentials to schema or bylines:

- Premium blog author: Rahul Sharma — confirm role, bio, and image rights
- Healthcare blog: licensed medical reviewer (if YMYL claims are made)
- Law firm blog: legal reviewer (if practice-area advice is asserted)
- Service testimonials: verify or anonymize

Do **not** invent credentials.
