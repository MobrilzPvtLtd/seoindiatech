import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import { FaChartLine, FaLightbulb, FaHandshake } from "react-icons/fa";
import { FiUsers, FiTrendingUp, FiShield } from "react-icons/fi";

import SmoothScroll from "@/component/motion/SmoothScroll";
import Hero from "@/component/new-home/Hero";
import TrustedBy from "@/component/new-home/TrustedBy";
import OurServiceSection from "@/component/new-home/OurServiceSection";
import Industries from "@/component/new-home/Industries";
import Testimonials from "@/component/new-home/Testimonials";
import Blog from "@/component/new-home/Blog";
import FAQAndContact from "@/component/new-home/FAQAndContact";
import NewFooter from "@/component/new-home/NewFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.seoindiatech.com/#organization",
        name: "SEO India Tech",
        url: "https://www.seoindiatech.com/",
        logo: "https://www.seoindiatech.com/wp-content/uploads/2024/01/logo.png",
        description:
          "SEOIndiatech offers expert SEO & digital marketing services in India, boosting your website traffic, rankings, and online visibility for measurable results.",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-XXXXXXXXXX",
          contactType: "Customer Service",
          areaServed: "Worldwide",
        },
        sameAs: [
          "https://www.facebook.com/people/SEOIndiatech/",
          "https://www.instagram.com/seoindiatech/",
          "https://x.com/seoindiatech411",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.seoindiatech.com/#breadcrumbs",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.seoindiatech.com/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.seoindiatech.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What services does SEO India Tech provide?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "SEO India Tech offers SEO services, digital marketing, content creation, website development, branding, and performance marketing solutions for businesses of all sizes.",
            },
          },
          {
            "@type": "Question",
            name: "Why should I choose SEO India Tech?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "SEO India Tech provides performance based strategies, transparent reporting, affordable pricing, and expert support to help businesses grow online.",
            },
          },
          {
            "@type": "Question",
            name: "Do you work with international clients?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, SEO India Tech works with clients worldwide across various industries, delivering tailored solutions for effective online visibility.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <SmoothScroll>
        <Head>
          <title>Expert SEO & Digital Marketing Services - SEOIndiatech</title>
          <meta
            name="description"
            content="SEOIndiatech offers expert SEO & digital marketing services in India, boosting your website traffic, rankings, and online visibility for measurable results."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="robots"
            content="index, follow, max-image-preview:large, max-snippet:-1"
          />
          <link rel="canonical" href="https://www.seoindiatech.com" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
        </Head>

        {/* 1. Thesis — the claim, no form friction up front */}
        <Hero />

        {/* 2. Immediate social proof, dark band */}
        <TrustedBy />

        {/* 3. Why us / stats */}
        {/* <WhyChooseSection /> */}

        {/* 4. What we do */}
        <OurServiceSection />

        {/* 5. Authority band #1 — dark */}
        {/* 6. How it works */}
        {/* <OurSEOProcess /> */}
        {/* <SEOSolution /> */}
        <Industries />
        <Testimonials />
        <Blog />
        <FAQAndContact />
        {/* <NewFooter /> */}
      </SmoothScroll>
    </>
  );
}