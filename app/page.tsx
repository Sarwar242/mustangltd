'use client';

import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import WhatWeDoPage from './components/WhatWeDoPage';
import ConcernsPage from './components/ConcernsPage';
import SlideTransition from './components/SlideTransition';
import Curtain from './components/Curtain';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showTransition, setShowTransition] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // New curtain state
  const [curtainActive, setCurtainActive] = useState(false);
  const [curtainPhase, setCurtainPhase] = useState<'open' | 'close'>('open');
  const curtainDuration = 1500;

  const handleLoaderComplete = () => {
    setIsLoading(false);
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
      setShowTransition(true);
      // Open to reveal target content
      setCurtainPhase('open');
      // Deactivate after full close+open cycle
      window.setTimeout(() => setCurtainActive(false), curtainDuration * 2);
    }, switchDelay);
  };

  // Navigation back to home
  const handleBackToHome = () => {
    setCurtainActive(true);
    setCurtainPhase('close');
    const switchDelay = Math.floor(curtainDuration * 0.6);
    window.setTimeout(() => {
      setShowTransition(false);
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

  // Render content based on active section
  const renderMainContent = () => {
    if (activeSection === 'about') {
      return <AboutPage onBack={handleBackToHome} />;
    }
    if (activeSection === 'what-we-do') {
      return <WhatWeDoPage onBack={handleBackToHome} />;
    }
    if (activeSection === 'concerns') {
      return <ConcernsPage onBack={handleBackToHome} />;
    }
    if (activeSection === 'contact') {
      return <ContactPage onBack={handleBackToHome} />;
    }
    // Default home page
    return <HomePage />;
  };

  return (
    <>
      <Navbar />
      <Sidebar 
        onNavigate={handleNavigate} 
        activeSection={activeSection}
        onToggle={setSidebarCollapsed}
        isCollapsed={sidebarCollapsed}
      />
      <MainContent sidebarCollapsed={sidebarCollapsed}>
        <SlideTransition isVisible={true} direction="left" duration={1}>
          {renderMainContent()}
        </SlideTransition>
      </MainContent>
      {CurtainOverlay}
    </>
  );
}
