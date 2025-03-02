import { motion } from "framer-motion";
import {
  FaMusic,
  FaRecordVinyl,
  FaHandsHelping,
  FaUsers,
} from "react-icons/fa";
import Suede from "../assets/Suede.jpg";
import Ishmael from "../assets/Team/ishmael.jpg";
import Frank from "../assets/Team/Frank.jpg";
import Mark from "../assets/Team/Mark.jpg";
import Isaac from "../assets/Team/Isaac.jpg";

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
        className="max-w-7xl mx-auto text-center sm:text-justify mb-16"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-gray-400 mb-6">
          About Suede Entertainment
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 shadow-lg shadow-primary-color p-3 md:p-5 lg:p-7 ">
          Suede Entertainment is a dynamic and multifaceted entertainment
          company that has established itself as a powerhouse in the music and
          entertainment industry. Specializing in record label operations,
          artist management, music and film production, and event organization,
          Suede Entertainment is dedicated to discovering, nurturing, and
          promoting talented artists across a wide range of genres. With a
          passion for creativity and innovation, the company provides the
          resources, guidance, and platforms necessary for artists to build
          successful and enduring careers in the competitive world of
          entertainment
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
          <h2 className="text-3xl sm:text-4xl  font-bold text-gray-400 text-center md:text-justify">
            Our Mission
          </h2>
          <p className="text-xl text-gray-300 shadow-lg  shadow-primary-color p-2 md:p-4 lg:p-6">
            Suede Entertainment's mission is to empower artists and creators by
            providing them with the tools, opportunities, and support they need
            to thrive in the global entertainment industry. The company is
            committed to producing high-quality music and film content,
            fostering artistic growth, and delivering exceptional entertainment
            experiences that resonate with audiences worldwide. By combining
            creativity, professionalism, and innovation, Suede Entertainment
            aims to elevate its artists and projects to new heights of success.
          </p>
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
            Learn More
          </button>
        </motion.div>
        <motion.div variants={fadeIn} className="relative">
          <img
            src={Suede}
            alt="Team working together"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute -inset-4 bg-yellow-100 opacity-20 rounded-lg blur-lg"></div>
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
          Core Services
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Record Label Card */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-300 p-8 rounded-lg hover:shadow-primary-color hover:shadow-xl transition duration-300"
          >
            <FaRecordVinyl className="w-12 h-12 text-gray-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Record Label Operations
            </h3>
            <p className="text-gray-900">
              As a record label, we produce, distribute, and promote
              high-quality music, partnering with artistes to create impactful
              projects that reach diverse audiences. From studio recordings to
              digital releases, we provide full support to help artistes achieve
              their musical ambitions.
            </p>
          </motion.div>

          {/* Music and Film Card */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-300 p-8 rounded-lg shadow-lg hover:shadow-xl hover:shadow-primary-color transition duration-300"
          >
            <FaHandsHelping className="w-12 h-12 text-gray-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Artist Management
            </h3>
            <p className="text-gray-900">
              Our artist management division offers career development,
              branding, marketing, bookings, and contract negotiations. With
              personalized support and strategic planning, we empower artistes
              to maximize their potential and build successful, lasting careers.
            </p>
          </motion.div>

          {/* Music and film Card */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-300 p-8 rounded-lg shadow-lg hover:shadow-xl transition hover:shadow-primary-color duration-300"
          >
            <FaMusic className="w-12 h-12 text-gray-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Music and Film Production
            </h3>
            <p className="text-gray-900">
              In music and film production, we create high-quality content,
              collaborating with industry professionals on studio recordings,
              music videos, and films — delivering captivating projects that
              resonate with audiences.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Panelist Section */}
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
          Meet Our Panelists
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Panelist 1 */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-300 p-6 rounded-lg shadow-lg hover:shadow-primary-color hover:shadow-xl transition duration-300"
          >
            <img
              src={Ishmael}
              alt="Team Member 1"
              className="size-36 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Ishmael Opoku-Acheampong{" "}
            </h3>
            <p className="text-gray-800">
              Known as Diojo — is the CEO of Suede Entertainment, a Creative
              Director, musician, life coach, and entrepreneur. He leads with
              passion, turning dreams into reality and
            </p>
          </motion.div>

          {/* Panelist 2 */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-300 p-6 rounded-lg shadow-lg  hover:shadow-primary-color hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={Frank}
              alt="Team Member 2"
              className="size-36 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Frank K. Harrison
            </h3>
            <p className="text-gray-800">
              An innovative entrepreneur in music, business, and real estate,
              co-founder of Trust Music Entertainment, and West Africa lead for
              Paradise Worldwide, driving global partnerships and luxury
              investments.
            </p>
          </motion.div>

          {/* Panelist 3 */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-primary-color transition-shadow duration-300"
          >
            <img
              src={Mark}
              alt="Team Member 3"
              className="size-36 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Gyau Oppong Mark
            </h3>
            <p className="text-gray-800">
              Known as Mac Hamlet — is a keyboardist, music producer, and CEO of
              PL Studio Ltd. Signed to Lynx Entertainment, he’s performed on
              major stages like VGMA, 3Music Awards, and AfroNation.
            </p>
          </motion.div>

          {/* Team Member 4 */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-300 p-6 rounded-lg shadow-lg  hover:shadow-primary-color hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={Isaac}
              alt="Team Member 4"
              className="size-36 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Isaac Sackey Sackitey
            </h3>
            <p className="text-gray-800">
              Known as Bolest — is a software engineer, creative thinker, and
              tech innovator. He builds impactful digital solutions, blending
              technology with creativity to inspire and drive innovation
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
