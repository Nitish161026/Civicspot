import React, { useState } from 'react';
import './LocalBusiness.css';
import { 
  FaStore, 
  FaShoppingBag, 
  FaHandshake, 
  FaMoneyBillWave, 
  FaChartLine,
  FaLightbulb,
  FaToolbox,
  FaBriefcase,
  FaCreditCard,
  FaRegLightbulb,
  FaSearch,
  FaAward,
  FaBuilding
} from 'react-icons/fa';
import { MdStorefront, MdBusinessCenter, MdLocalGroceryStore } from 'react-icons/md';
import { GiReceiveMoney, GiTakeMyMoney, GiPayMoney } from 'react-icons/gi';
import { BiStoreAlt } from 'react-icons/bi';

const LocalBusiness = () => {
  const [activeSchemeIndex, setActiveSchemeIndex] = useState(0);

  const businessSchemes = [
    {
      id: 1,
      title: "PM SVANidhi Scheme",
      description: "Micro-credit facility for street vendors to restart business affected due to COVID-19 pandemic.",
      eligibility: "Street vendors engaged in vending on or before March 24, 2020",
      benefits: [
        "Collateral-free working capital loan of ₹10,000",
        "Interest subsidy of 7% per annum",
        "Cashback up to ₹1,200 per year for digital transactions",
        "Eligibility for higher loan on timely repayment"
      ],
      icon: <MdStorefront />
    },
    {
      id: 2,
      title: "MUDRA Loan",
      description: "Financial support for small businesses at different stages of business growth.",
      eligibility: "Non-Corporate Small Business Sector (NCSBS) units, including individual entrepreneurs",
      benefits: [
        "Shishu: Loans up to ₹50,000",
        "Kishore: Loans from ₹50,001 to ₹5 lakh",
        "Tarun: Loans from ₹5,00,001 to ₹10 lakh",
        "No collateral required for loans under Shishu category"
      ],
      icon: <FaMoneyBillWave />
    },
    {
      id: 3,
      title: "Stand-Up India",
      description: "Financial assistance for SC/ST and women entrepreneurs to start greenfield enterprises.",
      eligibility: "SC/ST and Women entrepreneurs",
      benefits: [
        "Loans between ₹10 lakh and ₹1 crore",
        "Coverage of manufacturing, services, and trading sectors",
        "Composite loan (term loan + working capital)",
        "Up to 75% of the project cost financing"
      ],
      icon: <FaHandshake />
    },
    {
      id: 4,
      title: "Credit Guarantee Fund Scheme",
      description: "Collateral-free credit facility to MSMEs.",
      eligibility: "New and existing Micro and Small Enterprises",
      benefits: [
        "Credit guarantee up to ₹2 crore",
        "No collateral or third-party guarantee required",
        "75-85% guarantee coverage of the loan amount",
        "Lower processing fees and interest rates"
      ],
      icon: <FaCreditCard />
    },
    {
      id: 5,
      title: "MSME Business Loan in 59 Minutes",
      description: "Quick loan approval for MSMEs with minimal documentation.",
      eligibility: "MSMEs with good CIBIL score and GST registration",
      benefits: [
        "In-principle loan approval in 59 minutes",
        "Loans ranging from ₹1 lakh to ₹5 crore",
        "Minimal documentation",
        "Competitive interest rates starting from 8% p.a."
      ],
      icon: <GiReceiveMoney />
    }
  ];

  const businessTypes = [
    { name: "Retail Shops", icon: <BiStoreAlt /> },
    { name: "Service Providers", icon: <FaToolbox /> },
    { name: "Manufacturing", icon: <FaBuilding /> },
    { name: "Food & Beverage", icon: <MdLocalGroceryStore /> },
    { name: "Tech Startups", icon: <FaLightbulb /> },
    { name: "Financial Services", icon: <GiTakeMyMoney /> },
    { name: "Professional Firms", icon: <FaBriefcase /> },
    { name: "E-commerce", icon: <FaShoppingBag /> }
  ];

  const resources = [
    {
      id: 1,
      title: "Business Registration",
      description: "Support for registering your business entity and obtaining necessary licenses and permits.",
      icon: <MdBusinessCenter />
    },
    {
      id: 2,
      title: "Financial Guidance",
      description: "Expert assistance on funding options, loan applications, and financial management strategies.",
      icon: <GiPayMoney />
    },
    {
      id: 3,
      title: "Marketing Support",
      description: "Resources for effective promotion, branding, and digital marketing for local businesses.",
      icon: <FaChartLine />
    },
    {
      id: 4,
      title: "Training Programs",
      description: "Skill development workshops and training for entrepreneurs and their employees.",
      icon: <FaRegLightbulb />
    },
    {
      id: 5,
      title: "Market Research",
      description: "Insights on local market trends, consumer behavior, and competitive analysis.",
      icon: <FaSearch />
    },
    {
      id: 6,
      title: "Business Networking",
      description: "Connect with other local entrepreneurs, mentors, and potential business partners.",
      icon: <FaAward />
    }
  ];

  const handleNextScheme = () => {
    setActiveSchemeIndex((prevIndex) => 
      prevIndex === businessSchemes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevScheme = () => {
    setActiveSchemeIndex((prevIndex) => 
      prevIndex === 0 ? businessSchemes.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="business-container">
      <div className="bus-hero">
        <div className="bus-hero-overlay"></div>
        <div className="bus-hero-content">
          <FaStore className="bus-hero-icon" />
          <h1>Local Business Support</h1>
          <p>Empowering entrepreneurs and promoting local economic growth</p>
        </div>
      </div>

      <div className="bus-stats">
        <div className="bus-stat">
          <div className="bus-stat-number">6.3Cr</div>
          <div className="bus-stat-text">MSMEs in India</div>
        </div>
        <div className="bus-stat">
          <div className="bus-stat-number">30%</div>
          <div className="bus-stat-text">Contribution to GDP</div>
        </div>
        <div className="bus-stat">
          <div className="bus-stat-number">11Cr+</div>
          <div className="bus-stat-text">Employment Generation</div>
        </div>
      </div>

      <div className="bus-schemes-section">
        <div className="bus-section-header">
          <FaHandshake className="bus-section-icon" />
          <h2>Government Business Schemes</h2>
          <p>Key initiatives to support small businesses and entrepreneurs</p>
        </div>
        
        <div className="bus-scheme-carousel">
          <button className="bus-carousel-btn bus-prev-btn" onClick={handlePrevScheme}>
            &#10094;
          </button>
          
          <div className="bus-scheme-card">
            <div className="bus-scheme-icon">
              {businessSchemes[activeSchemeIndex].icon}
            </div>
            <h3>{businessSchemes[activeSchemeIndex].title}</h3>
            <p className="bus-scheme-desc">{businessSchemes[activeSchemeIndex].description}</p>
            <div className="bus-eligibility">
              <h4>Eligibility:</h4>
              <p>{businessSchemes[activeSchemeIndex].eligibility}</p>
            </div>
            <div className="bus-benefits">
              <h4>Benefits:</h4>
              <ul>
                {businessSchemes[activeSchemeIndex].benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <button className="bus-carousel-btn bus-next-btn" onClick={handleNextScheme}>
            &#10095;
          </button>
        </div>
        
        <div className="bus-carousel-dots">
          {businessSchemes.map((_, index) => (
            <span 
              key={index} 
              className={`bus-dot ${index === activeSchemeIndex ? 'active' : ''}`}
              onClick={() => setActiveSchemeIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="bus-info-banner">
        <div className="bus-info-content">
          <div className="bus-info-text">
            <h2>MSME Development</h2>
            <p>Micro, Small and Medium Enterprises (MSMEs) are the backbone of India's economy, contributing significantly to GDP, exports, and employment. The government has introduced several policy initiatives and schemes to provide financial assistance, technology upgradation, infrastructure development, and market access to strengthen the MSME sector.</p>
          </div>
          <div className="bus-info-image">
            <FaChartLine className="bus-info-icon" />
          </div>
        </div>
      </div>

      <div className="bus-types-section">
        <div className="bus-section-header">
          <FaStore className="bus-section-icon" />
          <h2>Business Categories</h2>
          <p>Supporting various types of local enterprises</p>
        </div>
        
        <div className="bus-types-grid">
          {businessTypes.map((type, index) => (
            <div className="bus-type-card" key={index}>
              <div className="bus-type-icon">
                {type.icon}
              </div>
              <h3>{type.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="bus-resources-section">
        <div className="bus-section-header">
          <FaBriefcase className="bus-section-icon" />
          <h2>Business Resources</h2>
          <p>Tools and support for entrepreneurs</p>
        </div>
        
        <div className="bus-resources-grid">
          {resources.map(resource => (
            <div className="bus-resource-card" key={resource.id}>
              <div className="bus-resource-icon">
                {resource.icon}
              </div>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bus-contact-section">
        <h2>Need Business Support?</h2>
        <p>Our team is here to help you start and grow your local business.</p>
        <button className="bus-contact-btn">Contact Business Support</button>
      </div>
    </div>
  );
};

export default LocalBusiness;
