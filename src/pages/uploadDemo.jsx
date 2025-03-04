import { useState } from "react";
import { motion } from "framer-motion";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { storage } from "../firebase"; // Ensure Firebase is initialized
import {
  FaUpload,
  FaCheckCircle,
  FaSpinner,
  FaTimesCircle,
} from "react-icons/fa";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

export default function UploadDemo() {
  const [videoFile, setVideoFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [downloadURL, setDownloadURL] = useState("");
  const [error, setError] = useState("");
  const [category, setCategory] = useState(""); // State for selected category

  // Flutterwave configuration
  const config = {
    public_key: "YOUR_FLUTTERWAVE_PUBLIC_KEY", // Replace with your Flutterwave public key
    tx_ref: Date.now().toString(), // Unique transaction reference
    amount: 100, // Amount in Ghc
    currency: "GHS", // Currency (Ghanaian Cedi)
    payment_options: "card, mobilemoneyghana", // Payment methods
    customer: {
      email: "user@example.com", // Replace with user's email
      phone_number: "0541234567", // Replace with user's phone number
      name: "John Doe", // Replace with user's name
    },
    customizations: {
      title: "Demo Submission",
      description: "Payment for uploading a demo video",
      logo: "https://your-logo-url.com/logo.png", // Your logo URL
    },
  };

  const handleFlutterwavePayment = useFlutterwave(config);

  // Handle Flutterwave payment success
  const onPaymentSuccess = () => {
    setIsPaymentSuccessful(true);
    handleUpload(); // Start upload after payment
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file type
      if (!file.type.startsWith("video/")) {
        setError("Please upload a valid video file.");
        setVideoFile(null);
        return;
      }

      // Check file size (20MB limit)
      const fileSizeInMB = file.size / (1024 * 1024); // Convert bytes to MB
      if (fileSizeInMB > 20) {
        setError("File size must not exceed 20MB.");
        setVideoFile(null);
        return;
      }

      // If valid, set the file and clear any previous errors
      setVideoFile(file);
      setError("");
    }
  };

  // Handle video upload to Firebase
  const handleUpload = () => {
    if (!videoFile) {
      setError("Please select a video file first.");
      return;
    }

    if (!category) {
      setError("Please select a category for your video.");
      return;
    }

    setIsUploading(true);
    const storageRef = ref(storage, `demos/${category}/${videoFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, videoFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error("Upload failed:", error);
        setError("Upload failed. Please try again.");
        setIsUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setDownloadURL(url);
          setIsUploading(false);
          alert("Upload successful! Thank you for submitting your demo.");
        });
      }
    );
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        variants={fadeInUp}
        className="max-w-3xl mx-auto bg-white rounded-lg shadow-2xl p-8"
      >
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Upload Your Demo
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Show us your talent! Upload a video of your performance and pay Ghc
          100 to submit your demo.
        </p>

        {/* Category Selection */}
        <motion.div variants={fadeInUp} className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Select Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 focus:outline-none focus:ring-primary-color focus:border-yellow-300 placeholder-gray-400 border-gray-300 rounded-lg focus:ring-2 transition-all duration-300"
            required
          >
            <option value="" disabled>
              Choose a category
            </option>
            <option value="singing">Singing</option>
            <option value="comedy">Comedy</option>
            <option value="dancing">Dancing</option>
            <option value="songwriting">Songwriting</option>
          </select>
        </motion.div>

        {/* File Upload Section */}
        <motion.div
          variants={scaleUp}
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-purple-500 transition-colors duration-300"
          onClick={() => document.getElementById("video-upload").click()}
        >
          <input
            id="video-upload"
            type="file"
            accept="video/*"
            className="hidden"
            onChange={handleFileChange}
          />
          {videoFile ? (
            <div className="flex flex-col items-center">
              <FaCheckCircle className="w-12 h-12 text-green-500 mb-4" />
              <p className="text-lg text-gray-700">{videoFile.name}</p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <FaUpload className="w-12 h-12 text-purple-500 mb-4" />
              <p className="text-lg text-gray-700">
                Click here to upload your video
              </p>
            </div>
          )}
        </motion.div>

        {/* Error Message */}
        {error && (
          <motion.div
            variants={fadeInUp}
            className="mt-4 flex items-center justify-center text-red-600"
          >
            <FaTimesCircle className="w-5 h-5 mr-2" />
            <p className="text-lg">{error}</p>
          </motion.div>
        )}

        {/* Progress Bar */}
        {isUploading && (
          <motion.div
            variants={fadeInUp}
            className="mt-6 bg-gray-200 rounded-full h-4 overflow-hidden"
          >
            <div
              className="bg-purple-500 h-full rounded-full transition-width duration-500"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </motion.div>
        )}

        {/* Payment Button */}
        {!isPaymentSuccessful && videoFile && !error && category && (
          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <button
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-colors duration-300"
              onClick={() =>
                handleFlutterwavePayment({
                  callback: (response) => {
                    onPaymentSuccess();
                    closePaymentModal();
                  },
                  onClose: () => {
                    alert("Payment was not completed. Please try again.");
                  },
                })
              }
            >
              Pay Ghc 100 to Submit
            </button>
          </motion.div>
        )}

        {/* Uploading Spinner */}
        {isUploading && (
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-col items-center"
          >
            <FaSpinner className="w-8 h-8 text-purple-500 animate-spin mb-2" />
            <p className="text-lg text-gray-700">Uploading your video...</p>
          </motion.div>
        )}

        {/* Success Message */}
        {downloadURL && (
          <motion.div
            variants={fadeInUp}
            className="mt-8 text-center text-green-600"
          >
            <p className="text-lg">
              Your demo has been successfully submitted!
            </p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
