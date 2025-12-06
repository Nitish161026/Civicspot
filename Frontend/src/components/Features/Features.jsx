// Features.jsx
import React from 'react';
import './Features.css';
import { FaSearchLocation, FaHandsHelping, FaBrain, FaUsersCog, FaLightbulb } from 'react-icons/fa';
import { GiVillage, GiTeamIdea, GiSkills } from 'react-icons/gi';

const features = [
  {
    icon: <FaSearchLocation />,
    title: 'Discover Village Challenges',
    desc: 'Explore real-time issues reported by rural communities needing attention and support.',
  },
  {
    icon: <GiSkills />,
    title: 'Skill-Based Volunteering',
    desc: 'Contribute based on your expertise — from tech to agriculture, education, and more.',
  },
  {
    icon: <GiTeamIdea />,
    title: 'Collaborative Problem Solving',
    desc: 'Work together with locals, NGOs, and experts to build sustainable solutions.',
  },
  {
    icon: <FaHandsHelping />,
    title: 'Volunteer Connections',
    desc: 'Connect with like-minded changemakers ready to make a difference on the ground.',
  },
  {
    icon: <FaBrain />,
    title: 'Knowledge Sharing',
    desc: 'Access educational resources and share wisdom that empowers rural innovation.',
  },
  {
    icon: <FaUsersCog />,
    title: 'Community Empowerment',
    desc: 'Build capacity within communities to tackle challenges independently in the long run.',
  },
  {
    icon: <GiVillage />,
    title: 'Village Profiles',
    desc: 'Learn about villages, their culture, challenges, and key development needs.',
  },
  {
    icon: <FaLightbulb />,
    title: 'Innovative Solutions',
    desc: 'Crowdsource and promote ideas that are practical, cost-effective, and impactful.',
  },
];

const Features = () => {
  return (
    <div className="features-page">
      <h1 className="features-title">Key Features of CivicSpot</h1>
      <p className="features-subtitle">Empowering communities through innovation and collaboration</p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-desc">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
