import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Auditions = () => {
  const navigate = useNavigate();

  const auditionInfo = {
    categories: [
      {
        id: 1,
        title: "Singer",
        icon: "🎤",
        description: "Showcase your vocal talent across any genre"
      },
      {
        id: 2,
        title: "Songwriter",
        icon: "🎼",
        description: "Present your original compositions and lyrics"
      },
      {
        id: 3,
        title: "Dancer",
        icon: "💃",
        description: "Display your movement artistry and choreography"
      },
      {
        id: 4,
        title: "Comedian",
        icon: "😂",
        description: "Make us laugh with your original comedy routine"
      },
      {
        id: 5,
        title: "Instrumental Player",
        icon: "🎸",
        description: "Demonstrate mastery of any musical instrument"
      },
      {
        id: 6,
        title: "Beat-maker",
        icon: "🥁",
        description: "Show your production and beat creation skills"
      },
      {
        id: 7,
        title: "DJ",
        icon: "🎧",
        description: "Showcase your mixing and turntable skills"
      }
    ],
    requirements: [
      "Age: Unlimited",
      "Upload Video Showcasing Talent",
      "Maximum Duration Of Video 2 Minutes",
      "Bring Your Own Instruments If Required",
      "Positive Attitude And Professionalism"
    ],
    dates: [
      {
        type: "Offline",
        city: "Lapaz - Accra",
        date: "Thursday, June 5 - Saturday, June 7 2025",
        venue: "CeeJay Multimedia",
        emoji: "🏛️",
        time: "10:00 to 16:00 GMT",
        procedure: "In-person auditions at the venue"
      },
      {
        type: "Online",
        city: "Virtual",
        date: "Thursday, May 29 – Tuesday, June 3, 2025",
        emoji: "💻",
        time: "10:00 to 16:00 GMT",
        procedure: "Upload audition video per task given after registration"
      }
    ]
  };

  // Animation configs
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-bg-color text-white py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Hero Section */}
      <motion.section 
        variants={fadeIn}
        className="text-center mb-16"
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-gray-400"
          whileHover={{ scale: 1.02 }}
        >
          NextStarz Auditions
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-200 max-w-3xl mx-auto"
          variants={fadeIn}
        >
          Your journey to stardom begins here! Participate online or offline in Accra.
        </motion.p>
      </motion.section>

      {/* Categories Section */}
      <motion.section className="mb-20">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center text-gray-200"
          variants={fadeIn}
        >
          Talent Categories 🎭
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {auditionInfo.categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white/10 bg-opacity-60 p-6 rounded-xl border border-purple-500/20 hover:border-primary-color transition-all"
            >
              <div className="text-center mb-4 text-5xl">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{category.title}</h3>
              <p className="text-gray-300 text-center">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Requirements Section */}
      <motion.section className="mb-20">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          variants={fadeIn}
        >
          Audition Requirements 📝
        </motion.h2>
        <motion.ul 
          className="max-w-2xl mx-auto bg-white/10 bg-opacity-40 p-6 rounded-xl"
          variants={containerVariants}
        >
          {auditionInfo.requirements.map((req, index) => (
            <motion.li 
              key={index}
              variants={itemVariants}
              className="mb-3 flex items-start"
              whileHover={{ x: 5 }}
            >
              <span className="text-purple-400 mr-2">•</span>
              <span>{req}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>

      {/* Dates Section */}
      <motion.section className="mb-20">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          variants={fadeIn}
        >
          Audition Options 📅
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {auditionInfo.dates.map((location, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className={`bg-white/10 bg-opacity-40 p-6 rounded-xl border ${
                location.type === "Online" 
                  ? "border-blue-500/20 hover:border-blue-500/50" 
                  : "border-purple-500/20 hover:border-purple-500/50"
              } transition-all`}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{location.emoji}</span>
                <div>
                  <h3 className="text-xl font-bold">{location.type} Audition</h3>
                  <p className="text-gray-400">{location.city}</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-gray-300"><strong>📅 Date:</strong> {location.date}</p>
                {location.venue && (
                  <p className="text-gray-300"><strong>📍 Venue:</strong> {location.venue}</p>
                )}
                <p className="text-gray-300"><strong>⏱️ Time:</strong> {location.time}</p>
                <p className="text-gray-300"><strong>📝 Procedure:</strong> {location.procedure}</p>
                {location.type === "Online" && (
                  <p className="text-blue-300 text-sm mt-2">
                    Detailed instructions will be provided after registration
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Added NB Note */}
        <motion.div 
          variants={fadeIn}
          className="mt-8 max-w-4xl mx-auto bg-yellow-900 bg-opacity-20 p-4 rounded-lg border border-yellow-500/30"
        >
          <p className="text-hover-color text-center">
            <strong>NB:</strong> If you missed the registration period, no worries—there will be a chance to register at the audition venue.
          </p>
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="text-center"
        variants={fadeIn}
      >
        <motion.h2 
          className="text-3xl font-bold mb-6"
          whileHover={{ scale: 1.01 }}
        >
          Get Ready To Show Your Talent Now! 
        </motion.h2>
        <motion.p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
        Choose between online auditions from anywhere in the world or in-person auditions in Accra! 🌍🎤✨
        </motion.p>
        <motion.button
          onClick={() => navigate('/register')}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 25px rgba(192, 132, 252, 0.5)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          Register Now 
        </motion.button>
      </motion.section>
    </motion.div>
  );
};

export default Auditions;