import React from "react";
import { Routes, Route, Link } from "react-router";
import Login from "./screens/Login";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";

const credential = {
  email: "archupatil@gmail.com",
  password: "282109",
};

export default function App() {
  return (
    <>
      <nav>
        <Link to={"/home"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login credential={credential} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
