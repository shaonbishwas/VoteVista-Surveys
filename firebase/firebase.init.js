import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP3ZSBpmuvv7zQ4peSC6_yhiNDfxFC0Yo",
  authDomain: "votevista.firebaseapp.com",
  projectId: "votevista",
  storageBucket: "votevista.appspot.com",
  messagingSenderId: "763348479528",
  appId: "1:763348479528:web:2b07d012d27a0479fa0f1d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
