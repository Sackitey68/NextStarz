import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { FaCookieBite, FaFilm, FaTheaterMasks, FaStar, FaVideo } from "react-icons/fa";
import { RiFilmFill } from "react-icons/ri";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const popIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { 
      type: "spring", 
      damping: 10,
      stiffness: 100
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function CookiesPolicy() {
  const [showConsentBanner, setShowConsentBanner] = useState(true);
  const [cookieAnimation, setCookieAnimation] = useState(false);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setCookieAnimation(true);
    setTimeout(() => setShowConsentBanner(false), 800);
  };

  const handleRejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowConsentBanner(false);
  };

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      setShowConsentBanner(false);
    }
  }, []);

  return (
    <div className="min-h-screen text-gray-200 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-900 rounded-full mix-blend-screen opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-900 rounded-full mix-blend-screen opacity-10 blur-3xl"></div>
      </div>

      {/* Floating entertainment icons with subtle motion */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ y: -50, opacity: 0.03 }}
          animate={{ y: 0, opacity: 0.1 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute top-1/4 left-10"
        >
          <RiFilmFill className="text-6xl text-purple-500" />
        </motion.div>
        <motion.div 
          initial={{ y: 30, opacity: 0.03 }}
          animate={{ y: 0, opacity: 0.1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-20"
        >
          <FaTheaterMasks className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div 
          initial={{ y: -20, opacity: 0.03 }}
          animate={{ y: 10, opacity: 0.1 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-1/4"
        >
          <FaVideo className="text-5xl text-pink-500" />
        </motion.div>
      </div>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50"
        >
          {/* Hero Section */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-indigo-900/30">
              <div className="absolute inset-0 bg-[url('https://assets.codepen.io/1481804/noise-gradient.png')] bg-cover mix-blend-overlay opacity-15"></div>
            </div>
            <div className="p-12 sm:p-16 text-center relative">
              <motion.div 
                variants={popIn}
                className="inline-flex items-center justify-center mb-8"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-color rounded-full blur-md opacity-30"></div>
                  <FaCookieBite className="relative text-5xl text-primary-color" />
                </div>
              </motion.div>
              <motion.h1 
                variants={slideUp}
                className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight bg-clip-text text-primary-color"
              >
                Cookie Policy
              </motion.h1>
              <motion.p 
                variants={slideUp}
                className="text-xl text-gray-300 max-w-2xl mx-auto"
              >
                Enhancing your entertainment experience through responsible data practices
              </motion.p>
            </div>
          </div>

          {/* Policy Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="p-8 sm:p-12 lg:p-16"
          >
            <motion.div variants={slideUp} className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-0.5 bg-yellow-300 mr-4"></div>
                <h2 className="text-2xl font-semibold tracking-wide text-primary-color">COOKIE USAGE</h2>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                At NEXTSTARZ, we use cookies and similar technologies to deliver premium entertainment experiences. 
                These digital tools help us curate content, personalize recommendations, and maintain seamless 
                performance across all platforms.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600/30">
                  <div className="flex items-center mb-3">
                    <FaStar className="text-yellow-200 mr-3" />
                    <h3 className="font-medium">Essential Cookies</h3>
                  </div>
                  <p className="text-gray-200 text-sm">
                    The backbone of your experience - these ensure proper functionality, security, and core features.
                  </p>
                </div>
                <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600/30">
                  <div className="flex items-center mb-3">
                    <FaFilm className="text-blue-400 mr-3" />
                    <h3 className="font-medium">Performance Cookies</h3>
                  </div>
                  <p className="text-gray-200 text-sm">
                    Our backstage crew - these help us optimize loading times and technical performance.
                  </p>
                </div>
                <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600/30">
                  <div className="flex items-center mb-3">
                    <FaTheaterMasks className="text-purple-400 mr-3" />
                    <h3 className="font-medium">Preference Cookies</h3>
                  </div>
                  <p className="text-gray-200 text-sm">
                    Your personal director - remembers language, region, and display preferences.
                  </p>
                </div>
                <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600/30">
                  <div className="flex items-center mb-3">
                    <FaVideo className="text-pink-400 mr-3" />
                    <h3 className="font-medium">Marketing Cookies</h3>
                  </div>
                  <p className="text-gray-200 text-sm">
                    Our spotlight operators - help deliver relevant promotions and content recommendations.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={slideUp} className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-0.5 bg-yellow-300 mr-4"></div>
                <h2 className="text-2xl font-semibold tracking-wide text-primary-color">DATA INTEGRITY</h2>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We implement industry-standard security measures to protect all collected data. 
                Our cookie practices comply with global privacy regulations including GDPR and CCPA.
              </p>
              <div className="bg-gray-700/30 p-6 rounded-xl border border-gray-600/20">
                <h3 className="font-medium mb-3 text-primary-color">Third-Party Services</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Select partners may set cookies through our platform for analytics and advertising purposes. 
                  These are governed by their respective privacy policies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-600/30 rounded-full text-xs text-gray-300">Google Analytics</span>
                  <span className="px-3 py-1 bg-gray-600/30 rounded-full text-xs text-gray-300">Facebook Pixel</span>
                  <span className="px-3 py-1 bg-gray-600/30 rounded-full text-xs text-gray-300">Amazon Ad System</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={slideUp}>
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-8 rounded-xl border border-gray-600/30">
                <div className="max-w-2xl mx-auto text-center">
                  <h2 className="text-2xl font-semibold mb-4 text-primary-color">Your Control Center</h2>
                  <p className="text-gray-300 mb-6">
                    You have full control over your cookie preferences. Adjust settings anytime through our preference center.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center">
                    <Link 
                      to="/privacy" 
                      className="px-6 py-3 bg-transparent hover:bg-gray-700 border border-gray-600 rounded-lg font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
                    >
                      Full Privacy Policy
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Premium Cookie Consent Banner */}
      {showConsentBanner && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={cookieAnimation ? { 
            opacity: 0, 
            y: 20,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
          } : { 
            opacity: 1, 
            y: 0,
            transition: { type: "spring", damping: 25, stiffness: 120 }
          }}
          className="fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-lg shadow-2xl border-t border-gray-700/50 z-50"
        >
          <div className="max-w-7xl mx-auto px-4 py-5 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start">
                <motion.div 
                  animate={cookieAnimation ? { 
                    scale: [1, 1.2, 0],
                    opacity: [1, 1, 0],
                    transition: { duration: 0.6 }
                  } : {}}
                  className="mr-4 mt-1"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-sm"></div>
                    <FaCookieBite className="relative text-2xl text-yellow-400" />
                  </div>
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Privacy Preferences</h3>
                  <p className="text-sm text-gray-200 max-w-2xl">
                    We use cookies to deliver premium entertainment experiences. By accepting, you agree to our use of cookies for content personalization, analytics, and advertising.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
                <button
                  onClick={handleRejectCookies}
                  className="px-5 py-2.5 bg-transparent hover:bg-gray-700 border border-gray-600 rounded-lg text-sm font-medium transition-all hover:shadow-md"
                >
                  Customize
                </button>
                <button
                  onClick={handleAcceptCookies}
                  className="px-5 py-2.5 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 rounded-lg text-sm font-medium text-gray-900 hover:shadow-lg transition-all transform hover:scale-[1.02]"
                >
                  Accept All
                </button>
              </div>
              <button
                onClick={() => setShowConsentBanner(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-colors"
              >
                <IoMdClose className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}