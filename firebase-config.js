// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection, getDocs} from 'firebase/firestore/lite'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkeC8DSDflE3d6sA7dvcteCIAxgxjmHI8",
  authDomain: "iwd2022.firebaseapp.com",
  databaseURL: "https://iwd2022-default-rtdb.firebaseio.com",
  projectId: "iwd2022",
  storageBucket: "iwd2022.appspot.com",
  messagingSenderId: "1063657752114",
  appId: "1:1063657752114:web:b2fce26ff83a0aaa585e2b",
  measurementId: "G-8XTCR3SMKF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);