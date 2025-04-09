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
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 100,
    },
  },
};

const buttonHover = {
  hover: {
    y: -3,
    scale: 1.02,
    boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3 },
  },
  tap: {
    scale: 0.98,
  },
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

    const serviceID = "service_mledv0h";
    const templateID = "template_4s32ncj";
    const userID = "sjnE7vrGy1Mt4BA88";

    const formData = new FormData(e.target);
    const templateParams = {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      message: formData.get("message"),
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((result) => {
        console.log("Email sent successfully!", result.text);
        setIsSubmitted(true);
        setIsError(false);
        e.target.reset();
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
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-12 px-4 sm:px-6 lg:px-8  min-h-screen"
    >
      <title>Contact Us | NextStarz</title>
      <meta
        name="description"
        content="Get in touch with NextStarz team for inquiries, support, or partnership opportunities"
      />

      {/* Hero Section */}
      <motion.div
        variants={fadeInUp}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Let's Connect!
        </h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
          variants={fadeIn}
        >
          We're here to help! Choose your preferred way to reach out to us.
        </motion.p>
      </motion.div>

      {/* Quick Contact Buttons */}
      <motion.div
        variants={fadeInUp}
        className="max-w-7xl mx-auto mb-16 flex flex-wrap justify-center gap-6"
      >
        <motion.a
          href="https://api.whatsapp.com/send?phone=233534886377"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
          variants={buttonHover}
          whileHover="hover"
          whileTap="tap"
        >
          <FaWhatsapp className="w-6 h-6" />
          <span>Chat on WhatsApp</span>
        </motion.a>

        <motion.a
          href="https://chat.whatsapp.com/HUthrXOegbIHo3MxGYvUcL"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-800 to-green-900 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
          variants={buttonHover}
          whileHover="hover"
          whileTap="tap"
        >
          <FaWhatsapp className="w-6 h-6" />
          <span>Join Our Community</span>
        </motion.a>
      </motion.div>

      {/* Contact Form and Info Section */}
      <motion.div
        variants={containerVariants}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        {/* Contact Form */}
        <motion.div
          variants={fadeInUp}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
        >
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span>Send Us a Message</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={fadeIn} className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 placeholder-gray-400 border border-gray-600"
                required
              />
            </motion.div>

            <motion.div variants={fadeIn} className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none transition-all duration-300 placeholder-gray-400 border border-gray-600"
                required
              />
            </motion.div>

            <motion.div variants={fadeIn} className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Your Message
              </label>
              <textarea
                rows="5"
                name="message"
                placeholder="How can we help you?"
                className="w-full px-4 py-3 bg-gray-700/50 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none focus:border-purple-500 transition-all duration-300 placeholder-gray-400 border border-gray-600"
                required
              />
            </motion.div>

            <motion.div variants={fadeIn} className="pt-2">
              <motion.button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 w-full shadow-lg"
                disabled={isLoading}
                whileHover={
                  !isLoading
                    ? {
                        scale: 1.02,
                        boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.5)",
                      }
                    : {}
                }
                whileTap={!isLoading ? { scale: 0.98 } : {}}
              >
                {isLoading ? (
                  <span className="inline-block h-6 w-6 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    <FaPaperPlane className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </motion.div>

            {/* Form Messages */}
            {isSubmitted && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={scaleUp}
                className="mt-4 p-4 bg-green-900/30 text-green-400 rounded-lg border border-green-500/30"
              >
                Your message has been sent successfully!
              </motion.div>
            )}
            {isError && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={scaleUp}
                className="mt-4 p-4 bg-red-900/30 text-red-400 rounded-lg border border-red-500/30"
              >
                Failed to send message. Please try again.
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Contact Info Section */}
        <motion.div variants={fadeInUp} className="space-y-8">
          {/* Contact Information Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-blue-700/30 hover:border-blue-500/50 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span>Contact Information</span>
            </h2>

            <div className="space-y-6">
              <motion.div variants={fadeIn} className="flex items-start gap-4">
                <FaEnvelope className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <a
                  href="mailto:info.nextstarz@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info.nextstarz@gmail.com
                </a>
              </motion.div>

              <motion.div variants={fadeIn} className="flex items-start gap-4">
                <FaPhone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <a
                  href="https://wa.me/233534886377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +233 534 886 377
                </a>
              </motion.div>

              <motion.div variants={fadeIn} className="flex items-start gap-4">
                <FaMapMarkerAlt className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  15 Sapele Cl, GC-136-5844, Accra
                </p>
              </motion.div>

              <motion.div variants={fadeIn} className="flex items-start gap-4">
                <FaClock className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">Mon - Fri: 9:00 AM - 5:00 PM</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Social Media Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-purple-700/30 hover:border-purple-500/50 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span>Follow Us</span>
            </h2>

            <motion.div
              variants={containerVariants}
              className="flex flex-wrap gap-6 justify-center md:justify-start"
            >
              {[
                {
                  icon: <FaFacebook className="w-7 h-7" />,
                  color: "text-blue-500 hover:text-blue-400",
                  href: "https://web.facebook.com/nextstarzglobal/",
                  label: "Facebook",
                },
                {
                  icon: <FaTwitter className="w-7 h-7" />,
                  color: "text-blue-400 hover:text-blue-300",
                  href: "https://x.com/NextStarzglobal",
                  label: "Twitter",
                },
                {
                  icon: <FaInstagram className="w-7 h-7" />,
                  color: "text-pink-500 hover:text-pink-400",
                  href: "https://www.instagram.com/NextStarzglobal",
                  label: "Instagram",
                },
                {
                  icon: <FaYoutube className="w-7 h-7" />,
                  color: "text-red-500 hover:text-red-400",
                  href: "https://www.youtube.com/@NextStarzglobal",
                  label: "YouTube",
                },
                {
                  icon: <FaTiktok className="w-7 h-7" />,
                  color: "text-gray-300 hover:text-white",
                  href: "https://www.tiktok.com/@Nxtstarz",
                  label: "TikTok",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  variants={fadeInUp}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} transition-colors duration-300`}
                  aria-label={social.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
