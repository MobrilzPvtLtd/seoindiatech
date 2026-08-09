/**
 * First-touch and session attribution via sessionStorage/localStorage.
 * No PII stored — UTM params and landing page only.
 */

const SESSION_KEY = 'sit_attribution_session'
const FIRST_TOUCH_KEY = 'sit_attribution_first_touch'

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']

function readSearchParams() {
  if (typeof window === 'undefined') return {}
  const params = new URLSearchParams(window.location.search)
  const utm = {}
  for (const key of UTM_KEYS) {
    const val = params.get(key)
    if (val) utm[key] = val.toLowerCase().trim()
  }
  return utm
}

function buildSnapshot(landingPage) {
  const utm = readSearchParams()
  return {
    landing_page: landingPage,
    referrer: typeof document !== 'undefined' ? document.referrer || '' : '',
    ...utm,
    captured_at: new Date().toISOString(),
  }
}

export function initAttribution(pathname) {
  if (typeof window === 'undefined') return

  const landing = pathname || window.location.pathname
  const snapshot = buildSnapshot(landing)

  try {
    const hasUtm = UTM_KEYS.some((k) => snapshot[k])
    if (hasUtm || !sessionStorage.getItem(SESSION_KEY)) {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(snapshot))
    }
    if (!localStorage.getItem(FIRST_TOUCH_KEY)) {
      localStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(snapshot))
    }
  } catch {
    // storage blocked — skip silently
  }
}

export function getAttribution() {
  if (typeof window === 'undefined') return {}

  try {
    const session = sessionStorage.getItem(SESSION_KEY)
    const first = localStorage.getItem(FIRST_TOUCH_KEY)
    return {
      session: session ? JSON.parse(session) : {},
      first_touch: first ? JSON.parse(first) : {},
    }
  } catch {
    return { session: {}, first_touch: {} }
  }
}

export function getAttributionParams() {
  const { session, first_touch } = getAttribution()
  return {
    landing_page: session.landing_page || '',
    utm_source: session.utm_source || '',
    utm_medium: session.utm_medium || '',
    utm_campaign: session.utm_campaign || '',
    utm_content: session.utm_content || '',
    first_touch_landing_page: first_touch.landing_page || '',
    first_touch_source: first_touch.utm_source || '',
    first_touch_medium: first_touch.utm_medium || '',
    first_touch_campaign: first_touch.utm_campaign || '',
  }
}
