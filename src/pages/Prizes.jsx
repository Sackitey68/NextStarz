import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaTrophy,
  FaCertificate,
  FaMicrophone,
  FaGlobe,
  FaCashRegister,
  FaMedal,
  FaPlane,
  FaRecordVinyl,
} from "react-icons/fa";

export default function Prizes() {
  const navigate = useNavigate();

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

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  const prizeTiers = [
    {
      title: "🥇 Grand Prize Winner",
      subtitle: "The Next Big Star",
      icon: <FaTrophy className="text-yellow-400 text-4xl" />,
      items: [
        {
          icon: <FaRecordVinyl className="text-yellow-300" />,
          text: "Exclusive management deal with Suede Entertainment",
        },
        {
          icon: <FaRecordVinyl className="text-yellow-300" />,
          text: "Full recording and production of a debut album",
        },
        {
          icon: <FaGlobe className="text-yellow-300" />,
          text: "Worldwide album distribution via Lynx Distribution",
        },
        {
          icon: <FaCashRegister className="text-yellow-300" />,
          text: "Cash Prize of GHS 10,000.00",
        },
        {
          icon: <FaMicrophone className="text-yellow-300" />,
          text: "Extensive media exposure",
        },
        {
          icon: <FaPlane className="text-yellow-300" />,
          text: "Fully sponsored trip to Dubai",
        },
      ],
      bg: "bg-gradient-to-br from-yellow-900/10 to-amber-900/10",
      border: "border-yellow-500/30",
    },
    {
      title: "🥈 1st Runner-Up",
      subtitle: "Exceptional Talent",
      icon: <FaMedal className="text-gray-300 text-4xl" />,
      items: [
        {
          icon: <FaRecordVinyl className="text-gray-300" />,
          text: "Single production deal with Suede Entertainment",
        },
        {
          icon: <FaGlobe className="text-gray-300" />,
          text: "Worldwide single distribution via Lynx Distribution",
        },
        {
          icon: <FaCashRegister className="text-gray-300" />,
          text: "Cash Prize of GHS 6,000.00",
        },
        {
          icon: <FaMicrophone className="text-gray-300" />,
          text: "Media coverage to increase exposure",
        },
      ],
      bg: "bg-gradient-to-br from-gray-800/10 to-gray-900/10",
      border: "border-gray-500/30",
    },
    {
      title: "🥉 2nd Runner-Up",
      subtitle: "Rising Star",
      icon: <FaMedal className="text-amber-600 text-4xl" />,
      items: [
        {
          icon: <FaRecordVinyl className="text-amber-300" />,
          text: "Single production deal with Suede Entertainment",
        },
        {
          icon: <FaGlobe className="text-amber-300" />,
          text: "Worldwide single distribution via Lynx Distribution",
        },
        {
          icon: <FaCashRegister className="text-amber-300" />,
          text: "Cash Prize of GHS 4,000.00",
        },
        {
          icon: <FaMicrophone className="text-amber-300" />,
          text: "Media coverage to enhance public recognition",
        },
      ],
      bg: "bg-gradient-to-br from-amber-900/10 to-amber-800/10",
      border: "border-amber-500/30",
    },
  ];

  const certificates = [
    {
      title: "Certificate of Participation",
      icon: <FaCertificate className="text-blue-400 text-3xl" />,
      description:
        "Awarded to all contestants who enter and complete the audition process",
      bg: "bg-gradient-to-br from-blue-900/10 to-blue-800/10",
      border: "border-blue-500/30",
    },
    {
      title: "Special Recognition Certificate",
      icon: <FaCertificate className="text-purple-400 text-3xl" />,
      description:
        "Given to winners and runners-up for their outstanding performances",
      bg: "bg-gradient-to-br from-purple-900/10 to-purple-800/10",
      border: "border-purple-500/30",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <title>Prizes | Win Recording Deals & GHS 10,000 Cash</title>
      <meta
        name="description"
        content="Discover amazing prizes for NextStarz Talent Hunt 2025 winners - recording contracts with Suede Entertainment, GHS 10,000 cash prize, music equipment, and global exposure for singers, dancers & comedians in Ghana."
      />

      {/* Hero Section */}
      <motion.div className="text-center mb-16 max-w-4xl mx-auto">
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-400"
          variants={fadeIn}
        >
          Awards & Recognition – NextStarz Season 1
        </motion.h1>
        <motion.p className="text-xl text-gray-300" variants={fadeIn}>
          Celebrating talent, rewarding excellence, and providing life-changing
          opportunities.
        </motion.p>
      </motion.div>

      {/* Certificates Section */}
      <motion.section className="mb-20 max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3"
          variants={fadeIn}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Certificates of Recognition
          </span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className={`${cert.bg} p-8 rounded-xl border ${cert.border} shadow-lg hover:shadow-xl transition-all h-full`}
            >
              <div className="flex items-center mb-6">
                {cert.icon}
                <h3 className="text-2xl font-bold ml-4">{cert.title}</h3>
              </div>
              <p className="text-gray-300">{cert.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Grand Prizes Section */}
      <motion.section className="mb-20 max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3"
          variants={fadeIn}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-400">
            Grand Prizes & Rewards
          </span>
        </motion.h2>

        <motion.div className="space-y-6" variants={containerVariants}>
          {prizeTiers.map((prize, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className={`${prize.bg} p-8 rounded-xl border ${prize.border} shadow-lg hover:shadow-xl transition-all`}
            >
              <div className="flex items-center mb-6">
                {prize.icon}
                <div className="ml-4">
                  <h3 className="text-2xl font-bold">{prize.title}</h3>
                  <p className="text-gray-300">{prize.subtitle}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {prize.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-3 mt-1">{item.icon}</span>
                    <span className="text-gray-300">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Special Opportunity Section */}
      <motion.section className="mb-20 max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3"
          variants={fadeIn}
        >
          <FaMicrophone className="text-purple-400" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Special Opportunity
          </span>
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 p-8 rounded-xl border border-purple-500/30 shadow-lg hover:shadow-xl transition-all"
        >
          <h3 className="text-2xl font-bold mb-4 text-purple-300">
            For Evictees With Potential
          </h3>
          <p className="text-gray-300 mb-6">
            Contestants who do not make it to the final round but display
            remarkable potential will receive:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <FaRecordVinyl className="text-purple-400 mr-3 mt-1" />
              <span className="text-gray-300">
                Single recording and production by Suede Entertainment
              </span>
            </li>
            <li className="flex items-start">
              <FaGlobe className="text-purple-400 mr-3 mt-1" />
              <span className="text-gray-300">
                Worldwide single distribution via Lynx Distribution
              </span>
            </li>
          </ul>
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="max-w-4xl mx-auto" variants={fadeIn}>
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 rounded-xl border border-gray-700 shadow-xl">
          <motion.h2
            className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300"
            whileHover={{ scale: 1.01 }}
          >
            Your Journey Starts Here!
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 mb-8 text-center"
            variants={fadeIn}
          >
            NextStarz is not just a talent hunt—it's a force, a movement, and
            the future of music discovery.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              variants={itemVariants}
              className="bg-gray-800/30 p-6 rounded-lg border border-blue-500/30 hover:border-blue-400/50 transition-all"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <FaCashRegister className="text-blue-400" />
                Registration Details
              </h3>
              <div className="space-y-2 text-gray-300">
                <p>
                  <span className="font-bold">Opens:</span> April 5, 2025
                </p>
                <p>
                  <span className="font-bold">Closes:</span> June 5, 2025
                </p>
                <p>
                  <span className="font-bold">Fee:</span> GHS 100 (via Paystack)
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gray-800/30 p-6 rounded-lg border border-purple-500/30 hover:border-purple-400/50 transition-all"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <FaMicrophone className="text-purple-400" />
                Audition Schedule
              </h3>
              <div className="space-y-2 text-gray-300">
                <p>
                  <span className="font-bold">🌐 Online:</span> May 29 – June 3,
                  2025
                </p>
                <p>
                  <span className="font-bold">📍 Offline:</span> CeeJay
                  Multimedia, Lapaz, Accra
                </p>
                <p>June 5 – 7, 2025</p>
              </div>
            </motion.div>
          </div>

          <motion.div className="mt-8 text-center">
            <motion.button
              onClick={() => navigate("/register")}
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-full text-lg transition-all duration-300 shadow-xl hover:shadow-blue-500/30"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Register Now
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}
