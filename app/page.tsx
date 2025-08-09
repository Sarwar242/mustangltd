'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import Loader from './components/Loader';
import LandingScreen from './components/LandingScreen';
import ContactPage from './components/ContactPage';
import SlideTransition from './components/SlideTransition';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState<'landing' | 'content'>('landing');
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showTransition, setShowTransition] = useState(false);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  const handleNavigate = (section: any) => {
    setActiveSection(section);
    setCurrentView('content');
    setShowTransition(true);
  };

  const handleBackToLanding = () => {
    setShowTransition(false);
    setTimeout(() => {
      setCurrentView('landing');
      setActiveSection(null);
    }, 300);
  };

  if (isLoading) {
    return <Loader onComplete={handleLoaderComplete} />;
  }

  if (currentView === 'landing') {
    return (
      <SlideTransition isVisible={true} direction="up" duration={500}>
        <LandingScreen  />
      </SlideTransition>
    );
  }

  // Special handling for contact page
  if (activeSection === 'contact') {
    return (
      <SlideTransition isVisible={showTransition} direction="right" duration={500}>
        <ContactPage onBack={handleBackToLanding} />
      </SlideTransition>
    );
  }

  return (
    <SlideTransition isVisible={showTransition} direction="right" duration={500}>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Header with back button */}
        <header className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-3">
                <div className="w-4 h-4 bg-red-500 transform rotate-45"></div>
              </div>
              <h1 className="text-xl font-bold">LONE STAR GROUP</h1>
            </div>
            <button
              onClick={handleBackToLanding}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded transition-colors"
            >
              Back to Menu
            </button>
          </div>
        </header>

        {/* Content Sections */}
        <main className="container mx-auto px-4 py-8">
          {activeSection === 'about' && (
            <section className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-red-500">ABOUT US</h2>
              <div className="w-1/4 mx-auto border-b-2 border-red-500 mb-8"></div>
              <h3 className="text-2xl font-bold text-center mb-8 text-red-400">STORY OF GLORY</h3>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Established in 1985 with Muhsin & Co., Lone Star Group has added
                  Defense Purchase, Energy, Infrastructure, Hospitality Management,
                  International Trade and Information Technology sectors to its
                  operations by growing sustainably over time.
                </p>
                <p>
                  Since its enlistment in 1995, Muhsin & Co Ltd has successfully
                  completed many defense supplying contracts with the Air Force, Army
                  and Navy of Bangladesh. Every year the business and service is
                  growing rapidly.
                </p>
                <p>
                  Lone Star Infrastructure owns, operates, and invests in
                  infrastructure development projects to generate superior
                  risk-adjusted investment returns.
                </p>
                <p>
                  Lone Star Hospitality works with the biggest hotel chains and it is
                  growing sustainably. Lone Star Energy is active in the whole
                  energy value chain including electricity generation and
                  distribution. Under its strategic targets, Lone Star Energy
                  continues to develop new projects in order to meet Bangladesh's
                  energy demand.
                </p>
                <p>
                  Lone Star International provides trade services to various
                  international and local clients, working in all the sectors it
                  exists with its experienced and trained manpower within the
                  principle of maximum productivity and effectiveness and occupying a
                  prominent place among the leading companies.
                </p>
              </div>
            </section>
          )}

          {activeSection === 'what-we-do' && (
            <section className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-red-500">WHAT WE DO?</h2>
              <div className="w-1/4 mx-auto border-b-2 border-red-500 mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center border border-gray-700 p-6 rounded-lg bg-gray-800 bg-opacity-50 hover:bg-gray-700 transition-colors">
                  <h3 className="font-bold text-red-400 text-xl mb-4">DEFENSE PURCHASE</h3>
                  <p className="text-gray-300">
                    Muhsin & Company (MCL) got enlisted with Directoriate General of
                    Defence Purchase (DGDP), Ministry of Defence, Govt. of
                    Bangladesh in 1996 (in all groups) REG. No. is
                    207/5/2557/DGDP.
                  </p>
                </div>
                <div className="text-center border border-gray-700 p-6 rounded-lg bg-gray-800 bg-opacity-50 hover:bg-gray-700 transition-colors">
                  <h3 className="font-bold text-red-400 text-xl mb-4">ENERGY & POWER</h3>
                  <p className="text-gray-300">
                    Lone Star Energy is a fully integrated energy company in
                    Bangladesh. Engaged in electricity generation, transmission and
                    distribution in the country.
                  </p>
                </div>
                <div className="text-center border border-gray-700 p-6 rounded-lg bg-gray-800 bg-opacity-50 hover:bg-gray-700 transition-colors">
                  <h3 className="font-bold text-red-400 text-xl mb-4">HOSPITALITY</h3>
                  <p className="text-gray-300">
                    Lone Star Hospitality is an innovative hotel and hospitality
                    management company that is guided by the core values of
                    integrity, hard work and building synergistic relations with
                    hotel owners, brands and partners.
                  </p>
                </div>
                <div className="text-center border border-gray-700 p-6 rounded-lg bg-gray-800 bg-opacity-50 hover:bg-gray-700 transition-colors">
                  <h3 className="font-bold text-red-400 text-xl mb-4">INTERNATIONAL TRADE</h3>
                  <p className="text-gray-300">
                    Lone Star International has established favorable business
                    relations with major countries and regions in the world, with a
                    professional team engaged in wide business lines.
                  </p>
                </div>
                <div className="text-center border border-gray-700 p-6 rounded-lg bg-gray-800 bg-opacity-50 hover:bg-gray-700 transition-colors">
                  <h3 className="font-bold text-red-400 text-xl mb-4">INFORMATION TECHNOLOGY</h3>
                  <p className="text-gray-300">
                    Lone Star Apps is a leading value-added company that
                    specializes in developing, marketing and distributing Smart
                    Device Applications.
                  </p>
                </div>
                <div className="text-center border border-gray-700 p-6 rounded-lg bg-gray-800 bg-opacity-50 hover:bg-gray-700 transition-colors">
                  <h3 className="font-bold text-red-400 text-xl mb-4">INFRASTRUCTURE</h3>
                  <p className="text-gray-300">
                    Lone Star Infrastructure is a leading contractor and industrial
                    manufacturing group, active in the energy, infrastructure and
                    defense sectors.
                  </p>
                </div>
              </div>
            </section>
          )}

          {activeSection === 'concerns' && (
            <section className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-red-500">CONCERNS</h2>
              <div className="w-1/4 mx-auto border-b-2 border-red-500 mb-8"></div>
              <div className="flex flex-wrap justify-center items-center gap-8">
                <a href="http://www.muhsinandco.com/" className="hover:scale-105 transition-transform">
                  <Image src="/images/portfolio/thumbs/mcl.png" alt="MCL" width={120} height={120} />
                </a>
                <a href="http://www.lonestarenergy.xyz/" className="hover:scale-105 transition-transform">
                  <Image src="/images/portfolio/thumbs/lse.png" alt="LSE" width={120} height={120} />
                </a>
                <a href="http://www.lonestarhospitality.xyz/" className="hover:scale-105 transition-transform">
                  <Image src="/images/portfolio/thumbs/lsh.png" alt="LSH" width={120} height={120} />
                </a>
                <a href="http://www.lonestarinternational.xyz/" className="hover:scale-105 transition-transform">
                  <Image src="/images/portfolio/thumbs/lsi.png" alt="LSI" width={120} height={120} />
                </a>
                <a href="https://www.lonestarapps.com/" className="hover:scale-105 transition-transform">
                  <Image src="/images/portfolio/thumbs/lsa.png" alt="LSA" width={120} height={120} />
                </a>
                <a href="http://www.lonestarinfrastructure.xyz/" className="hover:scale-105 transition-transform">
                  <Image src="/images/portfolio/thumbs/lsinfra.png" alt="LSINFRA" width={120} height={120} />
                </a>
              </div>
            </section>
          )}
        </main>

        <footer className="text-center py-8 bg-gray-800">
          <p>© 2024 Lone Star Group. All Rights Reserved.</p>
        </footer>
      </div>
    </SlideTransition>
  );
}
