# Keyword → URL Mapping — SEO India Tech

**Site:** https://www.seoindiatech.com  
**Date:** 2026-08-11  
**Implementation:** Complete — see [SEO-IMPLEMENTATION-REPORT.md](docs/seo-master-plan/SEO-IMPLEMENTATION-REPORT.md)

**Related:** [SEO-AUDIT.md](./SEO-AUDIT.md) · [IMPLEMENTATION-PLAN.md](docs/seo-master-plan/IMPLEMENTATION-PLAN.md)

---

## Architecture summary

| Role | Canonical URL | Alias URLs (301 → canonical) |
|------|---------------|------------------------------|
| Primary India SEO commercial hub | `/services/seo` | — |
| Technical SEO commercial | `/services/technical-seo` | — (live) |
| Local SEO India | `/services/local-seo-service` | — |
| Content marketing India | `/services/content-marketing` | — |
| Social media marketing India | `/services/social-media-marketing` | — |
| WooCommerce / e-commerce SEO | `/services/e-commerce-seo` | `/services/woocommerce-seo` |
| International SEO | `/services/international-seo` | — |
| SEO web design | `/services/ui-ux-design` | `/services/seo-web-design` |
| Winery SEO | `/industries/wineries-seo` | — |
| Optometrist SEO | `/industries/optometrist-seo` | — |
| Noida Sector 63 | `/seo-services/seo-services-in-noida` | `/locations/noida` |
| Delhi SEO | `/seo-services/seo-services-in-delhi` | `/locations/delhi` |
| Contact (not SEO commercial) | `/contact-us` | `/contactus` → `/contact-us` |

**Not creating:** `/locations/*` as primary URLs, duplicate winery/optometrist pages, or per-keyword service pages.

---

## Full mapping table

| Keyword | Search intent | Primary URL | Existing URL today | Action | Priority |
|---------|---------------|-------------|-------------------|--------|----------|
| seo india | Commercial — hire SEO in India | `/services/seo` | `/services/seo` | **EXPAND** hub content + internal links | P0 |
| seo in india | Commercial | `/services/seo` | `/services/seo` | **EXPAND** | P0 |
| india seo | Commercial | `/services/seo` | `/services/seo` | **EXPAND** | P0 |
| seo agency india | Commercial | `/services/seo` | `/services/seo` | **EXPAND**; de-cannibalize contact | P0 |
| seo agency in india | Commercial | `/services/seo` | `/services/seo` | **EXPAND** | P0 |
| indian seo agency | Commercial | `/services/seo` | `/services/seo` | **EXPAND** | P0 |
| seo services india | Commercial | `/services/seo` | `/services/seo` | **EXPAND**; align title/H1 | P0 |
| seo india services | Commercial | `/services/seo` | `/services/seo` | **EXPAND** | P0 |
| india seo services | Commercial | `/services/seo` | `/services/seo` | **EXPAND** | P0 |
| indian seo services | Commercial | `/services/seo` | `/services/seo` | **EXPAND** | P0 |
| seo india company | Commercial | `/services/seo` | `/services/seo` | **EXPAND** | P0 |
| india seo company | Commercial | `/services/seo` | `/services/seo` | **EXPAND** | P0 |
| indian seo company | Commercial | `/services/seo` | `/services/seo` | **EXPAND**; contact cannibalization fix | P0 |
| seo firm india | Commercial | `/services/seo` | `/services/seo` | **EXPAND** | P0 |
| india seo firm | Commercial | `/services/seo` | `/services/seo` | **EXPAND** | P0 |
| professional seo india | Commercial | `/services/seo` | `/services/seo` | **EXPAND** | P0 |
| professional seo services india | Commercial | `/services/seo` | `/services/seo` | **EXPAND** | P1 |
| seo consultant india | Commercial | `/services/seo` | `/services/seo` | **EXPAND** | P1 |
| seo consulting services india | Commercial | `/services/seo` | `/services/seo` | **EXPAND** | P1 |
| search engine optimization india | Commercial | `/services/seo` | `/services/seo` | **EXPAND** | P0 |
| search engine optimization services in india | Commercial | `/services/seo` | `/services/seo` | **EXPAND** | P0 |
| search engine optimisation india | Commercial | `/services/seo` | `/services/seo` | **EXPAND** | P1 |
| seo marketing india | Commercial — SEO as marketing channel | `/services/seo` | `/` + `/services/seo` overlap | **MAP** to hub; reduce homepage commercial overlap | P0 |
| seo marketing in india | Commercial | `/services/seo` | `/` + `/services/seo` overlap | **MAP** to hub | P0 |
| technical seo services india | Commercial — technical SEO service | `/services/technical-seo` | **None** (blog only) | **CREATE** page + metadata | P0 |
| technical seo company india | Commercial | `/services/technical-seo` | **None** | **CREATE** | P0 |
| technical seo agency india | Commercial | `/services/technical-seo` | **None** | **CREATE** | P0 |
| technical seo consultant india | Commercial | `/services/technical-seo` | **None** | **CREATE** | P1 |
| technical seo services | Commercial (generic) | `/services/technical-seo` | **None** | **CREATE**; India context on page | P1 |
| local seo india | Commercial — local SEO | `/services/local-seo-service` | `/services/local-seo-service` | **KEEP**; verify metadata | P1 |
| local seo services | Commercial | `/services/local-seo-service` | `/services/local-seo-service` | **KEEP**; link from SEO hub | P1 |
| local seo services in india | Commercial | `/services/local-seo-service` | `/services/local-seo-service` | **KEEP** | P1 |
| local seo company india | Commercial | `/services/local-seo-service` | `/services/local-seo-service` | **KEEP** | P1 |
| local seo agency india | Commercial | `/services/local-seo-service` | `/services/local-seo-service` | **KEEP** | P2 |
| content marketing services india | Commercial | `/services/content-marketing` | `/services/content-marketing` | **KEEP** metadata | P2 |
| content marketing services in india | Commercial | `/services/content-marketing` | `/services/content-marketing` | **KEEP** | P2 |
| social media marketing in india | Commercial | `/services/social-media-marketing` | `/services/social-media-marketing` | **KEEP** | P2 |
| social media marketing service in india | Commercial | `/services/social-media-marketing` | `/services/social-media-marketing` | **KEEP** | P2 |
| woocommerce seo agency in india | Commercial — store SEO | `/services/e-commerce-seo` | `/services/e-commerce-seo` | **KEEP**; alias `/services/woocommerce-seo` 301 | P2 |
| international seo agency india | Commercial — export markets | `/services/international-seo` | `/services/international-seo` | **LINK** from SEO hub + matrix | P1 |
| international seo services india | Commercial | `/services/international-seo` | `/services/international-seo` | **LINK** + metadata tweak | P2 |
| seo website design company in india | Commercial — SEO + design | `/services/ui-ux-design` | `/services/ui-ux-design` | **KEEP**; alias `/services/seo-web-design` 301 | P2 |
| web design seo company india | Commercial | `/services/ui-ux-design` | `/services/ui-ux-design` | **KEEP** | P2 |
| seo for wineries | Industry commercial | `/industries/wineries-seo` | `/industries/wineries-seo` | **EXPAND** topical sections | P2 |
| winery seo | Industry commercial | `/industries/wineries-seo` | `/industries/wineries-seo` | **EXPAND** | P2 |
| seo wineries | Industry commercial | `/industries/wineries-seo` | `/industries/wineries-seo` | **EXPAND** | P2 |
| search engine optimization for wineries | Industry commercial | `/industries/wineries-seo` | `/industries/wineries-seo` | **EXPAND** | P2 |
| seo for optometrists | Industry commercial | `/industries/optometrist-seo` | `/industries/optometrist-seo` | **EXPAND** topical sections | P2 |
| optometrist seo | Industry commercial | `/industries/optometrist-seo` | `/industries/optometrist-seo` | **EXPAND** | P2 |
| eye care seo | Industry commercial | `/industries/optometrist-seo` | `/industries/optometrist-seo` | **EXPAND** | P2 |
| seo company noida sector 63 | Local commercial | `/seo-services/seo-services-in-noida` | `/seo-services/seo-services-in-noida` | **ENHANCE** meta + local uniqueness | P2 |
| seo company in noida sector 63 | Local commercial | `/seo-services/seo-services-in-noida` | same | **ENHANCE** | P2 |
| indian seo company in delhi | Local commercial | `/seo-services/seo-services-in-delhi` | `/seo-services/seo-services-in-delhi` | **ENHANCE** meta | P2 |
| search engine optimization services delhi | Local commercial | `/seo-services/seo-services-in-delhi` | same | **ENHANCE** | P2 |
| seo company delhi / seo services delhi | Local commercial | `/seo-services/seo-services-in-delhi` | same | **ENHANCE** body where factual | P2 |
| contact seo india tech | Contact / enquiry | `/contact-us` | `/contact-us` | **KEEP** indexable; contact-focused meta | P1 |
| seo india (on contact page) | **Misaligned** — cannibalization | `/services/seo` | `/contact-us` (GSC) | **DE-TARGET** on contact; link to hub | P0 |

