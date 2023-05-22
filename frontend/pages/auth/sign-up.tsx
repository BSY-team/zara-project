"use client"
import React, { useState } from 'react';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBInput,
}
from 'mdb-react-ui-kit';
import {
    auth
} from "../../firbase/firbase"
import axios from 'axios';
import { useRouter } from 'next/router';
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [adresses, setAdresses] = useState("");
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
          email, password,name,lastName,adresses
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
    <MDBContainer className="d-flex align-items-center justify-content-center vh-100">
    <MDBRow>
      <MDBCol md="6">
        <div className="a">
          <MDBInput
            label="Name"
            onChange={(e) => setName(e.target.value)}
            className="form-control-lg"
            style={{ width: '400px' }}
          />
          <MDBInput
            label="LastName"
            onChange={(e) => setLastName(e.target.value)}
            className="form-control-lg"
            style={{ width: '400px' }}
          />
          <MDBInput
            className="login form-control-lg"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '400px' }}
          />
           <MDBInput
            className="login form-control-lg"
            label="adresses"
            onChange={(e) => setAdresses(e.target.value)}
            style={{ width: '400px' }}
          />
          <MDBInput
            className="login form-control-lg"
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '400px' }}
          />
          <MDBBtn color="primary" onClick={submit}>
            Submit
          </MDBBtn>
        </div>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  );
}

export default SignUp
