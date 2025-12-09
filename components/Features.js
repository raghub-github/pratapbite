"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Features() {
  const [activeModal, setActiveModal] = useState(null);

  const features = [
    {
      id: 1,
      title: "Lowest Commission",
      description:
        "Significantly lower commissions than other platforms. While others charge 20–30%, our rates are the most competitive.",
      icon: "fas fa-percentage",
      subItems: [
        { icon: "fas fa-rupee-sign", text: "Industry‑lowest charges" },
        { icon: "fas fa-chart-line", text: "Boost your business profits instantly" },
        { icon: "fas fa-balance-scale", text: "Transparent & fair pricing policies" },
        { icon: "fas fa-bolt", text: "Fastest payout settlements" },
        { icon: "fas fa-thumbs-up", text: "No hidden charges — 100% clarity" }
      ]
    },
    {
      id: 2,
      title: "Business Partnership",
      description:
        "Partner with us for mutual growth. Comprehensive support, training, and resources for your business.",
      icon: "fas fa-handshake",
      subItems: [
        { icon: "fas fa-users", text: "Dedicated support team" },
        { icon: "fas fa-graduation-cap", text: "Training & onboarding for hassle‑free start" },
        { icon: "fas fa-lightbulb", text: "Advanced marketing & business growth strategies" }
      ]
    },
    {
      id: 3,
      title: "Multi-Vendor Integration",
      description:
        "Seamlessly integrate restaurants, grocery stores, pharmacies, and stationery shops with easy setup.",
      icon: "fas fa-store",
      subItems: [
        { icon: "fas fa-concierge-bell", text: "Restaurant integration" },
        { icon: "fas fa-shopping-basket", text: "Grocery setup" },
        { icon: "fas fa-pills", text: "Pharmacy onboarding" }
      ]
    }
  ];

  // Container animation with stagger
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25, // Cards show one by one
      },
    },
  };

  // Card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.9, rotate: -3 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="features" className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-blue-900 dark:text-white mb-16 relative">
          Core Features
          <span className="block mx-auto mt-4 w-24 h-1 rounded-full bg-gradient-to-r from-red-600 to-teal-500"></span>
        </h2>

        <motion.div
          className="grid md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => setActiveModal(item)}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.05,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.3)",
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="cursor-pointer bg-gradient-to-tr from-white via-gray-100 to-gray-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 p-8 rounded-2xl shadow-lg border-t-4 border-red-600 dark:border-yellow-500 text-center transition-transform"
            >
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-red-50 dark:bg-yellow-900 mx-auto mb-6 text-4xl text-red-600 dark:text-yellow-400 shadow-inner">
                <i className={item.icon}></i>
              </div>
              <h3 className="font-extrabold text-xl md:text-2xl text-blue-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setActiveModal(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-600 dark:text-white text-xl hover:text-red-600 dark:hover:text-yellow-400 transition"
              onClick={() => setActiveModal(null)}
            >
              ✖
            </button>

            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-white mb-6 text-center">
              {activeModal.title}
            </h3>

            <div className="space-y-4">
              {activeModal.subItems.map((sub, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-gray-100 dark:bg-gray-700 p-3 rounded-xl shadow-inner"
                >
                  <i className={`${sub.icon} text-red-600 dark:text-yellow-400 text-xl`}></i>
                  <span className="text-gray-700 dark:text-gray-200">{sub.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
