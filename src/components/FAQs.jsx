import React, { useState } from 'react';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import {
  HelpCircle,
  MessageCircleQuestion,
  ChevronDown,
  FileQuestion,

  Lightbulb,
  Mail,
  UserCheck,
  Globe,
  Settings
} from 'lucide-react';

/**
 * FAQs Component
 * Frequently Asked Questions section with accordion-style expandable items
 */
const FAQs = () => {
  const titleRef = useScrollAnimation();
  const containerRef = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How does NOVA generate messages?',
      answer: 'NOVA analyzes your business context, audience, and goals using models trained on thousands of copywriting best practices. It then generates persuasive, brand-aligned content for multiple platforms in seconds.',
      icon: <Settings className="w-6 h-6" />,
    },
    {
      question: 'Is my campaign data kept private?',
      answer: 'Yes. NOVA is a professional-grade platform that prioritizes data integrity. Your contact lists and campaign details are handled with strict privacy standards and are never shared.',
      icon: <FileQuestion className="w-6 h-6" />,
    },
    {
      question: 'Can I use NOVA for platforms other than Email?',
      answer: 'Currently, NOVA is specifically optimized for Email. This ensures every message meets the unique formatting and engagement best practices for these three primary channels.',
      icon: <MessageCircleQuestion className="w-6 h-6" />,
    },
    {
      question: 'What if I don\'t like the generated messages?',
      answer: 'You can instantly generate multiple variations. Simply adjust your inputs for tone or business objective, and NOVA will provide fresh creative angles until the copy meets your needs.',
      icon: <UserCheck className="w-6 h-6" />,
    },
    {
      question: 'What is the Legacy Data Optimizer?',
      answer: 'It is an automated tool that cleans and verifies your imported contact lists. By filtering out invalid data, it ensures your campaigns reach only high-quality, verified contacts.',
      icon: <Globe className="w-6 h-6" />,
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-[#0A0A0A] relative overflow-hidden">
      {/* Floating revolving icons */}
      <div className="absolute top-[10%] left-[3%] w-14 h-14 text-[#6BC4BC]/50 animate-revolve-1 hidden lg:block pointer-events-none z-0">
        <div className="w-full h-full animate-spin-slow">
          <HelpCircle className="w-full h-full drop-shadow-[0_0_8px_rgba(107, 196, 188,0.6)]" strokeWidth={1.5} />
        </div>
      </div>

      <div className="absolute top-[12%] right-[3%] w-12 h-12 text-[#5BAFA8]/50 animate-revolve-2 hidden lg:block pointer-events-none z-0">
        <div className="w-full h-full animate-spin-slow-reverse">
          <MessageCircleQuestion className="w-full h-full drop-shadow-[0_0_8px_rgba(107, 196, 188,0.6)]" strokeWidth={1.5} />
        </div>
      </div>

      <div className="absolute bottom-[10%] left-[4%] w-16 h-16 text-[#6BC4BC]/45 animate-revolve-3 hidden lg:block pointer-events-none z-0">
        <div className="w-full h-full animate-spin-slow">
          <HelpCircle className="w-full h-full drop-shadow-[0_0_8px_rgba(107, 196, 188,0.6)]" strokeWidth={1.5} />
        </div>
      </div>

      <div className="absolute bottom-[12%] right-[4%] w-13 h-13 text-[#5BAFA8]/50 animate-revolve-4 hidden lg:block pointer-events-none z-0">
        <div className="w-full h-full animate-spin-slow-reverse">
          <Lightbulb className="w-full h-full drop-shadow-[0_0_8px_rgba(107, 196, 188,0.6)]" strokeWidth={1.5} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title Section */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto animate-on-scroll fade-in-up mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Frequently Asked <span className="bg-gradient-to-r from-[#7DD3CB] to-[#5BAFA8] bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Everything you need to know about NOVA
          </p>
        </div>

        {/* FAQs List */}
        <div ref={containerRef} className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const delay = `delay-${(index + 1) * 100}`;
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`animate-on-scroll fade-in-up ${delay} group`}
                >
                  <div className="relative bg-gradient-to-br from-[#121212] via-[#0F0F0F] to-[#121212] border border-gray-800 rounded-2xl overflow-hidden hover:border-[#6BC4BC]/50 transition-all duration-500">
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6BC4BC]/0 via-[#6BC4BC]/5 to-[#5BAFA8]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Question Button */}
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="relative z-10 w-full p-6 md:p-8 flex items-center justify-between text-left focus:outline-none transition-all duration-300"
                    >
                      <div className="flex items-start gap-4 flex-1">
                        {/* Icon */}
                        <div className="flex-shrink-0 mt-1 p-3 rounded-xl bg-gradient-to-br from-[#6BC4BC]/20 to-[#5BAFA8]/20 border border-[#6BC4BC]/30 text-[#7DD3CB] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          {faq.icon}
                        </div>

                        {/* Question Text */}
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#7DD3CB] transition-colors duration-300" style={{ fontFamily: "'Outfit', sans-serif" }}>
                            {faq.question}
                          </h3>
                        </div>
                      </div>

                      {/* Chevron Icon */}
                      <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        <ChevronDown className="w-6 h-6 text-[#6BC4BC]" />
                      </div>
                    </button>

                    {/* Answer Section */}
                    <div className={`relative z-10 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                      <div className="px-6 md:px-8 pb-6 md:pb-8">
                        <div className="pl-16 md:pl-20">
                          <p className="text-gray-400 leading-relaxed text-base md:text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Decorative line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6BC4BC] via-[#5BAFA8] to-[#6BC4BC] transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'
                      }`}></div>
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

export default FAQs;

