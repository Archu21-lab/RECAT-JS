import React from "react";
import { Routes, Route } from "react-router";
import About from "./screen/About";
import Home from "./screen/Home";
import Contact from "./screen/Contact";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/*we created a route with name /, and on / user will be see Home screen */}
        <Route path='/about' element={<About/>}/>
        {/*yha pe curly bracket javascript k liye use kiya hai  */}
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}
