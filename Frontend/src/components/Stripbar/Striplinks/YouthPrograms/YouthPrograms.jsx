import React, { useState } from 'react';
import './YouthPrograms.css';
import { FaGraduationCap, FaLaptop, FaUsers, FaHandsHelping, FaPalette, FaMusic, FaFootballBall, FaMicrophone } from 'react-icons/fa';
import { MdWorkOutline, MdSportsHandball, MdOutlineVolunteerActivism, MdOutlinePsychology } from 'react-icons/md';
import { BiSolidLeaf } from 'react-icons/bi';

const YouthPrograms = () => {
  const [activeSchemeIndex, setActiveSchemeIndex] = useState(0);

  const schemes = [
    {
      id: 1,
      name: "National Youth Policy",
      description: "A comprehensive policy to empower youth through education, skill development, and employment opportunities.",
      benefits: [
        "Holistic development framework",
        "Focus on youth leadership",
        "Entrepreneurship promotion",
        "Digital literacy initiatives"
      ]
    },
    {
      id: 2,
      name: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
      description: "Skill development initiative to enable youth to take up industry-relevant skill training that will help them secure better livelihoods.",
      benefits: [
        "Free skill training",
        "Industry-recognized certification",
        "Monetary rewards for successful trainees",
        "Soft skills development"
      ]
    },
    {
      id: 3,
      name: "National Service Scheme (NSS)",
      description: "Youth-focused program aimed at developing student personality through community service.",
      benefits: [
        "Community engagement",
        "Leadership development",
        "Special camp participation",
        "Service learning opportunities"
      ]
    },
    {
      id: 4,
      name: "Nehru Yuva Kendra Sangathan (NYKS)",
      description: "One of the largest youth organizations aimed at developing personality and leadership qualities of youth.",
      benefits: [
        "Youth club networks",
        "Cultural exchange programs",
        "Sports tournaments",
        "Social service activities"
      ]
    },
    {
      id: 5,
      name: "Digital India Internship Scheme",
      description: "Offers opportunity to youth to work with government on various digital initiatives and gain experience.",
      benefits: [
        "Hands-on technology experience",
        "Government project exposure",
        "Certificate and stipend",
        "Networking opportunities"
      ]
    }
  ];

  const nextScheme = () => {
    setActiveSchemeIndex((prevIndex) => (prevIndex + 1) % schemes.length);
  };

  const prevScheme = () => {
    setActiveSchemeIndex((prevIndex) => (prevIndex - 1 + schemes.length) % schemes.length);
  };

  return (
    <div className="youthprograms-container">
      {/* Hero Section */}
      <div className="youthprograms-hero">
        <div className="youthprograms-hero-content">
          <h1>Youth Development Programs</h1>
          <p>Empowering the next generation through comprehensive development initiatives, skill training, and leadership opportunities</p>
          <button className="youthprograms-btn">Explore Programs</button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="youthprograms-stats">
        <div className="youthprograms-stat-item">
          <h2>65M+</h2>
          <p>Youth Engaged Annually</p>
        </div>
        <div className="youthprograms-stat-item">
          <h2>15K+</h2>
          <p>Youth Centers Nationwide</p>
        </div>
        <div className="youthprograms-stat-item">
          <h2>200+</h2>
          <p>Skill Development Programs</p>
        </div>
        <div className="youthprograms-stat-item">
          <h2>45%</h2>
          <p>Employment Rate Growth</p>
        </div>
      </div>

      {/* Government Schemes Carousel */}
      <div className="youthprograms-schemes">
        <h2>Government Youth Programs</h2>
        <div className="youthprograms-carousel">
          <button className="youthprograms-carousel-btn left" onClick={prevScheme}>❮</button>
          <div className="youthprograms-scheme-card">
            <h3>{schemes[activeSchemeIndex].name}</h3>
            <p>{schemes[activeSchemeIndex].description}</p>
            <div className="youthprograms-benefits">
              <h4>Key Benefits:</h4>
              <ul>
                {schemes[activeSchemeIndex].benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
          <button className="youthprograms-carousel-btn right" onClick={nextScheme}>❯</button>
        </div>
        <div className="youthprograms-carousel-dots">
          {schemes.map((_, index) => (
            <span 
              key={index} 
              className={`youthprograms-dot ${index === activeSchemeIndex ? 'active' : ''}`}
              onClick={() => setActiveSchemeIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Info Banner */}
      <div className="youthprograms-info-banner">
        <h2>Investing in Youth is Investing in Our Future</h2>
        <p>Youth development programs provide essential skills, support networks, and opportunities that help young people transition successfully to adulthood and become contributing members of society.</p>
      </div>

      {/* Youth Development Areas */}
      <div className="youthprograms-categories">
        <h2>Youth Development Areas</h2>
        <div className="youthprograms-grid">
          <div className="youthprograms-grid-item">
            <FaGraduationCap className="youthprograms-icon" />
            <h3>Education</h3>
            <p>Access to quality education and scholarships for continued learning</p>
          </div>
          <div className="youthprograms-grid-item">
            <FaLaptop className="youthprograms-icon" />
            <h3>Digital Literacy</h3>
            <p>Technology training to prepare youth for the digital economy</p>
          </div>
          <div className="youthprograms-grid-item">
            <MdWorkOutline className="youthprograms-icon" />
            <h3>Employment</h3>
            <p>Job readiness, internships, and career development opportunities</p>
          </div>
          <div className="youthprograms-grid-item">
            <MdOutlinePsychology className="youthprograms-icon" />
            <h3>Mental Health</h3>
            <p>Support services for psychological well-being and resilience</p>
          </div>
          <div className="youthprograms-grid-item">
            <FaUsers className="youthprograms-icon" />
            <h3>Leadership</h3>
            <p>Programs to develop leadership skills and civic engagement</p>
          </div>
          <div className="youthprograms-grid-item">
            <FaPalette className="youthprograms-icon" />
            <h3>Arts & Culture</h3>
            <p>Creative expression through visual and performing arts</p>
          </div>
          <div className="youthprograms-grid-item">
            <MdSportsHandball className="youthprograms-icon" />
            <h3>Sports & Fitness</h3>
            <p>Physical activities that promote health and teamwork</p>
          </div>
          <div className="youthprograms-grid-item">
            <MdOutlineVolunteerActivism className="youthprograms-icon" />
            <h3>Community Service</h3>
            <p>Opportunities to give back through volunteering initiatives</p>
          </div>
        </div>
      </div>

      {/* Youth Facilities */}
      <div className="youthprograms-facilities">
        <h2>Youth Facilities & Resources</h2>
        <div className="youthprograms-facilities-grid">
          <div className="youthprograms-facility">
            <div className="facility-image youth-center"></div>
            <h3>Youth Centers</h3>
            <p>Safe spaces for recreation, learning, and socializing</p>
          </div>
          <div className="youthprograms-facility">
            <div className="facility-image innovation-hub"></div>
            <h3>Innovation Hubs</h3>
            <p>Technology centers for digital skills and innovation</p>
          </div>
          <div className="youthprograms-facility">
            <div className="facility-image career-center"></div>
            <h3>Career Centers</h3>
            <p>Resources for job searching and career guidance</p>
          </div>
          <div className="youthprograms-facility">
            <div className="facility-image counseling-center"></div>
            <h3>Counseling Services</h3>
            <p>Support for mental health and personal development</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="youthprograms-cta">
        <div className="youthprograms-cta-content">
          <h2>Shape the Future of Youth in Your Community</h2>
          <p>Join us in creating more opportunities for young people through mentorship, donations, or program participation</p>
          <div className="youthprograms-cta-buttons">
            <button className="youthprograms-btn">Volunteer as Mentor</button>
            <button className="youthprograms-btn secondary">Support Programs</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouthPrograms;
