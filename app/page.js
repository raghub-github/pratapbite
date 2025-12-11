import Header from '../components/Header';
import Marquee from '../components/Marquee';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Delivery from '../components/Delivery';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ReviewsSection from '../components/ReviewsSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <Marquee />
      <Hero />
      <Features />
      <Delivery />
      <WhyChooseUs />
      <Contact />
      {/* Reviews above Footer */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16">
        <ReviewsSection showAll={false} />
        <div className="text-center mt-8">
          <a 
            href="/reviews" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-teal-600 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl hover:from-red-700 hover:to-teal-700 transition-all duration-200 font-semibold"
          >
            View All Reviews
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
