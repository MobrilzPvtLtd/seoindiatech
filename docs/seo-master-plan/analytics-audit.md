# Analytics Audit — SEO India Tech

**Date:** 2026-07-30  
**Scope:** Full codebase inspection before Phase 9 implementation

---

## Summary Table

| Platform | Current Status | Implementation Location | Tracking ID | Events | Problems | Recommended Action | Status |
|----------|---------------|----------------------|-------------|--------|----------|-------------------|--------|
| Google Tag Manager | IMPLEMENTED | `component/tracking/DeferredGtm.js`, `pages/_document.js` | `GTM-5TS8QJRM` | Deferred load; dataLayer init | Tags/triggers not visible in codebase (GTM UI) | Configure GA4 + conversion tags in GTM UI | PARTIALLY IMPLEMENTED |
| Google Analytics 4 | PARTIALLY IMPLEMENTED | Via GTM (not direct in code) | **GA4_MEASUREMENT_ID_REQUIRED** (not in repo) | page_view expected via GTM | Measurement ID not in codebase; cannot verify duplicate | Confirm GA4 tag in GTM container; do not add second instance | EXTERNAL ACCESS REQUIRED |
| Google Search Console | PARTIALLY IMPLEMENTED | `pages/_app.js` meta verification | `6LOvsWkwZXmF9nBv1EGKFzR6P5TPlBpXXlR28WZxqH0` | N/A (external) | No API connection in codebase | Submit sitemap; monitor in GSC UI | EXTERNAL ACCESS REQUIRED |
| Bing Webmaster Tools | NOT IMPLEMENTED | — | — | — | No `msvalidate` meta tag found | Add verification meta after Bing account setup | EXTERNAL ACCESS REQUIRED |
| Meta Pixel | NOT APPLICABLE (in code) | Possibly GTM-managed | Unknown | Unknown | No `fbq` in source | Verify in GTM only if business uses Meta ads | EXTERNAL ACCESS REQUIRED |
| LinkedIn Insight Tag | NOT APPLICABLE (in code) | Possibly GTM-managed | Unknown | Unknown | No direct tag in source | Verify in GTM if used | EXTERNAL ACCESS REQUIRED |
| Pinterest Domain Verify | IMPLEMENTED | `pages/_document.js` | `0c89be4ab18144828edff9618257a5a3` | N/A | Not an analytics platform | Keep as-is | IMPLEMENTED |
| Cookie / Consent | NOT IMPLEMENTED | — | — | — | No consent banner or Consent Mode in code | Configure Consent Mode in GTM if EU traffic requires | EXTERNAL ACTION REQUIRED |
| Form Tracking | IMPLEMENTED (Phase 9) | 9 form components + `hooks/useFormTracking.js` | dataLayer events | `form_start`, `form_submit`, `form_error` | GTM must map events to GA4 | Create GTM triggers for dataLayer events | IMPLEMENTED |
| Phone Tracking | IMPLEMENTED (Phase 9) | `component/tracking/AnalyticsProvider.js` | dataLayer | `phone_click` | Delegated click on `tel:` links | Map in GTM | IMPLEMENTED |
| Email Tracking | IMPLEMENTED (Phase 9) | `AnalyticsProvider.js` | dataLayer | `email_click` | Delegated click on `mailto:` links | Map in GTM | IMPLEMENTED |
| WhatsApp Tracking | IMPLEMENTED (Phase 9) | `AnalyticsProvider.js`, `component/ui/WhatsAppButton.js` | dataLayer | `whatsapp_click` | Floating button + wa.me links | Map in GTM | IMPLEMENTED |
| CTA Tracking | IMPLEMENTED (Phase 9) | `AnalyticsProvider.js` | dataLayer | `cta_click` | Pattern-based; not every link | Map in GTM; review CTA patterns quarterly | IMPLEMENTED |
| CRM Integration | IMPLEMENTED | `pages/api/submit-form.js`, `utils/sendEmail.js` | SMTP env vars | Email to admin + user | No CRM API; email only | Preserve; add UTM to email template optionally | IMPLEMENTED |
| UTM Handling | IMPLEMENTED (Phase 9) | `utils/analytics/attribution.js` | sessionStorage + localStorage | First-touch + session attribution | No server-side persistence | Pass to CRM email template if needed | IMPLEMENTED |
| Thank-you Pages | NOT IMPLEMENTED | — | — | — | Forms use toast, no redirect | Optional thank-you page for clearer conversion | NOT IMPLEMENTED |
| Server-side Conversions | NOT IMPLEMENTED | — | — | — | Client-side dataLayer only | Consider server GTM if needed later | NOT IMPLEMENTED |

