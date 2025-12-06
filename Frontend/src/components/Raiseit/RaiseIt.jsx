import React, { useEffect, useState } from "react";
import "./RaiseIt.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RaiseIt = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [suggestedQuestions] = useState([
    "How do I track my reported issue?",
    "What's the average resolution time?",
    "Can I edit my submission?",
    "How are issues prioritized?",
    "Who can I contact for urgent matters?",
  ]);

  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    village: "",
    location: "",
    issueType: "",
    urgency: "",
    duration: "",
    description: "",
  });
  const [photoUrl, setPhotoUrl] = useState(null);

  const issues = [
    {
      id: 1,
      village: "Nandgaon",
      title: "Main pipeline burst",
      type: "Water",
      urgency: "critical",
      position: { top: "35%", left: "25%" },
    },
    {
      id: 2,
      village: "Rampur",
      title: "Streetlights not working",
      type: "Electricity",
      urgency: "high",
      position: { top: "55%", left: "50%" },
    },
    {
      id: 3,
      village: "Sitapur",
      title: "Potholes on highway entry",
      type: "Road",
      urgency: "high",
      position: { top: "20%", left: "65%" },
    },
    {
      id: 4,
      village: "Devpur",
      title: "Irregular garbage collection",
      type: "Garbage",
      urgency: "medium",
      position: { top: "75%", left: "30%" },
    },
    {
      id: 5,
      village: "Alipur",
      title: "Low water pressure",
      type: "Water",
      urgency: "low",
      position: { top: "60%", left: "75%" },
    },
  ];

  const issueIcons = {
    Water: "💧",
    Electricity: "⚡",
    Road: "🛣️",
    Garbage: "🗑️",
  };

  const filteredIssues = issues.filter(
    (issue) => activeFilter === "All" || issue.type === activeFilter
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleFileChange = (e) => {
    setPhotoUrl(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("village", formData.village);
      data.append("location", formData.location);
      data.append("issueType", formData.issueType);
      data.append("urgency", formData.urgency);
      data.append("duration", formData.duration);
      data.append("description", formData.description);
      if (photoUrl) data.append("photoUrl", photoUrl);
      await axios.post("http://localhost:9000/api/issues", data, {
        headers: {
          "Content-Type": "multipart/form-data", // Added this line
        },
      });
      alert(
        `Thank you ${formData.name}! Your issue about "${formData.issueType}" has been submitted.`
      );
      setFormData({
        name: "",
        village: "",
        location: "",
        issueType: "",
        urgency: "",
        duration: "",
        description: "",
      });
      setPhotoUrl(null);
    } catch (err) {
      console.error("Submission failed", err);
      alert("Something went wrong.");
    }
  };

  const toggleChat = () => {
    setIsChatOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (isChatOpen) {
      const existingContainer = document.getElementById(
        "chatbase-chatbot-container"
      );
      if (existingContainer) return;

      const container = document.createElement("div");
      container.id = "chatbase-chatbot-container";
      document.body.appendChild(container);

      setTimeout(() => {
        container.className = "chatbot-open";
      }, 10);

      const iframe = document.createElement("iframe");
      iframe.src = `https://www.chatbase.co/chatbot-iframe/SqymwQJoSce_Y7EvvY2dd`;
      iframe.title = "Chatbot";
      iframe.style.border = "none";
      iframe.style.width = "100%";
      iframe.style.height = "100%";

      const closeButton = document.createElement("button");
      closeButton.className = "chatbot-close-btn";
      closeButton.innerHTML = "×";
      closeButton.onclick = toggleChat;

      container.appendChild(closeButton);
      container.appendChild(iframe);
    } else {
      const container = document.getElementById("chatbase-chatbot-container");
      if (container) {
        container.className = "";
        setTimeout(() => {
          if (container.parentNode) {
            container.parentNode.removeChild(container);
          }
        }, 300);
      }
    }

    return () => {
      const container = document.getElementById("chatbase-chatbot-container");
      if (container && container.parentNode) {
        container.parentNode.removeChild(container);
      }
    };
  }, [isChatOpen]);

  const handleAccordionClick = (e) => {
    e.currentTarget.parentElement.classList.toggle("active");
  };

  return (
    <div className="raiseit-page">
      <header className="header">
        <div className="header-content">
          <div className="logo-container">
            <img src="/report.png" alt="RaiseIt Logo" className="logo" />
            <h1>Raise Your Voice</h1>
          </div>
          <p className="tagline">Your Voice Matters. Make It Heard.</p>
        </div>
      </header>

      <div className="hero-section">
        <div className="hero-content">
          <h2>Community Issues Resolution Platform</h2>
          <p>
            Report problems in your village and collaborate with authorities to
            get them resolved
          </p>
          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number">1,240+</span>
              <span className="stat-label">Issues Raised</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">890+</span>
              <span className="stat-label">Issues Resolved</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Villages Covered</span>
            </div>
          </div>
        </div>
      </div>

      <div className="raise-container">
        <div className="form-card">
          <div className="form-header">
            <h2>Raise Your Voice 🗣️</h2>
            <p>Let us know about issues in your village.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="village">Village Name</label>
              <input
                type="text"
                id="village"
                name="village"
                placeholder="Enter your village name"
                value={formData.village}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="location">Pin Exact Location</label>
              <div className="location-input-wrapper">
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Write the exact location or landmark"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="issueType">Issue Type</label>
              <div className="select-wrapper">
                <select
                  id="issueType"
                  name="issueType"
                  value={formData.issueType}
                  onChange={handleChange}
                  required
                  className="styled-select"
                >
                  <option value="">Select issue type</option>
                  <option value="Road">🛣️ Road</option>
                  <option value="Water">💧 Water</option>
                  <option value="Electricity">⚡ Electricity</option>
                  <option value="Internet">🌐 Internet</option>
                  <option value="Garbage">🗑️ Garbage</option>
                </select>
                <div className="select-arrow">▼</div>
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="urgency">Urgency Level</label>
              <div className="select-wrapper">
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  required
                  className="styled-select"
                >
                  <option value="">Select urgency level</option>
                  <option value="low" className="urgency-low">
                    Low
                  </option>
                  <option value="medium" className="urgency-medium">
                    Medium
                  </option>
                  <option value="high" className="urgency-high">
                    High
                  </option>
                  <option value="critical" className="urgency-critical">
                    Critical
                  </option>
                </select>
                <div className="select-arrow">▼</div>
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="duration">How long has this issue existed?</label>
              <div className="select-wrapper">
                <select
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  required
                  className="styled-select"
                >
                  <option value="">Select duration</option>
                  <option value="<1w">Less than a week</option>
                  <option value="1-4w">1 to 4 weeks</option>
                  <option value="1-3m">1 to 3 months</option>
                  <option value=">3m">More than 3 months</option>
                </select>
                <div className="select-arrow">▼</div>
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                placeholder="Describe the issue in detail..."
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="photos">Add Clear Photos 📸</label>
              <input
                type="file"
                id="photoUrl"
                name="photoUrl"
                accept="image/*"
                onChange={handleFileChange}
                multiple
                className="file-input"
              />
              <p className="field-guidance">
                For better context, please show size comparisons in photos
                (e.g., place a ruler or stand next to the issue).
              </p>
            </div>

            <button type="submit" className="submit-btn">
              <span>Raise It</span>
              <span className="icon">🚀</span>
            </button>
          </form>
        </div>

        <div className="info-card">
          <h3>Why Raise Issues With Us?</h3>
          <ul className="benefits-list">
            <li>
              <div className="benefit-icon">📍</div>
              <div className="benefit-text">
                Pinpoint accuracy for faster response
              </div>
            </li>
            <li>
              <div className="benefit-icon">📸</div>
              <div className="benefit-text">
                Provide visual evidence with photos
              </div>
            </li>
            <li>
              <div className="benefit-icon">📢</div>
              <div className="benefit-text">
                Direct communication with local authorities
              </div>
            </li>
            <li>
              <div className="benefit-icon">🔄</div>
              <div className="benefit-text">
                Real-time tracking of issue resolution
              </div>
            </li>
            <li>
              <div className="benefit-icon">👥</div>
              <div className="benefit-text">
                Community support for important issues
              </div>
            </li>
            <li>
              <div className="benefit-icon">📈</div>
              <div className="benefit-text">
                Data-driven approach to village development
              </div>
            </li>
          </ul>

          <div className="success-stories">
            <h4>Success Stories</h4>
            <div className="story">
              <p>
                "The main road in our village was repaired within 2 weeks after
                reporting it here!"
              </p>
              <div className="author">- Rajesh, Nandgaon Village</div>
            </div>
            <div className="story">
              <p>
                "Thanks to RaiseIt, our village now has clean drinking water
                supply. The issue was resolved in just 10 days!"
              </p>
              <div className="author">- Nitish, Sugapatti Village</div>
            </div>
          </div>
        </div>
      </div>

      <div className="additional-sections">
        <div className="map-section">
          <div className="section-header">
            <h3>🚨 Live Village Issues Heatmap</h3>
            <p>See real-time problems reported across villages</p>
          </div>
          <div className="map-filters">
            <button
              onClick={() => setActiveFilter("All")}
              className={activeFilter === "All" ? "active" : ""}
            >
              All Issues
            </button>
            <button
              onClick={() => setActiveFilter("Water")}
              className={activeFilter === "Water" ? "active" : ""}
            >
              💧 Water
            </button>
            <button
              onClick={() => setActiveFilter("Electricity")}
              className={activeFilter === "Electricity" ? "active" : ""}
            >
              ⚡ Electricity
            </button>
            <button
              onClick={() => setActiveFilter("Road")}
              className={activeFilter === "Road" ? "active" : ""}
            >
              🛣️ Road
            </button>
            <button
              onClick={() => setActiveFilter("Garbage")}
              className={activeFilter === "Garbage" ? "active" : ""}
            >
              🗑️ Garbage
            </button>
          </div>
          <div className="map-container">
            <div className="map-overlay">
              {filteredIssues.map((issue) => (
                <div
                  className={`map-pin ${issue.urgency}`}
                  key={issue.id}
                  style={{ top: issue.position.top, left: issue.position.left }}
                >
                  <span className="pin-icon">{issueIcons[issue.type]}</span>
                  <div className="pin-tooltip">
                    <h4>{issue.title}</h4>
                    <p>{issue.village}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="map-legend">
            <span className="critical">🔥 Critical</span>
            <span className="high">⚠️ High</span>
            <span className="medium">🔄 Medium</span>
            <span className="low">✅ Low</span>
          </div>
        </div>

        <div className="leaderboard-section">
          <div className="section-header">
            <h3>🏆 Top Contributors This Month</h3>
            <p>Our village heroes making a difference</p>
          </div>
          <div className="leaderboard">
            {[
              { rank: 1, name: "Ramesh K.", points: 420, village: "Nandgaon" },
              { rank: 2, name: "Priya M.", points: 380, village: "Sugapatti" },
              { rank: 3, name: "Ajay S.", points: 315, village: "Nandgaon" },
              { rank: 4, name: "Sunita P.", points: 290, village: "Mohanpur" },
              { rank: 5, name: "Vikram D.", points: 255, village: "Sugapatti" },
            ].map((user) => (
              <div className="leaderboard-card" key={user.rank}>
                <div
                  className="rank-badge"
                  style={{
                    background:
                      user.rank === 1
                        ? "linear-gradient(135deg, #ffd700, #c9b037)"
                        : user.rank === 2
                        ? "linear-gradient(135deg, #c0c0c0, #a8a8a8)"
                        : "linear-gradient(135deg, #cd7f32, #a67c52)",
                  }}
                >
                  {user.rank}
                </div>
                <div className="user-info">
                  <h4>{user.name}</h4>
                  <p>{user.village}</p>
                </div>
                <div className="points">{user.points} pts</div>
              </div>
            ))}
          </div>
        </div>

        <div className="guide-section">
          <div className="section-header">
            <h3>📝 How to Report Effectively</h3>
            <p>Tips to make your reports more impactful</p>
          </div>
          <div className="guide-cards">
            {[
              {
                icon: "📸",
                title: "Add Clear Photos",
                desc: "Show the problem from multiple angles",
              },
              {
                icon: "📍",
                title: "Pin Exact Location",
                desc: "Use landmarks for better identification",
              },
              {
                icon: "⏱️",
                title: "Note Duration",
                desc: "How long the issue has existed",
              },
              {
                icon: "📏",
                title: "Include Scale",
                desc: "Show size comparisons (e.g., ruler, person)",
              },
            ].map((tip, i) => (
              <div className="guide-card" key={i}>
                <div
                  className="guide-icon"
                  style={{
                    background: `linear-gradient(135deg, 
                  ${
                    i === 0
                      ? "#ff6b81, #ff4757"
                      : i === 1
                      ? "#7bed9f, #2ed573"
                      : i === 2
                      ? "#70a1ff, #1e90ff"
                      : "#eccc68, #ffa502"
                  })`,
                  }}
                >
                  {tip.icon}
                </div>
                <h4>{tip.title}</h4>
                <p>{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="faq-page-container">
          <div className="faq-section">
            <div className="section-header">
              <h3>❓ Frequently Asked Questions</h3>
              <p>Quick answers to common queries</p>
            </div>
            <div className="faq-accordion">
              {[
                {
                  question: "How long does resolution typically take?",
                  answer:
                    "Most issues are addressed within 7-14 business days...",
                },
                {
                  question: "Can I report anonymously?",
                  answer:
                    "Absolutely! Anonymous reports are fully supported...",
                },
                {
                  question: "What happens after I submit a report?",
                  answer:
                    "You'll immediately receive a unique tracking number...",
                },
                {
                  question: "How are issues prioritized?",
                  answer: "Issues are prioritized using a matrix...",
                },
              ].map((faq, i) => (
                <div className="faq-item" key={i}>
                  <button
                    className="faq-question"
                    onClick={handleAccordionClick}
                  >
                    <span>{faq.question}</span>
                    <span className="toggle-icon">+</span>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="chatbot-trigger-container">
              <div className="suggested-questions-popup">
                <h4>Try asking:</h4>
                <ul>
                  {suggestedQuestions.map((question, i) => (
                    <li key={i}>{question}</li>
                  ))}
                </ul>
              </div>
              <button
                className="chatbot-trigger-btn"
                aria-label="Open support chatbot"
                onClick={toggleChat}
              >
                <span className="chat-icon">💬</span>
                <span className="chat-text">Need Help?</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaiseIt;