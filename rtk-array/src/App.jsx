import React from "react";
import SignIn from "./screen/SignIn";
import { Route, Routes } from "react-router";
import SignUp from "./screen/SignUp";
import Home from "./screen/Home";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}
