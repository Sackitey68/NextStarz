import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaMicrophoneAlt, FaStar, FaAward, FaUserTie } from "react-icons/fa";
import Ishmael from "../assets/Team/ishmael.jpg";
import Nicolas from "../assets/Team/Nicolas.jpg";
import Anggie from "../assets/Team/Anggie.jpg";
import Dorcas from "../assets/Team/Dorcas.jpg";

const Judges = () => {
  const navigate = useNavigate();

  const judges = [
    {
      id: 1,
      name: "Ishmael Opoku-Acheampong",
      role: "CEO of Suede Entertainment",
      image: Ishmael,
      bio: "Widely known as Diojo. A powerhouse of creativity and inspiration. As the visionary CEO of Suede Entertainment, Diojo leads with passion and innovation. He's a multifaceted talent: a trailblazing Creative Director, a professional musician with an unmatched ear for melody, a transformative life coach empowering others to thrive, and a savvy entrepreneur with a knack for turning dreams into reality. Diojo doesn't just wear many hats; he redefines them, leaving a legacy of brilliance wherever he goes.",
      expertise: [
        "Music Production",
        "Artist Development",
        "Stage Performance",
      ],
      icon: <FaUserTie className="text-purple-400" />,
    },
    {
      id: 4,
      name: "Dorcas Agyeiwaa",
      role: "Professional Musician",
      image: Dorcas,
      bio: "Known as AJ Truth, is a multi-octave vocalist, songwriter, entrepreneur, and media personality. With years of experience performing alongside top musicians in Ghana's music industry, she has graced prestigious stages and worked with multi-genre bands. As a panelist on NextStarz, she brings her industry expertise to mentor rising talents. Her background as a TV host and reality show panelist further cements her influence in the entertainment world. Passionate and dynamic, AJ Truth is redefining artistry and excellence.",
      expertise: ["Vocal Performance", "Songwriting", "Media Presentation"],
      icon: <FaMicrophoneAlt className="text-blue-400" />,
    },
    {
      id: 2,
      name: "Nicholas Amoako",
      role: "Professional Musician",
      image: Nicolas,
      bio: "Widely known in the showbiz industry as Phewcha. A multi-talented musician, songwriter, actor, and social media influencer. With a deep passion for creativity and entertainment, he captivates audiences with his artistry, versatility, and engaging presence. His ability to blend music, storytelling, and digital influence has earned him a loyal following, making him a standout figure in the industry. Through his dedication and innovation, Phewcha continues to inspire, entertain, and shape the future of entertainment.",
      expertise: ["Performance Art", "Digital Influence", "Entertainment"],
      icon: <FaStar className="text-yellow-400" />,
    },
    {
      id: 3,
      name: "Anggie Wood",
      role: "Professional Musician",
      image: Anggie,
      bio: "A versatile and vibrant Ghanaian musician, songwriter, and influencer, currently making waves on social media with her exceptional craft. Known for her keen eye for talent, she has captivated audiences with her unique sound, engaging performances, and dynamic presence. Her passion for music and entertainment shines through her work, inspiring a new generation of artists. With a growing fan base and an undeniable stage presence, Anggie Wood continues to redefine the music scene in Ghana and beyond.",
      expertise: ["Artist Development", "Stage Presence", "Music Innovation"],
      icon: <FaAward className="text-pink-400" />,
    },
  ];

  // Enhanced animations with WAAPI-compatible easing
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

  const judgeVariants = {
    hidden: { y: 50, opacity: 0, rotate: -3 },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        duration: 0.8,
      },
    },
    hover: {
      y: -10,
      scale: 1.03,
      boxShadow: "0 25px 50px -12px rgba(192, 132, 252, 0.25)",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen  text-white py-12 px-4 sm:px-6 lg:px-8 w-full">
      <title>Meet Our Judges | NextStarz</title>
      <meta
        name="description"
        content="Meet the industry experts judging the NextStarz competition"
      />

      {/* Hero Section */}
      <motion.div
        className="text-center mb-16 w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={titleVariants}>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
            whileHover={{ scale: 1.01 }}
          >
            Meet The NextStarz Judges
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          variants={fadeIn}
        >
          These entertainment legends will be guiding, critiquing, and
          discovering the next big star!
        </motion.p>
      </motion.div>

      {/* Full-width Judges Grid */}
      <div className="w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-0"
        >
          {judges.map((judge) => (
            <motion.div
              key={judge.id}
              variants={judgeVariants}
              whileHover="hover"
              className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col mx-2"
            >
              <div className="p-8 flex-1 flex flex-col">
                {/* Judge Image */}
                <motion.div
                  className="relative group mb-6"
                  variants={imageVariants}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 blur-md transition-all duration-500"></div>
                  <motion.img
                    src={judge.image}
                    alt={judge.name}
                    className="relative w-40 h-40 mx-auto rounded-full object-cover border-4 border-gray-700 group-hover:border-purple-500 z-10 transition-all duration-300"
                    whileHover="hover"
                  />
                </motion.div>

                {/* Judge Info */}
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-3">
                    <div className="text-2xl">{judge.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {judge.name}
                  </h3>
                  <p className="text-gray-300 font-medium mb-4">{judge.role}</p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {judge.expertise.map((item, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-700 text-gray-200 px-3 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-gray-300 text-center">{judge.bio}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        className="mt-24 text-center w-full max-w-6xl mx-auto"
      >
        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-10 rounded-2xl border border-gray-700 shadow-2xl">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300"
            whileHover={{ scale: 1.01 }}
          >
            Ready to Impress Our Judges?
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 mb-8 leading-relaxed"
            variants={fadeIn}
          >
            Our panel is looking for raw talent, unique artistry, and that
            special "it" factor. Bring your A-game and you might just become the
            next star they discover!
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
              onClick={() => navigate("/auditions")}
              className="px-10 py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-full text-lg transition-all duration-300"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.98 }}
            >
              Learn About Auditions
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Judges;
