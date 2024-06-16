// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCT439TYUAft73gtoThI9Mi60jOiWDUvZE",
  authDomain: "abstract-key-418707.firebaseapp.com",
  projectId: "abstract-key-418707",
  storageBucket: "abstract-key-418707.appspot.com",
  messagingSenderId: "582835686749",
  appId: "1:582835686749:web:e172d27df16d849fceacb4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
