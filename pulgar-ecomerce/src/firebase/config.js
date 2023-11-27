// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArKSy1M3bbfEnaRoDF51tVwQjX2f8ulWc",
  authDomain: "pulgarecommerce.firebaseapp.com",
  projectId: "pulgarecommerce",
  storageBucket: "pulgarecommerce.appspot.com",
  messagingSenderId: "867568529166",
  appId: "1:867568529166:web:21c84be3198bff6b71715f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initlizeFirebase = () => app;