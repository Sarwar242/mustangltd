import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Menu from './Menu';

const sections = [
  {
    title: 'ABOUT US',
    backgroundImage: '/images/menu/profile_btn.jpg',
    content: (
      <div>
        <h2 className="text-2xl font-bold text-center mb-8">ABOUT US</h2>
        <h3 className="text-xl font-bold text-center mb-4">STORY OF GLORY</h3>
        <p className="text-center max-w-4xl mx-auto">
          Established in 1985 with Muhsin & Co., Lone Star Group has added
          Defense Purchase, Energy, Infrastructure, Hospitality Management,
          International Trade and Information Technology sectors to its
          operations by growing sustainably over time.
        </p>
      </div>
    ),
  },
  {
    title: 'WHAT WE DO',
    backgroundImage: '/images/menu/resume_btn.jpg',
    content: (
      <div>
        <h2 className="text-2xl font-bold text-center mb-8">WHAT WE DO?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-bold">DEFENSE PURCHASE</h3>
              <p>
                Muhsin & Company (MCL) got enlisted with Directoriate General of
                Defence Purchase (DGDP), Ministry of Defence, Govt. of
                Bangladesh in 1996 (in all groups) REG. No. is
                207/5/2557/DGDP.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold">ENERGY & POWER</h3>
              <p>
                Lone Star Energy is a fully integrated energy company in
                Bangladesh. Engaged in electricity generation, transmission and
                distribution in the country.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold">HOSPITALITY</h3>
              <p>
                Lone Star Hospitality is an innovative hotel and hospitality
                management company that is guided by the core values of
                integrity, hard work and building synergistic relations with
                hotel owners, brands and partners.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold">INTERNATIONAL TRADE</h3>
              <p>
                Lone Star International has established favorable business
                relations with major countries and regions in the world, with a
                professional team engaged in wide business lines.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold">INFORMATION TECHNOLOGY</h3>
              <p>
                Lone Star Apps is a leading value-added company that
                specializes in developing, marketing and distributing Smart
                Device Applications.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold">INFRASTRUCTURE</h3>
              <p>
                Lone Star Infrastructure is a leading contractor and industrial
                manufacturing group, active in the energy, infrastructure and
                defense sectors.
              </p>
            </div>
          </div>
      </div>
    ),
  },
  {
    title: 'OUR CONCERNS',
    backgroundImage: '/images/menu/portfolio_btn.jpg',
    content: (
        <div>
            <h2 className="text-2xl font-bold text-center mb-8">CONCERNS</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
            <a href="http://www.muhsinandco.com/">
              <Image src="/images/portfolio/thumbs/mcl.png" alt="MCL" width={120} height={120} />
            </a>
            <a href="http://www.lonestarenergy.xyz/">
              <Image src="/images/portfolio/thumbs/lse.png" alt="LSE" width={120} height={120} />
            </a>
            <a href="http://www.lonestarhospitality.xyz/">
              <Image src="/images/portfolio/thumbs/lsh.png" alt="LSH" width={120} height={120} />
            </a>
            <a href="http://www.lonestarinternational.xyz/">
              <Image src="/images/portfolio/thumbs/lsi.png" alt="LSI" width={120} height={120} />
            </a>
            <a href="https://www.lonestarapps.com/">
              <Image src="/images/portfolio/thumbs/lsa.png" alt="LSA" width={120} height={120} />
            </a>
            <a href="http://www.lonestarinfrastructure.xyz/">
              <Image src="/images/portfolio/thumbs/lsinfra.png" alt="LSINFRA" width={120} height={120} />
            </a>
          </div>
        </div>
    ),
  },
  {
    title: 'CONTACT',
    backgroundImage: '/images/menu/contact_btn.jpg',
    content: (
        <div>
            <h2 className="text-2xl font-bold text-center mb-8">CONTACT</h2>
            <div className="text-center">
                <h3 className="font-bold">CONTACT DETAILS</h3>
                <p>A3, House 646, Mirpur DOHS, Dhaka- 1216, Bangladesh.</p>
                <p>+880 2 5807 0221</p>
                <p>+880 2 5807 0249</p>
                <p>info@lonestargroup.xyz</p>
                <p>www.lonestargroup.xyz</p>
            </div>
        </div>
    ),
  },
];

const LandingPage = () => {
  const [selectedMenu, setSelectedMenu] = useState<number | null>(null);

  const handleMenuClick = (index: number) => {
    setSelectedMenu(index);
  };

  const handleClose = () => {
    setSelectedMenu(null);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex items-center justify-center">
        <Image
          src="/images/home_dp1.jpg"
          alt="Lone Star Group"
          width={500}
          height={500}
        />
      </div>
      <div className="w-1/2 flex flex-col">
        {sections.map((section, index) => (
          <Menu
            key={index}
            title={section.title}
            backgroundImage={section.backgroundImage}
            onClick={() => handleMenuClick(index)}
          />
        ))}
      </div>
      <AnimatePresence>
        {selectedMenu !== null && (
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-white p-16 overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5 }}
          >
            <button onClick={handleClose} className="absolute top-4 right-4 text-2xl">&times;</button>
            {sections[selectedMenu].content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