---

## Informational keywords (supporting content → commercial bridge)

| Keyword / topic | Intent | Primary URL | Existing URL | Action | Priority |
|-----------------|--------|-------------|--------------|--------|----------|
| technical seo checklist | Informational | `/blog/technical-seo-checklist-enterprise-websites` | Blog exists | **LINK** to `/services/technical-seo` after create | P2 |
| how to choose seo agency india | Informational → commercial | `/blog/how-to-choose-best-seo-agency-india` | Blog exists | **EXPAND** + link to `/services/seo` | P2 |
| local seo guide india | Informational | `/blog/local-seo-guide-indian-businesses-2026` | Blog exists | Link to `/services/local-seo-service` | P3 |
| ecommerce seo checklist india | Informational | `/blog/ecommerce-seo-checklist-india` | Blog exists | Link to `/services/e-commerce-seo` | P3 |

**Do not optimize:** Europe-only blog queries unless GSC shows India business value (Category E in query classification).

---

## Pages that must NOT be primary targets for commercial SEO

| URL | Role | Action |
|-----|------|--------|
| `/contact-us` | Contact, consultation, address, form | Contact-focused SEO only |
| `/contactus` | Legacy alias | 301 → `/contact-us` (existing) |
| `/` | Brand + overview | Link to `/services/seo`; avoid competing titles |
| `/blog/*` | Informational | Contextual links to service pages only |
| Other `/seo-services/*` cities | Local (11 cities) | Keep only if strategically valuable; no mass new cities |

---

## Priority legend

| Priority | Meaning |
|----------|---------|
| **P0** | GSC striking-distance commercial terms; implement first |
| **P1** | Strong commercial support clusters |
| **P2** | Service/industry/local depth and linking |
| **P3** | Blog bridges and long-tail informational |

---

*Awaiting approval before implementation. See [IMPLEMENTATION-PLAN.md](docs/seo-master-plan/IMPLEMENTATION-PLAN.md) for file and redirect lists.*
