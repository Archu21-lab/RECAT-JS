import React from "react";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <div>
      
      <nav>
        <Link to={"/home"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
    </div>
  );
}
