// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKr6PxlJgughQaxGj-RjQQxcV-6iDIKT4",
    authDomain: "manufacturer-website-86122.firebaseapp.com",
    projectId: "manufacturer-website-86122",
    storageBucket: "manufacturer-website-86122.appspot.com",
    messagingSenderId: "1023659458976",
    appId: "1:1023659458976:web:d9cc36ddaa2007692024c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth