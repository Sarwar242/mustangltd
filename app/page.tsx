'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import Loader from './components/Loader';
import LandingScreen from './components/LandingScreen';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import WhatWeDoPage from './components/WhatWeDoPage';
import ConcernsPage from './components/ConcernsPage';
import SlideTransition from './components/SlideTransition';
import Curtain from './components/Curtain';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState<'landing' | 'content'>('landing');
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showTransition, setShowTransition] = useState(false);

  // New curtain state
  const [curtainActive, setCurtainActive] = useState(false);
  const [curtainPhase, setCurtainPhase] = useState<'open' | 'close'>('open');
  const curtainDuration = 1500;

  const handleLoaderComplete = () => {
    // Mount landing immediately, then play only the reveal (open) effect
    setIsLoading(false);
    setCurrentView('landing');
    setActiveSection(null);

    // Force curtains to closed for a single frame, then open for full duration
    setCurtainActive(true);
    setCurtainPhase('close');
    requestAnimationFrame(() => {
      setCurtainPhase('open');
      window.setTimeout(() => setCurtainActive(false), curtainDuration);
    });
  };

  // Clicking a menu: close current view, switch content while covered, then open
  const handleNavigate = (section: any) => {
    setCurtainActive(true);
    // Start closing immediately
    setCurtainPhase('close');

    // Switch content mid-cover for smooth reveal
    const switchDelay = Math.floor(curtainDuration * 0.6);
    window.setTimeout(() => {
      setActiveSection(section);
      setCurrentView('content');
      setShowTransition(true);
      // Open to reveal target content
      setCurtainPhase('open');
      // Deactivate after full close+open cycle
      window.setTimeout(() => setCurtainActive(false), curtainDuration * 2);
    }, switchDelay);
  };

  // Close button: close curtain, then switch to landing and open
  const handleBackToLanding = () => {
    setCurtainActive(true);
    setCurtainPhase('close');
    const switchDelay = Math.floor(curtainDuration * 0.6);
    window.setTimeout(() => {
      setShowTransition(false);
      setCurrentView('landing');
      setActiveSection(null);
      setCurtainPhase('open');
      window.setTimeout(() => setCurtainActive(false), curtainDuration * 2);
    }, switchDelay);
  };

  if (isLoading) {
    return <Loader onComplete={handleLoaderComplete} />;
  }

  // Render global curtain on top of everything
  const CurtainOverlay = (
    <Curtain
      active={curtainActive}
      phase={curtainPhase}
      duration={curtainDuration}
      darkness={0.6}
    />
  );

  if (currentView === 'landing') {
    return (
      <>
        <SlideTransition isVisible={true} direction="left" duration={1}>
          <LandingScreen onNavigate={handleNavigate} />
        </SlideTransition>
        {CurtainOverlay}
      </>
    );
  }

  // Handle different page sections
  if (activeSection === 'contact') {
    return (
      <>
        <SlideTransition isVisible={showTransition} direction="left" duration={1}>
          <ContactPage onBack={handleBackToLanding} />
        </SlideTransition>
        {CurtainOverlay}
      </>
    );
  }

  if (activeSection === 'about') {
    return (
      <>
        <SlideTransition isVisible={showTransition} direction="left" duration={1}>
          <AboutPage onBack={handleBackToLanding} />
        </SlideTransition>
        {CurtainOverlay}
      </>
    );
  }

  if (activeSection === 'what-we-do') {
    return (
      <>
        <SlideTransition isVisible={showTransition} direction="left" duration={1}>
          <WhatWeDoPage onBack={handleBackToLanding} />
        </SlideTransition>
        {CurtainOverlay}
      </>
    );
  }

  if (activeSection === 'concerns') {
    return (
      <>
        <SlideTransition isVisible={showTransition} direction="left" duration={1}>
          <ConcernsPage onBack={handleBackToLanding} />
        </SlideTransition>
        {CurtainOverlay}
      </>
    );
  }

  return (
    <>
      <SlideTransition isVisible={showTransition} direction="right" duration={500}>
        <div className="min-h-screen bg-gray-900 text-white">
          {/* Fallback content (legacy) */}
        </div>
      </SlideTransition>
      {CurtainOverlay}
    </>
  );
}
