// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApQZ6Ts-jMRBOjrXrtOMRjx7LbJ9MJ2NA",
  authDomain: "lmsss-d67b4.firebaseapp.com",
  projectId: "lmsss-d67b4",
  storageBucket: "lmsss-d67b4.appspot.com",
  messagingSenderId: "10726582727",
  appId: "1:10726582727:web:3f70ff8276a816797811e2",
  measurementId: "G-8PWBERSB8P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
