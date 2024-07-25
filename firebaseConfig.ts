// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGJLukxEv6k-1e5GeBtG3B-oILUc7k_Po",
  authDomain: "medfinder-6d105.firebaseapp.com",
  projectId: "medfinder-6d105",
  storageBucket: "medfinder-6d105.appspot.com",
  messagingSenderId: "786480050338",
  appId: "1:786480050338:web:c079157cfe7aab646927fb",
  measurementId: "G-J13RVP5BH7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);