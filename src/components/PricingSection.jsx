import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });



  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
    setSubmitStatus({ type: '', message: '' });
    setIsSubmitting(false);
  };

  const cards = [
    {
      title: "Starter Plan",
      badge: "Free",
      desc: "Perfect for individuals or startups getting started with AI-powered email marketing.",
      price: "$0",
      period: "/ Monthly",
      features: [
        "1,000 Emails / Month",
        "Access to AI Email Builder",
        "Basic Campaign Management",
        "Legacy Data Optimizer (Limited Use)",
        "Email Performance Dashboard"
      ],
      button: "Start Free — No Credit Card Required"
    },
    {
      title: "Professional Plan",
      badge: "Most Popular",
      desc: "Ideal for small teams managing multiple campaigns and lists.",
      price: "Custom",
      period: "",
      features: [
        "Up to 25,000 Emails / Month",
        "Everything in Starter, plus:",
        "Advanced Campaign Scheduling",
        "Enhanced Legacy Data Optimization",
        "Priority Email Delivery",
        "Basic Automation Workflows"
      ],
      button: "Upgrade to Professional"
    },
    {
      title: "Business Plan",
      badge: "",
      desc: "Designed for growing businesses focused on scalability and performance.",
      price: "Custom",
      period: "",
      features: [
        "Up to 100,000 Emails / Month",
        "Everything in Professional, plus:",
        "Advanced Audience Segmentation",
        "AI Campaign Insights",
        "Real-Time Analytics Dashboard",
        "Dedicated Support Channel"
      ],
      button: "Get Business Access"
    },
    {
      title: "Enterprise Plan",
      badge: "",
      desc: "For agencies or enterprises needing full customization, deliverability optimization, and deep data integration.",
      price: "Custom",
      period: "",
      features: [
        "Custom Email Volume",
        "Tailored Email Volume & API Access",
        "Multi-User Collaboration",
        "White-Label Options",
        "Dedicated Account Manager"
      ],
      button: "Contact Sales"
    },
  ];

  return (
    <div id="pricingSection" className="min-h-screen bg-[#0A0A0A] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 " style={{ fontFamily: "'Outfit', sans-serif" }}>
          Find the <span className="section-title">Perfect Plan</span>
        </h2>
        <p className="mt-4 text-gray-400 text-base sm:text-lg " style={{ fontFamily: "'Poppins', sans-serif" }}>
          Choose the NOVA intelligence layer your business needs — tailored to support your goals, your workflows, and your customers.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap justify-center gap-8"
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, borderColor: '#6BC4BC' }}
            transition={{ type: "spring", stiffness: 200 }}
            className={`w-full max-w-[340px] bg-[#121212] shadow-xl rounded-2xl p-8 border ${card.badge === "Most Popular" ? "border-[#6BC4BC]" : "border-[#2A2A2A]"} flex flex-col relative`}
          >
            {card.badge && (
              <span className={`absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${card.badge === "Most Popular" ? "bg-[#6BC4BC] text-black" : "bg-gray-700 text-white"}`}>
                {card.badge}
              </span>
            )}
            <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
            <p className="text-gray-400 mt-2 min-h-[48px] text-sm">{card.desc}</p>

            <div className="my-6 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-white">{card.price}</span>
              {card.period && <span className="text-gray-400 font-medium">{card.period}</span>}
            </div>

            <ul className="mb-8 space-y-3 text-gray-300 flex-grow">
              {card.features.map((f, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#7DD3CB] mt-1 text-sm">✔</span>
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => {
                setSelectedPlan(card);
                setIsModalOpen(true);
              }}
              className={`mt-auto w-full py-3 rounded-xl font-semibold transition ${card.badge === "Most Popular" ? "bg-[#6BC4BC] text-black hover:bg-[#5BAFA8]" : "bg-transparent border border-gray-600 text-white hover:bg-gray-800"}`}
            >
              {card.button}
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal Form */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#1A1A1A] rounded-2xl border border-gray-800 max-w-2xl w-full max-h-[90vh] overflow-y-auto hide-scrollbar"
          >
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {selectedPlan?.button}
                  </h3>
                  <p className="text-gray-400">Selected Plan: <span className="text-[#6BC4BC] font-semibold">{selectedPlan?.title}</span></p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              {/* Form */}
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setIsSubmitting(true);
                  setSubmitStatus({ type: '', message: '' });

                  try {
                    // Send data to n8n webhook
                    const response = await fetch('https://damnart-ai-guladab.n8n-wsk.com/webhook/51aafbf6-6b9b-4d7f-93ba-f0076175695e', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        source: 'Pricing Section',
                        plan: selectedPlan?.title,
                        form_type: selectedPlan?.title === "Starter Plan" ? "New Plan Inquiry" : "Plan Upgradation Request",
                        agent: 'Nova',
                        ...formData,
                        submittedAt: new Date().toISOString()
                      }),
                    });

                    if (!response.ok) {
                      throw new Error('Failed to send request');
                    }

                    // Show success message
                    setSubmitStatus({
                      type: 'success',
                      message: 'Thank you! We will contact you soon.'
                    });

                    setTimeout(() => {
                      closeModal();
                      setSubmitStatus({ type: '', message: '' });
                    }, 2000);
                  } catch (err) {
                    console.error('❌ Webhook Error:', err);
                    setSubmitStatus({
                      type: 'error',
                      message: `Submission failed: ${err.message}. Please check your connection or try again later.`
                    });
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#6BC4BC] transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#6BC4BC] transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#6BC4BC] transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#6BC4BC] transition-colors"
                    placeholder="Enter your company name (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#6BC4BC] transition-colors resize-none"
                    placeholder="Tell us about your requirements or any questions..."
                  />
                </div>

                {/* Selected Plan Info */}
                <div className="bg-[#0A0A0A] border border-gray-800 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Selected Plan Details:</p>
                  <p className="text-white font-semibold">{selectedPlan?.title}</p>
                  <p className="text-gray-400 text-sm mt-1">{selectedPlan?.desc}</p>
                  <p className="text-[#6BC4BC] text-sm mt-2">{selectedPlan?.price} {selectedPlan?.period}</p>
                </div>

                {/* Status Message */}
                {submitStatus.message && (
                  <div className={`p-3 rounded-lg ${submitStatus.type === 'success'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                    : 'bg-red-500/20 text-red-400 border border-red-500/50'
                    }`}>
                    {submitStatus.message}
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex-1 py-3 rounded-xl font-semibold transition-colors ${isSubmitting
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      : 'bg-[#6BC4BC] text-black hover:bg-[#5BAFA8]'
                      }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Request'}
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-6 py-3 rounded-xl bg-transparent border-2 border-gray-600 text-gray-300 font-semibold hover:bg-gray-800 hover:border-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}