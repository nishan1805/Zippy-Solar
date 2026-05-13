'use client';

import { motion } from 'motion/react';
import { PhoneCall, Ruler, PenTool, Wrench, Power } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      title: "Free Consultation",
      description: "We discuss your energy needs and evaluate your bills.",
      icon: <PhoneCall className="w-5 h-5 text-zippy-dark" />
    },
    {
      title: "Site Inspection",
      description: "Our engineers visit to analyze roof space and shadow free area.",
      icon: <Ruler className="w-5 h-5 text-zippy-dark" />
    },
    {
      title: "Custom Design",
      description: "We architect a system optimized for your specific requirements.",
      icon: <PenTool className="w-5 h-5 text-zippy-dark" />
    },
    {
      title: "Professional Install",
      description: "Seamless deployment by our MNRE certified technical team.",
      icon: <Wrench className="w-5 h-5 text-zippy-dark" />
    },
    {
      title: "Activation",
      description: "System testing, net metering approval, and go-live.",
      icon: <Power className="w-5 h-5 text-zippy-dark" />
    }
  ];

  return (
    <section className="py-24 bg-[#0B0B0B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight text-white">
            The Journey to <span className="text-zippy-gold">Zero Bills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A streamlined, hassle-free process from the first call to flipping the switch.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[1px] bg-white/10" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Numbered Step node */}
                <div className="w-[90px] h-[90px] rounded-full bg-[#121212] border border-white/10 flex items-center justify-center z-10 mb-6 group-hover:border-zippy-green/50 transition-colors duration-500 shadow-[0_0_0_8px_#121212]">
                  <div className="w-[70px] h-[70px] rounded-full bg-zippy-green flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <div className="flex flex-col gap-2 relative z-10">
                  <span className="text-[10px] font-bold tracking-[3px] text-zippy-gold uppercase">Step 0{i + 1}</span>
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight">{step.title}</h3>
                  <p className="text-sm text-gray-400 mt-2 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
