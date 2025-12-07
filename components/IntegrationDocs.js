
export default function IntegrationDocs() {
  return (
    <div className="p-6 md:p-10 bg-white dark:bg-gray-900 rounded-xl shadow-lg max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-red-700 dark:text-yellow-400">API Integration Documentation</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-yellow-300">API Integration Overview</h3>
        <p className="mb-2 text-gray-700 dark:text-gray-200">Seamlessly integrate your existing systems with our platform using our developer-friendly API.</p>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-yellow-300">Getting Started</h3>
        <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-200 mb-4">
          <li className="mb-2"><strong>Request API Access:</strong> Contact our technical team</li>
          <li className="mb-2"><strong>Sandbox Testing:</strong> Test in our sandbox environment</li>
          <li className="mb-2"><strong>Development:</strong> Implement our API endpoints</li>
          <li><strong>Go Live:</strong> Deploy to production</li>
        </ol>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-yellow-300">Available Endpoints</h3>
        <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900 dark:to-green-900 p-4 rounded-lg mb-2">
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200">
            <li><strong>Order Management:</strong> Create, update, track orders</li>
            <li><strong>Menu Management:</strong> Sync product catalogs</li>
            <li><strong>Inventory:</strong> Real-time stock updates</li>
            <li><strong>Analytics:</strong> Business insights and metrics</li>
          </ul>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-200">For technical documentation and API keys, please contact our integration team.</p>
    </div>
  );
}
