'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      city: "Gurugram",
      project: "Residential (8kW)",
      quote: "Zippy Solar handled everything from MNRE subsidy paperwork to the final net meter installation. My electricity bill has legitimately dropped to almost zero. Highly professional team."
    },
    {
      name: "Amit Desai",
      city: "Ahmedabad",
      project: "Commercial (50kW)",
      quote: "We installed a 50kW system on our factory roof. The build quality and the mounting structures are top-notch. The ROI on this is incredible for our operational costs."
    },
    {
      name: "Priya Reddy",
      city: "Hyderabad",
      project: "Residential (5kW)",
      quote: "Clean installation, no loose wires around the house. They explained the whole app generation metrics to us patiently. The system has been running flawlessly for a year now."
    }
  ];

  return (
    <section className="py-24 bg-[#0B0B0B] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight text-white">
            Client Success <span className="text-zippy-gold">Stories</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
            Hear from homeowners and business leaders who have claimed their energy independence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-[#121212] border border-white/10 p-8 rounded-[24px] flex flex-col items-start gap-6 hover:border-zippy-gold/30 transition-colors"
            >
              <div className="flex gap-1 text-zippy-gold">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 text-lg leading-relaxed italic flex-1">
                &quot;{t.quote}&quot;
              </p>
              <div className="mt-auto">
                <h4 className="text-white font-bold text-lg">{t.name}</h4>
                <p className="text-sm font-bold text-white/50 uppercase tracking-[2px] mt-2">
                  {t.project} • {t.city}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
