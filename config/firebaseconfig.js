// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxk645XvosT_w-Xi5KRwqsMHRvc82wB08",
    authDomain: "testproject-b2c9d.firebaseapp.com",
    projectId: "testproject-b2c9d",
    storageBucket: "testproject-b2c9d.appspot.com",
    messagingSenderId: "462225820762",
    appId: "1:462225820762:web:077efb9896d7c5b70c1c63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) 