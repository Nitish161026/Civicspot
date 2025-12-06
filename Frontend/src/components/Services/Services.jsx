import React, { useState, useEffect } from "react";
import "./Services.css";

const Services = () => {
  const [activeTab, setActiveTab] = useState("development");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = {
    development: [
      {
        title: "Infrastructure Planning",
        icon: "🏗️",
        description:
          "Comprehensive village infrastructure development plans with sustainable solutions.",
        features: ["Road mapping", "Water systems", "Public spaces"],
      },
      {
        title: "Digital Village",
        icon: "💻",
        description:
          "Bringing technology to rural areas for better governance and services.",
        features: ["E-governance", "Digital literacy", "Online services"],
      },
    ],
    education: [
      {
        title: "Rural Education",
        icon: "📚",
        description:
          "Educational programs tailored for village needs and resources.",
        features: [
          "Adult education",
          "Vocational training",
          "Digital classrooms",
        ],
      },
      {
        title: "Skill Development",
        icon: "🛠️",
        description:
          "Empowering villagers with practical skills for better employment.",
        features: ["Agriculture tech", "Handicrafts", "Small business"],
      },
    ],
    health: [
      {
        title: "Primary Care",
        icon: "🏥",
        description:
          "Basic healthcare solutions for remote village communities.",
        features: ["Mobile clinics", "Telemedicine", "Preventive care"],
      },
      {
        title: "Sanitation",
        icon: "🚿",
        description:
          "Clean water and sanitation programs to improve public health.",
        features: ["Well digging", "Toilet construction", "Hygiene education"],
      },
    ],
    employment: [
      {
        title: "Job Creation",
        icon: "👷",
        description: "Creating sustainable job opportunities in rural areas.",
        features: [
          "Local businesses",
          "Agricultural jobs",
          "Tourism development",
        ],
      },
      {
        title: "Entrepreneurship",
        icon: "💼",
        description:
          "Supporting local entrepreneurs with resources and training.",
        features: ["Startup incubators", "Microfinance", "Business mentorship"],
      },
    ],
    environment: [
      {
        title: "Sustainable Practices",
        icon: "🌱",
        description: "Promoting eco-friendly practices in rural communities.",
        features: ["Organic farming", "Renewable energy", "Waste management"],
      },
      {
        title: "Conservation",
        icon: "🌳",
        description: "Protecting local ecosystems and biodiversity.",
        features: [
          "Wildlife protection",
          "Forest conservation",
          "Water resource management",
        ],
      },
    ],
    disasterManagement: [
      {
        title: "Disaster Preparedness",
        icon: "🚨",
        description:
          "Training and resources for villages to handle natural disasters.",
        features: [
          "Emergency drills",
          "Resource allocation",
          "Community training",
        ],
      },
      {
        title: "Resilience Building",
        icon: "🛡️",
        description:
          "Strengthening village infrastructure to withstand disasters.",
        features: [
          "Flood defenses",
          "Earthquake-resistant buildings",
          "Early warning systems",
        ],
      },
    ],
    socialEmpowerment: [
      {
        title: "Community Engagement",
        icon: "🤝",
        description:
          "Fostering community participation in development projects.",
        features: ["Local councils", "Feedback systems", "Volunteer programs"],
      },
      {
        title: "Cultural Preservation",
        icon: "🎨",
        description: "Promoting and preserving local culture and traditions.",
        features: ["Cultural festivals", "Art workshops", "Heritage sites"],
      },
    ],
    financialInclusion: [
      {
        title: "Banking Access",
        icon: "🏦",
        description:
          "Ensuring all villagers have access to banking and financial tools.",
        features: ["Jan Dhan accounts", "ATM kiosks", "Mobile banking"],
      },
      {
        title: "Microfinance & Credit",
        icon: "💳",
        description:
          "Providing small-scale loans and financial literacy for rural growth.",
        features: ["SHGs loans", "Interest-free credit", "Budget training"],
      },
    ],
    governanceAndRights: [
      {
        title: "Local Governance",
        icon: "📜",
        description:
          "Strengthening Panchayati Raj and local decision-making systems.",
        features: ["E-Gram Sabha", "Policy awareness", "Public dashboards"],
      },
      {
        title: "Citizen Rights",
        icon: "🗳️",
        description:
          "Educating villagers about legal rights and access to services.",
        features: ["RTI awareness", "Social justice", "Legal aid camps"],
      },
    ],
    digitalConnectivity: [
      {
        title: "Internet for All",
        icon: "🌐",
        description:
          "Expanding digital infrastructure and bridging the connectivity gap.",
        features: [
          "Wi-Fi hotspots",
          "Fiber networks",
          "Community tech centers",
        ],
      },
      {
        title: "Smart Villages",
        icon: "📲",
        description:
          "Integrating technology to improve governance, education, and health.",
        features: ["Smart kiosks", "IoT in farming", "Digital ID services"],
      },
    ],
  };

  return (
    <div className={`services-container ${isVisible ? "visible" : ""}`}>
      <div className="services-header">
        <h1 className="services-title">
          CIVICSPOT <span>Services</span>
        </h1>
        <p className="services-subtitle">
          Empowering rural communities through sustainable development
        </p>

        <div className="gradient-tabs">
          <button
            className={`tab-btn ${activeTab === "development" ? "active" : ""}`}
            onClick={() => setActiveTab("development")}
          >
            Development
          </button>
          <button
            className={`tab-btn ${activeTab === "education" ? "active" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
          <button
            className={`tab-btn ${activeTab === "health" ? "active" : ""}`}
            onClick={() => setActiveTab("health")}
          >
            Health
          </button>
          <button
            className={`tab-btn ${activeTab === "employment" ? "active" : ""}`}
            onClick={() => setActiveTab("employment")}
          >
            Employment
          </button>
          <button
            className={`tab-btn ${activeTab === "environment" ? "active" : ""}`}
            onClick={() => setActiveTab("environment")}
          >
            Environment
          </button>
          <button
            className={`tab-btn ${
              activeTab === "disasterManagement" ? "active" : ""
            }`}
            onClick={() => setActiveTab("disasterManagement")}
          >
            Disaster Management
          </button>
          <button
            className={`tab-btn ${
              activeTab === "socialEmpowerment" ? "active" : ""
            }`}
            onClick={() => setActiveTab("socialEmpowerment")}
          >
            Social Empowerment
          </button>
          <button
            className={`tab-btn ${
              activeTab === "financialInclusion" ? "active" : ""
            }`}
            onClick={() => setActiveTab("financialInclusion")}
          >
            Financial Inclusion
          </button>
          <button
            className={`tab-btn ${
              activeTab === "governanceAndRights" ? "active" : ""
            }`}
            onClick={() => setActiveTab("governanceAndRights")}
          >
            Governance & Rights
          </button>
          <button
            className={`tab-btn ${
              activeTab === "digitalConnectivity" ? "active" : ""
            }`}
            onClick={() => setActiveTab("digitalConnectivity")}
          >
            Digital Connectivity
          </button>
        </div>
      </div>

      <div className="services-grid">
        {services[activeTab].map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            icon={service.icon}
            description={service.description}
            features={service.features}
            index={index}
          />
        ))}
      </div>

      <div className="cta-section">
        <h2>Ready to transform your village?</h2>
        <p>
          Join CivicSpot today and access our comprehensive development programs
        </p>
        <button className="cta-button">Get Started Now</button>
      </div>
    </div>
  );
};

const ServiceCard = ({ title, icon, description, features, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`service-card card-${
        index % 2 === 0 ? "primary" : "secondary"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>

      <div className={`card-features ${isHovered ? "expanded" : ""}`}>
        <ul>
          {features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="card-overlay"></div>
    </div>
  );
};

export default Services;
