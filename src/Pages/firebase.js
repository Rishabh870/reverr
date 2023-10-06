// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSRpEdSZk86b6pgW9a-_bYWeNTK9x4q0k",
  authDomain: "reverr-21869.firebaseapp.com",
  projectId: "reverr-21869",
  storageBucket: "reverr-21869.appspot.com",
  messagingSenderId: "676893834588",
  appId: "1:676893834588:web:905c9bb67f997d532cd599",
  measurementId: "G-60LN2HDZ18",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
