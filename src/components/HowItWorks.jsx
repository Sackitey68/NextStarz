import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaMusic, FaMoneyBillWave, FaIdCard } from "react-icons/fa";

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const steps = [
    {
      title: "1. Register Your Account",
      description: "Sign up for a new account to begin your NextStarz journey.",
      icon: <FaUser className="text-2xl" />,
      color: "from-blue-400 to-cyan-400",
    },
    {
      title: "2. Select Your Talent Category",
      description: "Choose between Singing, Rapping, or Reggae Dancehall.",
      icon: <FaMusic className="text-2xl" />,
      color: "from-purple-400 to-pink-400",
    },
    {
      title: "3. Complete Your Registration",
      description: (
        <>
          Pay the participation fee:{" "}
          <strong className="text-yellow-300">100 GHC</strong>.
        </>
      ),
      icon: <FaMoneyBillWave className="text-2xl" />,
      color: "from-green-400 to-teal-400",
    },
    {
      title: "4. Submit to Get Your ID",
      description:
        "Finalize your registration to receive your unique Submission ID for the auditions.",
      icon: <FaIdCard className="text-2xl" />,
      color: "from-yellow-400 to-orange-400",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <title>Audition Process | NextStarz</title>
      <meta
        name="description"
        content="Learn how to participate in NextStarz talent competition"
      />

      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
            The Audition Journey
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your path to stardom begins with these simple steps
          </p>
        </div>

        {/* Steps Section */}
        <div className="relative">
          {/* Timeline */}
          <div className="hidden sm:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-orange-500 transform -translate-x-1/2"></div>

          <div className="space-y-12 sm:space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col sm:flex-row items-center transition-all duration-1000 ease-out ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Left side (even steps) */}
                {index % 2 === 0 && (
                  <>
                    <div className="hidden sm:block flex-1"></div>
                    <div
                      className={`hidden sm:flex justify-center items-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} z-10 mx-4 shadow-lg`}
                    >
                      <span className="text-white">{step.icon}</span>
                    </div>
                  </>
                )}

                {/* Step Card */}
                <div
                  className={`flex-1 sm:w-5/12 transform transition-all duration-500 hover:scale-105 ${
                    index % 2 === 0 ? "sm:mr-8" : "sm:ml-8"
                  }`}
                >
                  <div
                    className={`bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl mb-8 sm:mb-0 ${
                      index % 2 === 0 ? "sm:text-right" : "sm:text-left"
                    }`}
                  >
                    <div
                      className={`sm:hidden flex justify-center items-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} mb-4 mx-auto shadow-lg`}
                    >
                      <span className="text-white">{step.icon}</span>
                    </div>
                    <h3
                      className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${step.color} mb-4`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-300">{step.description}</p>
                    <div
                      className={`hidden sm:block absolute w-4 h-4 bg-gradient-to-r ${
                        step.color
                      } rounded-full transform ${
                        index % 2 === 0 ? "-right-2" : "-left-2"
                      } top-1/2 -translate-y-1/2 shadow-md`}
                    ></div>
                  </div>
                </div>

                {/* Right side (odd steps) */}
                {index % 2 !== 0 && (
                  <>
                    <div
                      className={`hidden sm:flex justify-center items-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} z-10 mx-4 shadow-lg`}
                    >
                      <span className="text-white">{step.icon}</span>
                    </div>
                    <div className="hidden sm:block flex-1"></div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`mt-24 text-center transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative max-w-2xl mx-auto">
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full bg-purple-600/20 blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-20 h-20 rounded-full bg-cyan-600/20 blur-xl"></div>

            {/* Content container */}
            <div className="relative bg-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-gray-800/50 shadow-2xl overflow-hidden">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-cyan-600/30 via-purple-600/30 to-transparent -z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-purple-600/10 to-transparent animate-gradient-shift"></div>
              </div>

              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
                Ready to Showcase Your Talent?
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto">
                Join thousands of talented individuals competing for the chance
                to become the next big star!
              </p>

              <div className="relative inline-block group">
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl blur-md group-hover:blur-lg transition-all duration-500 -z-10"></div>

                {/* Main button with useNavigate */}
                <button
                  className="relative px-10 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white rounded-xl font-bold text-lg tracking-wide transition-all duration-300 transform group-hover:scale-105 shadow-2xl flex items-center justify-center gap-2"
                  onClick={() => navigate("/login")}
                >
                  <span>Register Now</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>

              {/* Small decorative stars */}
              <div className="absolute top-4 left-6 w-2 h-2 rounded-full bg-cyan-400/80 animate-pulse"></div>
              <div className="absolute bottom-6 right-8 w-3 h-3 rounded-full bg-purple-400/80 animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
