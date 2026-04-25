import React from 'react';
import { useScrollAnimation } from '../utils/useScrollAnimation';

/**
 * Testimonials Component
 * Marquee section displaying customer testimonials
 */
const Testimonials = () => {
  const titleRef = useScrollAnimation();
  const marqueeRef = useScrollAnimation();

  const testimonials = [
    {
      text: "NOVA revolutionized how we communicate at DamnArt. As an email assistant, it crafts high-impact messages in seconds, leading to better engagement and higher-quality inquiries within the first few weeks.",
      name: 'Vishal Sood',
      role: 'DamnArt',
      initials: 'VS',
    },
    {
      text: "Accuracy is critical for Meddevices. NOVA’s AI writes precise, compliant emails that handle complex queries efficiently while reducing our drafting time and response speed drastically.",
      name: 'Sukhpal Singh',
      role: 'Meddevices',
      initials: 'SS',
    },
    {
      text: "NOVA streamlined Eurocert’s support communication end-to-end. From application guidance to document follow-ups, this assistant reduced our manual writing effort and improved turnaround time.",
      name: 'Nikhil Arora',
      role: 'Eurocert',
      initials: 'NA',
    },
    {
      text: "NOVA enabled Astro Remedies to launch personalized email flows with ease. Our users now receive instant, tailored insights and remedies without us needing to draft every consultation manually.",
      name: 'Satyam',
      role: 'Astro Remedies',
      initials: 'S',
    },
    {
      text: "As an email assistant, NOVA integrated seamlessly with Zoho for Sipcoin. We automated lead follow-ups and ticket routing in hours, ensuring no high-intent email ever goes unanswered.",
      name: 'Pawan Wadhawan',
      role: 'Sipcoin',
      initials: 'PW',
    },
    {
      text: "NOVA transformed how Grnata engages buyers via email. It filters high-intent leads and provides instant, intelligent responses, making property discovery faster and much smarter for our clients.",
      name: 'Sadeeq',
      role: 'Grnata',
      initials: 'S',
    },
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 bg-[#101010] overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto animate-on-scroll fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Don't Just Take  <span className="bg-gradient-to-r from-[#7DD3CB] to-[#5BAFA8] bg-clip-text text-transparent">Our Word For It</span>
          </h2>
          <p className="mt-4 text-gray-400">
            See how NOVA is driving real results for visionary teams.
          </p>
        </div>

        <div ref={marqueeRef} className="mt-16 animate-on-scroll fade-in testimonial-container">
          <div className="testimonial-marquee-content">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card-item">
                <div className="testimonial-card">
                  <p className="text-lg text-gray-300">{testimonial.text}</p>
                  <div className="mt-6 flex items-center">
                    <img
                      src={`https://placehold.co/50x50/00D1FF/0A0A0A?text=${testimonial.initials}`}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 border-2 border-[#6BC4BC]"
                    />
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

