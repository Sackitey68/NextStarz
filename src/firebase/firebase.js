// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWFFqLzr6rXSY7LU72XfOdEDt9COsfw1U",
  authDomain: "nextstarz.firebaseapp.com",
  projectId: "nextstarz",
  storageBucket: "nextstarz.firebasestorage.app",
  messagingSenderId: "555293150730",
  appId: "1:555293150730:web:2bbbde6a74c0237dc459f3",
  measurementId: "G-ML1R1QKHTH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


const db = getFirestore(app);

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, db }; 