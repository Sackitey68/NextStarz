import { useState, useEffect } from "react"; // Import useState and useEffect
import Logo from "../assets/Logo.png";

export default function Header() {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State to manage scroll behavior
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true); // User has scrolled past the navigation
      } else {
        setIsScrolled(false); // User is at the top
      }
    };

    window.addEventListener("scroll", handleScroll); // Add scroll listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup
    };
  }, []);

  return (
    <header className="mb-60">
      {/* Reddish Background with Text */}
      <div
        className={`fixed inset-x-0 top-0 h-16 bg-red-600 bg-opacity-90 flex items-center justify-center z-30 transform transition-all duration-500 ease-in-out ${
          isScrolled ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <p className="text-white text-lg font-semibold">Here I Come</p>
      </div>

      <nav className="fixed w-full z-20 top-0 start-0 border-b border-b-slate-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          {/* Logo and Nav Links Container */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <img src={Logo} className="size-14" alt="NextStarz Logo" />
            </a>

            {/* Nav Links */}
            <div className="hidden md:flex items-center space-x-8 text-lg text-gray-300">
              {/* Home Link */}
              <a
                href="#"
                className="transition-all duration-200 hover:text-hover-color hover:font-semibold hover:underline hover:underline-offset-8"
              >
                Home
              </a>

              {/* About Link */}
              <a
                href="#"
                className="transition-all duration-200 hover:text-hover-color hover:font-semibold hover:underline hover:underline-offset-8"
              >
                About
              </a>

              {/* Services Link */}
              <a
                href="#"
                className="transition-all duration-200 hover:text-hover-color hover:font-semibold hover:underline hover:underline-offset-8"
              >
                Services
              </a>

              {/* Contact Link */}
              <a
                href="#"
                className="transition-all duration-200 hover:text-hover-color hover:font-semibold hover:underline hover:underline-offset-8"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Sign Up Button */}
          <div
            className={`flex items-center space-x-3 md:space-x-0 ${
              isMenuOpen ? "hidden" : "block"
            }`}
          >
            <button className="relative inline-flex items-center max-sm:hidden justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-xl group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-gray-300 focus:ring-2 focus:outline-none focus:ring-hover-color">
              <span className="relative px-3 py-1.5 md:px-5 md:py-2.5 transition-all ease-in duration-75 bg-gray-300 rounded-md group-hover:bg-transparent uppercase">
                sign up
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-hover-color"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu} // Toggle menu on click
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav Links */}
        <div
          className={`fixed inset-0 w-full h-screen bg-black bg-opacity-80 backdrop-blur-sm transition-all duration-300 ease-in-out z-10 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          id="navbar-sticky"
        >
          {/* Close Button */}
          <button
            type="button"
            className="absolute top-4 right-4 p-2 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-hover-color rounded-lg"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Centered Nav Links */}
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col space-y-6 text-center">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded-sm transition-all duration-200 hover:text-hover-color hover:font-semibold hover:underline hover:underline-offset-8"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded-sm transition-all duration-200 hover:text-hover-color hover:font-semibold hover:underline hover:underline-offset-8"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded-sm transition-all duration-200 hover:text-hover-color hover:font-semibold hover:underline hover:underline-offset-8"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded-sm transition-all duration-200 hover:text-hover-color hover:font-semibold hover:underline hover:underline-offset-8"
                >
                  Contact
                </a>
              </li>
              {/* Sign Up Button in Mobile Menu */}
              <li>
                <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-xl group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-gray-300 focus:ring-2 focus:outline-none focus:ring-hover-color">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent rounded-md group-hover:bg-transparent uppercase">
                    sign up
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
