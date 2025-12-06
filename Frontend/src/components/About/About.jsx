import React, { useEffect, useState } from "react";
import "./About.css";
import Navbar from "./Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [suggestedQuestions] = useState([
    "What services do you offer?",
    "How can I get involved?",
    "Where are you located?",
    "What's your mission?",
    "How can I contact your team?",
  ]);

  // Chatbot toggle handler
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Embed CivicBot using Chatbase
  useEffect(() => {
    if (isChatOpen) {
      const container = document.createElement("div");
      container.id = "chatbase-chatbot-container";
      container.className = isChatOpen ? "chatbot-open" : "";

      const iframe = document.createElement("iframe");
      iframe.src = `https://www.chatbase.co/chatbot-iframe/SqymwQJoSce_Y7EvvY2dd`;
      iframe.title = "Chatbot";

      // Add close button inside the iframe container
      const closeButton = document.createElement("button");
      closeButton.className = "chatbot-close-btn";
      closeButton.innerHTML = "×";
      closeButton.onclick = toggleChat;

      container.appendChild(closeButton);
      container.appendChild(iframe);
      document.body.appendChild(container);

      return () => {
        const container = document.getElementById("chatbase-chatbot-container");
        if (container) document.body.removeChild(container);
      };
    }
  }, [isChatOpen]);

  return (
    <div>
      <Navbar />
      <div className="about-container">
        {/* Chatbot Elements */}
        <button className="chatbot-toggle-btn" onClick={toggleChat}>
          <i className={`fas ${isChatOpen ? "fa-times" : "fa-comment-dots"}`} />
          {!isChatOpen && <span>Ask Questions</span>}
        </button>

        {!isChatOpen && (
          <div className="suggested-questions-panel">
            <h4>Common Questions</h4>
            <ul>
              {suggestedQuestions.map((question, index) => (
                <li key={index} onClick={() => setIsChatOpen(true)}>
                  {question}
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* Hero Section */}
        <section className="about-hero">
          <div className="hero-content">
            <h1>Empowering Communities, One Click at a Time</h1>
            <p className="hero-subtitle">
              CivicSpot is your digital bridge between citizens and
              change-makers.
            </p>
            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() => navigate("/joinus")}
              >
                Join Our Mission
              </button>
              <button className="btn-secondary" onClick={() => navigate("/impact-stories")}>See Impact Stories</button>
            </div>
          </div>
          <div className="hero-image">
            <img className="gradient-circle" src="./about.png" alt="" />
            <div className="gradient-circle-small">CivicSpot</div>
          </div>
        </section>

        <section className="about-why" id="why-civicspot">
          <div className="section-header">
            <div className="icon-circle why-icon">
              <span>❓</span>
            </div>
            <h2>Why CivicSpot?</h2>
          </div>

          <p className="why-text">
            <strong>CivicSpot</strong> isn't just another platform — it's a
            movement dedicated to <strong>bridging the rural-urban gap</strong>{" "}
            using the power of <strong>tech-driven civic engagement</strong>.
          </p>
          <p className="why-text">
            Here's why communities, leaders, and citizens across India trust
            CivicSpot:
          </p>

          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon">📍</div>
              <h3>Hyperlocal Focus</h3>
              <p>
                We work at the grassroots level — understanding unique village
                problems and tailoring solutions accordingly.
              </p>
            </div>
            <div className="why-item">
              <div className="why-icon">📱</div>
              <h3>Easy-to-Use Technology</h3>
              <p>
                Simple, mobile-friendly tools help anyone — even first-time
                users — report, track, and resolve issues.
              </p>
            </div>
            <div className="why-item">
              <div className="why-icon">🤝</div>
              <h3>Community Empowerment</h3>
              <p>
                We don't replace the community — we empower it. Local voices are
                central to how CivicSpot operates and evolves.
              </p>
            </div>
            <div className="why-item">
              <div className="why-icon">📊</div>
              <h3>Transparent Progress</h3>
              <p>
                Live dashboards and updates make development measurable,
                trackable, and publicly visible.
              </p>
            </div>
          </div>

          <div className="why-conclusion">
            <p>
              At <strong>CivicSpot</strong>, we believe that{" "}
              <em>accountability, participation, and smart systems</em> are the
              keys to inclusive development.
            </p>
            <p>
              Join hands with us and become part of the change — because{" "}
              <strong>every voice matters</strong>, and{" "}
              <strong>every village counts</strong>.
            </p>
            <div className="cta-note">
              <p>
                <em>
                  Whether you're a citizen, a student, or a changemaker —
                  CivicSpot has a role for you.
                </em>
              </p>
              <button className="btn-join" onClick={() => navigate("/joinus")}>
                Join the Movement
              </button>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="about-story" id="our-mission">
          <div className="section-header">
            <div className="icon-circle mission-icon">
              <span>🌍</span>
            </div>
            <h2>Our Mission</h2>
          </div>
          <p className="mission-text">
            At <strong>CivicSpot</strong>, we are on a mission to transform
            rural life —<em>one village, one family, one issue at a time.</em>
          </p>
          <p className="mission-text">
            We strive to make the lives of our villagers easier, more
            comfortable, and full of dignity. With the collective power of{" "}
            <strong>community participation</strong> and{" "}
            <strong>technology</strong>, we aim to:
          </p>

          <div className="mission-grid">
            <div className="mission-item">
              <div className="mission-icon">🚰</div>
              <h3>Clean Water & Infrastructure</h3>
              <p>
                Solve everyday problems like lack of clean water, broken roads,
                and poor sewage systems.
              </p>
            </div>
            <div className="mission-item">
              <div className="mission-icon">🏥</div>
              <h3>Medical Access</h3>
              <p>
                Bridge the gap in rural healthcare and ensure well-being even in
                the remotest villages.
              </p>
            </div>
            <div className="mission-item">
              <div className="mission-icon">🏡</div>
              <h3>Housing for All</h3>
              <p>
                Build safe homes for underprivileged families, with the support
                of villagers and local leaders.
              </p>
            </div>
            <div className="mission-item">
              <div className="mission-icon">📢</div>
              <h3>Voice for the Voiceless</h3>
              <p>
                Map, track, and address issues by creating a transparent and
                powerful feedback loop.
              </p>
            </div>
          </div>

          <div className="mission-quote">
            <p>
              We believe that when <strong>villagers support each other</strong>
              , and when <strong>technology meets humanity</strong>, real change
              begins.
            </p>
            <p>
              At <strong>CivicSpot</strong>, we're not just solving problems —{" "}
              <em>we're building futures.</em>
            </p>
            <div className="scheme-note">
              <p>
                <em>
                  CivicSpot helps you check your eligibility, submit required
                  documents, and track application status — all in one place.
                </em>
              </p>
              <button className="btn-schemes" onClick={() => navigate("/missions")}>Explore All Missions</button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="about-stats" id="impressive-stats">
          <div className="section-header">
            <div className="icon-circle mission-icon">
              <span>📊</span>
            </div>
            <h2>Impressive Stats</h2>
          </div>
          <div className="stat-item">
            <h3>10,000+</h3>
            <p>Issues Reported</p>
          </div>
          <div className="stat-item">
            <h3>500+</h3>
            <p>Villages Served</p>
          </div>
          <div className="stat-item">
            <h3>85%</h3>
            <p>Resolution Rate</p>
          </div>
          <div className="stat-item">
            <h3>50,000+</h3>
            <p>Lives Impacted</p>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="about-how" id="what-we-do">
          <div className="section-header">
            <div className="icon-circle how-icon">
              <span>⚙️</span>
            </div>
            <h2>What We Do</h2>
          </div>
          <div className="card-container">
            <div className="info-card">
              <div className="card-icon">📍</div>
              <h3>Issue Reporting Made Simple</h3>
              <p>
                Villagers can instantly report local problems—like water
                shortages, damaged roads, or overflowing drains—using just a few
                taps. No paperwork, no waiting.
              </p>
            </div>
            <div className="info-card">
              <div className="card-icon">📊</div>
              <h3>Real-Time Problem Tracking</h3>
              <p>
                Every issue is transparently tracked on the platform, from
                reporting to resolution. Progress is visible to the
                public—nothing hidden, nothing ignored.
              </p>
            </div>
            <div className="info-card">
              <div className="card-icon">🏡</div>
              <h3>Community-Powered Development</h3>
              <p>
                We encourage people to support local causes—be it house
                construction, medical camps, or sanitation drives—by
                volunteering time, effort, or small donations.
              </p>
            </div>
            <div className="info-card">
              <div className="card-icon">🏥</div>
              <h3>Connecting to Medical Services</h3>
              <p>
                We link rural communities with nearby clinics, doctors, and
                mobile health vans, ensuring timely care and spreading health
                awareness where it's needed most.
              </p>
            </div>
            <div className="info-card">
              <div className="card-icon">🤝</div>
              <h3>Bridge Between Villagers & Government</h3>
              <p>
                We help villagers access government schemes and incentives by
                simplifying eligibility checks, documentation, and tracking
                applications.
              </p>
            </div>
            <div className="info-card">
              <div className="card-icon">📢</div>
              <h3>Voice Amplification</h3>
              <p>
                Citizens can vote on and prioritize the issues that matter most.
                CivicSpot helps turn that collective voice into real, visible
                action.
              </p>
            </div>
          </div>
        </section>

        {/* Schemes Section */}
        <section className="about-schemes" id="schemes">
          <div className="section-header">
            <div className="icon-circle schemes-icon">
              <span>🏛️</span>
            </div>
            <h2>Schemes that Build Bharat</h2>
          </div>
          <p className="scheme-intro">
            The Indian government has launched several powerful initiatives to
            uplift rural India. At <strong>CivicSpot</strong>, we aim to bridge
            the gap between policy and people by helping villagers access these
            schemes easily and effectively.
          </p>

          <div className="scheme-grid">
            <div className="scheme-card">
              <div className="scheme-icon">🏠</div>
              <h3>PM Awas Yojana (Gramin)</h3>
              <p>
                Ensures "Housing for All" by providing financial assistance to
                the rural poor for building pucca homes with basic amenities.
              </p>
            </div>
            <div className="scheme-card">
              <div className="scheme-icon">🚰</div>
              <h3>Jal Jeevan Mission</h3>
              <p>
                Aims to provide safe and adequate drinking water through
                individual household tap connections to all rural households by
                2024.
              </p>
            </div>
            <div className="scheme-card">
              <div className="scheme-icon">💼</div>
              <h3>MGNREGA</h3>
              <p>
                Guarantees 100 days of wage employment to rural households
                annually, enhancing livelihood security and empowering
                communities through self-driven labor.
              </p>
            </div>
            <div className="scheme-card">
              <div className="scheme-icon">🧹</div>
              <h3>Swachh Bharat Mission (Gramin)</h3>
              <p>
                Promotes cleanliness, sanitation, and hygiene in rural
                areas—transforming villages into cleaner, healthier places to
                live.
              </p>
            </div>
          </div>

          <div className="scheme-note">
            <p>
              <em>
                CivicSpot helps you check your eligibility, submit required
                documents, and track application status — all in one place.
              </em>
            </p>
            <button 
              className="btn-schemes"
              onClick={() => window.open('https://www.india.gov.in/my-government/schemes', '_blank')}
            >
              Explore All Schemes
            </button>
          </div>
        </section>

        {/* Vision Section */}
        <section className="about-vision" id="vision-2030">
          <div className="section-header">
            <div className="icon-circle vision-icon">
              <span>🚀</span>
            </div>
            <h2>Vision 2030</h2>
          </div>
          <div className="vision-content">
            <div className="vision-text">
              <p>
                By the year <strong>2030</strong>, we envision an India where{" "}
                <em>
                  every village is heard, every citizen is empowered, and every
                  issue finds a solution
                </em>
                . At <strong>CivicSpot</strong>, our goal is to redefine how
                civic engagement works—making it not just a privilege, but a
                daily practice rooted in technology, trust, and togetherness.
              </p>
              <p>
                We aim to become India's most trusted{" "}
                <strong>civic-tech platform</strong> by:
              </p>
              <ul className="vision-list">
                <li>
                  Connecting <strong>10,000+ villages</strong> with real-time
                  issue reporting
                </li>
                <li>
                  Powering decisions with <strong>data analytics</strong> for
                  smarter governance
                </li>
                <li>
                  Raising <strong>civic awareness</strong> through digital
                  literacy
                </li>
                <li>
                  Building bridges between{" "}
                  <strong>citizens and government</strong>
                </li>
              </ul>
            </div>
            <div className="vision-image">
              <div className="vision-graphic"></div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="about-team" id="meet-team">
          <div className="section-header">
            <div className="icon-circle team-icon">
              <span>👥</span>
            </div>
            <h2>Meet the Team</h2>
          </div>
          <p className="team-intro">
            We are a collective of{" "}
            <strong>
              engineers, designers, social innovators, and grassroots thinkers
            </strong>{" "}
            who believe in one thing: <em>technology should serve people</em>.
          </p>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar visionaries"></div>
              <h3>Visionaries</h3>
              <p>
                Strategists who drive CivicSpot's purpose, ensuring our mission
                is bold, clear, and community-focused.
              </p>
            </div>
            <div className="team-card">
              <div className="team-avatar developers"></div>
              <h3>Developers</h3>
              <p>
                Engineers crafting secure, scalable platforms that empower
                citizens to act, report, and participate.
              </p>
            </div>
            <div className="team-card">
              <div className="team-avatar designers"></div>
              <h3>Designers</h3>
              <p>
                Creators of intuitive, human-centered experiences that speak the
                language of rural and urban users alike.
              </p>
            </div>
            <div className="team-card">
              <div className="team-avatar community"></div>
              <h3>Community Catalysts</h3>
              <p>
                Field partners, volunteers, and outreach leads who connect us
                with real voices and grassroots needs.
              </p>
            </div>
          </div>
          <div className="team-cta">
            <p>
              Together, we're not just a tech team —{" "}
              <em>we're a civic movement in motion</em>.
            </p>
            <button onClick={() => navigate("/gamechangers")} className ="btn-team">Know More</button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta" id="make-difference">
          <h2>Ready to Make a Difference?</h2>
          <p>
            Whether you're a villager seeking help, a volunteer wanting to
            contribute, or an organization looking to collaborate — CivicSpot is
            your platform for change.
          </p>
          <div className="cta-buttons">
            <button onClick={() => navigate("/raiseit")} className="btn-cta-primary">Report an Issue</button>
            <button onClick={() => navigate("/contact")} className="btn-cta-secondary">Connect With Us</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
