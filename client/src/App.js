// modules
import "./styles/css/Main/Main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
// import Private from "./pages/Private";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

// Routing
// import PrivateRoute from "./components/routes/PrivateRoute";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <PrivateRoute exact path="/private" element={<Private />} /> */}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/forgotPassword" element={<ForgotPassword />} />
        <Route
          exact
          path="/passwordReset/:resetToken"
          element={<ResetPassword />}
        />
      </Routes>
    </Router>
  );
}
