import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper styles
import "swiper/css/pagination"; // Pagination styles
import { Autoplay, Pagination } from "swiper/modules";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
// import { auth } from "../firebase"; // Ensure Firebase is initialized
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

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
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Sign Up
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
        const username = e.target.username.value;

        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        // Save additional user details (e.g., username) to Firestore or another database
        const user = userCredential.user;
        console.log("User registered:", user);
        // Example: Save to Firestore
        // await addDoc(collection(db, "users"), {
        //   uid: user.uid,
        //   username,
        //   email,
        // });
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
    <div className="bg-bg-color to-purple-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl">
        {/* Login/Register Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white/10 backdrop-blur-lg transition-all duration-300 p-8 border border-white/20 rounded-tl-lg rounded-bl-lg"
        >
          {/* Form Title */}
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-300">
            {isLogin ? "Login" : "Sign Up"}
          </h2>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={staggerContainer}
            className="space-y-6"
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

            {/* Username Field (Only for Sign Up) */}
            {!isLogin && (
              <motion.div variants={fadeInUp} className="space-y-2">
                <label className="block text-md font-medium text-gray-300">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  className="w-full px-4 py-3 bg-white/5 focus:outline-none focus:ring-primary-color focus:border-yellow-300 placeholder-gray-400 border-gray-300 rounded-lg focus:ring-2 transition-all duration-300"
                  required
                />
              </motion.div>
            )}

            {/* Remember Me and Forgot Password (Only for Login) */}
            {isLogin && (
              <>
                <motion.div
                  variants={fadeInUp}
                  className="flex justify-between items-center"
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      className="w-4 h-4 rounded border-gray-300"
                    />
                    <label className="ml-2 text-sm text-gray-300">
                      Remember Me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-blue-500 hover:text-blue-700"
                  >
                    Forgot Password?
                  </a>
                </motion.div>
              </>
            )}

            {/* Submit Button */}
            <motion.div variants={fadeInUp} className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </motion.div>

            {/* Success/Error Message */}
            {isSubmitted && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="mt-4 p-4 bg-green-600 text-gray-100 rounded-lg"
              >
                {isLogin ? "Login successful!" : "Registration successful!"}
              </motion.div>
            )}
            {isError && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="mt-4 p-4 bg-red-600 text-gray-100 rounded-lg"
              >
                {errorMessage}
              </motion.div>
            )}
          </motion.form>

          {/* Divider with "Or continue with" */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center my-6 space-x-4"
          >
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-sm text-gray-300">Or continue with</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </motion.div>

          {/* Google and Facebook Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center space-x-4"
          >
            <button
              onClick={handleGoogleLogin}
              className="p-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center space-x-2"
            >
              <FcGoogle className="w-6 h-6" />
              <span className="text-sm text-gray-700">Google</span>
            </button>
            <button
              onClick={handleFacebookLogin}
              className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2"
            >
              <FaFacebook className="w-6 h-6" />
              <span className="text-sm">Facebook</span>
            </button>
          </motion.div>

          {/* Toggle Between Login and Sign Up */}
          <motion.div
            variants={fadeInUp}
            className="text-center mt-6 text-gray-300"
          >
            {isLogin ? (
              <p>
                Need an account?{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Sign Up
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Login
                </button>
              </p>
            )}
          </motion.div>
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
    </div>
  );
}
