'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    // { name: 'Projects', href: '#projects' },
    { name: 'Savings', href: '#savings' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'nav-glass py-0 h-20'
          : 'bg-transparent py-6 h-20'
      } flex items-center`}
    >
      <div className="w-full px-6 md:px-12 flex items-center justify-between">

       {/* Logo */}
        <Link
          href="#home"
          className="flex items-center"
          >
          <Image
            src="/zippylogo.png"
            alt="Zippy Solar"
            width={240}
            height={60}
            priority
            className="h-12 md:h-14 w-auto"
            />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 text-sm font-medium text-white/60">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/zippy.solar/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border border-white/12 flex items-center justify-center text-white/80 hover:text-zippy-gold hover:border-zippy-gold hover:-translate-y-0.5 transition-all duration-300"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>

          {/* CTA Button */}
          <a
            href="#contact"
            className="btn-gold flex items-center justify-center"
          >
            Get Free Quote
          </a>

        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#0B0B0B] border-b border-white/5 py-8 px-6 flex flex-col gap-6 lg:hidden shadow-2xl"
          >

            {/* Mobile Links */}
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-medium text-gray-300 hover:text-zippy-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Actions */}
            <div className="flex flex-col gap-4 mt-4">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/zippy.solar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm font-medium border border-white/10 rounded-xl py-4 hover:bg-white/5 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Instagram className="w-5 h-5 text-zippy-gold" />
                Follow on Instagram
              </a>

              {/* Mobile CTA */}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-zippy-gold text-zippy-dark text-sm font-bold py-4 rounded-xl text-center hover:opacity-90 transition-all"
              >
                Get Free Quote
              </a>

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
