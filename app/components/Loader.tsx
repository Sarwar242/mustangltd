'use client';

import { useEffect, useState } from 'react';
import './loader.scss';
interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 100); // Wait for fade out animation
    }, 1500); // Show loader for 2 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return null;
  }

  return (

    <div>

      <h1 className="text-white text-4xl font-bold text-center mt-20 pt-10 top-auto">MUSTANG GROUP</h1>
      <div className="hoverPad"></div>
      <div className="hoverPad"></div>
      <div className="hoverPad"></div>
      <div className="hoverPad"></div>
      <div className="hoverPad"></div>
      <div className="hoverPad"></div>
      <div className="hoverPad"></div>
      <div className="hoverPad"></div>
      <div className="hoverPad"></div>
      <div className="hoverPad"></div>

      <div className="towerOuter">
        <div className="tower">
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>

          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>

          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>
          <div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div><div className="card"></div>

          <div className="shadow"></div>
        </div>
      </div>
    </div>
  );
} 