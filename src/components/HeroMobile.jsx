import React from 'react';
import EvilEye from './EvilEye';
import { Mail, Zap, MessageSquare, ShieldCheck } from 'lucide-react';

const HeroMobile = () => {
  return (
    <section className="relative min-h-[90svh] flex flex-col items-center justify-center bg-[#0A0A0A] overflow-hidden px-6 py-16 md:hidden">
      {/* Floating Decorative Icons - Enhanced with Glow */}
      <div className="absolute top-[12%] left-[10%] w-8 h-8 text-[#6BC4BC]/30 animate-revolve-1 pointer-events-none z-10">
        <Mail className="w-full h-full drop-shadow-[0_0_10px_rgba(107,196,188,0.4)]" strokeWidth={1.5} />
      </div>
      <div className="absolute top-[15%] right-[12%] w-10 h-10 text-[#6BC4BC]/30 animate-revolve-2 pointer-events-none z-10">
        <Zap className="w-full h-full drop-shadow-[0_0_10px_rgba(107,196,188,0.4)]" strokeWidth={1.5} />
      </div>
      <div className="absolute bottom-[15%] left-[12%] w-8 h-8 text-[#6BC4BC]/30 animate-revolve-3 pointer-events-none z-10">
        <ShieldCheck className="w-full h-full drop-shadow-[0_0_10px_rgba(107,196,188,0.4)]" strokeWidth={1.5} />
      </div>
      <div className="absolute bottom-[12%] right-[10%] w-9 h-9 text-[#6BC4BC]/30 animate-revolve-4 pointer-events-none z-10">
        <MessageSquare className="w-full h-full drop-shadow-[0_0_10px_rgba(107,196,188,0.4)]" strokeWidth={1.5} />
      </div>
      
      {/* Background Effect - Enhanced Depth */}
      <div className="absolute inset-0 z-0 opacity-30">
        <EvilEye 
          eyeColor="#6BC4BC"
          backgroundColor="#0A0A0A"
          intensity={0.7}
          scale={1.3}
          glowIntensity={0.3}
          flameSpeed={0.3}
        />
      </div>

      <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Enhanced Dark Overlay for Maximum Contrast */}
        <div className="absolute inset-0 bg-radial-gradient from-[#0A0A0A]/80 via-transparent to-transparent pointer-events-none z-[-1] blur-3xl"></div>
        
        <div className="flex flex-col items-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          
          {/* Category Capsule - Larger & Glossier */}
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold backdrop-blur-md mb-2 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <span className="tracking-widest uppercase text-[11px]">Email Marketing Tool</span>
          </div>

          {/* Content Area - High Impact NOVA Branding */}
          <div className="flex flex-col items-center">
            <span className="text-7xl sm:text-8xl text-[#5BAFA8] font-black leading-none mb-4 drop-shadow-[0_0_30px_rgba(91,175,168,0.4)] animate-pulse-slow" style={{ fontFamily: "'Outfit', sans-serif" }}>NOVA</span>
          </div>

          <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-medium drop-shadow-md px-2 max-w-[320px]">
            Automate the outreach. Dominate the inbox. <b className="text-[#7DD3CB] font-black drop-shadow-[0_0_12px_rgba(107,196,188,0.4)]">NOVA</b> uses <b className="text-[#7DD3CB] font-black drop-shadow-[0_0_12px_rgba(107,196,188,0.4)]">EVOKE AI</b> to craft, track, and execute your entire email strategy with surgical precision.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 w-full max-w-[280px] pt-4">
            <a 
              href="#contact"
              className="w-full px-8 py-4 bg-[#6BC4BC] text-black font-bold rounded-2xl hover:scale-[1.05] active:scale-[0.95] transition-all shadow-[0_0_25px_rgba(107,196,188,0.3)] text-base text-center"
            >
              Get Started
            </a>
            <a 
              href="#capabilities"
              className="w-full px-8 py-4 bg-white/5 text-white border-2 border-white/10 font-bold rounded-2xl backdrop-blur-md text-base text-center hover:bg-white/10 transition-all"
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