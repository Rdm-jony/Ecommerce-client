// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw7QITsqVO6jSjHA2itT4-Geu2Gft32cM",
  authDomain: "ecommerce-react-1b8a7.firebaseapp.com",
  projectId: "ecommerce-react-1b8a7",
  storageBucket: "ecommerce-react-1b8a7.firebasestorage.app",
  messagingSenderId: "752349383516",
  appId: "1:752349383516:web:c0ca5d4ac068a42a170f99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
