import React, { useState } from 'react';
import './Watersanitation.css';
import { 
  FaWater, 
  FaHandsWash, 
  FaToilet, 
  FaShower, 
  FaFilter,
  FaHandHoldingWater,
  FaTrash,
  FaSeedling,
  FaTint,
  FaHome,
  FaCity
} from 'react-icons/fa';
import { 
  MdWaterDrop, 
  MdOutlineCleanHands, 
  MdOutlineRecycling, 
  MdOutlineHealthAndSafety,
  MdOutlineWaterDamage,
  MdWaterfallChart
} from 'react-icons/md';
import { GiWaterTank, GiWaterRecycling, GiRiver, GiWaterfall } from 'react-icons/gi';
import { BiWater } from 'react-icons/bi';
import { WiRaindrops, WiFlood } from 'react-icons/wi';

const Watersanitation = () => {
  const [activeInitiativeIndex, setActiveInitiativeIndex] = useState(0);

  const waterInitiatives = [
    {
      id: 1,
      title: "Jal Jeevan Mission",
      description: "Providing safe and adequate drinking water through individual household tap connections to all households in rural India.",
      goals: "Functional household tap connections to every rural household by 2024",
      achievements: [
        "Over 100 million rural households connected with tap water",
        "Water quality testing laboratories established",
        "Community-managed water supply systems",
        "Improved water source sustainability"
      ],
      icon: <MdWaterDrop />
    },
    {
      id: 2,
      title: "Swachh Bharat Mission",
      description: "A nationwide campaign to eliminate open defecation and improve solid waste management.",
      goals: "Clean India with access to proper sanitation for all",
      achievements: [
        "Over 100 million toilets constructed across India",
        "Thousands of Open Defecation Free (ODF) villages",
        "Improved community sanitation infrastructure",
        "Behavior change in sanitation practices"
      ],
      icon: <FaToilet />
    },
    {
      id: 3,
      title: "National Rural Drinking Water Programme",
      description: "Providing adequate and safe water for drinking, cooking and other domestic needs on a sustainable basis.",
      goals: "Ensuring availability and sustainability of water supply in rural areas",
      achievements: [
        "Coverage of problem habitations with safe water sources",
        "Water quality monitoring and surveillance",
        "Sustainability of water sources ensured",
        "Community participation in water resource management"
      ],
      icon: <GiWaterTank />
    },
    {
      id: 4,
      title: "Namami Gange Programme",
      description: "An integrated conservation mission to accomplish effective abatement of pollution and conservation of the river Ganga.",
      goals: "Comprehensive river basin management approach",
      achievements: [
        "Sewage treatment capacity enhanced",
        "Industrial pollution reduction",
        "River front development",
        "Biodiversity conservation in the river basin"
      ],
      icon: <GiRiver />
    },
    {
      id: 5,
      title: "Atal Mission for Rejuvenation and Urban Transformation (AMRUT)",
      description: "Providing basic services like water supply, sewerage, and urban transport to households.",
      goals: "Universal coverage of water supply and sewerage in urban areas",
      achievements: [
        "Water supply projects in hundreds of cities",
        "Improved sewerage networks and treatment plants",
        "Urban drainage solutions implemented",
        "Enhanced quality of life in urban areas"
      ],
      icon: <FaCity />
    }
  ];

  const sanitationPractices = [
    { name: "Hand Washing", icon: <FaHandsWash /> },
    { name: "Safe Drinking Water", icon: <FaTint /> },
    { name: "Toilet Usage", icon: <FaToilet /> },
    { name: "Waste Management", icon: <FaTrash /> },
    { name: "Water Conservation", icon: <BiWater /> },
    { name: "Rainwater Harvesting", icon: <WiRaindrops /> },
    { name: "Water Filtration", icon: <FaFilter /> },
    { name: "Water Recycling", icon: <GiWaterRecycling /> },
    { name: "Hygiene Education", icon: <MdOutlineCleanHands /> },
    { name: "Flood Management", icon: <WiFlood /> },
    { name: "Watershed Management", icon: <MdWaterfallChart /> },
    { name: "Sustainable Drainage", icon: <MdOutlineWaterDamage /> }
  ];

  const waterProjects = [
    {
      id: 1,
      title: "Community Water Purification",
      description: "Installation of water filtration and purification systems in villages and underserved communities.",
      icon: <FaFilter />
    },
    {
      id: 2,
      title: "Rainwater Harvesting Systems",
      description: "Promoting and installing rainwater collection systems for water conservation and sustainable use.",
      icon: <WiRaindrops />
    },
    {
      id: 3,
      title: "Sanitation Awareness Campaigns",
      description: "Education programs on proper hygiene practices and sanitation for disease prevention.",
      icon: <MdOutlineHealthAndSafety />
    },
    {
      id: 4,
      title: "Public Toilet Maintenance",
      description: "Regular cleaning and maintenance of public toilets to ensure usability and hygiene.",
      icon: <FaToilet />
    },
    {
      id: 5,
      title: "Waste Recycling Initiatives",
      description: "Collection and proper recycling of waste to prevent water contamination and pollution.",
      icon: <MdOutlineRecycling />
    },
    {
      id: 6,
      title: "School WASH Programs",
      description: "Water, Sanitation and Hygiene (WASH) facilities in schools with training for students and teachers.",
      icon: <FaHandsWash />
    }
  ];

  const handleNextInitiative = () => {
    setActiveInitiativeIndex((prevIndex) => 
      prevIndex === waterInitiatives.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevInitiative = () => {
    setActiveInitiativeIndex((prevIndex) => 
      prevIndex === 0 ? waterInitiatives.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="water-container">
      <div className="ws-hero">
        <div className="ws-hero-overlay"></div>
        <div className="ws-hero-content">
          <FaWater className="ws-hero-icon" />
          <h1>Water & Sanitation</h1>
          <p>Clean water and proper sanitation for healthier communities</p>
        </div>
      </div>

      <div className="ws-stats">
        <div className="ws-stat">
          <div className="ws-stat-number">88%</div>
          <div className="ws-stat-text">Rural Water Coverage</div>
        </div>
        <div className="ws-stat">
          <div className="ws-stat-number">95M+</div>
          <div className="ws-stat-text">Toilets Constructed</div>
        </div>
        <div className="ws-stat">
          <div className="ws-stat-number">70K+</div>
          <div className="ws-stat-text">Villages ODF Certified</div>
        </div>
      </div>

      <div className="ws-initiatives-section">
        <div className="ws-section-header">
          <GiWaterfall className="ws-section-icon" />
          <h2>Government Water & Sanitation Initiatives</h2>
          <p>Key programs to ensure clean water and sanitation across the country</p>
        </div>
        
        <div className="ws-initiative-carousel">
          <button className="ws-carousel-btn ws-prev-btn" onClick={handlePrevInitiative}>
            &#10094;
          </button>
          
          <div className="ws-initiative-card">
            <div className="ws-initiative-icon">
              {waterInitiatives[activeInitiativeIndex].icon}
            </div>
            <h3>{waterInitiatives[activeInitiativeIndex].title}</h3>
            <p className="ws-initiative-desc">{waterInitiatives[activeInitiativeIndex].description}</p>
            <div className="ws-goals">
              <h4>Goals:</h4>
              <p>{waterInitiatives[activeInitiativeIndex].goals}</p>
            </div>
            <div className="ws-achievements">
              <h4>Achievements:</h4>
              <ul>
                {waterInitiatives[activeInitiativeIndex].achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <button className="ws-carousel-btn ws-next-btn" onClick={handleNextInitiative}>
            &#10095;
          </button>
        </div>
        
        <div className="ws-carousel-dots">
          {waterInitiatives.map((_, index) => (
            <span 
              key={index} 
              className={`ws-dot ${index === activeInitiativeIndex ? 'active' : ''}`}
              onClick={() => setActiveInitiativeIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="ws-info-banner">
        <div className="ws-info-content">
          <div className="ws-info-text">
            <h2>Water Conservation is Essential</h2>
            <p>Water is a finite resource, essential for life. With increasing population and changing climate patterns, water conservation has become more important than ever. By adopting simple water-saving practices in our daily lives, we can ensure sustainable water availability for present and future generations. Every drop counts in our collective effort to preserve this precious resource.</p>
          </div>
          <div className="ws-info-image">
            <FaHandHoldingWater className="ws-info-icon" />
          </div>
        </div>
      </div>

      <div className="ws-practices-section">
        <div className="ws-section-header">
          <FaHandsWash className="ws-section-icon" />
          <h2>Water & Sanitation Practices</h2>
          <p>Essential practices for maintaining hygiene and conserving water</p>
        </div>
        
        <div className="ws-practices-grid">
          {sanitationPractices.map((practice, index) => (
            <div className="ws-practice-card" key={index}>
              <div className="ws-practice-icon">
                {practice.icon}
              </div>
              <h3>{practice.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="ws-projects-section">
        <div className="ws-section-header">
          <MdWaterfallChart className="ws-section-icon" />
          <h2>Community Water Projects</h2>
          <p>Local initiatives to improve water access and sanitation</p>
        </div>
        
        <div className="ws-projects-grid">
          {waterProjects.map(project => (
            <div className="ws-project-card" key={project.id}>
              <div className="ws-project-icon">
                {project.icon}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="ws-contact-section">
        <h2>Contribute to Water Conservation</h2>
        <p>Get involved in local water and sanitation projects or report water-related issues.</p>
        <div className="ws-button-group">
          <button className="ws-contact-btn primary">Report Water Issues</button>
          <button className="ws-contact-btn secondary">Join Conservation Efforts</button>
        </div>
      </div>
    </div>
  );
};

export default Watersanitation;