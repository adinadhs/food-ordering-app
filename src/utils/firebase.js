// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAlu4IKqfUNQXikRTdFfmZ7YS8UVlZ6yIg",
    authDomain: "food-ordering-app-f294b.firebaseapp.com",
    projectId: "food-ordering-app-f294b",
    storageBucket: "food-ordering-app-f294b.appspot.com",
    messagingSenderId: "242219884423",
    appId: "1:242219884423:web:33dd290e0833be3055bd22",
    measurementId: "G-DQ34V6CENT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);