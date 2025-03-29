const HowItWorks = () => {
  return (
    <div className="mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-400 mb-8 animate-bounce">
          How to Participate
        </h2>
        <div className="space-y-8">
          {/* Step 1: Create Account or Login */}
          <div className="bg-white/10 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-300 mb-4">
              1. Create an Account or Login
            </h3>
            <p className="text-gray-400 mb-4">
              Sign up for a new account or log in using your social media
              accounts (Google, Facebook, etc.).
            </p>
          </div>

          {/* Step 2: Select Category */}
          <div className="bg-white/10 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-300 mb-4">
              2: Select Your Category
            </h3>
            <p className="text-gray-400 mb-4">
              Choose the category you want to compete in (e.g., Singing,
              Dancing, Comedy, etc.).
            </p>
          </div>

          {/* Step 3: Upload Demo Video */}
          <div className="bg-white/10 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-300 mb-4">
              3: Upload Your Demo Video
            </h3>
            <p className="text-gray-400 mb-4">
              Upload a 2-minute video (max 20MB) showcasing your talent.
            </p>
          </div>

          {/* Step 4: Make Payment */}
          <div className="bg-white/10 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-300 mb-4">
              4: Make Payment
            </h3>
            <p className="text-gray-400 mb-4">
              Pay the participation fee:{" "}
              <strong className="text-purple-400">100 GHC</strong> for Ghanaians
              or <strong className="text-purple-400">7 USD</strong> for
              non-Ghanaians.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
