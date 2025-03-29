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
  FaWhatsapp,
  FaPaperPlane,
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
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmitted(false);
    setIsError(false);

    // EmailJS credentials
    const serviceID = "service_mledv0h";
    const templateID = "template_4s32ncj";
    const userID = "sjnE7vrGy1Mt4BA88";

    // Create form data with correct field names
    const formData = new FormData(e.target);
    const templateParams = {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      message: formData.get("message")
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((result) => {
        console.log("Email sent successfully!", result.text);
        setIsSubmitted(true);
        setIsError(false);
        e.target.reset(); // Reset form after successful submission
      })
      .catch((error) => {
        console.error("Failed to send email:", error.text);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-color">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-400 mb-6">
          Let's Connect!
        </h1>
        <p className="text-lg sm:text-xl text-gray-300">
          We're here to help! Choose your preferred way to reach out to us.
        </p>
      </motion.div>

      {/* Quick Contact Buttons */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-7xl mx-auto mb-16 flex flex-wrap justify-center gap-4"
      >
        <a
          href="https://api.whatsapp.com/send?phone=233534886377"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300"
        >
          <FaWhatsapp className="w-5 h-5" />
          Chat on WhatsApp
        </a>

        <a
          href="https://chat.whatsapp.com/HUthrXOegbIHo3MxGYvUcL"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-900 transition-all duration-300"
        >
          <FaWhatsapp className="w-5 h-5" />
          Join Our Community
        </a>
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
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300"
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
                className="w-full px-4 py-3 bg-white/5 text-white rounded-lg focus:ring-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 placeholder-gray-400"
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
                className="w-full px-4 py-3 bg-white/5 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none transition-all duration-300 placeholder-gray-400"
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
                className="w-full px-4 py-3 bg-white/5 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none focus:border-purple-500 transition-all duration-300 placeholder-gray-400"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 text-white font-semibold rounded-lg  hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2 w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </div>

            {/* Success/Error Message */}
            {isSubmitted && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={scaleUp}
                className="mt-4 p-4 bg-green-500/10 text-green-400 rounded-lg border border-green-500/30"
              >
                Your message has been sent successfully!
              </motion.div>
            )}
            {isError && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={scaleUp}
                className="mt-4 p-4 bg-red-500/10 text-red-400 rounded-lg border border-red-500/30"
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
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              {/* Email with clickable link */}
              <div className="flex items-center space-x-4">
                <FaEnvelope className="w-6 h-6 text-purple-400" />
                <a
                  href="mailto:info.nextstarz@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info.nextstarz@gmail.com
                </a>
              </div>

              {/* Phone with WhatsApp link */}
              <div className="flex items-center space-x-4">
                <FaPhone className="w-6 h-6 text-blue-400" />
                <a
                  href="https://wa.me/233534886377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +233 534 886 377
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="w-6 h-6 text-yellow-400" />
                <p className="text-gray-300">15 Sapele Cl, GC-136-5844, Accra</p>
              </div>

              {/* Working Hours */}
              <div className="flex items-center space-x-4">
                <FaClock className="w-6 h-6 text-pink-400" />
                <p className="text-gray-300">Mon - Fri: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/10 hover:border-pink-500/50 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Follow Us</h2>
            <div className="flex flex-wrap gap-6">
              {/* Facebook */}
              <a
                href="https://web.facebook.com/nextstarzglobal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                title="Facebook"
              >
                <FaFacebook className="w-8 h-8" />
              </a>

              {/* Twitter */}
              <a
                href="https://x.com/NextStarzglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
                title="Twitter"
              >
                <FaTwitter className="w-8 h-8" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/NextStarzglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700 transition-colors duration-300"
                title="Instagram"
              >
                <FaInstagram className="w-8 h-8" />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@NextStarzglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-700 transition-colors duration-300"
                title="YouTube"
              >
                <FaYoutube className="w-8 h-8" />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@Nxtstarz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-800 transition-colors duration-300 dark:text-gray-500 dark:hover:text-black"
                title="TikTok"
              >
                <FaTiktok className="w-8 h-8" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}