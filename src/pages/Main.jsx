import { useState, useEffect } from "react";
import Banner from "../components/Banner.jsx";
import Song from "../components/Song.jsx";
import HowItWorks from "./HowItWorks.jsx";

export default function Main() {
  const [isLoading, setIsLoading] = useState(true);

  // Check if the page has already loaded
  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("hasLoaded");

    if (hasLoaded) {
      setIsLoading(false); // Skip loading if the page has already loaded
    } else {
      // Simulate loading for 3 seconds
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasLoaded", "true"); // Mark the page as loaded
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  // Scroll animation logic
  useEffect(() => {
    const sections = document.querySelectorAll(".animate-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
            entry.target.classList.remove("opacity-0", "translate-y-20");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section className="group relative">
      {/* Music-Themed Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="flex space-x-2">
            {/* Soundwave Bars */}
            <div className="w-2 h-8 bg-blue-500 animate-soundwave"></div>
            <div className="w-2 h-8 bg-blue-500 animate-soundwave animation-delay-200"></div>
            <div className="w-2 h-8 bg-blue-500 animate-soundwave animation-delay-400"></div>
            <div className="w-2 h-8 bg-blue-500 animate-soundwave animation-delay-600"></div>
            <div className="w-2 h-8 bg-blue-500 animate-soundwave animation-delay-800"></div>
          </div>
        </div>
      )}

      {/* Banner Section */}
      <div className="animate-section opacity-0 translate-y-20">
        <Banner />
      </div>

      {/* How to Participate Section */}
      <div className="animate-section opacity-0 translate-y-20">
        <HowItWorks />
      </div>

      {/* Song Component */}
      <div className="animate-section opacity-0 translate-y-20">
        <Song />
      </div>
    </section>
  );
}