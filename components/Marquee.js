"use client";
import React from "react";

export default function Marquee() {
  return (
    <div className="w-full bg-gradient-to-r from-red-600 to-red-800 dark:from-red-900 dark:to-yellow-900 dark:bg-red-900 text-white py-2 shadow-sm overflow-hidden whitespace-nowrap relative border-b-0">
      <div className="inline-block font-semibold text-base px-0 animate-marquee">
        🚀 India’s Most Affordable Delivery Partner • Save Up to 50% on Commission • 24/7 Dedicated Support • Smart & Flexible Delivery Solutions • 
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
