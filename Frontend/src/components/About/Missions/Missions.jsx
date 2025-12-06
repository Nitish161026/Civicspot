import React, { useState, useEffect } from "react";
import "./Missions.css";
import { useNavigate } from "react-router-dom";

const Missions = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("Infrastructure");
  const [activeFaq, setActiveFaq] = useState(null);

  // Mission data organized by categories
  const missionsByCategory = {
    "Infrastructure": [
      {
        icon: "🏙️",
        title: "Smart Cities Mission",
        description: "An urban renewal program to develop 100 cities across India as citizen-friendly and sustainable.",
        started: "2015",
        target: "100 Cities",
        budget: "₹98,000 Crore",
        components: [
          "Smart governance and citizen services",
          "Sustainable urban mobility",
          "Smart waste and water management",
          "Solar energy and green buildings"
        ],
        website: "https://smartcities.gov.in/"
      },
      {
        icon: "🏗️",
        title: "AMRUT",
        description: "Atal Mission for Rejuvenation and Urban Transformation aims to provide basic services to households.",
        started: "2015",
        target: "500 Cities",
        budget: "₹50,000 Crore",
        components: [
          "Water supply and sewerage connections",
          "Storm water drains to reduce flooding",
          "Urban transport facilities",
          "Green spaces, parks, and recreation centers"
        ],
        website: "https://amrut.gov.in/"
      },
      {
        icon: "🛣️",
        title: "Bharatmala Pariyojana",
        description: "A centrally-sponsored umbrella program for the highways sector that focuses on optimizing efficiency of road traffic.",
        started: "2017",
        target: "34,800 km",
        budget: "₹5.35 lakh Crore",
        components: [
          "Economic corridors development",
          "Inter-corridor and feeder routes",
          "National corridors efficiency improvements",
          "Border and international connectivity roads"
        ],
        website: "https://morth.nic.in/"
      },
      {
        icon: "🚄",
        title: "National Rail Plan",
        description: "A long-term strategic plan to plan infrastructural capacity ahead of demand by 2030.",
        started: "2020",
        target: "National Coverage",
        budget: "₹38 lakh Crore",
        components: [
          "High-speed rail corridors",
          "Freight corridor expansion",
          "Station modernization",
          "Rail network expansion"
        ],
        website: "https://indianrailways.gov.in/"
      }
    ],
    "Social Welfare": [
      {
        icon: "🏠",
        title: "PM Awas Yojana",
        description: "Housing for all initiative providing financial assistance for affordable housing to the urban and rural poor.",
        started: "2015",
        target: "20 Million Houses",
        types: "Urban & Rural",
        components: [
          "Credit-linked subsidy scheme",
          "In-situ slum redevelopment",
          "Affordable housing in partnership",
          "Subsidy for beneficiary-led construction"
        ],
        website: "https://pmaymis.gov.in/"
      },
      {
        icon: "💼",
        title: "MGNREGA",
        description: "Mahatma Gandhi National Rural Employment Guarantee Act provides at least 100 days of wage employment in rural areas.",
        started: "2005",
        coverage: "All rural areas",
        wages: "State-specific",
        components: [
          "Guaranteed wage employment",
          "Creation of durable assets",
          "Strengthening rural livelihoods",
          "Social security net for vulnerable groups"
        ],
        website: "https://nrega.nic.in/"
      },
      {
        icon: "👩‍👧",
        title: "Beti Bachao Beti Padhao",
        description: "Initiative to save and educate the girl child by addressing gender-biased sex selection and promoting girls' education.",
        started: "2015",
        target: "Nation-wide",
        focus: "Gender equality",
        components: [
          "Prevent gender-biased sex selection",
          "Ensure survival & protection of the girl child",
          "Ensure education of the girl child",
          "Promoting girls' participation in all spheres"
        ],
        website: "https://wcd.nic.in/bbbp-schemes"
      },
      {
        icon: "🍲",
        title: "PM Poshan Scheme",
        description: "Previously known as Mid-Day Meal Scheme, provides nutritious meals to school children.",
        started: "1995 (Revamped 2021)",
        target: "11.80 crore children",
        coverage: "All govt schools",
        components: [
          "Hot cooked meal to school children",
          "Nutrition gardens in schools",
          "Special focus on aspirational districts",
          "Supplementary nutrition for children"
        ],
        website: "https://mdm.nic.in/"
      }
    ],
    "Digital India": [
      {
        icon: "💻",
        title: "Digital India",
        description: "Campaign to ensure government services are made available to citizens electronically.",
        started: "2015",
        focus: "Digital Infrastructure",
        vision: "Digital Empowerment",
        components: [
          "Broadband highways and universal access to phones",
          "Public Internet Access Program",
          "e-Governance through technology",
          "Electronic delivery of services"
        ],
        website: "https://digitalindia.gov.in/"
      },
      {
        icon: "🏦",
        title: "Jan Dhan Yojana",
        description: "National Mission for Financial Inclusion to ensure access to financial services for all households in India.",
        started: "2014",
        accounts: "450 million+",
        coverage: "Nation-wide",
        components: [
          "Bank accounts for unbanked population",
          "Access to credit, insurance, and pension",
          "Financial literacy programs",
          "Direct Benefit Transfer platform"
        ],
        website: "https://pmjdy.gov.in/"
      },
      {
        icon: "📱",
        title: "BharatNet",
        description: "World's largest rural broadband connectivity programme to provide affordable broadband services to rural citizens.",
        started: "2012",
        target: "2.5 lakh Gram Panchayats",
        coverage: "Rural India",
        components: [
          "Optical Fiber Network connectivity",
          "Village-level high-speed broadband",
          "Rural digital services delivery",
          "E-governance at village level"
        ],
        website: "https://bbnl.nic.in/"
      },
      {
        icon: "💳",
        title: "UPI & Digital Payments",
        description: "Unified Payments Interface is an instant real-time payment system developed by NPCI.",
        started: "2016",
        transactions: "6 billion monthly",
        users: "500 million+",
        components: [
          "Instant interbank transfers",
          "QR-code based payments",
          "Merchant payment ecosystem",
          "Financial inclusion through digital means"
        ],
        website: "https://www.npci.org.in/"
      }
    ],
    "Health & Wellness": [
      {
        icon: "🧹",
        title: "Swachh Bharat Mission",
        description: "A nationwide campaign to eliminate open defecation and improve solid waste management.",
        started: "2014",
        target: "Clean India",
        coverage: "All India",
        components: [
          "Elimination of open defecation",
          "Modern and scientific municipal solid waste management",
          "Behavioral change regarding healthy sanitation practices",
          "Public awareness about sanitation and its link to public health"
        ],
        website: "https://swachhbharat.mygov.in/"
      },
      {
        icon: "💧",
        title: "Jal Jeevan Mission",
        description: "Ensuring piped water supply to all rural households by 2024.",
        started: "2019",
        target: "Every Household",
        deadline: "2024",
        components: [
          "Functional household tap connections",
          "Water quality monitoring and testing",
          "Source sustainability measures",
          "Grey water management"
        ],
        website: "https://jaljeevanmission.gov.in/"
      },
      {
        icon: "🏥",
        title: "Ayushman Bharat",
        description: "National Health Protection Scheme providing coverage up to ₹5 lakh per family per year for secondary and tertiary care hospitalization.",
        started: "2018",
        beneficiaries: "500 million+",
        coverage: "₹5 lakh per family",
        components: [
          "Health and wellness centers",
          "Cashless and paperless access to services",
          "Secondary and tertiary care hospitalization",
          "Health insurance for underprivileged"
        ],
        website: "https://pmjay.gov.in/"
      },
      {
        icon: "💉",
        title: "National Health Mission",
        description: "A major initiative to address the health needs of underserved rural areas.",
        started: "2013",
        focus: "Rural & Urban",
        coverage: "Nation-wide",
        components: [
          "Reproductive, maternal, and child health services",
          "Disease control programs",
          "Healthcare infrastructure strengthening",
          "Mobile medical units and telemedicine"
        ],
        website: "https://nhm.gov.in/"
      }
    ],
    "Education": [
      {
        icon: "🎓",
        title: "National Education Policy",
        description: "Comprehensive framework to guide the development of education in India.",
        started: "2020",
        target: "All education levels",
        vision: "Equitable quality education",
        components: [
          "Universal access to quality education",
          "Holistic and multidisciplinary education",
          "Equitable and inclusive education",
          "Teacher education and training"
        ],
        website: "https://www.education.gov.in/en/nep-new"
      },
      {
        icon: "📚",
        title: "Samagra Shiksha",
        description: "An integrated scheme for school education extending from pre-school to class XII.",
        started: "2018",
        target: "All school children",
        coverage: "Nation-wide",
        components: [
          "Access to quality education",
          "Infrastructure development in schools",
          "Gender equality in education",
          "Digital initiatives in education"
        ],
        website: "https://samagra.education.gov.in/"
      },
      {
        icon: "👩‍🎓",
        title: "PM e-VIDYA",
        description: "A comprehensive initiative for digital education focusing on multi-mode access.",
        started: "2020",
        channels: "12 DTH channels",
        platform: "DIKSHA portal",
        components: [
          "One nation, one digital platform",
          "One class, one TV channel",
          "Extensive use of radio, podcasts, and special e-content",
          "Online education for differently-abled"
        ],
        website: "https://www.education.gov.in/en/e-learning"
      },
      {
        icon: "🧪",
        title: "ATAL Innovation Mission",
        description: "Initiative to create and promote a culture of innovation and entrepreneurship across India.",
        started: "2016",
        labs: "10,000+ schools",
        focus: "STEM education",
        components: [
          "Atal Tinkering Labs in schools",
          "Atal Incubation Centers",
          "Mentor engagement programs",
          "Innovation challenges for students"
        ],
        website: "https://aim.gov.in/"
      }
    ]
  };

  // Scroll to section handler
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
    });
  };
  
  // FAQ toggle handler
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };
  
  // Setup FAQ toggle event listeners
  useEffect(() => {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item, index) => {
      if (index === activeFaq) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }, [activeFaq]);

  return (
    <div className="missions-page">
      <div className="missions-container">
        {/* Hero Section */}
        <section className="missions-hero">
          <div className="missions-hero-content">
            <h1>Our National Missions</h1>
            <p className="missions-subtitle">
              Transforming India through coordinated development initiatives
            </p>
            <div className="missions-buttons">
              <button
                className="mission-btn-primary"
                onClick={() => scrollToSection("key-missions")}
              >
                Explore Missions
              </button>
              <button
                className="mission-btn-secondary"
                onClick={() => navigate("/contact")}
              >
                Connect With Us
              </button>
            </div>
          </div>
          <div className="mission-hero-graphic">
            <div className="mission-hero-shape"></div>
            <span className="mission-hero-caption">Building a Better Tomorrow</span>
          </div>
        </section>

        {/* Mission Introduction */}
        <section className="missions-intro">
          <div className="section-header">
            <div className="mission-icon-circle">
              <span>🇮🇳</span>
            </div>
            <h2>Transforming India</h2>
          </div>
          <p className="missions-intro-text">
            National missions are ambitious, focused initiatives by the Government of India to address key 
            challenges and drive development across various sectors. These missions represent coordinated efforts 
            to achieve transformative change by bringing together resources, technology, and expertise.
          </p>
          <p className="missions-intro-text">
            At <strong>CivicSpot</strong>, we support these national missions by creating grassroots awareness, 
            facilitating access to benefits, and helping citizens participate actively in the development process.
          </p>
        </section>

        {/* Key Missions Section */}
        <section className="key-missions" id="key-missions">
          <div className="section-header">
            <div className="mission-icon-circle">
              <span>🚀</span>
            </div>
            <h2>Key National Missions</h2>
          </div>

          <div className="mission-categories">
            <button 
              className={`mission-category ${activeCategory === "Infrastructure" ? "active" : ""}`}
              onClick={() => setActiveCategory("Infrastructure")}
            >
              Infrastructure
            </button>
            <button 
              className={`mission-category ${activeCategory === "Social Welfare" ? "active" : ""}`}
              onClick={() => setActiveCategory("Social Welfare")}
            >
              Social Welfare
            </button>
            <button 
              className={`mission-category ${activeCategory === "Digital India" ? "active" : ""}`}
              onClick={() => setActiveCategory("Digital India")}
            >
              Digital India
            </button>
            <button 
              className={`mission-category ${activeCategory === "Health & Wellness" ? "active" : ""}`}
              onClick={() => setActiveCategory("Health & Wellness")}
            >
              Health & Wellness
            </button>
            <button 
              className={`mission-category ${activeCategory === "Education" ? "active" : ""}`}
              onClick={() => setActiveCategory("Education")}
            >
              Education
            </button>
          </div>

          <div className="missions-grid">
            {missionsByCategory[activeCategory].map((mission, index) => (
              <div className="mission-card" key={index}>
                <div className="mission-card-header">
                  <div className="mission-icon">{mission.icon}</div>
                  <h3>{mission.title}</h3>
                </div>
                <div className="mission-card-body">
                  <p className="mission-description">{mission.description}</p>
                  <div className="mission-features">
                    <div className="mission-feature">
                      <span className="feature-label">Started:</span>
                      <span>{mission.started}</span>
                    </div>
                    
                    {mission.target && (
                      <div className="mission-feature">
                        <span className="feature-label">Target:</span>
                        <span>{mission.target}</span>
                      </div>
                    )}
                    
                    {mission.budget && (
                      <div className="mission-feature">
                        <span className="feature-label">Budget:</span>
                        <span>{mission.budget}</span>
                      </div>
                    )}
                    
                    {mission.coverage && (
                      <div className="mission-feature">
                        <span className="feature-label">Coverage:</span>
                        <span>{mission.coverage}</span>
                      </div>
                    )}
                    
                    {mission.focus && (
                      <div className="mission-feature">
                        <span className="feature-label">Focus:</span>
                        <span>{mission.focus}</span>
                      </div>
                    )}
                    
                    {mission.vision && (
                      <div className="mission-feature">
                        <span className="feature-label">Vision:</span>
                        <span>{mission.vision}</span>
                      </div>
                    )}
                    
                    {mission.deadline && (
                      <div className="mission-feature">
                        <span className="feature-label">Deadline:</span>
                        <span>{mission.deadline}</span>
                      </div>
                    )}
                    
                    {mission.types && (
                      <div className="mission-feature">
                        <span className="feature-label">Types:</span>
                        <span>{mission.types}</span>
                      </div>
                    )}

                    {mission.channels && (
                      <div className="mission-feature">
                        <span className="feature-label">Channels:</span>
                        <span>{mission.channels}</span>
                      </div>
                    )}
                    
                    {mission.platform && (
                      <div className="mission-feature">
                        <span className="feature-label">Platform:</span>
                        <span>{mission.platform}</span>
                      </div>
                    )}
                    
                    {mission.labs && (
                      <div className="mission-feature">
                        <span className="feature-label">Labs:</span>
                        <span>{mission.labs}</span>
                      </div>
                    )}
                    
                    {mission.accounts && (
                      <div className="mission-feature">
                        <span className="feature-label">Accounts:</span>
                        <span>{mission.accounts}</span>
                      </div>
                    )}
                    
                    {mission.transactions && (
                      <div className="mission-feature">
                        <span className="feature-label">Transactions:</span>
                        <span>{mission.transactions}</span>
                      </div>
                    )}
                    
                    {mission.users && (
                      <div className="mission-feature">
                        <span className="feature-label">Users:</span>
                        <span>{mission.users}</span>
                      </div>
                    )}
                    
                    {mission.beneficiaries && (
                      <div className="mission-feature">
                        <span className="feature-label">Beneficiaries:</span>
                        <span>{mission.beneficiaries}</span>
                      </div>
                    )}
                    
                    {mission.wages && (
                      <div className="mission-feature">
                        <span className="feature-label">Wages:</span>
                        <span>{mission.wages}</span>
                      </div>
                    )}
                  </div>
                  <div className="mission-highlights">
                    <h4>Key Components:</h4>
                    <ul>
                      {mission.components.map((component, i) => (
                        <li key={i}>{component}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mission-card-footer">
                  <button className="mission-link" onClick={() => window.open(mission.website, '_blank')}>
                    Visit Official Website
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Impact Section */}
        <section className="missions-impact">
          <div className="section-header">
            <div className="mission-icon-circle">
              <span>📊</span>
            </div>
            <h2>Impact of National Missions</h2>
          </div>
          
          <div className="impact-stats">
            <div className="impact-stat">
              <h3>100M+</h3>
              <p>Toilets Built</p>
              <span>Swachh Bharat Mission</span>
            </div>
            <div className="impact-stat">
              <h3>50M+</h3>
              <p>Household Water Connections</p>
              <span>Jal Jeevan Mission</span>
            </div>
            <div className="impact-stat">
              <h3>20M+</h3>
              <p>Houses Sanctioned</p>
              <span>PM Awas Yojana</span>
            </div>
            <div className="impact-stat">
              <h3>1.5B+</h3>
              <p>Digital Transactions Monthly</p>
              <span>Digital India</span>
            </div>
          </div>

          <div className="impact-story">
            <div className="impact-story-content">
              <h3>Success Stories</h3>
              <p>
                These national missions have transformed countless lives across India. From providing dignified housing
                to ensuring clean water access, from creating smart urban infrastructure to enabling digital connectivity,
                these missions continue to build a stronger, more inclusive India.
              </p>
              <button className="impact-story-btn" onClick={() => navigate("/impact-stories")}>
                Read Success Stories
              </button>
            </div>
            <div className="impact-story-image"></div>
          </div>
        </section>

        {/* CivicSpot's Role */}
        <section className="civicspot-role">
          <div className="section-header">
            <div className="mission-icon-circle">
              <span>🤝</span>
            </div>
            <h2>How CivicSpot Supports These Missions</h2>
          </div>
          
          <div className="role-grid">
            <div className="role-card">
              <div className="role-icon">🔍</div>
              <h3>Awareness</h3>
              <p>Educating citizens about available government missions and schemes relevant to their needs</p>
            </div>
            <div className="role-card">
              <div className="role-icon">📝</div>
              <h3>Documentation</h3>
              <p>Assisting with required documentation and application processes</p>
            </div>
            <div className="role-card">
              <div className="role-icon">🔄</div>
              <h3>Progress Tracking</h3>
              <p>Monitoring implementation status of various mission projects at local level</p>
            </div>
            <div className="role-card">
              <div className="role-icon">📣</div>
              <h3>Feedback Channel</h3>
              <p>Providing platform for citizens to give feedback on implementation</p>
            </div>
          </div>
          
          <div className="role-cta">
            <p>Join us in building a better India by participating in these transformative national missions.</p>
            <button className="role-cta-btn" onClick={() => navigate("/joinus")}>
              Join CivicSpot Today
            </button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="missions-faq">
          <div className="section-header">
            <div className="mission-icon-circle">
              <span>❓</span>
            </div>
            <h2>Frequently Asked Questions</h2>
          </div>
          
          <div className="faq-container">
            <div className={`faq-item ${activeFaq === 0 ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaq(0)}>
                <h3>How can I apply for benefits under these missions?</h3>
                <span className="faq-toggle">{activeFaq === 0 ? '-' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>
                  Most missions have specific application processes. You can apply through local government 
                  offices, Common Service Centers, or through online portals. CivicSpot can guide you through 
                  the eligibility criteria and application procedures.
                </p>
              </div>
            </div>
            
            <div className={`faq-item ${activeFaq === 1 ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaq(1)}>
                <h3>Are these missions available in all states?</h3>
                <span className="faq-toggle">{activeFaq === 1 ? '-' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>
                  Yes, these are national missions and are implemented across all states in India. However, 
                  the implementation pace and specific benefits may vary based on state-level adaptations.
                </p>
              </div>
            </div>
            
            <div className={`faq-item ${activeFaq === 2 ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaq(2)}>
                <h3>How can I track the progress of these missions in my area?</h3>
                <span className="faq-toggle">{activeFaq === 2 ? '-' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>
                  Most missions have official dashboards on their websites that provide state and district-wise 
                  implementation statistics. CivicSpot also tracks local implementation and provides updates 
                  specific to your community.
                </p>
              </div>
            </div>
            
            <div className={`faq-item ${activeFaq === 3 ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaq(3)}>
                <h3>How can I report issues related to mission implementation?</h3>
                <span className="faq-toggle">{activeFaq === 3 ? '-' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>
                  You can report implementation issues through CivicSpot's issue reporting feature. We'll ensure 
                  your concerns reach the right authorities. Alternatively, most missions have their own grievance 
                  redressal mechanisms accessible through their official websites.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="missions-cta">
          <h2>Ready to Participate in Nation Building?</h2>
          <p>
            Explore how you can benefit from these national missions or contribute to their success.
          </p>
          <div className="missions-cta-buttons">
            <button 
              className="missions-cta-primary"
              onClick={() => navigate("/raiseit")}
            >
              Report Implementation Issues
            </button>
            <button 
              className="missions-cta-secondary"
              onClick={() => navigate("/contact")}
            >
              Get Mission Guidance
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Missions;
