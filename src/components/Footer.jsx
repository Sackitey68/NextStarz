export default function Footer() {
    return (
      <footer className="bg-black text-white py-16">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">NextStarz</h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Join the ultimate talent show platform and shine bright in categories like singing, dancing, and songwriting. Let the world see your talent!
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <h3 className="text-lg font-semibold mb-2">Explore</h3>
              <a href="#" className="text-sm hover:text-gray-400">Home</a>
              <a href="#" className="text-sm hover:text-gray-400">Categories</a>
              <a href="#" className="text-sm hover:text-gray-400">About Us</a>
              <a href="#" className="text-sm hover:text-gray-400">Contact</a>
            </div>
            <div className="flex flex-col space-y-3">
              <h3 className="text-lg font-semibold mb-2">Legal</h3>
              <a href="#" className="text-sm hover:text-gray-400">Terms of Service</a>
              <a href="#" className="text-sm hover:text-gray-400">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-gray-400">Cookies Policy</a>
            </div>
          </div>
          <hr className="my-10 border-gray-700" />
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} NextStarz. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" aria-label="Facebook" className="hover:text-gray-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-gray-300">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  