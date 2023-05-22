"use client"
import React, { useState } from 'react';
import Link from 'next/link';
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
const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin=async ()=> {
    try {
       signInWithEmailAndPassword(auth,email, password) .then((_) => {
          return axios.get("http://localhost:5000/auth/getUser/"+ email ).then((response) => {
           console.log(response);
           router.push("/collection");
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
    <MDBContainer className="d-flex align-items-center vh-100">
      <MDBRow className="justify-content-center">
        <MDBCard>
          <h1 style={{marginBottom: "2rem"}}>Log in</h1>


        <MDBCol md='6'>

          <MDBCardBody id="card-body">
          
            <MDBInput wrapperClass='mb-4' label='E-MAIL' id='form1' type="email" onChange={(e) => setEmail(e.target.value)}/>
            <MDBInput wrapperClass='mb-4' label='PASSWORD' id='form2' type='password' onChange={(e) => setPassword(e.target.value)}/>

            <MDBBtn className="mb-4" color="primary"   onClick={handleLogin}>Log in</MDBBtn>
           

            <div className="d-flex justify-content-between mb-4">
              <a href="#">Have you forgotten your password?</a>
            </div>
          </MDBCardBody>

        </MDBCol>

        </MDBCard>
        <MDBCol  className="text-center mt-4">
          <h3>Need an Account?</h3>
          <Link href={"/auth/sign-up"}><MDBBtn className="btn btn-outline-primary"> Register </MDBBtn></Link>
          
        </MDBCol>
      </MDBRow>

  </MDBContainer>
  );
};

const login: React.FC = () => {
  return <Login />;
};

export default login;





