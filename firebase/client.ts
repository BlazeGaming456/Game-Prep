// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO1PDeLstGjusIaE7Nhp-TNJH6MTiUtSQ",
  authDomain: "gameprep-5ffe5.firebaseapp.com",
  projectId: "gameprep-5ffe5",
  storageBucket: "gameprep-5ffe5.firebasestorage.app",
  messagingSenderId: "754407660556",
  appId: "1:754407660556:web:7a421862c0ed365f69e229",
  measurementId: "G-G67YM1RCD3"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
