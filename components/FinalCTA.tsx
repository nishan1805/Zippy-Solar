'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  Send,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Image from 'next/image';

export default function FinalCTA() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    consumption: '400 Units',
    city: 'Raipur'
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);

    const message = `
    New Solar Inquiry

    Name: ${formData.name}
    Phone: ${formData.phone}
    Monthly Units: ${formData.consumption}
    City: ${formData.city}
    `;

    const whatsappNumber = '919343430401';

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Loading effect
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Stop loading
    setIsSubmitting(false);

    // Show success state
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&q=80&w=2500"
          alt="Solar Panels"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />

        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight tracking-tight mb-6">
              Start Saving on Electricity Bills{' '}
              <span className="text-zippy-gold">Today</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl mb-12">
              Get a free site inspection and consultation. Discover the exact subsidy amount and calculate your ROI with absolutely no obligation.
            </p>

            {/* CONTACT DETAILS */}
            <div className="flex flex-col gap-6">

              {/* Contact No */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-zippy-gold" />
                </div>

                <div>
                  <span className="block text-sm text-gray-400 mb-1">
                    Contact No.
                  </span>

                  <a
                    href="tel:+919343430401"
                    className="text-white font-semibold text-lg hover:text-zippy-gold transition-colors"
                  >
                    +91 93434 30401
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-zippy-gold" />
                </div>

                <div>
                  <span className="block text-sm text-gray-400 mb-1">
                    Email
                  </span>

                  <a
                    href="mailto:help@zippysolar.com"
                    className="text-white font-semibold text-lg hover:text-zippy-gold transition-colors"
                  >
                    hello@zippysolar.in
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-zippy-gold" />
                </div>

                <div>
                  <span className="block text-sm text-gray-400 mb-1">
                    Address
                  </span>

                  <p className="text-white font-semibold leading-relaxed max-w-md">
                    Office No. 415, 4th Floor, Golden Trade Centre,
                    New Rajendra Nagar, Raipur, CG 492001
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT FORM CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#121212]/95 backdrop-blur-xl border border-white/10 rounded-[28px] p-8 md:p-10 shadow-2xl relative overflow-hidden"
          >
            {/* Top Accent */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-zippy-gold to-yellow-500" />

            <AnimatePresence mode="wait">

              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-6"
                >
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
                      Request Free Site Inspection
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      Fill out your details and our solar consultant
                      will contact you shortly.
                    </p>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Your Name
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="e.g. Anil Kumar"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value
                        })
                      }
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 focus:border-zippy-gold focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Mobile Number
                    </label>

                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 93434 30401"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value
                        })
                      }
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 focus:border-zippy-gold focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Units + City */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Monthly Units
                      </label>

                      <select
                        value={formData.consumption}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            consumption: e.target.value
                          })
                        }
                        className="w-full bg-[#121212] border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-zippy-gold focus:outline-none transition-colors"
                      >
                        <option value="150 Units">150 Units</option>
                        <option value="400 Units">400 Units</option>
                        <option value="800 Units">800 Units</option>
                        <option value="1500+ Units">1500+ Units</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Your City
                      </label>

                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            city: e.target.value
                          })
                        }
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 focus:border-zippy-gold focus:outline-none transition-colors"
                      />
                    </div>

                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-zippy-gold text-zippy-dark hover:bg-zippy-gold/90 rounded-2xl py-4 font-bold text-base transition-all duration-300 flex items-center justify-center gap-2 group mt-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Free Request</span>

                        <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </button>

                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-6 animate-pulse" />

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    REQUEST RECEIVED!
                  </h3>

                  <p className="text-gray-300 leading-relaxed max-w-md text-lg">
                    Thank you{' '}
                    <span className="text-white font-semibold">
                      {formData.name}
                    </span>
                    ! One of our local engineers will connect with you shortly on{' '}
                    <span className="text-zippy-gold font-semibold">
                      {formData.phone}
                    </span>{' '}
                    to book your expert site inspection.
                  </p>

                  <button
                    onClick={() => {
                      setSubmitted(false);

                      setFormData({
                        name: '',
                        phone: '',
                        consumption: '400 Units',
                        city: 'Raipur'
                      });
                    }}
                    className="mt-10 bg-white/5 border border-white/10 hover:border-zippy-gold text-zippy-gold px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-zippy-gold/10"
                  >
                    SUBMIT ANOTHER REQUEST
                  </button>
                </motion.div>
              )}

            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
