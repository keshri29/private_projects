import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQWZ3ZcY_GD0cQkzT0O3boKF-t-wXR7Uo",
  authDomain: "react-netflix-clone-8b7d7.firebaseapp.com",
  projectId: "react-netflix-clone-8b7d7",
  storageBucket: "react-netflix-clone-8b7d7.appspot.com",
  messagingSenderId: "927503517792",
  appId: "1:927503517792:web:9c9e4b3a36a90b4f945b05",
  measurementId: "G-XFMM3BPKDC"
};
const app = initializeApp(firebaseConfig);
const firebaseAuth = getAnalytics(app);



