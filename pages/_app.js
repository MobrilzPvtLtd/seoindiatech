import Layout from "@/component/layout/Layout";
import { ThemeProvider } from "@/context/ThemeContext";
import SmoothScroll from "@/component/motion/SmoothScroll";
import "@/styles/globals.css";
import Script from "next/script";
import Head from "next/head";
import { Plus_Jakarta_Sans, Inter, Geist_Mono } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <div
      className={`${plusJakarta.variable} ${inter.variable} ${geistMono.variable} antialiased`}
    >
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
        <SmoothScroll>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SmoothScroll>
      </ThemeProvider>
    </div>
  );
}
