import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import HomePage from "@/component/home/HomePage";
import SEO from "@/component/SEO/SEO";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <> 
    <Head>
      <title>Expert SEO & Digital Marketing Services-SEOIndiatech</title>
      <meta name="description" content="SEOIndiatech offers expert SEO & digital marketing services in India, boosting your website traffic, rankings, and online visibility for measurable results." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
      <link rel="canonical" href="https://www.seoindiatech.com" />
    </Head>
     <HomePage/>
     </>
  );
}
