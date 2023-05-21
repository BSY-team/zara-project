"use client"
import React, { useState } from 'react';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {
    auth
} from "../../firbase/firbase"
import axios from 'axios';
import { useRouter } from 'next/router';
const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin=async ()=> {
    try {
       signInWithEmailAndPassword(auth,email, password) .then((_) => {
          return axios.get("http://localhost:5000/auth/getUser/"+ email ).then((response) => {
           console.log(response);
           router.push("/");
         });
       
      
      }).catch((error) => {
        if(error.message.includes("invalid-email")){
          console.log("invalid credentials");
        }


      })

    } catch (error) {
        console.log(error);
    }
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
  return <Login />;
};

export default login;





