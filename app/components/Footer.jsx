"use client"

import React from 'react';
import Link from 'next/link';
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt
} from "react-icons/fa";
import { motion } from 'framer-motion';
import { CiMail } from "react-icons/ci";
import Image from 'next/image';

export default function Footer() {
  return (
      <motion.section
        className="bg-indigo-900 text-white px-6 py-12 mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
          
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: false }}
          >
            <Image 
              src="/logo.png"
              width={64}
              height={64}
              alt="J & L Powertools Logo"
            />
            <p className="text-gray-300 mt-0">
              Frontend Web Developer
            </p>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: false }}
          >
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="#" className="hover:text-[#FACC15] transition-colors">Home</Link></li>
              <li><button onClick={() => (document.getElementById("about")?.scrollIntoView({ behavior: "smooth"}))} href="#about" className="hover:text-[#FACC15] transition-colors">About Me</button></li>
              <li><Link href="#contact" className="hover:text-[#FACC15] transition-colors">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Social Media Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: false }}
          >
            <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
            <div className="flex flex-wrap gap-3 mb-4">
              <a 
                href="https://wa.me/2348090583625" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-[#25D366] text-white p-2 rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a 
                href="mailto:byteprowler.dev@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-[#25D366] text-white p-2 rounded-full transition-colors"
                aria-label="Mail"
              >
                <CiMail />
              </a>
              <a 
                href="mailto:byteprowler.dev@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-red-600 text-white p-2 rounded-full transition-colors"
                aria-label="Location"
              >
                <FaMapMarkerAlt />
              </a>
              <a 
                href="tel:2349160310791" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-[#25D366] text-white p-2 rounded-full transition-colors"
                aria-label="Phone"
              >
                <FaPhoneAlt />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="text-center text-xs text-gray-400 mt-12 pt-6 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: false }}
        >
          <p>&copy; {new Date().getFullYear()} ByteCorp. All rights reserved.</p>
          <p className="mt-2">
            Designed by <a href="https://byteprowler.vercel.app" target="_blank" rel="noopener" className="text-[#FACC15] hover:underline">ByteProwler</a>
          </p>
        </motion.div>
      </motion.section>
  );
}