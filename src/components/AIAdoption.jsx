import React from 'react';
import { useScrollAnimation } from '../utils/useScrollAnimation';

/**
 * AI Adoption Component
 * A section explaining the gradual AI adoption process.
 */
const AIAdoption = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="ai-adoption" className="py-20 bg-[#0A0A0A] overflow-hidden">
      <div ref={sectionRef} className="container mx-auto px-6 animate-on-scroll fade-in-up">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Start with an Email Assistant, Accelerate Your <span className="bg-gradient-to-r from-[#7DD3CB] to-[#5BAFA8] bg-clip-text  text-transparent">AI Adoption.</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
            AI adoption doesn’t have to be complex—you simply start with NOVA, a smart AI email assistant that crafts high-impact campaigns and captures leads 24/7.
            <br /><br />
            Once NOVA delivers measurable results—we gradually introduce AI into your sales follow-ups, support automation, and marketing operations at a pace that fits your business.
            <br /><br />

            Step by step—your communication becomes fully AI-enhanced without the overwhelm, turning every sent message into a growth opportunity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIAdoption;