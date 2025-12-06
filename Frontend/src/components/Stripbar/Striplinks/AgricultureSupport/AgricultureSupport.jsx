import React from 'react';
import './AgricultureSupport.css';
import { FaSeedling, FaTractor, FaHandHoldingWater, FaMoneyBillWave, FaStore, FaUserFriends } from 'react-icons/fa';
import { GiFertilizerBag } from "react-icons/gi";
import { MdOutlineEmojiNature } from 'react-icons/md';
import { GiCorn, GiRaining } from 'react-icons/gi';

const AgricultureSupport = () => {
  const schemes = [
    {
      id: 1,
      title: "PM-KISAN",
      description: "Pradhan Mantri Kisan Samman Nidhi provides income support of ₹6,000 per year to farmers.",
      icon: <FaMoneyBillWave />
    },
    {
      id: 2,
      title: "Soil Health Card",
      description: "Provides soil nutrient status and recommends fertilizers for improved productivity.",
      icon: <GiFertilizerBag />
    },
    {
      id: 3,
      title: "Pradhan Mantri Krishi Sinchai Yojana",
      description: "Ensures irrigation facilities to every farm with the motto 'Per Drop More Crop'.",
      icon: <FaHandHoldingWater />
    },
    {
      id: 4,
      title: "Kisan Credit Card",
      description: "Provides farmers with affordable credit for agriculture and allied activities.",
      icon: <FaMoneyBillWave />
    },
    {
      id: 5,
      title: "Paramparagat Krishi Vikas Yojana",
      description: "Promotes organic farming practices and certification.",
      icon: <MdOutlineEmojiNature />
    },
    {
      id: 6,
      title: "e-NAM",
      description: "National Agriculture Market providing an online trading platform for agricultural commodities.",
      icon: <FaStore />
    }
  ];

  const practices = [
    {
      id: 1,
      title: "Sustainable Farming",
      description: "Practices that maintain productivity while preserving the environment and local communities.",
      icon: <FaSeedling />
    },
    {
      id: 2,
      title: "Crop Rotation",
      description: "Planting different crops sequentially to improve soil health and reduce pests.",
      icon: <GiCorn />
    },
    {
      id: 3,
      title: "Water Conservation",
      description: "Methods like drip irrigation and rainwater harvesting to optimize water usage.",
      icon: <GiRaining />
    },
    {
      id: 4,
      title: "Community Farming",
      description: "Collaborative efforts by farmers for better resource management and knowledge sharing.",
      icon: <FaUserFriends />
    }
  ];

  return (
    <div className="agriculture-support-container">
      <div className="ag-header">
        <div className="ag-header-content">
          <h1>Agriculture Support</h1>
          <p>Supporting our farmers for a sustainable and prosperous India</p>
        </div>
      </div>

      <div className="ag-section">
        <div className="ag-section-header">
          <h2>Government Agricultural Schemes</h2>
          <p>Key initiatives to support farmers across India</p>
        </div>
        
        <div className="ag-cards-container">
          {schemes.map(scheme => (
            <div className="ag-card" key={scheme.id}>
              <div className="ag-card-icon">
                {scheme.icon}
              </div>
              <h3>{scheme.title}</h3>
              <p>{scheme.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="ag-banner">
        <div className="ag-banner-content">
          <div className="ag-banner-text">
            <h2>Supporting India's Agriculture</h2>
            <p>Agriculture employs more than 50% of the Indian workforce and contributes significantly to the national economy.</p>
          </div>
          <div className="ag-banner-image">
            <FaTractor className="ag-banner-icon" />
          </div>
        </div>
      </div>

      <div className="ag-section">
        <div className="ag-section-header">
          <h2>Sustainable Agricultural Practices</h2>
          <p>Modern techniques for improved productivity and sustainability</p>
        </div>
        
        <div className="ag-cards-container">
          {practices.map(practice => (
            <div className="ag-card" key={practice.id}>
              <div className="ag-card-icon">
                {practice.icon}
              </div>
              <h3>{practice.title}</h3>
              <p>{practice.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="ag-contact-section">
        <h2>Need Agricultural Support?</h2>
        <p>Contact your local Krishi Vigyan Kendra or call the Kisan Call Center at 1800-180-1551</p>
      </div>
    </div>
  );
};

export default AgricultureSupport;
