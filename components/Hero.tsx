'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src="https://player.vimeo.com/external/494252666.sd.mp4?s=72fa1fe0640d27038e9067b5791c136894086055&profile_id=164&oauth2_token_id=57447761" 
            type="video/mp4" 
          />
          {/* Fallback image if video fails to load */}
          <Image 
            src="https://images.unsplash.com/photo-1509391366360-120014a51e60?q=80&w=2070&auto=format&fit=crop" 
            alt="Solar Farm" 
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </video>
        {/* Dark Overlay (55-65% opacity) */}
        <div className="absolute inset-0 bg-zippy-dark/65 z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center gap-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white"
        >
          Power Your Home<br />
          With <span className="text-zippy-gold">Smart Solar</span> Energy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/80 font-normal leading-relaxed max-w-2xl"
        >
          Residential, Commercial & Industrial Solar Installations with Government Subsidy Support, Expert Installation & Long-Term Savings.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <button className="bg-zippy-gold text-zippy-dark font-bold px-10 py-4 rounded-lg transition-all hover:opacity-90 shadow-lg shadow-zippy-gold/20">
            Get Free Consultation
          </button>
          <button className="bg-transparent border border-white/30 text-white font-bold px-10 py-4 rounded-lg transition-all hover:bg-white/5 backdrop-blur-sm">
            Calculate Savings
          </button>
        </motion.div>
      </div>
    </section>
  );
}
