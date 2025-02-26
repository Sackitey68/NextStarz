import { useState, useEffect } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  // State to manage scroll-to-top button visibility
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add scroll event listener to show/hide the button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="bg-neutral-800 text-white py-16 relative">
      {/* Scroll-to-Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-6 p-2 bg-primary-color text-white rounded-full shadow-lg hover:bg-pink-600 transition-all duration-200"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="size-4" />
        </button>
      )}

      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4 text-lg">
              <div>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-hover-color hover:font-semibold hover:underline hover:underline-offset-8"
                    >
                      Home
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-hover-color hover:font-semibold hover:underline hover:underline-offset-8"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-hover-color hover:font-semibold hover:underline hover:underline-offset-8"
                    >
                      Register
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-hover-color hover:font-semibold hover:underline hover:underline-offset-8"
                    >
                      Auditions
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-hover-color hover:font-semibold hover:underline hover:underline-offset-8"
                    >
                      Judges
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-hover-color hover:font-semibold hover:underline hover:underline-offset-8"
                    >
                      Prizes
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-hover-color hover:font-semibold hover:underline hover:underline-offset-8"
                    >
                      FAQ
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-hover-color hover:font-semibold hover:underline hover:underline-offset-8"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Legal Pages</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-hover-color hover:font-semibold hover:underline hover:underline-offset-8"
                    >
                      Terms & Conditions
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-hover-color hover:font-semibold hover:underline hover:underline-offset-8"
                    >
                      Privacy Policy
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-hover-color hover:font-semibold hover:underline hover:underline-offset-8"
                    >
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6 md:flex-col sm:justify-center md:space-x-0 md:space-y-5 md:ml-5 lg:flex-row lg:space-x-6 lg:items-center lg:justify-center lg:space-y-0 lg:mr-20">
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-all duration-300"
                aria-label="TikTok"
              >
                <FaTiktok className="w-6 h-6" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-all duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="w-6 h-6" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-all duration-300"
                aria-label="YouTube"
              >
                <FaYoutube className="w-6 h-6" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated!</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />

              <div className="flex items-center">
                <input type="checkbox" id="promo-opt-in" className="mr-2" />
                <label htmlFor="promo-opt-in" className="text-sm text-gray-400">
                  Yes, I want to receive updates and offers from NextStarz
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                Email:{" "}
                <a
                  href="mailto:info.nextstarz@gmail.com"
                  className="hover:text-hover-color hover:font-semibold hover:underline hover:underline-offset-4"
                >
                  info.nextstarz@gmail.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href="tel:+233534886377"
                  className="hover:text-hover-color hover:font-semibold hover:underline hover:underline-offset-4"
                >
                  +233 534 886 377
                </a>
              </li>
              <li>Address: 123 Talent Avenue, Accra, Ghana</li>
              <li>Business Hours: Mon - Fri, 9:00 AM - 5:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-10 border-gray-700" />

        {/* Copyright and Hashtag Promotion */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2025 Suede Entertainment. All Rights Reserved</p>
          <p className="mt-4 md:mt-0">
            Join the Conversation:{" "}
            <span className="text-pink-500">#NextStarz2025</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
