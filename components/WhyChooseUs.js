
export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-12 bg-gradient-to-br from-blue-900 to-blue-700 dark:from-gray-900 dark:to-gray-800 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 relative dark:text-white">
          Why Choose Us
          <span className="block mx-auto mt-2 w-20 h-1 rounded bg-gradient-to-r from-red-600 to-teal-500"></span>
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-10 text-white/90 dark:text-gray-200 text-base md:text-lg">We're committed to being the most partner-friendly platform in the market.</p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 dark:bg-gray-800/80 p-8 rounded-xl border border-white/20 dark:border-yellow-900 text-center backdrop-blur-md transition hover:-translate-y-2 hover:bg-white/20 dark:hover:bg-yellow-900/20">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/20 dark:bg-yellow-900 mx-auto mb-3 text-2xl text-white dark:text-yellow-400">
              <i className="fas fa-money-bill-wave"></i>
            </div>
            <h3 className="font-bold text-lg text-white dark:text-yellow-400 mb-2">Maximum Profits</h3>
            <p className="text-white/90 dark:text-gray-200">While others charge 20-30% commissions, we offer significantly lower rates. Keep more earnings.</p>
          </div>
          <div className="bg-white/10 dark:bg-gray-800/80 p-8 rounded-xl border border-white/20 dark:border-yellow-900 text-center backdrop-blur-md transition hover:-translate-y-2 hover:bg-white/20 dark:hover:bg-yellow-900/20">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/20 dark:bg-yellow-900 mx-auto mb-3 text-2xl text-white dark:text-yellow-400">
              <i className="fas fa-headset"></i>
            </div>
            <h3 className="font-bold text-lg text-white dark:text-yellow-400 mb-2">24/7 Support</h3>
            <p className="text-white/90 dark:text-gray-200">Round-the-clock assistance from our expert team. Technical support whenever you need it.</p>
          </div>
          <div className="bg-white/10 dark:bg-gray-800/80 p-8 rounded-xl border border-white/20 dark:border-yellow-900 text-center backdrop-blur-md transition hover:-translate-y-2 hover:bg-white/20 dark:hover:bg-yellow-900/20">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/20 dark:bg-yellow-900 mx-auto mb-3 text-2xl text-white dark:text-yellow-400">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3 className="font-bold text-lg text-white dark:text-yellow-400 mb-2">Growth Tools</h3>
            <p className="text-white/90 dark:text-gray-200">Access to analytics, marketing tools, and insights to expand your business.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
