'use client';

import Hero from '@/components/hero';
import AboutProject from '@/components/sections/AboutProject';
import SystemArchitecture from '@/components/sections/SystemArchitecture';

import OurTeam from '@/components/sections/OurTeam';
import AboutUs from '@/components/sections/AboutUs';
import Header from '@/components/header';

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <main className="w-full lg:w-[calc(100vw-16rem)] lg:ml-64 pt-16 lg:pt-0 overflow-x-hidden">
        <section id="hero" className="w-full overflow-x-hidden">
          <Hero />
        </section>

        <section id="about" className="w-full overflow-x-hidden">
          <AboutProject />
        </section>

        <section id="architecture" className="w-full overflow-x-hidden">
          <SystemArchitecture />
        </section>

      
        <section id="team" className="w-full overflow-x-hidden">
          <OurTeam />
        </section>

        <section id="about-us" className="w-full overflow-x-hidden">
          <AboutUs />
        </section>
      </main>
    </div>
  );
}
