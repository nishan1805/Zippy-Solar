'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Check } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    "Premium Tier-1 Solar Panels",
    "End-to-End Subsidy Assistance",
    "Expert In-House Engineering Team",
    "Long-Term Savings & Fast ROI",
    "Priority 24/7 Fast Support",
    "Comprehensive AMC Maintenance"
  ];

  return (
    <section className="py-24 bg-[#0B0B0B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight text-white">
                Why Thousands Trust Zippy <span className="text-zippy-gold">Solar</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                We don&apos;t just sell solar panels; we architect complete energy independence. Our commitment to premium hardware and flawless execution guarantees zero headaches for you.
              </p>
           </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mt-4">
              {features.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full border border-zippy-green flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-zippy-green stroke-[3]" />
                  </div>
                  <span className="text-white font-semibold text-base md:text-lg leading-tight">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[600px] rounded-[2rem] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1500&auto=format&fit=crop"
              alt="Solar Technicians installing panels"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-zippy-dark/60 to-transparent" />
            
            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 bg-[#0B0B0B]/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl max-w-[200px]">
              <div className="text-4xl font-bold text-zippy-gold mb-2">25+</div>
              <div className="text-sm font-medium text-white">Years Performance Warranty</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
