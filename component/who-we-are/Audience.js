import React from "react";
import {
  Megaphone,
  Globe,
  Settings,
  DollarSign,
} from "lucide-react";

const Audience = () => {
  const cards = [
    {
      icon: <Megaphone className="text-blue-500 w-7 h-7" />,
      title: "From Ads",
      desc: "Sending the accurate traffic by optimizing your ads",
    },
    {
      icon: <Globe className="text-yellow-500 w-7 h-7" />,
      title: "To Website",
      desc: "Collecting leads and converting them into sales on your website.",
    },
    {
      icon: <Settings className="text-red-500 w-7 h-7" />,
      title: "To CRM",
      desc: "Organize leads and start nurturing them into funnels",
    },
    {
      icon: <DollarSign className="text-green-600 w-7 h-7" />,
      title: "To Money",
      desc: "Converting those leads into actual sales and calculating your revenue.",
    },
  ];

  return (
    <div className="px-6 py-12 md:py-24 md:px-20 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-black mb-4">
            Find your audience
          </h1>
          <p className="text-gray-700 text-lg">
            Drive Traffic From Social Media To Website
          </p>
        </div>

        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform transition-transform duration-300 hover:scale-105"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-lg font-semibold text-black mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Audience;
