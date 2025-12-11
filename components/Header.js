"use client";
import { useTheme } from './ThemeProvider';
import React, { useState } from "react";
import dynamic from "next/dynamic";

const MerchantDocs = dynamic(() => import("./MerchantDocs"), { ssr: false });
const IntegrationDocs = dynamic(() => import("./IntegrationDocs"), { ssr: false });

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [showDocModal, setShowDocModal] = useState(false);
  const [docType, setDocType] = useState(null);
  const [docDropdownOpen, setDocDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    function handleClick(e) {
      if (!e.target.closest('.relative')) {
        setDocDropdownOpen(false);
      }
    }
    if (docDropdownOpen) {
      document.addEventListener('mousedown', handleClick);
      return () => document.removeEventListener('mousedown', handleClick);
    }
  }, [docDropdownOpen]);

  // Function to scroll to reviews section
  const scrollToReviews = () => {
    // The ReviewsSection component should have id="reviews-section"
    const reviewsSection = document.getElementById('reviews-section');
    if (reviewsSection) {
      reviewsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setMobileOpen(false);
    } else {
      // Fallback: If we're not on the home page, navigate to home page with hash
      window.location.href = '/#reviews-section';
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur shadow-sm py-4 transition-all">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <img 
                src="/img/logo.png" 
                alt="Pratap's Bite Logo"
                className="w-12 h-12 rounded-lg object-cover border-2 border-red-600 p-1 bg-white dark:bg-gray-800" 
              />
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-blue-900 dark:text-white leading-tight">
                  Pratap's Bite
                </span>
                <span className="text-xs text-gray-400 dark:text-gray-300 font-medium tracking-wide">
                  Pratap and Sons Group
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Features */}
              <a 
                href="/#home" 
                className="text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-yellow-400 transition duration-200 font-semibold text-base"
              >
                Home
              </a>              
              <a 
                href="/#features" 
                className="text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-yellow-400 transition duration-200 font-semibold text-base"
              >
                Features
              </a>

              {/* Delivery */}
              <a 
                href="/#delivery" 
                className="text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-yellow-400 transition duration-200 font-semibold text-base"
              >
                Delivery
              </a>

              {/* WhyUs? */}
              <a 
                href="/#why-choose-us" 
                className="text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-yellow-400 transition duration-200 font-semibold text-base"
              >
                WhyUs?
              </a>

              {/* User Reviews - Scrolls to section on same page */}
              <button
                onClick={scrollToReviews}
                className="flex items-center gap-1 text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-yellow-400 transition duration-200 font-semibold text-base"
              >
                <span className="text-amber-500">
                  <i className="fas fa-star"></i>
                </span>
                <span>User Reviews</span>
              </button>

              {/* Contact */}
              <a 
                href="/#contact" 
                className="text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-yellow-400 transition duration-200 font-semibold text-base"
              >
                Contact
              </a>

              {/* Documentation Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center gap-1 text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-yellow-400 transition duration-200 font-semibold text-base"
                  aria-haspopup="true"
                  aria-expanded={docDropdownOpen}
                  onClick={() => setDocDropdownOpen((open) => !open)}
                >
                  <span>Documentation</span>
                  <i className={`fas fa-chevron-down text-xs transition-transform duration-200 ${docDropdownOpen ? 'rotate-180' : ''}`}></i>
                </button>

                {docDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 z-20">
                    <button
                      type="button"
                      className="flex items-center gap-3 px-4 py-3 w-full hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 text-gray-700 dark:text-white border-b border-gray-100 dark:border-gray-700"
                      onClick={() => { setDocType('merchant'); setShowDocModal(true); setDocDropdownOpen(false); }}
                    >
                      <i className="fas fa-store text-lg"></i>
                      <div className="text-left">
                        <div className="font-semibold">Merchant Onboarding</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Setup your store</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      className="flex items-center gap-3 px-4 py-3 w-full hover:bg-yellow-50 dark:hover:bg-yellow-900/20 hover:text-yellow-600 dark:hover:text-yellow-400 text-gray-700 dark:text-white"
                      onClick={() => { setDocType('integration'); setShowDocModal(true); setDocDropdownOpen(false); }}
                    >
                      <i className="fas fa-code text-lg"></i>
                      <div className="text-left">
                        <div className="font-semibold">Rider Integration</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">3rd party integration</div>
                      </div>
                    </button>
                  </div>
                )}
              </div>

              {/* Theme Toggle */}
              <button
                aria-label="Toggle dark mode"
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-yellow-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition duration-200"
              >
                <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
              </button>
            </div>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden flex items-center gap-3">
              <button
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-200"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle mobile menu"
              >
                <i className="fas fa-bars text-lg"></i>
              </button>

              <button
                aria-label="Toggle dark mode"
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-yellow-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition duration-200"
              >
                <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
              </button>
            </div>
          </nav>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700 z-40">
            <div className="px-4 py-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="/#features" 
                  onClick={() => setMobileOpen(false)}
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-900/20 transition duration-200 group"
                >
                  <i className="fas fa-bolt text-2xl text-red-500 dark:text-red-400 mb-2 group-hover:scale-110 transition-transform"></i>
                  <span className="font-semibold text-gray-700 dark:text-white">Features</span>
                </a>

                <a 
                  href="/#delivery" 
                  onClick={() => setMobileOpen(false)}
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition duration-200 group"
                >
                  <i className="fas fa-shipping-fast text-2xl text-blue-500 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform"></i>
                  <span className="font-semibold text-gray-700 dark:text-white">Delivery</span>
                </a>

                <a 
                  href="/#why-choose-us" 
                  onClick={() => setMobileOpen(false)}
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-green-900/20 transition duration-200 group"
                >
                  <i className="fas fa-question-circle text-2xl text-green-500 dark:text-green-400 mb-2 group-hover:scale-110 transition-transform"></i>
                  <span className="font-semibold text-gray-700 dark:text-white">WhyUs?</span>
                </a>

                <button
                  onClick={scrollToReviews}
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition duration-200 group"
                >
                  <i className="fas fa-star text-2xl text-amber-500 dark:text-amber-400 mb-2 group-hover:scale-110 transition-transform"></i>
                  <span className="font-semibold text-gray-700 dark:text-white">Reviews</span>
                </button>
              </div>

              {/* Contact and Documentation Section */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="space-y-2">
                  <a 
                    href="/#contact" 
                    onClick={() => setMobileOpen(false)}
                    className="w-full flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-700 dark:text-white transition duration-200"
                  >
                    <i className="fas fa-envelope text-lg text-blue-500"></i>
                    <div className="text-left">
                      <div className="font-semibold">Contact</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Get in touch with us</div>
                    </div>
                  </a>

                  <button
                    className="w-full flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-700 dark:text-white transition duration-200"
                    onClick={() => { setDocType("merchant"); setShowDocModal(true); setMobileOpen(false); }}
                  >
                    <i className="fas fa-store text-lg text-red-500"></i>
                    <div className="text-left">
                      <div className="font-semibold">Merchant Onboarding</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Setup your store</div>
                    </div>
                  </button>

                  <button
                    className="w-full flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 text-gray-700 dark:text-white transition duration-200"
                    onClick={() => { setDocType("integration"); setShowDocModal(true); setMobileOpen(false); }}
                  >
                    <i className="fas fa-code text-lg text-yellow-500"></i>
                    <div className="text-left">
                      <div className="font-semibold">Rider Integration</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">3rd party integration</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Core Ventures */}
              <div className="pt-4">
                <a 
                  href="https://pratapandsongroup.com/" 
                  target="_blank"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-800/40 text-blue-700 dark:text-blue-300 transition duration-200"
                >
                  <i className="fas fa-building"></i>
                  <span className="font-semibold">Core Ventures</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Documentation Modal */}
      {showDocModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-2">
          <div className="relative w-full max-w-2xl mx-auto">
            <button
              className="absolute top-2 right-2 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => setShowDocModal(false)}
              aria-label="Close documentation modal"
            >
              <i className="fas fa-times"></i>
            </button>

            {docType === "merchant" && <MerchantDocs />}
            {docType === "integration" && <IntegrationDocs />}
          </div>
        </div>
      )}
    </>
  );
}