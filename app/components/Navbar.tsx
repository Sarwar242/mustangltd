'use client';

import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 h-14 md:h-16 lg:h-20">
      <div className="flex items-center justify-between px-4 md:px-6 h-full">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/images/logo.png" 
            alt="Mustang Group" 
            className="h-8 md:h-12 lg:h-16 w-auto" 
          />
        </div>
        
        {/* Company name - responsive text */}
        <div className="hidden sm:block text-gray-600 text-xs md:text-sm lg:text-lg font-medium lg:font-large">
          Mustang Group Ltd.
        </div>
      </div>
    </nav>
  );
}