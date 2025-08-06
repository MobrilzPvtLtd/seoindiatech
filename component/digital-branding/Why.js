import React from 'react';

const Why = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-white px-6 md:px-20 py-16 gap-10 md:gap-20">
      
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src="https://www.digitalyzeit.com/wp-content/uploads/2025/02/Why-Digital-Branding-Matters-scaled.webp"
          alt="Digital Branding"
          className="object-cover w-full h-auto rounded-xl shadow-md"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2">
        <h1 className="text-gray-800 text-3xl md:text-4xl font-bold mb-4">
          Why Digital Branding Matters
        </h1>
        <p className="text-gray-700 mb-4">
          Consumers with over <b>5.3 billion internet users worldwide</b> rely
          on digital interactions to evaluate, trust, and engage with brands.
          Without a strong digital brand, businesses risk losing visibility,
          credibility, and customer loyalty.
        </p>
        <p className="text-gray-700 font-bold mb-4">
          A well-executed digital branding strategy:
        </p>

        {/* Bullet List */}
        <ul className="list-disc pl-5 space-y-3 text-gray-800 text-base">
          <li>
            <span className="font-semibold">Boosts Brand Recognition</span> – Stand out in a saturated market with a unique and memorable identity.
          </li>
          <li>
            <span className="font-semibold">Enhances Customer Trust</span> – A consistent brand fosters credibility and loyalty.
          </li>
          <li>
            <span className="font-semibold">Increases Engagement</span> – Build meaningful relationships with your audience through strategic digital touchpoints.
          </li>
          <li>
            <span className="font-semibold">Drives Revenue Growth</span> – A strong brand converts visitors into customers and customers into advocates.
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Why;
