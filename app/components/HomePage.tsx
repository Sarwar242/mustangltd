'use client';

import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-4 md:px-8">
        {/* Welcome Section */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight">
            Welcome to <span className="text-red-600">Mustang Group</span>
          </h1>
          <div className="w-24 md:w-32 h-1 bg-red-600 mx-auto mb-6 md:mb-8"></div>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Excellence in Every Venture - A diversified conglomerate operating across 
            multiple sectors including defense, power generation, infrastructure, 
            education, and manufacturing since 1985.
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
            <div className="text-2xl md:text-3xl font-bold text-red-600 mb-2">35+</div>
            <div className="text-sm md:text-base text-gray-600">Years of Experience</div>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
            <div className="text-2xl md:text-3xl font-bold text-red-600 mb-2">6</div>
            <div className="text-sm md:text-base text-gray-600">Business Divisions</div>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
            <div className="text-2xl md:text-3xl font-bold text-red-600 mb-2">108MW</div>
            <div className="text-sm md:text-base text-gray-600">Power Generation</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 md:p-8 rounded-lg">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Explore Our Business</h3>
          <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6">
            Use the navigation menu to learn more about our services, business divisions, 
            company history, and how to get in touch with us.
          </p>
          <div className="flex justify-center space-x-3 md:space-x-4">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}