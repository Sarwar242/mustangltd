'use client';

import Image from 'next/image';
import { useState } from 'react';

interface LandingScreenProps {
  onNavigate: (section: string) => void;
}

export default function LandingScreen({ onNavigate }: LandingScreenProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuItems = [
    {
      id: 'about',
      title: 'ABOUT US',
      background: '/images/menu/profile_btn.jpg',
      description: 'Learn about our story and mission'
    },
    {
      id: 'what-we-do',
      title: 'WHAT WE DO',
      background: '/images/menu/resume_btn.jpg',
      description: 'Explore our services and capabilities'
    },
    {
      id: 'concerns',
      title: 'OUR CONCERNS',
      background: '/images/menu/portfolio_btn.jpg',
      description: 'Discover our business divisions'
    },
    {
      id: 'contact',
      title: 'CONTACT',
      background: '/images/menu/contact_btn.jpg',
      description: 'Get in touch with us'
    }
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Logo */}
      <div className="w-2/5 bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mr-4">
              <div className="w-8 h-8 bg-red-500 transform rotate-45"></div>
            </div>
            <div className="text-left">
              <h1 className="text-3xl font-bold text-gray-800">LONE STAR</h1>
              <div className="w-full h-0.5 bg-gray-800 mt-1"></div>
              <p className="text-sm text-gray-600 mt-1">GROUP</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Menu Items */}
      <div className="w-3/5 flex flex-col">
        {menuItems.map((item, index) => (
          <div
            key={item.id}
            className="flex-1 relative overflow-hidden cursor-pointer group"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => onNavigate(item.id)}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{
                backgroundImage: `url(${item.background})`,
                filter: 'brightness(0.3)'
              }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-white mb-2 transition-all duration-300 group-hover:text-red-400">
                  {item.title}
                </h2>
                {hoveredItem === item.id && (
                  <p className="text-white text-lg animate-fade-in">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 