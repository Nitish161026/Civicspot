import React, { useState } from 'react';
import './Education.css';
import { 
  FaGraduationCap, 
  FaBookReader, 
  FaChalkboardTeacher, 
  FaUniversity, 
  FaSchool,
  FaLaptop,
  FaUserGraduate,
  FaBook,
  FaPuzzlePiece,
  FaRegLightbulb,
  FaSearch,
  FaAward,
  FaBrain
} from 'react-icons/fa';
import { MdSchool, MdOutlinePsychology, MdScience, MdSportsBasketball } from 'react-icons/md';
import { GiTechnoHeart, GiMaterialsScience } from 'react-icons/gi';
import { BiMath } from 'react-icons/bi';

const Education = () => {
  const [activeSchemeIndex, setActiveSchemeIndex] = useState(0);

  const educationSchemes = [
    {
      id: 1,
      title: "Sarva Shiksha Abhiyan",
      description: "Universal access to quality elementary education for all children aged 6-14 years.",
      eligibility: "Children aged 6-14 years",
      benefits: [
        "Free education in government schools",
        "Free textbooks and uniforms",
        "Mid-day meals",
        "Special training for out-of-school children"
      ],
      icon: <FaSchool />
    },
    {
      id: 2,
      title: "PM Poshan (Mid-Day Meal)",
      description: "Provides nutritious meals to school children to enhance enrollment, retention and attendance.",
      eligibility: "Students in government and government-aided schools from classes 1-8",
      benefits: [
        "One hot cooked meal every school day",
        "Nutritional support to students",
        "Improved attendance and concentration",
        "Promotion of social equality"
      ],
      icon: <MdSchool />
    },
    {
      id: 3,
      title: "Rashtriya Madhyamik Shiksha Abhiyan",
      description: "Enhancing access to secondary education and improving its quality.",
      eligibility: "Students completing elementary education",
      benefits: [
        "Additional secondary schools in underserved areas",
        "Strengthening of existing schools",
        "Focus on quality education",
        "Appointment of additional teachers"
      ],
      icon: <FaUserGraduate />
    },
    {
      id: 4,
      title: "PRAGATI Scholarship",
      description: "Scholarship for girl students for technical education.",
      eligibility: "Girl students admitted to AICTE approved Technical Institutions",
      benefits: [
        "₹50,000 per annum for tuition fee reimbursement",
        "Support for economically backward families",
        "Promotion of technical education for girls",
        "Limited to one girl child per family"
      ],
      icon: <FaLaptop />
    },
    {
      id: 5,
      title: "National Scholarship Portal",
      description: "One-stop platform for various scholarship schemes offered by central and state governments.",
      eligibility: "Students from minority communities, SC/ST, OBC and others",
      benefits: [
        "Simplified scholarship application process",
        "Transparent selection and disbursement",
        "Direct transfer of scholarship amount",
        "Multiple schemes available on one platform"
      ],
      icon: <FaAward />
    }
  ];

  const subjects = [
    { name: "Mathematics", icon: <BiMath /> },
    { name: "Science", icon: <MdScience /> },
    { name: "Literature", icon: <FaBook /> },
    { name: "Technology", icon: <GiTechnoHeart /> },
    { name: "Arts", icon: <FaPuzzlePiece /> },
    { name: "Physics", icon: <GiMaterialsScience /> },
    { name: "Psychology", icon: <MdOutlinePsychology /> },
    { name: "Sports", icon: <MdSportsBasketball /> }
  ];

  const resources = [
    {
      id: 1,
      title: "Digital Learning Platforms",
      description: "Free online learning resources including DIKSHA, e-Pathshala, and Swayam platforms.",
      icon: <FaLaptop />
    },
    {
      id: 2,
      title: "Career Counseling",
      description: "Expert guidance on career pathways, skill development, and higher education opportunities.",
      icon: <FaRegLightbulb />
    },
    {
      id: 3,
      title: "Scholarship Guidance",
      description: "Information and application support for various scholarship programs.",
      icon: <FaGraduationCap />
    },
    {
      id: 4,
      title: "Study Materials",
      description: "Free textbooks, reference books, and study guides for various courses and exams.",
      icon: <FaBookReader />
    },
    {
      id: 5,
      title: "Special Education Support",
      description: "Resources and assistance for students with special needs and learning disabilities.",
      icon: <FaSearch />
    },
    {
      id: 6,
      title: "Skill Development",
      description: "Vocational training and practical skill enhancement programs for students.",
      icon: <FaBrain />
    }
  ];

  const handleNextScheme = () => {
    setActiveSchemeIndex((prevIndex) => 
      prevIndex === educationSchemes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevScheme = () => {
    setActiveSchemeIndex((prevIndex) => 
      prevIndex === 0 ? educationSchemes.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="education-container">
      <div className="ed-hero">
        <div className="ed-hero-overlay"></div>
        <div className="ed-hero-content">
          <FaGraduationCap className="ed-hero-icon" />
          <h1>Education Resources</h1>
          <p>Empowering communities through knowledge and learning opportunities</p>
        </div>
      </div>

      <div className="ed-stats">
        <div className="ed-stat">
          <div className="ed-stat-number">98%</div>
          <div className="ed-stat-text">Primary School Enrollment Rate</div>
        </div>
        <div className="ed-stat">
          <div className="ed-stat-number">15L+</div>
          <div className="ed-stat-text">Schools Across India</div>
        </div>
        <div className="ed-stat">
          <div className="ed-stat-number">250M+</div>
          <div className="ed-stat-text">Students in Education System</div>
        </div>
      </div>

      <div className="ed-schemes-section">
        <div className="ed-section-header">
          <FaChalkboardTeacher className="ed-section-icon" />
          <h2>Government Education Schemes</h2>
          <p>Key initiatives to promote education across the country</p>
        </div>
        
        <div className="ed-scheme-carousel">
          <button className="ed-carousel-btn ed-prev-btn" onClick={handlePrevScheme}>
            &#10094;
          </button>
          
          <div className="ed-scheme-card">
            <div className="ed-scheme-icon">
              {educationSchemes[activeSchemeIndex].icon}
            </div>
            <h3>{educationSchemes[activeSchemeIndex].title}</h3>
            <p className="ed-scheme-desc">{educationSchemes[activeSchemeIndex].description}</p>
            <div className="ed-eligibility">
              <h4>Eligibility:</h4>
              <p>{educationSchemes[activeSchemeIndex].eligibility}</p>
            </div>
            <div className="ed-benefits">
              <h4>Benefits:</h4>
              <ul>
                {educationSchemes[activeSchemeIndex].benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <button className="ed-carousel-btn ed-next-btn" onClick={handleNextScheme}>
            &#10095;
          </button>
        </div>
        
        <div className="ed-carousel-dots">
          {educationSchemes.map((_, index) => (
            <span 
              key={index} 
              className={`ed-dot ${index === activeSchemeIndex ? 'active' : ''}`}
              onClick={() => setActiveSchemeIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="ed-info-banner">
        <div className="ed-info-content">
          <div className="ed-info-text">
            <h2>Right To Education</h2>
            <p>The Right of Children to Free and Compulsory Education Act or Right to Education Act (RTE) is an Act of the Parliament of India enacted on 4 August 2009, which describes the modalities of the importance of free and compulsory education for children between the ages of 6 and 14 in India under Article 21A of the Indian Constitution.</p>
          </div>
          <div className="ed-info-image">
            <FaUniversity className="ed-info-icon" />
          </div>
        </div>
      </div>

      <div className="ed-subjects-section">
        <div className="ed-section-header">
          <FaBook className="ed-section-icon" />
          <h2>Academic Subjects</h2>
          <p>Comprehensive resources across various disciplines</p>
        </div>
        
        <div className="ed-subjects-grid">
          {subjects.map((subject, index) => (
            <div className="ed-subject-card" key={index}>
              <div className="ed-subject-icon">
                {subject.icon}
              </div>
              <h3>{subject.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="ed-resources-section">
        <div className="ed-section-header">
          <FaRegLightbulb className="ed-section-icon" />
          <h2>Educational Resources</h2>
          <p>Tools and support for students and educators</p>
        </div>
        
        <div className="ed-resources-grid">
          {resources.map(resource => (
            <div className="ed-resource-card" key={resource.id}>
              <div className="ed-resource-icon">
                {resource.icon}
              </div>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="ed-contact-section">
        <h2>Need Educational Assistance?</h2>
        <p>Our team is here to help you navigate educational opportunities and resources.</p>
        <button className="ed-contact-btn">Contact Education Support</button>
      </div>
    </div>
  );
};

export default Education;
