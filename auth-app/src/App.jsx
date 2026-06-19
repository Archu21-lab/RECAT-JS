import React from "react";
import { Routes, Route } from "react-router";
import Login from "./screens/Login";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import ProtectedRoute from "./component/ProtectedRoute";

export const credential = {
  email: "archupatil@gmail.com",
  password: "282109",
};

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login credential={credential} />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}
