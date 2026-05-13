'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-zippy-dark pt-20 pb-10 border-t border-zippy-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          
          {/* Brand Col */}
          <div className="max-w-md">
            <Link href="/" className="flex items-center gap-2 group mb-6 inline-flex">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-zippy-gold to-yellow-600 flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white group-hover:text-zippy-gold transition-colors">
                Zippy<span className="text-zippy-gold">Solar</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Powering India&apos;s transition to sustainable energy with premium rooftop solar installations and expert engineering across residential, commercial, and industrial sectors.
            </p>
            <div className="flex gap-4">
                {[
                  { icon: <Facebook className="w-4 h-4" />, href: "https://www.facebook.com/profile.php?id=61588202049399", name: "Facebook" },
                  { icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/zippy.solar/", name: "Instagram" }
                ].map((social) => (
                  <a 
                    key={social.name} 
                    href={social.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-zippy-gray bg-zippy-dark-card flex items-center justify-center text-gray-400 hover:text-white hover:border-zippy-gold hover:shadow-[0_0_15px_rgba(245,180,0,0.3)] transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:ml-auto">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4 max-w-sm">
              <li className="text-gray-400 text-sm flex gap-3">
                <MapPin className="w-5 h-5 text-zippy-gold shrink-0" />
                <span>Office No. 415, 4th Floor, Golden Trade Centre, Sector 2, Priyadarshini Nagar Colony, New Rajendra Nagar, Raipur, Tikrapara, Chhattisgarh 492001</span>
              </li>
              <li className="text-gray-400 text-sm flex gap-3">
                <Mail className="w-5 h-5 text-zippy-gold shrink-0" />
                <a href="mailto:info@zippysolar.com" className="hover:text-white transition-colors">info@zippysolar.com</a>
              </li>
              <li className="text-gray-400 text-sm flex gap-3">
                <Phone className="w-5 h-5 text-zippy-gold shrink-0" />
                <a href="tel:+919343430401" className="hover:text-white transition-colors">+91 93434 30401</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-zippy-gray flex flex-col md:flex-row items-center justify-between pt-8">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Zippy Solar Energy Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
