"use client";
import { useState, useEffect } from 'react';
import StarRating from './StarRating';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaUser, FaCalendarAlt } from 'react-icons/fa';

export default function ReviewsSection({ showAll = false }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', stars: 5, review: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  
  // Carousel state for home page
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsToShow = showAll ? reviews : reviews.slice(0, 5); // Show 5 latest on home page
  const displayedReviews = showAll 
    ? reviews 
    : reviewsToShow.slice(currentIndex, Math.min(currentIndex + 3, reviewsToShow.length));

  useEffect(() => {
    fetchReviews();
  }, [success]);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const limit = showAll ? null : 5;
      const url = limit ? `/api/reviews?limit=${limit}` : '/api/reviews';
      const res = await fetch(url);
      const data = await res.json();
      
      if (data.success) {
        setReviews(data.data || []);
      } else {
        console.error('Failed to fetch reviews:', data.error);
      }
    } catch (err) {
      console.error('Error fetching reviews:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleStarChange = (stars) => {
    setForm({ ...form, stars });
    setError('');
  };

  const handleSubmit = async (e) => {
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
        // Refresh reviews after successful submission
        setTimeout(() => {
          fetchReviews();
          setSuccess(false);
        }, 2000);
      }
    } catch (err) {
      setError('Network error. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  const nextSlide = () => {
    if (showAll || reviewsToShow.length <= 3) return;
    const maxIndex = Math.max(0, reviewsToShow.length - 3);
    setCurrentIndex((prev) => (prev + 3 > maxIndex ? 0 : prev + 3));
  };

  const prevSlide = () => {
    if (showAll || reviewsToShow.length <= 3) return;
    const maxIndex = Math.max(0, reviewsToShow.length - 3);
    setCurrentIndex((prev) => (prev - 3 < 0 ? maxIndex : prev - 3));
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (loading) {
    return (
      <div className="text-center py-10">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Loading reviews...</p>
      </div>
    );
  }

  return (
    <section className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          {showAll ? 'All User Reviews' : 'What Our Users Say'}
        </h2>

        {/* Reviews Display */}
        {reviews.length === 0 ? (
          <div className="text-center py-10 text-gray-600 dark:text-gray-400">
            <p className="text-lg">No reviews yet. Be the first to share your experience!</p>
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
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
                          <FaUser />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{review.name}</h3>
                          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-1">
                            <FaCalendarAlt />
                            <span>{formatDate(review.created_at)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <StarRating value={review.stars} readOnly size="md" />
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {review.review}
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Carousel Controls for Home Page */}
            {!showAll && reviewsToShow.length > 3 && (
              <div className="flex justify-center items-center gap-4 mt-6">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors shadow-md hover:shadow-lg"
                  aria-label="Previous reviews"
                >
                  <FaChevronLeft />
                </button>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {Math.floor(currentIndex / 3) + 1} / {Math.ceil(reviewsToShow.length / 3)}
                </span>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors shadow-md hover:shadow-lg"
                  aria-label="Next reviews"
                >
                  <FaChevronRight />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Review Form - Show on both pages */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              {showAll ? 'Share Your Experience' : 'Leave a Review'}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  minLength={2}
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                />
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  One review per email address
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Rating *
                </label>
                <StarRating
                  value={form.stars}
                  onChange={handleStarChange}
                  size="lg"
                  showLabel
                />
              </div>

              <div>
                <label htmlFor="review" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Review *
                </label>
                <textarea
                  id="review"
                  name="review"
                  value={form.review}
                  onChange={handleChange}
                  placeholder="Share your experience with us..."
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
                />
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  {form.review.length} / 2000 characters
                </p>
              </div>

              {error && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
                </div>
              )}

              {success && (
                <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-green-600 dark:text-green-400 text-sm">
                    ✓ Review submitted successfully! Thank you for your feedback.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 px-6 bg-gradient-to-r from-red-600 to-teal-600 text-white font-semibold rounded-lg shadow-md hover:shadow-xl hover:from-red-700 hover:to-teal-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Submitting...' : 'Submit Review'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
