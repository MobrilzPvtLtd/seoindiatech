import Layout from '@/component/layout/Layout'
import { ThemeProvider } from '@/context/ThemeContext'
import '@/styles/globals.css'
import Script from 'next/script'
import Head from 'next/head'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
  adjustFontFallback: true,
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  adjustFontFallback: true,
})

export default function App({ Component, pageProps }) {
  return (
    <div className={`${plusJakarta.variable} ${inter.variable} antialiased`}>
      <Head>
        <meta
          name="google-site-verification"
          content="6LOvsWkwZXmF9nBv1EGKFzR6P5TPlBpXXlR28WZxqH0"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var t = localStorage.getItem('theme');
                  var dark = t === 'dark';
                  var root = document.documentElement;
                  root.classList.remove('light', 'dark');
                  root.classList.add(dark ? 'dark' : 'light');
                  root.style.colorScheme = dark ? 'dark' : 'light';
                } catch (e) {}
              })();
            `,
          }}
        />
      </Head>

      {/* GTM — deferred to avoid blocking first paint */}
      <Script
        id="gtm"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5TS8QJRM');
          `,
        }}
      />

      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  )
}
