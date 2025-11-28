// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMSAkcbpyY-Gj8w3Teqs4QAorLF1gzqhk",
  authDomain: "front-project-3466b.firebaseapp.com",
  projectId: "front-project-3466b",
  storageBucket: "front-project-3466b.firebasestorage.app",
  messagingSenderId: "448539284860",
  appId: "1:448539284860:web:d7e434024684b33ca240f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

