import React from 'react';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import ServicesImage from '../assets/Services.png';

/**
 * Delightful Service Component
 * "Designed for Delightful Service" section with animated features
 */
const DelightfulService = () => {
  const titleRef = useScrollAnimation();
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: 'AI Campaign Copywriting',
      description: 'NOVA’s advanced AI generates high-impact, context-aware copy for Email. It applies professional copywriting techniques and tailored tone control to create persuasive, brand-aligned messages that drive conversions instantly.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
        </svg>
      ),
      title: 'Legacy Data Optimization',
      description: 'This service automatically cleans, verifies, and refines raw contact lists. By filtering out invalid data and ensuring high-quality leads, NOVA optimizes your deliverability and ensures your campaigns reach real people.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z" />
        </svg>
      ),
      title: 'Precision Audience Targeting',
      description: 'Leverage data-backed segmentation and AI-driven insights to reach the right audience. NOVA organizes your data to enable personalized messaging, ensuring your communication resonates with specific customer needs and ambitions.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2zm10-10V7a4 4 0 0 0-8 0v4h8z" />
        </svg>
      ),
      title: 'End-to-End Campaign Automation',
      description: 'A unified platform to plan, schedule, and track multi-channel campaigns effortlessly. From automated win-back sequences to real-time performance analytics, NOVA manages the entire lifecycle to boost productivity and ROI.',
    },
  ];

  return (
    <section id="delightful-service" className="py-24 bg-gradient-to-b from-[#101010] to-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto animate-on-scroll fade-in-up mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Delightful Service Starts With <span className="bg-gradient-to-r from-[#7DD3CB] to-[#5BAFA8] bg-clip-text  text-transparent">NOVA</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Every interaction is crafted to exceed expectations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Features list */}
          <div className="lg:col-span-1">
            <div 
              ref={leftRef} 
              className="animate-on-scroll fade-in-left flex flex-col space-y-6"
            >
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${index >= 3 ? 'hidden lg:flex' : 'flex'} flex-col group p-6 sm:p-8 rounded-2xl bg-[#121212] border border-gray-800 hover:border-[#6BC4BC]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#6BC4BC]/10`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-[#6BC4BC] to-[#5BAFA8] text-black group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>

          {/* Right side - Visual element */}
          <div ref={rightRef} className="hidden lg:block animate-on-scroll fade-in-right delay-200 relative mt-12 lg:mt-0">
            <div className="relative flex items-center justify-center">
              
              {/* Massive Back Glow Layer 1 */}
              <div className="absolute w-[500px] h-[500px] bg-[#6BC4BC]/10 rounded-full blur-[100px] animate-pulse-slow pointer-events-none"></div>
              
              {/* Core Glow Layer 2 */}
              <div className="absolute w-[350px] h-[350px] bg-[#6BC4BC]/20 rounded-full blur-[60px] animate-pulse pointer-events-none"></div>

              {/* Rotating Shimmer Ring */}
              <div className="absolute w-[480px] h-[480px] border border-[#6BC4BC]/10 rounded-full animate-spin-slow pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#6BC4BC]/30 blur-[30px] rounded-full"></div>
              </div>

              <div className="relative z-10 flex items-center justify-center">
                {/* Background Halo */}
                <div className="absolute w-[320px] h-[320px] md:w-[440px] md:h-[440px] rounded-full bg-gradient-to-br from-[#121212] via-[#1A1A1A] to-[#0A0A0A] border border-[#6BC4BC]/30 shadow-[0_0_50px_rgba(107,196,188,0.2)]">
                  <div className="absolute inset-0 rounded-full" style={{
                    background: 'radial-gradient(circle at center, rgba(107, 196, 188, 0.2) 0%, transparent 70%)'
                  }}></div>
                </div>

                {/* The Shiny Image Container */}
                <div className="relative z-20 w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden border-4 border-[#6BC4BC]/50 shadow-[0_0_40px_rgba(107,196,188,0.3)] group cursor-pointer">
                  
                  {/* Image itself */}
                  <img
                    src={ServicesImage}
                    alt="Services"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Shiny Shimmer Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                  
                  {/* Constant Subtle Glow Overlay */}
                  <div className="absolute inset-0 bg-[#6BC4BC]/5 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                {/* Outer Pulsing Rings */}
                <div className="absolute w-[300px] h-[300px] md:w-[410px] md:h-[410px] border-2 border-[#6BC4BC]/20 rounded-full animate-ping-slow opacity-20 pointer-events-none"></div>
                <div className="absolute w-[360px] h-[360px] md:w-[480px] md:h-[480px] border border-[#6BC4BC]/10 rounded-full animate-pulse-slow pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DelightfulService;