'use client';

import { useState, useEffect } from 'react';

interface ContactPageProps {
  onBack: () => void;
}

export default function ContactPage({ onBack }: ContactPageProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const contactDetails = [
    {
      icon: '📍',
      label: 'Address',
      value: 'A3, House 646, Mirpur DOHS, Dhaka-1216, Bangladesh.'
    },
    {
      icon: '📞',
      label: 'Phone',
      value: '+880 2 5807 0221'
    },
    {
      icon: '📠',
      label: 'Fax',
      value: '+880 2 5807 0249'
    },
    {
      icon: '✉️',
      label: 'Email',
      value: 'info@lonestargroup.xyz'
    },
    {
      icon: '🌐',
      label: 'Website',
      value: 'www.lonestargroup.xyz'
    }
  ];

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Left Section - Building Image with Overlay */}
      <div className="w-1/3 relative overflow-hidden">
        {/* Building facade gradient background */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(135deg, 
                #1a1a1a 0%, 
                #2d2d2d 25%, 
                #1a1a1a 50%, 
                #2d2d2d 75%, 
                #1a1a1a 100%
              ),
              linear-gradient(90deg,
                transparent 0%,
                rgba(255,255,255,0.1) 20%,
                transparent 40%,
                rgba(255,255,255,0.1) 60%,
                transparent 80%,
                rgba(255,255,255,0.1) 100%
              )
            `,
            backgroundSize: '100% 100%, 200px 100%',
            filter: 'grayscale(100%) brightness(0.3)'
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        {/* MUSTANG GROUP Text Overlay */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center text-center pb-8">
          <div className="text-gray-300 text-4xl font-bold mb-8 tracking-wider" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            MUSTANG GROUP
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold">
              <span className="text-white">CON</span>
              <span className="text-red-500">TACT</span>
            </div>
            <div className="w-full h-0.5 bg-red-500 mt-2"></div>
          </div>
        </div>
      </div>

      {/* Right Section - Contact Details */}
      <div className="w-2/3 bg-gray-100 relative">
        {/* Close Button */}
        <button
          onClick={onBack}
          className="absolute top-6 right-6 z-50 w-12 h-12 bg-gray-400 hover:bg-gray-600 text-white rounded-full flex items-center justify-center transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-xl"
        >
          <span className="text-3xl font-thin group-hover:rotate-90 transition-transform duration-300 leading-none">×</span>
        </button>

        {/* Contact Details Content */}
        <div className="flex flex-col justify-center h-full px-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            CONTACT DETAILS
          </h2>
          
          <div className="space-y-8 max-w-md mx-auto">
            {contactDetails.map((detail, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-8 h-8 flex items-center justify-center text-xl">
                  {detail.icon}
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-600 font-medium">
                    {detail.label}
                  </div>
                  <div className="text-lg text-gray-800 font-semibold">
                    {detail.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 