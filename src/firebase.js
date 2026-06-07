import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbawnFYjMuZ711orbuGJ5YzRjnxNEvoOA",
  authDomain: "portfolio-db0a6.firebaseapp.com",
  projectId: "portfolio-db0a6",
  storageBucket: "portfolio-db0a6.firebasestorage.app",
  messagingSenderId: "966719674723",
  appId: "1:966719674723:web:797ce0216c336763501b56",
  measurementId: "G-2EJ0FVJDLS",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
