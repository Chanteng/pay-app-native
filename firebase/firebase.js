// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDi7wJymX7kThMulo5PYhmXMFaJRpW149w",
    authDomain: "otpnative.firebaseapp.com",
    projectId: "otpnative",
    storageBucket: "otpnative.appspot.com",
    messagingSenderId: "808707905999",
    appId: "1:808707905999:web:d1b893fdfedac8104bdaba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)