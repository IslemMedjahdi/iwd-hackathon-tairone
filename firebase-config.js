// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection, getDocs} from 'firebase/firestore/lite'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBCvZTdrF-587jcHxBKjZVuX7rE-vxkw_4",
    authDomain: "iwd-firebase.firebaseapp.com",
    projectId: "iwd-firebase",
    storageBucket: "iwd-firebase.appspot.com",
    messagingSenderId: "336699996341",
    appId: "1:336699996341:web:ebda0d0065b2fca50966fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);