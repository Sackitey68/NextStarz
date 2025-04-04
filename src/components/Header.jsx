import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FaUpload } from "react-icons/fa";
import Logo from "../assets/Logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsSignedUp(!!user);
    });
    return () => unsubscribe();
  }, [auth]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("overflow-hidden", !isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleButtonClick = () => {
    navigate(isSignedUp ? "/uploaddemo" : "/register");
  };

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/register", name: "Register" },
    { path: "/prizes", name: "Prizes" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <header className="py-5">
      {/* Scrolling Announcement Bar */}
      <div
        className={`fixed max-sm:text-sm top-0 w-full z-40 bg-gradient-to-r from-purple-900 to-pink-700 text-white text-center py-2 transition-transform duration-500 ${
          isScrolled ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <p className="font-bold animate-pulse">
          Registration Is Open Until June 5.{" "}
          <span
            className="underline cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Register Now!
          </span>
        </p>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed bg-bg-color shadow-sm w-full z-50 top-8 ${
          isScrolled ? "bg-bg-color" : ""
        } transition-all duration-300`}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img
                src={Logo}
                className="h-10 w-10 group-hover:scale-110 transition-transform"
                alt="NextStarz"
              />
            </Link>

            {/* Desktop Navigation with Underline Hover Effect */}
            <div className="hidden md:flex items-center flex-1 justify-center">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => `
                      relative px-2 py-1 transition-all duration-300
                      ${
                        isActive
                          ? "text-hover-color font-medium"
                          : "text-gray-300 hover:text-hover-color"
                      }
                      after:content-[''] after:absolute after:bottom-0 after:left-0 
                      after:w-0 after:h-0.5 after:bg-hover-color after:transition-all 
                      after:duration-300 hover:after:w-full
                      ${isActive ? "after:w-full" : ""}
                    `}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Upload Demo Button - Enhanced with Smooth Hover */}
            <div className="hidden md:block">
              <button
                onClick={handleButtonClick}
                className="relative overflow-hidden group transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative px-6 py-2 rounded-full flex items-center text-white transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg">
                  {isSignedUp ? (
                    <>
                      <FaUpload className="mr-2 transition-transform duration-300 group-hover:scale-110" />
                      <span className="transition-all duration-300 group-hover:tracking-wider">
                        Upload
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="transition-all duration-300 group-hover:tracking-wider">
                        Sign In
                      </span>
                    </>
                  )}
                </div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 focus:outline-none"
              aria-label="Menu"
            >
              <div
                className={`w-6 flex flex-col items-end transition-all ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              >
                <span
                  className={`block h-0.5 w-6 bg-white transition-all ${
                    isMenuOpen ? "rotate-45 translate-y-1.5" : "mb-1.5"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-4 bg-white transition-all ${
                    isMenuOpen ? "opacity-0" : "mb-1.5"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 ${
                    isMenuOpen ? "w-6 -rotate-45" : "w-5"
                  } bg-white transition-all`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Centered with Matching Underline Effect */}
        <div
          className={`md:hidden fixed inset-0 z-20 bg-gray-900/70 backdrop-blur-lg transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* Close Button */}
          <div className="absolute top-6 right-6">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-800 focus:outline-none"
            >
              <div className="w-6 h-6 relative">
                <span className="block absolute top-1/2 left-1/2 w-6 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1/2 rotate-45"></span>
                <span className="block absolute top-1/2 left-1/2 w-6 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></span>
              </div>
            </button>
          </div>

          {/* Centered Navigation Links */}
          <div className="h-full flex flex-col items-center justify-center">
            <div className="w-full max-w-xs space-y-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={toggleMenu}
                  className={({ isActive }) => `
                    relative block w-full text-center px-6 py-4 text-xl
                    ${
                      isActive
                        ? "text-hover-color font-medium"
                        : "text-gray-300 hover:text-hover-color"
                    }
                    after:content-[''] after:absolute after:bottom-2 after:left-1/2 
                    after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-hover-color 
                    after:transition-all after:duration-300 hover:after:w-20
                    ${isActive ? "after:w-20" : ""}
                  `}
                >
                  {item.name}
                </NavLink>
              ))}

              <button
                onClick={() => {
                  handleButtonClick();
                  toggleMenu();
                }}
                className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl text-white font-bold flex items-center justify-center hover:scale-[1.02] transition-transform mt-4 group"
              >
                {isSignedUp ? (
                  <>
                    <FaUpload className="mr-3 transition-transform duration-300 group-hover:scale-110" />
                    <span className="transition-all duration-300 group-hover:tracking-wider">
                      Upload Demo
                    </span>
                  </>
                ) : (
                  <>
                    <span className="transition-all duration-300 group-hover:tracking-wider">
                      Sign In
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}