'use client';

import React from 'react';

interface MainContentProps {
  children: React.ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <div className="ml-80 mt-16 min-h-screen bg-gray-100">
      {children}
    </div>
  );
}