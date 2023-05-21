"use client"
import React, { useState } from 'react';
import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";





// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCit9hpUlOgKnpMaukwdykj1GeXihPc6dQ",
  authDomain: "zaratest-40ddc.firebaseapp.com",
  projectId: "zaratest-40ddc",
  storageBucket: "zaratest-40ddc.appspot.com",
  messagingSenderId: "397533869969",
  appId: "1:397533869969:web:a5c3e8c8b79c15189a8c30"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const Home: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("success");
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleLogin=async ()=> {
   const data = await  signInWithEmailAndPassword(auth,email, password)
   console.log(data,"dataaa");
  }
  return (
    <div className='a'>
      <input className='login' placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input className='login' placeholder="password" onChange={(e) => setPassword(e.target.value)} />
      <button  onClick={handleLogin}>Submit</button>
    </div>
  );
};

const login: React.FC = () => {
  return <Home />;
};

export default login;





