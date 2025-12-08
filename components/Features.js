"use client";
import React, { useState } from "react";

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

  return (
    <section id="features" className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 dark:text-white mb-10 relative">
          Core Features
          <span className="block mx-auto mt-2 w-20 h-1 rounded bg-gradient-to-r from-red-600 to-teal-500"></span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModal(item)}
              className="cursor-pointer bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border-t-4 border-red-600 dark:border-yellow-600 text-center transition hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-50 dark:bg-yellow-900 mx-auto mb-4 text-3xl text-red-600 dark:text-yellow-400">
                <i className={item.icon}></i>
              </div>
              <h3 className="font-bold text-lg text-blue-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-600 dark:text-white text-xl"
              onClick={() => setActiveModal(null)}
            >
              ✖
            </button>

            <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-4 text-center">
              {activeModal.title}
            </h3>
            

            <div className="space-y-3">
              {activeModal.subItems.map((sub, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-100 dark:bg-gray-700 p-3 rounded-lg"
                >
                  <i className={`${sub.icon} text-red-600 dark:text-yellow-400 text-xl`}></i>
                  <span className="text-gray-700 dark:text-gray-200">{sub.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
