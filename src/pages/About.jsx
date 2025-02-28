import { motion } from "framer-motion";
import { FaLightbulb, FaHandsHelping, FaUsers } from "react-icons/fa";
import Suede from "../assets/Suede.jpg";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section className="bg-bg-color py-10 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-400 mb-6">
          About Us
        </h1>
        <p className="text-lg sm:text-xl text-gray-300">
          Suede Entertainment is a dynamic and multifaceted entertainment company that has established itself as a powerhouse in the music and entertainment industry. Specializing in record label operations, artist management, music and film production, and event organization, Suede Entertainment is dedicated to discovering, nurturing, and promoting talented artists across a wide range of genres. With a passion for creativity and innovation, the company provides the resources, guidance, and platforms necessary for artists to build successful and enduring careers in the competitive world of entertainment
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
      >
        <motion.div variants={fadeInUp} className="space-y-6">
          <h2 className="text-3xl sm:text-4xl  font-bold text-gray-400">
            Our Mission
          </h2>
          <p className="text-lg  text-gray-300">
            Our mission is to deliver exceptional value to our clients by
            providing innovative, reliable, and scalable solutions. We strive to
            create a positive impact in the world through our work.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
            Learn More
          </button>
        </motion.div>
        <motion.div variants={fadeIn} className="relative">
          <img
            src={Suede}
            alt="Team working together"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute -inset-4 bg-blue-600 opacity-20 rounded-lg blur-lg"></div>
        </motion.div>
      </motion.div>

      {/* Values Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl sm:text-4xl font-bold text-gray-400 mb-12"
        >
          Our Core Values
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Innovation Card */}
          <motion.div
            variants={fadeInUp}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <FaLightbulb className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
            <p className="text-gray-600">
              We embrace creativity and continuously seek new ways to solve
              problems and improve our solutions.
            </p>
          </motion.div>

          {/* Collaboration Card */}
          <motion.div
            variants={fadeInUp}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <FaHandsHelping className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Collaboration
            </h3>
            <p className="text-gray-600">
              We believe in the power of teamwork and work closely with our
              clients to achieve shared success.
            </p>
          </motion.div>

          {/* Integrity Card */}
          <motion.div
            variants={fadeInUp}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <FaUsers className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Integrity</h3>
            <p className="text-gray-600">
              We are committed to honesty, transparency, and ethical practices
              in everything we do.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto text-center"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl sm:text-4xl font-bold text-gray-400 mb-12"
        >
          Meet Our Team
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Team Member 1 */}
          <motion.div
            variants={fadeInUp}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Team Member 1"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Dr Kwame</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </motion.div>

          {/* Team Member 2 */}
          <motion.div
            variants={fadeInUp}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Team Member 2"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">John Smith</h3>
            <p className="text-gray-600">CTO</p>
          </motion.div>

          {/* Team Member 3 */}
          <motion.div
            variants={fadeInUp}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Team Member 3"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Emily Clark
            </h3>
            <p className="text-gray-600">Marketing Director</p>
          </motion.div>

          {/* Team Member 4 */}
          <motion.div
            variants={fadeInUp}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Team Member 4"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Michael Brown
            </h3>
            <p className="text-gray-600">Lead Developer</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
