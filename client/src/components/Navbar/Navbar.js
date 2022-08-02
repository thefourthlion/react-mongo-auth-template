import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="Navbar">
      <ul className="nav-links" id={showLinks ? "nav-active" : "nav-hidden"}>
        <li className="title">
          <a href="http://localhost:3000/">Home</a>
        </li>
        <li>
          <a href="http://localhost:3000/login">Login</a>
        </li>
        <li>
          <a href="http://localhost:3000/register">Register</a>
        </li>
      </ul>
      <h1 className="nav-title">Title</h1>
      <div className="burger" onClick={() => setShowLinks(!showLinks)}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
}
