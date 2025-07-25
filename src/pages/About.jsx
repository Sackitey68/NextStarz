import { motion } from "framer-motion";
import Suede from "../assets/Suede.jpg";
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

  return (
    <div className="min-h-screen bg-bg-color text-white">
        <title>About NextStarz | CMG & Suede Entertainment</title>
        <meta
          name="description"
          content="Discover NextStarz - Ghana's premier music and performance competition show by Class Media Group and Suede Entertainment"
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
              About NextStarz
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800"
              variants={itemVariants}
            >
              A high-energy music and performance-based competition aimed at unearthing Ghana's next big stars, brought to you by Class Media Group and Suede Entertainment.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Program Overview Section */}
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
                The NextStarz Experience
              </h2>
              <div className="text-lg text-gray-300 bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 space-y-4">
                <p>
                  The Ghanaian entertainment scene is set for a major shake-up with this high-energy music and performance-based competition aimed at unearthing Ghana's next big stars.
                </p>
                <p>
                  Over the course of 13 action-packed episodes, 21 selected contestants will be mentored, trained, and judged by some of Ghana's finest entertainment experts, culminating in one being crowned "The Next Big Star".
                </p>
                <p>
                  What sets NextStarz apart is its audience-driven format. Viewers will have a 70% say in the weekly results, with the remaining 30% coming from our panel of respected judges.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold rounded-lg text-lg transition-all duration-300 shadow-lg"
                onClick={() => navigate('/register')}
              >
                Register Now
              </motion.button>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="relative"
              whileHover={{ scale: 1.01 }}
            >
              <img
                src={Suede}
                alt="NextStarz Competition"
                className="rounded-xl shadow-2xl w-full h-auto border border-gray-800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent rounded-xl"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-gray-900/80 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-cyan-400">Grand Prize: GHC 300,000 Package</h3>
                <p className="text-gray-200">Includes record deal, music video production, media airplay, and industry exposure</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Unique Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Why NextStarz Stands Out
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: "🎤",
                title: "Audience Power",
                description: "Viewers control 70% of the voting results each week, making this truly a people's choice competition.",
              },
              {
                icon: "🃏",
                title: "Golden Card",
                description: "Our mysterious Super Judge can use the Golden Card to save a contestant from elimination.",
              },
              {
                icon: "🏆",
                title: "Life-Changing Prize",
                description: "The winner receives a comprehensive GHC 300,000 package including record deal, music video, and media exposure.",
              },
              {
                icon: "📅",
                title: "13 Epic Episodes",
                description: "From auditions to finale, follow the journey through 13 action-packed episodes airing weekly.",
              },
              {
                icon: "👥",
                title: "21 Talented Contestants",
                description: "Only the best 21 will enter the competition house after nationwide auditions.",
              },
              {
                icon: "🌟",
                title: "Industry Mentorship",
                description: "Contestants receive guidance from Ghana's top entertainment professionals throughout the competition.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 transition-all duration-300 hover:border-cyan-500/30"
              >
                <div className="text-5xl mb-4 text-center">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-200">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Competition Timeline
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {[
              {
                date: "Now - August 7",
                title: "Registration",
                description: "Online via www.thenextstarz.com/register or offline at any CMG radio station nationwide."
              },
              {
                date: "August 8-17",
                title: "Auditions",
                description: "Held at CMG Headquarters in Labone, Accra. Selected contestants proceed to orientation."
              },
              {
                date: "August 29",
                title: "Official Launch Show",
                description: "Contestants will be outdoored and full program calendar announced."
              },
              {
                date: "September 7",
                title: "First Episode Airs",
                description: "8 PM on CTV, running weekly every Sunday until the Grand Finale."
              },
              {
                date: "December 7",
                title: "Grand Finale",
                description: "Ticketed event where one contestant will be crowned 'The Next Big Star'."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 hover:border-purple-500/30 transition-all"
              >
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg p-3 mr-4 min-w-[100px] text-center">
                    <p className="font-bold">{item.date}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-200 mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Registration CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900/30 to-cyan-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Ready to Shine Like a Star?
            </h2>
            <div className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 space-y-4">
              <p>NextStarz is open to Ghanaians between 18 and 45 years old.</p>
              <p>Registration involves a GHS 100 non-refundable fee (online via Paystack or offline via cash/MTN MoMo).</p>
              <p>Auditions run from August 8-17 at CMG Headquarters in Labone, Accra.</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold rounded-lg text-lg transition-all duration-300 shadow-lg"
                onClick={() => navigate('/register')}
              >
                Register Online
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-lg text-lg transition-all duration-300 shadow-lg border border-gray-700"
                onClick={() => navigate('/contact')}
              >
                Contact for Offline Registration
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;