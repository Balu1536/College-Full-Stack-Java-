// Navbar.tsx
import type { FC } from "react";
import { Link } from "react-router-dom"; // if you're using React Router
import "./Navbar.css";

const Navbar: FC = () => {
  return (
    <nav className="nav-container">
      <h1 >Lab 15</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
