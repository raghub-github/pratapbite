
export default function MerchantDocs() {
  return (
    <div className="p-6 md:p-10 bg-white dark:bg-gray-900 rounded-xl shadow-lg max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-red-700 dark:text-yellow-400">Merchant Onboarding Documentation</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-yellow-300">Simple 4-step process to get started:</h3>
        <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-200 mb-4">
          <li className="mb-2"><strong>Registration:</strong> Fill out the partner registration form</li>
          <li className="mb-2"><strong>Verification:</strong> Business verification within 24 hours</li>
          <li className="mb-2"><strong>Setup:</strong> Account setup and menu upload</li>
          <li><strong>Go Live:</strong> Start receiving orders</li>
        </ol>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-yellow-300">Commission Advantage</h3>
        <p className="mb-2 text-gray-700 dark:text-gray-200">Unlike other platforms that charge 20-30% commissions, we offer significantly lower rates to maximize your profits.</p>
        <div className="bg-gradient-to-r from-red-50 to-yellow-50 dark:from-red-900 dark:to-yellow-900 p-4 rounded-lg mb-2">
          <h4 className="text-red-700 dark:text-yellow-400 font-bold mb-2">Key Benefits:</h4>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200">
            <li>Lower commissions than any major platform</li>
            <li>Transparent pricing with no hidden fees</li>
            <li>Weekly settlements with detailed reports</li>
          </ul>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-200">For more details, please reach out to our support team or visit the help center.</p>
    </div>
  );
}
