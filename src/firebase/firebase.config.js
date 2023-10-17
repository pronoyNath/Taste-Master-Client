// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjzYwTol1S0Q1v74NRmZ5jN8NfRWhiXNk",
  authDomain: "tastemastershub.firebaseapp.com",
  projectId: "tastemastershub",
  storageBucket: "tastemastershub.appspot.com",
  messagingSenderId: "204874444780",
  appId: "1:204874444780:web:4158fe8a030fac1d9c9ac9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;