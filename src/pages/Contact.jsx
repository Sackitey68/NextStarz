import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const scaleUp = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
};

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your EmailJS credentials
    const serviceID = "service_6kisjbm";
    const templateID = "YOUR_TEMPLATE_ID";
    const userID = "YOUR_USER_ID";

    emailjs
      .sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
        console.log("Email sent successfully!", result.text);
        setIsSubmitted(true);
        setIsError(false);
      })
      .catch((error) => {
        console.error("Failed to send email:", error.text);
        setIsError(true);
      });
  };

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-400 mb-6">
          Get in Touch
        </h1>
        <p className="text-lg sm:text-xl text-gray-300">
          We're here to help! Reach out to us for any questions or inquiries.
        </p>
      </motion.div>

      {/* Contact Form and Info Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        {/* Contact Form */}
        <motion.div
          variants={fadeInUp}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300"
        >
          <h2 className="text-2xl font-bold text-gray-400 mb-6">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-white/5 text-white rounded-lg focus:ring-2 focus:outline-none focus:ring-primary-color focus:border-yellow-300 transition-all duration-300 placeholder-gray-400"
                required
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white/5 text-white rounded-lg focus:ring-2 focus:ring-primary-color focus:border-yellow-500 focus:outline-none transition-all duration-300 placeholder-gray-400"
                required
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                rows="5"
                name="message"
                placeholder="Enter your message"
                className="w-full px-4 py-3 bg-white/5 text-white rounded-lg focus:ring-2 focus:ring-primary-color focus:outline-none focus:border-yellow-300 transition-all duration-300 placeholder-gray-400"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Send Message
              </button>
            </div>

            {/* Success/Error Message */}
            {isSubmitted && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={scaleUp}
                className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg"
              >
                Your message has been sent successfully!
              </motion.div>
            )}
            {isError && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={scaleUp}
                className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg"
              >
                Failed to send message. Please try again.
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Contact Info and Social Media */}
        <motion.div variants={fadeIn} className="space-y-8">
          {/* Contact Info Card */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <FaEnvelope className="w-6 h-6 text-primary-color" />
                <p className="text-gray-300">support@nextstarz.com</p>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <FaPhone className="w-6 h-6 text-primary-color" />
                <p className="text-gray-300">+233 123 456 789</p>
              </div>

             <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="w-6 h-6 text-primary-color" />
                <p className="text-gray-300">123 Main Street, Accra, Ghana</p>
              </div>

              {/* Working Hours */}
              <div className="flex items-center space-x-4">
                <FaClock className="w-6 h-6 text-primary-color" />
                <p className="text-gray-300">Mon - Fri: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Follow Us</h2>
            <div className="flex space-x-6">

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-color hover:text-blue-600 transition-colors duration-300"
              >
                <FaFacebook className="w-6 h-6" />
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-color hover:text-blue-600 transition-colors duration-300"
              >
                <FaTwitter className="w-6 h-6" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-color hover:text-blue-600 transition-colors duration-300"
              >
                <FaInstagram className="w-6 h-6" />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-color hover:text-blue-600 transition-colors duration-300"
              >
                <FaYoutube className="w-6 h-6" />
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-color hover:text-blue-600 transition-colors duration-300"
              >
                <FaTiktok className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
