import React, { useState } from 'react';

interface MenuItem {
  id: string;
  title: string;
  bgImage: string;
  description: string;
}

const LoneStarLanding: React.FC = () => {
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

  const handleNavigate = (section: string) => {
    console.log(`Navigating to: ${section}`);
    // Add navigation logic here
  };

  return (
    <div className="min-h-screen h-screen flex bg-gray-900">
      {/* Left Section - Logo */}
      <div className="w-1/2 bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-gray-400 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-gray-400 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-gray-400 rounded-full"></div>
        </div>
        
        <div className="text-center z-10 transform hover:scale-105 transition-transform duration-3500">
          <div className="flex items-center justify-center mb-8">
            {/* Logo Circle */}
            {/* <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center mr-6 shadow-2xl">
                {/* Red Star */}
                {/*<div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 transform rotate-45 rounded-sm shadow-lg"></div>
                  <div className="absolute inset-0 w-10 h-10 bg-red-400 transform rotate-45 rounded-sm animate-pulse opacity-50"></div>
                </div>
              </div>
            </div>*/}
            
            {/* Company Name */}
            <div className="text-center">
              <img src="/images/home_dp1.jpg" alt="" />
            </div>
          </div>
          
          {/* Tagline */}
          {/* <div className="mt-8">
            <p className="text-gray-500 text-sm font-light italic">
              Excellence in Every Venture
            </p>
          </div> */}
        </div>
      </div>

      {/* Right Section - Menu Items */}
      <div className="w-1/2 flex flex-col">
        {menuItems.map((item, index) => (
          <div
            key={item.id}
            className="flex-1 relative overflow-hidden cursor-pointer group"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => handleNavigate(item.id)}
            style={{ minHeight: '25vh' }}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-4500 group-hover:scale-120 z-0"
              style={{ backgroundImage: `url(${item.bgImage})` }}
            ></div>
            
            {/* Overlay - Much lighter to show background image */}
            <div className="absolute inset-0 bg-[#1a1b23] opacity-80 group-hover:opacity-60 transition-all duration-3500 z-10"></div>
            
            {/* Gradient Overlay - Lighter for better image visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 group-hover:from-red-900/10 group-hover:to-blue-900/10 transition-all duration-4500 z-20"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center z-30">
              <div className="w-full grid grid-cols-12 h-full">
                {/* Title and Description Section - Takes 3 columns on the left */}
                <div className="col-span-2 flex items-center"></div>
                  <div className="col-span-7 flex items-center md:pl-10 md:ml-10">
                  <div className="text-left transform group-hover:scale-105 transition-all duration-2500">
                    <h2 className="text-2xl md:text-2xl font-bold text-white mb-4 tracking-wider transition-all duration-3000 drop-shadow-2xl">
                      {item.title}
                    </h2>
                    
                    {/* Animated underline */}
                    <div className="w-0 h-1 bg-[#949599] group-hover:w-32 transition-all duration-2500 mb-4"></div>
                    
                    {/* Description */}
                    <div className={`overflow-hidden transition-all duration-2500 ${hoveredItem === item.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-white text-lg font-light tracking-wide drop-shadow-lg">
                        {item.description}
                      </p>
                    </div>
                    
                    {/* Hover indicator */}
                    {hoveredItem === item.id && (
                      <div className="mt-4 animate-bounce">
                        <div className="w-2 h-2 bg-[#949599] rounded-full"></div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Empty space - Takes remaining 9 columns */}
                <div className="col-span-2"></div>
              </div>
            </div>
            
            {/* Subtle border effect */}
            <div className="absolute inset-0 border-l-4 border-transparent group-hover:border-[#949599] transition-all duration-2500"></div>
          </div>
        ))}
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="flex space-x-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                hoveredItem ? 'bg-red-500' : 'bg-gray-400'
              }`}
              style={{
                animationDelay: `${i * 0.1}s`,
                animation: hoveredItem ? 'pulse 1s infinite' : 'none'
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoneStarLanding;