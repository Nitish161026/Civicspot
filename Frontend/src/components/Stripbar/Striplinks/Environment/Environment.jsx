import React from 'react';
import './Environment.css';
import { FaLeaf, FaRecycle, FaSeedling, FaTree, FaWater, FaSun, FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaChartLine } from 'react-icons/fa';
import { MdOutlineWaterDrop, MdNaturePeople, MdForest, MdEco, MdCleaningServices } from 'react-icons/md';
import { BsFillShieldFill, BsFillAwardFill, BsLightbulb } from 'react-icons/bs';
import { GiWindmill, GiSolarPower, GiTreeGrowth, GiFlood } from 'react-icons/gi';
import { RiPlantFill } from 'react-icons/ri';

const Environment = () => {
  const initiatives = [
    {
      id: 1,
      title: "Community Tree Plantation",
      date: "September 5, 2025",
      location: "Urban Green Belt",
      category: "Afforestation",
      description: "Join our drive to plant 1000 native tree species in our urban green belt to improve air quality.",
      icon: <FaTree />
    },
    {
      id: 2,
      title: "Waste Management Workshop",
      date: "September 12, 2025",
      location: "Community Center",
      category: "Waste",
      description: "Learn practical techniques for waste segregation, composting, and reducing household waste.",
      icon: <FaRecycle />
    },
    {
      id: 3,
      title: "Water Conservation Drive",
      date: "September 18, 2025",
      location: "Riverside Park",
      category: "Water",
      description: "Participate in our water body cleaning and learn about rainwater harvesting techniques.",
      icon: <MdOutlineWaterDrop />
    },
    {
      id: 4,
      title: "Solar Panel Installation",
      date: "September 25, 2025",
      location: "Community School",
      category: "Energy",
      description: "Witness the installation of solar panels at our community school to promote renewable energy.",
      icon: <GiSolarPower />
    },
    {
      id: 5,
      title: "Biodiversity Walk",
      date: "October 2, 2025",
      location: "Nature Reserve",
      category: "Biodiversity",
      description: "Guided tour to discover and document local flora and fauna with expert naturalists.",
      icon: <MdNaturePeople />
    },
    {
      id: 6,
      title: "Clean Air Campaign",
      date: "October 10, 2025",
      location: "Town Square",
      category: "Air Quality",
      description: "Awareness campaign about air pollution and distributing air-purifying indoor plants.",
      icon: <FaSeedling />
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "30% Reduction in Plastic Waste",
      description: "Our community reduced single-use plastic by 30% over the past year through awareness and alternatives.",
      icon: <BsFillShieldFill />,
      stats: "30%"
    },
    {
      id: 2,
      title: "5000+ Trees Planted",
      description: "Community efforts have resulted in over 5000 new trees being planted in the last two years.",
      icon: <GiTreeGrowth />,
      stats: "5000+"
    },
    {
      id: 3,
      title: "Eco-Friendly Neighborhood Award",
      description: "Our district received state recognition for sustainable environmental practices.",
      icon: <BsFillAwardFill />,
      stats: "1st"
    },
    {
      id: 4,
      title: "15% Increase in Renewable Energy Usage",
      description: "Solar panel installations have increased by 15% across residential and public buildings.",
      icon: <FaSun />,
      stats: "15%"
    }
  ];

  const emergencyInfo = [
    {
      id: 1,
      title: "Flood Management",
      description: "Learn about flood preparedness, early warning signs, and community response plans.",
      icon: <GiFlood />,
      contact: "Flood Control: 1800-220-110"
    },
    {
      id: 2,
      title: "Forest Fire Prevention",
      description: "Guidelines for preventing forest fires and reporting suspicious activities during dry seasons.",
      icon: <MdForest />,
      contact: "Fire Department: 101"
    },
    {
      id: 3,
      title: "Water Contamination",
      description: "Steps to take if you suspect water contamination in your area or local water bodies.",
      icon: <FaWater />,
      contact: "Water Dept: 1800-425-313"
    }
  ];

  return (
    <div className="environment-container">
      <div className="env-header">
        <div className="env-header-content">
          <RiPlantFill className="env-main-icon" />
          <h1>Environmental Initiatives</h1>
          <p>Working together for a sustainable and greener community</p>
        </div>
      </div>

      <div className="env-upcoming-section">
        <div className="env-section-header">
          <div className="env-section-icon">
            <FaLeaf />
          </div>
          <h2>Upcoming Initiatives</h2>
          <p>Join our community environmental programs</p>
        </div>
        
        <div className="env-cards-container">
          {initiatives.map(item => (
            <div className="env-initiative-card" key={item.id} data-category={item.category.toLowerCase()}>
              <div className="env-initiative-category">
                <span>{item.category}</span>
              </div>
              <div className="env-initiative-icon">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <div className="env-initiative-details">
                <div className="env-initiative-date">
                  <FaCalendarAlt /> <span>{item.date}</span>
                </div>
                <div className="env-initiative-location">
                  <FaMapMarkerAlt /> <span>{item.location}</span>
                </div>
              </div>
              <p>{item.description}</p>
              <button className="env-join-button">Join Initiative</button>
            </div>
          ))}
        </div>
      </div>

      <div className="env-impact-section">
        <div className="env-section-header">
          <div className="env-section-icon">
            <FaChartLine />
          </div>
          <h2>Our Environmental Impact</h2>
          <p>Measurable progress towards sustainability goals</p>
        </div>
        
        <div className="env-achievements-container">
          {achievements.map(achievement => (
            <div className="env-achievement-card" key={achievement.id}>
              <div className="env-achievement-stats">
                <span>{achievement.stats}</span>
              </div>
              <div className="env-achievement-icon">
                {achievement.icon}
              </div>
              <div className="env-achievement-content">
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="env-tips-section">
        <div className="env-tips-content">
          <div className="env-tips-header">
            <BsLightbulb className="env-tips-icon" />
            <h2>Eco-Friendly Tips</h2>
          </div>
          <div className="env-tips-list">
            <div className="env-tip">
              <FaRecycle />
              <p>Segregate waste into wet, dry, and hazardous categories for efficient recycling.</p>
            </div>
            <div className="env-tip">
              <MdOutlineWaterDrop />
              <p>Install low-flow faucets and fix leaks promptly to save thousands of liters of water annually.</p>
            </div>
            <div className="env-tip">
              <FaSun />
              <p>Switch off lights and unplug electronics when not in use to reduce energy consumption.</p>
            </div>
            <div className="env-tip">
              <MdEco />
              <p>Use cloth bags instead of plastic and avoid single-use plastics whenever possible.</p>
            </div>
            <div className="env-tip">
              <MdCleaningServices />
              <p>Opt for eco-friendly cleaning products to reduce chemical pollution in water bodies.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="env-emergency-section">
        <div className="env-section-header">
          <div className="env-section-icon emergency">
            <BsFillShieldFill />
          </div>
          <h2>Environmental Emergency Information</h2>
          <p>Be prepared for environmental challenges</p>
        </div>
        
        <div className="env-emergency-container">
          {emergencyInfo.map(info => (
            <div className="env-emergency-card" key={info.id}>
              <div className="env-emergency-icon">
                {info.icon}
              </div>
              <div className="env-emergency-content">
                <h3>{info.title}</h3>
                <p>{info.description}</p>
                <div className="env-emergency-contact">{info.contact}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="env-volunteer-section">
        <div className="env-volunteer-content">
          <div className="env-volunteer-text">
            <FaUsers className="env-volunteer-icon" />
            <h2>Become an Eco-Volunteer</h2>
            <p>Join our community of environmental stewards making a difference locally</p>
            <ul className="env-volunteer-benefits">
              <li>Participate in local conservation projects</li>
              <li>Learn valuable sustainability skills</li>
              <li>Connect with like-minded community members</li>
              <li>Contribute to environmental data collection</li>
            </ul>
          </div>
          <div className="env-volunteer-form">
            <h3>Sign Up Today</h3>
            <div className="env-form-group">
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="env-form-group">
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="env-form-group">
              <select>
                <option value="">Select Area of Interest</option>
                <option value="plantation">Tree Plantation</option>
                <option value="waste">Waste Management</option>
                <option value="water">Water Conservation</option>
                <option value="awareness">Environmental Education</option>
                <option value="energy">Renewable Energy</option>
              </select>
            </div>
            <button className="env-volunteer-button">Register as Volunteer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Environment;
