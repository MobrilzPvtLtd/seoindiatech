import SEO from "@/component/common/SEO";
import Digitalbranding from "@/component/digital-branding/Digitalbranding";
import Head from "next/head";
import React from "react";

export default function index() {
  return (
    <>
      <Head>
        <title> Digital Branding Services India – SEOIndiatech</title>
        <meta
          name="description"
          content="SEOIndiatech offers digital branding services in India to enhance your brand identity, online presence, and audience engagement effectively."
        />
        <link
          rel="canonical"
          href="https://www.seoindiatech.com/services/digital-branding"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Digitalbranding />
    </>
  );
}
