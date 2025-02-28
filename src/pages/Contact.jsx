import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
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
    <section className="bg-bg-color py-16 px-4 sm:px-6 lg:px-8">
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
          className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                required
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                required
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="5"
                name="message"
                placeholder="Enter your message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
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
              <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
                Your message has been sent successfully!
              </div>
            )}
            {isError && (
              <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
                Failed to send message. Please try again.
              </div>
            )}
          </form>
        </motion.div>

        {/* Contact Info and Map */}
        <motion.div variants={fadeIn} className="space-y-8">
          {/* Contact Info Cards */}
          <div className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <FaEnvelope className="w-6 h-6 text-blue-600" />
                <p className="text-gray-700">support@nextstarz.com</p>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <FaPhone className="w-6 h-6 text-blue-600" />
                <p className="text-gray-700">+233 123 456 789</p>
              </div>

              {/* Address */}
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="w-6 h-6 text-blue-600" />
                <p className="text-gray-700">123 Main Street, Accra, Ghana</p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h2>
            <div className="flex space-x-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Our Location
            </h2>
            <div className="overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.755238724263!2d-0.2016386847618001!3d5.603822995932325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0x6f6a668a7f5d2d1e!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1633021234567!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
