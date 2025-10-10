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
    <div className="min-h-screen bg-white">
      {/* Content */}
      <div className="p-12">
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
  );
} 