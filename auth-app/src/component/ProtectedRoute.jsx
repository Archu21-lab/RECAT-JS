import React, { useEffect } from "react";
import { useState } from "react";
import { credential } from "../App";
import Login from "../screens/Login";
import { useNavigate } from "react-router"; //to change url route while wrong entries.

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const getCredential = () => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    setUser({ email, password });
  };

  useEffect(() => {
    getCredential();
  }, []);

  if (credential.email == user.email && credential.password == user.password) {
    //navigate("/home");
    return <> {children}</>;
  } else {
   // navigate("/");
    return <><Login /></>
    
  }
}
