import { useState } from "react";
import { motion } from "framer-motion";

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

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsError(false);
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20 w-full max-w-md"
      >
        {/* Toggle Between Login and Registration */}
        <div className="flex justify-center space-x-6 mb-8">
          <button
            onClick={() => setIsLogin(true)}
            className={`text-lg font-semibold ${
              isLogin ? "text-blue-600" : "text-gray-500"
            } hover:text-blue-600 transition-colors duration-300`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`text-lg font-semibold ${
              !isLogin ? "text-blue-600" : "text-gray-500"
            } hover:text-blue-600 transition-colors duration-300`}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={staggerContainer}
          className="space-y-6"
        >
          {/* Email Field */}
          <motion.div variants={fadeInUp} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              required
            />
          </motion.div>

          {/* Password Field */}
          <motion.div variants={fadeInUp} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              required
            />
          </motion.div>

          {/* Registration Fields (Only for Register) */}
          {!isLogin && (
            <>
              <motion.div variants={fadeInUp} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  required
                />
              </motion.div>
              <motion.div variants={fadeInUp} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  required
                />
              </motion.div>
            </>
          )}

          {/* Submit Button */}
          <motion.div variants={fadeInUp} className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </motion.div>

          {/* Success/Error Message */}
          {isSubmitted && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg"
            >
              {isLogin ? "Login successful!" : "Registration successful!"}
            </motion.div>
          )}
          {isError && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg"
            >
              {isLogin
                ? "Login failed. Please try again."
                : "Registration failed. Please try again."}
            </motion.div>
          )}
        </motion.form>
      </motion.div>
    </div>
  );
}
