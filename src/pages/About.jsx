import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaStar,
  FaTrophy,
  FaCalendarAlt,
  FaUsers,
  FaVoteYea,
  FaMagic,
  FaMicrophoneAlt,
} from "react-icons/fa";

const About = () => {
  const navigate = useNavigate();

  // Animation variants
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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
    hover: {
      y: -10,
      scale: 1.03,
      boxShadow: "0 20px 25px -5px rgba(192, 132, 252, 0.3)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8 ">
      <title>🌟 About NextStarz | Ghana's Premier Talent Show 🌟</title>
      <meta
        name="description"
        content="Discover NextStarz - Ghana's most exciting music and performance competition brought to you by Class Media Group and Suede Entertainment"
      />

      {/* Sparkly Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16 relative">
        <motion.div
          className="absolute -top-8 -left-8 w-16 h-16 bg-yellow-400 rounded-full filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-4 -right-4 w-20 h-20 bg-purple-400 rounded-full filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About NextStarz
        </motion.h1>
        <motion.p
          className="text-xl text-gray-200 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Ghana's most electrifying music and performance competition, where raw
          talent meets stardom!
        </motion.p>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <motion.div
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-700 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">
                The Ultimate Talent Showdown
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  The Ghanaian entertainment scene is set for a major shake-up
                  with NextStarz - a high-energy music and performance-based
                  competition aimed at unearthing Ghana's next big stars.
                </p>
                <p>
                  This initiative is a collaborative effort between Suede
                  Entertainment and Class Media Group (CMG), bringing together
                  industry expertise and media power to create an unforgettable
                  platform for emerging talent.
                </p>
                <p>
                  Over 13 action-packed episodes, 21 selected contestants will
                  be mentored, trained, and judged by Ghana's finest
                  entertainment experts, culminating in one being crowned "The
                  Next Big Star".
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl p-1">
                <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-800/50 flex items-center justify-center">
                    <div className="text-center p-8">
                      <FaStar className="text-6xl text-yellow-400 mx-auto mb-4 animate-pulse" />
                      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">
                        Grand Prize Package
                      </h3>
                      <p className="text-3xl font-bold text-white mt-2">
                        GHC 300,000
                      </p>
                      <p className="text-gray-300 mt-4">
                        Includes record deal, music video production, media
                        airplay, and high-level industry exposure
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-500 rounded-full filter blur-xl opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-cyan-500 rounded-full filter blur-xl opacity-30"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Unique Features Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What Makes NextStarz Special
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              icon: <FaVoteYea className="text-4xl text-pink-400" />,
              title: "Audience Power",
              description:
                "You control 70% of the voting results each week! This is truly Ghana's choice competition where fans decide who stays and who goes.",
              color: "from-pink-500/10 to-pink-900/10",
            },
            {
              icon: <FaMagic className="text-4xl text-purple-400" />,
              title: "Golden Card",
              description:
                "Our mysterious Super Judge holds the power to save one contestant from elimination each week with the exclusive Golden Card.",
              color: "from-purple-500/10 to-purple-900/10",
            },
            {
              icon: <FaTrophy className="text-4xl text-yellow-400" />,
              title: "Life-Changing Prize",
              description:
                "The winner receives a comprehensive GHC 300,000 package designed to launch their career to stardom.",
              color: "from-yellow-500/10 to-yellow-900/10",
            },
            {
              icon: <FaCalendarAlt className="text-4xl text-blue-400" />,
              title: "13 Epic Episodes",
              description:
                "From explosive auditions to the grand finale, follow the journey through 13 must-watch episodes airing weekly on CTV.",
              color: "from-blue-500/10 to-blue-900/10",
            },
            {
              icon: <FaUsers className="text-4xl text-cyan-400" />,
              title: "21 Talented Contestants",
              description:
                "Only the best 21 will enter the competition house after nationwide auditions, living together while honing their craft.",
              color: "from-cyan-500/10 to-cyan-900/10",
            },
            {
              icon: <FaStar className="text-4xl text-amber-400" />,
              title: "Industry Mentorship",
              description:
                "Contestants receive guidance from Ghana's top entertainment professionals throughout the competition.",
              color: "from-amber-500/10 to-amber-900/10",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className={`bg-gradient-to-br ${feature.color} rounded-2xl border border-gray-700 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20`}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-center mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Competition Journey
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {[
            {
              date: "Now - August 8",
              title: "Registration Period",
              description:
                "Online via www.thenextstarz.com/register or offline at any CMG radio station nationwide.",
              icon: <FaUsers className="text-2xl" />,
            },
            {
              date: "August 8-17",
              title: "Auditions",
              description:
                "Held at CMG Headquarters in Labone, Accra. Selected contestants proceed to orientation.",
              icon: <FaMicrophoneAlt className="text-2xl" />,
            },
            {
              date: "August 29",
              title: "Official Launch Show",
              description:
                "Contestants will be outdoored and full program calendar announced.",
              icon: <FaCalendarAlt className="text-2xl" />,
            },
            {
              date: "September 7",
              title: "First Episode Airs",
              description:
                "8pm on CTV, running weekly every Sunday until the Grand Finale.",
              icon: <FaStar className="text-2xl" />,
            },
            {
              date: "December 7",
              title: "Grand Finale",
              description:
                "Ticketed event where one contestant will be crowned 'The Next Big Star'.",
              icon: <FaTrophy className="text-2xl" />,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 rounded-xl border border-gray-700 p-5 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="bg-purple-600/80 p-3 rounded-lg text-white">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Sparkly CTA Section */}
      <motion.div
        className="max-w-4xl mx-auto text-center mt-20 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="absolute -top-10 left-1/4 w-12 h-12 bg-pink-400 rounded-full filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-5 right-1/4 w-16 h-16 bg-yellow-400 rounded-full filter blur-xl opacity-20 animate-pulse delay-1000"></div>

        <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-400">
          Ready to Become the Next Star? 🌟
        </h2>
        <div className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 space-y-4">
          <p>NextStarz is open to all Ghanaians between 18 and 45 years old.</p>
          <p>
            Registration involves a GHS 100 non-refundable fee (online via
            Paystack or offline via cash/MTN MoMo).
          </p>
          <p>
            Auditions run from August 8-17 at CMG Headquarters in Labone, Accra.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-pink-500/30 flex items-center gap-2 mx-auto"
            onClick={() => navigate("/register")}
          >
            <FaStar className="animate-pulse" />
            Register Online
          </motion.button>
        </div>
        <p className="text-gray-400 mt-6 text-sm">
          Don't miss your chance to shine! Auditions close August 8, 2025 ⏳
        </p>
      </motion.div>
    </div>
  );
};

export default About;
