import React from "react";
import Navbar from "./components/navbar";
import Home from "./screens/home";
export default function App() {
  const appName = "UserInfo App";
  return (
    <>
      <Navbar name={appName}/>

      <Home name={appName} />
    </>
  );
}
