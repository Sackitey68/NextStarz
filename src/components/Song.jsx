import { FaSpotify, FaHeadphonesAlt, FaMusic, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import AudiomackIcon from "../assets/icons/audiomack.svg";
import BoomplayIcon from "../assets/icons/boomplay.svg";
import DiojoImage from "../assets/Diojo.jpg";

export default function Song() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
    hover: {
      y: -8,
      scale: 1.03,
      transition: { 
        duration: 0.3,
        ease: [0.16, 0.77, 0.47, 0.97]
      },
    },
  };

  // Streaming platform links
  const streamingLinks = [
    {
      platform: "Spotify",
      icon: <FaSpotify className="text-2xl" />,
      link: "https://open.spotify.com/album/79Q5DIDdBhrlQMgXmGoJvh",
      color: "from-green-500 to-green-600",
      textColor: "text-green-400",
    },
    {
      platform: "Audiomack",
      icon: <img src={AudiomackIcon} alt="Audiomack" className="w-6 h-6" />,
      link: "https://audiomack.com/diojoofsuede/song/shine-like-a-star",
      color: "from-orange-500 to-orange-600",
      textColor: "text-orange-400",
    },
    {
      platform: "Boomplay",
      icon: <img src={BoomplayIcon} alt="Boomplay" className="w-6 h-6" />,
      link: "https://www.boomplay.com/albums/107800315",
      color: "from-blue-500 to-blue-600",
      textColor: "text-blue-400",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6">
          <FaMusic className="text-cyan-400 mr-2" />
          <span className="text-lg font-medium text-cyan-100">Official Soundtrack</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 mb-4">
          Shine Like a Star
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          The official soundtrack for NextStarz Season 1 by <span className="text-hover-color">Diojo</span>
        </p>
      </motion.div>

      {/* Album Card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800/50"
      >
        {/* Album Art with Gradient Overlay */}
        <div className="relative h-80 sm:h-96 w-full overflow-hidden">
          <img 
            src={DiojoImage} 
            alt="Diojo - Shine Like a Star" 
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/30 to-transparent" />
          
          {/* Album Info */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
            <motion.h3 
              className="text-3xl sm:text-4xl font-bold text-white mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
            </motion.h3>
            <motion.p 
              className="text-xl text-cyan-300 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
            </motion.p>
          </div>
        </div>

        {/* Streaming Platforms */}
        <div className="bg-gray-900/70 backdrop-blur-sm p-6 sm:p-8">
          <motion.p 
            className="text-center text-gray-300 mb-8 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Available on all major streaming platforms
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
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
                className={`group relative overflow-hidden rounded-xl p-0.5 bg-gradient-to-r ${platform.color}`}
              >
                <div className="relative h-full bg-gray-900/90 backdrop-blur-sm p-5 rounded-[11px] flex flex-col items-center">
                  <div className={`w-14 h-14 rounded-full ${platform.textColor}/10 flex items-center justify-center mb-4`}>
                    <div className={`${platform.textColor} p-3 rounded-full`}>
                      {platform.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {platform.platform}
                  </h3>
                  <div className="flex items-center text-sm text-gray-400 group-hover:text-cyan-300 transition-colors">
                    <span>Stream now</span>
                    <FaExternalLinkAlt className="ml-2 text-xs" />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div 
            className="mt-8 flex items-center justify-center gap-3 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <FaHeadphonesAlt className="text-cyan-400" />
            <span>Click any platform to start listening</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}