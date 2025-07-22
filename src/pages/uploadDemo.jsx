import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  collection,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  setDoc,
  query,
  where,
  getDocs,
  runTransaction,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebase/firebase.js";
import { FaCheckCircle, FaSpinner, FaTimesCircle } from "react-icons/fa";
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
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);
  const [error, setError] = useState("");
  const [category, setCategory] = useState("");
  const [generatedId, setGeneratedId] = useState("");
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [hasExistingSubmission, setHasExistingSubmission] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        navigate("/login");
        return;
      }

      try {
        setIsLoading(true);
        const submissionsRef = collection(db, "submissions");
        const q = query(submissionsRef, where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          setHasExistingSubmission(true);
          const submissionData = querySnapshot.docs[0].data();
          setGeneratedId(submissionData.id);
        }

        const transactionRef = doc(db, "transactions", user.uid);
        const transactionDoc = await getDoc(transactionRef);

        if (
          transactionDoc.exists() &&
          transactionDoc.data().status === "success"
        ) {
          setIsPaymentComplete(true);
        }
      } catch (error) {
        console.error("Error checking submission status:", error);
        // Don't show error to user - just continue with the flow
      } finally {
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

 const generateUniqueId = async () => {
  try {
    const counterRef = doc(db, "counters", "submissions");

    const newCount = await runTransaction(db, async (transaction) => {
      const counterDoc = await transaction.get(counterRef);

      let count;
      if (counterDoc.exists()) {
        count = counterDoc.data().count + 1; 
      } else {
        count = 1; // Start at 1 for first registration
      }

      transaction.set(counterRef, { count }); // Set the new count
      return count;
    });

    const paddedCount = String(newCount).padStart(5, "0");
    return `NXTS/25-${paddedCount}`;
  } catch (error) {
    console.error("Error generating unique ID:", error);
    throw new Error("Failed to generate submission ID. Please try again.");
  }
};

  const getPaystackConfig = (user) => {
    if (!user) {
      throw new Error("User not authenticated");
    }

    return {
      reference: `NXSTARZ_${new Date().getTime()}`,
      email: user.email,
      amount: 10000, // 100 GHS in kobo
      publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
      currency: "GHS",
      metadata: {
        userId: user.uid,
        category: category,
      },
    };
  };

  const handlePaystackPayment = () => {
    if (hasExistingSubmission) {
      setError("You've already registered. Only one submission is allowed.");
      return;
    }

    if (!category) {
      setError("Please select a talent category before payment");
      return;
    }

    const user = auth.currentUser;
    if (!user) {
      setError("Please sign in to make a payment");
      return;
    }

    setIsProcessingPayment(true);
    setError("");

    const initializePayment = usePaystackPayment(getPaystackConfig(user));

    const paymentTimeout = setTimeout(() => {
      setIsProcessingPayment(false);
      setError("Payment took too long. Please try again.");
    }, 300000);

    initializePayment({
      onSuccess: async (response) => {
        clearTimeout(paymentTimeout);
        try {
          await saveTransactionToFirebase(response.reference, user);
          const verificationSuccess = await verifyPayment(response.reference);

          if (verificationSuccess) {
            await createSubmissionRecord(user);
            setIsPaymentComplete(true);
            setError("");
          } else {
            setError("Payment verification failed. Please contact support.");
          }
        } catch (error) {
          setError(error.message);
        } finally {
          setIsProcessingPayment(false);
        }
      },
      onClose: () => {
        clearTimeout(paymentTimeout);
        setIsProcessingPayment(false);
        setError("Payment was not completed. Please try again.");
      },
    });
  };

  const createSubmissionRecord = async (user) => {
    try {
      console.log("Starting submission creation..."); // Debug log
      console.log("User data:", { uid: user?.uid, email: user?.email }); // Debug log
      console.log("Selected category:", category); // Debug log

      const uniqueId = await generateUniqueId();
      console.log("Generated ID:", uniqueId); // Debug log

      const submissionData = {
        id: uniqueId,
        category: category,
        userEmail: user.email || "no-email-provided",
        username: user.displayName || "Anonymous",
        timestamp: new Date(),
        userId: user.uid,
        status: "registered",
      };

      console.log("Submission data to be saved:", submissionData); // Debug log

      const docRef = await addDoc(
        collection(db, "submissions"),
        submissionData
      );
      console.log("Document written with ID: ", docRef.id); // Debug log

      setGeneratedId(uniqueId);
      setHasExistingSubmission(true);
      return uniqueId;
    } catch (error) {
      console.error("Full error details:", {
        message: error.message,
        stack: error.stack,
        name: error.name,
      });
      throw new Error("Failed to create submission record. Please try again.");
    }
  };

  const saveTransactionToFirebase = async (reference, user) => {
    if (!user) throw new Error("User not authenticated");

    const config = getPaystackConfig(user);
    const transactionRef = doc(db, "transactions", user.uid);

    await setDoc(
      transactionRef,
      {
        reference,
        email: config.email,
        amount: config.amount,
        status: "pending",
        createdAt: new Date(),
        userId: user.uid,
        category,
      },
      { merge: true }
    );
  };

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

      const data = await response.json();

      if (!response.ok || !data.status || data.data.status !== "success") {
        throw new Error(data.message || "Payment verification failed");
      }

      const user = auth.currentUser;
      if (!user) throw new Error("User not authenticated");

      const transactionRef = doc(db, "transactions", user.uid);
      await updateDoc(transactionRef, {
        status: "success",
        verifiedAt: new Date(),
        paymentData: data.data,
      });

      return true;
    } catch (error) {
      console.error("Payment verification error:", error);
      const user = auth.currentUser;
      if (user) {
        const transactionRef = doc(db, "transactions", user.uid);
        await updateDoc(transactionRef, {
          status: "failed",
          error: error.message,
        });
      }
      throw error;
    }
  };

  const goToHomePage = () => {
    navigate("/");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <FaSpinner className="animate-spin text-4xl text-purple-500" />
      </div>
    );
  }

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
          Register for NextStarz Auditions 🌟
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Select your talent category and pay GHS 100 to get your Submission ID
        </p>

        {hasExistingSubmission ? (
          <motion.div variants={fadeInUp} className="text-center">
            <div className="p-6 bg-blue-50 rounded-lg">
              <FaCheckCircle className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <p className="text-lg text-blue-600 mb-2">
                You've successfully registered!
              </p>
              <p className="text-lg font-semibold mb-4">
                Your Submission ID:{" "}
                <span className="text-purple-600">{generatedId}</span>
              </p>
              <p className="text-gray-600 mb-4">
                Please present this ID during auditions at Class Media Group
                Headquarters, Labone from August 8-17, 2025.
              </p>
              <button
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors duration-300"
                onClick={goToHomePage}
              >
                🏠 Go to Home
              </button>
            </div>
          </motion.div>
        ) : (
          <>
            <motion.div variants={fadeInUp} className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Select Your Talent Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="singing">🎤 Singing</option>
                <option value="rapping">🎙️ Rapping</option>
                <option value="reggae-dancehall">🎵 Reggae-Dancehall</option>
              </select>
            </motion.div>

            {error && (
              <motion.div
                variants={fadeInUp}
                className="mt-4 p-4 bg-red-50 rounded-lg flex items-center justify-center text-red-600"
              >
                <FaTimesCircle className="w-5 h-5 mr-2" />
                <p className="text-lg">{error}</p>
              </motion.div>
            )}

            <motion.div variants={fadeInUp} className="mt-8 text-center">
              <button
                className={`px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-colors duration-300 ${
                  isProcessingPayment ? "opacity-75 cursor-not-allowed" : ""
                }`}
                onClick={handlePaystackPayment}
                disabled={isProcessingPayment || !category}
              >
                {isProcessingPayment ? (
                  <>
                    <FaSpinner className="inline-block animate-spin mr-2" />
                    Processing Payment...
                  </>
                ) : (
                  "💳 Pay GHC 100 to Register"
                )}
              </button>
              <p className="text-sm text-gray-500 mt-2">
                Secure payment powered by Paystack
              </p>
            </motion.div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
