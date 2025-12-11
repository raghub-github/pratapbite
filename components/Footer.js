"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.footer
      className="bg-[linear-gradient(135deg,#0c1a3a,#1d3557)] text-white pt-10 pb-4 mt-0 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* CTA */}
        <motion.div className="footer-cta text-center mb-10" variants={fadeUpVariant}>
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Start Saving Today</h3>
          <p className="mb-5 text-base md:text-lg text-white/90 max-w-xl mx-auto">
            Join India's fastest growing delivery platform with the lowest commissions in the market.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-red-600 to-teal-500 hover:from-red-700 hover:to-teal-600 text-white font-semibold shadow-lg transition-all duration-200 mt-2"
          >
            <i className="fas fa-rocket"></i> Get Started Now
          </a>
        </motion.div>

        {/* MAIN 3 COLUMNS + SOCIAL MEDIA */}
        <motion.div
          className="footer-content grid grid-cols-1 md:grid-cols-4 gap-8 mb-10"
          variants={containerVariants}
        >

          {/* 1️⃣ Logo + Contact */}
          <motion.div className="footer-col flex flex-col items-center md:items-start" variants={fadeUpVariant}>
            <div className="footer-logo flex items-center gap-3 mb-4">
              <img
                src="/img/logo.png"
                alt="Pratap's Bite Logo"
                className="w-[45px] h-[45px] rounded-[10px] object-cover border-2 border-[#e63946] p-[2px] bg-white"
              />
              <div>
                <div className="text-[1.3rem] font-extrabold leading-tight">Pratap's Bite</div>
                <div className="text-xs text-white/70 font-medium mt-0.5 tracking-wide">
                  Pratap and Sons Group
                </div>
              </div>
            </div>

            <p className="text-white/80 mb-4 text-[0.95rem]">
              India's most partner-friendly delivery platform offering the lowest commissions.
            </p>

            <div className="text-white/80 mb-2 text-[0.95rem] flex items-start gap-2">
              <i className="fas fa-map-marker-alt text-[#e63946]"></i>
              <span><strong>Address:</strong> Kolkata, India</span>
            </div>

            <div className="text-white/80 mb-2 text-[0.95rem] flex items-start gap-2">
              <i className="fas fa-phone-alt text-[#e63946]"></i>
              <span><strong>Phone:</strong> 0000911319</span>
            </div>

            <div className="text-white/80 text-[0.95rem] flex items-start gap-2">
              <i className="fas fa-envelope text-[#e63946]"></i>
              <span><strong>Email:</strong> pratapandsons10@gmail.com</span>
            </div>
          </motion.div>

          {/* 2️⃣ Quick Links */}
          <motion.div className="footer-col" variants={fadeUpVariant}>
            <h3 className="text-white mb-3 text-[1.2rem] font-bold pb-2 relative">
              Quick Links
              <span className="block absolute bottom-0 left-0 w-10 h-[3px] rounded bg-gradient-to-r from-[#e63946] to-[#2a9d8f]"></span>
            </h3>

            <ul className="space-y-2">
              {["Home", "Features", "Delivery", "Why Us", "Contact"].map((item, i) => (
                <li key={i}>
                  <a href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="flex items-center gap-2 text-white/80 hover:text-white transition font-medium text-[0.95rem]"
                  >
                    <i className="fas fa-chevron-right text-[#e63946] w-[18px]"></i> {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 3️⃣ Business Solutions */}
          <motion.div className="footer-col" variants={fadeUpVariant}>
            <h3 className="text-white mb-3 text-[1.2rem] font-bold pb-2 relative">
              Business Solutions
              <span className="block absolute bottom-0 left-0 w-10 h-[3px] rounded bg-gradient-to-r from-[#e63946] to-[#2a9d8f]"></span>
            </h3>

            <ul className="space-y-2">
              {["Restaurant", "Grocery Store", "Pharmacy", "Stationery"].map((item, i) => (
                <li key={i}>
                  <a href="#"
                    className="flex items-center gap-2 text-white/80 hover:text-white transition font-medium text-[0.95rem]"
                  >
                    <i className="fas fa-chevron-right text-[#e63946] w-[18px]"></i> {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 4️⃣ SOCIAL MEDIA (NEW COLUMN) */}
          <motion.div className="footer-col" variants={fadeUpVariant}>
            <h3 className="text-white mb-3 text-[1.2rem] font-bold pb-2 relative">
              Social Media
              <span className="block absolute bottom-0 left-0 w-14 h-[3px] rounded bg-gradient-to-r from-[#e63946] to-[#2a9d8f]"></span>
            </h3>

            {/* BEAUTIFUL ICON BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-3">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/pratapsons10"
                target="_blank"
                className="w-11 h-11 flex items-center justify-center rounded-full 
                          bg-gradient-to-br from-blue-500 to-blue-700 
                          hover:scale-110 hover:shadow-xl hover:shadow-blue-500/50 
                          transition-all duration-300 text-white text-xl"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/pratapandsons/"
                target="_blank"
                className="w-11 h-11 flex items-center justify-center rounded-full 
                          bg-gradient-to-br from-cyan-500 to-blue-600 
                          hover:scale-110 hover:shadow-xl hover:shadow-cyan-400/50
                          transition-all duration-300 text-white text-xl"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              {/* Instagram */}
              <a
                href="#"
                target="_blank"
                className="w-11 h-11 flex items-center justify-center rounded-full 
                          bg-gradient-to-br from-pink-500 to-red-500 
                          hover:scale-110 hover:shadow-xl hover:shadow-pink-400/50
                          transition-all duration-300 text-white text-xl"
              >
                <i className="fab fa-instagram"></i>
              </a>

              {/* YouTube */}
              <a
                href="#"
                target="_blank"
                className="w-11 h-11 flex items-center justify-center rounded-full 
                          bg-gradient-to-br from-red-500 to-red-700 
                          hover:scale-110 hover:shadow-xl hover:shadow-red-500/50
                          transition-all duration-300 text-white text-xl"
              >
                <i className="fab fa-youtube"></i>
              </a>

            </div>
          </motion.div>
        </motion.div>

        {/* COPYRIGHT */}
        <motion.div className="border-t border-white/15 pt-8 text-center text-white/70 text-[0.9rem]" variants={fadeUpVariant}>
          <p>Copyright © 2025-26 Pratap's Bite | Pratap and Sons Group | All Rights Reserved</p>
          <p className="mt-2 text-xs text-white/60">Lowest Commission • 24/7 Support • Flexible Delivery • Secure Platform</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
