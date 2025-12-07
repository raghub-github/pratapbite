
export default function Features() {
  return (
    <section id="features" className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 dark:text-white mb-10 relative">
          Core Features
          <span className="block mx-auto mt-2 w-20 h-1 rounded bg-gradient-to-r from-red-600 to-teal-500"></span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border-t-4 border-red-600 dark:border-yellow-600 text-center transition hover:-translate-y-2 hover:shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-50 dark:bg-yellow-900 mx-auto mb-4 text-3xl text-red-600 dark:text-yellow-400">
              <i className="fas fa-percentage"></i>
            </div>
            <h3 className="font-bold text-lg text-blue-900 dark:text-white mb-2">Lowest Commission</h3>
            <p className="text-gray-600 dark:text-gray-300">Significantly lower commissions than other platforms. While others charge 20-30%, our rates are the most competitive.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border-t-4 border-red-600 dark:border-yellow-600 text-center transition hover:-translate-y-2 hover:shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-50 dark:bg-yellow-900 mx-auto mb-4 text-3xl text-red-600 dark:text-yellow-400">
              <i className="fas fa-handshake"></i>
            </div>
            <h3 className="font-bold text-lg text-blue-900 dark:text-white mb-2">Business Partnership</h3>
            <p className="text-gray-600 dark:text-gray-300">Partner with us for mutual growth. Comprehensive support, training, and resources for your business.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border-t-4 border-red-600 dark:border-yellow-600 text-center transition hover:-translate-y-2 hover:shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-50 dark:bg-yellow-900 mx-auto mb-4 text-3xl text-red-600 dark:text-yellow-400">
              <i className="fas fa-store"></i>
            </div>
            <h3 className="font-bold text-lg text-blue-900 dark:text-white mb-2">Multi-Vendor Integration</h3>
            <p className="text-gray-600 dark:text-gray-300">Seamlessly integrate restaurants, grocery stores, pharmacies, and stationery shops with easy setup.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
