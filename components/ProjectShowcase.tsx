'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const projects = [
    { 
      category: 'Residential', 
      capacity: '10kW', 
      title: 'Modern Villa Rooftop', 
      location: 'Delhi NCR', 
      img: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=2058' 
    },
    { 
      category: 'Commercial', 
      capacity: '500kW', 
      title: 'Tech Park Solar Array', 
      location: 'Bangalore', 
      img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=2070' 
    },
    { 
      category: 'Industrial', 
      capacity: '1.2MW', 
      title: 'Manufacturing Plant', 
      location: 'Pune', 
      img: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&q=80&w=2060' 
    },
    { 
      category: 'Residential', 
      capacity: '25kW', 
      title: 'Luxury Estate System', 
      location: 'Chandigarh', 
      img: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&q=80&w=2070' 
    },
  ];

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-24 bg-zippy-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight text-white"
          >
            Our Premium <span className="text-zippy-gold">Installations</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 max-w-3xl"
          >
            Explore our diverse portfolio of successfully commissioned solar power plants across India, engineered for maximum efficiency.
          </motion.p>
        </div>

        <div className="relative group">
          {/* Navigation Arrows */}
          <button 
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-14 h-14 rounded-full border border-white/10 bg-zippy-dark/60 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 hover:bg-zippy-gold hover:text-zippy-dark hover:border-zippy-gold ${!canScrollLeft ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-14 h-14 rounded-full border border-white/10 bg-zippy-dark/60 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 hover:bg-zippy-gold hover:text-zippy-dark hover:border-zippy-gold ${!canScrollRight ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Container */}
          <div 
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory px-2"
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial="initial"
                whileInView="show"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  initial: { opacity: 0, x: 40, borderColor: "rgba(255, 255, 255, 0.05)", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" },
                  show: { opacity: 1, x: 0, transition: { duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] } },
                  hover: { borderColor: "rgba(255, 193, 7, 0.3)", boxShadow: "0 0 30px rgba(255, 193, 7, 0.1)" }
                }}
                className="relative flex-none w-[280px] sm:w-[320px] md:w-[400px] h-[320px] md:h-[420px] lg:h-[450px] rounded-3xl overflow-hidden cursor-pointer snap-start border transition-shadow duration-500"
              >
                <motion.div
                  variants={{
                    initial: { scale: 1 },
                    hover: { scale: 1.08 }
                  }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                
                {/* Gradient overlay */}
                <motion.div 
                  variants={{
                    initial: { opacity: 0.85, background: "linear-gradient(to top, #0B0B0B, rgba(11, 11, 11, 0.5), transparent)" },
                    hover: { opacity: 1, background: "linear-gradient(to top, #0B0B0B, rgba(11, 11, 11, 0.4), transparent)" }
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0" 
                />
                
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <motion.div 
                    variants={{
                      initial: { y: 16 },
                      hover: { y: 0 }
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold text-zippy-gold uppercase tracking-[2px] px-2 py-0.5 rounded-full bg-zippy-gold/10 border border-zippy-gold/20">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-bold text-zippy-green uppercase tracking-[2px]">
                        {project.capacity}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-white mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                      <div className="w-1 h-1 rounded-full bg-zippy-gold" />
                      <span>{project.location}</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

