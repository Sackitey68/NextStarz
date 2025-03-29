import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLock, FaShieldAlt, FaUserLock, FaChevronDown } from "react-icons/fa";

const PrivacyPolicy = () => {
  const [expandedSections, setExpandedSections] = useState({
    introduction: true,
    collection: false,
    usage: false,
    sharing: false,
    rights: false,
    children: false,
    contact: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sectionVariants = {
    open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
    collapsed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-200">
      {/* Header with Animation */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full mb-4">
          <FaLock className="text-3xl" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-400 mb-2 bg-clip-text">
          Your Privacy Matters
        </h1>
        <p className="text-lg text-gray-200">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </motion.div>

      {/* Fun Intro */}
      <div className="bg-white/10 rounded-xl p-6 mb-8 border border-purple-500/20">
        <p className="text-lg text-center">
          We take privacy as seriously as we take talent. This isn't legalese -
          it's our promise to protect your info while you shine!
        </p>
      </div>

      {/* Interactive Sections */}
      <div className="space-y-4">
        {/* Introduction */}
        <motion.div
          className="bg-white/10 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-colors"
          initial={false}
          animate={expandedSections.introduction ? "open" : "collapsed"}
        >
          <button
            onClick={() => toggleSection("introduction")}
            className="w-full flex justify-between items-center p-6 text-left"
          >
            <div className="flex items-center">
              <div className="bg-white/10 p-3 rounded-full mr-4">
                <FaShieldAlt className="text-hover-color" />
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-200">
                The Basics
              </h2>
            </div>
            <motion.div
              animate={{ rotate: expandedSections.introduction ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaChevronDown className="text-purple-300" />
            </motion.div>
          </button>

          <motion.div variants={sectionVariants} className="px-6 pb-6">
            <p className="mb-4">
              NextStarz operates this talent extravaganza! We collect some info
              to make your experience stellar while keeping your data under lock
              and key.
            </p>
            <div className="bg-white/10 p-4 rounded-lg border border-hover-color">
              <p className="text-blue-300 font-medium">
                Using our platform means you're cool with these privacy
                practices. No boring fine print - just transparency!
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Data Collection */}
        <motion.div
          className="bg-white/10 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-colors"
          initial={false}
          animate={expandedSections.collection ? "open" : "collapsed"}
        >
          <button
            onClick={() => toggleSection("collection")}
            className="w-full flex justify-between items-center p-6 text-left"
          >
            <div className="flex items-center">
              <div className="bg-white/10 p-3 rounded-full mr-4">
                <FaUserLock className="text-hover-color" />
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-300">
                What We Collect
              </h2>
            </div>
            <motion.div
              animate={{ rotate: expandedSections.collection ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaChevronDown className="text-blue-300" />
            </motion.div>
          </button>

          <motion.div variants={sectionVariants} className="px-6 pb-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-700/50 p-4 rounded-lg">
                <h3 className="font-semibold text-hover-color mb-2">
                  For Your Account
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-hover-color mr-2">•</span>
                    Name & contact info
                  </li>
                  <li className="flex items-start">
                    <span className="text-hover-color mr-2">•</span>
                    Country of Origin
                  </li>
                  <li className="flex items-start">
                    <span className="text-hover-color mr-2">•</span>
                    Payment details (encrypted!)
                  </li>
                </ul>
              </div>

              <div className="bg-gray-700/50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-300 mb-2">
                  For Your Performance
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Talent videos
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Category preferences
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    professionalism
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-gray-700/30 p-4 rounded-lg border-l-4 border-yellow-400">
              <p className="text-yellow-200 text-sm">
                <span className="font-bold">Note:</span> We use cookies to make
                the site work smoothly - check out our{" "}
                <Link to="/cookies" className="underline hover:text-yellow-300">
                  Cookie Policy
                </Link>{" "}
                for the tasty details!
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Data Usage */}
        <motion.div
          className="bg-white/10 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-colors"
          initial={false}
          animate={expandedSections.usage ? "open" : "collapsed"}
        >
          <button
            onClick={() => toggleSection("usage")}
            className="w-full flex justify-between items-center p-6 text-left"
          >
            <div className="flex items-center">
              <div className="bg-green-500/10 p-3 rounded-full mr-4">
                <FaShieldAlt className="text-green-400" />
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                How We Use It
              </h2>
            </div>
            <motion.div
              animate={{ rotate: expandedSections.usage ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaChevronDown className="text-green-300" />
            </motion.div>
          </button>

          <motion.div variants={sectionVariants} className="px-6 pb-6">
            <div className="bg-gray-700/20 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-green-300 mb-2">
                Making Your Experience Awesome
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-green-500/20 text-green-400 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                    1
                  </span>
                  <span>Running the competition and showcasing talent</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500/20 text-green-400 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                    2
                  </span>
                  <span>Improving our platform based on how you use it</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500/20 text-green-400 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                    3
                  </span>
                  <span>Sending important updates (no spam, we promise!)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 p-4 rounded-lg border border-hover-color">
              <p className="text-blue-300">
                <span className="font-semibold">Marketing?</span> Only with your
                explicit opt-in - we respect your inbox like we respect talent!
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Your Rights */}
        <motion.div
          className="bg-white/10 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-colors"
          initial={false}
          animate={expandedSections.rights ? "open" : "collapsed"}
        >
          <button
            onClick={() => toggleSection("rights")}
            className="w-full flex justify-between items-center p-6 text-left"
          >
            <div className="flex items-center">
              <div className="bg-yellow-500/10 p-3 rounded-full mr-4">
                <FaUserLock className="text-yellow-400" />
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                Your Superpowers
              </h2>
            </div>
            <motion.div
              animate={{ rotate: expandedSections.rights ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaChevronDown className="text-yellow-300" />
            </motion.div>
          </button>

          <motion.div variants={sectionVariants} className="px-6 pb-6">
            <p className="mb-4">
              You control your data like you control your performance! Here's
              what you can do:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-yellow-900/10 p-4 rounded-lg border border-yellow-500/20">
                <h3 className="font-semibold text-yellow-300 mb-2">
                  Access & Update
                </h3>
                <p className="text-sm">
                  View or edit your info anytime.
                </p>
              </div>

              <div className="bg-yellow-900/10 p-4 rounded-lg border border-yellow-500/20">
                <h3 className="font-semibold text-yellow-300 mb-2">
                  Delete Account
                </h3>
                <p className="text-sm">
                  Remove your data completely (except what we must keep for
                  legal reasons)
                </p>
              </div>

              <div className="bg-yellow-900/10 p-4 rounded-lg border border-yellow-500/20">
                <h3 className="font-semibold text-yellow-300 mb-2">
                  Data Export
                </h3>
                <p className="text-sm">
                  Request a copy of all your data in a portable format
                </p>
              </div>

              <div className="bg-yellow-900/10 p-4 rounded-lg border border-yellow-500/20">
                <h3 className="font-semibold text-yellow-300 mb-2">Opt-Out</h3>
                <p className="text-sm">
                  Unsubscribe from marketing with one click
                </p>
              </div>
            </div>

            <div className="mt-6 bg-gray-700/30 p-4 rounded-lg">
              <p className="text-sm">
                To exercise these rights, email us at{" "}
                <Link
                  to="mailto:info.nextstarz@gmail.com"
                  className="text-hover-color hover:underline"
                >
                  info.nextstarz@gmail.com
                </Link>{" "}
                - we'll respond faster than a standing ovation!
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="bg-white/10 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-colors"
          initial={false}
          animate={expandedSections.contact ? "open" : "collapsed"}
        >
          <button
            onClick={() => toggleSection("contact")}
            className="w-full flex justify-between items-center p-6 text-left"
          >
            <div className="flex items-center">
              <div className="bg-pink-500/10 p-3 rounded-full mr-4">
                <FaShieldAlt className="text-pink-400" />
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                Need Help?
              </h2>
            </div>
            <motion.div
              animate={{ rotate: expandedSections.contact ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaChevronDown className="text-pink-300" />
            </motion.div>
          </button>

          <motion.div variants={sectionVariants} className="px-6 pb-6">
            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-white mb-3">
                Privacy Team
              </h3>
              <p className="mb-4">
                We're here to answer any questions about your data!
              </p>
              <div className="space-y-2">
                <p>
                  <Link
                    to="mailto:info.nextstarz@gmail.com"
                    className="text-hover-color hover:underline font-medium"
                  >
                    info.nextstarz@gmail.com
                  </Link>
                </p>
                <p>15 Sapele Cl, GC-136-5844</p>
                <p>+233 534 886 377</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Fun Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-12 text-center text-sm text-gray-400"
      >
        <p>
          Now go show the world your talent - we've got your back (and your
          data)!
        </p>
        <p className="mt-2">🌟🎤✨</p>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
