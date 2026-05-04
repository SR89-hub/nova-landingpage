import React from 'react';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import Deploy from '../assets/1.png';
import Process from '../assets/nova 4.png';
import Step1Img from '../assets/nova 5.png';
import NewImg from '../assets/new.png';
import {
  Upload,
  Brain,
  Rocket,
  Folder,
  Server,
  Cpu,
  Zap,
  FileText,
  BarChart3,
  Settings,
  Mail,
} from 'lucide-react';

/**
 * How NOVA Works Page Component
 * Three-step process: Upload Knowledge Base, Knowledge Processing, Deploy
 */
const HowNOVAWorksPage = () => {
  const titleRef = useScrollAnimation({ threshold: 0.2 });
  const step1Ref = useScrollAnimation({ threshold: 0.15 });
  const step2Ref = useScrollAnimation({ threshold: 0.15 });
  const step3Ref = useScrollAnimation({ threshold: 0.15 });
  const step4Ref = useScrollAnimation({ threshold: 0.15 });

  const steps = [
    {
      number: '1',
      title: 'Onboarding & Setup',
      description: 'Create your organization profile and configure your workspace. Use our built-in testing tools to ensure your account is ready for seamless communication.',
      icon: <Upload className="w-8 h-8" />,
      image: Step1Img,
    },
    {
      number: '2',
      title: ' Campaign Architecture',
      description: 'Target & Personalize: Upload your CSV and use NOVA Crafter to generate intelligent content, then Automate & Persist by deploying a one-click, three-stage follow-up sequence for natural, persistent outreach.',
      icon: <Brain className="w-8 h-8" />,
      image: Process,
    },
    {
      number: '3',
      title: 'Deployment',
      description: 'Review your campaign status (Draft, Pending, or Scheduled). Set your launch date and let the platform handle the heavy lifting.',
      icon: <Rocket className="w-8 h-8" />,
      image: Deploy,
    },
    {
      number: '4',
      title: ' Monitor & Optimize',
      description: 'Visit the "Email Tracking dashboard" to see real-time engagement. Identify top-engaged users and watch as follow-ups are automatically tracked or reset when you add new contacts to a live campaign.',
      icon: <Rocket className="w-8 h-8" />,
      image: NewImg,
    },
  ];

  const refs = [step1Ref, step2Ref, step3Ref, step4Ref];


  return (
    <section id="working" className="py-20 bg-[#0A0A0A] relative overflow-hidden">
      {/* Section Separator - Elegant Gradient Line */}
      <div className="absolute top-0 left-0 w-full flex justify-center z-20">
        <div className="w-[70%] h-px bg-gradient-to-r from-transparent via-[#6BC4BC]/30 to-transparent"></div>
        <div className="absolute top-0 w-[40%] h-px bg-gradient-to-r from-transparent via-[#6BC4BC]/60 to-transparent blur-[2px]"></div>
      </div>

      {/* Floating revolving icons - positioned relative to section */}
      {/* Upload icon - Top left corner */}
      <div className="absolute top-[10%] left-[3%] w-14 h-14 text-[#6BC4BC]/50 animate-revolve-1 hidden lg:block pointer-events-none z-0">
        <div className="w-full h-full animate-spin-slow">
          <Upload className="w-full h-full drop-shadow-[0_0_8px_rgba(107, 196, 188,0.6)]" strokeWidth={1.5} />
        </div>
      </div>

      {/* Brain icon - Top right corner */}
      <div className="absolute top-[12%] right-[3%] w-12 h-12 text-[#5BAFA8]/50 animate-revolve-2 hidden lg:block pointer-events-none z-0">
        <div className="w-full h-full animate-spin-slow-reverse">
          <Brain className="w-full h-full drop-shadow-[0_0_8px_rgba(107, 196, 188,0.6)]" strokeWidth={1.5} />
        </div>
      </div>

      {/* Folder icon - Bottom left */}
      <div className="absolute bottom-[10%] left-[4%] w-16 h-16 text-[#6BC4BC]/45 animate-revolve-3 hidden lg:block pointer-events-none z-0">
        <div className="w-full h-full animate-spin-slow">
          <Folder className="w-full h-full drop-shadow-[0_0_8px_rgba(107, 196, 188,0.6)]" strokeWidth={1.5} />
        </div>
      </div>

      {/* Rocket icon - Bottom right */}
      <div className="absolute bottom-[12%] right-[4%] w-13 h-13 text-[#5BAFA8]/50 animate-revolve-4 hidden lg:block pointer-events-none z-0">
        <div className="w-full h-full animate-spin-slow-reverse">
          <Rocket className="w-full h-full drop-shadow-[0_0_8px_rgba(107, 196, 188,0.6)]" strokeWidth={1.5} />
        </div>
      </div>

      {/* FileText icon - Top center-left */}
      <div className="absolute top-[8%] left-[20%] w-11 h-11 text-[#6BC4BC]/40 animate-revolve-5 hidden lg:block pointer-events-none z-0">
        <div className="w-full h-full animate-spin-slow">
          <FileText className="w-full h-full drop-shadow-[0_0_8px_rgba(107, 196, 188,0.6)]" strokeWidth={1.5} />
        </div>
      </div>

      {/* Server icon - Bottom center-right */}
      <div className="absolute bottom-[8%] right-[20%] w-14 h-14 text-[#5BAFA8]/45 animate-revolve-6 hidden lg:block pointer-events-none z-0">
        <div className="w-full h-full animate-spin-slow-reverse">
          <Server className="w-full h-full drop-shadow-[0_0_8px_rgba(107, 196, 188,0.6)]" strokeWidth={1.5} />
        </div>
      </div>

      {/* Cpu icon - Top center-right */}
      <div className="absolute top-[6%] right-[18%] w-12 h-12 text-[#6BC4BC]/45 animate-revolve-7 hidden lg:block pointer-events-none z-0">
        <div className="w-full h-full animate-spin-slow">
          <Cpu className="w-full h-full drop-shadow-[0_0_8px_rgba(107, 196, 188,0.6)]" strokeWidth={1.5} />
        </div>
      </div>
      {/* Floating icons with randomized positions */}
      {/* BarChart3 icon - Random position */}
      <div className="absolute top-[5%] left-[15%] w-12 h-12 text-[#6BC4BC]/50 animate-revolve-1 hidden lg:block pointer-events-none z-0">
        <div className="w-full h-full animate-spin-slow">
          <BarChart3 className="w-full h-full drop-shadow-[0_0_8px_rgba(107, 196, 188,0.6)]" strokeWidth={1.5} />
        </div>
      </div>

      {/* Brain icon - Random position */}
      <div className="absolute top-[25%] right-[8%] w-14 h-14 text-[#5BAFA8]/50 animate-revolve-2 hidden lg:block pointer-events-none z-0">
        <div className="w-full h-full animate-spin-slow-reverse">
          <Brain className="w-full h-full drop-shadow-[0_0_8px_rgba(107, 196, 188,0.6)]" strokeWidth={1.5} />
        </div>
      </div>

      {/* Mail icon - Random position */}
      <div className="absolute bottom-[22%] left-[8%] w-13 h-13 text-[#6BC4BC]/45 animate-revolve-3 hidden lg:block pointer-events-none z-0">
        <div className="w-full h-full animate-spin-slow">
          <Mail className="w-full h-full drop-shadow-[0_0_8px_rgba(107, 196, 188,0.6)]" strokeWidth={1.5} />
        </div>
      </div>

      {/* Zap icon - Random position */}
      <div className="absolute bottom-[8%] right-[12%] w-11 h-11 text-[#5BAFA8]/50 animate-revolve-4 hidden lg:block pointer-events-none z-0">
        <div className="w-full h-full animate-spin-slow-reverse">
          <Zap className="w-full h-full drop-shadow-[0_0_8px_rgba(107, 196, 188,0.6)]" strokeWidth={1.5} />
        </div>
      </div>

      {/* Folder icon - Random position */}
      <div className="absolute top-[18%] left-[5%] w-10 h-10 text-[#6BC4BC]/40 animate-revolve-5 hidden lg:block pointer-events-none z-0">
        <div className="w-full h-full animate-spin-slow">
          <Folder className="w-full h-full drop-shadow-[0_0_8px_rgba(107, 196, 188,0.6)]" strokeWidth={1.5} />
        </div>
      </div>

      {/* Server icon - Random position */}
      <div className="absolute bottom-[15%] right-[25%] w-14 h-14 text-[#5BAFA8]/45 animate-revolve-6 hidden lg:block pointer-events-none z-0">
        <div className="w-full h-full animate-spin-slow-reverse">
          <Server className="w-full h-full drop-shadow-[0_0_8px_rgba(107, 196, 188,0.6)]" strokeWidth={1.5} />
        </div>
      </div>

      {/* Settings icon - Random position */}
      <div className="absolute top-[35%] right-[5%] w-13 h-13 text-[#6BC4BC]/45 animate-revolve-7 hidden lg:block pointer-events-none z-0">
        <div className="w-full h-full animate-spin-slow">
          <Settings className="w-full h-full drop-shadow-[0_0_8px_rgba(107, 196, 188,0.6)]" strokeWidth={1.5} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title Section */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto animate-on-scroll fade-in-up mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            How <span className="bg-gradient-to-r from-[#7DD3CB] to-[#5BAFA8] bg-clip-text text-transparent">NOVA</span> Works
          </h2>
          <p className="text-base sm:text-lg text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Transform your communication into high-converting campaigns in three simple steps
          </p>
        </div>

        {/* Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="relative">

            {/* Steps in horizontal row */}
            <div className="grid grid-cols-1 gap-8 md:gap-12 relative z-10">
              {steps.map((step, index) => {
                const delay = `delay-${(index + 1) * 100}`;
                const isEven = index % 2 === 1;
                // Animation direction: first and last from left, middle from right
                const animationClass = index === 1 ? 'fade-in-right' : 'fade-in-left';

                return (
                  <div
                    key={index}
                    ref={refs[index]}
                    className={`animate-on-scroll ${animationClass} ${delay} group`}
                    style={{
                      transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
                      transitionDelay: `${(index + 1) * 100}ms`,
                    }}
                  >
                    <div className="relative flex flex-col md:flex-row p-4 sm:p-6 md:p-6 lg:p-8 items-stretch h-full transform transition-all duration-500 gap-6 md:gap-0 overflow-hidden rounded-2xl border border-gray-800 hover:border-[#6BC4BC]/70 transition-all duration-500 hover:shadow-2xl hover:shadow-[#6BC4BC]/30 bg-gradient-to-br from-[#121212] via-[#0F0F0F] to-[#121212]">
                      {/* Image Section - Full Size */}
                      <div className={`relative w-full md:w-1/2 h-auto aspect-square sm:aspect-video md:h-[400px] lg:h-auto overflow-hidden ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                        <img
                          src={step.image}
                          alt={step.title}
                          className={`w-full h-full object-contain ${index < 2 ? 'p-0' : 'p-4'} transition-transform duration-500 group-hover:scale-110`}
                        />
                      </div>

                      {/* Vertical Cyan Line Separator */}
                      <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-3/4 bg-gradient-to-b from-[#6BC4BC] via-[#7DD3CB] to-[#6BC4BC] z-10"></div>

                      {/* Content Section */}
                      <div className="relative w-full md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                        <div className="relative z-10">
                          {/* Step number badge */}
                          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#6BC4BC]/20 to-[#5BAFA8]/20 border border-[#6BC4BC]/30 mb-4 text-[#7DD3CB] font-bold text-base">
                            {step.number}
                          </div>

                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:text-[#7DD3CB] transition-colors duration-300" style={{ fontFamily: "'Outfit', sans-serif" }}>
                            {step.title}
                          </h3>
                          <p className="text-gray-400 leading-relaxed text-sm sm:text-base flex-grow group-hover:text-gray-300 transition-colors duration-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
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
      </div>
    </section>
  );
};

export default HowNOVAWorksPage;