---

## Detailed Findings

### Google Tag Manager

- **Container:** `GTM-5TS8QJRM`
- **Load strategy:** Deferred until user interaction or 10s idle (`DeferredGtm.js`) — good for INP
- **noscript fallback:** Present in `_document.js`
- **Duplicate risk:** No direct `gtag.js` or second GTM container in codebase — **PASS**

### Google Analytics 4

- No `G-XXXXXXXX` measurement ID in repository
- GA4 is expected to be configured **inside GTM**
- Phase 9 adds `page_view` and custom events to `dataLayer` — GTM must forward to GA4
- **Do not** add a second GA4 snippet to the site

### Google Search Console

- Site verification meta tag present
- Sitemap: `https://www.seoindiatech.com/sitemap.xml` (113 URLs)
- robots.txt allows crawlers; blocks `/new`, `/old`, `/api/`
- **No Search Console API** integration in codebase

### Bing Webmaster

- No Bing verification meta tag
- **BING_ACCESS_REQUIRED** for setup and AI Performance data

### Forms Audited

| Form | Location | API | Events (Phase 9) |
|------|----------|-----|------------------|
| `hero_contact_form` | Homepage hero | `/api/submit-form` | form_start, form_submit, form_error |
| `faq_contact_form` | Homepage FAQ section | `/api/submit-form` | form_start, form_submit, form_error |
| `contact_form_page` | `/contact-us` | `/api/submit-form` | form_start, form_submit, form_error |
| `contact_form_section` | Reusable section | `/api/submit-form` | form_start, form_submit, form_error |
| `seo_service_form` | SEO service page | `/api/submit-form` | form_start, form_submit, form_error |
| `ppc_form` | PPC page | `/api/submit-form` | form_start, form_submit, form_error |
| `uiux_form` | UI/UX page | `/api/submit-form` | form_start, form_submit, form_error |
| `digital_branding_form` | Digital branding page | `/api/submit-form` | form_start, form_submit, form_error |
| `design_development_form` | Design & development page | `/api/submit-form` | form_start, form_submit, form_error |

**Privacy:** Form field values are never sent to analytics — only `form_name`, `form_type`, `page_type`, `page_url`, and contextual service/industry/city.

### Phone / Email / WhatsApp

| Type | Primary Number/Email | Locations |
|------|---------------------|-----------|
| Phone | `+91-8076676731` | TopContactBar, Footer, PreFooterBand, premium pages, contact page |
| Email | `sales@seoindiatech.com` | Footer, contact page, premium pages |
| WhatsApp | `918076676731` | Floating button (`WhatsAppButton.js`) |

**Note:** `component/home/CTABanner.js` contains `tel:+919876543210` — verify if placeholder; flag for business review.

### Development Environment

- GTM loads on all environments when triggered
- **Recommendation:** Use GTM environment preview or separate container for staging

---

## Phase 9 Changes

| Item | Action |
|------|--------|
| `AnalyticsProvider` | Route page_view + delegated click tracking |
| `useFormTracking` | 9 forms instrumented |
| `utils/analytics/*` | Page type, attribution, events |
| `scripts/analytics-health-check.mjs` | Static health validation |
| `scripts/seo-performance-audit.mjs` | Landing page report structure |

---

## External Setup Required

1. Confirm GA4 Measurement ID in GTM and map dataLayer events
2. Google Search Console — verify property, submit sitemap, connect Looker/exports
3. Bing Webmaster Tools — verify site, submit sitemap
4. Consent Mode in GTM if required for GDPR
5. Configure GTM conversion tags for: `form_submit`, `phone_click`, `whatsapp_click`, `cta_click`
