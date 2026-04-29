import React from 'react';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import nova9 from '../assets/nova 9.png';
import nova10 from '../assets/nova 10.png';
import nova12 from '../assets/nova12.png';
import nova11 from '../assets/nova 11.png';
import nova13 from '../assets/nova 13.png';

/**
 * Agent NOVA Capabilities Component
 * "What Can Agent NOVA Do?" section with animated cards
 */
const AgentNOVACapabilities = () => {
  const titleRef = useScrollAnimation();

  const capabilities = [
    {
      title: 'Smart Message Crafting',
      description: 'NOVA combines your creativity with AI to make email marketing easy.Write your own messages or let the NOVA Crafter generate high-performing copy for you.Our automatic three-step follow-up ensures you never miss a lead or a connection.NOVA handles the busy work so you can focus on growing your business..',
      image: nova9,
    },
    {
      title: ' Enterprise-Grade Security',
      description: 'nova keeps your account safe with high-level login security and strict session management.Your organizations data is fully encrypted and isolated in secure, private environments.We handle the technical safeguards so you can manage your team with total peace of mind..',
      image: nova11,
    },
    {
      title: 'Intelligent Influencer Discovery',
      description: 'NOVA makes finding influencers easy by filtering for your specific niche, location, and audience size.Our system uses real engagement data to match you with creators who deliver proven results.We handle the searching and the stats so you can focus on building a brand that grows..',
      image: nova12,
    },
    {
      title: 'Precision Analytics & Tracking',
      description: 'Track your success in real-time with visual dashboards that monitor everything from open rates to individual clicks.Easily follow every recipient’s journey and turn your campaign data into professional PDF reports with a single click..',
      image: nova10,
    },
    {
      title: 'Instant Idea Generation',
      description: 'Eliminate writer\'s block instantly. NOVA generates diverse creative angles and endless variations from a blank page in seconds, providing fresh perspectives that allow you to choose or build upon multiple options.',
      image: nova13,
    },
  ];


  return (
    <section id="capabilities" className="py-20 bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto animate-on-scroll fade-in-up mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Key features that<span className="bg-gradient-to-r from-[#7DD3CB] to-[#5BAFA8] bg-clip-text text-transparent"> power</span> your business.
          </h2>
          <p className="text-base sm:text-lg text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Powerful capabilities designed to transform your email marketing and outreach operations
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div className="flex lg:grid lg:grid-cols-2 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none hide-scrollbar gap-6 lg:gap-12 pb-12 lg:pb-0 px-4 lg:px-0 -mx-4 lg:mx-0">
            {capabilities.map((capability, index) => {
              const delay = `delay-${(index + 1) * 100}`;
              const isFifth = index === 4;
              return (
                <div
                  key={index}
                  className={`flex-none w-[85%] sm:w-[450px] md:w-[500px] lg:w-full snap-center animate-on-scroll fade-in-up ${delay} group ${isFifth ? 'lg:col-span-2 lg:max-w-5xl lg:mx-auto' : ''}`}
                >
                  <div className={`flex flex-col ${isFifth ? 'lg:flex-row' : ''} h-full rounded-2xl overflow-hidden border border-gray-800 hover:border-[#6BC4BC]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#6BC4BC]/20 bg-[#1A1A1A]`}>
                    {/* Content Section */}
                    <div className={`p-6 sm:p-8 flex-1 flex flex-col ${isFifth ? 'lg:w-1/2 lg:justify-center lg:py-10' : 'justify-center'}`}>
                      <h3 className={`${isFifth ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'} font-bold text-white mb-4`} style={{ fontFamily: "'Outfit', sans-serif" }}>
                        {capability.title}
                      </h3>
                      <p className={`text-gray-300 leading-relaxed ${isFifth ? 'text-base sm:text-lg' : 'text-sm sm:text-base'}`} style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {capability.description}
                      </p>
                    </div>

                    {/* Image Section */}
                    <div className={`relative h-[250px] sm:h-[300px] ${isFifth ? 'lg:h-auto lg:w-1/2' : ''} overflow-hidden p-6 flex justify-center items-center bg-[#101010]`}>
                      <img
                        src={capability.image}
                        alt={capability.title}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Optional overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scroll Indicators */}
          {/* Scroll Indicators - Mobile Only */}
          <div className="flex lg:hidden justify-center gap-2 mt-4">
            <div className="px-4 py-2 rounded-full bg-[#6BC4BC]/5 border border-[#6BC4BC]/20 text-[#7DD3CB] text-xs font-bold backdrop-blur-md flex items-center gap-2 animate-pulse">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              Swipe to Explore
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentNOVACapabilities;