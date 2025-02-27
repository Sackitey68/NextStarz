import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Video from "../assets/Banner.mp4";

export default function Main() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide index
  const swiperRef = useRef(null);

  const carouselItems = [
    {
      type: "video",
      src: Video,
      text: "Welcome to the ultimate Talent Show!",
      buttonText: "Join the Show",
    },
    {
      type: "image",
      src: "banner",
      text: "Discover our products",
      buttonText: "Shop Now",
    },
    {
      type: "image",
      src: "/docs/images/carousel/carousel-3.svg",
      text: "Explore our services",
      buttonText: "View Services",
    },
    {
      type: "image",
      src: "/docs/images/carousel/carousel-4.svg",
      text: "Join our community",
      buttonText: "Join Us",
    },
    {
      type: "image",
      src: "/docs/images/carousel/carousel-5.svg",
      text: "Contact us today",
      buttonText: "Contact Us",
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
    <main className="group relative">
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
          setActiveIndex(swiper.realIndex); // Set initial active index
        }}
        className="relative w-full h-96 object-cover md:h-[45rem] rounded-lg"
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
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
              <h2
                className={`text-2xl md:text-4xl font-bold mb-8 ${
                  activeIndex === index ? "animate-slide-in" : "animate-slide-out"
                }`}
              >
                {item.text}
              </h2>
              <button
                className={`px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 ${
                  activeIndex === index ? "animate-fade-in" : "animate-fade-out"
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
    </main>
  );
}