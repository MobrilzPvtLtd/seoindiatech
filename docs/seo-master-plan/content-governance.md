# Content Governance — SEO India Tech

Rules for all future content creation, updates, and AI-assisted workflows.

---

## 1. Search Intent First

- Every URL serves **one primary intent** (informational, commercial, navigational, or local)
- Title, H1, and opening paragraph must align with that intent
- Do not target multiple unrelated keywords on one page

## 2. Original Information

- Add genuine expertise, examples, and process detail from the business
- Do not republish competitor content or generic AI filler
- Update `dateModified` when materially changing a page

## 3. Human Editorial Review

- All published content requires human review before go-live
- AI-assisted drafts must be fact-checked, edited for voice, and stripped of unsupported claims
- YMYL topics (health, legal, finance) require qualified reviewer sign-off

## 4. Accurate Claims

- No invented statistics, clients, awards, certifications, case studies, or results
- Testimonials require client permission and accurate attribution
- Market or regulatory claims need cited sources

## 5. Natural Keyword Use

- Primary topic in title, H1, and first section where natural
- Secondary and semantic terms in relevant sections only
- **No keyword stuffing** or density targets

## 6. Internal Linking

- Follow Excel internal linking matrix and Phase 2 architecture
- Add links only when contextually relevant
- Respect per-page link caps by page type
- Pillar pages ↔ supporting content ↔ commercial destinations

## 7. Author Transparency

- Blog posts display author name and publication date
- Author bios must reflect verifiable experience
- Add `reviewedBy` for YMYL when applicable

## 8. Source Verification

- Link to primary sources for algorithm updates, regulations, and data
- Flag missing sources in `content-information-needed.md` rather than guessing

## 9. AI-Assisted Content Review

- AI tools may draft outlines or first passes
- Final content must pass: originality check, fact check, intent check, link check
- Run `npm run check-seo` and `npm run seo:validate-llm` before deploy

## 10. Prohibited Practices

- No keyword stuffing
- No fake claims or fabricated E-E-A-T
- No mass-produced doorway pages (especially city/industry clones)
- No publishing pages without sitemap/SEO head review
- No FAQ schema unless FAQs are visible, accurate, and valid

## 11. Page Length

- Length should satisfy intent — not arbitrary word counts
- Do not pad with generic paragraphs to hit 1000/1500/2000 words

## 12. Consolidation Rules

- Before MERGE or REDIRECT: document in `content-cannibalization.md` and get approval
- Prefer differentiating intent over consolidating URLs when both can rank for distinct queries

## 13. New Content Workflow

1. Check Excel master plan and cluster map (`topic-clusters.md`)
2. Confirm URL is not duplicating existing intent
3. Draft with answer-first opening where appropriate
4. Add internal links from matrix
5. QA: headings, meta, links, schema, build
6. Update audit docs if material

## 14. City & Industry Pages

- Minimum: industry-specific challenges, terminology, and conversion context
- City pages: use factual local data from `locations.js` — do not invent landmarks or statistics
- Flag pages lacking unique local info for review

## 15. Commercial Conversion

- Service pages: one primary CTA (consultation/contact) + optional secondary (packages)
- Blogs: contextual transition to relevant service — not aggressive repeated selling

---

**Owner:** SEO / Content team  
**Review cycle:** Quarterly audit against `content-audit.md`
