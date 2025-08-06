import React from "react";

const WebsiteCreationService = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
        Website Creation
      </h1>
      <h2 className="text-2xl font-semibold text-gray-600 text-center mb-8">
        How Does It Work?
      </h2>
      <div className="space-y-6">
        <Section
          title="Defining"
          text=" the website’s purpose and goals: Determine the primary objective of your website."
        />
        <Section
          title="Choosing"
          text=" a domain name: Select a domain name that reflects your brand or website’s purpose. "
        />
        <Section
          title="Integration for Seamless Workflows"
          text="Selecting a website platform or content management system (CMS)"
        />
        <Section
          title="Customization for Your Unique Needs"
          text="Designing the website: Determine the visual appearance and layout of your website."
        />
        <Section
          title="Data Security and Compliance"
          text="Developing and building the website."
        />
        <Section
          title="Data Security and Compliance"
          text="Creating and organizing the content: Planning and creating engaging and relevant content for the website."
        />
        <Section
          title="Data Security and Compliance"
          text="Optimizing for search engines (SEO): Implementing search engine optimization techniques to improve the website’s visibility in search engine results."
        />
        <Section
          title="Data Security and Compliance"
          text="Testing and optimizing: Thoroughly test the website across different devices, browsers, and screen sizes to ensure it is responsive and functions properly. Check for broken links, and test forms, and validate the overall user experience. Gather feedback and make necessary optimizations.

"
        />
        <Section
          title="Data Security and Compliance"
          text="Choosing a hosting provider.

"
        />
        <Section
          title="Data Security and Compliance"
          text="Launching the website.

"
        />
        <Section
          title="Data Security and Compliance"
          text="Maintaining and updating the website: Regularly update the website with fresh content, security patches, and software updates.

"
        />
      </div>
    </div>
  );
};

const Section = ({ title, text }) => (
  <div>
    <h3 className="font-semibold text-blue-600 text-lg mb-1">{title}</h3>
    <p className="text-gray-700 text-base text-justify">{text}</p>
  </div>
);

export default WebsiteCreationService;
