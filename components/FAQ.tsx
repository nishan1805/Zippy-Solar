'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How much government subsidy is available?",
      a: "The MNRE provides substantial subsidies for residential solar installations (up to 78,000 INR depending on the state and kW capacity). We handle the entire application process on the National Portal for you."
    },
    {
      q: "How long does a typical installation take?",
      a: "For residential setups, physical installation takes 2-3 days. However, including permissions, net metering approval from the local DISCOM, and subsidy processing, the total timeline is typically 3-5 weeks."
    },
    {
      q: "What is net metering?",
      a: "Net metering is a billing mechanism that credits solar energy system owners for the electricity they add to the grid. If you generate more power than you use, the excess is sent to the grid, and your utility meter spins backwards, lowering your final bill."
    },
    {
      q: "How long do solar panels last?",
      a: "Premium solar panels are designed to last 25-30 years. Zippy Solar provides up to a 25-year performance warranty on panels, ensuring they operate at optimal capacity for decades."
    },
    {
      q: "What maintenance is required?",
      a: "Solar panels require very little maintenance. A periodic wipe-down to remove dust (crucial in Indian cities) ensures maximum efficiency. We offer AMC (Annual Maintenance Contracts) for totally hands-off upkeep."
    },
    {
      q: "Is battery backup necessary?",
      a: "Not necessarily. Most urban installations are On-Grid systems that use the government grid as a 'virtual battery'. You only need physical batteries (Hybrid/Off-Grid) if you experience frequent and long power cuts."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight text-white">
            Common <span className="text-zippy-gold">Questions</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-white/10 rounded-2xl bg-[#121212] overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-lg text-white">{faq.q}</span>
                <span className="text-zippy-gold flex-shrink-0 ml-4">
                  {openIndex === i ? <Minus className="w-5 h-5"/> : <Plus className="w-5 h-5"/>}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-400 pt-2 border-t border-white/5">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
