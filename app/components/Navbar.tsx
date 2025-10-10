'use client';

import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 h-20">
      <div className="flex items-center justify-between px-6 h-full">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/images/logo.png" alt="Mustang Group" className="h-18 w-auto" />
        </div>
        
        {/* Optional: Right side content */}
        <div className="text-gray-600 text-lg font-large">
          Mustang Group Ltd.
        </div>
      </div>
    </nav>
  );
}