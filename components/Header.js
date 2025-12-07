"use client";
import { useTheme } from './ThemeProvider';
import React, { useContext, useState } from "react";
import dynamic from "next/dynamic";

const MerchantDocs = dynamic(() => import("./MerchantDocs"), { ssr: false });
const IntegrationDocs = dynamic(() => import("./IntegrationDocs"), { ssr: false });
export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [showDocModal, setShowDocModal] = useState(false);
  const [docType, setDocType] = useState(null);
  const [docDropdownOpen, setDocDropdownOpen] = useState(false);

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
  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur shadow-sm py-3 transition-all">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src="/img/logo.png" alt="Pratap's Bite Logo" className="w-11 h-11 rounded-lg object-cover border-2 border-red-600 p-1 bg-white dark:bg-gray-800" />
              <div className="flex flex-col">
                <span className="text-lg font-extrabold text-blue-900 dark:text-white leading-tight">Pratap's Bite</span>
                <span className="text-xs text-gray-400 dark:text-gray-300 font-medium tracking-wide">Pratap and Sons Group</span>
              </div>
            </div>
            <ul className="hidden md:flex gap-7 items-center text-sm font-semibold">
              <li><a href="#home" className="text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-yellow-400 transition">Home</a></li>
              <li><a href="#features" className="text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-yellow-400 transition">Features</a></li>
              <li><a href="#delivery" className="text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-yellow-400 transition">Delivery</a></li>
              <li><a href="#why-choose-us" className="text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-yellow-400 transition">Why Us</a></li>
              <li className="relative">
                <button
                  type="button"
                  className="flex items-center gap-1 text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-yellow-400 transition focus:outline-none"
                  aria-haspopup="true"
                  aria-expanded={docDropdownOpen}
                  onClick={() => setDocDropdownOpen((open) => !open)}
                >
                  Documentation <i className="fas fa-chevron-down text-xs"></i>
                </button>
                {docDropdownOpen && (
                  <div className="absolute left-0 top-full mt-2 w-56 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 transition z-20">
                    <button
                      type="button"
                      className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-red-600 hover:text-white dark:hover:bg-yellow-900 dark:hover:text-yellow-400 rounded-t-lg text-gray-700 dark:text-white"
                      onClick={() => { setDocType('merchant'); setShowDocModal(true); setDocDropdownOpen(false); }}
                    >
                      <i className="fas fa-store"></i> Merchant Onboarding
                    </button>
                    <button
                      type="button"
                      className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-red-600 hover:text-white dark:hover:bg-yellow-900 dark:hover:text-yellow-400 rounded-b-lg text-gray-700 dark:text-white"
                      onClick={() => { setDocType('integration'); setShowDocModal(true); setDocDropdownOpen(false); }}
                    >
                      <i className="fas fa-code"></i> 3rd party rider's Integration
                    </button>
                  </div>
                )}
              </li>
              <li><a href="#contact" className="text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-yellow-400 transition">Contact</a></li>
              <li><a href="https://pratapandsongroup.com/" target="_blank" className="text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-yellow-400 transition">Core Ventures</a></li>
              <li>
                <button
                  aria-label="Toggle dark mode"
                  onClick={toggleTheme}
                  className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-yellow-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition border border-gray-200 dark:border-gray-700"
                >
                  <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
                </button>
              </li>
            </ul>
            <div className="md:hidden flex items-center gap-2">
              <button className="text-2xl text-gray-700 dark:text-gray-200"><i className="fas fa-bars"></i></button>
              <button
                aria-label="Toggle dark mode"
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-yellow-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition border border-gray-200 dark:border-gray-700"
              >
                <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
              </button>
            </div>
          </nav>
        </div>
      </header>
      {/* Documentation Modal */}
      {showDocModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-2">
          <div className="relative w-full max-w-2xl mx-auto">
            <button
              className="absolute top-2 right-2 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
              onClick={() => setShowDocModal(false)}
              aria-label="Close documentation modal"
            >
              <i className="fas fa-times"></i>
            </button>
            {docType === 'merchant' && <MerchantDocs />}
            {docType === 'integration' && <IntegrationDocs />}
          </div>
        </div>
      )}
    </>
  );
}
