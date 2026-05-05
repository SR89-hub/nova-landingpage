import React from 'react';
import novaImage from '../assets/nova(1).png';
import novaMobileImage from '../assets/nova(1).png';

/**
 * Meet NOVA Section
 * Introduction section with large, bold text on white background
 */
const MeetNOVA = () => {
  return (
    <section id="meet-nova" className="w-full flex flex-col items-center justify-center ">
      {/* Hero Image Container - Responsive sizing with cyan border and glow effect */}
      <div className='w-[95%] max-w-[1600px] mx-auto min-h-auto md:min-h-[800px] lg:min-h-[700px] xl:min-h-[950px] rounded-[30px] md:rounded-[83px] overflow-hidden mt-0 relative flex items-center justify-center border-2' style={{ borderColor: '#6BC4BC', boxShadow: '0 0 15px rgba(107, 196, 188, 0.4), 0 0 30px rgba(107, 196, 188, 0.2)' }} >
        {/* Mobile Image - Visible on small screens only */}
        <img
          src={novaMobileImage}
          alt="NOVA"
          className="w-full h-full object-cover lg:hidden rounded-[30px]"
        />
        {/* Desktop Image - Visible on medium screens and above */}
        <img
          src={novaImage}
          alt="NOVA"
          className="hidden lg:block w-full h-full object-cover rounded-[83px]"
          style={{ objectPosition: 'center' }}
        />
      </div>

      {/* Text Content Section - Below the image */}
      <div className="container mx-auto  px-6 sm:px-6 md:px-12 mt-12 sm:mt-16 md:mt-20">
        <div className="text-center max-w-6xl mx-auto my-7">
          {/* Main Heading - "Meet NOVA — your dedicated AI Assistant" */}
          <h2
            className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight"
            style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 800 }}
          >
            {/* Keep heading on one line using whitespace-nowrap */}
            <span className="inline-block">
              Meet{" "}
              {/* Gradient text effect for "NOVA —" */}
              <span className="bg-gradient-to-r from-[#7DD3CB] via-[#6BC4BC] to-[#5BAFA8] bg-clip-text text-transparent">
                NOVA—
              </span>{" "}
              the future of {" "}
              {/* Gradient text effect for "AI Assistant" */}
              <span className="bg-gradient-to-r from-[#7DD3CB] via-[#6BC4BC] to-[#5BAFA8] bg-clip-text text-transparent font-bold">
                intelligent Email marketing
              </span>
            </span>
          </h2>

          {/* Body Paragraph - Description of NOVA */}
          <p
            className="mt-6 text-lg sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl text-gray-100 leading-relaxed"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            NOVA is a modern, comprehensive <span className="bg-gradient-to-r from-[#7DD3CB] via-[#6BC4BC] to-[#5BAFA8] bg-clip-text text-transparent font-semibold">
              Email Marketing  Ecosystem
            </span>{" "}
            designed to bridge the gap between
            {/* Highlighted text with gradient */}
            <t></t> <span className="bg-gradient-to-r from-[#7DD3CB] via-[#6BC4BC] to-[#5BAFA8] bg-clip-text text-transparent font-semibold">
              artificial intelligence and human connection
            </span>{" "}
            Powered by{" "}
            {/* Highlighted "EVOKE" with gradient */}
            <t></t><span className="bg-gradient-to-r from-[#7DD3CB] via-[#6BC4BC] to-[#5BAFA8] bg-clip-text text-transparent font-bold">
              EVOKE AI
              <t></t></span><t></t>
            We provide a secure, real-time platform that empowers you to craft, track, and optimize your outreach with surgical precision
            , From crafting emails to designing effective win-back automations, NOVA ensures your emails achieve maximum results.
            Our mission is to eliminate the manual overhead of email marketing, allowing you to focus on strategy while {" "}
            {/* Highlighted text with gradient */}
            <span className="bg-gradient-to-r from-[#7DD3CB] via-[#6BC4BC] to-[#5BAFA8] bg-clip-text text-transparent font-bold">
              NOVA handles the execution.
            </span>{" "}

          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetNOVA;