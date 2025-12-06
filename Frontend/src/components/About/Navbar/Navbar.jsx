import React from "react";
import "./Navbar.css";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="about-navbar">
      <ul className="nav-links">
        <li>
          <a href="/" className="home-logo">
            <FaHome className="home-icon" />
          </a>
        </li>
        <li>
          <a href="#why-civicspot">Why CivicSpot</a>
        </li>
        <li>
          <a href="#our-mission">Our Mission</a>
        </li>
        <li>
          <a href="#impressive-stats">Impressive Stats</a>
        </li>
        <li>
          <a href="#what-we-do">What We Do</a>
        </li>
        <li>
          <a href="#schemes">Schemes That Build Bharat</a>
        </li>
        <li>
          <a href="#vision-2030">Vision 2030</a>
        </li>
        <li>
          <a href="#meet-team">Meet the Team</a>
        </li>
        <li>
          <a href="#make-difference">Ready to Make a Difference</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
