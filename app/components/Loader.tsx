'use client';

import { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for fade out animation
    }, 2000); // Show loader for 2 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50 transition-opacity duration-500">
      <div className="w-4 h-4 bg-red-500 transform rotate-45 animate-pulse"></div>
    </div>
  );
} 