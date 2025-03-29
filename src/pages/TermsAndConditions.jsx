import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFilm, FaStar, FaMusic, FaGamepad } from "react-icons/fa";

const MotionLink = motion.create(Link);

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function TermsAndConditions() {
  const floatingIcons = [
    {
      icon: <FaFilm className="text-purple-400/30" />,
      style: "top-20 left-1/4",
    },
    {
      icon: <FaStar className="text-yellow-400/30" />,
      style: "top-1/3 right-1/5",
    },
    {
      icon: <FaMusic className="text-blue-400/30" />,
      style: "bottom-1/4 left-1/5",
    },
    {
      icon: <FaGamepad className="text-green-400/30" />,
      style: "bottom-20 right-1/4",
    },
  ];

  return (
    <div className="min-h-screen bg-bg-color text-gray-100 relative overflow-hidden">
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute text-6xl ${item.style} z-0`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 0.3,
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <section className="relative z-10">
        {/* Hero Section */}
        <motion.div
          className="relative overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-center relative z-10">
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-6xl font-bold mb-6 text-gray-400"
            >
              NextStarz Talent Hunt Terms
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto"
            >
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </motion.p>
          </div>
        </motion.div>

        {/* Terms Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
        >
          {/* Section 1: Eligibility */}
          <motion.div
            variants={sectionVariants}
            className="mb-16 p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
          >
            <h2 className="text-3xl font-bold mb-6 text-purple-300 flex items-center">
              <span className="bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-gray-900">
                1
              </span>
              Eligibility
            </h2>
            <div className="space-y-4 text-gray-300">
              <ul className="space-y-3 pl-5 list-disc">
                <li>The competition is open to individuals worldwide talented in singing, songwriting, music production, beat-making, instrumental performance, dancing, or comedy.</li>
                <li>Participants must be of sound mind and capable of performing (no age limit).</li>
                <li>Contestants under 18 must have parental/guardian consent.</li>
                <li>Employees of Suede Entertainment, SmartTraders Hub, judges, and their families are ineligible.</li>
              </ul>
            </div>
          </motion.div>

          {/* Section 2: Registration */}
          <motion.div
            variants={sectionVariants}
            className="mb-16 p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-300 flex items-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-gray-900">
                2
              </span>
              Registration
            </h2>
            <div className="space-y-4 text-gray-300">
              <ul className="space-y-3 pl-5 list-disc">
                <li>Registration: April 5 - June 5, 2025.</li>
                <li>GHS 100 non-refundable fee via Paystack.</li>
                <li>Complete the official form and upload audition video.</li>
                <li>Incomplete/false registrations will be disqualified.</li>
              </ul>
            </div>
          </motion.div>

          {/* Section 3: Audition Process */}
          <motion.div
            variants={sectionVariants}
            className="mb-16 p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg hover:shadow-green-500/20 transition-all duration-300"
          >
            <h2 className="text-3xl font-bold mb-6 text-green-300 flex items-center">
              <span className="bg-gradient-to-r from-green-400 to-blue-500 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-gray-900">
                3
              </span>
              Audition & Selection
            </h2>
            <div className="space-y-4 text-gray-300">
              <ul className="space-y-3 pl-5 list-disc">
                <li><strong>Online Auditions:</strong> May 29 - June 3, 2025.</li>
                <li><strong>Offline Auditions:</strong> June 5-7, 2025 at CJ Multimedia, near Ashanti HomeTouch, Lapaz, Accra.</li>
                <li>Judges evaluate based on talent, originality, stage presence, and creativity.</li>
                <li>Selected contestants must be available for further rounds.</li>
                <li>Judges' decisions are final.</li>
              </ul>
            </div>
          </motion.div>

          {/* Section 4: Prizes */}
          <motion.div
            variants={sectionVariants}
            className="mb-16 p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg hover:shadow-yellow-500/20 transition-all duration-300"
          >
            <h2 className="text-3xl font-bold mb-6 text-yellow-300 flex items-center">
              <span className="bg-gradient-to-r from-yellow-400 to-red-500 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-gray-900">
                4
              </span>
              Prizes
            </h2>
            <div className="space-y-4 text-gray-300">
              <h3 className="text-xl font-semibold text-purple-200">Grand Prize Winner:</h3>
              <ul className="space-y-2 pl-5 list-disc mb-4">
                <li>Management deal with Suede Entertainment</li>
                <li>Full album recording & production</li>
                <li>Worldwide distribution via Lynx Distribution</li>
                <li>GHS 10,000 cash prize</li>
                <li>Media exposure</li>
              </ul>

              <h3 className="text-xl font-semibold text-blue-200">1st Runner-Up:</h3>
              <ul className="space-y-2 pl-5 list-disc mb-4">
                <li>Single production deal</li>
                <li>Worldwide single distribution</li>
                <li>GHS 6,000 cash prize</li>
              </ul>

              <h3 className="text-xl font-semibold text-green-200">2nd Runner-Up:</h3>
              <ul className="space-y-2 pl-5 list-disc">
                <li>Single production deal</li>
                <li>Worldwide single distribution</li>
                <li>GHS 4,000 cash prize</li>
              </ul>
            </div>
          </motion.div>

          {/* Section 5: Contact */}
          <motion.div
            variants={sectionVariants}
            className="mb-16 p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
          >
            <h2 className="text-3xl font-bold mb-6 text-pink-300 flex items-center">
              <span className="bg-gradient-to-r from-pink-400 to-red-500 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-gray-900">
                5
              </span>
              Contact
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>For inquiries:</p>
              <div className="mt-4 space-y-2">
                <p className="flex items-center">
                  <span className="text-yellow-400 mr-2">✉️</span>
                  <a href="mailto:info.nextstarz@gmail.com" className="text-blue-300 hover:underline">
                    info.nextstarz@gmail.com
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📞</span>
                  <a href="https://api.whatsapp.com/send?phone=233534886377" className="text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer">
               +233 534 886 377
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}