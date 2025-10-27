'use client';

import React, { useState, useEffect, useRef } from 'react';

interface MenuItem {
  id: string;
  title: string;
  icon: string;
  description: string;
}

interface SidebarProps {
  onNavigate: (section: string) => void;
  activeSection: string | null;
  onToggle?: (collapsed: boolean) => void;
  isCollapsed?: boolean;
}

export default function Sidebar({ onNavigate, activeSection, onToggle, isCollapsed = false }: SidebarProps) {
  const [isLocked, setIsLocked] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const lockButtonRef = useRef<HTMLButtonElement>(null);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const menuItems: MenuItem[] = [
    {
      id: 'about',
      title: 'ABOUT US',
      icon: '👥',
      description: 'Learn about our story and mission'
    },
    {
      id: 'what-we-do',
      title: 'WHAT WE DO',
      icon: '🏢',
      description: 'Explore our services and capabilities'
    },
    {
      id: 'concerns',
      title: 'OUR CONCERNS',
      icon: '🎯',
      description: 'Discover our business divisions'
    },
    {
      id: 'contact',
      title: 'CONTACT',
      icon: '📞',
      description: 'Get in touch with us'
    }
  ];

  // Mobile short titles
  const getMobileTitle = (title: string) => {
    const titleMap: { [key: string]: string } = {
      'ABOUT US': 'ABOUT',
      'WHAT WE DO': 'SERVICES',
      'OUR CONCERNS': 'BUSINESS',
      'CONTACT': 'CONTACT'
    };
    return titleMap[title] || title;
  };

  const handleToggle = () => {
    if (!isLocked && onToggle) {
      onToggle(!isCollapsed);
    }
  };

  const handleLockToggle = () => {
    setIsLocked(!isLocked);
  };

  // Handle click outside to collapse sidebar when unlocked
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // On mobile, always auto-collapse when clicking outside (unless locked)
      // On desktop, only collapse if unlocked
      const shouldCollapse = isMobile ? !isLocked : (!isLocked && !isCollapsed);
      
      if (!shouldCollapse) return;
      
      // Don't collapse if clicking on sidebar, toggle button, or lock button
      if (
        sidebarRef.current?.contains(target) ||
        toggleButtonRef.current?.contains(target) ||
        lockButtonRef.current?.contains(target)
      ) {
        return;
      }
      
      // Collapse the sidebar
      if (onToggle) {
        onToggle(true); // true means collapse
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLocked, isCollapsed, onToggle, isMobile]);

  return (
    <>
      {/* Toggle Button */}
      <button
        ref={toggleButtonRef}
        onClick={handleToggle}
        className={`fixed z-50 bg-white shadow-lg rounded-r-lg transition-all duration-300 flex items-center justify-center group hover:bg-gray-50 ${
          isCollapsed ? 'left-0' : isMobile ? 'left-20' : 'left-80'
        } ${isLocked ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} ${
          isMobile ? 'top-16' : 'top-20'
        }`}
        style={{ 
          width: isMobile ? '20px' : '32px', 
          height: isMobile ? '30px' : '40px' 
        }}
        disabled={isLocked}
      >
        <svg 
          className={`text-gray-600 transition-transform duration-300 ${
            isMobile ? 'w-3 h-3' : 'w-4 h-4'
          } ${isCollapsed ? '' : 'rotate-180'} ${isLocked ? '' : 'group-hover:scale-110'}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Lock Toggle Button - Hidden on mobile */}
      <button
        ref={lockButtonRef}
        onClick={handleLockToggle}
        className={`fixed z-50 bg-white shadow-lg rounded-r-lg transition-all duration-300 flex items-center justify-center group hover:bg-gray-50 ${
          isCollapsed ? 'left-0' : isMobile ? 'left-64' : 'left-80'
        } ${isMobile ? 'hidden' : 'block'} ${
          isMobile ? 'top-20' : 'top-28'
        }`}
        style={{ width: '32px', height: '32px' }}
        title={isLocked ? 'Unlock sidebar' : 'Lock sidebar'}
      >
        <svg 
          className={`w-3.5 h-3.5 transition-all duration-300 group-hover:scale-110 ${
            isLocked ? 'text-red-500' : 'text-gray-400'
          }`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {isLocked ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <div 
        ref={sidebarRef}
        className={`fixed left-0 bg-white border-r border-gray-200 shadow-xl z-40 transition-all duration-300 ${
          isCollapsed ? 'w-0' : isMobile ? 'w-20' : 'w-80'
        } ${isMobile ? 'top-14' : 'top-16'} bottom-0`}
      >
        <div className={`flex flex-col h-full overflow-hidden ${isCollapsed ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className={`flex-1 relative cursor-pointer group transition-all duration-300 border-b border-gray-100 last:border-b-0 ${
                activeSection === item.id 
                  ? 'bg-gradient-to-r from-red-50 to-red-100 border-red-200' 
                  : 'hover:bg-gray-50'
              }`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => onNavigate(item.id)}
            >
              {/* Content */}
              <div className={`h-full flex items-center justify-center transition-all duration-300 ${
                isMobile ? 'px-1 py-2' : 'px-6 py-4'
              }`}>
                {isMobile ? (
                  /* Mobile: Icon + Short Title */
                  <div className="flex flex-col items-center text-center">
                    <div className={`transition-all duration-300 text-base mb-1 ${
                      activeSection === item.id ? 'scale-110 text-red-600' : 'text-gray-600 group-hover:scale-105 group-hover:text-gray-800'
                    }`}>
                      {item.icon}
                    </div>
                    <div className={`text-xs font-medium transition-all duration-300 leading-tight ${
                      activeSection === item.id ? 'text-red-600' : 'text-gray-600 group-hover:text-gray-800'
                    }`}>
                      {getMobileTitle(item.title)}
                    </div>
                  </div>
                ) : (
                  /* Desktop: Full content */
                  <div className="flex items-center w-full">
                    {/* Icon */}
                    <div className={`transition-all duration-300 text-2xl mr-4 ${
                      activeSection === item.id ? 'scale-110' : 'group-hover:scale-105'
                    }`}>
                      {item.icon}
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 className={`font-semibold transition-all duration-300 text-sm md:text-base ${
                        activeSection === item.id 
                          ? 'text-red-700' 
                          : 'text-gray-700 group-hover:text-gray-900'
                      }`}>
                        {item.title}
                      </h3>
                      
                      {/* Animated underline */}
                      <div className={`h-0.5 transition-all duration-300 mt-1 ${
                        activeSection === item.id 
                          ? 'w-16 bg-red-500' 
                          : hoveredItem === item.id 
                            ? 'w-12 bg-gray-400' 
                            : 'w-6 bg-gray-200'
                      }`}></div>
                      
                      {/* Description */}
                      <div className={`overflow-hidden transition-all duration-300 ${
                        hoveredItem === item.id || activeSection === item.id 
                          ? 'max-h-12 opacity-100 mt-2' 
                          : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-xs text-gray-500 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Arrow indicator */}
                    <div className={`transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'opacity-100 text-red-500' 
                        : hoveredItem === item.id 
                          ? 'opacity-70 text-gray-400' 
                          : 'opacity-0'
                    }`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Active indicator */}
              {activeSection === item.id && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}