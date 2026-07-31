import React from "react";
import {
  Search,
  FileSearch,
  Gauge,
  Link,
  MapPin,
  ShoppingCart,
} from "lucide-react";

const Expertise = () => {
  // SEO expertise cards data
  const expertiseCards = [
    {
      icon: <FileSearch className="w-6 h-6 text-primary dark:text-accent" />,
      title: "In-Depth SEO Audit &amp; Strategy Development",
      description:
        "We begin with a full website audit to find performance bottlenecks, on-page issues, and technical gaps. This audit is followed by competitive keyword research and a strategicroadmap tailored to your business. Our SEO services map out a clear path to higherrankings and better engagement.",
      benefits: [
        "Website performance assessment",
        "Competitor and industry analysis",
        "Keyword strategy development",
      ],
    },
    {
      icon: <Search className="w-6 h-6 text-primary dark:text-accent" />,
      title: "Keyword Research & Content Optimization",
      description:
        "We uncover high-value keywords that align with your audience's search intent. Our SEO optimization services focus on on-page elements - titles, meta descriptions, header tags - and craft compelling, SEO-friendly content that drives organic growth.",
      benefits: [
        "Advanced keyword research and clustering",
        "On-page SEO optimization (titles, meta descriptions, headers, etc.)",
        "Engaging, search-optimized content creation",
      ],
    },
    {
      icon: <Gauge className="w-6 h-6 text-primary dark:text-accent" />,
      title: "Technical SEO for Performance & Usability",
      description:
        "A technically sound website improves both user experience and search visibility. We optimize your site's speed, implement responsive design, manage XML sitemaps, and apply structured data markup. This ensures search engines crawl and index your site more efficiently..",
      benefits: [
        "Website speed optimization",
        "Mobile-first indexing & responsive design",
        "XML sitemaps & structured data implementation",
      ],
    },
    {
      icon: <Link className="w-6 h-6 text-primary dark:text-accent" />,
      title: "Link Building & Authority Growth",
      description:
        "Building a trustworthy digital presence requires high-quality backlinks. We employ white-hat professional SEO services, such as guest blogging, outreach campaigns, and local citations, to grow your authority organically.",
      benefits: [
        "White-hat link-building strategies",
        "Guest blogging & outreach campaigns",
        "Local citations & authoritative directory listings",
      ],
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary dark:text-accent" />,
      title: "Local SEO - Own Your Market",
      description:
        "Our local SEO strategies increase your presence in local searches and map listings.",
      benefits: [
        "Google Business Profile optimization",
        "Local citations and NAP consistency",
        "Geo-targeted content strategies",
      ],
    },
    {
      icon: (
        <ShoppingCart className="w-6 h-6 text-primary dark:text-accent" />
      ),
      title: "E-Commerce SEO for More Sales",
      description:
        "Our e-commerce SEO strategies improve product pages, categories, and site speed, driving more traffic and higher conversions.",
      benefits: [
        "SEO-friendly product descriptions",
        "Schema markup for rich snippets",
        "Conversion rate optimization (CRO)",
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-background dark:from-background dark:to-secondary/40/30 px-4 py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 dark:bg-primary/20/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-background/70 dark:bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto text-center relative z-10">
        {/* Header section */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 dark:bg-primary/20/40 text-primary dark:text-accent rounded-full text-sm font-medium mb-6">
            <span>Our Expertise</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl max-w-7xl font-bold leading-tight text-heading text-center mx-auto mb-6">
            Why SEO Matters: Beyond Just Keywords
          </h2>

          <div className="w-24 h-1 bg-primary dark:bg-primary rounded-full mx-auto mb-8"></div>

          <p className="text-body text-lg max-w-5xl mx-auto">
            Search engines are the gateway to nearly all online interactions. A
            well-optimized website helps you be discovered by potential
            customers at the exact moment they are searching for your products
            or services.
        
             Our SEO optimization services ensure that your website
            is not only search-friendly but user-friendly too - balancing
            technical sophistication with content that resonates. With our
            data-driven strategies, we help you convert browsers into loyal
            customers.
        
          </p>
         
        </div>

        {/* Cards grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
          {expertiseCards.map((card, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-full max-w-sm h-full flex flex-col bg-card dark:bg-card shadow-lg hover:shadow-xl p-8 rounded-2xl border border-border dark:border-border hover:-translate-y-1 transition-all duration-300">
                {/* Icon header */}
                <div className="mb-4 p-2 bg-primary/10 dark:bg-primary/20/40 rounded-lg w-fit">
                  {card.icon}
                </div>

                <h3 className="text-heading text-xl font-semibold mb-4">
                  {card.title}
                </h3>

                <div className="w-12 h-1 bg-primary dark:bg-primary rounded-full mb-4"></div>

                <p className="text-body mb-6">
                  {card.description}
                </p>

                {/* <ul className="text-body space-y-2 mt-auto">
                  {card.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="min-w-[8px] h-2 w-2 rounded-full bg-primary dark:bg-accent mt-2"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
