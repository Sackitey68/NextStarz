import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { useNavigate, Link } from "react-router-dom";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { FcGoogle } from "react-icons/fc";
import {
  FaFacebook,
  FaTwitter,
  FaArrowLeft,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import { RiShieldUserFill } from "react-icons/ri";

// Import your images for the slider
import Image1 from "../assets/slider1.jpg";
import Image2 from "../assets/slider2.jpg";
import Image3 from "../assets/slider3.jpg";
import Image4 from "../assets/slider4.jpg";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
};

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [user, setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [emailSent, setEmailSent] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);
  const navigate = useNavigate();

  // Slide content with motivational messages
  const slides = [
    {
      image: Image1,
      title: "Unlock Your Potential",
      text: "Join thousands of creatives showcasing their talent",
    },
    {
      image: Image2,
      title: "Showcase Your Work",
      text: "Get discovered by industry professionals worldwide",
    },
    {
      image: Image3,
      title: "Connect & Collaborate",
      text: "Build your network with like-minded creatives",
    },
    {
      image: Image4,
      title: "Your Journey Starts Here",
      text: "Take the first step towards your creative future",
    },
  ];

  // Track authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // Check if email is verified when user state changes
        if (user.emailVerified) {
          setIsSubmitted(true);
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Handle form submission with email verification
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setEmailSent(false);
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      if (isLogin) {
        // For login, check if email is verified
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        if (!user.emailVerified) {
          await sendEmailVerification(user);
          setIsError(true);
          setErrorMessage("Your email is not verified. We've sent you a new verification email. Please check your inbox.");
          setEmailSent(true);
          return;
        }
        
        // If email is verified, proceed with login
        setIsSubmitted(true);
      } else {
        // For sign up, create user and send verification email
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Send verification email
        await sendEmailVerification(user);
        setEmailSent(true);
        setErrorMessage("Verification email sent! Please check your inbox to verify your account.");
        setIsError(true); // We use error state to show this message
        return;
      }
    } catch (error) {
      setIsError(true);
      // User-friendly error messages
      switch (error.code) {
        case "auth/user-not-found":
          setErrorMessage("No account found with this email");
          break;
        case "auth/wrong-password":
          setErrorMessage("Incorrect password. Please try again");
          break;
        case "auth/email-already-in-use":
          setErrorMessage("Email already in use. Please login instead");
          setIsLogin(true);
          break;
        case "auth/weak-password":
          setErrorMessage("Password should be at least 6 characters");
          break;
        case "auth/invalid-email":
          setErrorMessage("Please enter a valid email address");
          break;
        case "auth/too-many-requests":
          setErrorMessage("Too many attempts. Please try again later or reset your password");
          break;
        default:
          setErrorMessage("Something went wrong. Please try again");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Handle password reset
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setResetSent(true);
      setErrorMessage("Password reset email sent! Please check your inbox.");
      setIsError(true); // We use error state to show this message
    } catch (error) {
      setIsError(true);
      switch (error.code) {
        case "auth/user-not-found":
          setErrorMessage("No account found with this email");
          break;
        case "auth/invalid-email":
          setErrorMessage("Please enter a valid email address");
          break;
        default:
          setErrorMessage("Failed to send reset email. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Handle resending verification email
  const handleResendVerification = async () => {
    if (!auth.currentUser) return;
    
    try {
      setIsLoading(true);
      await sendEmailVerification(auth.currentUser);
      setEmailSent(true);
      setErrorMessage("Verification email resent! Please check your inbox.");
    } catch (error) {
      setErrorMessage("Failed to resend verification email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Social login handlers
  const handleSocialLogin = async (providerFn) => {
    setIsLoading(true);
    try {
      await providerFn();
      setIsSubmitted(true);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await handleSocialLogin(() => signInWithPopup(auth, provider));
  };

  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    await handleSocialLogin(() => signInWithPopup(auth, provider));
  };

  const handleTwitterLogin = async () => {
    const provider = new TwitterAuthProvider();
    await handleSocialLogin(() => signInWithPopup(auth, provider));
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  // Swiper settings
  const swiperSettings = {
    modules: [Autoplay, Pagination, EffectFade],
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
      el: ".swiper-pagination",
      renderBullet: (index, className) => {
        return `<span class="${className} bg-white opacity-50 hover:opacity-100 transition-opacity duration-300"></span>`;
      },
    },
    onSlideChange: (swiper) => setActiveSlide(swiper.activeIndex),
  };

  return (
    <section className="bg-bg-color min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 10 + 2,
              height: Math.random() * 10 + 2,
              opacity: Math.random() * 0.5 + 0.1,
            }}
            animate={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-7xl z-10">
        {/* Login/Register Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl lg:rounded-r-none p-8 sm:p-10 relative overflow-hidden"
        >
          {/* Glowing accent */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full filter blur-3xl"></div>

          {/* Form container */}
          <div className="relative z-10">
            {/* Logo/Branding */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center mb-8"
            >
              <RiShieldUserFill className="text-blue-400 text-4xl mr-3" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                NEXTSTARZ
              </h1>
            </motion.div>

            {/* Fancy Back Arrow */}
            {(showEmailForm || showResetPassword) && (
              <motion.div
                variants={fadeInUp}
                className="absolute top-0 left-0 cursor-pointer"
                onClick={() => {
                  setShowEmailForm(false);
                  setShowResetPassword(false);
                }}
              >
                <FaArrowLeft className="text-gray-300 w-6 h-6 hover:text-white transition-colors duration-300" />
              </motion.div>
            )}

            {/* Form Title */}
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl font-bold text-center mb-6 text-white"
            >
              {showResetPassword 
                ? "Reset Your Password" 
                : showEmailForm
                  ? isLogin
                    ? "Welcome Back!"
                    : "Join Our Community"
                  : "Sign In to Your Account"}
            </motion.h2>

            {/* Password Reset Form */}
            {showResetPassword ? (
              <motion.form
                onSubmit={handlePasswordReset}
                variants={scaleUp}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="space-y-6 max-w-md mx-auto"
              >
                <motion.div variants={fadeInUp} className="space-y-4">
                  <p className="text-gray-300 text-sm">
                    Enter your email address and we'll send you a link to reset your password.
                  </p>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full pl-10 pr-4 py-3 bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white placeholder-gray-400 border border-gray-600/50 rounded-lg transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <motion.div variants={fadeInUp} className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading || resetSent}
                      className={`w-full px-6 py-3 ${
                        isLoading || resetSent
                          ? "bg-gray-600 cursor-not-allowed"
                          : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                      } text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center space-x-2`}
                    >
                      {isLoading ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : resetSent ? (
                        "Email Sent!"
                      ) : (
                        "Send Reset Link"
                      )}
                    </button>
                  </motion.div>

                  {resetSent && (
                    <motion.div 
                      variants={fadeInUp}
                      className="text-center text-sm text-gray-300"
                    >
                      <p>Check your email for the password reset link.</p>
                      <button
                        type="button"
                        onClick={() => {
                          setShowResetPassword(false);
                          setShowEmailForm(true);
                        }}
                        className="mt-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        Back to login
                      </button>
                    </motion.div>
                  )}
                </motion.div>
              </motion.form>
            ) : (
              <>
                {/* Social Login Buttons */}
                {!showEmailForm && (
                  <motion.div
                    variants={staggerContainer}
                    className="space-y-4 max-w-md mx-auto"
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div variants={fadeInUp} className="text-center">
                      <button
                        onClick={handleGoogleLogin}
                        className="w-full px-6 py-3 bg-white/90 hover:bg-white border border-white/20 rounded-lg transition-all duration-300 flex items-center justify-center space-x-3 group"
                      >
                        <FcGoogle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium text-gray-800">
                          Continue with Google
                        </span>
                      </button>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="text-center">
                      <button
                        onClick={handleFacebookLogin}
                        className="w-full px-6 py-3 bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-lg transition-all duration-300 flex items-center justify-center space-x-3 group"
                      >
                        <FaFacebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">
                          Continue with Facebook
                        </span>
                      </button>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="text-center">
                      <button
                        onClick={handleTwitterLogin}
                        className="w-full px-6 py-3 bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white rounded-lg transition-all duration-300 flex items-center justify-center space-x-3 group"
                      >
                        <FaTwitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">
                          Continue with Twitter
                        </span>
                      </button>
                    </motion.div>

                    <motion.div
                      variants={fadeInUp}
                      className="relative flex items-center py-4"
                    >
                      <div className="flex-grow border-t border-gray-600/50"></div>
                      <span className="flex-shrink mx-4 text-gray-400 text-sm">
                        OR
                      </span>
                      <div className="flex-grow border-t border-gray-600/50"></div>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="text-center">
                      <button
                        onClick={() => setShowEmailForm(true)}
                        className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center space-x-3 group"
                      >
                        <FaEnvelope className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="text-sm">Continue with Email</span>
                      </button>
                    </motion.div>
                  </motion.div>
                )}

                {/* Email/Password Form */}
                <AnimatePresence mode="wait">
                  {showEmailForm && (
                    <motion.form
                      onSubmit={handleSubmit}
                      variants={scaleUp}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="space-y-6 max-w-md mx-auto"
                    >
                      {/* Email Field */}
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <label className="block text-sm font-medium text-gray-300">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaEnvelope className="text-gray-400" />
                          </div>
                          <input
                            type="email"
                            name="email"
                            placeholder="your@email.com"
                            className="w-full pl-10 pr-4 py-3 bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white placeholder-gray-400 border border-gray-600/50 rounded-lg transition-all duration-300"
                            required
                          />
                        </div>
                      </motion.div>

                      {/* Password Field */}
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <label className="block text-sm font-medium text-gray-300">
                            Password
                          </label>
                          {isLogin && (
                            <button
                              type="button"
                              className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                              onClick={() => setShowResetPassword(true)}
                            >
                              Forgot password?
                            </button>
                          )}
                        </div>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaLock className="text-gray-400" />
                          </div>
                          <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder={
                              isLogin
                                ? "Enter your password"
                                : "Create a password (min 6 chars)"
                            }
                            className="w-full pl-10 pr-10 py-3 bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white placeholder-gray-400 border border-gray-600/50 rounded-lg transition-all duration-300"
                            required
                            minLength={6}
                          />
                          <button
                            type="button"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <FaEyeSlash className="text-gray-400 hover:text-gray-300" />
                            ) : (
                              <FaEye className="text-gray-400 hover:text-gray-300" />
                            )}
                          </button>
                        </div>
                      </motion.div>

                      {/* Remember Me & Toggle Login/Signup */}
                      <motion.div
                        variants={fadeInUp}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center">
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-white/5"
                          />
                          <label
                            htmlFor="remember-me"
                            className="ml-2 block text-sm text-gray-300"
                          >
                            Remember me
                          </label>
                        </div>
                        <button
                          type="button"
                          onClick={() => setIsLogin(!isLogin)}
                          className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          {isLogin
                            ? "Need an account? Sign up"
                            : "Already have an account? Login"}
                        </button>
                      </motion.div>

                      {/* Submit Button */}
                      <motion.div variants={fadeInUp} className="pt-2">
                        <button
                          type="submit"
                          disabled={isLoading}
                          className={`w-full px-6 py-3 ${
                            isLoading
                              ? "bg-gray-600 cursor-not-allowed"
                              : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                          } text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center space-x-2`}
                        >
                          {isLoading ? (
                            <>
                              <svg
                                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Processing...
                            </>
                          ) : (
                            <>{isLogin ? "Sign In" : "Create Account"}</>
                          )}
                        </button>
                      </motion.div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </>
            )}

            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="mt-6 p-4 bg-green-600/20 border border-green-400/30 text-gray-100 rounded-lg flex flex-col items-center justify-center space-y-4 backdrop-blur-sm"
              >
                <div className="flex items-center space-x-2 animate-pulse">
                  <span role="img" aria-label="star" className="text-2xl">
                    🌟
                  </span>
                  <span
                    role="img"
                    aria-label="musical notes"
                    className="text-2xl"
                  >
                    🎉
                  </span>
                  <span role="img" aria-label="star" className="text-2xl">
                    🌟
                  </span>
                </div>
                <p className="text-center font-medium">
                  Welcome! Click here ⬇️ to upload demo
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/uploaddemo")}
                  className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium rounded-lg transition-all duration-300"
                >
                  Upload Demo
                </motion.button>
              </motion.div>
            )}

            {/* Error/Verification Message */}
            {isError && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="mt-6 p-4 bg-red-600/20 border border-red-400/30 text-gray-100 rounded-lg flex flex-col items-center justify-center space-y-3 backdrop-blur-sm"
              >
                <div className="flex items-center space-x-3">
                  {emailSent || resetSent ? (
                    <FaCheckCircle className="text-green-400" />
                  ) : (
                    <FaExclamationTriangle className="text-yellow-400" />
                  )}
                  <span className="text-sm">{errorMessage}</span>
                </div>
                
                {emailSent && !resetSent && (
                  <div className="flex flex-col items-center space-y-2">
                    <p className="text-xs text-gray-300">Didn't receive the email?</p>
                    <button
                      onClick={handleResendVerification}
                      disabled={isLoading}
                      className="text-xs text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                    >
                      {isLoading ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-1 h-3 w-3 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        "Resend verification email"
                      )}
                    </button>
                  </div>
                )}
              </motion.div>
            )}

            {/* Terms & Privacy */}
            {!showEmailForm && !showResetPassword && (
              <motion.div
                variants={fadeInUp}
                className="mt-8 text-center text-xs text-gray-500"
              >
                <p>
                  By continuing, you agree to our{" "}
                  <Link to="/terms" className="text-blue-400 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-blue-400 hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Image Slider */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="hidden lg:block relative rounded-xl lg:rounded-l-none overflow-hidden"
        >
          <Swiper {...swiperSettings} className="h-full">
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full w-full">
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30 flex items-end p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: activeSlide === index ? 1 : 0.7,
                        y: activeSlide === index ? 0 : 20,
                      }}
                      transition={{ duration: 0.5 }}
                      className="text-white"
                    >
                      <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                      <p className="text-gray-300">{slide.text}</p>
                    </motion.div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Pagination */}
          <div className="swiper-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10"></div>
        </motion.div>
      </div>

      {/* Logout Button */}
      {user && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="fixed bottom-5 right-6 z-20"
        >
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600/90 hover:bg-red-700 text-white rounded-lg transition-colors duration-300 flex items-center space-x-2 shadow-lg"
          >
            <span className="text-sm font-medium">Logout</span>
          </button>
        </motion.div>
      )}
    </section>
  );
}