import React from 'react';

const PromotionService = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
        CRM & Management Tools
      </h1>
      <h2 className="text-2xl font-semibold text-gray-600 text-center mb-8">
        How Does It Work?
      </h2>
      <div className="space-y-6">
        <Section
          title="Identifying the Target Audience: "
          text=" Understand the characteristics, preferences, and behaviors of the target audience to tailor the advertising message effectively."
        />
        <Section
          title="Setting Advertising Objectives:"
          text=" Define clear and measurable objectives for the advertising campaign. Objectives may include increasing brand awareness, driving sales, or promoting a new product feature."
        />
        <Section
          title="Choosing the Advertising Medium"
          text="Select the most appropriate channels or media for reaching the target audience. This could include traditional media like TV, radio, and print, as well as digital channels such as social media, websites, and online advertising platforms."
        />
        <Section
          title="Developing the Message"
          text="Create a compelling and persuasive message that communicates the unique selling propositions (USPs) of the product or service. The message should resonate with the target audience and be consistent with the overall brand image."
        />
        <Section
          title="Creating the Advertisement"
          text="Produce the actual advertisement, which could include visuals, audio, video, and copy. The creative elements should align with the chosen medium and effectively convey the intended message."
        />
        <Section
          title="Budgeting"
          text=" Allocate a budget for the advertising campaign, considering the costs associated with creative development, media placement, and any additional expenses."
        />
        <Section
          title="Implementing the Campaign"
          text="Launch the advertising campaign according to the planned schedule. Monitor its performance and make adjustments if necessary.

"
        />
        <Section
          title="Evaluating and Measuring Results"
          text="Assess the effectiveness of the advertising campaign by analyzing key performance indicators (KPIs) such as reach, engagement, conversion rates, and return on investment (ROI).

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

export default PromotionService;