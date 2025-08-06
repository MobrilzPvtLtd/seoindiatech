import React from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';

// Optimized circular progress component
const CircularProgress = ({ percentage, color, size = 80 }) => {
  const radius = 14;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r={radius} stroke="#E5E7EB" strokeWidth="4" fill="none" />
        <circle
          cx="16"
          cy="16"
          r={radius}
          stroke={color}
          strokeWidth="4"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-500 ease-out"
        />
      </svg>
    </div>
  );
};

// Optimized status badge component
const StatusBadge = ({ status, type }) => {
  const styles = {
    processing: "bg-yellow-100 text-yellow-700",
    verified: "bg-green-100 text-green-700"
  };
  
  return (
    <span className={`${styles[type]} px-2 py-1 rounded text-xs font-medium`}>
      {status}
    </span>
  );
};

// Optimized status item component
const StatusItem = ({ title, rating, status, type }) => (
  <div className="flex items-center justify-between bg-white rounded-lg p-3 border">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
        <Star className="w-4 h-4 text-yellow-500" />
      </div>
      <div>
        <div className="font-medium text-sm">{title}</div>
        <div className="text-xs text-gray-500">{rating} ⭐</div>
      </div>
    </div>
    <StatusBadge status={status} type={type} />
  </div>
);

// Optimized traffic chart component
const TrafficChart = () => (
  <div className="relative h-20 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg overflow-hidden">
    <svg className="w-full h-full" viewBox="0 0 300 60" preserveAspectRatio="none">
      <defs>
        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <path
        d="M0,50 Q75,45 150,30 Q225,15 300,10"
        stroke="#3B82F6"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M0,50 Q75,45 150,30 Q225,15 300,10 L300,60 L0,60 Z"
        fill="url(#chartGradient)"
      />
    </svg>
  </div>
);

const SEOSolution = () => {
  const statusData = [
    { title: "Subscription", rating: "5.0", status: "Processing", type: "processing" },
    { title: "Get free extension", rating: "5.0", status: "Verified", type: "verified" }
  ];

  const metrics = [
    { label: "Authority Score", value: 82, displayValue: "92%", color: "#3B82F6" },
    { label: "Content score", value: 74, displayValue: "74", color: "#10B981" }
  ];

  return (
    <div className="  bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            A comprehensive suite of{' '}
            <span className="text-blue-600">SEO solutions</span>{' '}
            tailored to meet every need
          </h1>
        </header>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          
          {/* Email Verification Card */}
          <article className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
            <header className="mb-6">
              <h2 className="text-xl font-bold text-blue-600 mb-3">Email Verification</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                You might not realize it, but your email strategy significantly influences the visibility 
                and reach of your communications.
              </p>
            </header>
             <Image 
              src={"/SEO-agency.jpg"}
              width={500}
              height={300}
             />
            {/* <div className="bg-gray-50 rounded-lg p-4">
              <div className="bg-white rounded border p-3 mb-3">
                <div className="w-full h-12 bg-gray-100 rounded"></div>
              </div>
              
              <div className="space-y-2">
                {statusData.map((item, index) => (
                  <StatusItem key={index} {...item} />
                ))}
              </div>
            </div> */}
          </article>

          {/* Competitor Analysis Card */}
          <article className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
            <header className="mb-6">
              <h2 className="text-xl font-bold text-blue-600 mb-3">Competitor Analysis</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sending numerous bounced or unwanted emails can negatively impact your sender's 
                reputation, leaving a lasting mark on your email deliverability history.
              </p>
            </header>

            <Image 
              src={"/SEO-agency1.jpg"}
              width={500}
              height={300}
             />
          </article>

          {/* Revenue Monitoring Card */}
          <article className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 md:col-span-2 xl:col-span-1">
            <header className="mb-6">
              <h2 className="text-xl font-bold text-blue-600 mb-3">Revenue Monitoring</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Verifying your email list ensures that you avoid sending messages to inactive or invalid 
                addresses.
              </p>
            </header>

             <Image 
              src={"/SEO-agency2.jpg"}
              width={500}
              height={300}
             />
          </article>
        </div>

        {/* CTA */}
        <footer className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
            Get Started Today
          </button>
        </footer>
      </div>
    </div>
  );
};

export default SEOSolution;