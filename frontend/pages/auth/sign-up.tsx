"use client"
import React, { useState } from 'react';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {
    auth
} from "../../firbase/firbase"
import axios from 'axios';
import { useRouter } from 'next/router';
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name,setName]= useState("");
  const [lastName,setLastName]= useState(""); 
  const router = useRouter();
  const submit = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("success");
        console.log(userCredential);
        axios.post("http://localhost:5000/auth/signup",{
          email, password,name,lastName
        }).then(({data}) => {
          console.log(data);
          router.push("/auth/login");
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='a'>
      <input  placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input  placeholder="LastName" onChange={(e) => setLastName(e.target.value)} />
      <input className='login' placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input className='login' placeholder="password" type='password' onChange={(e) => setPassword(e.target.value)} />
      <button  onClick={submit}>Submit</button>
    </div>
  );
}

export default SignUp
