// modules
import "./styles/Main/Main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

// Routing
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
