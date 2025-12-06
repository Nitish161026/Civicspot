import React, { useState } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Features from "../../components/Features/Features";
import { FaStar, FaStarHalf } from "react-icons/fa";
import Stripbar from "../../components/Stripbar/Stripbar";
import Feedback from "../../components/Feedback/Feedback";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleJoinClick = () => {
    navigate("/joinus");
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Navbar onSearchChange={handleSearchChange} />
      <Stripbar searchTerm={searchTerm} />
      <div className="home-container">
        <div className="text-section">
          <h1 className="main-heading">
            Empowering Villages, One Problem at a Time.
          </h1>
          <p className="sub-text">
            Discover solutions to local problems, share your voice, and
            contribute to a better community. Join us in making change happen.
          </p>
          <button onClick={handleJoinClick} className="cta-button">
            Join Today
          </button>

          {/* Ratings Section */}
          <div className="impact-metrics">
            <img
              className="ratings-image"
              src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1699939678/static/images-3png_1699939452_46177.png"
              alt="Impact"
            />
            <div className="metrics-wrapper">
              <div className="metric-item">
                <div className="metric-value">100+</div>
                <div className="metric-label">Villages Impacted</div>
              </div>
              <div className="metric-item">
                <div className="metric-value">4.5/5</div>
                <div className="star-rating">
                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                  </div>
                  <div className="metric-label">Ratings</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="image-section">
          <img
            src="/image.png"
            alt="Community engagement"
            className="hero-image"
          />
        </div>
      </div>
      <Features />
      <Feedback />
      <Footer />
    </>
  );
};

export default Home;
