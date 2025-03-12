import { FaSpotify } from "react-icons/fa"; 
import AudiomackIcon from "../assets/icons/audiomack.svg"; 
import BoomplayIcon from "../assets/icons/boomplay.svg"; 

export default function Song() {
  // Streaming platform links
  const streamingLinks = [
    {
      platform: "Spotify",
      icon: <FaSpotify className="text-2xl text-green-500" />, 
      link: "https://open.spotify.com/track/your-song-id", 
    },
    {
      platform: "Audiomack",
      icon: <img src={AudiomackIcon} alt="Audiomack" className="w-6 h-6" />, 
      link: "https://audiomack.com/your-song-link", 
    },
    {
      platform: "Boomplay",
      icon: <img src={BoomplayIcon} alt="Boomplay" className="w-6 h-6" />,
      link: "https://www.boomplay.com/your-song-link",
    },
  ];

  return (
    <>
      {/* Song Section */}
      <div className="max-w-7xl mx-auto mt-16 px-4 mb-24">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-300">
          🎵 Soundtrack 🎵
        </h2>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg overflow-hidden p-6">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-white mb-4 ">
              Shine Like a Star 
              <p className="text-xl text-neutral-900">By Diojo</p> 
            </h3>
            <p className="text-gray-200 mb-6">
              Listen to the official soundtrack for NextStarz Season 1
            </p>

            {/* Streaming Platform Links */}
            <div className="flex flex-wrap justify-center gap-4">
              {streamingLinks.map((platform, index) => (
                <a
                  key={index}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <span className="mr-2">{platform.icon}</span>
                  <span className="text-lg font-semibold text-gray-800">
                    {platform.platform}
                  </span>
                </a>
              ))}
            </div>

            {/* Fun Message */}
            <p className="text-gray-200 mt-6">
              Click on any of the icons above to stream 🎧
            </p>
          </div>
        </div>
      </div>
    </>
  );
}