"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      title: "Maximum Profits",
      icon: "fas fa-money-bill-wave",
      short: "We offer significantly lower commission rates.",
      details: [
        { icon: "fas fa-percentage", text: "Lowest commission in the market" },
        { icon: "fas fa-wallet", text: "You keep maximum earnings" },
        { icon: "fas fa-chart-pie", text: "Transparent revenue reports" },
      ],
    },
    {
      title: "24/7 Support",
      icon: "fas fa-headset",
      short: "Round-the-clock expert technical help.",
      details: [
        { icon: "fas fa-phone-volume", text: "Instant call & chat support" },
        { icon: "fas fa-users-cog", text: "Dedicated partner support team" },
        { icon: "fas fa-life-ring", text: "Technical help anytime" },
      ],
    },
    {
      title: "Growth Tools",
      icon: "fas fa-chart-line",
      short: "Analytics, marketing, and growth boosters.",
      details: [
        { icon: "fas fa-bullhorn", text: "Marketing & promotion support" },
        { icon: "fas fa-chart-area", text: "Deep analytics dashboard" },
        { icon: "fas fa-rocket", text: "Tools to scale your business faster" },
      ],
    },

    // ✅ NEW CARDS ADDED BELOW

    {
      title: "Fast Payments",
      icon: "fas fa-bolt",
      short: "Quick, reliable payouts with no delays.",
      details: [
        { icon: "fas fa-wallet", text: "Instant withdrawal processing" },
        { icon: "fas fa-clock", text: "Daily & weekly payout options" },
        { icon: "fas fa-check-circle", text: "Zero payment delays" },
      ],
    },
    {
      title: "Zero Hidden Fees",
      icon: "fas fa-shield-alt",
      short: "100% transparent pricing — no surprises.",
      details: [
        { icon: "fas fa-eye", text: "Clear & simple fee structure" },
        { icon: "fas fa-receipt", text: "No hidden charges ever" },
        { icon: "fas fa-balance-scale", text: "Honest, fair billing" },
      ],
    },
    {
      title: "Easy Onboarding",
      icon: "fas fa-user-check",
      short: "Start selling and earning in minutes.",
      details: [
        { icon: "fas fa-user-plus", text: "Simple signup process" },
        { icon: "fas fa-file-signature", text: "Minimal documentation" },
        { icon: "fas fa-bolt", text: "Go live quickly" },
      ],
    },
    {
      title: "Transparent Dashboard",
      icon: "fas fa-chart-bar",
      short: "Track all earnings in real time.",
      details: [
        { icon: "fas fa-tachometer-alt", text: "Real-time business insights" },
        { icon: "fas fa-chart-line", text: "Track growth performance" },
        { icon: "fas fa-database", text: "Detailed analytics & reports" },
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9, rotate: -2 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="why-choose-us"
      className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 dark:from-gray-900 dark:to-gray-800 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6">
          Why Choose Us
          <span className="block mx-auto mt-2 w-20 h-1 rounded bg-gradient-to-r from-red-500 to-teal-400"></span>
        </h2>

        <p className="text-center max-w-2xl mx-auto mb-12 text-white/90 dark:text-gray-200 text-lg">
          We're committed to being the most partner-friendly platform in the
          market.
        </p>

        {/* Cards Section */}
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
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
              whileHover={{
                y: -10,
                scale: 1.06,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.4)",
                transition: { duration: 0.3 },
              }}
              className="cursor-pointer bg-white/10 dark:bg-gray-800/80 p-8 rounded-xl border border-white/20 dark:border-yellow-900 text-center backdrop-blur-md transition-transform"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 dark:bg-yellow-900 mx-auto mb-4 text-3xl text-white dark:text-yellow-400 shadow-inner">
                <i className={card.icon}></i>
              </div>

              <h3 className="font-bold text-xl mb-2 text-white dark:text-yellow-400">
                {card.title}
              </h3>

              <p className="text-white/90 dark:text-gray-300">{card.short}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        {activeCard && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setActiveCard(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl w-full max-w-md shadow-xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-gray-700 dark:text-gray-200 text-xl hover:text-red-600 dark:hover:text-yellow-400 transition"
                onClick={() => setActiveCard(null)}
              >
                ✕
              </button>

              {/* Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl text-blue-700 dark:text-yellow-400">
                  <i className={activeCard.icon}></i>
                </div>
                <h3 className="text-2xl font-bold text-blue-800 dark:text-white">
                  {activeCard.title}
                </h3>
              </div>

              {/* Details */}
              <motion.ul
                className="space-y-4"
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
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-200 text-lg"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.4, ease: "easeOut" },
                      },
                    }}
                  >
                    <i
                      className={`${item.icon} text-blue-600 dark:text-yellow-400`}
                    ></i>
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
