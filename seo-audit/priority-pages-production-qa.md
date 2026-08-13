# Priority Pages + Migration — Production QA

**Date:** 2026-08-13  
**Verdict:** **PASS**  
**Commit:** `d4bf850` — `seo: migration technical fixes and GSC-supported priority pages`  
**Production:** https://www.seoindiatech.com

---

## Technical checks

| Check | Result |
|-------|--------|
| `robots.txt` HTTP 200 | ✅ |
| No `LLMs-Txt:` directive | ✅ |
| Sitemap directive present | ✅ |
| `/llms.txt` HTTP 200 | ✅ |
| Sitemap URL count | ✅ **115** |
| Redirect aliases (301) | ✅ `/contactus`, `/woocommerce-seo`, `/locations/noida` |

---

## 24 priority industry pages

| Check | Result |
|-------|--------|
| HTTP 200 | ✅ all 24 |
| Indexable | ✅ all 24 |
| Self-canonical | ✅ all 24 |

### New title/meta (GSC-supported)

| Page | Live title |
|------|------------|
| movers-and-moving-company-seo | Moving Company SEO Services \| Local & Long-Distance Mover Marketing ✅ |
| flooring-company-seo | Flooring Company SEO Services \| Hardwood, Tile & LVP Marketing ✅ |
| garage-door-seo | Garage Door SEO Services \| Repair & Installation Marketing ✅ |

### Phase 13 protected (unchanged)

| Page | Status |
|------|--------|
| wineries-seo | ✅ Protected title |
| hvac-seo | ✅ Phase 13 title |
| plumber-seo | ✅ Phase 13 title |
| automotive-seo | ✅ Phase 13 title |
| optometrist-seo | ✅ Protected title |

### A-grade overrides (unchanged)

| Page | Status |
|------|--------|
| accountants-seo | ✅ Override title |
| doctor-physician-seo | ✅ Override title |
| plastic-surgery-seo | ✅ Override title |

---

## Locked service pages

Homepage + 6 service hubs — HTTP 200, titles unchanged.

---

## HARD STOP

Production QA complete. **No further SEO changes** until GSC Queries + Pages export and 7/14/30-day monitoring.

**Next:** `GSC Queries+Pages Export → monitoring → Phase 14 decision`

Full JSON: `seo-audit/priority-pages-production-qa.json`
