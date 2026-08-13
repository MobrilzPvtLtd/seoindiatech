import Layout from '@/component/layout/Layout'
import AnalyticsProvider from '@/component/tracking/AnalyticsProvider'
import DeferredGtm from '@/component/tracking/DeferredGtm'
import { ThemeProvider } from '@/context/ThemeContext'
import '@/styles/globals.css'
import Head from 'next/head'
import { MotionConfig } from 'framer-motion'
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
    <div className={`${plusJakarta.variable} ${inter.variable} antialiased overflow-x-clip`}>
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

      <DeferredGtm />

      <ThemeProvider>
        <MotionConfig initial={false}>
          <AnalyticsProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AnalyticsProvider>
        </MotionConfig>
      </ThemeProvider>
    </div>
  )
}
