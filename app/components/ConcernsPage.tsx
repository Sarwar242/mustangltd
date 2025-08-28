'use client';

import React, { useState, useEffect } from 'react';

interface ConcernsPageProps {
  onBack: () => void;
}

export default function ConcernsPage({ onBack }: ConcernsPageProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const concerns = [
    {
      title: 'Defense Division',
      description: 'DGDP licensed supplier of arms & ammunition to Bangladesh Army, Navy, and Air Force since 1994, with successful delivery track record.',
      established: '1994',
      sector: 'Defense Supply'
    },
    {
      title: 'Power Generation',
      description: 'Operating multiple power plants including 108 MW HFO-based plant, developing renewable energy projects in solar and wind power.',
      established: '1994',
      sector: 'Energy'
    },
    {
      title: 'Infrastructure Development',
      description: 'Executing major infrastructure projects including commercial complexes, hotels, and sports facilities.',
      established: '1998',
      sector: 'Infrastructure'
    },
    {
      title: 'Education & Training',
      description: 'Operating The World University Regional Campus with international collaborations for quality education.',
      established: '2003',
      sector: 'Education'
    },
    {
      title: 'Chemical Supply Division',
      description: 'International supplier of industrial chemicals, ceramic chemicals, and specialized factory chemicals.',
      established: '2010',
      sector: 'Chemical Industry'
    },
    {
      title: 'Manufacturing & Trade',
      description: 'Diverse portfolio including bus manufacturing, ship recycling, and international trade partnerships with major global companies.',
      established: '2015',
      sector: 'Manufacturing'
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
              <span className="text-white">OUR</span>
              <span className="text-red-500"> CONCERNS</span>
            </div>
            <div className="w-full h-0.5 bg-red-500 mt-2"></div>
          </div>
        </div>
      </div>

      {/* Right Section - Business Divisions */}
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
              Our Business Divisions
            </h2>
            
            <div className="space-y-8">
              {concerns.map((concern, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300 hover:bg-gray-100 border-l-4 border-red-500"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{concern.title}</h3>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Established</div>
                      <div className="text-lg font-bold text-red-600">{concern.established}</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                      {concern.sector}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">{concern.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-center">Our Vision</h3>
              <p className="text-lg leading-relaxed text-center">
                To be the leading diversified business group in Bangladesh, contributing to national 
                development through sustainable growth, innovation, and excellence across all our 
                business concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 