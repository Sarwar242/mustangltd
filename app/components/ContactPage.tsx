'use client';

import { useState, useEffect } from 'react';

interface ContactPageProps {
  onBack: () => void;
}

export default function ContactPage({ onBack }: ContactPageProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const contactDetails = [
    {
      icon: '📍',
      label: 'Address',
      value: 'A3, House 646, Mirpur , Dhaka-1216, Bangladesh.'
    },
    {
      icon: '📞',
      label: 'Phone',
      value: '+60 18-209 5258'
    },
    {
      icon: '📠',
      label: 'Fax',
      value: '+60 18-209 5258'
    },
    {
      icon: '✉️',
      label: 'Email',
      value: 'info@mustanggroup.io'
    },
    {
      icon: '🌐',
      label: 'Website',
      value: 'www.mustanggroup.io'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Contact Details Content */}
      <div className="flex flex-col justify-center min-h-screen px-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            CONTACT DETAILS
          </h2>
          
          <div className="space-y-8 max-w-md mx-auto">
            {contactDetails.map((detail, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-8 h-8 flex items-center justify-center text-xl">
                  {detail.icon}
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-600 font-medium">
                    {detail.label}
                  </div>
                  <div className="text-lg text-gray-800 font-semibold">
                    {detail.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
} 