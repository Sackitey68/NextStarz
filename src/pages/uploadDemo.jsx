import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { storage, db } from "../firebase/firebase.js";
import {
  FaUpload,
  FaCheckCircle,
  FaSpinner,
  FaTimesCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { usePaystackPayment } from "react-paystack";


const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

export default function UploadDemo() {
  const [videoFile, setVideoFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [isPaymentComplete, setIsPaymentComplete] = useState(false)
  const [downloadURL, setDownloadURL] = useState("");
  const [error, setError] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [isUploadComplete, setIsUploadComplete] = useState(false);
  const [generatedId, setGeneratedId] = useState("");
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const navigate = useNavigate();

  // Firebase Auth
  const auth = getAuth();

  // Redirect to login if user is not logged in
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  // Check for existing successful payment
  useEffect(() => {
    const checkExistingPayment = async () => {
      const user = auth.currentUser;
      if (!user) return;

      try {
        const transactionRef = doc(db, "transactions", `user_${user.uid}`);
        const transactionDoc = await getDoc(transactionRef);

        if (transactionDoc.exists() && transactionDoc.data().status === "success") {
          setIsPaymentComplete(true);
        }
      } catch (error) {
        console.error("Error checking existing payment:", error);
      }
    };

    checkExistingPayment();
  }, [auth.currentUser]);

  // Paystack configuration
  const getPaystackConfig = () => {
    const user = auth.currentUser;
    return {
      reference: `NXSTARZ_${new Date().getTime()}`,
      email: user?.email || "user@example.com",
      amount: 10000, // 100 GHS in kobo
      publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
      currency: "GHS",
      metadata: {
        userId: user?.uid,
        category: category,
        country: country
      }
    };
  };

  // Initialize Paystack payment
  const config = getPaystackConfig();
  const initializePayment = usePaystackPayment(config);

  const handlePaystackPayment = () => {
    if (!category || !country) {
      setError("🚫 Please select both category and country before payment");
      return;
    }

    setIsProcessingPayment(true);
    setError("");

    initializePayment(
      async (response) => {
        try {
          // Save transaction to Firebase
          await saveTransactionToFirebase(response.reference, config.email, config.amount);
          
          // Verify payment
          const verificationSuccess = await verifyPayment(response.reference);
          
          if (verificationSuccess) {
            setIsPaymentComplete(true);
            setError("");
          }
        } catch (error) {
          setError(`🚫 ${error.message}`);
        } finally {
          setIsProcessingPayment(false);
        }
      },
      () => {
        setError("🚫 Payment was not completed. Please try again.");
        setIsProcessingPayment(false);
      }
    );
  };

  // Save transaction to Firebase
  const saveTransactionToFirebase = async (reference, email, amount) => {
    const user = auth.currentUser;
    if (!user) throw new Error("User not authenticated");

    const transactionRef = doc(db, "transactions", `user_${user.uid}`);
    await setDoc(transactionRef, {
      reference,
      email,
      amount,
      status: "pending",
      createdAt: new Date(),
      userId: user.uid,
      category,
      country
    }, { merge: true });
  };

  // Verify payment with Paystack
  const verifyPayment = async (reference) => {
    try {
      const response = await fetch(
        `https://api.paystack.co/transaction/verify/${reference}`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_PAYSTACK_SECRET_KEY}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Payment verification failed");
      }

      const data = await response.json();

      if (data.status && data.data.status === "success") {
        // Update transaction in Firebase
        const user = auth.currentUser;
        if (!user) throw new Error("User not authenticated");

        const transactionRef = doc(db, "transactions", `user_${user.uid}`);
        await updateDoc(transactionRef, {
          status: "success",
          verifiedAt: new Date(),
          paymentData: data.data
        });

        return true;
      } else {
        throw new Error(data.message || "Payment verification failed");
      }
    } catch (error) {
      console.error("Payment verification error:", error);
      throw error;
    }
  };

  // Handle file input change (keeping your original implementation)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("video/")) {
        setError("🚫 Oops! Please upload a valid video file.");
        setVideoFile(null);
        return;
      }

      const fileSizeInMB = file.size / (1024 * 1024);
      if (fileSizeInMB > 20) {
        setError("🚫 File size must not exceed 20MB.");
        setVideoFile(null);
        return;
      }

      setVideoFile(file);
      setError("");
    }
  };

  // Handle video upload (keeping your original implementation with minor adjustments)
  const handleUpload = async () => {
    if (!isPaymentComplete) {
      setError("🚫 Please complete the payment to proceed with the upload.");
      return;
    }

    if (!videoFile) {
      setError("🚫 Please select a video file first.");
      return;
    }

    if (!category) {
      setError("🚫 Please select a category for your video.");
      return;
    }

    if (!country) {
      setError("🚫 Please select your country.");
      return;
    }

    setIsUploading(true);

    try {
      const user = auth.currentUser;

      if (!user) {
        setError("🚫 You must be logged in to upload a demo.");
        setIsUploading(false);
        return;
      }

      const email = user.email;
      const username = user.displayName || "Anonymous";

      // Generate a unique ID
      const uniqueId = await generateUniqueId();
      setGeneratedId(uniqueId);

      // Upload the file to Firebase Storage
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
          setError("🚫 Upload failed. Please try again.");
          setIsUploading(false);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          // Save metadata to Firestore
          await addDoc(collection(db, "demos"), {
            id: uniqueId,
            fileName: videoFile.name,
            category: category,
            country: country,
            downloadURL: downloadURL,
            userEmail: email,
            username: username,
            timestamp: new Date(),
            userId: user.uid
          });

          setDownloadURL(downloadURL);
          setIsUploading(false);
          setIsUploadComplete(true);
        }
      );
    } catch (error) {
      console.error("Error during upload:", error);
      setError("🚫 An error occurred. Please try again.");
      setIsUploading(false);
    }
  };

  // Generate unique ID (keeping your original implementation)
  const generateUniqueId = async () => {
    try {
      const counterRef = doc(db, "counters", "demoUploads");
      const counterDoc = await getDoc(counterRef);
      let count = counterDoc.exists() ? counterDoc.data().count : 0;
      count += 1;
      await updateDoc(counterRef, { count });
      const paddedCount = String(count).padStart(5, "0");
      return `NXTS/25-${paddedCount}`;
    } catch (error) {
      console.error("Error generating unique ID:", error);
      throw error;
    }
  };

  // Navigate to home page (keeping your original implementation)
  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-bg-color"
    >
      <motion.div
        variants={fadeInUp}
        className="max-w-3xl mx-auto bg-white rounded-lg shadow-2xl p-8"
      >
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          🎤 Show Us Your Talent! 🌟
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Upload a 2-minute demo video (Max: 20MB) and pay GHS 100 to submit
          your performance.
        </p>

        {/* Category Selection */}
        <motion.div variants={fadeInUp} className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Select Your Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 focus:outline-none focus:ring-primary-color focus:border-yellow-300 placeholder-gray-400 border-gray-300 rounded-lg focus:ring-2 transition-all duration-300"
            required
          >
            <option value="" disabled>
              ✅ Choose a category
            </option>
            <option value="singer">🎤 Singer</option>
            <option value="songwriter">🎵 Songwriter</option>
            <option value="dancer">💃 Dancer</option>
            <option value="comedian">🎭 Comedian</option>
            <option value="instrumentPlayer">🎸 Instrument Player</option>
            <option value="beatMaker">🎧 Beat-Maker</option>
            <option value="DJ">🎧 DJ</option>
          </select>
        </motion.div>

        {/* Country Selection */}
        <motion.div variants={fadeInUp} className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Select Your Country
          </label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 focus:outline-none focus:ring-primary-color focus:border-yellow-300 placeholder-gray-400 border-gray-300 rounded-lg focus:ring-2 transition-all duration-300"
            required
          >
            <option value="" disabled>
              ✅ Choose your Country
            </option>
            <option value="Ghana">🇬🇭 Ghana</option>
            <option value="Other">🌍 Other</option>
          </select>
        </motion.div>

        {/* File Upload Section */}
        <motion.div
          variants={scaleUp}
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-purple-500 transition-colors duration-300 mb-6"
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
                📤 Click here to upload your video
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

        {/* Paystack Payment Button */}
        {!isPaymentComplete && videoFile && !error && category && country && (
          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <button
              className={`px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-colors duration-300 ${
                isProcessingPayment ? "opacity-75 cursor-not-allowed" : ""
              }`}
              onClick={handlePaystackPayment}
              disabled={isProcessingPayment}
            >
              {isProcessingPayment ? (
                <>
                  <FaSpinner className="inline-block animate-spin mr-2" />
                  Processing Payment...
                </>
              ) : (
                "💳 Pay GHC 100 to Submit"
              )}
            </button>
          </motion.div>
        )}

        {/* Upload Button (Visible After Payment) */}
        {isPaymentComplete && !isUploading && !isUploadComplete && (
          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <button
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-colors duration-300"
              onClick={handleUpload}
            >
              📤 Upload Your Video
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
            <p className="text-lg text-gray-700">📤 Uploading your video...</p>
          </motion.div>
        )}

        {/* Success Message */}
        {isUploadComplete && (
          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <p className="text-lg text-green-600 mb-4">
              🎉 Your demo has been successfully submitted! Your ID is:{" "}
              <strong>{generatedId}</strong>
            </p>
            <button
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-colors duration-300"
              onClick={goToHomePage}
            >
              🏠 Go to Home
            </button>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}