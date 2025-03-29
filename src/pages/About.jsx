import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Suede from "../assets/Suede.jpg";
import Ishmael from "../assets/Team/ishmael.jpg";
import Nicolas from "../assets/Team/Nicolas.jpg";
import Anggie from "../assets/Team/Anggie.jpg";
import Dorcas from "../assets/Team/Dorcas.jpg";

const About = () => {
  const navigate = useNavigate();

  // Enhanced animation variants
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

  const itemVariants = {
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

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="min-h-screen bg-bg-color text-white py-8 px-4 sm:px-6 lg:px-8">
      <title>About Us | Suede Entertainment</title>
      <meta
        name="description"
        content="Discover Suede Entertainment - A powerhouse in music and entertainment industry"
      />

      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={titleVariants}
        className="text-center mb-16"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-5 bg-clip-text text-gray-400"
          whileHover={{ scale: 1.02 }}
        >
          About Suede Entertainment
        </motion.h1>
        <motion.p
          className="text-xl text-gray-300 max-w-4xl mx-auto bg-white/10 bg-opacity-60 p-6 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          A dynamic and multifaceted entertainment powerhouse specializing in
          record label operations, artist management, music/film production, and
          event organization. We discover, nurture, and promote exceptional
          talent across all genres of entertainment.
        </motion.p>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
      >
        <motion.div variants={itemVariants} className="space-y-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-400"
            variants={titleVariants}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 bg-white/10 bg-opacity-60 p-6 rounded-xl"
            variants={fadeIn}
          >
            To empower artists with the tools, opportunities, and support needed
            to thrive globally. We're committed to producing exceptional
            content, fostering artistic growth, and delivering unforgettable
            entertainment experiences through creativity and innovation.
          </motion.p>
          <motion.button
            onClick={() => navigate("/contact")}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(192, 132, 252, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Connect With Us
          </motion.button>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="relative"
          whileHover={{ scale: 1.02 }}
        >
          <img
            src={Suede}
            alt="Suede Entertainment Team"
            className="rounded-xl shadow-2xl w-full h-auto"
          />
          <div className="absolute -inset-4 bg-purple-500 opacity-10 rounded-xl blur-lg"></div>
        </motion.div>
      </motion.div>

      {/* Core Services Section */}
      <motion.div className="mb-20">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-400"
          variants={titleVariants}
        >
          Our Core Services
        </motion.h2>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Record Label */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="bg-white/10 bg-opacity-60 rounded-xl overflow-hidden shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 p-6"
          >
            <div className="text-5xl mb-4 text-center">🎵</div>
            <h3 className="text-2xl font-bold text-center mb-4 text-gray-400">
              Record Label
            </h3>
            <p className="text-gray-300">
              Full-service label operations including production, distribution,
              and promotion. We help artists create impactful projects that
              reach global audiences through both digital and physical releases.
            </p>
          </motion.div>

          {/* Artist Management */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="bg-white/10 bg-opacity-60 rounded-xl overflow-hidden shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 p-6"
          >
            <div className="text-5xl mb-4 text-center">🌟</div>
            <h3 className="text-2xl font-bold text-center mb-4 text-gray-400">
              Artist Management
            </h3>
            <p className="text-gray-300">
              Comprehensive career development including branding, marketing,
              bookings, and contract negotiations. We provide strategic planning
              to help artists maximize their potential and build lasting
              careers.
            </p>
          </motion.div>

          {/* Production */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="bg-white/10 bg-opacity-60 rounded-xl overflow-hidden shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 p-6"
          >
            <div className="text-5xl mb-4 text-center">🎬</div>
            <h3 className="text-2xl font-bold text-center mb-4 text-gray-400">
              Music & Film Production
            </h3>
            <p className="text-gray-300">
              High-quality content creation with industry professionals. From
              studio recordings to music videos and films, we deliver
              captivating projects that resonate with diverse audiences.
            </p>
          </motion.div>

          {/* Event Organization */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="bg-white/10 bg-opacity-60 rounded-xl overflow-hidden shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 p-6"
          >
            <div className="text-5xl mb-4 text-center">🎪</div>
            <h3 className="text-2xl font-bold text-center mb-4 text-gray-400">
              Event Organization
            </h3>
            <p className="text-gray-300">
              Excels in organizing and executing a wide range of entertainment
              events, including concerts, festivals, brand activations, and
              exclusive industry showcases. We deliver unforgettable experiences
              meticulously planned to perfection.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Panelists Section */}
      <motion.div className="mb-20">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-400"
          variants={titleVariants}
        >
          Meet Our Judges
        </motion.h2>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            {
              id: 1,
              name: "Ishmael Opoku-Acheampong",
              role: "CEO - Suede Entertainment",
              image: Ishmael,
              bio: "Known as Diojo - Visionary leader, creative director, musician, and entrepreneur who turns dreams into reality.",
            },
            {
              id: 4,
              name: "Dorcas Agyeiwaa",
              role: "Musician",
              image: Dorcas,
              bio: "Known as AJ Truth - Multi-talented vocalist, songwriter, and media personality redefining artistic excellence.",
            },
            {
              id: 2,
              name: "Nicholas Amoako",
              role: "Musician",
              image: Nicolas,
              bio: "Know as Phewcha - Multi-talented artist and influencer shaping the future of entertainment.",
            },
            {
              id: 3,
              name: "Anggie Wood",
              role: "Musician",
              image: Anggie,
              bio: "A versatile and vibrant musician and influencer, currently making waves on social media with her exceptional craft",
            },
          ].map((panelist) => (
            <motion.div
              key={panelist.id}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white/10 bg-opacity-60 rounded-xl overflow-hidden transition-all duration-300"
            >
              <div className="p-6">
                <div className="relative">
                  <motion.img
                    src={panelist.image}
                    alt={panelist.name}
                    className="relative w-32 h-32 mx-auto rounded-full object-cover border-2 border-primary-color"
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-400">
                    {panelist.name}
                  </h3>
                  <p className="text-gray-200 font-medium">{panelist.role}</p>
                </div>
                <div className="mt-6">
                  <p className="text-gray-300 text-center">{panelist.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
        className="mt-20 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-400">
          Ready to Start Your Journey?
        </h2>
        <p className="text-xl text-gray-200 mb-8">
          Whether you're an artist seeking exposure or have the talent but
          aren't sure where to start, we'd love to hear from you!
        </p>
        <motion.button
          onClick={() => navigate("/contact")}
          className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(192, 132, 252, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Get In Touch
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;
