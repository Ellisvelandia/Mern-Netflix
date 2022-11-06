import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGs-NiFaPZWy62KuZVrJ9tX140iPqMqeI",
  authDomain: "react-netflix-clone-e345c.firebaseapp.com",
  projectId: "react-netflix-clone-e345c",
  storageBucket: "react-netflix-clone-e345c.appspot.com",
  messagingSenderId: "178495340301",
  appId: "1:178495340301:web:819a787839e010d906fa44",
  measurementId: "G-9H2GHX5GJJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
