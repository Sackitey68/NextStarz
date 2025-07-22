import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Video from "../assets/Banner.mp4";
import Picture from "../assets/banner.jpg";
// import photo from "../assets/bannerr.jpg"

export default function Banner() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const swiperRef = useRef(null);
  const navigate = useNavigate();

  // Update window height on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const carouselItems = [
    {
      type: "video",
      src: Video,
      text: (
        <div className="flex flex-col items-center justify-center h-full px-4 md:px-8">
          {/* Main Text */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-4 sm:mb-6 md:mb-8 lg:mb-10">
            Welcome to the ultimate Talent Hunt!
          </h1>

          {/* Bottom Text and Button */}
          <div className="text-center space-y-2 sm:space-y-3 md:space-y-4">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
              Your time is now! Enter NextStarz for a chance to become the next big star!
            </p>
            <button
              onClick={() => navigate("/login")}
              className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-md transition-all duration-300 font-semibold text-sm sm:text-base"
            >
              Enter Now
            </button>
          </div>
        </div>
      ),
    },
    {
      type: "image",
      src: Picture,
      text: (
        <div className="flex flex-col items-center justify-center h-full px-4 md:px-8">
          {/* Top Text */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center my-4 sm:my-6 md:my-8 text-white">
            OPEN TO WORLDWIDE!
          </h2>

          {/* Middle Text */}
          <div className="text-center space-y-1 sm:space-y-2 py-2 sm:py-4">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
              ENTER FOR A CHANCE TO WIN A
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400">
              GHS 300,000.00
            </p>
          </div>
          {/* Bottom Text */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center mt-8 sm:mt-12 md:mt-16 lg:mt-24 text-white">
           CASH PRIZE | RADIO AIRPLAY | TV AIRPLAY | 3 MUSIC VIDEO PRODUCTIONS | BRAND CONSULTANCY | RECORD DEAL BY SUEDE ENTERTAINMENT | ARTIST DEVELOPMENT AND MANAGEMENT BY SUEDE ENTERTAINMENT
          </p>
        </div>
      ),
    },
  ];

  // Update activeIndex when the slide changes
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on("slideChange", () => {
        setActiveIndex(swiperRef.current.realIndex);
      });
    }
  }, []);

  return (
    <div className="animate-section opacity-0 translate-y-20 transition-all duration-800 ease-out">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          renderBullet: (index, className) => {
            return `<span class="${className}"></span>`;
          },
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
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
        className="relative w-full"
        style={{ height: "70vh", minHeight: "400px" }}
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide key={index} className="!overflow-hidden">
            {item.type === "video" ? (
              <div className="w-full h-full relative">
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
              </div>
            ) : (
              <div className="w-full h-full relative">
                <img
                  src={item.src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40">
              <div
                className={`w-full max-w-6xl mx-auto transition-all duration-800 ease-out ${
                  activeIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
              >
                {item.text}
              </div>
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
            className="p-2 rounded-full bg-black/30 hover:bg-black/50 transition-all duration-200 focus:outline-none"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
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
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
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
        <div className="swiper-button-prev !h-full !top-0 !left-0 !mt-0 !w-[30px] md:!w-[50px] opacity-0 hover:opacity-100 !transition-opacity !duration-300 "></div>
        <div className="swiper-button-next !h-full !top-0 !right-0 !mt-0 !w-[30px] md:!w-[50px] opacity-0 hover:opacity-100 !transition-opacity !duration-300 "></div>
      </Swiper>
    </div>
  );
}