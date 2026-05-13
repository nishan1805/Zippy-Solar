'use client';

import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';
import Image from 'next/image';

export default function FinalCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
         <Image 
           src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&q=80&w=2500"
           alt="Sunlight hitting Solar panels"
           fill
           className="object-cover"
           referrerPolicy="no-referrer"
         />
         <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight text-white">
            Start Saving on Electricity Bills <span className="text-zippy-gold">Today</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get a free site inspection and consultation. Discover the exact subsidy amount and calculate your ROI with absolutely no obligation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zippy-gold text-zippy-dark hover:bg-zippy-gold/90 px-8 py-4 rounded-xl font-bold text-base transition-colors">
              <span>Get Your Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <a 
              href="tel:+919343430401"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent text-white hover:bg-white/5 border border-zippy-gray px-8 py-4 rounded-xl font-semibold text-base transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+91 93434 30401</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
