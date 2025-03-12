import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Video from "../assets/Banner.mp4";
import Picture from "../assets/banner.jpg";
import Song from "../components/Song.jsx";
import HowItWorks from "./HowItWorks.jsx";

export default function Main() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const swiperRef = useRef(null);

  const carouselItems = [
    {
      type: "video",
      src: Video,
      text: "Welcome to the ultimate Talent Hunt!",
      buttonText: "Join Now!",
    },
    {
      type: "image",
      src: Picture,
      text: "Discover our products",
      buttonText: "Shop Now",
    },
  ];

  // Simulate loading for 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Update activeIndex when the slide changes
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on("slideChange", () => {
        setActiveIndex(swiperRef.current.realIndex);
      });
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
        threshold: 0.1, // Trigger animation when 10% of the section is visible
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

      {/* Carousel Section */}
      <div className="animate-section opacity-0 translate-y-20 transition-all duration-800 ease-out">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            renderBullet: (index, className) => {
              return `<span class="${className} hover:scale-110 transition-transform duration-200"></span>`;
            },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop
          onAutoplayStart={() => setIsPlaying(true)}
          onAutoplayStop={() => setIsPlaying(false)}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setActiveIndex(swiper.realIndex);
          }}
          className="relative w-full h-full object-cover md:h-[45rem] rounded-lg"
        >
          {carouselItems.map((item, index) => (
            <SwiperSlide key={index}>
              {item.type === "video" ? (
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={item.src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              )}

              {/* Overlay Text and Button */}
              <div className="absolute inset-0 flex flex-col items-center text-center justify-center bg-black bg-opacity-50 text-white md:object-cover">
                <h2
                  className={`text-2xl md:text-4xl font-bold mb-8 ${
                    activeIndex === index
                      ? "animate-slide-in"
                      : "animate-slide-out"
                  }`}
                >
                  {item.text}
                </h2>
                <button
                  className={`px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors hover:font-bold duration-200 ${
                    activeIndex === index
                      ? "animate-fade-in"
                      : "animate-fade-out"
                  }`}
                >
                  {item.buttonText}
                </button>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Pagination Container with Play/Pause Button */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex items-center space-x-2">
            {/* Play/Pause Button */}
            <button
              onClick={() => {
                if (isPlaying) {
                  swiperRef.current.autoplay.stop();
                } else {
                  swiperRef.current.autoplay.start();
                }
                setIsPlaying(!isPlaying);
              }}
              className="p-2 rounded-full hover:scale-125 transition-transform duration-200 focus:outline-none"
            >
              {isPlaying ? (
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}
            </button>

            {/* Pagination Dots */}
            <div className="custom-pagination flex space-x-2"></div>
          </div>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev !h-full !top-0 !left-0 !mt-0 !w-[50px] md:!w-[100px] opacity-0 group-hover:opacity-100 !transition-opacity !duration-300"></div>
          <div className="swiper-button-next !h-full !top-0 !right-0 !mt-0 !w-[50px] md:!w-[100px] opacity-0 group-hover:opacity-100 !transition-opacity !duration-300"></div>
        </Swiper>
      </div>

      {/* How to Participate Section */}
      <HowItWorks />

      {/* Song Component */}
      <div className="animate-section opacity-0 translate-y-20 transition-all duration-800 ease-out">
        <Song />
      </div>
    </section>
  );
}
