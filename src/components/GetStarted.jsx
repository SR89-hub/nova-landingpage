import React from 'react';
import { useScrollAnimation } from '../utils/useScrollAnimation';

/**
 * GetStarted Component
 * Roadmap section showing the 3-step process to get started
 */
const GetStarted = () => {
  const titleRef = useScrollAnimation();
  const step1Ref = useScrollAnimation();
  const step2Ref = useScrollAnimation();
  const step3Ref = useScrollAnimation();

  const steps = [
    {
      number: '1',
      title: 'Sign Up & Connect',
      description:
        'Create your account and connect your email channels. No complex setup—just sign up and link your ecosystem.',
    },
    {
      number: '2',
      title: 'Customize Your AI',
      description:
        'Feed NOVA your brand guidelines, past campaigns, and target audience data. The more context you provide, the sharper NOVA writes.',
    },
    {
      number: '3',
      title: 'Automate & Optimize',
      description:
        'Launch AI-driven outreach and let NOVA handle the crafting, tracking, and win-back automations with surgical precision.',
    },
  ];

  const refs = [step1Ref, step2Ref, step3Ref];

  return (
    <section id="start" className="py-20 bg-[#101010]">
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto animate-on-scroll fade-in-up mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Get Started in <span className="bg-gradient-to-r from-[#7DD3CB] to-[#5BAFA8] bg-clip-text text-transparent">3 Simple Steps</span>
          </h2>
          <p className="text-lg text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Get started with NOVA in minutes and transform the way you work. Experience fast, expert, and fun productivity.
          </p>
        </div>

        {/* Roadmap Timeline - Vertical Column */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6BC4BC] via-[#6BC4BC]/50 to-[#6BC4BC]"></div>

            {/* Steps */}
            {steps.map((step, index) => {
              const delay = `delay-${(index + 1) * 100}`;
              
              return (
                <div
                  key={index}
                  ref={refs[index]}
                  className={`relative mb-12 last:mb-0 animate-on-scroll fade-in-up ${delay}`}
                >
                  <div className="flex items-start gap-6">
                    {/* Step Number Circle */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#6BC4BC] to-[#5BAFA8] rounded-full flex items-center justify-center text-black font-bold text-xl md:text-2xl shadow-lg shadow-[#6BC4BC]/30 border-4 border-[#101010]">
                        {step.number}
                      </div>
                    </div>

                    {/* Step Content Card */}
                    <div className="flex-1 pt-2">
                      <div className="bg-[#121212] border border-gray-800 rounded-xl p-6 md:p-8 hover:border-[#6BC4BC]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#6BC4BC]/10">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                          {step.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;

