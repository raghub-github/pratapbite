"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    restaurantName: "",
    contactPerson: "",
    phone: "",
    email: "",
    location: "",
    businessType: "",
    deliveryOptions: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          deliveryOptions: [formData.deliveryOptions],
        }),
      });

      const output = await res.json();

      if (output.success) {
        setSuccessMsg("Your application has been submitted successfully!");
        setFormData({
          restaurantName: "",
          contactPerson: "",
          phone: "",
          email: "",
          location: "",
          businessType: "",
          deliveryOptions: "",
          message: "",
        });
      } else {
        setErrorMsg("Error submitting form. Try again.");
      }
    } catch (error) {
      setErrorMsg("Something went wrong!");
    }

    setLoading(false);
  };

  // Scroll-triggered animation
  const fadeUpScale = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="py-12 bg-[#0b1220] min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          variants={fadeUpScale}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of element is in view, animate once
          className="text-3xl md:text-4xl font-extrabold text-center text-white mb-6"
        >
          Partner With Us
          <span className="block mx-auto mt-2 w-20 h-1 rounded bg-gradient-to-r from-red-600 to-teal-500"></span>
        </motion.h2>

        <motion.p
          variants={fadeUpScale}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-2xl mx-auto mb-10 text-gray-300"
        >
          Fill out this form and our team will contact you within 24 hours.
        </motion.p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">

          {/* LEFT CARD */}
          <motion.div
            variants={fadeUpScale}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -5, boxShadow: "0px 15px 30px rgba(0,0,0,0.5)" }}
            className="bg-[#111827] p-8 rounded-xl shadow-lg border border-gray-700 flex flex-col h-full"
          >
            <h3 className="text-xl font-bold text-white mb-2">Contact Info</h3>
            <p className="text-gray-400 mb-6">
              Ready to grow your business? Contact us about partnership opportunities.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-red-600">
                  <i className="fas fa-phone-alt text-white"></i>
                </div>
                <div>
                  <h4 className="text-red-400 font-semibold">Phone</h4>
                  <p className="text-gray-300 text-sm">0009113194 (24/7)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-red-600">
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div>
                  <h4 className="text-red-400 font-semibold">Location</h4>
                  <p className="text-gray-300 text-sm">Kolkata, India</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-red-600">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <h4 className="text-red-400 font-semibold">Email</h4>
                  <p className="text-gray-300 text-sm">pratapandsons10@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 mt-auto">
              <div className="p-5 rounded-lg bg-gradient-to-r from-yellow-600/30 to-gray-900 border-l-4 border-yellow-400">
                <h4 className="font-bold text-white mb-2">Zero Commission</h4>
                <p className="text-gray-300 text-sm">
                  Run your business on a zero-commission model for the first 21 days.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-gradient-to-r from-blue-600/30 to-gray-900 border-l-4 border-blue-400">
                <h4 className="font-bold text-white mb-2">Premium Marketing Support</h4>
                <p className="text-gray-300 text-sm">
                  Free ads & social media branding support.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-gradient-to-r from-green-600/30 to-gray-900 border-l-4 border-green-400">
                <h4 className="font-bold text-white mb-2">Priority Onboarding</h4>
                <p className="text-gray-300 text-sm">
                  Fast onboarding + dedicated partnership manager.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD - FORM */}
          <motion.div
            variants={fadeUpScale}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -5, boxShadow: "0px 15px 30px rgba(0,0,0,0.5)" }}
            className="bg-[#111827] p-8 rounded-xl shadow-lg border border-gray-700 h-full"
          >
            <h3 className="text-xl font-bold text-white mb-4">Registration Form</h3>

            {successMsg && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 mb-3">{successMsg}</motion.p>}
            {errorMsg && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 mb-3">{errorMsg}</motion.p>}

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white font-semibold">Business Name *</label>
                  <input
                    name="restaurantName"
                    value={formData.restaurantName}
                    onChange={handleChange}
                    type="text"
                    className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
                  />
                </div>

                <div>
                  <label className="text-white font-semibold">Contact Person *</label>
                  <input
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    type="text"
                    className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white font-semibold">Phone *</label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
                  />
                </div>

                <div>
                  <label className="text-white font-semibold">Email *</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-white font-semibold">Business Address *</label>
                <input
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  type="text"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
                />
              </div>

              <div>
                <label className="text-white font-semibold">Business Type *</label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
                >
                  <option>Select business type</option>
                  <option>Restaurant</option>
                  <option>Grocery</option>
                  <option>Pharmacy</option>
                  <option>3PL / Logistics</option>
                  <option>Others</option>
                </select>
              </div>

              <div>
                <label className="text-white font-semibold">Delivery Options *</label>
                <select
                  name="deliveryOptions"
                  value={formData.deliveryOptions}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
                >
                  <option>Select delivery option</option>
                  <option>Our Delivery Fleet</option>
                  <option>Merchant Self-Delivery</option>
                  <option>Customer Pickup</option>
                  <option>Third-Party Integration</option>
                </select>
              </div>

              <div>
                <label className="text-white font-semibold">Additional Information</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-red-600 hover:bg-red-700 transition text-white rounded-full text-lg font-bold"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
