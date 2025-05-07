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
import Sherifa from "../assets/Team/Sherifa.jpg";
import Kalsoume from "../assets/Team/Kalsoume.jpg";
import Dorcas from "../assets/Team/Dorcas.jpg";
import Nicolas from "../assets/Team/Nicolas.jpg";

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
      name: "Sherifa Gunu",
      role: "Afro-Soul Diva",
      image: Sherifa,
      bio: "Sherifa Gunu is a renowned Afro-soul musician and cultural advocate celebrated for blending traditional African rhythms with modern sounds. Her commanding stage presence and unique vocals have led her to perform with top Ghanaian artists like Sarkodie, Efya, and Kojo Antwi. Through albums such as Dagbon, African Woman, and Kuuku, she promotes unity, empowerment, and pride. Beyond music, Sherifa is a dedicated philanthropist and entrepreneur who uses her influence to champion women's rights and drive community development within Ghana's creative industry.",
      expertise: ["Vocal Performance", "Afro-Soul Music", "Cultural Advocacy"],
      icon: <FaStar className="text-yellow-400" />,
    },
    {
      id: 3,
      name: "Kalsoume Sinare",
      role: "Ghana's Screen Queen",
      image: Kalsoume,
      bio: "Kalsoume Sinare is a veteran Ghanaian actress and former model with over 30 years in film and television. Known for her powerful roles in productions like Babina, Trinity, and Sala, she earned accolades including a Golden Actress award. Starting as a model, she represented Ghana internationally and appeared in major commercials before transitioning to acting in the early 1990s. Her versatility and emotional range made her a household name. Outside acting, Kalsoume is a successful entrepreneur and humanitarian, influencing Ghana's entertainment and beauty industries.",
      expertise: ["Acting", "Modeling", "Film Production"],
      icon: <FaGripfire className="text-blue-400" />,
    },
    {
      id: 4,
      name: "Dorcas Agyeiwaa",
      role: "The Vocal Powerhouse",
      image: Dorcas,
      bio: "Known as AJ Truth, is a multi-octave vocalist, songwriter, entrepreneur, and media personality. With years of experience performing alongside top musicians in Ghana's music industry, she has graced prestigious stages and worked with multi-genre bands. As a panelist on NextStarz, she brings her industry expertise to mentor rising talents. Her background as a TV host and reality show panelist further cements her influence in the entertainment world. Passionate and dynamic, AJ Truth is redefining artistry and excellence.",
      expertise: ["Vocal Performance", "Songwriting", "Media Presentation"],
      icon: <FaMicrophoneAlt className="text-green-400" />,
    },
    {
      id: 5,
      name: "Nicholas Amoako",
      role: "The Entertainer",
      image: Nicolas,
      bio: "Widely known in the showbiz industry as Phewcha. A multi-talented musician, songwriter, actor, and social media influencer. With a deep passion for creativity and entertainment, he captivates audiences with his artistry, versatility, and engaging presence. His ability to blend music, storytelling, and digital influence has earned him a loyal following, making him a standout figure in the industry. Through his dedication and innovation, Phewcha continues to inspire, entertain, and shape the future of entertainment.",
      expertise: ["Performance Art", "Digital Influence", "Entertainment"],
      icon: <FaMusic className="text-pink-400" />,
    },
  ];

  // Split judges into two groups: first 3 and last 2
  const firstRowJudges = judges.slice(0, 3);
  const secondRowJudges = judges.slice(3);

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
          Meet The Dream Team ✨
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

      {/* First Row - 3 Judges */}
      <div className="max-w-7xl mx-auto mb-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {firstRowJudges.map((judge) => (
            <motion.div
              key={judge.id}
              variants={judgeVariants}
              whileHover="hover"
              className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 flex flex-col h-full shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
            >
              {/* Judge Image */}
              <div className="relative pt-10 px-8">
                <motion.div
                  className="relative w-40 h-40 mx-auto rounded-full border-4 border-purple-500 shadow-lg"
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
              <div className="p-6 flex-1 flex flex-col">
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
                <p className="text-gray-300 flex-1 mb-4">{judge.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Second Row - 2 Judges (Centered) */}
      <div className="max-w-5xl mx-auto mb-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {secondRowJudges.map((judge) => (
            <motion.div
              key={judge.id}
              variants={judgeVariants}
              whileHover="hover"
              className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 flex flex-col h-full shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
            >
              {/* Judge Image */}
              <div className="relative pt-10 px-8">
                <motion.div
                  className="relative w-40 h-40 mx-auto rounded-full border-4 border-purple-500 shadow-lg"
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
              <div className="p-6 flex-1 flex flex-col">
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
                <p className="text-gray-300 flex-1 mb-4">{judge.bio}</p>
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
          Apply Now - Auditions Open!
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