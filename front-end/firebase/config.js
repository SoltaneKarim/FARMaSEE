// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDZNt_UUJS2FoWDaTLENbxRfCVNhnkz-OA",
  authDomain: "farmatsee.firebaseapp.com",
  projectId: "farmatsee",
  storageBucket: "farmatsee.appspot.com",
  messagingSenderId: "642927276882",
  appId: "1:642927276882:web:6543076c34c2e29b49c08b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();