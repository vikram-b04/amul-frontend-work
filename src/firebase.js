// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP1ciGqQnnODzuj-DZEUpnHVEjqxoAox8",
  authDomain: "vikram-a6b52.firebaseapp.com",
  projectId: "vikram-a6b52",
  storageBucket: "vikram-a6b52.appspot.com",
  messagingSenderId: "668810088991",
  appId: "1:668810088991:web:63f4bb7d6c07c466ab7b2a",
  measurementId: "G-CPSKTJ1MSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()

export default app