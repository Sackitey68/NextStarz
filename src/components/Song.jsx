import { FaSpotify, FaHeadphonesAlt, FaMusic } from "react-icons/fa";
import { motion } from "framer-motion";
import AudiomackIcon from "../assets/icons/audiomack.svg";
import BoomplayIcon from "../assets/icons/boomplay.svg";
import DiojoImage from "../assets/Diojo.jpg"; // Make sure this path is correct

export default function Song() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      y: -5,
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
      transition: { duration: 0.3 },
    },
  };

  // Streaming platform links
  const streamingLinks = [
    {
      platform: "Spotify",
      icon: <FaSpotify className="text-2xl text-green-500" />,
      link: "https://open.spotify.com/album/79Q5DIDdBhrlQMgXmGoJvh?si=SPYNVkADRmyqI9XKBZhV_g&nd=1&dlsi=c4809e32b71c4fab",
      color: "hover:bg-green-500/10",
      bg: "bg-green-500/5",
    },
    {
      platform: "Audiomack",
      icon: <img src={AudiomackIcon} alt="Audiomack" className="w-6 h-6" />,
      link: "https://audiomack.com/diojoofsuede/song/shine-like-a-star?share-user-id=19582793",
      color: "hover:bg-orange-500/10",
      bg: "bg-orange-500/5",
    },
    {
      platform: "Boomplay",
      icon: <img src={BoomplayIcon} alt="Boomplay" className="w-6 h-6" />,
      link: "https://www.boomplay.com/albums/107800315",
      color: "hover:bg-blue-500/10",
      bg: "bg-blue-500/5",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 my-24">
      {/* Header with animated music notes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 relative"
      >
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-full max-w-xs h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent blur-sm"></div>
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-4">
          🎵 Soundtrack 🎵
        </h2>
       
      </motion.div>

      {/* Main card with layered gradients */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* Background gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-gray-900 to-cyan-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-cyan-500/10"></div>
        
        {/* Album header section with Diojo image */}
        <div className="relative h-96 flex items-center justify-center overflow-hidden">
          {/* Diojo image with gradient overlay */}
          <div className="absolute inset-0">
            <img 
              src={DiojoImage} 
              alt="Diojo" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/70 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-cyan-900/30"></div>
          </div>
          
          {/* Animated floating music notes */}
          <div className="absolute inset-0 flex justify-between px-8 py-12 opacity-20">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
                className="text-2xl"
              >
                {i % 2 === 0 ? "🎵" : "🎶"}
              </motion.div>
            ))}
          </div>
          
          <div className="relative z-10 text-center p-6">
            <motion.h3 
              className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Shine Like a Star
            </motion.h3>
            <motion.p 
              className="text-2xl text-cyan-300 font-medium drop-shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              By Diojo
            </motion.p>
          </div>
        </div>

        {/* Content section */}
        <div className="relative p-8 backdrop-blur-sm bg-gray-900/30">
          <motion.p 
            className="text-gray-300 text-center mb-8 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Listen to the official soundtrack for NextStarz Season 1
          </motion.p>

          {/* Streaming platforms */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            variants={containerVariants}
          >
            {streamingLinks.map((platform, index) => (
              <motion.a
                key={index}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover="hover"
                className={`flex items-center gap-4 p-5 rounded-xl ${platform.bg} border border-gray-700/50 ${platform.color} transition-all duration-300 backdrop-blur-sm`}
              >
                <div className="bg-gray-900/30 p-3 rounded-lg backdrop-blur-sm">
                  {platform.icon}
                </div>
                <span className="text-lg font-semibold text-gray-100">
                  {platform.platform}
                </span>
              </motion.a>
            ))}
          </motion.div>


          <motion.p 
            className="text-gray-400 text-center mt-8 flex items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <FaHeadphonesAlt className="text-cyan-400 animate-pulse" />
            <span>Click any platform to start streaming</span>
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}