"use client";
import React, { useState } from "react";

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
  ];

  return (
    <section
      id="why-choose-us"
      className="py-12 bg-gradient-to-br from-blue-900 to-blue-700 dark:from-gray-900 dark:to-gray-800 text-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6">
          Why Choose Us
          <span className="block mx-auto mt-2 w-20 h-1 rounded bg-gradient-to-r from-red-600 to-teal-500"></span>
        </h2>

        <p className="text-center max-w-2xl mx-auto mb-10 text-white/90 dark:text-gray-200">
          We're committed to being the most partner-friendly platform in the
          market.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => setActiveCard(card)}
              className="cursor-pointer bg-white/10 dark:bg-gray-800/80 p-8 rounded-xl border border-white/20 dark:border-yellow-900 text-center backdrop-blur-md transition hover:-translate-y-2 hover:bg-white/20 dark:hover:bg-yellow-900/20"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/20 dark:bg-yellow-900 mx-auto mb-3 text-2xl text-white dark:text-yellow-400">
                <i className={card.icon}></i>
              </div>
              <h3 className="font-bold text-lg mb-2 text-white dark:text-yellow-400">
                {card.title}
              </h3>
              <p className="text-white/90 dark:text-gray-200">{card.short}</p>
            </div>
          ))}
        </div>

        {/* Modal */}
        {activeCard && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setActiveCard(null)}
          >
            <div
              className="bg-white dark:bg-gray-900 p-6 rounded-xl w-full max-w-md shadow-xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-gray-700 dark:text-gray-200 text-xl"
                onClick={() => setActiveCard(null)}
              >
                ✕
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl text-blue-700 dark:text-yellow-400">
                  <i className={activeCard.icon}></i>
                </div>
                <h3 className="text-xl font-bold text-blue-800 dark:text-white">
                  {activeCard.title}
                </h3>
              </div>

              {/* Sub Points */}
              <ul className="space-y-4">
                {activeCard.details.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-200"
                  >
                    <i className={`${item.icon} text-blue-600 dark:text-yellow-400`}></i>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
