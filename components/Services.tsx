'use client';

import { motion } from 'motion/react';
import { Home, Building2, Factory, Settings, Zap } from 'lucide-react';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: "Residential Solar",
      description: "Power your home with premium MNRE-approved rooftop solar systems and save significantly on electricity bills.",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "AMC & Maintenance",
      description: "Regular cleaning, health checks, and performance monitoring to ensure peak efficiency year-round.",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "Commercial Solar",
      description: "Reduce operating costs with efficient solar installations for offices, malls, warehouses, and institutions.",
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "Industrial Plants",
      description: "Large-scale engineered solar systems designed to handle high energy consumption reliably.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "Solar Pump Solutions",
      description: "Sustainable solar-powered pumping solutions for agriculture, irrigation, and rural applications.",
      image: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?auto=format&fit=crop&q=80&w=1200",
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#000000] relative overflow-hidden">
      {/* Subtle Navy Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(0,34,70,0.3),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight text-white"
          >
            Comprehensive Solar <span className="text-zippy-gold">Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            From residential rooftops to massive industrial plants, we deliver engineered excellence across every scale.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden rounded-[24px] bg-[#0D0D0D] border border-zippy-gold/10 flex flex-col transition-all duration-500 hover:shadow-[0_20px_50px_rgba(245,180,0,0.1)] hover:border-zippy-gold/30 ${
                i < 2 ? "md:col-span-3 h-[420px]" : "md:col-span-2 h-[380px]"
              }`}
            >
              {/* Image Section (55-60%) */}
              <div className="relative h-[58%] w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-80" />
              </div>

              {/* Text Section (Lower portion) */}
              <div className="p-8 flex flex-col justify-center flex-grow">
                <h3 className="text-lg font-bold text-zippy-gold uppercase tracking-wider mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

