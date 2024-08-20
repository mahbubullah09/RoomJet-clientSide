// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZJxhzYNl9d9_r3QdonbKCFDM_TSzfq6g",
  authDomain: "roomjet01.firebaseapp.com",
  projectId: "roomjet01",
  storageBucket: "roomjet01.appspot.com",
  messagingSenderId: "801928899157",
  appId: "1:801928899157:web:57c34c47e0be46291a82dc",
  measurementId: "G-HP4V0847SC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);