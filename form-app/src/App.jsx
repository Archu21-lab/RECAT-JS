import React from "react";
import { Routes, Route } from "react-router";
import Form from "./screens/Form";
import User from "./screens/User";

export default function App() {
  return <>
    <Routes>
      <Route path="/" element={<Form/>}/>
      <Route path="/user" element={<User/>}/>
    </Routes>
  
  </>;
}
