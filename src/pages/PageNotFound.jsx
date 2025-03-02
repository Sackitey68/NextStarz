import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 

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

const scaleUp = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
};

export default function PageNotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center text-gray-400">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="text-center"
      >
        {/* 404 Text */}
        <motion.h1
          variants={fadeInUp}
          className="text-9xl sm:text-[12rem] font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500"
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.p
          variants={fadeInUp}
          className="text-2xl sm:text-3xl font-semibold mb-8"
        >
          Oops! The page you're looking for doesn't exist.
        </motion.p>

        {/* Fun Message */}
        <motion.p
          variants={fadeInUp}
          className="text-lg sm:text-xl text-gray-300 mb-12"
        >
          It looks like you took a wrong turn. Let's get you back to the fun!
        </motion.p>

        {/* Back to Home Button */}
        <motion.div variants={scaleUp}>
          <Link
            to="/" // Use `href="/"` if using Next.js
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-yellow-600 transition-all duration-300"
          >
            Go Back Home
          </Link>
        </motion.div>

        {/* Fun Animation */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 flex justify-center space-x-4"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            🎬
          </motion.div>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            🎤
          </motion.div>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            🎧
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
