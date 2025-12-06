import React, { useState } from 'react';
import './SportsRecreation.css';
import { MdOutlineSportsHandball } from "react-icons/md";
import { 
  FaRunning, 
  FaFootballBall, 
  FaBasketballBall, 
  FaSwimmer, 
  FaTableTennis,
  FaBiking,
  FaTrophy,
  FaDumbbell,
  FaWalking,
  FaHeart,
  FaChess,
  FaUsers
} from 'react-icons/fa';
import { 
  MdSportsBasketball, 
  MdSportsCricket, 
  MdSportsHandball, 
  MdSportsKabaddi,
  MdSportsSoccer,
  MdSportsVolleyball,
  MdEmojiEvents,
  MdOutlineSportsScore
} from 'react-icons/md';
import { GiTennisRacket, GiRaceCar, GiMuscleUp } from 'react-icons/gi';
import { IoIosFitness } from 'react-icons/io';

const SportsRecreation = () => {
  const [activeProgramIndex, setActiveProgramIndex] = useState(0);

  const sportsPrograms = [
    {
      id: 1,
      title: "Khelo India Programme",
      description: "A national program to revive the sports culture in India at the grass-root level and build a framework for all sports.",
      eligibility: "School children and youth aged 6-23 years",
      benefits: [
        "Sports scholarships up to ₹5 lakh per annum for 8 years",
        "Access to state-of-the-art sports infrastructure",
        "Professional coaching and training",
        "Competition exposure at national and international levels"
      ],
      icon: <MdSportsBasketball />
    },
    {
      id: 2,
      title: "Target Olympic Podium Scheme (TOPS)",
      description: "Financial assistance and training support to potential medal prospects for Olympics and Paralympics.",
      eligibility: "Elite athletes with potential for Olympic medals",
      benefits: [
        "Customized training plans with world-class coaches",
        "Monthly stipend of ₹50,000",
        "Financial support for international competitions",
        "Access to sports science and medicine support"
      ],
      icon: <FaTrophy />
    },
    {
      id: 3,
      title: "Fit India Movement",
      description: "A nation-wide movement to encourage people to remain healthy and fit by including physical activities in their daily lives.",
      eligibility: "All citizens of India",
      benefits: [
        "Free fitness events and activities across the country",
        "Fitness protocols and guidelines for all age groups",
        "Certification for Fit India Schools and organizations",
        "Access to online fitness resources and challenges"
      ],
      icon: <IoIosFitness />
    },
    {
      id: 4,
      title: "Sports Authority of India Training Centers",
      description: "Training centers to nurture sporting talent across the country.",
      eligibility: "Talented athletes selected through trials and competitions",
      benefits: [
        "Free boarding and lodging",
        "Scientific training and coaching",
        "Education support through sports schools",
        "Regular medical check-ups and sports science support"
      ],
      icon: <FaDumbbell />
    },
    {
      id: 5,
      title: "Rural Sports Programme",
      description: "Initiative to promote indigenous sports and identify talent from rural areas.",
      eligibility: "Children and youth from rural and tribal areas",
      benefits: [
        "Platform to showcase traditional and indigenous sports",
        "Pathway to state and national level competitions",
        "Sports equipment and facility development in rural areas",
        "Training and exposure to diverse sporting disciplines"
      ],
      icon: <MdSportsHandball />
    }
  ];

  const sportsCategories = [
    { name: "Cricket", icon: <MdSportsCricket /> },
    { name: "Football", icon: <MdSportsSoccer /> },
    { name: "Basketball", icon: <FaBasketballBall /> },
    { name: "Badminton", icon: <MdOutlineSportsHandball /> },
    { name: "Swimming", icon: <FaSwimmer /> },
    { name: "Tennis", icon: <GiTennisRacket /> },
    { name: "Table Tennis", icon: <FaTableTennis /> },
    { name: "Athletics", icon: <FaRunning /> },
    { name: "Kabaddi", icon: <MdSportsKabaddi /> },
    { name: "Volleyball", icon: <MdSportsVolleyball /> },
    { name: "Chess", icon: <FaChess /> },
    { name: "Cycling", icon: <FaBiking /> }
  ];

  const facilities = [
    {
      id: 1,
      title: "Community Sports Complexes",
      description: "Multi-sport facilities with access to various sports and recreational activities for community members.",
      icon: <MdSportsBasketball />
    },
    {
      id: 2,
      title: "Fitness Parks",
      description: "Open-air fitness zones with exercise equipment and walking tracks for all age groups.",
      icon: <FaWalking />
    },
    {
      id: 3,
      title: "Youth Sports Leagues",
      description: "Organized sports leagues for different age groups to foster competitive spirit and teamwork.",
      icon: <FaUsers />
    },
    {
      id: 4,
      title: "Sports Coaching Camps",
      description: "Regular training camps conducted by professional coaches for skill development in various sports.",
      icon: <MdOutlineSportsScore />
    },
    {
      id: 5,
      title: "Adventure Sports Facilities",
      description: "Facilities for adventure activities like rock climbing, zip-lining, and trekking for thrill-seekers.",
      icon: <GiMuscleUp />
    },
    {
      id: 6,
      title: "Recreational Events",
      description: "Regular community sports events, marathons, and tournaments to encourage active participation.",
      icon: <MdEmojiEvents />
    }
  ];

  const handleNextProgram = () => {
    setActiveProgramIndex((prevIndex) => 
      prevIndex === sportsPrograms.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevProgram = () => {
    setActiveProgramIndex((prevIndex) => 
      prevIndex === 0 ? sportsPrograms.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="sports-container">
      <div className="sp-hero">
        <div className="sp-hero-overlay"></div>
        <div className="sp-hero-content">
          <FaRunning className="sp-hero-icon" />
          <h1>Sports & Recreation</h1>
          <p>Promoting healthy and active lifestyles through sports and recreational activities</p>
        </div>
      </div>

      <div className="sp-stats">
        <div className="sp-stat">
          <div className="sp-stat-number">200+</div>
          <div className="sp-stat-text">Community Sports Facilities</div>
        </div>
        <div className="sp-stat">
          <div className="sp-stat-number">50+</div>
          <div className="sp-stat-text">Sports Activities Available</div>
        </div>
        <div className="sp-stat">
          <div className="sp-stat-number">10K+</div>
          <div className="sp-stat-text">Active Participants Monthly</div>
        </div>
      </div>

      <div className="sp-programs-section">
        <div className="sp-section-header">
          <FaTrophy className="sp-section-icon" />
          <h2>Government Sports Programs</h2>
          <p>Key initiatives to promote sports and recreation across the country</p>
        </div>
        
        <div className="sp-program-carousel">
          <button className="sp-carousel-btn sp-prev-btn" onClick={handlePrevProgram}>
            &#10094;
          </button>
          
          <div className="sp-program-card">
            <div className="sp-program-icon">
              {sportsPrograms[activeProgramIndex].icon}
            </div>
            <h3>{sportsPrograms[activeProgramIndex].title}</h3>
            <p className="sp-program-desc">{sportsPrograms[activeProgramIndex].description}</p>
            <div className="sp-eligibility">
              <h4>Eligibility:</h4>
              <p>{sportsPrograms[activeProgramIndex].eligibility}</p>
            </div>
            <div className="sp-benefits">
              <h4>Benefits:</h4>
              <ul>
                {sportsPrograms[activeProgramIndex].benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <button className="sp-carousel-btn sp-next-btn" onClick={handleNextProgram}>
            &#10095;
          </button>
        </div>
        
        <div className="sp-carousel-dots">
          {sportsPrograms.map((_, index) => (
            <span 
              key={index} 
              className={`sp-dot ${index === activeProgramIndex ? 'active' : ''}`}
              onClick={() => setActiveProgramIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="sp-info-banner">
        <div className="sp-info-content">
          <div className="sp-info-text">
            <h2>National Sports Policy</h2>
            <p>The National Sports Policy aims to promote sports as an essential component of education and culture, emphasizing the role of sports in enhancing physical fitness, mental alertness, and overall personality development. The policy focuses on creating a sports culture in the country and providing opportunities for all citizens to participate in sports activities.</p>
          </div>
          <div className="sp-info-image">
            <MdEmojiEvents className="sp-info-icon" />
          </div>
        </div>
      </div>

      <div className="sp-categories-section">
        <div className="sp-section-header">
          <FaFootballBall className="sp-section-icon" />
          <h2>Sports Categories</h2>
          <p>Various sports activities available for community participation</p>
        </div>
        
        <div className="sp-categories-grid">
          {sportsCategories.map((category, index) => (
            <div className="sp-category-card" key={index}>
              <div className="sp-category-icon">
                {category.icon}
              </div>
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="sp-facilities-section">
        <div className="sp-section-header">
          <FaHeart className="sp-section-icon" />
          <h2>Recreational Facilities</h2>
          <p>Community spaces for sports and recreational activities</p>
        </div>
        
        <div className="sp-facilities-grid">
          {facilities.map(facility => (
            <div className="sp-facility-card" key={facility.id}>
              <div className="sp-facility-icon">
                {facility.icon}
              </div>
              <h3>{facility.title}</h3>
              <p>{facility.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="sp-contact-section">
        <h2>Join Sports Activities</h2>
        <p>Get involved in local sports programs and recreational activities.</p>
        <button className="sp-contact-btn">Find Sports Programs Near You</button>
      </div>
    </div>
  );
};

export default SportsRecreation;
