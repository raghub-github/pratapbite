"use client";
import { useState, useEffect, useCallback, memo } from 'react';
import StarRating from './StarRating';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaCalendarAlt, 
  FaPenAlt,
  FaTimes,
  FaQuoteLeft,
  FaQuoteRight,
  FaStar,
  FaCheckCircle,
  FaArrowLeft,
  FaExpandAlt,
  FaTimesCircle
} from 'react-icons/fa';

// Memoized Review Card for performance
const ReviewCard = memo(({ review, formatDate, onViewMore }) => {
  const isLongReview = review.review.length > 120; // Adjust character limit as needed
  
  return (
    <div className="relative group">
      {/* Premium Stylish Review Card */}
      <div className="relative overflow-hidden bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-200/80 dark:border-gray-800/80 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50/20 to-teal-50/20 dark:from-gray-900 dark:via-red-900/5 dark:to-teal-900/5"></div>
        
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-red-500/30 rounded-tl-2xl"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-teal-500/30 rounded-br-2xl"></div>
        
        {/* Quote Icon Badge */}
        <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-teal-500 flex items-center justify-center shadow-lg ring-3 ring-white/20 dark:ring-gray-800/20">
          <FaQuoteLeft className="text-white text-sm" />
        </div>
        
        {/* User Info Section */}
        <div className="relative z-10 flex items-start gap-4 mb-4 pb-4 border-b border-gray-100/80 dark:border-gray-800/80">
          <div className="relative flex-shrink-0">
            {/* Avatar with gradient ring */}
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 via-purple-500 to-teal-500 p-1 shadow-lg">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center text-white font-bold text-lg shadow-inner">
                  {review.name.charAt(0).toUpperCase()}
                </div>
              </div>
            </div>
            
            {/* Premium Rating Badge */}
            <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 flex items-center justify-center shadow-lg ring-3 ring-white dark:ring-gray-900">
              <div className="flex flex-col items-center justify-center">
                <span className="text-xs font-black text-gray-900 leading-none">{review.stars}.0</span>
                <div className="flex -mt-0.5">
                  {[...Array(Math.floor(review.stars))].map((_, i) => (
                    <FaStar key={i} className="w-2 h-2 text-gray-900 fill-gray-900" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-bold text-base text-gray-900 dark:text-white truncate">
                {review.name}
              </h3>
              <FaCheckCircle className="text-teal-500 flex-shrink-0 ml-2 w-4 h-4" />
            </div>
            
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <FaCalendarAlt className="text-xs flex-shrink-0 w-3 h-3" />
              <span>{formatDate(review.created_at)}</span>
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gradient-to-r from-red-50 to-teal-50 dark:from-red-900/20 dark:to-teal-900/20">
                Verified
              </span>
            </div>
          </div>
        </div>
        
        {/* Star Rating Display */}
        <div className="relative z-10 mb-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-lg ${
                    i < review.stars
                      ? 'text-yellow-400 fill-yellow-400 drop-shadow-[0_2px_4px_rgba(250,204,21,0.3)]'
                      : 'text-gray-200 dark:text-gray-700 fill-gray-200 dark:fill-gray-700'
                  } transition-all duration-300`}
                />
              ))}
            </div>
            <span className="text-base font-bold text-gray-900 dark:text-white ml-1">
              {review.stars.toFixed(1)}
            </span>
          </div>
          
          {/* Review Content */}
          <div className="relative">
            <div className="relative">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base mb-4 line-clamp-2">
                "{review.review}"
              </p>
              <div className="absolute bottom-0 right-0 text-gray-100 dark:text-gray-800">
                <FaQuoteRight className="text-2xl" />
              </div>
            </div>
            
            {/* View More Button for Long Reviews */}
            {isLongReview && (
              <div className="mt-3">
                <button
                  onClick={() => onViewMore(review)}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-gradient bg-gradient-to-r from-red-600 to-teal-600 bg-clip-text text-transparent hover:from-red-700 hover:to-teal-700 transition-all duration-300 group"
                >
                  <FaExpandAlt className="text-xs" />
                  <span>View Full Review</span>
                  <div className="w-0 group-hover:w-4 h-0.5 bg-gradient-to-r from-red-600 to-teal-600 transition-all duration-300"></div>
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Decorative Bottom Gradient */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-red-500 via-purple-500 to-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
});

ReviewCard.displayName = 'ReviewCard';

export default function ReviewsSection({ showAll = false }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', stars: 5, review: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  
  // Carousel state for home page
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsToShow = showAll ? reviews : reviews.slice(0, 5);
  const displayedReviews = showAll 
    ? reviews 
    : reviewsToShow.slice(currentIndex, Math.min(currentIndex + 3, reviewsToShow.length));

  // Optimized fetch with caching
  const fetchReviews = useCallback(async () => {
    try {
      setLoading(true);
      const limit = showAll ? null : 5;
      const url = limit ? `/api/reviews?limit=${limit}&t=${Date.now()}` : `/api/reviews?t=${Date.now()}`;
      
      // Try cache first
      const cache = sessionStorage.getItem('reviews_cache');
      if (cache) {
        const cachedData = JSON.parse(cache);
        if (Date.now() - cachedData.timestamp < 30000) { // 30 second cache
          setReviews(cachedData.data);
          setLoading(false);
        }
      }

      const res = await fetch(url, {
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      
      const data = await res.json();
      
      if (data.success) {
        const reviewsData = data.data || [];
        setReviews(reviewsData);
        // Cache for 30 seconds
        sessionStorage.setItem('reviews_cache', JSON.stringify({
          data: reviewsData,
          timestamp: Date.now()
        }));
      }
    } catch (err) {
      console.error('Error fetching reviews:', err);
    } finally {
      setLoading(false);
    }
  }, [showAll]);

  useEffect(() => {
    let mounted = true;
    
    const loadReviews = async () => {
      await fetchReviews();
    };

    loadReviews();

    return () => {
      mounted = false;
    };
  }, [fetchReviews]);

  const handleChange = useCallback((e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  }, []);

  const handleStarChange = useCallback((stars) => {
    setForm(prev => ({ ...prev, stars }));
    setError('');
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setSubmitting(true);

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      
      const data = await res.json();
      
      if (!res.ok || !data.success) {
        setError(data.error || 'Error submitting review');
      } else {
        setSuccess(true);
        setForm({ name: '', email: '', stars: 5, review: '' });
        // Clear cache and refresh
        sessionStorage.removeItem('reviews_cache');
        setTimeout(() => {
          fetchReviews();
          setSuccess(false);
          setShowFormModal(false);
        }, 1500);
      }
    } catch (err) {
      setError('Network error. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  }, [form, fetchReviews]);

  const nextSlide = useCallback(() => {
    if (showAll || reviewsToShow.length <= 3) return;
    const maxIndex = Math.max(0, reviewsToShow.length - 3);
    setCurrentIndex(prev => (prev + 3 > maxIndex ? 0 : prev + 3));
  }, [showAll, reviewsToShow.length]);

  const prevSlide = useCallback(() => {
    if (showAll || reviewsToShow.length <= 3) return;
    const maxIndex = Math.max(0, reviewsToShow.length - 3);
    setCurrentIndex(prev => (prev - 3 < 0 ? maxIndex : prev - 3));
  }, [showAll, reviewsToShow.length]);

  const formatDate = useCallback((dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  }, []);

  const openFormModal = useCallback(() => {
    setShowFormModal(true);
    setError('');
    setSuccess(false);
  }, []);

  const closeFormModal = useCallback(() => {
    setShowFormModal(false);
    setError('');
    setSuccess(false);
    setForm({ name: '', email: '', stars: 5, review: '' });
  }, []);

  const openReviewModal = useCallback((review) => {
    setSelectedReview(review);
  }, []);

  const closeReviewModal = useCallback(() => {
    setSelectedReview(null);
  }, []);

  // Close modal when clicking outside
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (selectedReview) {
          closeReviewModal();
        }
        if (showFormModal) {
          closeFormModal();
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedReview, showFormModal, closeReviewModal, closeFormModal]);

  if (loading && reviews.length === 0) {
    return (
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl h-80"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    // ADDED ID HERE - This is the key fix
    <section id="reviews-section" className="py-8 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Top-left Share Your Experience Button - Always Visible */}
        <div className="mb-8">
          <button
            onClick={openFormModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-600 to-teal-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:from-red-700 hover:to-teal-700 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <FaPenAlt className="text-sm" />
            <span>Rate Us</span>
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            {showAll ? 'Customer Reviews' : 'What Our Users Say'}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base max-w-2xl mx-auto">
            {showAll 
              ? 'Read honest feedback from our valued customers' 
              : 'Join thousands of satisfied users sharing their experiences'}
          </p>
        </div>

        {/* Reviews Display */}
        {reviews.length === 0 ? (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-100 to-teal-100 dark:from-red-900/20 dark:to-teal-900/20 flex items-center justify-center">
                <FaPenAlt className="text-2xl text-gray-600 dark:text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                No Reviews Yet
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-sm mx-auto">
                Be the pioneer! Share your experience and help others make informed decisions.
              </p>
            </div>
          </div>
        ) : (
          <div className="relative">
            <div className={`grid ${showAll ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'grid-cols-1 md:grid-cols-3 gap-6'}`}>
              <AnimatePresence mode="wait">
                {displayedReviews.map((review) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ReviewCard 
                      review={review} 
                      formatDate={formatDate} 
                      onViewMore={openReviewModal}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Carousel Controls for Home Page */}
            {!showAll && reviewsToShow.length > 3 && (
              <div className="flex justify-center items-center gap-6 mt-10">
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-full bg-gradient-to-r from-red-600 to-teal-600 text-white hover:shadow-lg transition-all duration-300 transform hover:-translate-x-1 shadow-md"
                  aria-label="Previous reviews"
                >
                  <FaChevronLeft className="text-base" />
                </button>
                
                <div className="flex items-center gap-2">
                  {Array.from({ length: Math.ceil(reviewsToShow.length / 3) }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i * 3)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        Math.floor(currentIndex / 3) === i 
                          ? 'w-8 bg-gradient-to-r from-red-600 to-teal-600 shadow-md' 
                          : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                      }`}
                      aria-label={`Go to page ${i + 1}`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextSlide}
                  className="p-3 rounded-full bg-gradient-to-r from-red-600 to-teal-600 text-white hover:shadow-lg transition-all duration-300 transform hover:translate-x-1 shadow-md"
                  aria-label="Next reviews"
                >
                  <FaChevronRight className="text-base" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Full Review Modal */}
      <AnimatePresence>
        {selectedReview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeReviewModal}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-10 bg-gradient-to-r from-red-600 to-teal-600 text-white p-5">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-transparent p-1">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white font-bold text-lg">
                          {selectedReview.name.charAt(0).toUpperCase()}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{selectedReview.name}'s Review</h3>
                      <div className="flex items-center gap-2 text-red-100/90 text-sm mt-1">
                        <span>{formatDate(selectedReview.created_at)}</span>
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/20">
                          Verified
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={closeReviewModal}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 hover:rotate-90"
                    aria-label="Close modal"
                  >
                    <FaTimesCircle className="text-lg" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 max-h-[60vh] overflow-y-auto">
                {/* Rating Display */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-xl ${
                            i < selectedReview.stars
                              ? 'text-yellow-400 fill-yellow-400 drop-shadow-[0_2px_4px_rgba(250,204,21,0.3)]'
                              : 'text-gray-200 dark:text-gray-700 fill-gray-200 dark:fill-gray-700'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      {selectedReview.stars.toFixed(1)} out of 5
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Full Review
                  </div>
                </div>

                {/* Full Review Content */}
                <div className="relative">
                  <div className="absolute top-0 left-0 -translate-x-4 -translate-y-4 text-red-500/20 dark:text-red-500/10">
                    <FaQuoteLeft className="text-5xl" />
                  </div>
                  <div className="absolute bottom-0 right-0 translate-x-4 translate-y-4 text-teal-500/20 dark:text-teal-500/10">
                    <FaQuoteRight className="text-5xl" />
                  </div>
                  
                  <div className="relative z-10">
                    <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed whitespace-pre-line">
                      {selectedReview.review}
                    </p>
                  </div>
                </div>

                {/* Review Metadata */}
                <div className="mt-8 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex flex-wrap items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-teal-500" />
                      <span>Verified Purchase</span>
                    </div>
                    <div>
                      {selectedReview.review.length} characters
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-gradient-to-r from-white/90 to-white/80 dark:from-gray-900/90 dark:to-gray-900/80 backdrop-blur-sm border-t border-gray-200/50 dark:border-gray-700/50 p-4">
                <div className="flex justify-end">
                  <button
                    onClick={closeReviewModal}
                    className="px-5 py-2 bg-gradient-to-r from-red-600 to-teal-600 text-white font-medium rounded-lg shadow hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Close Review
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Compact Review Form Modal - No Scrollbar */}
      <AnimatePresence>
        {showFormModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeFormModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-10 bg-gradient-to-r from-red-600 to-teal-600 text-white p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold">Rate Us</h3>
                    <p className="text-red-100/80 text-xs mt-0.5">Your honest feedback helps our community</p>
                  </div>
                  <button
                    onClick={closeFormModal}
                    className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200"
                    aria-label="Close modal"
                  >
                    <FaTimes className="text-base" />
                  </button>
                </div>
              </div>

              {/* Compact Modal Content - No Scrollbar */}
              <div className="p-4 max-h-[65vh] overflow-y-auto">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        minLength={2}
                        maxLength={100}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-1 focus:ring-red-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Your Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-1 focus:ring-red-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Your Rating *
                    </label>
                    <div className="p-3 rounded-lg border border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
                      <StarRating
                        value={form.stars}
                        onChange={handleStarChange}
                        size="md"
                        showLabel
                      />
                      <p className="mt-2 text-xs text-center text-gray-600 dark:text-gray-400">
                        {form.stars === 5 ? 'Excellent!' : 
                         form.stars === 4 ? 'Great!' : 
                         form.stars === 3 ? 'Good' : 
                         form.stars === 2 ? 'Fair' : 'Poor'}
                      </p>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="review" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Your Review *
                    </label>
                    <textarea
                      id="review"
                      name="review"
                      value={form.review}
                      onChange={handleChange}
                      placeholder="Share your experience..."
                      required
                      minLength={10}
                      maxLength={1000}
                      rows={3}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-1 focus:ring-red-500 focus:border-transparent transition-all resize-none"
                    />
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Be honest and helpful
                      </p>
                      <span className={`text-xs font-medium ${
                        form.review.length > 900 ? 'text-red-500' : 
                        form.review.length > 700 ? 'text-amber-500' : 
                        'text-gray-500 dark:text-gray-400'
                      }`}>
                        {form.review.length} / 1000
                      </span>
                    </div>
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-2.5 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                    >
                      <p className="text-red-600 dark:text-red-400 text-xs font-medium">{error}</p>
                    </motion.div>
                  )}

                  {success && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-2.5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                    >
                      <p className="text-green-600 dark:text-green-400 text-xs font-medium flex items-center gap-1.5">
                        <FaCheckCircle className="text-xs" />
                        Thank you! Your review has been submitted.
                      </p>
                    </motion.div>
                  )}

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={closeFormModal}
                      className="flex-1 py-2.5 px-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium text-sm rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex-1 py-2.5 px-4 bg-gradient-to-r from-red-600 to-teal-600 text-white font-medium text-sm rounded-lg shadow hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {submitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Submitting...
                        </span>
                      ) : (
                        'Submit Review'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}