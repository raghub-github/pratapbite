export default function Delivery() {
  return (
    <section id="delivery" className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 dark:text-white mb-6 relative">
          Delivery Solutions
          <span className="block mx-auto mt-2 w-20 h-1 rounded bg-gradient-to-r from-teal-500 to-red-600"></span>
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-10 text-gray-700 dark:text-gray-200 text-base md:text-lg">Choose the delivery method that best fits your business needs.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md border-t-4 border-teal-500 dark:border-yellow-600 text-center transition hover:-translate-y-2 hover:shadow-lg">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-teal-50 dark:bg-yellow-900 mx-auto mb-3 text-2xl text-teal-600 dark:text-yellow-400">
              <i className="fas fa-motorcycle"></i>
            </div>
            <h3 className="font-bold text-base text-blue-900 dark:text-white mb-1">Our Fleet</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Reliable delivery with our dedicated fleet. Timely deliveries with real-time tracking.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md border-t-4 border-teal-500 dark:border-yellow-600 text-center transition hover:-translate-y-2 hover:shadow-lg">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-teal-50 dark:bg-yellow-900 mx-auto mb-3 text-2xl text-teal-600 dark:text-yellow-400">
              <i className="fas fa-truck-loading"></i>
            </div>
            <h3 className="font-bold text-base text-blue-900 dark:text-white mb-1">Self-Delivery</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Use your own delivery system while leveraging our platform for orders and management.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md border-t-4 border-teal-500 dark:border-yellow-600 text-center transition hover:-translate-y-2 hover:shadow-lg">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-teal-50 dark:bg-yellow-900 mx-auto mb-3 text-2xl text-teal-600 dark:text-yellow-400">
              <i className="fas fa-walking"></i>
            </div>
            <h3 className="font-bold text-base text-blue-900 dark:text-white mb-1">Customer Pickup</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Zero delivery cost. Customers pick up orders directly from your store.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md border-t-4 border-teal-500 dark:border-yellow-600 text-center transition hover:-translate-y-2 hover:shadow-lg">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-teal-50 dark:bg-yellow-900 mx-auto mb-3 text-2xl text-teal-600 dark:text-yellow-400">
              <i className="fas fa-exchange-alt"></i>
            </div>
            <h3 className="font-bold text-base text-blue-900 dark:text-white mb-1">Third-Party</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Integrate existing delivery services with our platform for enhanced reach.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
