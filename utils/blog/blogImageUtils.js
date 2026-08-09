/** Premium white featured heroes use object-contain; legacy photos use object-cover. */
export function isPremiumBlogHero(src) {
  return typeof src === 'string' && src.includes('-hero.svg')
}

export function getBlogCardImageClasses(src) {
  if (isPremiumBlogHero(src)) {
    return {
      container: 'relative h-56 overflow-hidden bg-[#EEF1FA] border-b border-border/30',
      image: 'object-contain object-center p-3 sm:p-4 transition-transform duration-700 group-hover:scale-[1.02]',
      useOverlay: false,
    }
  }

  return {
    container: 'relative h-56 overflow-hidden bg-secondary/10',
    image: 'object-cover object-center transition-transform duration-700 group-hover:scale-105',
    useOverlay: true,
  }
}

export function getBlogArticleImageClasses(src) {
  if (isPremiumBlogHero(src)) {
    return {
      wrapper: 'mb-6 rounded-xl overflow-hidden bg-[#EEF1FA] border border-border/40',
      image: 'object-contain object-center w-full h-auto min-h-[220px] max-h-[420px]',
    }
  }

  return {
    wrapper: 'mb-6 rounded-xl overflow-hidden',
    image: 'rounded-xl object-cover w-full h-72',
  }
}
