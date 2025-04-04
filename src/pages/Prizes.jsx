import { useEffect } from "react";
import {
  FaTrophy,
  FaCertificate,
  FaMicrophone,
  FaMusic,
  FaGlobe,
  FaCashRegister,
} from "react-icons/fa";

export default function Prizes() {
  // IntersectionObserver for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "animate-fade-in",
              "opacity-100",
              "translate-y-0"
            );
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const sections = document.querySelectorAll(".animate-on-scroll");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="text-white min-h-screen py-10 px-6 lg:px-8">
      <title>About Us | Suede Entertainment</title>
      <meta
        name="description"
        content="Discover Suede Entertainment - A powerhouse in music and entertainment industry"
      />

      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in opacity-0 translate-y-10 animate-on-scroll">
          Awards & Recognition – NextStarz Season 1
        </h1>
        <p className="text-lg text-gray-400 animate-fade-in opacity-0 translate-y-10 animate-on-scroll delay-100">
          Celebrating talent, rewarding excellence, and providing life-changing
          opportunities.
        </p>
      </div>

      {/* Certificates Section */}
      <div className="max-w-4xl mx-auto mb-16 opacity-0 translate-y-10 animate-on-scroll">
        <h2 className="text-3xl font-bold mb-8 flex items-center justify-center">
          <FaCertificate className="mr-2 text-primary-color" /> Certificates of
          Recognition
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
            <h3 className="text-xl font-semibold mb-4 group-hover:text-primary-color transition-all duration-300">
              Certificate of Participation
            </h3>
            <p className="text-gray-400 group-hover:text-gray-200 transition-all duration-300">
              Awarded to all contestants who enter and complete the audition
              process.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
            <h3 className="text-xl font-semibold mb-4 group-hover:text-primary-color transition-all duration-300">
              Special Recognition Certificate
            </h3>
            <p className="text-gray-400 group-hover:text-gray-200 transition-all duration-300">
              Given to winners and runners-up for their outstanding
              performances.
            </p>
          </div>
        </div>
      </div>

      {/* Grand Prizes Section */}
      <div className="max-w-4xl mx-auto mb-16 opacity-0 translate-y-10 animate-on-scroll delay-200">
        <h2 className="text-3xl font-bold mb-8 flex items-center justify-center">
          <FaTrophy className="mr-2 text-primary-color" /> Grand Prizes &
          Rewards
        </h2>
        <div className="space-y-8">
          {/* Grand Prize Winner */}
          <div className="bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
            <h3 className="text-2xl font-bold mb-4 text-primary-color group-hover:text-white transition-all duration-300">
              🥇 Grand Prize Winner – "The Next Big Star"
            </h3>
            <ul className="list-disc list-inside text-gray-400 group-hover:text-gray-200 transition-all duration-300">
              <li>Exclusive management deal with Suede Entertainment.</li>
              <li>Full recording and production of a debut album.</li>
              <li>Worldwide album distribution via Lynx Distribution.</li>
              <li>Cash Prize of GHS 10,000.00.</li>
              <li>
                Extensive media exposure and a fully sponsored trip to Dubai.
              </li>
            </ul>
          </div>

          {/* 1st Runner-Up */}
          <div className="bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
            <h3 className="text-2xl font-bold mb-4 text-primary-color group-hover:text-white transition-all duration-300">
              🥈 1st Runner-Up
            </h3>
            <ul className="list-disc list-inside text-gray-400 group-hover:text-gray-200 transition-all duration-300">
              <li>Single production deal with Suede Entertainment.</li>
              <li>Worldwide single distribution via Lynx Distribution.</li>
              <li>Cash Prize of GHS 6,000.00.</li>
              <li>Media coverage to increase exposure.</li>
            </ul>
          </div>

          {/* 2nd Runner-Up */}
          <div className="bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
            <h3 className="text-2xl font-bold mb-4 text-primary-color group-hover:text-white transition-all duration-300">
              🥉 2nd Runner-Up
            </h3>
            <ul className="list-disc list-inside text-gray-400 group-hover:text-gray-200 transition-all duration-300">
              <li>Single production deal with Suede Entertainment.</li>
              <li>Worldwide single distribution via Lynx Distribution.</li>
              <li>Cash Prize of GHS 4,000.00.</li>
              <li>Media coverage to enhance public recognition.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Special Opportunity Section */}
      <div className="max-w-4xl mx-auto mb-16 opacity-0 translate-y-10 animate-on-scroll delay-300">
        <h2 className="text-3xl font-bold mb-8 flex items-center justify-center">
          <FaMicrophone className="mr-2 text-primary-color" /> Special
          Opportunity for Evictees
        </h2>
        <div className="bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
          <p className="text-gray-400 group-hover:text-gray-200 transition-all duration-300">
            Contestants who do not make it to the final round but display
            remarkable potential will receive:
          </p>
          <ul className="list-disc list-inside text-gray-400 group-hover:text-gray-200 mt-4 transition-all duration-300">
            <li>Single recording and production by Suede Entertainment.</li>
            <li>Worldwide single distribution via Lynx Distribution.</li>
          </ul>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 animate-fade-in opacity-0 translate-y-10 animate-on-scroll">
          Your Journey Starts Here!
        </h2>
        <p className="text-lg text-gray-400 mb-8 animate-fade-in opacity-0 translate-y-10 animate-on-scroll delay-100">
          NextStarz is not just a talent hunt—it is a force, a movement, and the
          future of music discovery.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
            <h3 className="text-xl font-semibold mb-4 group-hover:text-primary-color transition-all duration-300">
              Registration Details
            </h3>
            <p className="text-gray-400 group-hover:text-gray-200 transition-all duration-300">
              <span className="font-bold">Opens:</span> April 5, 2025
              <br />
              <span className="font-bold">Closes:</span> June 5, 2025
              <br />
              <span className="font-bold">Fee:</span> GHS 100 (via Paystack)
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
            <h3 className="text-xl font-semibold mb-4 group-hover:text-primary-color transition-all duration-300">
              Audition Schedule
            </h3>
            <p className="text-gray-400 group-hover:text-gray-200 transition-all duration-300">
              <span className="font-bold">📍 Online:</span> May 29 – June 3,
              2025
              <br />
              <span className="font-bold">📍 Offline:</span> CeeJay Multimedia,
              Lapaz, Accra <br /> June 5 – 7, 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}