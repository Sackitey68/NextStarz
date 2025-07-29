import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaArrowUp,
} from "react-icons/fa";
import CTV from "../assets/Media/CTVNEW.png";
import Class from "../assets/Media/CLASSFM.png";
import Accra from "../assets/Media/AccraFm.png";
import Kumasi from "../assets/Media/KUMASIFM.png";
import Adehye from "../assets/Media/ADEHYEFM.png";
import No1 from "../assets/Media/no.1fm.png";
import Ho from "../assets/Media/HOFM.jpg";
import Taadi from "../assets/Media/TaadiFM.jpg";
import Dogbon from "../assets/Media/DOGBON.png";
import Sunyani from "../assets/Media/SUNYANIFM.png";
import CMGonline from "../assets/Media/CMG-online.png";
import Suede from "../assets/Media/Suede.jpg";

export default function Footer() {
  const navigate = useNavigate();
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavigation = (path) => {
    navigate(path);
    scrollToTop();
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mediaPartners = [
    { name: "Suede Entertainment", logo: Suede },
    { name: "CTV", logo: CTV },
    { name: "Class FM", logo: Class },
    { name: "Accra FM", logo: Accra },
    { name: "Kumasi FM", logo: Kumasi },
    { name: "Adehye FM", logo: Adehye },
    { name: "No.1 FM", logo: No1 },
    { name: "Ho FM", logo: Ho },
    { name: "Taadi FM", logo: Taadi },
    { name: "CMG-Online", logo: CMGonline },
    { name: "Dogbon FM", logo: Dogbon },
    { name: "Sunyani FM", logo: Sunyani },
  ];

  return (
    <footer className="bg-neutral-800 text-gray-300 py-12 relative">
      {/* Scroll-to-Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-pink-600 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="size-4" />
        </button>
      )}

      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-6">
              <ul className="space-y-3">
                {[
                  { name: "Home", path: "/" },
                  { name: "About", path: "/about" },
                  { name: "Register", path: "/register" },
                  { name: "Judges", path: "/judges" },
                  { name: "Auditions", path: "/auditions" },
                ].map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavigation(item.path)}
                      className="text-sm text-gray-300 hover:text-hover-color hover:font-semibold hover:underline hover:underline-offset-8 transition-all duration-200"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {[
                  { name: "Prizes", path: "/prizes" },
                  { name: "FAQ", path: "/faq" },
                  { name: "Contact", path: "/contact" },
                  { name: "Terms", path: "/terms" },
                  { name: "Privacy", path: "/privacy" },
                ].map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavigation(item.path)}
                      className="text-sm text-gray-300 hover:text-hover-color hover:font-semibold hover:underline hover:underline-offset-8 transition-all duration-200"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Follow Us</h3>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <FaTiktok />, url: "https://www.tiktok.com/@Nxtstarz" },
                {
                  icon: <FaInstagram />,
                  url: "https://www.instagram.com/NextStarzglobal",
                },
                { icon: <FaTwitter />, url: "https://x.com/NextStarzglobal" },
                {
                  icon: <FaYoutube />,
                  url: "https://www.youtube.com/@NextStarzglobal",
                },
                {
                  icon: <FaFacebook />,
                  url: "https://web.facebook.com/nextstarzglobal/",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition-all duration-300"
                  aria-label={social.icon.type.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Media Partners */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-6">Media Partners</h3>
            <div className="flex flex-wrap gap-3">
              {mediaPartners.map((partner, index) => (
                <div
                  key={index}
                  className="group relative"
                  title={partner.name}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-10 h-10 object-contain rounded-full opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                    {partner.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="md:col-start-1">
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">📧</span>
                <a
                  href="mailto:info.nextstarz@gmail.com"
                  className="hover:text-hover-color hover:font-semibold hover:underline hover:underline-offset-4 transition-all"
                >
                  info.nextstarz@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📱</span>
                <a
                  href="https://api.whatsapp.com/send?phone=233534886377"
                  target="_blank"
                  className="hover:text-hover-color hover:font-semibold hover:underline hover:underline-offset-4 transition-all"
                >
                  +233 534 886 377
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>15 Sapele Cl, GC-136-5844</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-10 border-gray-700" />

        {/* Copyright */}
        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} NextStarz. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://chat.whatsapp.com/HUthrXOegbIHo3MxGYvUcL"
              target="_blank"
              className="text-sm bg-green-900 hover:bg-green-800 px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              <span>Join Community</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
