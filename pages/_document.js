// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="SEO INDIA TECH" />
        <meta
          name="p:domain_verify"
          content="0c89be4ab18144828edff9618257a5a3"
        />
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
            src="https://www.googletagmanager.com/ns.html?id=GTM-5TS8QJRM"
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
