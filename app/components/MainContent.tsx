'use client';

import React from 'react';

interface MainContentProps {
  children: React.ReactNode;
  sidebarCollapsed?: boolean;
}

export default function MainContent({ children, sidebarCollapsed = false }: MainContentProps) {
  return (
    <div className={`mt-16 min-h-screen bg-gray-100 transition-all duration-300 ${
      sidebarCollapsed ? 'ml-0' : 'ml-80'
    }`}>
      {children}
    </div>
  );
}