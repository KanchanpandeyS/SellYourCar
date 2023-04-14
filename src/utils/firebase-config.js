import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD5qXebcHuS2jF4mSie23RdERms-kDhr60",
  authDomain: "sellmycar-e7dd1.firebaseapp.com",
  projectId: "sellmycar-e7dd1",
  storageBucket: "sellmycar-e7dd1.appspot.com",
  messagingSenderId: "1038914049143",
  appId: "1:1038914049143:web:017efc90f271dbae47e272",
  measurementId: "G-YSB4DC4WKH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)