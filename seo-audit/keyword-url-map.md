# Keyword → URL Mapping — SEO India Tech (Phase 2)

**Site:** https://www.seoindiatech.com  
**Date:** 2026-08-12  
**Rule:** One primary search intent → one primary canonical URL. No duplicate pages. No automatic page creation.

**GSC context:** ~28.3K impressions · 67 clicks · 0.2% CTR · avg. position 43.7

---

## Architecture summary

| Role | Canonical URL | Alias (301 only) |
|------|----------------|------------------|
| Homepage — company/agency brand | `/` | — |
| India commercial SEO hub | `/services/seo` | — |
| Technical SEO India | `/services/technical-seo` | — |
| Local SEO | `/services/local-seo-service` | — |
| E-commerce / WooCommerce SEO India | `/services/e-commerce-seo` | `/services/woocommerce-seo` |
| International SEO | `/services/international-seo` | — |
| Wineries industry | `/industries/wineries-seo` | — |
| Optometrist industry | `/industries/optometrist-seo` | — |
| Accountants industry | `/industries/accountants-seo` | — |
| Doctor/Physician industry | `/industries/doctor-physician-seo` | — |
| Contact / enquiry | `/contact-us` | `/contactus` |
| SEO packages (pricing intent) | `/seo-packages` | — |

**Do not create:** duplicate winery pages, duplicate India SEO landing pages, or new city pages for this phase.

---

## Primary keyword mapping

### Homepage — `/`

| Role | Keyword | Intent |
|------|---------|--------|
| **Primary** | SEO Company India | Commercial — hire an Indian SEO company |
| Secondary | SEO Agency India | Commercial |
| Secondary | SEO Services India | Commercial (supporting — hub is primary for this phrase) |
| Secondary | SEO Company | Commercial (generic) |
| Secondary | SEO Agency | Commercial (generic) |

**On-page role:** Brand + company positioning, trust, overview of services, CTA to `/services/seo` for deep commercial intent.

---

### SEO Services — `/services/seo`

| Role | Keyword | Intent |
|------|---------|--------|
| **Primary** | SEO Services India | Commercial — full-service SEO programs in India |
| Secondary | SEO Services in India | Commercial (variant) |
| Secondary | SEO India / SEO in India / India SEO | Commercial (India cluster) |
| Secondary | SEO Agency in India / Indian SEO Agency | Commercial |
| Secondary | Indian SEO Company / SEO India Company | Commercial |
| Secondary | SEO marketing India / SEO marketing in India | Commercial — SEO as growth channel |
| Secondary | Professional SEO services India | Commercial |
| Secondary | Search engine optimization services in India | Commercial |

**On-page role:** Primary money page for India SEO service intent. Child links to technical, local, ecommerce, international, industries.

---

### Technical SEO — `/services/technical-seo`

| Role | Keyword | Intent |
|------|---------|--------|
| **Primary** | Technical SEO Services India | Commercial — technical SEO agency/company |
| Secondary | Technical SEO Company India | Commercial |
| Secondary | Technical SEO Agency India | Commercial |
| Secondary | Technical SEO Consultant India | Commercial |
| Secondary | Technical SEO Services | Commercial (generic; India context on page) |

**Supporting content (informational):** `/blog/technical-seo-checklist-enterprise-websites` → links to this URL, does not compete.

---

### Local SEO — `/services/local-seo-service`

| Role | Keyword | Intent |
|------|---------|--------|
| **Primary** | Local SEO Services | Commercial — local/map/GBP programs |
| Secondary | Local SEO India | Commercial |
| Secondary | Local SEO Services in India | Commercial |
| Secondary | Local SEO Company India | Commercial |
| Secondary | Local SEO Agency India | Commercial |

**Note:** City pages (`/seo-services/*`) support geo modifiers; they must not replace this as the primary *local SEO services* URL.

---

### E-commerce SEO — `/services/e-commerce-seo`

| Role | Keyword | Intent |
|------|---------|--------|
| **Primary** | Ecommerce SEO Agency in India | Commercial — online store SEO |
| Secondary | WooCommerce SEO Agency in India | Commercial (alias URL 301s here) |
| Secondary | Ecommerce SEO Services | Commercial |
| Secondary | Product SEO / category SEO | Commercial (on-page topics) |

---

### Wineries — `/industries/wineries-seo`

| Role | Keyword | Intent |
|------|---------|--------|
| **Primary** | SEO for Wineries | Industry commercial |
| Secondary | Winery SEO | Industry commercial |
| Secondary | Search engine optimization for wineries | Industry commercial (long-tail) |

**GSC note:** Page already receives impressions — **preserve URL**, improve content depth. **Do not create a second winery page.**

---

