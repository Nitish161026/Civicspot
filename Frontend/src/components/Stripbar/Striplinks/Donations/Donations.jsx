import React, { useState } from 'react';
import './Donations.css';
import {
  FaHandHoldingHeart,
  FaHospital,
  FaGraduationCap,
  FaSeedling,
  FaHandsHelping,
  FaPeopleCarry,
  FaChild,
  FaUsers,
  FaBook,
  FaCheckCircle,
  FaRupeeSign
} from 'react-icons/fa';
import { MdVolunteerActivism, MdOutlineWaterDrop, MdFoodBank } from 'react-icons/md';
import { GiClothes, GiMedicines } from 'react-icons/gi';
import { BiDonateHeart } from 'react-icons/bi';

const Donations = () => {
  const [activeTab, setActiveTab] = useState('money');
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');

  const handleAmountSelect = (amount) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmount = (e) => {
    setCustomAmount(e.target.value);
    setDonationAmount('custom');
  };

  const causeCategories = [
    {
      id: 1,
      name: "Healthcare",
      icon: <FaHospital />,
      description: "Support medical camps and healthcare facilities in rural areas."
    },
    {
      id: 2,
      name: "Education",
      icon: <FaGraduationCap />,
      description: "Help underprivileged children access quality education and resources."
    },
    {
      id: 3,
      name: "Environment",
      icon: <FaSeedling />,
      description: "Fund tree plantation drives and environmental conservation efforts."
    },
    {
      id: 4,
      name: "Women Empowerment",
      icon: <FaUsers />,
      description: "Support skill development and entrepreneurship programs for women."
    },
    {
      id: 5,
      name: "Child Welfare",
      icon: <FaChild />,
      description: "Provide nutrition, healthcare, and education to children in need."
    },
    {
      id: 6,
      name: "Rural Development",
      icon: <FaPeopleCarry />,
      description: "Improve infrastructure and facilities in remote villages."
    }
  ];

  const successStories = [
    {
      id: 1,
      title: "Village School Renovation",
      description: "Your donations helped rebuild a school in Rajasthan, benefiting over 200 children.",
      impact: "Education for 200+ children",
      raised: "₹5,00,000"
    },
    {
      id: 2,
      title: "Clean Water Project",
      description: "Installed water purification systems in 5 villages, providing clean drinking water.",
      impact: "Clean water for 2,000+ people",
      raised: "₹3,50,000"
    },
    {
      id: 3,
      title: "COVID-19 Relief",
      description: "Provided medical supplies, oxygen concentrators and food to affected communities.",
      impact: "Supported 500+ families",
      raised: "₹7,25,000"
    }
  ];

  const donationOptions = [
    { type: 'money', label: 'Money', icon: <FaRupeeSign /> },
    { type: 'food', label: 'Food', icon: <MdFoodBank /> },
    { type: 'clothes', label: 'Clothes', icon: <GiClothes /> },
    { type: 'medicines', label: 'Medicines', icon: <GiMedicines /> },
    { type: 'books', label: 'Books', icon: <FaBook /> },
    { type: 'volunteer', label: 'Volunteer', icon: <MdVolunteerActivism /> }
  ];

  return (
    <div className="donations-container">
      <div className="dn-hero">
        <div className="dn-hero-overlay"></div>
        <div className="dn-hero-content">
          <h1><BiDonateHeart className="dn-hero-icon" /> Make a Difference</h1>
          <p>Your contribution can transform lives and communities across India</p>
          <div className="dn-hero-stats">
            <div className="dn-stat">
              <h3>1000+</h3>
              <p>Donors</p>
            </div>
            <div className="dn-stat">
              <h3>50+</h3>
              <p>Projects</p>
            </div>
            <div className="dn-stat">
              <h3>25+</h3>
              <p>Villages</p>
            </div>
          </div>
        </div>
      </div>

      <div className="dn-tabs-section">
        <div className="dn-tabs">
          {donationOptions.map(option => (
            <div 
              key={option.type}
              className={`dn-tab ${activeTab === option.type ? 'active' : ''}`}
              onClick={() => setActiveTab(option.type)}
            >
              {option.icon}
              <span>{option.label}</span>
            </div>
          ))}
        </div>

        <div className="dn-tab-content">
          {activeTab === 'money' && (
            <div className="dn-money-donation">
              <h2>Donate Money</h2>
              <p>Your financial contribution helps us sustain our community development projects</p>
              
              <div className="dn-amount-options">
                <div 
                  className={`dn-amount ${donationAmount === '500' ? 'active' : ''}`}
                  onClick={() => handleAmountSelect('500')}
                >
                  ₹500
                </div>
                <div 
                  className={`dn-amount ${donationAmount === '1000' ? 'active' : ''}`}
                  onClick={() => handleAmountSelect('1000')}
                >
                  ₹1000
                </div>
                <div 
                  className={`dn-amount ${donationAmount === '2000' ? 'active' : ''}`}
                  onClick={() => handleAmountSelect('2000')}
                >
                  ₹2000
                </div>
                <div 
                  className={`dn-amount ${donationAmount === '5000' ? 'active' : ''}`}
                  onClick={() => handleAmountSelect('5000')}
                >
                  ₹5000
                </div>
                <div 
                  className={`dn-amount ${donationAmount === 'custom' ? 'active' : ''}`}
                  onClick={() => setDonationAmount('custom')}
                >
                  Custom
                </div>
              </div>

              {donationAmount === 'custom' && (
                <div className="dn-custom-amount">
                  <div className="dn-input-group">
                    <span className="dn-currency">₹</span>
                    <input 
                      type="number" 
                      placeholder="Enter amount" 
                      value={customAmount}
                      onChange={handleCustomAmount}
                    />
                  </div>
                </div>
              )}

              <button className="dn-donate-btn">
                <FaHandHoldingHeart /> Donate Now
              </button>
            </div>
          )}

          {activeTab === 'food' && (
            <div className="dn-other-donation">
              <h2>Donate Food</h2>
              <p>Help us provide nutritious meals to underprivileged communities</p>
              <div className="dn-donation-process">
                <div className="dn-process-step">
                  <div className="dn-step-number">1</div>
                  <h3>Contact Us</h3>
                  <p>Call us at +91-9876543210 or email at food@civicspot.org</p>
                </div>
                <div className="dn-process-step">
                  <div className="dn-step-number">2</div>
                  <h3>Schedule Pickup</h3>
                  <p>We'll arrange for pickup from your location at your convenience</p>
                </div>
                <div className="dn-process-step">
                  <div className="dn-step-number">3</div>
                  <h3>Make an Impact</h3>
                  <p>Your donated food will reach those who need it the most</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'clothes' && (
            <div className="dn-other-donation">
              <h2>Donate Clothes</h2>
              <p>Your gently used clothes can provide warmth and dignity to someone in need</p>
              <div className="dn-donation-process">
                <div className="dn-process-step">
                  <div className="dn-step-number">1</div>
                  <h3>Sort & Pack</h3>
                  <p>Collect clean, gently used clothes and pack them securely</p>
                </div>
                <div className="dn-process-step">
                  <div className="dn-step-number">2</div>
                  <h3>Drop Off or Schedule Pickup</h3>
                  <p>Visit our center or call +91-9876543210 to arrange pickup</p>
                </div>
                <div className="dn-process-step">
                  <div className="dn-step-number">3</div>
                  <h3>Track Your Impact</h3>
                  <p>Receive updates on how your donation is making a difference</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'medicines' && (
            <div className="dn-other-donation">
              <h2>Donate Medicines</h2>
              <p>Help provide essential medications to those who cannot afford them</p>
              <div className="dn-donation-process">
                <div className="dn-process-step">
                  <div className="dn-step-number">1</div>
                  <h3>Check Eligibility</h3>
                  <p>Ensure medicines are unexpired and in their original packaging</p>
                </div>
                <div className="dn-process-step">
                  <div className="dn-step-number">2</div>
                  <h3>Contact Our Medical Team</h3>
                  <p>Email medicines@civicspot.org with a list of medicines you wish to donate</p>
                </div>
                <div className="dn-process-step">
                  <div className="dn-step-number">3</div>
                  <h3>Arrange Delivery</h3>
                  <p>Our team will guide you on the next steps for safe delivery</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'books' && (
            <div className="dn-other-donation">
              <h2>Donate Books</h2>
              <p>Help us build libraries and promote education in underserved communities</p>
              <div className="dn-donation-process">
                <div className="dn-process-step">
                  <div className="dn-step-number">1</div>
                  <h3>Collect & Sort</h3>
                  <p>Gather books in good condition, suitable for children and adults</p>
                </div>
                <div className="dn-process-step">
                  <div className="dn-step-number">2</div>
                  <h3>Contact Us</h3>
                  <p>Call us at +91-9876543210 or email at books@civicspot.org</p>
                </div>
                <div className="dn-process-step">
                  <div className="dn-step-number">3</div>
                  <h3>Delivery</h3>
                  <p>Drop off at our center or schedule a pickup for larger donations</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'volunteer' && (
            <div className="dn-other-donation">
              <h2>Volunteer With Us</h2>
              <p>Donate your time and skills to make a meaningful impact in communities</p>
              <div className="dn-donation-process">
                <div className="dn-process-step">
                  <div className="dn-step-number">1</div>
                  <h3>Choose Area of Interest</h3>
                  <p>Select from education, healthcare, environment, or community development</p>
                </div>
                <div className="dn-process-step">
                  <div className="dn-step-number">2</div>
                  <h3>Register</h3>
                  <p>Fill out our volunteer form with your skills and availability</p>
                </div>
                <div className="dn-process-step">
                  <div className="dn-step-number">3</div>
                  <h3>Get Started</h3>
                  <p>Attend orientation and begin making a difference in communities</p>
                </div>
              </div>
              <button className="dn-donate-btn dn-volunteer-btn">
                <FaHandsHelping /> Register as Volunteer
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="dn-causes-section">
        <div className="dn-section-header">
          <FaHandsHelping className="dn-section-icon" />
          <h2>Causes We Support</h2>
        </div>
        <div className="dn-causes-grid">
          {causeCategories.map(cause => (
            <div className="dn-cause-card" key={cause.id}>
              <div className="dn-cause-icon">
                {cause.icon}
              </div>
              <h3>{cause.name}</h3>
              <p>{cause.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="dn-impact-banner">
        <div className="dn-impact-content">
          <h2>Your Impact So Far</h2>
          <div className="dn-impact-stats">
            <div className="dn-impact-stat">
              <div className="dn-impact-number">₹15L+</div>
              <div className="dn-impact-label">Funds Raised</div>
            </div>
            <div className="dn-impact-stat">
              <div className="dn-impact-number">5000+</div>
              <div className="dn-impact-label">Lives Impacted</div>
            </div>
            <div className="dn-impact-stat">
              <div className="dn-impact-number">20+</div>
              <div className="dn-impact-label">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>

      <div className="dn-stories-section">
        <div className="dn-section-header">
          <FaCheckCircle className="dn-section-icon" />
          <h2>Success Stories</h2>
        </div>
        <div className="dn-stories-grid">
          {successStories.map(story => (
            <div className="dn-story-card" key={story.id}>
              <h3>{story.title}</h3>
              <p>{story.description}</p>
              <div className="dn-story-stats">
                <div className="dn-story-stat">
                  <span>Impact:</span> {story.impact}
                </div>
                <div className="dn-story-stat">
                  <span>Funds Raised:</span> {story.raised}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="dn-footer">
        <h2>Every Donation Makes a Difference</h2>
        <p>Join us in our mission to create positive change in communities across India</p>
        <div className="dn-footer-actions">
          <button className="dn-donate-btn">
            <FaHandHoldingHeart /> Donate Now
          </button>
          <button className="dn-contact-btn">
            <FaUsers /> Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donations;
