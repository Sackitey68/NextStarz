import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Logo from "../assets/Logo.jpg";

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

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
      toggleMenu();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
    { path: "/register", name: "Register" },
    { path: "/prizes", name: "Prizes" },
    { path: "/faq", name: "Faq" },
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
          Registration Is Open Until August 8.{" "}
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
              <img src={Logo} className="h-10 w-10 rounded-xl" alt="NextStarz Logo" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center flex-1 justify-center">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `relative px-2 py-1 transition-all duration-300
                      ${
                        isActive
                          ? "text-hover-color font-medium"
                          : "text-gray-300 hover:text-hover-color"
                      }
                      after:content-[''] after:absolute after:bottom-0 after:left-0 
                      after:w-0 after:h-0.5 after:bg-hover-color after:transition-all 
                      after:duration-300 hover:after:w-full
                      ${isActive ? "after:w-full" : ""}`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() =>
                  isSignedUp ? handleLogout() : navigate("/login")
                }
                className="relative overflow-hidden group transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative px-6 py-2 rounded-full flex items-center text-white transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg">
                  {isSignedUp ? (
                    <span className="transition-all duration-300 group-hover:tracking-wider">
                      Logout
                    </span>
                  ) : (
                    <span className="transition-all duration-300 group-hover:tracking-wider">
                      Sign In
                    </span>
                  )}
                </div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg focus:outline-none"
              aria-label="Menu"
            >
              <div className="w-6 h-6 relative transform transition-all duration-300">
                <span
                  className={`block absolute top-1/2 left-1/2 w-6 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                  }`}
                ></span>
                <span
                  className={`block absolute top-1/2 left-1/2 w-6 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block absolute top-1/2 left-1/2 w-6 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Slides from Right */}
        <div
          className={`md:hidden fixed inset-0 z-20 transition-all duration-500 ease-in-out ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible delay-300"
          }`}
        >
          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-gray-900/70 backdrop-blur-lg transition-opacity duration-500 ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={toggleMenu}
          ></div>

          {/* Menu Content */}
          <div
            className={`absolute right-0 top-0 h-full w-4/5 max-w-sm bg-gray-900 shadow-xl transform transition-transform duration-500 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Small Logo in Mobile Menu */}
            <div className="absolute top-5 left-5">
              <Link to="/" onClick={toggleMenu}>
                <img src={Logo} className="h-8 w-8 rounded-xl" alt="NextStarz Logo" />
              </Link>
            </div>

            {/* Close Button */}
            <div className="absolute top-5 right-5">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg hover:bg-gray-800 focus:outline-none"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="h-full flex flex-col pt-20 pb-10 px-6 overflow-y-auto">
              {/* Navigation Links */}
              <div className="flex-1 flex flex-col space-y-3">
                {navItems.map((item, index) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `relative px-3 py-2 text-base rounded-md
                      transition-all duration-300 transform
                      ${
                        isActive
                          ? "bg-gray-800 text-hover-color font-medium"
                          : "text-gray-300 hover:bg-gray-800 hover:text-hover-color"
                      }
                      ${
                        isMenuOpen
                          ? "translate-x-0 opacity-100"
                          : "translate-x-10 opacity-0"
                      }`
                    }
                    style={{
                      transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                    }}
                  >
                    {({ isActive }) => (
                      <>
                        {item.name}
                        <span
                          className={`absolute left-0 top-1/2 -translate-y-1/2 h-4 w-1 rounded-r-md bg-hover-color transition-all duration-300 ${
                            isActive ? "opacity-100" : "opacity-0"
                          }`}
                        ></span>
                      </>
                    )}
                  </NavLink>
                ))}
              </div>

              <div className="mt-6">
                <button
                  onClick={
                    isSignedUp
                      ? handleLogout
                      : () => {
                          navigate("/login");
                          toggleMenu();
                        }
                  }
                  className={`w-full px-4 py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-md text-white font-medium flex items-center justify-center hover:scale-[1.02] transition-transform ${
                    isMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-10 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMenuOpen
                      ? `${navItems.length * 50}ms`
                      : "0ms",
                  }}
                >
                  {isSignedUp ? (
                    <span>Logout</span>
                  ) : (
                    <span>Sign In</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}