# Conversion Tracking Plan

**Date:** 2026-07-30

---

## Funnel Architecture

```
Organic Search (GSC / GA4)
        ↓
Landing Page (page_view + page_type)
        ↓
Engagement (scroll, time — GA4 default)
        ↓
CTA (cta_click)
        ↓
Lead (form_submit | phone_click | whatsapp_click | email_click)
        ↓
Qualified Lead (CRM manual stage — NOT in analytics)
        ↓
Sales Opportunity (CRM)
        ↓
Customer / Revenue (CRM — REVENUE DATA REQUIRED)
```

---

## Conversion Events (dataLayer → GTM → GA4)

| Event | Trigger | Fires On | Parameters (no PII) |
|-------|---------|----------|---------------------|
| `page_view` | Route change / initial load | Every page | page_url, page_type, page_topic, UTM |
| `form_start` | First form focus | Once per form per session | form_name, form_type, service, industry, city |
| `form_submit` | API 200 success only | Confirmed submission | form_name, form_type, page context |
| `form_error` | API failure or validation block | Failed submission | form_name, error_type |
| `phone_click` | Click `tel:` link | Immediate | cta_location, page_type |
| `email_click` | Click `mailto:` link | Immediate | cta_location, page_type |
| `whatsapp_click` | Click wa.me / WhatsApp button | Immediate | cta_location, page_type |
| `cta_click` | Commercial CTA patterns | Click | cta_text, cta_location, destination |

---

## Primary Conversions (Mark in GA4)

| Conversion | Event | Value |
|------------|-------|-------|
| Lead — Form | `form_submit` | Primary |
| Lead — Phone | `phone_click` | Secondary |
| Lead — WhatsApp | `whatsapp_click` | Secondary |
| Lead — Email | `email_click` | Micro |
| CTA Engagement | `cta_click` | Micro |

**Qualified lead** and **revenue** require CRM integration — not automated in Phase 9.

---

## Form Inventory

| form_name | form_type | Pages |
|-----------|-----------|-------|
| hero_contact_form | contact | Homepage |
| faq_contact_form | contact | Homepage |
| contact_form_page | contact | /contact-us |
| contact_form_section | contact | Service/solution pages |
| seo_service_form | service_inquiry | /services/seo |
| ppc_form | service_inquiry | PPC pages |
| uiux_form | service_inquiry | UI/UX page |
| digital_branding_form | service_inquiry | Digital branding |
| design_development_form | service_inquiry | Design & development |

---

## Attribution Model

| Touch | Storage | Fields |
|-------|---------|--------|
| Session | sessionStorage | landing_page, utm_*, referrer |
| First touch | localStorage | Same — persists across sessions |

Attached to all events via `getAttributionParams()`.

**CRM enhancement (optional):** Include UTM + landing page in admin notification email — do not add to analytics.

---

## GTM Configuration Required

Create in GTM UI (EXTERNAL ACTION REQUIRED):

1. **Trigger:** Custom Event = `form_submit` → GA4 Event tag (mark conversion)
2. **Trigger:** Custom Event = `phone_click` → GA4 Event tag
3. **Trigger:** Custom Event = `whatsapp_click` → GA4 Event tag
4. **Trigger:** Custom Event = `cta_click` → GA4 Event tag
5. **Variable:** Data Layer variables for all event parameters
6. **GA4 Configuration tag:** Ensure SPA page_view via dataLayer or Enhanced Measurement

---

## Privacy Rules

- NEVER send name, email, phone, message, or form answers to analytics
- NEVER send phone numbers or email addresses as event parameters
- Form submit fires only after `response.ok` from `/api/submit-form`

---

## Revenue

**REVENUE DATA REQUIRED** — no revenue tracking in codebase.

If CRM provides deal value later:
- Organic Revenue = deals where first_touch_source = organic
- Define methodology before reporting
