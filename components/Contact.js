"use client";
import { useState } from 'react';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError('');
    const form = e.target;
    const data = {
      restaurantName: form.restaurantName.value,
      contactPerson: form.contactPerson.value,
      phone: form.phone.value,
      email: form.email.value,
      location: form.location.value,
      businessType: form.businessType.value,
      deliveryOptions: Array.from(form.querySelectorAll('input[type=checkbox]:checked')).map(cb => cb.value),
      message: form.message.value,
    };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        setSuccess(true);
        form.reset();
      } else {
        setError(result.error || 'Failed to send.');
      }
    } catch (err) {
      setError('Network error.');
    }
    setLoading(false);
  }

  return (
          <section id="contact" className="py-12 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-5xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 dark:text-white mb-6 relative">
                Partner With Us
                <span className="block mx-auto mt-2 w-20 h-1 rounded bg-gradient-to-r from-red-600 to-teal-500"></span>
              </h2>
              <p className="text-center max-w-2xl mx-auto mb-10 text-gray-700 dark:text-gray-300 text-base md:text-lg">Fill out this form and our team will contact you within 24 hours.</p>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-2">Contact Info</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Ready to grow your business? Contact us about partnership opportunities.</p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-red-600 to-red-800 dark:from-yellow-700 dark:to-yellow-900 text-white text-lg"><i className="fas fa-phone-alt"></i></div>
                      <div>
                        <h4 className="font-semibold text-red-600 dark:text-yellow-400 mb-1">Phone</h4>
                        <p className="text-gray-700 dark:text-gray-200 text-sm">0009113194 (24/7)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-red-600 to-red-800 dark:from-yellow-700 dark:to-yellow-900 text-white text-lg"><i className="fas fa-map-marker-alt"></i></div>
                      <div>
                        <h4 className="font-semibold text-red-600 dark:text-yellow-400 mb-1">Location</h4>
                        <p className="text-gray-700 dark:text-gray-200 text-sm">Kolkata, India</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-red-600 to-red-800 dark:from-yellow-700 dark:to-yellow-900 text-white text-lg"><i className="fas fa-envelope"></i></div>
                      <div>
                        <h4 className="font-semibold text-red-600 dark:text-yellow-400 mb-1">Email</h4>
                        <p className="text-gray-700 dark:text-gray-200 text-sm">pratapandsons10@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-red-50 to-teal-50 dark:from-yellow-900 dark:to-gray-800 p-4 rounded-lg border-l-4 border-red-600 dark:border-yellow-400 mt-4">
                    <h4 className="font-bold text-blue-900 dark:text-white mb-1">Partner Benefits</h4>
                    <p className="text-gray-700 dark:text-gray-200 text-sm">Grow your business faster with our zero-commission platform, 21 days of free service, and a complimentary advertising package that gives your brand the spotlight it deserves.</p>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-4">Registration Form</h3>
                  <form id="partnerForm" className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="restaurantName" className="block font-semibold text-blue-900 dark:text-white mb-1">Business Name *</label>
                        <input type="text" id="restaurantName" name="restaurantName" className="w-full border-2 border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600 dark:focus:border-yellow-400 bg-white dark:bg-gray-900 text-gray-900 dark:text-white" placeholder="Enter business name" required />
                      </div>
                      <div>
                        <label htmlFor="contactPerson" className="block font-semibold text-blue-900 dark:text-white mb-1">Contact Person *</label>
                        <input type="text" id="contactPerson" name="contactPerson" className="w-full border-2 border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600 dark:focus:border-yellow-400 bg-white dark:bg-gray-900 text-gray-900 dark:text-white" placeholder="Contact person name" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block font-semibold text-blue-900 dark:text-white mb-1">Phone *</label>
                        <input type="tel" id="phone" name="phone" className="w-full border-2 border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600 dark:focus:border-yellow-400 bg-white dark:bg-gray-900 text-gray-900 dark:text-white" placeholder="Phone number" required />
                      </div>
                      <div>
                        <label htmlFor="email" className="block font-semibold text-blue-900 dark:text-white mb-1">Email *</label>
                        <input type="email" id="email" name="email" className="w-full border-2 border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600 dark:focus:border-yellow-400 bg-white dark:bg-gray-900 text-gray-900 dark:text-white" placeholder="Email address" required />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="location" className="block font-semibold text-blue-900 dark:text-white mb-1">Business Address *</label>
                      <input type="text" id="location" name="location" className="w-full border-2 border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600 dark:focus:border-yellow-400 bg-white dark:bg-gray-900 text-gray-900 dark:text-white" placeholder="Full business address" required />
                    </div>
                    <div>
                      <label htmlFor="businessType" className="block font-semibold text-blue-900 dark:text-white mb-1">Business Type *</label>
                      <select id="businessType" name="businessType" className="w-full border-2 border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600 dark:focus:border-yellow-400 bg-white dark:bg-gray-900 text-gray-900 dark:text-white" required>
                        <option value="">Select business type</option>
                        <option value="restaurant">Restaurant / Food Business</option>
                        <option value="grocery">Grocery Store</option>
                        <option value="pharmacy">Pharmacy / Medical Store</option>
                        <option value="stationery">Stationery / Book Store</option>
                        <option value="other">Other Business</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-semibold text-blue-900 dark:text-white mb-1">Delivery Options *</label>
                      <div className="flex flex-col gap-2">
                        <label className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-200">
                          <input type="checkbox" name="deliveryOptions" value="Our Delivery Fleet" className="accent-red-600 dark:accent-yellow-400 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700" /> Our Delivery Fleet
                        </label>
                        <label className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-200">
                          <input type="checkbox" name="deliveryOptions" value="Merchant Self-Delivery" className="accent-red-600 dark:accent-yellow-400 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700" /> Merchant Self-Delivery
                        </label>
                        <label className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-200">
                          <input type="checkbox" name="deliveryOptions" value="Customer Pickup" className="accent-red-600 dark:accent-yellow-400 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700" /> Customer Pickup
                        </label>
                        <label className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-200">
                          <input type="checkbox" name="deliveryOptions" value="Third-Party Integration" className="accent-red-600 dark:accent-yellow-400 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700" /> Third-Party Integration
                        </label>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block font-semibold text-blue-900 dark:text-white mb-1">Additional Information</label>
                      <textarea id="message" name="message" className="w-full border-2 border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600 dark:focus:border-yellow-400 bg-white dark:bg-gray-900 text-gray-900 dark:text-white" rows={3} placeholder="Tell us about your business..."></textarea>
                    </div>
                    <button type="submit" disabled={loading} className="w-full py-3 bg-gradient-to-r from-red-600 to-red-800 dark:from-yellow-700 dark:to-yellow-900 text-white font-bold rounded-full shadow-md hover:-translate-y-1 hover:shadow-lg transition flex items-center justify-center gap-2">
                      <i className="fas fa-paper-plane"></i> {loading ? 'Sending...' : 'Submit Application'}
                    </button>
                    {success && <p className="text-green-600 dark:text-green-400 font-semibold mt-2">Application sent successfully!</p>}
                    {error && <p className="text-red-600 dark:text-red-400 font-semibold mt-2">{error}</p>}
                  </form>
                </div>
              </div>
            </div>
          </section>
  );
}
