"use client";
import React, { useEffect, useState, useRef } from "react";

export default function Hero() {
  const logo = "/img/logo.png";
  const ads = ["/img/ad1.png", "/img/ad2.png", "/img/ad3.png", "/img/ad4.png"];

  const [currentImage, setCurrentImage] = useState(logo);
  const [nextImage, setNextImage] = useState(null);
  const [index, setIndex] = useState(-1);
  const [transitioning, setTransitioning] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const intervalRef = useRef(null);

  // Start cycle after initial delay
  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIndex(0);
      setNextImage(ads[0]);
      setTransitioning(true);
    }, 5000);
    return () => clearTimeout(startTimer);
  }, []);

  // Image cycling
  useEffect(() => {
    if (index === -1 || isModalOpen) return;

    intervalRef.current = setInterval(() => {
      setTransitioning(true);

      setTimeout(() => {
        setCurrentImage(nextImage);

        const nextIdx = (index + 1) % ads.length;
        setIndex(nextIdx);
        setNextImage(ads[nextIdx]);
        setTransitioning(false);
      }, 800);
    }, 12000);

    return () => clearInterval(intervalRef.current);
  }, [index, nextImage, isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
    clearInterval(intervalRef.current);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (index !== -1) {
      setNextImage(ads[index]);
    } else {
      setNextImage(logo);
    }
  };

  return (
    <section
      id="home"
      className="pt-16 pb-20 bg-gradient-to-br from-red-50/30 to-blue-50/30 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT TEXT */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 dark:text-white mb-4 leading-tight">
              India's{" "}
              <span className="relative text-red-600 dark:text-yellow-400 inline-block 
                after:block after:absolute after:bottom-1 after:left-0 
                after:w-full after:h-2 after:bg-red-200 dark:after:bg-yellow-900 
                after:rounded-md after:-z-10">
                Lowest Commission 
              </span>{" "}
              Delivery Platform 
            </h1>

            <p className="text-gray-700 dark:text-gray-200 text-lg mb-6 max-w-lg">
              Join India's most partner-friendly platform. Save significantly on
              commissions and maximise your business profits.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r 
                from-red-600 to-red-800 dark:from-yellow-500 dark:to-yellow-700 
                text-white rounded-full font-semibold shadow-md 
                hover:-translate-y-1 hover:shadow-lg transition"
              >
                <i className="fas fa-handshake"></i> Become a Partner
              </a>

              <a
                href="#features"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r 
                from-blue-900 to-blue-700 dark:from-gray-700 dark:to-gray-600 
                text-white rounded-full font-semibold shadow-md 
                hover:-translate-y-1 hover:shadow-lg transition"
              >
                <i className="fas fa-chart-line"></i> View Features
              </a>
            </div>

            {/* ⭐⭐⭐ STATS DIRECTLY UNDER MAIN TEXT ⭐⭐⭐ */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 bg-white/80 dark:bg-gray-900/80 
              backdrop-blur-md rounded-xl shadow p-6 max-w-xl border 
              border-white/30 dark:border-yellow-900/30 animate-fade-in-up">

              <div className="text-center">
                <span className="block text-2xl font-extrabold text-red-600 dark:text-yellow-400 mb-1">
                  100%
                </span>
                <span className="text-sm font-semibold text-gray-500 dark:text-gray-300">
                  Safe & Secure
                </span>
              </div>

              <div className="text-center">
                <span className="block text-2xl font-extrabold text-red-600 dark:text-yellow-400 mb-1">
                  24/7
                </span>
                <span className="text-sm font-semibold text-gray-500 dark:text-gray-300">
                  Support
                </span>
              </div>

              <div className="text-center">
                <span className="block text-2xl font-extrabold text-red-600 dark:text-yellow-400 mb-1">
                  100%
                </span>
                <span className="text-sm font-semibold text-gray-500 dark:text-gray-300">
                  Partner Focused
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE ADS */}
          <div className="hidden md:flex justify-end relative w-[300px] h-[400px] md:ml-auto">
            {/* Current Image */}
            <img
              src={currentImage}
              alt="Display"
              onClick={openModal}
              className={`absolute top-0 w-full h-full object-cover rounded-[20px] border-2 border-white/20 
                shadow-[0_10px_30px_rgba(0,0,0,0.25)] outline outline-1 outline-white/35 
                outline-offset-[-6px] backdrop-blur-[6px] transition-all duration-700 ease-in-out hover:scale-[1.05] 
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:border-white/45 ${
                  transitioning ? "erase-bottom" : ""
                } cursor-pointer`}
            />

            {/* Next Image */}
            {transitioning && nextImage && (
              <img
                src={nextImage}
                alt="Next Display"
                className="absolute top-0 w-full h-full object-cover rounded-[20px] border-2 border-white/20 
                  shadow-[0_10px_30px_rgba(0,0,0,0.25)] outline outline-1 outline-white/35 
                  outline-offset-[-6px] backdrop-blur-[6px] transition-transform duration-800 ease-in-out animate-slide-up cursor-pointer"
                onClick={openModal}
              />
            )}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={currentImage}
              alt="Popup"
              className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-500"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* STYLES */}
      <style>{`
        .erase-bottom {
          animation: eraseBottom 0.8s forwards;
        }

        @keyframes eraseBottom {
          0% { clip-path: inset(0% 0% 0% 0%); transform: translateY(0); opacity: 1; }
          100% { clip-path: inset(100% 0% 0% 0%); transform: translateY(-15px); opacity: 0; }
        }

        @keyframes slideUp {
          0% { transform: translateY(15px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease-in-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.9s ease-out both;
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(25px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
