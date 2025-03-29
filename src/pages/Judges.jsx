import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
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
    },
    {
      id: 4,
      name: "Dorcas Agyeiwaa",
      role: "Professional Musician",
      image: Dorcas,
      bio: "Known as AJ Truth, is a multi-octave vocalist, songwriter, entrepreneur, and media personality. With years of experience performing alongside top musicians in Ghana's music industry, she has graced prestigious stages and worked with multi-genre bands. As a panelist on NextStarz, she brings her industry expertise to mentor rising talents. Her background as a TV host and reality show panelist further cements her influence in the entertainment world. Passionate and dynamic, AJ Truth is redefining artistry and excellence.",
    },
    {
      id: 2,
      name: "Nicholas Amoako",
      role: "Professional Musician",
      image: Nicolas,
      bio: "Widely known in the showbiz industry as Phewcha. A multi-talented musician, songwriter, actor, and social media influencer. With a deep passion for creativity and entertainment, he captivates audiences with his artistry, versatility, and engaging presence. His ability to blend music, storytelling, and digital influence has earned him a loyal following, making him a standout figure in the industry. Through his dedication and innovation, Phewcha continues to inspire, entertain, and shape the future of entertainment.",
    },
    {
      id: 3,
      name: "Anggie Wood",
      role: "CEO of PL Studio Ltd",
      image: Anggie,
      bio: "Popularly known as Mac Hamlet, is an accomplished keyboard player, music producer, and the CEO of PL Studio Ltd. Renowned for his exceptional musical skills and his ability to inspire and mentor talent, Mac Hamlet has established himself as a leading figure in the music industry. He is signed to Lynx Entertainment alongside the celebrated AfroHarmony Band and has graced some of the most prestigious stages, including: Vodafone Ghana Music Awards, 3Music Awards, Emy Africa Awards, Afrima Awards, Afrochella, AfroNation.",
    },
  ];

  const handleRegisterClick = () => {
    navigate("/login");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
        delayChildren: 0.4,
      },
    },
  };

  const judgeVariants = {
    hidden: {
      y: 40,
      opacity: 0,
      rotate: -2,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
    hover: {
      y: -15,
      scale: 1.03,
      boxShadow: "0 20px 25px -5px rgba(192, 132, 252, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 150,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "backOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-bg-color text-white py-8 px-4 sm:px-6 lg:px-8">
      <title>Meet Our Judges | NextStarz</title>
      <meta
        name="description"
        content="Meet the amazing judges of NextStarz competition"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={titleVariants}
        className="text-center mb-16"
      >
        <motion.h1 className="text-4xl md:text-6xl font-bold mb-5 bg-clip-text text-gray-400">
          Meet The NextStarz Judges
        </motion.h1>
        <motion.p
          className="text-xl text-gray-200 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          These entertainment legends will be guiding, critiquing, and
          discovering the next big star!
        </motion.p>
      </motion.div>

      {/* Updated Judges Grid - Now spans full viewport width */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 w-full"
      >
        {judges.map((judge) => (
          <motion.div
            key={judge.id}
            variants={judgeVariants}
            whileHover="hover"
            className="bg-gray-800 bg-opacity-60 rounded-xl overflow-hidden shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 h-full flex flex-col"
          >
            <div className="p-6 flex-1 flex flex-col">
              <motion.div className="relative group" variants={imageVariants}>
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"></div>
                <motion.img
                  src={judge.image}
                  alt={judge.name}
                  className="relative w-32 h-32 mx-auto rounded-full object-cover border-2 border-primary-color z-10"
                  whileHover="hover"
                />
              </motion.div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold bg-clip-text text-gray-400">
                  {judge.name}
                </h3>
                <p className="text-gray-200 font-medium">{judge.role}</p>
              </div>
              <motion.div
                className="mt-6 flex-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-gray-300">{judge.bio}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
        className="mt-20 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-300">
          Ready to Impress Them?
        </h2>
        <p className="text-xl text-gray-200 mb-8">
          Our judges are looking for raw talent, unique style, and that special
          "it" factor. Bring your A-game and you might just become the next star
          they discover!
        </p>
        <motion.button
          onClick={handleRegisterClick}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 20px rgba(192, 132, 252, 0.6)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Register Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Judges;