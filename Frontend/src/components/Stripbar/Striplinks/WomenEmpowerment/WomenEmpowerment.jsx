import React, { useState } from 'react';
import './WomenEmpowerment.css';
import { 
  FaFemale, 
  FaUniversity, 
  FaBriefcase, 
  FaHandsHelping, 
  FaUsers,
  FaBalanceScale,
  FaChild,
  FaGraduationCap,
  FaRupeeSign,
  FaHeart,
  FaUserShield,
  FaChartLine,
  FaHome,
  FaLaptop,
  FaTrophy
} from 'react-icons/fa';
import { 
  MdHealthAndSafety, 
  MdSecurity, 
  MdFamilyRestroom,
  MdOutlineCastForEducation,
  MdOutlineVolunteerActivism,
  MdOutlineEmojiPeople
} from 'react-icons/md';
import { GiSkills, GiTeacher } from 'react-icons/gi';
import { RiGovernmentFill, RiMentalHealthLine } from 'react-icons/ri';
import { BiSupport } from 'react-icons/bi';

const WomenEmpowerment = () => {
  const [activeSchemeIndex, setActiveSchemeIndex] = useState(0);

  const womenSchemes = [
    {
      id: 1,
      title: "Beti Bachao Beti Padhao",
      description: "A government initiative aimed at addressing the declining child sex ratio and promoting education and empowerment of girls.",
      benefits: "Financial support for girl child education, awareness campaigns, and gender sensitization programs",
      achievements: [
        "Improved child sex ratio in many districts",
        "Increased enrollment and retention of girls in schools",
        "Reduced gender discrimination practices",
        "Enhanced awareness about girl child rights"
      ],
      icon: <FaChild />
    },
    {
      id: 2,
      title: "Mahila Shakti Kendra",
      description: "A scheme that aims to empower rural women through community participation and create an environment for women to realize their full potential.",
      benefits: "Skill development, employment opportunities, digital literacy, health and nutrition",
      achievements: [
        "Established women's centers in rural areas",
        "Trained thousands of women in various skills",
        "Created sustainable livelihood opportunities",
        "Enhanced awareness about rights and entitlements"
      ],
      icon: <MdOutlineEmojiPeople />
    },
    {
      id: 3,
      title: "MUDRA Yojana for Women",
      description: "Financial support to women entrepreneurs to start or expand their businesses through loans and mentorship.",
      benefits: "Collateral-free loans up to ₹10 lakh, business training, and market linkage support",
      achievements: [
        "Millions of women entrepreneurs supported",
        "Billions in loans disbursed to women-owned businesses",
        "Creation of employment opportunities",
        "Enhanced financial independence among women"
      ],
      icon: <FaRupeeSign />
    },
    {
      id: 4,
      title: "Working Women Hostel Scheme",
      description: "Provides safe and affordable accommodation to working women who live away from their hometown.",
      benefits: "Secure accommodation, daycare facilities for children, and reasonable rent",
      achievements: [
        "Hundreds of hostels established across the country",
        "Thousands of working women benefited",
        "Enabled women to pursue careers away from home",
        "Provided safe living environment for single women"
      ],
      icon: <FaHome />
    },
    {
      id: 5,
      title: "One Stop Centre Scheme",
      description: "Integrated support and assistance to women affected by violence, in private and public spaces.",
      benefits: "Medical aid, police assistance, legal support, psycho-social counseling, and temporary shelter",
      achievements: [
        "Hundreds of centers established nationwide",
        "Thousands of women provided with emergency and non-emergency support",
        "Reduced response time in crisis situations",
        "Enhanced coordination among various stakeholders"
      ],
      icon: <MdSecurity />
    }
  ];

  const empowermentAreas = [
    { name: "Education", icon: <FaGraduationCap /> },
    { name: "Economic Participation", icon: <FaBriefcase /> },
    { name: "Health & Wellness", icon: <MdHealthAndSafety /> },
    { name: "Legal Rights", icon: <FaBalanceScale /> },
    { name: "Political Participation", icon: <RiGovernmentFill /> },
    { name: "Safety & Security", icon: <FaUserShield /> },
    { name: "Skill Development", icon: <GiSkills /> },
    { name: "Family Planning", icon: <MdFamilyRestroom /> },
    { name: "Mental Health", icon: <RiMentalHealthLine /> },
    { name: "Digital Literacy", icon: <FaLaptop /> },
    { name: "Leadership", icon: <FaUsers /> },
    { name: "Entrepreneurship", icon: <FaChartLine /> }
  ];

  const successStories = [
    {
      id: 1,
      title: "Women Self-Help Groups",
      description: "Collectives of rural women who support each other in savings, credit, and economic activities, transforming lives and communities.",
      icon: <FaUsers />
    },
    {
      id: 2,
      title: "Women in STEM",
      description: "Initiatives promoting women's participation in Science, Technology, Engineering, and Mathematics fields through education and mentorship.",
      icon: <MdOutlineCastForEducation />
    },
    {
      id: 3,
      title: "Women Entrepreneurs",
      description: "Support systems for women starting and growing businesses, including funding, training, and networking opportunities.",
      icon: <FaBriefcase />
    },
    {
      id: 4,
      title: "Women in Politics",
      description: "Programs to enhance women's representation in political bodies from panchayats to parliament, ensuring their voices in governance.",
      icon: <RiGovernmentFill />
    },
    {
      id: 5,
      title: "Women in Sports",
      description: "Initiatives breaking gender barriers in sports, producing world-class women athletes who inspire generations.",
      icon: <FaTrophy />
    },
    {
      id: 6,
      title: "Rural Women Leaders",
      description: "Grassroots leadership development programs transforming rural women into community change agents.",
      icon: <GiTeacher />
    }
  ];

  const handleNextScheme = () => {
    setActiveSchemeIndex((prevIndex) => 
      prevIndex === womenSchemes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevScheme = () => {
    setActiveSchemeIndex((prevIndex) => 
      prevIndex === 0 ? womenSchemes.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="women-container">
      <div className="we-hero">
        <div className="we-hero-overlay"></div>
        <div className="we-hero-content">
          <FaFemale className="we-hero-icon" />
          <h1>Women Empowerment</h1>
          <p>Enabling women to realize their full potential and rights</p>
        </div>
      </div>

      <div className="we-stats">
        <div className="we-stat">
          <div className="we-stat-number">48%</div>
          <div className="we-stat-text">Women in Workforce</div>
        </div>
        <div className="we-stat">
          <div className="we-stat-number">14M+</div>
          <div className="we-stat-text">Women in SHGs</div>
        </div>
        <div className="we-stat">
          <div className="we-stat-number">93%</div>
          <div className="we-stat-text">Girls' School Enrollment</div>
        </div>
      </div>

      <div className="we-schemes-section">
        <div className="we-section-header">
          <FaHandsHelping className="we-section-icon" />
          <h2>Government Schemes for Women</h2>
          <p>Initiatives to promote gender equality and women's empowerment</p>
        </div>
        
        <div className="we-scheme-carousel">
          <button className="we-carousel-btn we-prev-btn" onClick={handlePrevScheme}>
            &#10094;
          </button>
          
          <div className="we-scheme-card">
            <div className="we-scheme-icon">
              {womenSchemes[activeSchemeIndex].icon}
            </div>
            <h3>{womenSchemes[activeSchemeIndex].title}</h3>
            <p className="we-scheme-desc">{womenSchemes[activeSchemeIndex].description}</p>
            <div className="we-benefits">
              <h4>Benefits:</h4>
              <p>{womenSchemes[activeSchemeIndex].benefits}</p>
            </div>
            <div className="we-achievements">
              <h4>Achievements:</h4>
              <ul>
                {womenSchemes[activeSchemeIndex].achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <button className="we-carousel-btn we-next-btn" onClick={handleNextScheme}>
            &#10095;
          </button>
        </div>
        
        <div className="we-carousel-dots">
          {womenSchemes.map((_, index) => (
            <span 
              key={index} 
              className={`we-dot ${index === activeSchemeIndex ? 'active' : ''}`}
              onClick={() => setActiveSchemeIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="we-info-banner">
        <div className="we-info-content">
          <div className="we-info-text">
            <h2>Gender Equality is Everyone's Responsibility</h2>
            <p>Women's empowerment is not just about women's rights—it's about creating a balanced society where everyone has equal opportunities. When women are empowered, economies grow, societies thrive, and families lead healthier lives. Gender equality requires the engagement of women and men, girls and boys. It is everyone's responsibility to foster a society where gender doesn't determine one's potential or limitations.</p>
          </div>
          <div className="we-info-image">
            <FaBalanceScale className="we-info-icon" />
          </div>
        </div>
      </div>

      <div className="we-areas-section">
        <div className="we-section-header">
          <MdOutlineVolunteerActivism className="we-section-icon" />
          <h2>Areas of Empowerment</h2>
          <p>Critical dimensions for achieving gender equality</p>
        </div>
        
        <div className="we-areas-grid">
          {empowermentAreas.map((area, index) => (
            <div className="we-area-card" key={index}>
              <div className="we-area-icon">
                {area.icon}
              </div>
              <h3>{area.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="we-success-section">
        <div className="we-section-header">
          <FaHeart className="we-section-icon" />
          <h2>Success Stories</h2>
          <p>Inspiring examples of women's empowerment in action</p>
        </div>
        
        <div className="we-success-grid">
          {successStories.map(story => (
            <div className="we-success-card" key={story.id}>
              <div className="we-success-icon">
                {story.icon}
              </div>
              <h3>{story.title}</h3>
              <p>{story.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="we-contact-section">
        <h2>Support Women's Empowerment</h2>
        <p>Get involved in initiatives promoting gender equality and women's rights.</p>
        <div className="we-button-group">
          <button className="we-contact-btn primary">Join an Initiative</button>
          <button className="we-contact-btn secondary">Report Gender Discrimination</button>
        </div>
      </div>
    </div>
  );
};

export default WomenEmpowerment;