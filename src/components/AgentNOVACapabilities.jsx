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
  const card1Ref = useScrollAnimation();
  const card2Ref = useScrollAnimation();
  const card3Ref = useScrollAnimation();
  const card4Ref = useScrollAnimation();
  const lastCardRef = useScrollAnimation();

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
    // {
    //   title: 'Instant Checkout in Chat',
    //   description: 'Accept payments directly inside the chat to close sales the moment customers are ready to buy. Remove extra steps, reduce drop-offs, and turn your conversations into instant conversions with a smooth, secure in-chat checkout experience.',
    //   image: SeamlessIntegrationsImage,
    // },

  ];

  const refs = [card1Ref, card2Ref, card3Ref, card4Ref];

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {capabilities.map((capability, index) => {
            const delay = `delay-${(index + 1) * 100}`;
            return (
              <div
                key={index}
                ref={refs[index]}
                className={`animate-on-scroll fade-in-up ${delay} group`}
              >
                <div className="flex flex-col rounded-2xl overflow-hidden border border-gray-800 hover:border-[#6BC4BC]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#6BC4BC]/20 bg-[#1A1A1A]">
                  {/* Content Section - Top */}
                  <div className="p-4 sm:p-6 md:p-8 flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {capability.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {capability.description}
                    </p>
                  </div>

                  {/* Image Section - Bottom */}
                  <div className="relative h-auto aspect-square sm:aspect-video md:h-[300px] lg:h-[350px] overflow-hidden p-4 flex justify-center items-center bg-[#101010]">
                    <img
                      src={capability.image}
                      alt={capability.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Optional overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full width last card with row layout */}
        <div
          ref={lastCardRef}
          className="animate-on-scroll fade-in-up delay-600 group mt-8 max-w-7xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden border border-gray-800 hover:border-[#6BC4BC]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#6BC4BC]/20 bg-[#1A1A1A]">
            {/* Content Section - Left */}
            <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Instant Idea Generation
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Eliminate writer's block instantly. NOVA generates diverse creative angles and endless variations from a blank page in seconds,
                providing fresh perspectives that allow you to choose or build upon multiple options.
              </p>
            </div>

            {/* Image Section - Right */}
            <div className="relative w-full lg:w-1/2 h-auto aspect-square sm:aspect-video md:h-[300px] lg:min-h-[350px] overflow-hidden p-4 flex justify-center items-center bg-[#101010]">
              <img
                src={nova13}
                alt="Instant Checkout in Chat"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
              {/* Optional overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentNOVACapabilities;