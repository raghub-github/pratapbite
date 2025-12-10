"use client";
import React, { useEffect, useState, useRef } from "react";

// ---- ICONS ----
import { MdDeliveryDining, MdFastfood } from "react-icons/md";
import { FaBoxOpen, FaMotorcycle } from "react-icons/fa6";
import { BsPersonLinesFill } from "react-icons/bs";

export default function Hero() {
  const logo = "/img/logo.png";
  const ads = ["/img/ad1.png", "/img/ad2.png", "/img/ad3.png", "/img/ad4.png"];

  const [currentImage, setCurrentImage] = useState(logo);
  const [nextImage, setNextImage] = useState(null);
  const [index, setIndex] = useState(-1);
  const [transitioning, setTransitioning] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [popupImage, setPopupImage] = useState(null);
  const [stats, setStats] = useState({ safe: 0, support: 0, partner: 0 });
  const intervalRef = useRef(null);
  
  // New state for search functionality
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [availableRestaurants, setAvailableRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  /* Initial ad timer */
  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIndex(0);
      setNextImage(ads[0]);
      setTransitioning(true);
    }, 5000);
    return () => clearTimeout(startTimer);
  }, []);

  /* Image carousel logic */
  useEffect(() => {
    if (index === -1 || isModalOpen) return;

    intervalRef.current = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentImage(nextImage);

        if (index === ads.length - 1) {
          setTimeout(() => {
            setCurrentImage(logo);
            setIndex(0);
            setNextImage(ads[0]);
          }, 1500);
          setTransitioning(false);
          return;
        }

        const nextIdx = (index + 1) % ads.length;
        setIndex(nextIdx);
        setNextImage(ads[nextIdx]);
        setTransitioning(false);
      }, 800);
    }, 12000);

    return () => clearInterval(intervalRef.current);
  }, [index, nextImage, isModalOpen]);

  /* Modal handlers */
  const openModal = (img) => {
    setPopupImage(img);
    setIsModalOpen(true);
    clearInterval(intervalRef.current);
  };
  const closeModal = () => setIsModalOpen(false);

  /* Animate stats to target */
  useEffect(() => {
    let safe = 0,
      support = 0,
      partner = 0;
    const statInterval = setInterval(() => {
      if (safe < 100) safe += 2;
      if (support < 24) support += 1;
      if (partner < 100) partner += 2;
      setStats({
        safe: safe > 100 ? 100 : safe,
        support: support > 24 ? 24 : support,
        partner: partner > 100 ? 100 : partner,
      });
      if (safe >= 100 && support >= 24 && partner >= 100) clearInterval(statInterval);
    }, 100);
    return () => clearInterval(statInterval);
  }, []);

  /* Fetch restaurant suggestions based on search */
  useEffect(() => {
    const fetchRestaurants = async () => {
      if (!searchQuery.trim()) {
        setAvailableRestaurants([]);
        return;
      }

      setLoading(true);
      try {
        // API call to get restaurants that serve the searched item
        const response = await fetch(`https://api.pratapbite.com/restaurants/search?item=${encodeURIComponent(searchQuery)}`);
        const data = await response.json();
        
        if (data.success && data.restaurants) {
          setAvailableRestaurants(data.restaurants);
        } else {
          setAvailableRestaurants([]);
        }
      } catch (error) {
        console.error("Error fetching restaurants:", error);
        setAvailableRestaurants([]);
      } finally {
        setLoading(false);
      }
    };

    const delayDebounce = setTimeout(() => {
      if (searchQuery) {
        fetchRestaurants();
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  /* Handle search suggestion click */
  const handleSuggestionClick = (restaurant) => {
    // Redirect to restaurant page with the search item in new tab
    const encodedItem = encodeURIComponent(searchQuery);
    const encodedRestaurant = encodeURIComponent(restaurant.id || restaurant.name);
    window.open(`https://user.pratapbite.com/restaurant/${encodedRestaurant}?search=${encodedItem}`, "_blank");
    // Keep the selected item text in search bar
    setShowSuggestions(false);
  };

  /* Updated App Links with Correct Icons */
  const cardButtons = [
    { 
      text: "Delivery Provider", 
      icon: <MdDeliveryDining />, 
      url: "https://gatimitra.com" 
    },
    { 
      text: "Bite with Pratap's", 
      icon: <MdFastfood />, 
      url: "https://user.pratapbite.com" 
    },
    { 
      text: "MX Onboarding", 
      icon: <BsPersonLinesFill />, 
      url: "https://mxonboarding.pratapbite.com" 
    }, 
  ];

  return (
    <section
      id="home"
      className="pt-20 pb-24 bg-gradient-to-br from-red-50/40 to-blue-50/40 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          
          {/* LEFT CONTENT */}
          <div className="animate-fade-in-up space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 dark:text-white leading-tight">
              India's{" "}
              <span className="relative text-red-600 dark:text-yellow-400 after:block after:absolute after:bottom-1 after:left-0 after:w-full after:h-2 after:bg-red-200 dark:after:bg-yellow-900 after:rounded-md after:-z-10">
                Lowest Commission
              </span>{" "}
              Delivery Platform
            </h1>

            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-lg">
              Join India's most partner-friendly platform. Save commissions and maximise your profits.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 dark:from-yellow-500 dark:to-yellow-700 text-white rounded-full font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition"
              >
                <BsPersonLinesFill /> Become a Partner
              </a>

              <a
                href="#features"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-900 to-blue-700 dark:from-gray-700 dark:to-gray-600 text-white rounded-full font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition"
              >
                ⚡ Explore Features
              </a>
            </div>

            {/* SEARCH BAR WITH SUGGESTIONS */}
            <div className="w-full max-w-md mt-4 relative">
              <div className="bg-white dark:bg-gray-900 shadow-lg rounded-full flex items-center px-5 py-3 border border-gray-200 dark:border-gray-700">
                🔍
                <input
                  type="text"
                  placeholder="Search Anything..."
                  className="ml-3 w-full bg-transparent outline-none text-gray-700 dark:text-gray-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                />
              </div>
              
              {/* Search Suggestions with Available Restaurants */}
              {showSuggestions && (searchQuery || availableRestaurants.length > 0) && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden z-40">
                  <div className="p-2 max-h-60 overflow-y-auto">
                    {loading ? (
                      <div className="px-4 py-3 text-gray-500 dark:text-gray-400 text-center">
                        Loading restaurants...
                      </div>
                    ) : availableRestaurants.length > 0 ? (
                      <>
                        <div className="px-4 py-2 text-sm text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-700">
                          Available restaurants for "{searchQuery}"
                        </div>
                        {availableRestaurants.map((restaurant, index) => (
                          <div
                            key={index}
                            onClick={() => handleSuggestionClick(restaurant)}
                            className="px-4 py-3 hover:bg-red-50 dark:hover:bg-gray-700 cursor-pointer text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-yellow-400 transition-colors rounded-lg flex items-center gap-3"
                          >
                            <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                              🍽️
                            </div>
                            <div>
                              <div className="font-medium">{restaurant.name}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">
                                {restaurant.cuisine} • {restaurant.rating} ⭐
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    ) : searchQuery ? (
                      <div className="px-4 py-3 text-gray-500 dark:text-gray-400">
                        No restaurants found for "{searchQuery}"
                      </div>
                    ) : null}
                  </div>
                </div>
              )}
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 bg-white/70 dark:bg-gray-900/70 rounded-xl p-6 shadow border border-white/30 dark:border-gray-700/30 backdrop-blur-md mt-6">
              <Stat num={`${stats.safe}%`} txt="Safe & Secure" />
              <Stat num={`${stats.support}/7`} txt="Support" />
              <Stat num={`${stats.partner}%`} txt="Partner Focused" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col items-center">
            
            {/* Ad / Logo */}
            <div className="relative w-[340px] h-[420px] mb-6">
              <img
                src={currentImage}
                onClick={() => openModal(currentImage)}
                className={`absolute inset-0 w-full h-full object-cover rounded-[22px] border-2 border-white/30 dark:border-gray-700 shadow-xl transition-all duration-700 cursor-pointer ${transitioning ? "erase-bottom" : ""}`}
              />
              {transitioning && nextImage && (
                <img
                  src={nextImage}
                  onClick={() => openModal(nextImage)}
                  className="absolute inset-0 w-full h-full object-cover rounded-[22px] border-2 border-white/30 dark:border-gray-700 shadow-xl animate-slide-up cursor-pointer"
                />
              )}
            </div>

            {/* Feature Buttons - EXPANDED TO FILL AVAILABLE SPACE */}
            <div className="w-full max-w-3xl ml-0">
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                {cardButtons.map((btn, i) => (
                  <div
                    key={i}
                    onClick={() => window.open(btn.url, "_blank")}
                    className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-700 flex flex-col items-center justify-center flex-grow cursor-pointer transform transition-all hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
                    style={{ 
                      minHeight: "100px",
                      padding: "1.5rem 0.5rem"
                    }}
                  >
                    <div className="text-red-600 dark:text-yellow-400 text-4xl mb-2">
                      {btn.icon}
                    </div>
                    <span className="text-gray-800 dark:text-gray-200 font-semibold text-center text-sm px-2">
                      {btn.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Popup */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img src={popupImage} className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl" />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-500"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        .erase-bottom { animation: eraseBottom 0.8s forwards; }
        @keyframes eraseBottom { 
          0% { clip-path: inset(0 0 0 0); opacity: 1; } 
          100% { clip-path: inset(100% 0 0 0); opacity: 0; } 
        }

        @keyframes slideUp { 
          0% { transform: translateY(20px); opacity: 0; } 
          100% { transform: translateY(0); opacity: 1; } 
        }
        .animate-slide-up { animation: slideUp 0.8s ease-in-out forwards; }

        .animate-fade-in-up { animation: fadeInUp 0.9s ease-out both; }
        @keyframes fadeInUp { 
          0% { opacity: 0; transform: translateY(25px); } 
          100% { opacity: 1; transform: translateY(0); } 
        }
      `}</style>
    </section>
  );
}

// ---- Stat Component ----
function Stat({ num, txt }) {
  return (
    <div className="text-center">
      <span className="block text-2xl md:text-3xl font-extrabold text-red-600 dark:text-yellow-400 mb-1 transition-all duration-1000">{num}</span>
      <span className="text-sm text-gray-600 dark:text-gray-300">{txt}</span>
    </div>
  );
}