import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaMusic,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaInfoCircle,
} from "react-icons/fa";

const Auditions = () => {
  const navigate = useNavigate();

  const auditionInfo = {
    categories: [
      {
        id: 1,
        title: "Singing",
        icon: "🎤",
        description: "Showcase your vocal talent across any genre",
        color: "from-purple-900/30 to-blue-900/30",
      },
      {
        id: 2,
        title: "Rapping",
        icon: "🎙️",
        description: "Demonstrate your lyrical flow and rap skills",
        color: "from-purple-900/30 to-blue-900/30",
      },
      {
        id: 3,
        title: "Reggae-Dancehall",
        icon: "🎵",
        description: "Bring the Caribbean vibes with your performance",
        color: "from-purple-900/30 to-blue-900/30",
      },
    ],
    requirements: [
      "You must be between 18 and 45 years old",
      "Attach a clear full picture to your audition form",
      "Come with a good attitude and positive energy",
      "Dress artistically to show your style",
      "All auditions will take place at the designated venue",
    ],
    dates: [
      {
        type: "In-Person",
        city: "Labone - Accra",
        date: "Friday, August 8 - Sunday, August 17 2025",
        venue: "Class Media Group Headquarters",
        emoji: "🏛️",
        time: "7:00 AM daily",
        procedure: "In-person auditions at the venue",
        highlight: "Meet our panel of judges in person",
      },
    ],
  };

  // Enhanced animation configs
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
    hover: {
      y: -8,
      scale: 1.03,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const staggerItems = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <title>Auditions | NextStarz</title>
      <meta
        name="description"
        content="Join NextStarz auditions - Your path to stardom starts here!"
      />

      {/* Hero Section with Parallax Effect */}
      <motion.section
        className="text-center mb-20 relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 -z-10"></div>
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300"
          whileHover={{ scale: 1.02 }}
        >
          NextStarz Auditions 2025
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
          variants={fadeIn}
        >
          Showcase your talent to our panel of judges through in-person auditions at the Class Media Group Headquarters in Labone, Accra.
        </motion.p>

        <motion.div className="mt-10" variants={fadeIn}>
          <motion.button
            onClick={() => navigate("/register")}
            className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-full text-lg transition-all duration-300 shadow-xl hover:shadow-blue-500/30 relative overflow-hidden group"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.5)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Register Now</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Categories Section */}
      <motion.section className="mb-24 max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          variants={fadeIn}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Talent Categories
          </span>{" "}
          🎭
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerItems}
        >
          {auditionInfo.categories.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              whileHover="hover"
              className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl border border-white/10 hover:border-white/30 shadow-lg hover:shadow-xl transition-all h-full flex flex-col`}
            >
              <div className="text-center mb-4 text-5xl">{category.icon}</div>
              <h3 className="text-xl font-bold text-center mb-3 text-white">
                {category.title}
              </h3>
              <p className="text-gray-100 text-center flex-grow">
                {category.description}
              </p>
              <motion.div
                className="mt-4 text-center"
                whileHover={{ scale: 1.05 }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Requirements Section */}
      <motion.section className="mb-24 max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          variants={fadeIn}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Audition Requirements
          </span>{" "}

        </motion.h2>

        <motion.div
          className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-lg"
          variants={fadeIn}
          whileHover={{ scale: 1.01 }}
        >
          <motion.ul className="space-y-4" variants={staggerItems}>
            {auditionInfo.requirements.map((req, index) => (
              <motion.li
                key={index}
                variants={listItem}
                className="flex items-start bg-gray-700/30 p-4 rounded-lg hover:bg-gray-700/50 transition-colors"
                whileHover={{ x: 5 }}
              >
                <FaCheckCircle className="text-hover-color mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-100">{req}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="mt-8 bg-blue-900/20 p-4 rounded-lg border border-blue-700/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-start">
              <FaInfoCircle className="text-blue-300 mr-3 mt-1" />
              <p className="text-blue-100">
                <strong>Note:</strong> All auditions will take place at the Class Media Group Headquarters in Labone, Accra from August 8-17, 2025 starting at 7:00 AM daily.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Dates Section */}
      <motion.section className="mb-24 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          variants={fadeIn}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Audition Details
          </span>{" "}
          📅
        </motion.h2>

        <div className="grid grid-cols-1 gap-8">
          {auditionInfo.dates.map((location, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-8 rounded-2xl border border-purple-700/30 shadow-xl"
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{location.emoji}</span>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {location.type} Audition
                  </h3>
                  <p className="text-gray-300">{location.city}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <FaCalendarAlt className="text-gray-300 mr-3 mt-1" />
                  <p className="text-gray-100">
                    <strong>Date:</strong> {location.date}
                  </p>
                </div>

                {location.venue && (
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-gray-300 mr-3 mt-1" />
                    <p className="text-gray-100">
                      <strong>Venue:</strong> {location.venue}
                    </p>
                  </div>
                )}

                <div className="flex items-start">
                  <FaClock className="text-gray-300 mr-3 mt-1" />
                  <p className="text-gray-100">
                    <strong>Time:</strong> {location.time}
                  </p>
                </div>

                <div className="flex items-start">
                  <FaMusic className="text-gray-300 mr-3 mt-1" />
                  <p className="text-gray-100">
                    <strong>Procedure:</strong> {location.procedure}
                  </p>
                </div>

                <div className="mt-6 p-4 bg-black/20 rounded-lg border border-white/10">
                  <p className="text-gray-200 italic">
                    ✨ {location.highlight}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Added NB Note */}
        <motion.div
          variants={fadeIn}
          className="mt-12 bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6 rounded-2xl border border-purple-700/30 shadow-lg"
          whileHover={{ scale: 1.01 }}
        >
          <div className="flex items-center">
            <span className="text-2xl mr-4">ℹ️</span>
            <p className="text-gray-200">
              <strong>Important Note:</strong> There are no online auditions this year. All auditions must be done in person at the Class Media Group Headquarters in Labone, Accra.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section className="text-center mb-16" variants={fadeIn}>
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 p-12 rounded-2xl border border-gray-700 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 -z-10"></div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300"
            whileHover={{ scale: 1.01 }}
          >
            Get Ready To Show Your Talent Now!
          </motion.h2>

          <motion.p
            className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed"
            whileHover={{ scale: 1.005 }}
          >
            Join talented individuals competing for the chance to become the next big star at our in-person auditions!
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              onClick={() => navigate("/register")}
              className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-full text-lg transition-all duration-300 shadow-xl hover:shadow-blue-500/30"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Register Now
            </motion.button>

            <motion.button
              onClick={() => navigate("/faq")}
              className="px-10 py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-full text-lg transition-all duration-300"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.98 }}
            >
              Have Questions?
            </motion.button>
          </div>

          <motion.p
            className="mt-8 text-gray-400 text-sm"
            whileHover={{ scale: 1.005 }}
          >
            Auditions run from August 8-17, 2025 at Class Media Group Headquarters in Labone, Accra
          </motion.p>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Auditions;