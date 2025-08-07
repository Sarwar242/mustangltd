'use client';

import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import LandingPage from './components/LandingPage';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? <Loader /> : <LandingPage />}
    </div>
  );
}
