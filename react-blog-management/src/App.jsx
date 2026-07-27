import { BrowserRouter, Routes, Route } from "react-router";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AddBlog from "./pages/AddBlog";
import EditBlog from "./pages/EditBlog";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-blog" element={<AddBlog />} />
          <Route path="/edit-blog/:id" element={<EditBlog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;