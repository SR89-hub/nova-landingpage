import React from 'react';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import Orb from '../utilities/orb';

const HeroMobile = () => {
  const titleRef = useScrollAnimation();
  const badgeRef = useScrollAnimation();

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center bg-gradient-to-b from-[#0A0A0A] via-[#101010] to-[#0A0A0A] overflow-hidden px-4 md:hidden mb-4">




      <div className="container mx-auto px-6 relative z-20 mb-0">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Title Section with Centered Orb */}
          <div className="relative py-12 flex flex-col items-center justify-center mb-12">
            {/* Single Orb Background - Positioned behind text only */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <div className="w-[140%] h-[120%] min-h-[350px] opacity-80">
                <Orb
                  hoverIntensity={0.3}
                  rotateOnHover={false}
                  hue={0}
                  forceHoverState={true}
                />
              </div>
            </div>

            <h2
              ref={titleRef}
              className="relative z-10 animate-on-scroll fade-in-up text-4xl font-bold text-white leading-tight"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800,
                textShadow: '0 0 30px rgba(107, 196, 188, 0.4), 0 0 60px rgba(107, 196, 188, 0.2)'
              }}
            >
              <span className="bg-gradient-to-r from-[#7DD3CB] via-[#6BC4BC] to-[#5BAFA8] bg-clip-text text-transparent filter drop-shadow-[0_0_10px_rgba(107, 196, 188, 0.4)]">NOVA</span>
              <br />
              <span className="text-xl font-semibold text-gray-200 mt-4 block" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                Your First Step Towards a
                <br />
                <span className="text-white ">Smarter inbox</span>
              </span>
            </h2>
          </div>

          {/* Buttons and Badge Section - Outside the Orb */}
          <div className="animate-on-scroll fade-in-up delay-200 w-full max-w-[300px] mx-auto relative z-20">
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
    </section>
  );
};

export default HeroMobile;