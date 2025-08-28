'use client';

import React, { useState, useEffect } from 'react';

interface WhatWeDoPageProps {
  onBack: () => void;
}

export default function WhatWeDoPage({ onBack }: WhatWeDoPageProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const services = [
    {
      title: 'Defense Supply',
      description: 'Supply of arms & ammunition to Bangladesh Armed Forces, with DGDP license and proven track record of successful deliveries.',
      icon: '🛡️'
    },
    {
      title: 'Power & Energy',
      description: 'Comprehensive power solutions including HFO-based power plants, Solar Power, Wind Power, and LNG+FSRU+Gas Based Power Plants.',
      icon: '⚡'
    },
    {
      title: 'Infrastructure & Development',
      description: 'Land development, commercial complexes, and major infrastructure projects including 5-Star Hotels and Sports Complexes.',
      icon: '🏗️'
    },
    {
      title: 'Education',
      description: 'Established educational institutions including The World University Regional Campus, with international collaborations.',
      icon: '�'
    },
    {
      title: 'Chemical Industry',
      description: 'International supply of industrial chemicals, ceramic chemicals, and sanitary ware factory chemicals.',
      icon: '🧪'
    },
    {
      title: 'Manufacturing & Trade',
      description: 'Diverse projects including Bus Manufacturing, Ship Recycling, and international trade partnerships.',
      icon: '🏭'
    }
  ];

  return (
    <div className="h-screen flex bg-gray-100 overflow-hidden">
      {/* Left Section - Title */}
      <div className="w-1/3 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center text-center px-8 pb-8">
          <div className="text-gray-300 text-3xl font-bold mb-8 tracking-wider">
            MUSTANG GROUP
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold">
              <span className="text-white">WHAT WE</span>
              <span className="text-red-500"> DO</span>
            </div>
            <div className="w-full h-0.5 bg-red-500 mt-2"></div>
          </div>
        </div>
      </div>

      {/* Right Section - Services */}
      <div className="w-2/3 bg-white relative">
        {/* Close Button */}
        <button
          onClick={onBack}
          className="absolute top-6 right-6 z-50 w-12 h-12 bg-gray-400 hover:bg-gray-600 text-white rounded-full flex items-center justify-center transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-xl"
        >
          <span className="text-3xl font-thin group-hover:rotate-90 transition-transform duration-300 leading-none">×</span>
        </button>

        {/* Content */}
        <div className="p-12 h-full overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              Our Services & Capabilities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:bg-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">{service.icon}</span>
                    <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Since 1985, MUSTANG GROUP has evolved from Muhsin & Co. to become a diversified 
                conglomerate operating across multiple sectors. Our commitment to excellence and 
                sustainable growth drives us to deliver superior value to our clients and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 