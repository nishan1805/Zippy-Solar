'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { IndianRupee } from 'lucide-react';
import Image from 'next/image';

export default function SavingsCalculator() {
  const [units, setUnits] = useState(400);

  // Average electricity rate per unit
  const electricityRate = 8;

  // Estimated monthly bill
  const monthlyBillEstimate = units * electricityRate;

  // Recommended solar system size
  const systemSize = (units / 120).toFixed(1);

  // Savings calculations
  const yearlySavings = monthlyBillEstimate * 12;
  const lifetimeSavings = yearlySavings * 25;

  // ROI estimate
  const roiYears =
    units < 300
      ? '5-6 Years'
      : units < 700
      ? '4-5 Years'
      : '3-4 Years';

  return (
    <section
      id="savings"
      className="py-24 bg-[#0B0B0B] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-zippy-dark/90 to-[#0B0B0B] z-10" />

        <Image
          src="https://images.unsplash.com/photo-1456953180671-730de08edaa7?q=80&w=2000&auto=format&fit=crop"
          alt="Dark Solar"
          fill
          className="object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center flex-wrap">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 tracking-tight">
              Calculate Your Solar{' '}
              <span className="text-zippy-gold">Impact</span>
            </h2>

            <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
              Adjust your average monthly electricity consumption to estimate
              your solar savings and ideal system size.
            </p>

            {/* Calculator Card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">

              <label className="block text-sm font-medium text-gray-300 mb-4 uppercase tracking-wider">
                Monthly Electricity Consumption
              </label>

              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-bold text-zippy-gold">
                  {units.toLocaleString()} Units
                </span>
              </div>

              <input
                type="range"
                min="50"
                max="2000"
                step="10"
                value={units}
                onChange={(e) => setUnits(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-zippy-gold"
              />

              <div className="flex justify-between text-xs text-gray-500 mt-2 font-mono">
                <span>50 Units</span>
                <span>2000+ Units</span>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow"
          >

            {/* Lifetime Savings */}
            <div className="bg-[#121212] border border-zippy-gold/20 rounded-2xl p-8 relative overflow-hidden group hover:border-zippy-gold/40 transition-colors">
              <p className="text-sm font-medium text-white mb-2 relative z-10 uppercase tracking-wider">
                25-Year Savings
              </p>

              <h3 className="text-4xl font-bold text-zippy-green flex items-center relative z-10">
                <IndianRupee className="w-8 h-8 mr-1" />
                {lifetimeSavings.toLocaleString()}
              </h3>
            </div>

            {/* Recommended Setup */}
            <div className="bg-[#121212] border border-white/5 rounded-2xl p-8 hover:bg-white/5 transition-colors">
              <p className="text-sm font-medium text-white mb-2 uppercase tracking-wider">
                Recommended Setup
              </p>

              <h3 className="text-3xl font-bold text-zippy-gold">
                {systemSize} kW
              </h3>
            </div>

            {/* Yearly Savings */}
            <div className="bg-[#121212] border border-white/5 rounded-2xl p-8 hover:bg-white/5 transition-colors">
              <p className="text-sm font-medium text-white mb-2 uppercase tracking-wider">
                Yearly Savings
              </p>

              <h3 className="text-3xl font-bold text-zippy-green flex items-center">
                <IndianRupee className="w-6 h-6 mr-1" />
                {yearlySavings.toLocaleString()}
              </h3>
            </div>

            {/* ROI Timeline */}
            <div className="bg-[#121212] border border-white/5 rounded-2xl p-8 hover:bg-white/5 transition-colors">
              <p className="text-sm font-medium text-zippy-gold mb-2 uppercase tracking-wider">
                ROI Timeline
              </p>

              <h3 className="text-3xl font-bold text-zippy-gold">
                ~{roiYears}
              </h3>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
