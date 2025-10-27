'use client';

import React, { useState, useEffect } from 'react';

interface MainContentProps {
  children: React.ReactNode;
  sidebarCollapsed?: boolean;
}

export default function MainContent({ children, sidebarCollapsed = false }: MainContentProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={`min-h-screen bg-gray-100 transition-all duration-300 ${
      isMobile ? 'mt-14' : 'mt-16 lg:mt-20'
    } ${
      sidebarCollapsed ? 'ml-0' : isMobile ? 'ml-20' : 'ml-80'
    }`}>
      {children}
    </div>
  );
}