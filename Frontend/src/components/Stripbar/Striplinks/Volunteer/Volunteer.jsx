import React, { useState } from 'react';
import './Volunteer.css';
import { 
  FaHandsHelping, 
  FaPeopleCarry, 
  FaRegHandPaper, 
  FaHandHoldingHeart, 
  FaUsers,
  FaGlobeAsia,
  FaGraduationCap,
  FaMedkit,
  FaChartLine,
  FaBullhorn,
  FaChild,
  FaHeart
} from 'react-icons/fa';
import { 
  MdVolunteerActivism, 
  MdOutlineCastForEducation, 
  MdOutlineHealthAndSafety,
  MdOutlineCleanHands,
  MdOutlineNature,
  MdOutlineElderly
} from 'react-icons/md';
import { GiTreeGrowth, GiTeacher } from 'react-icons/gi';
import { RiCommunityLine, RiMentalHealthLine } from 'react-icons/ri';
import { BiDonateHeart } from 'react-icons/bi';

const Volunteer = () => {
  const [activeOpportunityIndex, setActiveOpportunityIndex] = useState(0);

  const volunteerOpportunities = [
    {
      id: 1,
      title: "Community Cleanup Drive",
      description: "Join our monthly cleanup drive to keep our neighborhoods clean and beautiful.",
      requirements: "All ages welcome. Bring gloves if possible.",
      impact: [
        "Cleaner community spaces",
        "Environmental protection",
        "Community pride and ownership",
        "Social connection with neighbors"
      ],
      icon: <MdOutlineCleanHands />
    },
    {
      id: 2,
      title: "Teach For Community",
      description: "Share your knowledge by teaching underprivileged children and adults.",
      requirements: "Basic education, patience, and commitment of 3 hours/week.",
      impact: [
        "Improved literacy rates",
        "Better employment opportunities for learners",
        "Skill development",
        "Bridging educational gaps"
      ],
      icon: <GiTeacher />
    },
    {
      id: 3,
      title: "Elderly Care Support",
      description: "Provide companionship and assistance to elderly community members.",
      requirements: "Compassion, basic caregiving knowledge, and 4 hours/week commitment.",
      impact: [
        "Reduced isolation for seniors",
        "Mental health support",
        "Physical assistance with daily tasks",
        "Intergenerational connection"
      ],
      icon: <MdOutlineElderly />
    },
    {
      id: 4,
      title: "Health Awareness Campaign",
      description: "Help spread awareness about health issues and preventive measures.",
      requirements: "Good communication skills and basic health knowledge.",
      impact: [
        "Increased health awareness",
        "Disease prevention",
        "Healthier community",
        "Access to healthcare information"
      ],
      icon: <MdOutlineHealthAndSafety />
    },
    {
      id: 5,
      title: "Environment Conservation",
      description: "Participate in tree planting, water conservation, and environmental education.",
      requirements: "Interest in environmental issues and physical ability to work outdoors.",
      impact: [
        "Increased green cover",
        "Better air quality",
        "Water conservation",
        "Environmental awareness"
      ],
      icon: <MdOutlineNature />
    }
  ];

  const volunteerCategories = [
    { name: "Education", icon: <MdOutlineCastForEducation /> },
    { name: "Healthcare", icon: <FaMedkit /> },
    { name: "Environment", icon: <GiTreeGrowth /> },
    { name: "Community Development", icon: <RiCommunityLine /> },
    { name: "Children & Youth", icon: <FaChild /> },
    { name: "Elderly Care", icon: <MdOutlineElderly /> },
    { name: "Mental Health", icon: <RiMentalHealthLine /> },
    { name: "Disaster Relief", icon: <FaHandHoldingHeart /> },
    { name: "Animal Welfare", icon: <FaHeart /> },
    { name: "Skill-based Volunteering", icon: <FaChartLine /> },
    { name: "Advocacy", icon: <FaBullhorn /> },
    { name: "Global Volunteering", icon: <FaGlobeAsia /> }
  ];

  const benefits = [
    {
      id: 1,
      title: "Skill Development",
      description: "Gain new skills and enhance existing ones through hands-on volunteer experience.",
      icon: <FaChartLine />
    },
    {
      id: 2,
      title: "Community Connection",
      description: "Build meaningful relationships within your community and expand your social network.",
      icon: <FaUsers />
    },
    {
      id: 3,
      title: "Personal Growth",
      description: "Develop empathy, leadership, and problem-solving abilities while making a difference.",
      icon: <FaGraduationCap />
    },
    {
      id: 4,
      title: "Career Advancement",
      description: "Add valuable experience to your resume and explore potential career paths.",
      icon: <FaChartLine />
    },
    {
      id: 5,
      title: "Health Benefits",
      description: "Experience improved mental well-being, reduced stress, and increased happiness.",
      icon: <FaMedkit />
    },
    {
      id: 6,
      title: "Recognition",
      description: "Receive acknowledgment for your contributions and become a respected community member.",
      icon: <FaRegHandPaper />
    }
  ];

  const handleNextOpportunity = () => {
    setActiveOpportunityIndex((prevIndex) => 
      prevIndex === volunteerOpportunities.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevOpportunity = () => {
    setActiveOpportunityIndex((prevIndex) => 
      prevIndex === 0 ? volunteerOpportunities.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="volunteer-container">
      <div className="vol-hero">
        <div className="vol-hero-overlay"></div>
        <div className="vol-hero-content">
          <FaHandsHelping className="vol-hero-icon" />
          <h1>Volunteer Opportunities</h1>
          <p>Make a difference in your community through meaningful service</p>
        </div>
      </div>

      <div className="vol-stats">
        <div className="vol-stat">
          <div className="vol-stat-number">100+</div>
          <div className="vol-stat-text">Active Volunteers</div>
        </div>
        <div className="vol-stat">
          <div className="vol-stat-number">25+</div>
          <div className="vol-stat-text">Ongoing Projects</div>
        </div>
        <div className="vol-stat">
          <div className="vol-stat-number">5K+</div>
          <div className="vol-stat-text">Service Hours Monthly</div>
        </div>
      </div>

      <div className="vol-opportunities-section">
        <div className="vol-section-header">
          <MdVolunteerActivism className="vol-section-icon" />
          <h2>Featured Volunteer Opportunities</h2>
          <p>Current openings for volunteers in our community</p>
        </div>
        
        <div className="vol-opportunity-carousel">
          <button className="vol-carousel-btn vol-prev-btn" onClick={handlePrevOpportunity}>
            &#10094;
          </button>
          
          <div className="vol-opportunity-card">
            <div className="vol-opportunity-icon">
              {volunteerOpportunities[activeOpportunityIndex].icon}
            </div>
            <h3>{volunteerOpportunities[activeOpportunityIndex].title}</h3>
            <p className="vol-opportunity-desc">{volunteerOpportunities[activeOpportunityIndex].description}</p>
            <div className="vol-requirements">
              <h4>Requirements:</h4>
              <p>{volunteerOpportunities[activeOpportunityIndex].requirements}</p>
            </div>
            <div className="vol-impact">
              <h4>Community Impact:</h4>
              <ul>
                {volunteerOpportunities[activeOpportunityIndex].impact.map((impact, index) => (
                  <li key={index}>{impact}</li>
                ))}
              </ul>
            </div>
            <button className="vol-apply-btn">Apply to Volunteer</button>
          </div>
          
          <button className="vol-carousel-btn vol-next-btn" onClick={handleNextOpportunity}>
            &#10095;
          </button>
        </div>
        
        <div className="vol-carousel-dots">
          {volunteerOpportunities.map((_, index) => (
            <span 
              key={index} 
              className={`vol-dot ${index === activeOpportunityIndex ? 'active' : ''}`}
              onClick={() => setActiveOpportunityIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="vol-info-banner">
        <div className="vol-info-content">
          <div className="vol-info-text">
            <h2>Why Volunteer?</h2>
            <p>Volunteering strengthens communities, solves critical social problems, and brings people together. By giving your time and skills, you not only help others but also gain valuable experience, develop new skills, and create meaningful connections. Volunteering is a powerful way to create positive change while enriching your own life.</p>
          </div>
          <div className="vol-info-image">
            <FaPeopleCarry className="vol-info-icon" />
          </div>
        </div>
      </div>

      <div className="vol-categories-section">
        <div className="vol-section-header">
          <BiDonateHeart className="vol-section-icon" />
          <h2>Volunteer Categories</h2>
          <p>Various areas where you can contribute your time and skills</p>
        </div>
        
        <div className="vol-categories-grid">
          {volunteerCategories.map((category, index) => (
            <div className="vol-category-card" key={index}>
              <div className="vol-category-icon">
                {category.icon}
              </div>
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="vol-benefits-section">
        <div className="vol-section-header">
          <FaHandHoldingHeart className="vol-section-icon" />
          <h2>Benefits of Volunteering</h2>
          <p>How giving back enriches your life and community</p>
        </div>
        
        <div className="vol-benefits-grid">
          {benefits.map(benefit => (
            <div className="vol-benefit-card" key={benefit.id}>
              <div className="vol-benefit-icon">
                {benefit.icon}
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="vol-signup-section">
        <h2>Ready to Make a Difference?</h2>
        <p>Join our volunteer network and start contributing to positive change in your community.</p>
        <div className="vol-button-group">
          <button className="vol-signup-btn primary">Sign Up as Volunteer</button>
          <button className="vol-signup-btn secondary">Request Volunteers</button>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
