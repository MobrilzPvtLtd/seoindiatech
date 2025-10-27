// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
       {/* <meta name="google-site-verification" content="Ag4ojngx0blbdZD0WIjtjNtjFBI_DBJpUAO_di30yWY" /> */}
        <meta
            name="google-site-verification"
            content="fsDpDPzF-AHExzFBGUcxlEITP5MjkpG_ih4WF0w4Y0c"
          />
          <meta
            name="robots"
            content="index, follow, max-image-preview:large, max-snippet:-1"
          />
          <meta
            name="p:domain_verify"
            content="0c89be4ab18144828edff9618257a5a3"
          />
          <meta name="author" content="SEO INDIA TECH" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-VW8TMX14PZ"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-VW8TMX14PZ');
              `,
            }}
            />
        
            
       </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

 