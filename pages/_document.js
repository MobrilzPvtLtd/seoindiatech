// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

const GTM_ID = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID || 'GTM-5TS8QJRM'
const BING_VERIFICATION = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/images/brand/favicon.png" type="image/png" />
        <meta name="author" content="SEO INDIA TECH" />
        <meta
          name="p:domain_verify"
          content="0c89be4ab18144828edff9618257a5a3"
        />
        {BING_VERIFICATION ? (
          <meta name="msvalidate.01" content={BING_VERIFICATION} />
        ) : null}
        <link
          rel="alternate"
          type="application/json"
          title="Agent Action Map"
          href="/agents.json"
        />
        <link
          rel="alternate"
          type="text/plain"
          title="LLM Context"
          href="/llms.txt"
        />
        <link
          rel="alternate"
          type="text/markdown"
          title="Agent Runbook"
          href="/agent-instructions.md"
        />
      </Head>

      <body suppressHydrationWarning>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
