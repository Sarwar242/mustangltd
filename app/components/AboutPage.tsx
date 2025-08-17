'use client';

import React, { useState, useEffect } from 'react';

interface AboutPageProps {
  onBack: () => void;
}

export default function AboutPage({ onBack }: AboutPageProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="h-screen flex bg-gray-100 overflow-hidden">
      {/* Left Section - Title */}
      <div className="w-1/3 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center text-center px-8 pb-8">
          <div className="text-gray-300 text-3xl font-bold mb-8 tracking-wider">
            MUSTANG GROUP
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold">
              <span className="text-white">ABOUT</span>
              <span className="text-red-500"> US</span>
            </div>
            <div className="w-full h-0.5 bg-red-500 mt-2"></div>
          </div>
        </div>
      </div>

      {/* Right Section - About Content */}
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
              Story of Glory
            </h2>
            
            <div className="space-y-8 text-lg leading-relaxed text-gray-700">
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Foundation</h3>
                <p>
                  Established in 1985 with Muhsin & Co., MUSTANG GROUP has added Defense Purchase, 
                  Energy, Infrastructure, Hospitality Management, International Trade and Information 
                  Technology sectors to its operations by growing sustainably over time.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Defense Excellence</h3>
                <p>
                  Since its enlistment in 1995, Muhsin & Co Ltd has successfully completed many defense 
                  supplying contracts with the Air Force, Army and Navy of Bangladesh. Every year the 
                  business and service is growing rapidly.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Infrastructure Development</h3>
                <p>
                  Mustang Group Infrastructure owns, operates, and invests in infrastructure development 
                  projects to generate superior risk-adjusted investment returns.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Energy & Hospitality</h3>
                <p>
                  Mustang Group Hospitality works with the biggest hotel chains and it is growing sustainably. 
                  Mustang Group Energy is active in the whole energy value chain including electricity generation 
                  and distribution. Under its strategic targets, Mustang Group Energy continues to develop new 
                  projects in order to meet Bangladesh's energy demand.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Global Reach</h3>
                <p>
                  Mustang Group International provides trade services to various international and local clients, 
                  working in all the sectors it exists with its experienced and trained manpower within the 
                  principle of maximum productivity and effectiveness and occupying a prominent place among 
                  the leading companies.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                To deliver excellence in every venture while contributing to Bangladesh's development 
                through sustainable growth, innovation, and unwavering commitment to quality across 
                all our business sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 