"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Delivery() {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      title: "Gatimitra Delivery Services",
      icon: "fas fa-motorcycle",
      desc: "Reliable delivery with Pratapbite's dedicated fleet.",
      details: [
        { icon: "fas fa-clock", text: "Fast & timely deliveries" },
        { icon: "fas fa-location-arrow", text: "Real-time order tracking" },
        { icon: "fas fa-user-shield", text: "Trained & verified riders" },
      ],
    },
    {
      title: "Self-Delivery",
      icon: "fas fa-truck-loading",
      desc: "Use your own delivery system while leveraging our platform.",
      details: [
        { icon: "fas fa-tools", text: "Manage your own delivery team" },
        { icon: "fas fa-chart-line", text: "Complete delivery analytics" },
        { icon: "fas fa-phone", text: "Direct communication with customers" },
      ],
    },
    {
      title: "Customer Pickup",
      icon: "fas fa-walking",
      desc: "Zero delivery cost. Customers pick up orders from store.",
      details: [
        { icon: "fas fa-store", text: "Customer collects directly" },
        { icon: "fas fa-shield-alt", text: "Secure order handover" },
        { icon: "fas fa-handshake", text: "Boosts customer interaction" },
      ],
    },
    {
      title: "External Logistics Integration",
      icon: "fas fa-exchange-alt",
      desc: "Integrate your preferred third-party delivery services.",
      details: [
        { icon: "fas fa-plug", text: "Easy integration with courier apps" },
        { icon: "fas fa-route", text: "Extended delivery reach" },
        { icon: "fas fa-shipping-fast", text: "Automated delivery updates" },
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }, // one by one animation
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9, rotate: -2 },
    visible: { opacity: 1, y: 0, scale: 1, rotate: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="delivery" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-blue-900 dark:text-white mb-6">
          Delivery Solutions
          <span className="block mx-auto mt-4 w-24 h-1 rounded-full bg-gradient-to-r from-teal-500 to-red-600"></span>
        </h2>

        <p className="text-center max-w-2xl mx-auto mb-12 text-gray-700 dark:text-gray-200">
          Choose the delivery method that best fits your business needs.
        </p>

        {/* Cards */}
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              onClick={() => setActiveCard(card)}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.05, boxShadow: "0px 20px 40px rgba(0,0,0,0.3)", transition: { duration: 0.3 } }}
              className="cursor-pointer bg-gradient-to-tr from-gray-50 via-gray-100 to-gray-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 p-6 rounded-2xl shadow-lg border-t-4 border-teal-500 dark:border-yellow-500 text-center transition-transform"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-teal-50 dark:bg-yellow-900 mx-auto mb-4 text-3xl text-teal-600 dark:text-yellow-400 shadow-inner">
                <i className={card.icon}></i>
              </div>
              <h3 className="font-extrabold text-lg md:text-xl text-blue-900 dark:text-white mb-2">{card.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        {activeCard && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCard(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-gray-700 dark:text-gray-200 text-xl hover:text-red-600 dark:hover:text-yellow-400 transition"
                onClick={() => setActiveCard(null)}
              >
                ✕
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl text-teal-600 dark:text-yellow-400">
                  <i className={activeCard.icon}></i>
                </div>
                <h3 className="text-xl font-bold text-blue-900 dark:text-white">{activeCard.title}</h3>
              </div>

              {/* Details */}
              <motion.ul
                className="space-y-3"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.15 } },
                }}
              >
                {activeCard.details.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-200"
                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } } }}
                  >
                    <i className={`${item.icon} text-teal-500 dark:text-yellow-400`}></i>
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
