import React from "react";
import Navbar from "../component/Navbar";
import { useLocation } from "react-router";

export default function Home() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <h1>Home Page</h1>
      <h2>{location.state.name}</h2>
      <h2>{location.state.email}</h2>
    </>
  );
}
