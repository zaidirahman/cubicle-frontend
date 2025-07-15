import React, { useState } from "react";
import { CheckCircle, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });

  const [showBanner, setShowBanner] = useState(false);
  const [bannerState, setBannerState] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(process.env.REACT_APP_CONTACT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setBannerState({
          type: 'success',
          message: 'Form Submitted!'
        });
        setFormData({ name: "", email: "", phone: "", location: "" });
      } else {
        setBannerState({
          type: 'error',
          message: result.message || 'Failed to submit. Try again.'
        });
      }
    } catch (error) {
      setBannerState({
        type: 'error',
        message: 'Error connecting to server.'
      });
    }

    setShowBanner(true);
    setTimeout(() => setShowBanner(false), 3000);
  };

  return (
    <div id="Contact" className="flex flex-col items-center justify-center py-10 px-4 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">How it works?</h2>
      <p className="text-gray-600 text-center mb-8">
        <strong>Explore us</strong> - fill in the form below to contact sales and schedule a visit to our facility.<br/>
        <strong>Find your fit</strong> - delve into our flexible plans and see which caters your workspace needs.<br/>
        <strong>Move in</strong> - Join our facility and enjoy seamless operations from your first day.
      </p>
      <div className="bg-white shadow-xl shadow-gray-400 hover:shadow-2xl rounded-md p-6 w-full max-w-md transition-shadow duration-300">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location <span className="text-red-500">*</span>
            </label>
            <select
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            >
              <option value="" disabled>Select Location</option>
              <option value="Gulberg">Gulberg</option>
            </select>
          </div>

          <div className="flex justify-center">
            <button type="submit" className="px-6 py-2 bg-yellow-500 text-white font-medium rounded-md shadow hover:bg-yellow-600">
              Submit
            </button>
          </div>
        </form>

        <AnimatePresence>
  {showBanner && (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -20 }}
      className="fixed top-4 left-0 right-0 flex justify-center z-50 px-4"
    >
      <div className={`${
        bannerState.type === 'success' ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500'
      } border-l-4 rounded-lg shadow-xl py-3 px-4 max-w-sm w-full`}>
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            {bannerState.type === 'success' ? (
              <CheckCircle className="h-5 w-5 text-green-500" />
            ) : (
              <XCircle className="h-5 w-5 text-red-500" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className={`text-sm ${
              bannerState.type === 'success' ? 'text-green-800' : 'text-red-800'
            }`}>
              {bannerState.message}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
      </div>
    </div>
  );
};

export default ContactForm;