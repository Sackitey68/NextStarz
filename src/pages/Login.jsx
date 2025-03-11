import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/firebase"; // Ensure Firebase is initialized
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple, FaArrowLeft } from "react-icons/fa"; // Added Apple and Back icons

// Import your images for the slider
import Image1 from "../assets/slider1.jpg";
import Image2 from "../assets/slider2.jpg";
import Image3 from "../assets/slider3.jpg";
import Image4 from "../assets/slider4.jpg";

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
  const [errorMessage, setErrorMessage] = useState("");
  const [showEmailForm, setShowEmailForm] = useState(false); // Toggle email/password form
  const [user, setUser] = useState(null); // Track user authentication state
  const navigate = useNavigate(); // Initialize useNavigate

  // Track authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Set user if logged in
      } else {
        setUser(null); // Clear user if logged out
      }
    });

    return () => unsubscribe(); // Cleanup subscription
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      if (isLogin) {
        // Login with email and password
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        // Register with email and password
        await createUserWithEmailAndPassword(auth, email, password);
      }
      setIsSubmitted(true);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.message);
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setIsSubmitted(true);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.message);
    }
  };

  // Handle Facebook login
  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setIsSubmitted(true);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.message);
    }
  };

  // Handle Apple login (Placeholder for now)
  const handleAppleLogin = async () => {
    alert("Apple login is not implemented yet.");
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
      navigate("/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  // Swiper settings
  const swiperSettings = {
    modules: [Autoplay, Pagination],
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
      el: ".swiper-pagination",
      renderBullet: (index, className) => {
        return `<span class="${className} bg-white opacity-50 hover:opacity-100 transition-opacity duration-300"></span>`;
      },
    },
  };

  return (
    <div className="bg-bg-color to-purple-50 min-h-screen flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl">
        {/* Login/Register Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white/10 backdrop-blur-lg transition-all duration-300 p-8 border border-white/20 rounded-tl-lg rounded-bl-lg relative"
        >
          {/* Fancy Back Arrow (Visible when email form is shown) */}
          {showEmailForm && (
            <motion.div
              variants={fadeInUp}
              className="absolute top-4 left-4 cursor-pointer"
              onClick={() => setShowEmailForm(false)}
            >
              <FaArrowLeft className="text-gray-300 w-8 h-8 hover:text-gray-400 transition-colors duration-300" />
            </motion.div>
          )}

          {/* Form Title */}
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-300">
            SIGN UP OR LOGIN TO NEXTSTARZ
          </h2>

          {/* Social Login Buttons */}
          {!showEmailForm && (
            <motion.div
              variants={staggerContainer}
              className="space-y-4 max-w-md mx-auto" // Centered and max width
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeInUp} className="text-center">
                <button
                  onClick={handleGoogleLogin}
                  className="w-full px-8 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <FcGoogle className="w-6 h-6" />
                  <span className="text-sm text-gray-700">
                    Continue with Google
                  </span>
                </button>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <button
                  onClick={handleFacebookLogin}
                  className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <FaFacebook className="w-6 h-6" />
                  <span className="text-sm">Continue with Facebook</span>
                </button>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <button
                  onClick={handleAppleLogin}
                  className="w-full px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <FaApple className="w-6 h-6" />
                  <span className="text-sm">Continue with Apple</span>
                </button>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <button
                  onClick={() => setShowEmailForm(true)}
                  className="w-full px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-300"
                >
                  Continue with Email
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* Email/Password Form */}
          <AnimatePresence>
            {showEmailForm && (
              <motion.form
                onSubmit={handleSubmit}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="space-y-6 max-w-md mx-auto" // Centered and max width
              >
                {/* Email Field */}
                <motion.div variants={fadeInUp} className="space-y-2">
                  <label className="block text-md font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white/5 focus:outline-none focus:ring-primary-color focus:border-yellow-300 placeholder-gray-400 border-gray-300 rounded-lg focus:ring-2 transition-all duration-300"
                    required
                  />
                </motion.div>

                {/* Password Field */}
                <motion.div variants={fadeInUp} className="space-y-2">
                  <label className="block text-md font-medium text-gray-300">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 bg-white/5 focus:outline-none focus:ring-primary-color focus:border-yellow-300 placeholder-gray-400 border-gray-300 rounded-lg focus:ring-2 transition-all duration-300"
                    required
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={fadeInUp} className="text-center">
                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    {isLogin ? "Login" : "Sign Up"}
                  </button>
                </motion.div>
              </motion.form>
            )}
          </AnimatePresence>

          {/* Success Message with Musical Emojis and Animated Button */}
          {isSubmitted && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="mt-4 p-4 bg-green-600 text-gray-100 rounded-lg flex flex-col items-center justify-center space-y-4"
            >
              <div className="flex items-center space-x-2">
                <span role="img" aria-label="star" className="text-2xl">
                  🌟
                </span>
                <span
                  role="img"
                  aria-label="musical notes"
                  className="text-2xl"
                >
                  🎶
                </span>
                <span role="img" aria-label="star" className="text-2xl">
                  🌟
                </span>
              </div>
              <p className="text-center">Login Successful!</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/uploaddemo")}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Go to Upload Demo
              </motion.button>
            </motion.div>
          )}

          {/* Error Message with Animated Frown Emoji */}
          {isError && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="mt-4 p-4 bg-red-600 text-gray-100 rounded-lg flex items-center justify-center space-x-2"
            >
              <span role="img" aria-label="frown" className="animate-bounce">
                😞
              </span>
              <span>{errorMessage}</span>
            </motion.div>
          )}
        </motion.div>

        {/* Image Slider */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="hidden md:block relative"
        >
          <Swiper {...swiperSettings} className="h-full">
            <SwiperSlide>
              <img
                src={Image1}
                alt="Slide 1"
                className="w-full h-full object-cover rounded-tr-lg rounded-br-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Image2}
                alt="Slide 2"
                className="w-full h-full object-cover rounded-tr-lg rounded-br-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Image3}
                alt="Slide 3"
                className="w-full h-full object-cover rounded-tr-lg rounded-br-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Image4}
                alt="Slide 4"
                className="w-full h-full object-cover rounded-tr-lg rounded-br-lg"
              />
            </SwiperSlide>
          </Swiper>
          {/* Custom Pagination */}
          <div className="swiper-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10"></div>
        </motion.div>
      </div>

      {/* Logout Button at the Bottom-Right Corner (Visible after successful login) */}
      {user && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="fixed bottom-4 right-4"
        >
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition-colors duration-300 flex items-center space-x-2"
          >
            <span role="img" aria-label="logout" className="text-lg">
              Logout
            </span>
          </button>
        </motion.div>
      )}
    </div>
  );
}
