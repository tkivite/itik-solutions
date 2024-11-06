import React, { useState } from "react";
import { motion } from "framer-motion";
import Background1 from "../assets/sean-pollock-PhYq704ffdA-unsplash.jpg";

const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to manage submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // Here you can implement your API call to send the data
    // For example: await sendFormData(formData);

    // Reset the form after submission
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitted(true);

    // Optional: Reset submission status after a few secondstext-neutral-dark h-screen text-center
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="relative text-neutral-dark h-screen text-center">
      <img
        src={Background1}
        alt="backgroundImage"
        className="fixed brightness-50 h-screen sm:h-auto"
      />

      <motion.div
        className="rounded-lg shadow-lg absolute z-10 w-full mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <section className="text-center p-24 bg-transparent">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
        <p className="text-lg text-gray-600 text-center mb-6">
          Have questions or feedback? We're here to help! Please fill out the
          form below or reach out to us directly.
        </p>
        </section>
        <section className="bg-neutral-light pb-6 pt-6">

        {isSubmitted && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">
              {" "}
              Your message has been sent.
            </span>
          </div>
        )}

        {/* Contact Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-gray-600" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-600" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-600" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-primary hover:bg-primary-dark text-neutral-white font-semibold rounded-lg shadow-lg transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-2">Contact Information</h3>
          <p className="text-lg text-gray-600 mb-2">
            Email:{" "}
            <a href="mailto:info@itiksolutions.com" className="text-primary">
              info@itiksolutions.com
            </a>
          </p>
          <p className="text-lg text-gray-600 mb-2">
            Phone:{" "}
            <a href="tel:+123456789" className="text-primary">
              +123 456 789
            </a>
          </p>
          <p className="text-lg text-gray-600">
            Address: 123 Itik Lane, Nairobi, Kenya
          </p>
        </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Contact;
