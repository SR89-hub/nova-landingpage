import React from 'react';
import EvilEye from './EvilEye';
import { Mail, Zap, MessageSquare, ShieldCheck, ChevronRight, Sparkles } from 'lucide-react';

/**
 * HeroMobile Component
 * Mobile-optimized hero section - Simplified for maximum impact
 */
const HeroMobile = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center bg-[#0A0A0A] overflow-hidden px-6 pt-20 pb-12 lg:hidden">
      
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 opacity-40 scale-125">
        <EvilEye 
          eyeColor="#6BC4BC"
          backgroundColor="#0A0A0A"
          intensity={0.8}
          scale={1.4}
          glowIntensity={0.4}
          flameSpeed={0.5}
        />
      </div>

      {/* Orbs */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#6BC4BC]/10 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-[#5BAFA8]/10 rounded-full blur-[100px] translate-x-1/2 pointer-events-none"></div>

      {/* Floating Icons */}
      <div className="absolute top-[12%] left-[10%] w-8 h-8 text-[#6BC4BC]/30 animate-revolve-1 pointer-events-none z-10">
        <Mail className="w-full h-full drop-shadow-[0_0_10px_rgba(107,196,188,0.4)]" strokeWidth={1.2} />
      </div>
      <div className="absolute top-[15%] right-[12%] w-10 h-10 text-[#6BC4BC]/30 animate-revolve-2 pointer-events-none z-10">
        <Zap className="w-full h-full drop-shadow-[0_0_10px_rgba(107,196,188,0.4)]" strokeWidth={1.2} />
      </div>
      
      <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-radial-gradient from-black/60 via-transparent to-transparent pointer-events-none z-[-1] blur-3xl scale-150"></div>
        
        <div className="flex flex-col items-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          
          {/* Category Capsule */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-xl mb-1 shadow-[0_0_20px_rgba(107,196,188,0.1)]">
            <Sparkles className="w-3.5 h-3.5 text-[#7DD3CB]" />
            <span className="tracking-[0.2em] uppercase text-[9px] font-bold">Email Marketing Tool</span>
          </div>

          {/* Branding */}
          <div className="flex flex-col items-center relative">
            <span className="text-[5rem] sm:text-[6rem] text-[#6BC4BC] font-black leading-none tracking-tighter drop-shadow-[0_0_30px_rgba(107,196,188,0.4)]" style={{ fontFamily: "'Outfit', sans-serif" }}>
              NOVA
            </span>
            <div className="absolute -bottom-1 w-2/3 h-px bg-gradient-to-r from-transparent via-[#6BC4BC]/40 to-transparent"></div>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight px-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Automate Outreach.<br />
            <span className="bg-gradient-to-r from-[#7DD3CB] via-[#6BC4BC] to-[#5BAFA8] bg-clip-text text-transparent">
              Dominate the Inbox.
            </span>
          </h1>

          {/* Simplified Subtext */}
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-medium px-4 max-w-[340px]">
            Precision AI-driven marketing that executes your entire strategy <b className="text-white">automatically.</b>
          </p>

          {/* CTA Group */}
          <div className="flex flex-col items-center justify-center gap-4 w-full max-w-[280px] pt-2">
            <a 
              href="#contact"
              className="w-full px-8 py-4 bg-gradient-to-r from-[#6BC4BC] to-[#5BAFA8] text-black font-extrabold rounded-2xl hover:scale-[1.05] active:scale-[0.95] transition-all shadow-[0_10px_30px_rgba(107,196,188,0.3)] text-base text-center flex items-center justify-center gap-2 group"
            >
              Get Started
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#capabilities"
              className="w-full px-8 py-3.5 bg-white/5 text-white border border-white/10 font-bold rounded-2xl backdrop-blur-md text-sm text-center hover:bg-white/10 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMobile;
