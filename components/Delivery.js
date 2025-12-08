"use client";
import React, { useState } from "react";

export default function Delivery() {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      title: "Pratapbite's Delivery Fleet",
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
      title: "Third-Party",
      icon: "fas fa-exchange-alt",
      desc: "Integrate your preferred third-party delivery services.",
      details: [
        { icon: "fas fa-plug", text: "Easy integration with courier apps" },
        { icon: "fas fa-route", text: "Extended delivery reach" },
        { icon: "fas fa-shipping-fast", text: "Automated delivery updates" },
      ],
    },
  ];

  return (
    <section id="delivery" className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 dark:text-white mb-6">
          Delivery Solutions
          <span className="block mx-auto mt-2 w-20 h-1 rounded bg-gradient-to-r from-teal-500 to-red-600"></span>
        </h2>

        <p className="text-center max-w-2xl mx-auto mb-10 text-gray-700 dark:text-gray-200">
          Choose the delivery method that best fits your business needs.
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => setActiveCard(card)}
              className="cursor-pointer bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md border-t-4 border-teal-500 dark:border-yellow-600 text-center transition hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-teal-50 dark:bg-yellow-900 mx-auto mb-3 text-2xl text-teal-600 dark:text-yellow-400">
                <i className={card.icon}></i>
              </div>

              <h3 className="font-bold text-base text-blue-900 dark:text-white mb-1">
                {card.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Modal */}
        {activeCard && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setActiveCard(null)}
          >
            <div
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg max-w-md w-full relative"
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
                <div className="text-3xl text-teal-600 dark:text-yellow-400">
                  <i className={activeCard.icon}></i>
                </div>
                <h3 className="text-xl font-bold text-blue-900 dark:text-white">
                  {activeCard.title}
                </h3>
              </div>

              {/* Details */}
              <ul className="space-y-3">
                {activeCard.details.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-200"
                  >
                    <i className={`${item.icon} text-teal-500 dark:text-yellow-400`}></i>
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
