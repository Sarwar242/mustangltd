import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <header className="text-center py-8">
        <Image
          src="/images/home_dp1.jpg"
          alt="Lone Star Group"
          width={300}
          height={300}
          priority
        />
        <nav className="flex justify-center space-x-8 mt-4">
          <a href="#about">
            <Image
              src="/images/menu/profile_btn.jpg"
              alt="About Us"
              width={150}
              height={50}
            />
          </a>
          <a href="#what-we-do">
            <Image
              src="/images/menu/resume_btn.jpg"
              alt="What We Do"
              width={150}
              height={50}
            />
          </a>
          <a href="#concerns">
            <Image
              src="/images/menu/portfolio_btn.jpg"
              alt="Our Concerns"
              width={150}
              height={50}
            />
          </a>
          <a href="#contact">
            <Image
              src="/images/menu/contact_btn.jpg"
              alt="Contact"
              width={150}
              height={50}
            />
          </a>
        </nav>
      </header>

      <main>
        <section id="about" className="py-16">
          <h2 className="text-2xl font-bold text-center mb-4 text-red-500">ABOUT US</h2>
          <div className="w-1/4 mx-auto border-b-2 border-red-500 mb-8"></div>
          <h3 className="text-xl font-bold text-center mb-4 text-red-400">STORY OF GLORY</h3>
          <p className="text-center max-w-4xl mx-auto">
            Established in 1985 with Muhsin & Co., Lone Star Group has added
            Defense Purchase, Energy, Infrastructure, Hospitality Management,
            International Trade and Information Technology sectors to its
            operations by growing sustainably over time.
          </p>
          <p className="text-center max-w-4xl mx-auto mt-4">
            Since its enlistment in 1995, Muhsin & Co Ltd has successfully
            completed many defense supplying contracts with the Air Force, Army
            and Navy of Bangladesh. Every year the business and service is
            growing rapidly.
          </p>
          <p className="text-center max-w-4xl mx-auto mt-4">
            Lone Star Infrastructure owns, operates, and invests in
            infrastructure development projects to generate superior
            risk-adjusted investment returns.
          </p>
          <p className="text-center max-w-4xl mx-auto mt-4">
            Lone Star Hospitality works with the biggest hotel chains and it is
            growing sustainably. Lone Star Energy is active in the whole
            energy value chain including electricity generation and
            distribution. Under its strategic targets, Lone Star Energy
            continues to develop new projects in order to meet Bangladesh’s
            energy demand.
          </p>
          <p className="text-center max-w-4xl mx-auto mt-4">
            Lone Star International provides trade services to various
            international and local clients, working in all the sectors it
            exists with its experienced and trained manpower within the
            principle of maximum productivity and effectiveness and occupying a
            prominent place among the leading companies.
          </p>
        </section>

        <section id="what-we-do" className="py-16">
          <h2 className="text-2xl font-bold text-center mb-4 text-red-500">WHAT WE DO?</h2>
          <div className="w-1/4 mx-auto border-b-2 border-red-500 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center border border-gray-700 p-4 rounded-lg bg-gray-800 bg-opacity-50">
              <h3 className="font-bold text-red-400">DEFENSE PURCHASE</h3>
              <p className="text-gray-300">
                Muhsin & Company (MCL) got enlisted with Directoriate General of
                Defence Purchase (DGDP), Ministry of Defence, Govt. of
                Bangladesh in 1996 (in all groups) REG. No. is
                207/5/2557/DGDP.
              </p>
            </div>
            <div className="text-center border border-gray-700 p-4 rounded-lg bg-gray-800 bg-opacity-50">
              <h3 className="font-bold text-red-400">ENERGY & POWER</h3>
              <p className="text-gray-300">
                Lone Star Energy is a fully integrated energy company in
                Bangladesh. Engaged in electricity generation, transmission and
                distribution in the country.
              </p>
            </div>
            <div className="text-center border border-gray-700 p-4 rounded-lg bg-gray-800 bg-opacity-50">
              <h3 className="font-bold text-red-400">HOSPITALITY</h3>
              <p className.
                Lone Star Hospitality is an innovative hotel and hospitality
                management company that is guided by the core values of
                integrity, hard work and building synergistic relations with
                hotel owners, brands and partners.
              </p>
            </div>
            <div className="text-center border border-gray-700 p-4 rounded-lg bg-gray-800 bg-opacity-50">
              <h3 className="font-bold text-red-400">INTERNATIONAL TRADE</h3>
              <p className="text-gray-300">
                Lone Star International has established favorable business
                relations with major countries and regions in the world, with a
                professional team engaged in wide business lines.
              </p>
            </div>
            <div className="text-center border border-gray-700 p-4 rounded-lg bg-gray-800 bg-opacity-50">
              <h3 className="font-bold text-red-400">INFORMATION TECHNOLOGY</h3>
              <p className="text-gray-300">
                Lone Star Apps is a leading value-added company that
                specializes in developing, marketing and distributing Smart
                Device Applications.
              </p>
            </div>
            <div className="text-center border border-gray-700 p-4 rounded-lg bg-gray-800 bg-opacity-50">
              <h3 className="font-bold text-red-400">INFRASTRUCTURE</h3>
              <p className="text-gray-300">
                Lone Star Infrastructure is a leading contractor and industrial
                manufacturing group, active in the energy, infrastructure and
                defense sectors.
              </p>
            </div>
          </div>
        </section>

        <section id="concerns" className="py-16">
          <h2 className="text-2xl font-bold text-center mb-4 text-red-500">CONCERNS</h2>
          <div className="w-1/4 mx-auto border-b-2 border-red-500 mb-8"></div>
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
        </section>

        <section id="contact" className="py-16">
          <h2 className="text-2xl font-bold text-center mb-4 text-red-500">CONTACT</h2>
          <div className="w-1/4 mx-auto border-b-2 border-red-500 mb-8"></div>
          <div className="text-center">
            <h3 className="font-bold text-red-400">CONTACT DETAILS</h3>
            <p>A3, House 646, Mirpur DOHS, Dhaka- 1216, Bangladesh.</p>
            <p>+880 2 5807 0221</p>
            <p>+880 2 5807 0249</p>
            <p>info@lonestargroup.xyz</p>
            <p>www.lonestargroup.xyz</p>
          </div>
        </section>
      </main>
      <footer className="text-center py-8">
        <p>© 2024 Lone Star Group. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
