import React from 'react';
import EvilEye from './EvilEye';
import { Mail, Zap, MessageSquare } from 'lucide-react';

const HeroMobile = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#0A0A0A] overflow-hidden px-4 md:hidden">
      {/* Floating Decorative Icons */}
      <div className="absolute top-[10%] left-[5%] w-8 h-8 text-[#6BC4BC]/20 animate-revolve-1 pointer-events-none z-10">
        <Mail className="w-full h-full" strokeWidth={1.5} />
      </div>
      <div className="absolute top-[15%] right-[5%] w-10 h-10 text-[#6BC4BC]/20 animate-revolve-2 pointer-events-none z-10">
        <Zap className="w-full h-full" strokeWidth={1.5} />
      </div>
      <div className="absolute bottom-[15%] left-[10%] w-9 h-9 text-[#6BC4BC]/20 animate-revolve-3 pointer-events-none z-10">
        <MessageSquare className="w-full h-full" strokeWidth={1.5} />
      </div>
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 opacity-25">
        <EvilEye 
          eyeColor="#6BC4BC"
          backgroundColor="#0A0A0A"
          intensity={0.7}
          scale={1.5}
          glowIntensity={0.2}
          flameSpeed={0.4}
        />
      </div>

      <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Subtle Dark Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-radial-gradient from-[#0A0A0A]/60 via-transparent to-transparent pointer-events-none z-[-1] blur-xl"></div>
        
        <div className="flex flex-col items-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          
          {/* Content Area */}
          <div className="flex flex-col items-center">
            <span className="text-5xl text-[#6BC4BC] font-black leading-none mb-3 drop-shadow-[0_0_20px_rgba(107,196,188,0.3)]" style={{ fontFamily: "'Outfit', sans-serif" }}>NOVA</span>
          </div>

          <p className="text-sm text-slate-100 leading-relaxed font-medium drop-shadow-md px-4">
            Stop managing tools and start driving results. <b className="text-[#7DD3CB] font-black drop-shadow-[0_0_12px_rgba(107,196,188,0.4)]">NOVA</b> is a comprehensive ecosystem that <b className="text-[#7DD3CB] font-black uppercase drop-shadow-[0_0_12px_rgba(107,196,188,0.4)]">automates your email execution</b> —bridging the gap between intelligent AI and authentic human connection through data-driven outreach.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 w-full max-w-[240px]">
            <a 
              href="#contact"
              className="w-full px-6 py-3 bg-[#6BC4BC] text-black font-bold rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-[#6BC4BC]/20 text-sm text-center"
            >
              Get Started
            </a>
            <a 
              href="#capabilities"
              className="w-full px-6 py-3 bg-white/10 text-white border-2 border-white/20 font-bold rounded-2xl backdrop-blur-md text-sm text-center"
            >
              Know More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMobile;