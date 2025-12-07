export default function Hero() {
  return (
    <section id="home" className="pt-8 pb-12 bg-gradient-to-br from-red-50/30 to-blue-50/30 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden mt-0">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 dark:text-white mb-4 leading-tight">
              India's <span className="relative text-red-600 dark:text-yellow-400 inline-block after:block after:absolute after:bottom-1 after:left-0 after:w-full after:h-2 after:bg-red-200 dark:after:bg-yellow-900 after:rounded-md after:-z-10">Lowest Commission</span> Delivery Platform
            </h1>
            <p className="text-gray-700 dark:text-gray-200 text-lg mb-6 max-w-lg">Join India's most partner-friendly platform. Save significantly on commissions compared to other services. Maximize profits with our competitive rates.</p>
            <div className="flex flex-wrap gap-3 mb-6">
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 dark:from-yellow-500 dark:to-yellow-700 text-white rounded-full font-semibold shadow-md hover:-translate-y-1 hover:shadow-lg transition">
                <i className="fas fa-handshake"></i> Become a Partner
              </a>
              <a href="#features" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-900 to-blue-700 dark:from-gray-700 dark:to-gray-600 text-white rounded-full font-semibold shadow-md hover:-translate-y-1 hover:shadow-lg transition">
                <i className="fas fa-chart-line"></i> View Features
              </a>
            </div>
          </div>
          <div className="hero-image relative text-center">
            <img
              src="/img/logo.png"
              alt="Pratap's Bite Delivery Platform"
              className="rounded-[16px] max-w-[250px] border-2 border-white/20 shadow-[0_8px_25px_rgba(0,0,0,0.25)] outline outline-1 outline-white/35 outline-offset-[-6px] backdrop-blur-[6px] transition-transform duration-400 ease-in-out hover:scale-[1.03] hover:shadow-[0_12px_35px_rgba(0,0,0,0.35)] hover:border-white/45 [transform:perspective(800px)_rotateY(-8deg)] animate-float"
            />
            <style>{`
              @keyframes float {
                0% { transform: perspective(800px) rotateY(-8deg) translateY(0); }
                50% { transform: perspective(800px) rotateY(-8deg) translateY(-12px); }
                100% { transform: perspective(800px) rotateY(-8deg) translateY(0); }
              }
              .animate-float {
                animation: float 6s ease-in-out infinite;
              }
            `}</style>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl shadow p-6 max-w-xl mx-auto border border-white/30 dark:border-yellow-900/30">
          <div className="text-center">
            <span className="block text-2xl font-extrabold text-red-600 dark:text-yellow-400 mb-1">100%</span>
            <span className="text-sm font-semibold text-gray-500 dark:text-gray-300">Safe & Secure</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-extrabold text-red-600 dark:text-yellow-400 mb-1">24/7</span>
            <span className="text-sm font-semibold text-gray-500 dark:text-gray-300">Support</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-extrabold text-red-600 dark:text-yellow-400 mb-1">100%</span>
            <span className="text-sm font-semibold text-gray-500 dark:text-gray-300">Partner Focused</span>
          </div>
        </div>
      </div>
    </section>
  );
}
