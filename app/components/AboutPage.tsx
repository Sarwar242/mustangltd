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
              Chairman's Profile
            </h2>
            
            <div className="space-y-8 text-lg leading-relaxed text-gray-700">
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Corporate Profile</h3>
                <p className="font-semibold">Chairman – Mustang Group</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Business Journey</h3>
                <p>
                  From a young age, entrepreneurship has been my passion. My first venture started in 1985 during school life with a small farm and fisheries project. 
                  After completing my studies, I formally entered the business world with the garments sector, working with European buyers. Over the years, my 
                  business expanded into multiple industries, including power generation, defense supply, land development, education, chemicals, and infrastructure projects.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Milestones</h3>
                <ul className="space-y-4 list-disc pl-6">
                  <li>1994: Joint venture with an American company for a 4x100 MW barge-mounted power plant – ranked first technically and commercially.</li>
                  <li>1994-95: Obtained DGDP license and supplied arms & ammunition to Bangladesh Army, Navy, and Air Force, personally delivered practice bombs to Air Force Base, Patenga.</li>
                  <li>1996: Secured government approval for a 16 MW power plant</li>
                  <li>1998: Entered land development business and Interior.</li>
                  <li>2003: Established The World University Regional Campus (Bangladesh) in collaboration with the USA, Collaboration with Russian State won University for Bachelor of Interior Design faculty.</li>
                  <li>2006: Participated in 10 MW & 20 MW Gas based power projects with government approval.</li>
                  <li>2011: Commissioned 108 MW HFO-based power plant (ongoing).</li>
                  <li>2012 & 2016: Submitted proposals for 2×1320 MW coal-based power plants jointly with Bangladesh Army and Bangladesh Navy with secure 100% foreign funding (process ongoing).</li>
                  <li>2017: Won International tender for 5-Star Hotel, Commercial Complex, Museum & Sports Complex project under Bangladesh Navy (not implemented).</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Ongoing Projects</h3>
                <p>
                  Agro, Ship Recycling, Solar Power Project, Wind Power Project, LNG+FSRU+Gas Based Power Plant, 
                  Sludged Treatment Plant, Bus Manufacturing Project, International supply of industrial chemicals, 
                  ceramic chemicals & sanitary ware factory chemicals and participate international tender various Government Department.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Global Engagement & Leadership</h3>
                <p>
                  Worked as a local partner with major companies in Europe, USA, Russia & Asia, building strong international collaborations.
                  Currently serving as the Chairman of Mustang Group, having previously held positions as Director, Managing Director, and 
                  Chairman in multiple companies.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Business Philosophy</h3>
              <p className="text-lg leading-relaxed">
                I never consider business small or big. For me, the key values are Halal earnings, ethics, and sustainability. 
                I strongly believe that with the right partners and investment groups, success in any sector is achievable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 