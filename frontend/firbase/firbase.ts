import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCit9hpUlOgKnpMaukwdykj1GeXihPc6dQ",
    authDomain: "zaratest-40ddc.firebaseapp.com",
    projectId: "zaratest-40ddc",
    storageBucket: "zaratest-40ddc.appspot.com",
    messagingSenderId: "397533869969",
    appId: "1:397533869969:web:a5c3e8c8b79c15189a8c30"
    
  };
  
  // Initialize Firebase
 export  const app = initializeApp(firebaseConfig);
 export  const auth = getAuth();