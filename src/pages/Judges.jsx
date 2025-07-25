import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaMicrophoneAlt,
  FaStar,
  FaUserTie,
  FaGripfire,
  FaMusic,
} from "react-icons/fa";
import Ishmael from "../assets/Team/ishmael.jpg";
import Dorcas from "../assets/Team/Dorcas.jpg";
import Freeman from "../assets/Team/Coach-Freeman.jpg";
import Ernest from "../assets/Team/Coach-Ernest.jpg";

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
      id: 2,
      name: "Dorcas Agyeiwaa",
      role: "The Vocal Powerhouse",
      image: Dorcas,
      bio: "Known as AJ Truth, is a multi-octave vocalist, songwriter, entrepreneur, and media personality. With years of experience performing alongside top musicians in Ghana's music industry, she has graced prestigious stages and worked with multi-genre bands. As a panelist on NextStarz, she brings her industry expertise to mentor rising talents. Her background as a TV host and reality show panelist further cements her influence in the entertainment world. Passionate and dynamic, AJ Truth is redefining artistry and excellence.",
      expertise: ["Vocal Performance", "Songwriting", "Media Presentation"],
      icon: <FaStar className="text-yellow-400" />,
    },
    {
      id: 3,
      name: "Freeman Daniel Ame",
      role: "Renowned Voice Coach",
      image: Freeman,
      bio: "Known as Coach Freeman, is a celebrated vocal coach, musician, educator, and talent strategist. With decades of experience training top performers across Africa and beyond, he has led voice coaching on every major music reality show in Ghana. He directs Jukebox Studios and lectures at UniMAC, guiding artists and professionals alike. Through corporate voice training and artistic mentorship, Freeman continues to shape voices, elevate talent, and set new standards in vocal excellence.",
      expertise: ["Vocal Coaching", "Talent Development", "Stage Performance"],
      icon: <FaGripfire className="text-blue-400" />,
    },
    {
      id: 4,
      name: "Prince Ernest",
      role: "Renowned Voice Coach",
      image: Ernest,
      bio: "Known as Coach Ernest, is a dynamic vocalist, music director, and performer known for his powerful stage presence and leadership in gospel music. He was the only male Ghanaian representative on Idols West Africa, showcasing his vocal excellence on a continental stage. As music director for Ghana's first Stand in Worship concert featuring Donnie McClurkin, he played a key role in shaping the event's success. Coach Ernest continues to impact lives through music and ministry.",
      expertise: ["Vocal Performance", "Stage Leadership", "Music Direction"],
      icon: <FaMicrophoneAlt className="text-green-400" />,
    },
  ];

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

  const judgeVariants = {
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

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8">
      <title>🌟 Meet Our Judges | NextStarz 🌟</title>
      <meta
        name="description"
        content="Meet the superstar judges who will discover Ghana's next big talent!"
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
          Meet Our Judges ✨
        </motion.h1>
        <motion.p
          className="text-xl text-gray-200 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          These entertainment powerhouses are ready to discover Ghana's next
          superstar! Get to know the experts who will guide, mentor, and judge
          your journey to stardom.
        </motion.p>
      </div>

      {/* Judges Grid - 4 in a 2x2 layout */}
      <div className="max-w-7xl mx-auto mb-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {judges.map((judge) => (
            <motion.div
              key={judge.id}
              variants={judgeVariants}
              whileHover="hover"
              className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 flex flex-col h-full shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Judge Image */}
                <div className="relative w-full md:w-1/3 p-6 flex items-center justify-center">
                  <motion.div
                    className="relative w-40 h-40 rounded-full border-4 border-purple-500 shadow-lg"
                    whileHover="hover"
                    variants={imageVariants}
                  >
                    <img
                      src={judge.image}
                      alt={judge.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                    <div className="absolute -inset-2 rounded-full border-2 border-purple-300 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </motion.div>
                </div>

                {/* Judge Info */}
                <div className="w-full md:w-2/3 p-6 flex flex-col">
                  <div className="text-center mb-4">
                    <div className="flex justify-center mb-2">
                      <div className="text-3xl">{judge.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                      {judge.name}
                    </h3>
                    <p className="text-purple-300 font-medium mt-1">
                      {judge.role}
                    </p>
                  </div>
                  
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {judge.expertise.map((item, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-700/50 text-gray-200 px-3 py-1 rounded-full border border-gray-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Bio */}
                  <p className="text-gray-300 flex-1">{judge.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

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
          Ready to Shine Like a Star? 🌟
        </h2>
        <p className="text-xl text-gray-200 mb-8">
          Our judges are waiting to discover{" "}
          <span className="text-yellow-300 font-semibold">YOU</span>! Register
          now for your shot at stardom and the chance to impress these
          entertainment legends.
        </p>
        <motion.button
          onClick={() => navigate("/register")}
          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-pink-500/30 flex items-center gap-2 mx-auto"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <FaMicrophoneAlt className="animate-pulse" />
          Apply Now
          <FaStar
            className="animate-spin"
            style={{ animationDuration: "3000ms" }}
          />
        </motion.button>

        <p className="text-gray-400 mt-6 text-sm">
          Don't let this golden opportunity slip away! ⏳
        </p>
      </motion.div>
    </div>
  );
};

export default Judges;