'use client';

import React, { useState } from 'react';

interface MenuItem {
  id: string;
  title: string;
  bgImage: string;
  description: string;
}

interface SidebarProps {
  onNavigate: (section: string) => void;
  activeSection: string | null;
}

export default function Sidebar({ onNavigate, activeSection }: SidebarProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    {
      id: 'about',
      title: 'ABOUT US',
      bgImage: '/images/menu/profile_btn.jpg',
      description: 'Learn about our story and mission'
    },
    {
      id: 'what-we-do',
      title: 'WHAT WE DO',
      bgImage: '/images/menu/portfolio_btn.jpg',
      description: 'Explore our services and capabilities'
    },
    {
      id: 'concerns',
      title: 'OUR CONCERNS',
      bgImage: '/images/menu/resume_btn.jpg',
      description: 'Discover our business divisions'
    },
    {
      id: 'contact',
      title: 'CONTACT',
      bgImage: '/images/menu/contact_btn.jpg',
      description: 'Get in touch with us'
    }
  ];

  return (
    <div className="fixed left-0 top-16 bottom-0 w-80 bg-gray-900 shadow-lg z-40">
      <div className="flex flex-col h-full">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`flex-1 relative overflow-hidden cursor-pointer group transition-all duration-300 ${
              activeSection === item.id ? 'bg-red-900' : ''
            }`}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => onNavigate(item.id)}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-500 group-hover:scale-110 z-0"
              style={{ backgroundImage: `url(${item.bgImage})` }}
            ></div>
            
            {/* Overlay */}
            <div className={`absolute inset-0 transition-all duration-300 z-10 ${
              activeSection === item.id 
                ? 'bg-red-900 opacity-80' 
                : 'bg-black opacity-70 group-hover:opacity-50'
            }`}></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center z-20 px-6">
              <div className="text-left transform group-hover:scale-105 transition-all duration-300">
                <h2 className={`text-lg font-bold text-white mb-2 tracking-wider transition-all duration-300 ${
                  activeSection === item.id ? 'text-yellow-300' : ''
                }`}>
                  {item.title}
                </h2>
                
                {/* Animated underline */}
                <div className={`h-0.5 transition-all duration-300 mb-3 ${
                  activeSection === item.id 
                    ? 'w-20 bg-yellow-300' 
                    : hoveredItem === item.id 
                      ? 'w-16 bg-white' 
                      : 'w-8 bg-gray-400'
                }`}></div>
                
                {/* Description */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  hoveredItem === item.id || activeSection === item.id 
                    ? 'max-h-16 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-white text-sm font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Active indicator */}
            {activeSection === item.id && (
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-yellow-300 z-30"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}