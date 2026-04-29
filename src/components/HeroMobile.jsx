import React from 'react';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import Orb from '../utilities/orb';

const HeroMobile = () => {
  const titleRef = useScrollAnimation();
  const badgeRef = useScrollAnimation();

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center bg-gradient-to-b from-[#0A0A0A] via-[#101010] to-[#0A0A0A] overflow-hidden px-4 md:hidden mb-20">
      {/* Multi-layered Orb Background - 7 Layers for depth */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none">
        {/* Layer 7: Cosmic Rim (Largest) */}
        <div className="w-[300%] h-[70vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-[0.03]">
          <Orb
            hoverIntensity={0.02}
            rotateOnHover={false}
            hue={30}
            forceHoverState={true}
          />
        </div>

        {/* Layer 6: Deep Space Glow */}
        <div className="w-[270%] h-[65vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-[0.05]">
          <Orb
            hoverIntensity={0.03}
            rotateOnHover={false}
            hue={-25}
            forceHoverState={true}
          />
        </div>

        {/* Layer 5: Largest and very subtle */}
        <div className="w-[240%] h-[60vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-[0.08]">
          <Orb
            hoverIntensity={0.05}
            rotateOnHover={false}
            hue={20}
            forceHoverState={true}
          />
        </div>

        {/* Layer 4: Outer Glow */}
        <div className="w-[210%] h-[55vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-[0.15]">
          <Orb
            hoverIntensity={0.1}
            rotateOnHover={false}
            hue={-15}
            forceHoverState={true}
          />
        </div>

        {/* Layer 3: Secondary Glow */}
        <div className="w-[180%] h-[50vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-25">
          <Orb
            hoverIntensity={0.1}
            rotateOnHover={false}
            hue={10}
            forceHoverState={true}
          />
        </div>
        
        {/* Layer 2: Inner Glow */}
        <div className="w-[140%] h-[45vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-45">
          <Orb
            hoverIntensity={0.2}
            rotateOnHover={false}
            hue={-5}
            forceHoverState={true}
          />
        </div>

        {/* Layer 1: Core Orb */}
        <div className="w-full h-[40vh] min-h-[350px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
          <Orb
            hoverIntensity={0.3}
            rotateOnHover={false}
            hue={0}
            forceHoverState={true}
          />
        </div>
      </div>

      {/* Bottom fade overlay to contain orbs and smooth transition to gap */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

      {/* Floating Decorative Elements - Revolving Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] animate-revolve-1 opacity-10">
          <svg className="w-8 h-8 text-[#6BC4BC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div className="absolute bottom-[20%] right-[10%] animate-revolve-2 opacity-10">
          <svg className="w-6 h-6 text-[#6BC4BC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="absolute top-[40%] right-[5%] animate-revolve-4 opacity-5">
          <svg className="w-6 h-6 text-[#6BC4BC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <div className="absolute bottom-[40%] left-[5%] animate-revolve-6 opacity-5">
          <svg className="w-5 h-5 text-[#6BC4BC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
          </svg>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-1/3 w-48 h-48 bg-[#6BC4BC]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-[#6BC4BC]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-20 mb-10">
        <div className="flex justify-center">
          <div className="text-center max-w-6xl">
            <h2
              ref={titleRef}
              className="animate-on-scroll fade-in-up text-5xl font-bold text-white leading-tight mb-20"
              style={{ 
                fontFamily: "'Outfit', sans-serif", 
                fontWeight: 800,
                textShadow: '0 0 20px rgba(107, 196, 188, 0.2)'
              }}
            >
              <span className="bg-gradient-to-r from-[#7DD3CB] via-[#6BC4BC] to-[#5BAFA8] bg-clip-text text-transparent filter drop-shadow-[0_0_10px_rgba(107,196,188,0.4)]">NOVA</span>
              <br />
              <span className="text-2xl font-semibold text-gray-200 mt-4 block" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                Your First Step Towards
                <br />
                <span className="text-white italic">AI Adoption</span>
              </span>
            </h2>

            {/* Buttons and Badge for mobile - Pushed down to be outside the orb glow */}
            <div className="mt-16 animate-on-scroll fade-in-up delay-200 w-full max-w-[320px] mx-auto">
              <div className="flex flex-col gap-4">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#contact');
                    if (element) {
                      const headerOffset = 100;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="relative overflow-hidden bg-gradient-to-r from-[#6BC4BC] to-[#5BAFA8] text-black font-bold px-8 py-4 rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-[#6BC4BC]/20 text-lg flex items-center justify-center gap-3 group w-full"
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-horizontal-shimmer" />
                  
                  <span className="relative z-10">GET Started</span>
                  <svg
                    className="w-5 h-5 relative z-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
                <a
                  href="#capabilities"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#capabilities');
                    if (element) {
                      const headerOffset = 100;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="bg-transparent border-2 border-[#6BC4BC]/30 text-[#7DD3CB] font-bold px-8 py-4 rounded-xl hover:bg-[#6BC4BC]/10 transition-all duration-300 text-lg w-full text-center backdrop-blur-sm"
                >
                  Know More
                </a>
              </div>
              <div
                ref={badgeRef}
                className="mt-8 inline-block"
              >
                <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#6BC4BC]/5 border border-[#6BC4BC]/20 text-[#7DD3CB] text-sm font-bold backdrop-blur-md shadow-inner shadow-white/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6BC4BC] mr-2 animate-pulse shadow-[0_0_6px_#6BC4BC]" />
                  Powered By Evoke
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMobile;