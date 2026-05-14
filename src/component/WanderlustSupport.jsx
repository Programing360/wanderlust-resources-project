import React from 'react';
import { ShieldCheck, Map, Headset } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <ShieldCheck size={32} className="text-[#0ea5e9]" />,
      title: "Safe & Secure",
      description: "Your safety is our priority with comprehensive travel insurance and 24/7 support."
    },
    {
      icon: <Map size={32} className="text-[#0ea5e9]" />,
      title: "Expert Guides",
      description: "Local experts who bring destinations to life with authentic cultural insights."
    },
    {
      icon: <Headset size={32} className="text-[#0ea5e9]" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service to assist you wherever your journey takes you."
    }
  ];

  return (
    <section className="bg-[#f0f9ff] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-4 tracking-tight">
            Why Choose Wanderlust
          </h2>
          <p className="text-gray-500 text-lg font-medium">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-10 shadow-sm border border-gray-50 rounded-4xl flex flex-col items-start transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-6 p-2 rounded-lg">
                {item.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;