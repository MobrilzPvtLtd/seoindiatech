# AI Search Monitoring Checklist — SEO India Tech

Operational guide for tracking organic and AI-assisted discovery.  
Crawl permission does **not** guarantee citations or rankings.

## Weekly

- [ ] **Google Search Console** — impressions, clicks, average position for priority URLs
- [ ] **Google Search Console** — indexing report (new errors, excluded pages)
- [ ] **Analytics** — organic landing pages and conversion events (forms, calls)
- [ ] **Analytics** — referral traffic from AI-related sources (filter: `chatgpt`, `perplexity`, `copilot`, `gemini`, `openai`)

## Bi-weekly

- [ ] **Bing Webmaster Tools** — crawl errors and index coverage
- [ ] **Bing Webmaster Tools → AI Performance** (when available on property)
  - Pages cited in AI-generated answers
  - Grounding queries that surfaced your URLs
  - Click/impression trends for cited URLs
- [ ] Manual spot-check: ask 3–5 branded and non-branded questions in ChatGPT Search, Perplexity, and Google AI Mode; note whether site is cited (do not treat as KPI guarantee)

## Monthly

- [ ] Review top 20 service/blog URLs by traffic — confirm Quick Answer block still accurate
- [ ] Review `llms.txt` and `agents.json` for broken URLs after deploys
- [ ] Run `npm run seo:validate-llm` and `npm run seo:audit-links`
- [ ] Compare GSC query themes vs Excel Answer-Style Query Set gaps
- [ ] Document content updates with real date changes only when facts change

## Quarterly

- [ ] Refresh priority answer-first paragraphs if services/pricing/process changed
- [ ] Audit Organization schema vs visible contact/about information
- [ ] Review E-E-A-T pages (who-we-are, author bios, YMYL blogs) for accuracy
- [ ] Re-parse Excel master plan if strategy file updated

## Bing / Copilot setup

1. Verify site in [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Submit sitemap: `https://www.seoindiatech.com/sitemap.xml`
3. Open **AI Performance** report (Bing) when enabled for the property
4. Monitor:
   - **Cited URLs** — which pages appear in Copilot/Bing AI answers
   - **Grounding queries** — queries that triggered your content
   - **Referral traffic** from Bing organic and AI surfaces

## ChatGPT Search / OAI-SearchBot

- `robots.txt` allows `OAI-SearchBot` — supports discovery only
- Track referrals from OpenAI domains in analytics where possible
- Do not block OAI-SearchBot unless business policy requires it
- No separate "AI sitemap" or hidden AI-only content needed

## Google AI Overviews / AI Mode

- No special AI markup required beyond helpful content + valid schema
- Monitor GSC performance for pages with FAQ and Quick Answer sections
- Watch CTR changes on queries that show AI Overviews

## Conversion tracking

Map these events in GA4 (or equivalent):

- Contact form submission (`/contact-us`)
- Click-to-call on `tel:+91-8076676731`
- WhatsApp CTA clicks (if tagged)
- SEO package page → contact funnel

Segment organic vs referral vs AI-referrer conversions monthly.

## KPIs (realistic)

| KPI | Source | Notes |
|-----|--------|-------|
| Indexed URL count | GSC, Bing WMT | Should stay ~113 live URLs |
| Organic clicks / impressions | GSC | Primary growth metric |
| AI cited URLs | Bing AI Performance | When available |
| AI referral sessions | Analytics | Supplementary |
| Leads from organic | CRM / form tags | Business outcome |
| Crawl errors | GSC, Bing, `seo:validate-llm` | Technical health |

## Commands (local QA)

```bash
npm run seo:validate-llm
npm run seo:audit-links
npm run check-sitemap
npm run check-seo
npm run build
```

## What not to do

- Do not claim guaranteed AI citations
- Do not fake review schema or ratings
- Do not publish AI-only hidden text
- Do not refresh `dateModified` without substantive content updates
