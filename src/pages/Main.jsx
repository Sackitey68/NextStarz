import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Banner from "../components/Banner.jsx";
import Song from "../components/Song.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import {
  FaFilm,
  FaStar,
  FaMusic,
  FaGamepad,
  FaHeadphones,
} from "react-icons/fa";

export default function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [isReloading, setIsReloading] = useState(false);

  // Floating entertainment icons configuration
  const floatingIcons = [
    {
      icon: <FaFilm className="text-purple-400/30" />,
      size: "text-5xl",
      position: "top-20 left-10",
    },
    {
      icon: <FaStar className="text-yellow-400/30" />,
      size: "text-6xl",
      position: "top-1/3 right-20",
    },
    {
      icon: <FaMusic className="text-blue-400/30" />,
      size: "text-7xl",
      position: "bottom-1/4 left-1/4",
    },
    {
      icon: <FaGamepad className="text-green-400/30" />,
      size: "text-5xl",
      position: "bottom-20 right-1/4",
    },
    {
      icon: <FaHeadphones className="text-pink-400/30" />,
      size: "text-6xl",
      position: "top-1/4 left-1/3",
    },
  ];

  // Check if the page has already loaded
  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("hasLoaded");

    // Handle page reload
    const handleBeforeUnload = () => {
      setIsReloading(true);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    if (hasLoaded) {
      // For subsequent loads, show a shorter loading state
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    } else {
      // First load - show full loading animation
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasLoaded", "true");
      }, 3000);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  }, []);

  // Scroll animation logic with Framer Motion
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
            entry.target.classList.remove("opacity-0", "translate-y-20");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".animate-section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Floating Entertainment Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.size} ${item.position} z-0 pointer-events-none`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 0.3,
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Music-Themed Loading Overlay */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 z-50"
        >
          <div className="flex space-x-2 mb-8">
            {/* Animated Soundwave Bars - different animation for reload */}
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                className={`w-3 rounded-full ${
                  isReloading
                    ? "bg-gradient-to-b from-blue-400 to-purple-400"
                    : "bg-gradient-to-b from-purple-500 to-blue-500"
                }`}
                animate={{
                  height: isReloading ? [40, 20, 40] : [20, 60, 20],
                }}
                transition={{
                  duration: isReloading ? 0.8 : 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * (isReloading ? 0.1 : 0.2),
                }}
              />
            ))}
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold text-white mb-2"
          >
            {isReloading ? "Refreshing Content..." : "Welcome to NEXTSTARZ"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400"
          >
            {isReloading ? "Just a moment..." : "Ghana's Biggest Talent Hunt..."}
          </motion.p>

          {isReloading && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "50%" }}
              transition={{ duration: 1, ease: "linear" }}
              className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 mt-4 rounded-full"
            />
          )}
        </motion.div>
      )}

      {/* Main Content */}
      <div className="relative z-10">
        {/* Banner Section */}
        <motion.div
          className="animate-section opacity-0 translate-y-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Banner />
        </motion.div>

        {/* How to Participate Section */}
        <motion.div
          className="animate-section opacity-0 translate-y-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <HowItWorks />
        </motion.div>

        {/* Song Component */}
        <motion.div
          className="animate-section opacity-0 translate-y-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Song />
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 10 + 2,
              height: Math.random() * 10 + 2,
              opacity: Math.random() * 0.3 + 0.1,
            }}
            animate={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              transition: {
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          />
        ))}
      </div>
    </section>
  );
}
