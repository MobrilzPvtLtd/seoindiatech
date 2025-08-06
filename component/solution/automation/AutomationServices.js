import { useState } from 'react';

export default function AutomationServices() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "Business Process Automation (BPA)",
      description: "We design and implement BPA strategies that optimize internal workflows, from HR processes to financial reporting and beyond.",
      color: "bg-gradient-to-br from-blue-50 to-indigo-100",
      hoverColor: "hover:from-blue-100 hover:to-indigo-200",
      borderColor: "border-blue-200",
      hoverBorderColor: "hover:border-blue-400"
    },
    {
      id: 2,
      title: "AI-Powered Chatbots & Customer Support",
      description: "Enhance your customer service with AI chatbots that provide instant responses, automate inquiries, and improve engagement.",
      color: "bg-gradient-to-br from-purple-50 to-pink-100",
      hoverColor: "hover:from-purple-100 hover:to-pink-200",
      borderColor: "border-purple-200",
      hoverBorderColor: "hover:border-purple-400"
    },
    {
      id: 3,
      title: "Marketing Automation",
      description: "Leverage automated email campaigns, AI-driven content distribution, and data-driven insights to maximize your marketing ROI.",
      color: "bg-gradient-to-br from-green-50 to-emerald-100",
      hoverColor: "hover:from-green-100 hover:to-emerald-200",
      borderColor: "border-green-200",
      hoverBorderColor: "hover:border-green-400"
    },
    {
      id: 4,
      title: "Workflow & Task Automation",
      description: "Automate approval processes, task management, and collaboration tools to streamline business operations.",
      color: "bg-gradient-to-br from-orange-50 to-yellow-100",
      hoverColor: "hover:from-orange-100 hover:to-yellow-200",
      borderColor: "border-orange-200",
      hoverBorderColor: "hover:border-orange-400"
    },
    {
      id: 5,
      title: "Robotic Process Automation (RPA)",
      description: "Deploy RPA solutions to handle data entry, invoice processing, and other repetitive back-office tasks with unmatched accuracy.",
      color: "bg-gradient-to-br from-teal-50 to-cyan-100",
      hoverColor: "hover:from-teal-100 hover:to-cyan-200",
      borderColor: "border-teal-200",
      hoverBorderColor: "hover:border-teal-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Our Digital Automation Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We offer a comprehensive suite of{' '}
            <span className="text-blue-600 font-semibold">automation solutions</span>{' '}
            designed to enhance every aspect of your business:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First Row - 3 Cards */}
          {services.slice(0, 3).map((service, index) => (
            <div
              key={service.id}
              className={`
                ${service.color} ${service.hoverColor}
                ${service.borderColor} ${service.hoverBorderColor}
                border-2 rounded-2xl p-8 
                transform transition-all duration-300 ease-in-out
                hover:scale-105 hover:shadow-2xl
                ${hoveredCard === service.id ? 'scale-105 shadow-2xl' : 'shadow-lg'}
                cursor-pointer
              `}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  {service.description}
                </p>
              </div>
              
              {/* Subtle Icon/Accent */}
              <div className="mt-6 flex justify-end">
                <div className={`
                  w-8 h-8 rounded-full 
                  ${service.id === 1 ? 'bg-blue-500' : ''}
                  ${service.id === 2 ? 'bg-purple-500' : ''}
                  ${service.id === 3 ? 'bg-green-500' : ''}
                  opacity-20 group-hover:opacity-40 transition-opacity duration-300
                `}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 2 Cards Centered */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
          {services.slice(3, 5).map((service, index) => (
            <div
              key={service.id}
              className={`
                ${service.color} ${service.hoverColor}
                ${service.borderColor} ${service.hoverBorderColor}
                border-2 rounded-2xl p-8 
                transform transition-all duration-300 ease-in-out
                hover:scale-105 hover:shadow-2xl
                ${hoveredCard === service.id ? 'scale-105 shadow-2xl' : 'shadow-lg'}
                cursor-pointer
              `}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  {service.description}
                </p>
              </div>
              
              {/* Subtle Icon/Accent */}
              <div className="mt-6 flex justify-end">
                <div className={`
                  w-8 h-8 rounded-full 
                  ${service.id === 4 ? 'bg-orange-500' : ''}
                  ${service.id === 5 ? 'bg-teal-500' : ''}
                  opacity-20 group-hover:opacity-40 transition-opacity duration-300
                `}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-200"></div>
            </div>
            <span className="text-gray-700 font-medium">
              Ready to automate your business processes?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}