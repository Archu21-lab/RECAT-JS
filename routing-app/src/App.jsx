import React from "react";
import { Routes, Route } from "react-router";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import About from "./screens/About";
import Profile from "./screens/Profile";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}
