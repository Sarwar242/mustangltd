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
      sector: 'Defense Supply',
      subdomain: 'defense.mustanggroup.io'
    },
    {
      title: 'Power Generation',
      description: 'Operating multiple power plants including 108 MW HFO-based plant, developing renewable energy projects in solar and wind power.',
      established: '1994',
      sector: 'Energy',
      subdomain: 'power.mustanggroup.io'
    },
    {
      title: 'Infrastructure Development',
      description: 'Executing major infrastructure projects including commercial complexes, hotels, and sports facilities.',
      established: '1998',
      sector: 'Infrastructure',
      subdomain: 'infrastructure.mustanggroup.io'
    },
    {
      title: 'Education & Training',
      description: 'Operating The World University Regional Campus with international collaborations for quality education.',
      established: '2003',
      sector: 'Education',
      subdomain: 'education.mustanggroup.io'
    },
    {
      title: 'Chemical Supply Division',
      description: 'International supplier of industrial chemicals, ceramic chemicals, and specialized factory chemicals.',
      established: '2010',
      sector: 'Chemical Industry',
      subdomain: 'chemical.mustanggroup.io'
    },
    {
      title: 'Manufacturing & Trade',
      description: 'Diverse portfolio including bus manufacturing, ship recycling, and international trade partnerships with major global companies.',
      established: '2015',
      sector: 'Manufacturing',
      subdomain: 'manufacture.mustanggroup.io'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Content */}
      <div className="p-4 md:p-8 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 md:mb-8 text-center">
              Our Business Divisions
            </h2>
            
            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              {concerns.map((concern, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-4 md:p-6 lg:p-8 rounded-lg hover:shadow-lg transition-all duration-300 hover:bg-gray-100 border-l-4 border-red-500"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 md:mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-0">{concern.title}</h3>
                    <div className="text-left sm:text-right">
                      <div className="text-xs md:text-sm text-gray-500">Established</div>
                      <div className="text-base md:text-lg font-bold text-red-600">{concern.established}</div>
                    </div>
                  </div>
                  
                  <div className="mb-3 md:mb-4">
                    <span className="inline-block bg-red-100 text-red-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                      {concern.sector}
                    </span>
                  </div>
                  
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6">{concern.description}</p>
                  
                  <div className="flex justify-center sm:justify-end">
                    <button
                      onClick={() => window.open(`https://${concern.subdomain}`, '_blank')}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 md:px-6 py-2 cursor-pointer rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center gap-2 text-sm md:text-base"
                    >
                      <span>Visit Site</span>
                      <svg 
                        className="w-3 h-3 md:w-4 md:h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-12 bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 md:p-6 lg:p-8 rounded-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-center">Our Vision</h3>
              <p className="text-sm md:text-base lg:text-lg leading-relaxed text-center">
                To be the leading diversified business group in Bangladesh, contributing to national 
                development through sustainable growth, innovation, and excellence across all our 
                business concerns.
              </p>
            </div>
          </div>
        </div>
    </div>
  );
} 