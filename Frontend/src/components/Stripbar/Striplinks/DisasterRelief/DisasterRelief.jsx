import React from 'react';
import './DisasterRelief.css';
import { 
  FaHandHoldingHeart, 
  FaFirstAid, 
  FaHome, 
  FaWater, 
  FaPhoneAlt,
  FaBell,
  FaMapMarkedAlt,
  FaUsers,
  FaTint,
  FaFireExtinguisher
} from 'react-icons/fa';
import { MdWarning, MdSecurity, MdLocalHospital } from 'react-icons/md';
import { MdCyclone } from "react-icons/md";
import { GiEarthCrack, GiFlood } from 'react-icons/gi';
import { BiSolidMegaphone } from 'react-icons/bi';
import { BsLightningFill } from 'react-icons/bs';

const DisasterRelief = () => {
  const emergencyContacts = [
    { name: 'National Disaster Response Force', number: '1078', icon: <FaPhoneAlt /> },
    { name: 'State Disaster Management Authority', number: '1070', icon: <FaPhoneAlt /> },
    { name: 'District Emergency Operation Center', number: '1077', icon: <FaPhoneAlt /> },
    { name: 'Police', number: '100', icon: <FaPhoneAlt /> },
    { name: 'Fire Services', number: '101', icon: <FaPhoneAlt /> },
    { name: 'Ambulance', number: '108', icon: <FaPhoneAlt /> }
  ];

  const disasterTypes = [
    {
      id: 1,
      type: 'Flood',
      icon: <GiFlood />,
      preparedness: [
        'Move to higher ground immediately',
        'Keep emergency kit ready',
        'Follow evacuation routes',
        'Avoid walking through flowing water'
      ]
    },
    {
      id: 2,
      type: 'Earthquake',
      icon: <GiEarthCrack />,
      preparedness: [
        'Drop, cover, and hold on',
        'Stay away from windows and outer walls',
        'If outside, stay in open areas away from buildings',
        'Be prepared for aftershocks'
      ]
    },
    {
      id: 3,
      type: 'Cyclone',
      icon: <MdCyclone />,
      preparedness: [
        'Secure loose items around your house',
        'Board up windows and doors',
        'Stay updated with weather bulletins',
        'Evacuate if instructed by authorities'
      ]
    },
    {
      id: 4,
      type: 'Fire',
      icon: <FaFireExtinguisher />,
      preparedness: [
        'Keep fire extinguishers accessible',
        'Have an escape plan ready',
        'Stay low to avoid smoke inhalation',
        'Never use elevators during a fire'
      ]
    }
  ];

  const reliefMeasures = [
    {
      id: 1,
      title: 'Emergency Shelters',
      description: 'Temporary safe havens with basic amenities for displaced people.',
      icon: <FaHome />
    },
    {
      id: 2,
      title: 'Medical Camps',
      description: 'First aid and medical services for those affected by disasters.',
      icon: <MdLocalHospital />
    },
    {
      id: 3,
      title: 'Food & Water Supply',
      description: 'Distribution of essential food items and clean drinking water.',
      icon: <FaTint />
    },
    {
      id: 4,
      title: 'Rescue Operations',
      description: 'Specialized teams deployed to rescue people trapped in disaster-affected areas.',
      icon: <FaUsers />
    },
    {
      id: 5,
      title: 'Early Warning System',
      description: 'Timely alerts and notifications about potential disasters.',
      icon: <FaBell />
    },
    {
      id: 6,
      title: 'Relief Funds',
      description: 'Financial assistance for affected individuals and communities.',
      icon: <FaHandHoldingHeart />
    }
  ];

  return (
    <div className="disaster-relief-container">
      <div className="dr-hero">
        <div className="dr-hero-overlay"></div>
        <div className="dr-hero-content">
          <h1>Disaster Relief & Management</h1>
          <p>Stay prepared, stay safe. Information and resources for disaster preparedness and response.</p>
          <div className="dr-hero-icons">
            <MdWarning />
            <GiEarthCrack />
            <MdCyclone />
            <FaWater />
            <FaFireExtinguisher />
          </div>
        </div>
      </div>

      <div className="dr-emergency-contacts">
        <div className="dr-section-header">
          <BiSolidMegaphone className="dr-section-icon" />
          <h2>Emergency Contacts</h2>
        </div>
        <div className="dr-contacts-grid">
          {emergencyContacts.map((contact, index) => (
            <div className="dr-contact-card" key={index}>
              <div className="dr-contact-icon">{contact.icon}</div>
              <h3>{contact.name}</h3>
              <div className="dr-contact-number">{contact.number}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="dr-alert-banner">
        <BsLightningFill className="dr-alert-icon" />
        <h3>Be Prepared, Not Scared</h3>
        <p>Early preparation and awareness can significantly reduce the impact of disasters.</p>
      </div>

      <div className="dr-disaster-types">
        <div className="dr-section-header">
          <MdSecurity className="dr-section-icon" />
          <h2>Disaster Preparedness</h2>
        </div>
        <div className="dr-types-grid">
          {disasterTypes.map((disaster) => (
            <div className="dr-type-card" key={disaster.id}>
              <div className="dr-type-header">
                <div className="dr-type-icon">{disaster.icon}</div>
                <h3>{disaster.type}</h3>
              </div>
              <ul className="dr-preparedness-list">
                {disaster.preparedness.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="dr-map-section">
        <div className="dr-map-content">
          <div className="dr-map-icon">
            <FaMapMarkedAlt />
          </div>
          <div className="dr-map-text">
            <h2>Evacuation Routes & Safe Zones</h2>
            <p>Familiarize yourself with local evacuation routes and designated safe zones in your area.</p>
            <button className="dr-map-button">View Evacuation Map</button>
          </div>
        </div>
      </div>

      <div className="dr-relief-measures">
        <div className="dr-section-header">
          <FaFirstAid className="dr-section-icon" />
          <h2>Relief Measures</h2>
        </div>
        <div className="dr-measures-grid">
          {reliefMeasures.map((measure) => (
            <div className="dr-measure-card" key={measure.id}>
              <div className="dr-measure-icon">{measure.icon}</div>
              <h3>{measure.title}</h3>
              <p>{measure.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="dr-volunteer-section">
        <h2>Volunteer for Disaster Response</h2>
        <p>Join our community disaster response team and help those in need during emergencies.</p>
        <button className="dr-volunteer-button">Register as Volunteer</button>
      </div>
    </div>
  );
};

export default DisasterRelief;
