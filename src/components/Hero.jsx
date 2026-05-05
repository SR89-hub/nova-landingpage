import React from 'react';
import EvilEye from './EvilEye';
import { Mail, Zap, BarChart3, Target, Send, MessageSquare, ShieldCheck } from 'lucide-react';

/**
 * Agent NOVA Introduction Component
 * Centered Hero section with main CTA and interactive EvilEye background
 */
const Hero = () => {
  return (
    <section className="relative min-h-screen hidden lg:flex items-center justify-center bg-gradient-to-b from-[#0A0A0A] via-[#101010] to-[#0A0A0A] overflow-hidden py-16 lg:py-24 mb-4 lg:mb-6">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 opacity-25">
        <EvilEye
          eyeColor="#6BC4BC"
          backgroundColor="#0A0A0A"
          intensity={0.7}
          scale={1.1}
          glowIntensity={0.2}
          flameSpeed={0.4}
        />
      </div>

      {/* Floating Decorative Icons - Perfectly Aligned Quadrants */}
      <div className="absolute top-[12%] left-[12%] w-14 h-14 text-[#6BC4BC]/20 animate-revolve-1 hidden lg:block pointer-events-none z-10">
        <div className="w-full h-full animate-spin-slow">
          <Mail className="w-full h-full drop-shadow-[0_0_8px_rgba(107,196,188,0.4)]" strokeWidth={1.5} />
        </div>
      </div>
      <div className="absolute top-[12%] right-[12%] w-16 h-16 text-[#6BC4BC]/20 animate-revolve-2 hidden lg:block pointer-events-none z-10">
        <div className="w-full h-full animate-spin-slow-reverse">
          <Zap className="w-full h-full drop-shadow-[0_0_8px_rgba(107,196,188,0.4)]" strokeWidth={1.5} />
        </div>
      </div>

      <div className="absolute top-[48%] left-[8%] w-12 h-12 text-[#6BC4BC]/20 animate-revolve-5 hidden lg:block pointer-events-none z-10">
        <div className="w-full h-full animate-spin-slow">
          <ShieldCheck className="w-full h-full drop-shadow-[0_0_8px_rgba(107,196,188,0.4)]" strokeWidth={1.5} />
        </div>
      </div>
      <div className="absolute top-[48%] right-[8%] w-14 h-14 text-[#6BC4BC]/20 animate-revolve-6 hidden lg:block pointer-events-none z-10">
        <div className="w-full h-full animate-spin-slow-reverse">
          <Send className="w-full h-full drop-shadow-[0_0_8px_rgba(107,196,188,0.4)]" strokeWidth={1.5} />
        </div>
      </div>

      <div className="absolute bottom-[12%] left-[12%] w-18 h-18 text-[#6BC4BC]/20 animate-revolve-3 hidden lg:block pointer-events-none z-10">
        <div className="w-full h-full animate-spin-slow">
          <BarChart3 className="w-full h-full drop-shadow-[0_0_8px_rgba(107,196,188,0.4)]" strokeWidth={1.5} />
        </div>
      </div>
      <div className="absolute bottom-[12%] right-[12%] w-14 h-14 text-[#6BC4BC]/20 animate-revolve-4 hidden lg:block pointer-events-none z-10">
        <div className="w-full h-full animate-spin-slow-reverse">
          <Target className="w-full h-full drop-shadow-[0_0_8px_rgba(107,196,188,0.4)]" strokeWidth={1.5} />
        </div>
      </div>

      <div className="absolute bottom-[5%] left-[50%] -translate-x-1/2 w-12 h-12 text-[#6BC4BC]/20 animate-revolve-7 hidden lg:block pointer-events-none z-10">
        <div className="w-full h-full animate-spin-slow">
          <MessageSquare className="w-full h-full drop-shadow-[0_0_8px_rgba(107,196,188,0.4)]" strokeWidth={1.5} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Subtle Dark Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-radial-gradient from-[#0A0A0A]/60 via-transparent to-transparent pointer-events-none z-[-1] blur-2xl"></div>

        <div className="flex flex-col items-center text-center space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">

          {/* Category Capsule */}
          <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm font-bold backdrop-blur-md mb-2 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <span className="tracking-widest uppercase text-[12px] sm:text-sm">Email Marketing Tool</span>
          </div>

          {/* Content Area */}
          <div className="flex flex-col items-center">
            <span className="text-8xl lg:text-[10rem] text-[#6BC4BC] font-black leading-none mb-2 drop-shadow-[0_0_30px_rgba(107,196,188,0.3)]" style={{ fontFamily: "'Outfit', sans-serif" }}>NOVA</span>
            <h1 className="text-4xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] max-w-4xl drop-shadow-2xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Automate the Outreach , dominate the <span className="text-[#6BC4BC]">Email Inbox</span>
            </h1>
          </div>

          <p className="text-lg lg:text-2xl text-slate-100 leading-relaxed max-w-5xl font-medium drop-shadow-md">
            Stop managing tools and start driving results. <b className="text-[#7DD3CB] font-black drop-shadow-[0_0_15px_rgba(107,196,188,0.4)]">NOVA</b> is a comprehensive ecosystem that <b className="text-[#7DD3CB] font-black drop-shadow-[0_0_15px_rgba(107,196,188,0.4)]">AUTOMATES YOUR EMAIL EXECUTION</b> —bridging the gap between intelligent AI and authentic human connection through data-driven outreach.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
            <a
              href="#contact"
              className="w-full sm:w-auto px-12 py-4 bg-[#6BC4BC] text-black font-bold rounded-2xl hover:bg-[#7DD3CB] hover:scale-[1.05] active:scale-[0.98] transition-all shadow-xl shadow-[#6BC4BC]/30 text-lg text-center"
            >
              Get Started
            </a>
            <a
              href="#capabilities"
              className="w-full sm:w-auto px-12 py-4 bg-white/10 text-white border-2 border-white/20 font-bold rounded-2xl hover:bg-white/20 hover:border-white/30 transition-all text-lg flex items-center justify-center gap-2 backdrop-blur-md text-center"
            >
              <svg className="w-5 h-5 text-[#6BC4BC]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"></path>
              </svg>
              Know More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
