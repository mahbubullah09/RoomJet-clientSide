// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQsgcGfmiFbAGOxKcBwJwp61R15UlP2m8",
  authDomain: "roomjet-1d0e8.firebaseapp.com",
  projectId: "roomjet-1d0e8",
  storageBucket: "roomjet-1d0e8.appspot.com",
  messagingSenderId: "429421485305",
  appId: "1:429421485305:web:140272fb0b7ae37aae1628"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);