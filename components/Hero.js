export default function Hero() {
  return (
    <section
      id="home"
      className="pt-16 pb-20 bg-gradient-to-br from-red-50/30 to-blue-50/30 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE TEXT */}
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
              commissions compared to other services. Maximize profits with our competitive rates.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
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
          </div>

          {/* RIGHT SIDE LOGO — HIDDEN ON SMALL SCREENS */}
          <div className="hidden md:flex justify-center md:justify-end animate-fade-in">
            <img
              src="/img/logo.png"
              alt="Pratap's Bite Delivery Platform"
              className="rounded-[20px] max-w-[280px] border-2 border-white/20 
              shadow-[0_10px_30px_rgba(0,0,0,0.25)] outline outline-1 outline-white/35 
              outline-offset-[-6px] backdrop-blur-[6px] transition-transform 
              duration-500 ease-in-out hover:scale-[1.05] hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)] 
              hover:border-white/45 animate-floating"
            />
          </div>
        </div>

        {/* BOTTOM STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 bg-white/80 dark:bg-gray-900/80 
        backdrop-blur-md rounded-xl shadow p-6 max-w-xl mx-auto border 
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

      {/* ANIMATION CSS */}
      <style>{`
        /* Floating Logo Animation */
        @keyframes floating {
          0% { transform: translateY(0) rotateY(-8deg); }
          50% { transform: translateY(-12px) rotateY(-8deg); }
          100% { transform: translateY(0) rotateY(-8deg); }
        }
        .animate-floating {
          animation: floating 6s ease-in-out infinite;
        }

        /* Fade-in Up Animation */
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(25px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.9s ease-out both;
        }

        /* Fade-in Animation */
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 1.2s ease-out both;
        }
      `}</style>
    </section>
  );
}
