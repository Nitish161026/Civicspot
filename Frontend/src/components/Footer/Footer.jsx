import React from "react";
import "./Footer.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { GiFarmTractor } from "react-icons/gi";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="village-footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>
            <GiFarmTractor className="icon" /> CivicSpot
          </h2>
          <p>
            Empowering rural communities through innovation, collaboration, and
            compassion.
          </p>
        </div>

        <div className="footer-links">
          <h3>Meet the Changemakers</h3>
          <ul className="team-list">
            {[
              {
                name: "Nitish Kumar",
                position: "Chief Executive Officer",
                image: "/nitish.jpg",
              },
              {
                name: "Rohit Sharma",
                position: "Chief Operating Officer",
                image: "/rohit.jpg",
              },
              {
                name: "Shreyas Iyer",
                position: "Head of Technology",
                image: "/shreyas.jpg",
              },
              {
                name: "Jasprit Bumrah",
                position: "Marketing Head",
                image: "/jasprit.jpg",
              },
            ].map((member, index) => (
              <li key={index} className="team-member">
                <Link to="/gamechangers">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-photo"
                />
                </Link>
                <div className="team-info">
                  <span className="member-name">{member.name}</span>
                  <span className="member-role">{member.position}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>
            <FaEnvelope /> support@civicspot.org
          </p>
          <p>
            <FaSquareInstagram />
            <a
              href="https://www.instagram.com/108_n_k_y_45/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Our Instagram Page
            </a>
          </p>
          <p>
            <FaPhoneAlt /> +91 86511 79672
          </p>
          <p>
            <FaMapMarkerAlt /> Bharti Chowk , Sugapatti Village , India
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 civicSpot. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
