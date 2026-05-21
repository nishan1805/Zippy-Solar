'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">

      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-14">

        <div className="flex flex-col items-center text-center">

          {/* Logo */}
          <Link
            href="#home"
            className="flex flex-col items-center gap-5 group"
          >
            <Image
              src="/logo.png"
              alt="Zippy Solar"
              width={90}
              height={90}
              className="object-contain"
            />

            <div className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Zippy
              <span className="text-zippy-gold">Solar</span>
            </div>
          </Link>

          {/* Description */}
          <p className="mt-8 max-w-3xl text-gray-400 text-lg leading-relaxed">
            Powering India&apos;s transition to sustainable energy with
            premium rooftop solar installations and expert engineering
            solutions for residential, commercial, and industrial spaces.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5 mt-10">

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-gray-300 hover:text-zippy-gold hover:border-zippy-gold hover:bg-zippy-gold/10 transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-gray-300 hover:text-zippy-gold hover:border-zippy-gold hover:bg-zippy-gold/10 transition-all duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-gray-300 hover:text-zippy-gold hover:border-zippy-gold hover:bg-zippy-gold/10 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom Footer - Keep As It Is */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-5">

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 Zippy Solar Energy Pvt. Ltd. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-gray-500">

            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>

          </div>

        </div>
      </div>

    </footer>
  );
}
