import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Login({ credential }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const getEmail = (e) => {
    setUser({ ...user, email: e.target.value });
  };
  const getPassword = (e) => {
    setUser({ ...user, password: e.target.value });
  };

  const handleLogin = () => {
    if (
      user.email == credential.email ||
      user.password == credential.password
    ) {
      navigate("/home");
    } else {
      alert("Email or Password Wrong");
    }
  };
  return (
    <>
      <div>
        <h1>Login</h1>
      </div>
      <div>
        <input onChange={getEmail} type="text" placeholder="Enter Email" />
      </div>
      <div>
        <input
          onChange={getPassword}
          type="text"
          placeholder="Enter Password"
        />
      </div>
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
}