### Optometrist — `/industries/optometrist-seo`

| Role | Keyword | Intent |
|------|---------|--------|
| **Primary** | Optometrist SEO | Industry commercial |
| Secondary | SEO for Optometrists | Industry commercial |
| Secondary | Eye Care SEO | Industry commercial |

---

### Accountants — `/industries/accountants-seo`

| Role | Keyword | Intent |
|------|---------|--------|
| **Primary** | Accountants SEO | Industry commercial |
| Secondary | SEO for Accountants | Industry commercial |
| Secondary | Accounting Firm SEO | Industry commercial |

---

### Doctor / Physician — `/industries/doctor-physician-seo`

| Role | Keyword | Intent |
|------|---------|--------|
| **Primary** | Doctor SEO / Physician SEO | Industry commercial |
| Secondary | SEO for Doctors | Industry commercial |
| Secondary | Doctor Physician SEO | Industry commercial (URL slug match) |

---

## Contact page — `/contact-us`

| Role | Keywords | Intent |
|------|----------|--------|
| **Primary** | Contact SEO India Tech / consultation enquiry | Navigational + conversion |
| **Not primary for** | SEO Company India, SEO Agency India, SEO Services India | Commercial hire intent |

**GSC note:** Contact has significant impressions. **Do not remove or noindex.** Keep enquiry-focused title/meta/H1; link prominently to `/services/seo`.

---

## Cannibalisation analysis

| Keyword cluster | Competing URLs today | Risk | Resolution |
|-----------------|----------------------|------|------------|
| SEO Company India / SEO Agency India | `/` vs `/services/seo` vs `/contact-us` (GSC) | **HIGH** | Homepage = company brand; `/services/seo` = services depth; contact = enquiry only |
| SEO Services India | `/` vs `/services/seo` | **HIGH** | `/services/seo` primary; homepage secondary mention + clear CTA |
| SEO marketing India | `/` vs `/services/seo` | **MEDIUM** | Hub semantic section; homepage avoids heavy commercial targeting |
| Technical SEO India | `/services/technical-seo` vs technical blog | **LOW** | Blog informational → service page |
| Local SEO Services | `/services/local-seo-service` vs city pages | **MEDIUM** | Service page primary; cities for geo modifiers only |
| SEO for Wineries / Winery SEO | `/industries/wineries-seo` only | **LOW** | Single URL — maintain |
| WooCommerce SEO | `/services/e-commerce-seo` only | **LOW** | 301 alias consolidates |
| Optometrist / Accountants / Doctor SEO | Each single industry URL | **LOW** | No duplicates |

---

## Content gaps (no new page without approval)

| Keyword / intent | Status | Recommendation |
|------------------|--------|----------------|
| Generic "SEO consultant India" (standalone) | Partially covered by `/services/seo` | Expand hub FAQ/copy — not a new URL |
| "Best SEO company India" | No dedicated page | Map to `/services/seo` or homepage trust section — **CONTENT GAP** (copy only) |
| Europe-focused blog keywords | Many `/blog/*` Europe URLs | Classify in GSC; do not auto-create India duplicates |
| Individual city SEO (e.g. Mumbai) | `/seo-services/seo-services-in-mumbai` exists | Monitor GSC per city before expanding |

---

## Internal link direction (planned — Phase 8)

```
Homepage (SEO Company India)
  → /services/seo (SEO Services India)
    → /services/technical-seo
    → /services/local-seo-service
    → /services/e-commerce-seo
    → /industries/wineries-seo (and other priority industries)
  → /contact-us (enquiry)
```

Industry pages → link back to `/services/seo` + relevant service (local, ecommerce, technical).

Blogs → link to primary commercial URL for the topic cluster.

---

## Mapping table (quick reference)

| Keyword | Primary URL | Action |
|---------|-------------|--------|
| SEO Company India | `/` | Optimize homepage (Phase 4) |
| SEO Agency India | `/` (secondary) + `/services/seo` (services) | Split intent |
| SEO Services India | `/services/seo` | Maintain hub |
| Technical SEO Services India | `/services/technical-seo` | Maintain |
| Local SEO Services | `/services/local-seo-service` | Maintain |
| Ecommerce SEO Agency in India | `/services/e-commerce-seo` | Maintain |
| SEO for Wineries | `/industries/wineries-seo` | Improve — has rankings |
| Winery SEO | `/industries/wineries-seo` | Same URL |
| Optometrist SEO | `/industries/optometrist-seo` | Improve |
| Accountants SEO | `/industries/accountants-seo` | Improve |
| Doctor/Physician SEO | `/industries/doctor-physician-seo` | Improve |

---

*Phase 2 complete. No new pages created. No code modified. Ready for Phase 3 technical implementation when approved.*
