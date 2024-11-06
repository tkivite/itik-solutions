import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Background1 from "../assets/sean-pollock-PhYq704ffdA-unsplash.jpg";

const Mentorship = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to the server)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="relative text-neutral-dark h-screen text-center">
        <img
        src={Background1}
        alt="backgroundImage"
        className="fixed brightness-50 h-screen sm:h-auto"
      />
      <div className='bg-neutral-white rounded-lg shadow-lg absolute z-10 w-full mx-auto'>
      <motion.div
        className="rounded-lg mb-8 text-center p-20 bg-transparent"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-center">Join Our Mentorship Program</h2>
        <p className="text-lg text-gray-600 text-center mb-6">
          Our mentorship program is designed to connect aspiring professionals with industry experts. 
          Learn valuable skills, receive personalized guidance, and elevate your career.
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className="rounded-lg shadow-lg p-8 bg-neutral-light pb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-semibold mb-4">Sign Up</h3>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-default"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-default"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-default"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-secondary hover:bg-secondary-dark text-neutral-white font-semibold rounded-lg shadow-lg transition"
        >
          Sign Up
        </button>
      </motion.form>
      </div>
    </div>
  );
};

export default Mentorship;
