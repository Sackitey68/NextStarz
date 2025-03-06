import { useState } from "react";
import { motion } from "framer-motion";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore"; // Import Firestore functions
import { storage, db } from "../firebase/firebase.js";
import {
  FaUpload,
  FaCheckCircle,
  FaSpinner,
  FaTimesCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
  const [category, setCategory] = useState("");
  const [isUploadComplete, setIsUploadComplete] = useState(false);
  const [generatedId, setGeneratedId] = useState(""); // State to store the generated ID
  const navigate = useNavigate();

  // Function to generate a unique ID
  const generateUniqueId = async () => {
    try {
      // Reference to the counter document
      const counterRef = doc(db, "counters", "demoUploads");

      // Fetch the current counter value
      const counterDoc = await getDoc(counterRef);
      let count = counterDoc.exists() ? counterDoc.data().count : 0;

      // Increment the counter
      count += 1;

      // Update the counter in Firestore
      await updateDoc(counterRef, { count });

      // Format the ID as NXTS/25-XXXXX
      const paddedCount = String(count).padStart(5, "0");
      return `NXTS/25-${paddedCount}`;
    } catch (error) {
      console.error("Error generating unique ID:", error);
      throw error;
    }
  };

  // Handle video upload to Firebase
  const handleUpload = async () => {
    if (!videoFile) {
      setError("Please select a video file first.");
      return;
    }

    if (!category) {
      setError("Please select a category for your video.");
      return;
    }

    setIsUploading(true);

    try {
      // Generate a unique ID
      const uniqueId = await generateUniqueId();
      setGeneratedId(uniqueId); // Store the generated ID in state

      // Create a reference to the storage location
      const storageRef = ref(storage, `demos/${category}/${videoFile.name}`);

      // Upload the file
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
        async () => {
          // Upload completed successfully
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          // Save metadata to Firestore
          await addDoc(collection(db, "demos"), {
            id: uniqueId, // Save the generated ID
            fileName: videoFile.name,
            category: category,
            downloadURL: downloadURL,
            timestamp: new Date(),
          });

          setDownloadURL(downloadURL);
          setIsUploading(false);
          setIsUploadComplete(true);
          alert("Upload successful! Thank you for submitting your demo.");
        }
      );
    } catch (error) {
      console.error("Error during upload:", error);
      setError("An error occurred. Please try again.");
      setIsUploading(false);
    }
  };

  // Function to navigate to the home page
  const goToHomePage = () => {
    navigate("/"); // Replace "/" with your home page route
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
          Show us your talent! Upload a 2 minutes video of your performance and
          pay Ghc 100 to submit your demo.
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
            <option value="singer">Singer</option>
            <option value="songwriter">Songwriter</option>
            <option value="dancer">Dancer</option>
            <option value="comedian">Comedian</option>
            <option value="instrumentPlayer">Instrument player</option>
            <option value="beatMaker">Beat-Maker</option>
            <option value="DJ">DJ</option>
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
              onClick={handleUpload}
            >
              Submit Demo
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

        {/* Success Message and Go to Home Button */}
        {isUploadComplete && (
          <motion.div
            variants={fadeInUp}
            className="mt-8 text-center"
          >
            <p className="text-lg text-green-600 mb-4">
              Your demo has been successfully submitted! Your ID is:{" "}
              <strong>{generatedId}</strong>
            </p>
            <button
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-colors duration-300"
              onClick={goToHomePage}
            >
              Go to Home
            </button>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}