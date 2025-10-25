import React, { useState } from "react";
import { CheckCircle, XCircle, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { API_ENDPOINTS } from '../api';
import { trackEvent } from "../utils/MetaPixel";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    requirements: "",
  });

  const [notifications, setNotifications] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const addNotification = (type, message) => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, type, message }]);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return; // Prevent double submission
    
    setIsSubmitting(true);

    try {
      const response = await fetch(API_ENDPOINTS.contacts, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Show success message
        addNotification('success', 'Form submitted successfully!');

        // Meta Pixel event 
        trackEvent("Lead", {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
        });
        
        // Clear form immediately
        setFormData({ 
          name: "", 
          email: "", 
          phone: "", 
          location: "", 
          requirements: "" 
        });
        
        // Show email notification after 1 second
        setTimeout(() => {
          addNotification('info', 'Sending confirmation email...');
        }, 1000);
        
      } else {
        addNotification('error', result.message || 'Failed to submit. Try again.');
      }
    } catch (error) {
      addNotification('error', 'Error connecting to server.');
    } finally {
      setIsSubmitting(false);
    }
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
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
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
              disabled={isSubmitting}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
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
              disabled={isSubmitting}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
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
              disabled={isSubmitting}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
            >
              <option value="" disabled>Select Location</option>
              <option value="Gulberg">Gulberg</option>
            </select>
          </div>

          <div>
            <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">
              Requirements
            </label>
            <textarea
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              rows={4}
              disabled={isSubmitting}
              placeholder="Tell us about your workspace needs, team size, preferred amenities, etc."
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>

          <div className="flex justify-center">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="px-6 py-2 bg-yellow-500 text-white font-medium rounded-md shadow hover:bg-yellow-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>

        {/* Notification Stack */}
        <AnimatePresence>
          <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
            {notifications.map((notification) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 50, scale: 0.9 }}
                className={`${
                  notification.type === 'success' 
                    ? 'bg-green-100 border-green-500' 
                    : notification.type === 'info'
                    ? 'bg-blue-100 border-blue-500'
                    : 'bg-red-100 border-red-500'
                } border-l-4 rounded-lg shadow-xl py-3 px-4`}
              >
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    {notification.type === 'success' ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : notification.type === 'info' ? (
                      <Mail className="h-5 w-5 text-blue-500" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm ${
                      notification.type === 'success' 
                        ? 'text-green-800' 
                        : notification.type === 'info'
                        ? 'text-blue-800'
                        : 'text-red-800'
                    }`}>
                      {notification.message}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ContactForm;