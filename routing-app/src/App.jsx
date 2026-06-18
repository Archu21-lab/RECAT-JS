import React from "react";
import { Routes, Route } from "react-router";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import About from "./screens/About";
import Profile from "./screens/Profile";
import { Link} from "react-router";

export default function App() {
  return (
    <>
      <nav>
        <Link to={"/"}> Logo </Link>
        <Link to={"/profile"}> Profile </Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

//last in first out->LIFO concept
//single page application
//portfolio website->figma community

//click -> check validate -> navigate