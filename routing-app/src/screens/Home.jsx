import React, { useState } from "react";
import { useNavigate  } from "react-router";

const realEmail="admin123@gmail.com"
const realPassword="123456"

export default function Home() {
  const navigate = useNavigate();

  const[email,setEmail]=useState();
  const [password,setPassword]=useState();
  return (
    <>
      <div>
        <input onChange={(e)=>{
            setEmail(e.target.value)
        }} type="text" placeholder="Enter Email" />
      </div>
      <div>
        <input onChange={(e)=>{
            setPassword(e.target.value)
        }} type="text" placeholder="Enter Password" />
      </div>
      <div>
        <button onClick={()=>{
         if(realEmail==email && realPassword==password){
           navigate("/about");
         }else{
            alert("Your Email or Password Wrong !")
         }
        }}>Login</button>
      </div>
    </>
  );
}

//login authenticated (valid - user enter == records )
//private routing 
//protected routes = if login then about

//before login page with portfolio..
//UI AI

