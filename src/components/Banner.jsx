import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Video from "../assets/Banner.mp4";
import Picture from "../assets/banner.jpg";

export default function Banner() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const carouselItems = [
    {
      type: "video",
      src: Video,
      text: (
        <div className="flex flex-col items-center justify-center h-full px-4">
          {/* Main Text */}
          <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-200 mb-10 animate-fade-in">
            Welcome to the ultimate Talent Hunt!
          </h1>

          {/* Bottom Text and Button */}
          <div className="text-center space-y-4">
            <p className="text-xl md:text-2xl font-semibold text-gray-200">
              Your time is now! Enter NextStarz for a chance to become the next
              big star!
            </p>
            <button
              onClick={() => navigate("/login")}
              className="px-8  py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-gray-200 rounded-md  transition-all duration-300 font-semibold"
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
        <div className="flex flex-col items-center justify-center h-full px-4">
          {/* Top Text */}
          <h2 className="text-2xl md:text-4xl font-bold text-center my-8 text-primary-color">
            OPEN TO ALL WORLDWIDE!
          </h2>

          {/* Middle Text */}
          <div className="text-center space-y-2 py-4">
            <p className="text-xl md:text-2xl font-semibold">
              ENTER FOR A CHANCE TO WIN A
            </p>
            <p className="text-4xl md:text-6xl font-bold text-primary-color">
              GHS 10,000.00
            </p>
          </div>

          {/* Bottom Text */}
          <p className="text-lg md:text-xl text-center mt-24 md:mt-32 text-primary-color">
            MUSIC RECORDING DEAL | MANAGEMENT DEAL | INTERNATIONAL DISTRIBUTION
            | MEDIA EXPOSURE | FULLY SPONSORED TRIP TO DUBAI, ETC…
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
    <div className="animate-section opacity-0 translate-y-20 transition-all duration-800 ease-out group">
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
        className="relative w-full h-[550px] sm:h-[700px] md:h-[45rem] rounded-lg" // Responsive height
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

            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
              <div
                className={`transition-all duration-800 ease-out ${
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
        <div className="swiper-button-prev !h-full !top-0 !left-0 !mt-0 !w-[30px] md:!w-[50px] opacity-0 group-hover:opacity-100 !transition-opacity !duration-300"></div>
        <div className="swiper-button-next !h-full !top-0 !right-0 !mt-0 !w-[30px] md:!w-[50px] opacity-0 group-hover:opacity-100 !transition-opacity !duration-300"></div>
      </Swiper>
    </div>
  );
}