import { motion } from "framer-motion";
import Suede from "../assets/Suede.jpg";
import Ishmael from "../assets/Team/ishmael.jpg";
import Sherifa from "../assets/Team/Sherifa.jpg";
import Kalsoume from "../assets/Team/Kalsoume.jpg";
import Dorcas from "../assets/Team/Dorcas.jpg";
import Nicolas from "../assets/Team/Nicolas.jpg";
import { useNavigate } from "react-router-dom"; 

const About = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgba(192, 132, 252, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  // Split judges into two groups: first 3 and last 2
  const firstRowJudges = [
    {
      id: 1,
      name: "Ishmael Opoku-Acheampong",
      role: "CEO - Suede Entertainment",
      image: Ishmael,
      bio: "Visionary leader, creative director, musician, and entrepreneur who turns dreams into reality.",
    },
    {
      id: 2,
      name: "Sherifa Gunu",
      role: "Afro-Soul Diva",
      image: Sherifa,
      bio: "Renowned musician blending traditional African rhythms with modern sounds.",
    },
    {
      id: 3,
      name: "Kalsoume Sinare",
      role: "Ghana's Screen Queen",
      image: Kalsoume,
      bio: "Veteran actress with over 30 years in film and television.",
    }
  ];

  const secondRowJudges = [
    {
      id: 4,
      name: "Dorcas Agyeiwaa",
      role: "The Vocal Powerhouse",
      image: Dorcas,
      bio: "Multi-talented vocalist, songwriter, and media personality redefining artistic excellence.",
    },
    {
      id: 5,
      name: "Nicholas Amoako",
      role: "The Entertainer",
      image: Nicolas,
      bio: "Multi-talented artist and influencer shaping the future of entertainment.",
    }
  ];

  return (
    <div className="min-h-screen bg-bg-color text-white">
        <title>About Us | Suede Entertainment</title>
        <meta
          name="description"
          content="Discover Suede Entertainment - A powerhouse in music and entertainment industry"
        />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
              variants={itemVariants}
            >
              About Suede Entertainment
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800"
              variants={itemVariants}
            >
              A dynamic entertainment powerhouse specializing in record label
              operations, artist management, music/film production, and event
              organization. We discover, nurture, and promote exceptional talent
              across all genres.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                To empower artists with the tools, opportunities, and support
                needed to thrive globally. We're committed to producing
                exceptional content, fostering artistic growth, and delivering
                unforgettable entertainment experiences.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold rounded-lg text-lg transition-all duration-300 shadow-lg"
                onClick={() => navigate('/contact')}
              >
                Connect With Us
              </motion.button>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="relative"
              whileHover={{ scale: 1.01 }}
            >
              <img
                src={Suede}
                alt="Suede Entertainment Team"
                className="rounded-xl shadow-2xl w-full h-auto border border-gray-800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent rounded-xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Core Services
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: "🎵",
                title: "Record Label",
                description:
                  "Full-service label operations including production, distribution, and promotion. We help artists create impactful projects that reach global audiences through both digital and physical releases.",
              },
              {
                icon: "🌟",
                title: "Artist Management",
                description:
                  "Comprehensive career development including branding, marketing, bookings, and contract negotiations. We provide strategic planning to help artists maximize their potential and build lasting careers.",
              },
              {
                icon: "🎬",
                title: "Music & Film Production",
                description:
                  "High-quality content creation with industry professionals. From studio recordings to music videos and films, we deliver captivating projects that resonate with diverse audiences.",
              },
              {
                icon: "🎪",
                title: "Event Organization",
                description:
                  "Excels in organizing and executing a wide range of entertainment events, including concerts, festivals, brand activations, and exclusive industry showcases. We deliver unforgettable experiences meticulously planned to perfection.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 transition-all duration-300 hover:border-cyan-500/30"
              >
                <div className="text-5xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-200">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-center">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Judges Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Meet Our Judges
          </motion.h2>

          {/* First Row - 3 Judges */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12"
          >
            {firstRowJudges.map((judge) => (
              <motion.div
                key={judge.id}
                variants={itemVariants}
                whileHover="hover"
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden transition-all duration-300 hover:border-purple-500/30"
              >
                <div className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <motion.img
                      src={judge.image}
                      alt={judge.name}
                      className="w-full h-full rounded-full object-cover border-2 border-cyan-500/50"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 rounded-full border-2 border-transparent hover:border-purple-500/50 transition-all duration-300"></div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-200">
                      {judge.name}
                    </h3>
                    <p className="text-cyan-400 font-medium mb-4">
                      {judge.role}
                    </p>
                    <p className="text-gray-300">{judge.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Second Row - 2 Judges (Centered) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto"
          >
            {secondRowJudges.map((judge) => (
              <motion.div
                key={judge.id}
                variants={itemVariants}
                whileHover="hover"
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden transition-all duration-300 hover:border-purple-500/30"
              >
                <div className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <motion.img
                      src={judge.image}
                      alt={judge.name}
                      className="w-full h-full rounded-full object-cover border-2 border-cyan-500/50"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 rounded-full border-2 border-transparent hover:border-purple-500/50 transition-all duration-300"></div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-200">
                      {judge.name}
                    </h3>
                    <p className="text-cyan-400 font-medium mb-4">
                      {judge.role}
                    </p>
                    <p className="text-gray-300">{judge.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you're an artist seeking exposure or have the talent but
              aren't sure where to start, we'd love to hear from you!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold rounded-lg text-lg transition-all duration-300 shadow-lg"
              onClick={() => navigate('/contact')}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;