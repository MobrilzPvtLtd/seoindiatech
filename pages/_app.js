import Layout from "@/component/layout/Layout";
import { ThemeProvider } from "@/context/ThemeContext";
import "@/styles/globals.css";
import Script from "next/script";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Google Search Console Verification */}
      <Head>
        <meta name="google-site-verification" content="6LOvsWkwZXmF9nBv1EGKFzR6P5TPlBpXXlR28WZxqH0" />
      </Head>

      {/* Google Analytics tag (gtag.js) */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-VMZHW0JYVN"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VMZHW0JYVN');
          `,
        }}
      />
      
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}