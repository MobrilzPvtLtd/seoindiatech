/**
 * Assembles premium blog topic data into the same structure and tone as legacy BlogPost.legacy.js
 */

export function boldItem(label, text) {
  return `<strong>${label}:</strong> ${text}`
}

export function formatListItem(item) {
  if (typeof item !== 'string') return item
  if (item.includes('<strong>')) return item
  const colon = item.indexOf(': ')
  if (colon > 0 && colon < 60) {
    return boldItem(item.slice(0, colon), item.slice(colon + 2))
  }
  return item
}

export function conversationalOpeners(entry, config = {}) {
  const kw = entry.primaryKeyword
  if (config.legacyIntro) {
    return {
      intro: config.legacyIntro,
      overview: config.legacyOverview || config.overview,
    }
  }

  const intro = config.intro?.trim() || ''
  const isConversational = /^(If you|We have|We'?ve|Search |Every |Running |Google |You might|It sounds)/i.test(intro)

  if (isConversational) {
    return {
      intro,
      overview:
        config.overview ||
        config.quickAnswer ||
        `In this guide, we explain ${kw} in plain English with practical steps you can use whether you serve customers in Europe, the UK, India, or worldwide.`,
    }
  }

  return {
    intro: `If you are working on ${kw}, you are not alone. Search keeps changing, and it is easy to feel overwhelmed by new tools, AI results, and conflicting advice. ${intro}`,
    overview:
      config.overview ||
      config.quickAnswer ||
      `This guide walks through what actually matters in 2026, the mistakes we see most often, and the steps you can take without needing a technical background.`,
  }
}

export function assembleLegacyBlocks(entry, topic, helpers) {
  const { p, pl, h2, h3, ul, ol, pl: plink, LINKS, link } = helpers
  const blocks = [p(topic.intro), p(topic.overview)]

  if (topic.internalLinkIntro) {
    blocks.push({
      type: 'paragraph',
      html: topic.internalLinkIntro,
    })
  }

  blocks.push(...(topic.sections || []).flat())

  if (topic.mistakes?.length) {
    blocks.push(h2(topic.mistakesHeading || 'Common SEO Mistakes That Hurt Your Results'))
    blocks.push(
      p(
        topic.mistakesIntro ||
          'Many website owners still use outdated tactics that make it harder for Google and AI tools to understand their content. Watch out for these:'
      )
    )
    blocks.push(ul(topic.mistakes.map(formatListItem)))
  }

  if (topic.checklist?.length) {
    blocks.push(h2(topic.stepsHeading || 'What You Should Do to Stay Visible'))
    blocks.push(
      p(
        topic.stepsIntro ||
          'The good news is that you do not need expensive software to improve. Focus on these practical steps:'
      )
    )
    blocks.push(ol(topic.checklist.map(formatListItem)))
  }

  if (topic.expertTips?.length) {
    blocks.push(h2(topic.tipsHeading || 'Expert Tips That Make a Real Difference'))
    blocks.push(
      p(topic.tipsIntro || 'Small changes often create outsized results when they are applied consistently:')
    )
    blocks.push(ul(topic.expertTips.map(formatListItem)))
  }

  if (topic.examples?.length) {
    blocks.push(h2('Real Examples From Businesses Like Yours'))
    topic.examples.forEach((ex) => {
      blocks.push(h3(ex.title))
      blocks.push(p(ex.body))
    })
  }

  if (topic.relatedListItems?.length) {
    blocks.push(h2('Related Guides You May Find Helpful'))
    blocks.push(
      p('Continue your research with these connected articles from our blog:')
    )
    blocks.push(ul(topic.relatedListItems))
  }

  blocks.push(h2('Conclusion'))
  blocks.push(
    plink(
      topic.conclusion,
      LINKS.contact,
      topic.conclusionAfter ||
        ' if you want help applying these ideas to your website, or explore our SEO packages to find the right fit.'
    )
  )
  if (topic.conclusionExtra) {
    blocks.push(p(topic.conclusionExtra))
  }

  return blocks
}

export function buildLegacyFaqs(entry, topic) {
  const kw = entry.primaryKeyword
  const topicTitle = entry.title.replace(/\?$/, '')

  const faqs = [
    {
      question: `What is ${kw}?`,
      answer:
        topic.quickAnswer ||
        `${kw} covers the practices explained in this guide - structured for real business goals like more calls, bookings, and qualified leads, not vanity rankings alone.`,
    },
    {
      question: `How long does ${kw} take to show results?`,
      answer:
        'Most businesses see meaningful movement in 3-6 months for SEO fundamentals. Local SEO and Google Business Profile work often shows faster gains in 6-12 weeks. Timelines depend on competition and your starting point.',
    },
    {
      question: `Does this guide apply outside Europe?`,
      answer:
        'Yes. While some examples reference European markets, the principles apply globally. SEO India Tech serves clients in the USA, UK, Australia, UAE, Canada, India, and worldwide.',
    },
    {
      question: `What is the main takeaway from this ${topicTitle} guide?`,
      answer:
        topic.quickAnswer ||
        `Focus on clear, helpful content, fix technical basics, and measure leads and revenue - not rankings alone.`,
    },
    {
      question: 'Should I hire an SEO agency or do this in-house?',
      answer:
        'In-house works for basics if you have dedicated time. An agency speeds up audits, technical fixes, and content at scale. Many businesses use a hybrid approach.',
    },
    {
      question: 'How does AI search affect this topic?',
      answer:
        'Google AI Overviews and tools like ChatGPT change how people find answers. Combine traditional SEO with clear answer formatting and FAQ sections so your content can rank and be cited.',
    },
  ]

  if (topic.mistakes?.length) {
    faqs.push({
      question: 'What are the biggest mistakes to avoid?',
      answer: topic.mistakes.slice(0, 4).join(' '),
    })
  }

  faqs.push({
    question: 'How do I get started today?',
    answer:
      'Start with a simple audit: check page speed, Google Business Profile (if local), title tags, and whether your main pages answer customer questions clearly. Then fix the highest-impact items first.',
  })

  return faqs.slice(0, 10)
}
