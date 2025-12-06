import { useEffect, useState, useRef } from "react";
import "./Contact.css";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    category: "general",
    subject: "",
    message: "",
    urgency: "normal",
    preferredContact: "email",
    agreeToTerms: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const formRef = useRef(null);
  
  const [suggestedQuestions] = useState([
    "What services do you offer?",
    "How can I get involved?",
    "Where are you located?",
    "What's your mission?",
    "How can I contact your team?"
  ]);
  
  const faqData = [
    {
      question: "How can I volunteer with CivicSpot?",
      answer: "We welcome volunteers who want to make a difference! You can join our team by filling out the volunteer form on our Join Us page, or contact us directly through this form. We have opportunities ranging from on-ground work to remote support roles."
    },
    {
      question: "How is my donation used?",
      answer: "Every donation directly supports our village development projects. 85% of funds go directly to project implementation, 10% to operational costs, and 5% to outreach and awareness programs. We provide complete transparency with regular impact reports."
    },
    {
      question: "Can my organization partner with CivicSpot?",
      answer: "Absolutely! We collaborate with businesses, NGOs, and government bodies. Partnership opportunities include project sponsorship, skill-sharing initiatives, CSR programs, and joint community development projects."
    },
    {
      question: "How do you select villages for your projects?",
      answer: "Our selection process involves community needs assessment, local leadership engagement, resource availability evaluation, and sustainability planning. We prioritize areas with greatest need and community commitment to participation."
    },
    {
      question: "How can I report an issue in my village?",
      answer: "You can report village issues through our 'Raise an Issue' form, directly through this contact form, or by calling our helpline. Each report is reviewed by our team and assigned to the appropriate department for action."
    }
  ];

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  useEffect(() => {
    if (isChatOpen) {
      const container = document.createElement("div");
      container.id = "chatbase-chatbot-container";
      container.className = isChatOpen ? "chatbot-open" : "";

      const iframe = document.createElement("iframe");
      iframe.src = `https://www.chatbase.co/chatbot-iframe/SqymwQJoSce_Y7EvvY2dd`;
      iframe.title = "Chatbot";
      
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // We'll send the core required fields to the backend
      // The backend API may need to be updated to handle additional fields
      const res = await axios.post("http://localhost:9000/api/contact",{
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        // Include additional fields that might be useful for the support team
        phone: formData.phone,
        organization: formData.organization,
        category: formData.category,
        urgency: formData.urgency,
        preferredContact: formData.preferredContact
      });

      setIsSubmitted(true);
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        category: "general",
        subject: "",
        message: "",
        urgency: "normal",
        preferredContact: "email",
        agreeToTerms: false
      });
    } catch (error) {
      alert("There was an error submitting your request. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: "fab fa-instagram",
      url: "https://instagram.com/yourvillageproject",
      gradient: "linear-gradient(45deg, #C13584, #E1306C, #F56040, #FFDC80)",
      color: "#C13584"
    },
    {
      icon: "fab fa-twitter",
      url: "https://twitter.com/yourvillageproject",
      gradient: "linear-gradient(45deg, #1DA1F2, #1A91DA, #0C85D0)",
      color: "#1DA1F2"
    },
    {
      icon: "fab fa-facebook",
      url: "https://facebook.com/yourvillageproject",
      gradient: "linear-gradient(45deg, #4267B2, #3b5998, #2b4170)",
      color: "#4267B2"
    },
    {
      icon: "fab fa-whatsapp",
      url: "https://wa.me/1234567890",
      gradient: "linear-gradient(45deg, #25D366, #1DA851, #128C7E)",
      color: "#25D366"
    },
    {
      icon: "fab fa-youtube",
      url: "https://youtube.com/yourvillageproject",
      gradient: "linear-gradient(45deg, #FF0000, #CC0000, #AA0000)",
      color: "#FF0000"
    },
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="contact-container">
      {/* Chatbot Elements */}
      <button className="chatbot-toggle-btn" onClick={toggleChat}>
        <i className={`fas ${isChatOpen ? 'fa-times' : 'fa-comment-dots'}`} />
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
      <div className="contact-hero">
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p className="hero-subtitle">Let's collaborate to transform villages together</p>
          <div className="hero-actions">
            <a href="#contact-form" className="hero-btn primary">
              <i className="fas fa-paper-plane"></i> Send Message
            </a>
            <a href="#faq-section" className="hero-btn secondary">
              <i className="fas fa-question-circle"></i> View FAQs
            </a>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-card">
            <div className="stat-value">50+</div>
            <div className="stat-label">Villages Impacted</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">10k+</div>
            <div className="stat-label">Lives Improved</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">120+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
        </div>
      </div>

      {/* Background effects */}
      <div className="contact-background">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="gradient-blob" />
        ))}
      </div>

      {/* Main Content */}
      <div className="contact-content">
        <div className="section-intro">
          <h2 className="section-title">How Can We Help You?</h2>
          <p className="section-description">
            Whether you have questions about our projects, want to volunteer, report an issue, 
            or simply want to learn more about our initiatives, we're here to help.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column - Contact Information */}
          <div className="contact-info-column">
            <div className="info-section">
              <div className="info-header">
                <i className="fas fa-info-circle"></i>
                <h3>Contact Information</h3>
              </div>
              
              <div className="contact-cards-container">
                <div className="contact-method-card elevated">
                  <i className="fas fa-phone-alt" />
                  <h3>Call Us</h3>
                  <p><a href="tel:+918651179672" className="contact-link">+91 8651179672</a></p>
                  <p className="availability">Available Mon-Fri, 9am-5pm IST</p>
                </div>

                <div className="contact-method-card elevated">
                  <i className="fas fa-envelope" />
                  <h3>Email Us</h3>
                  <p><a href="mailto:nitishkumaryadav1698@gmail.com" className="contact-link">nitishkumaryadav1698@gmail.com</a></p>
                  <p className="availability">We respond within 24-48 hours</p>
                </div>

                <div className="contact-method-card elevated">
                  <i className="fas fa-map-marker-alt" />
                  <h3>Visit Our Office</h3>
                  <p>CivicSpot Headquarters</p>
                  <p>123 Rural Development Road</p>
                  <p>New Delhi, 110001</p>
                </div>
              </div>
            </div>
            
            <div className="contact-cards-container">
              <div className="contact-method-card elevated community-card">
                <i className="fas fa-users"></i>
                <h3>Join Our Community</h3>
                <p className="community-text">Connect with us on social media for updates, success stories, and exciting opportunities to get involved:</p>
                <div className="social-links animated">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label={`Visit our ${social.icon.split('-')[2]} page`}
                    >
                      <span className="social-bubble">
                        <i className={`${social.icon} social-icon`} style={{ color: "white" }} />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div id="contact-form" className="contact-form-column">
            <div className="contact-form-card">
              {/* Decorative elements to balance visual space */}
              <div className="decorative-element-1"></div>
              <div className="decorative-element-2"></div>
              <div className="decorative-element-3"></div>
              <div className="decorative-element-4"></div>
              <div className="decorative-element-5"></div>
              <div className="gradient-border"></div>
              
              <h3 className="form-title">Send Us a Message</h3>
              <p className="form-description">
                Have a question or want to collaborate? Fill out the form and we'll get back to you as soon as possible.
              </p>
              
              {isSubmitted ? (
                <div className="success-message">
                  <div className="success-icon">
                    <i className="fas fa-check-circle" />
                  </div>
                  <h2>Message Sent!</h2>
                  <p>Thank you for reaching out to CivicSpot. Our team will get back to you within 24-48 hours.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="btn-action"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form enhanced" onSubmit={handleSubmit} ref={formRef}>
                  <div className="form-sections-container">
                    <div className="form-section">
                      <h4 className="section-subtitle">Personal Information</h4>
                      <p className="section-description">Help us get to know you better so we can provide personalized assistance.</p>
                      
                      <div className="form-row">
                        <div
                          className={`form-group ${
                            activeField === "name" ? "active" : ""
                          } ${formData.name ? "has-value" : ""}`}
                        >
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setActiveField("name")}
                            onBlur={() => setActiveField(null)}
                            required
                          />
                          <label htmlFor="name">Full Name *</label>
                          <small className="field-hint">Please provide your full name</small>
                        </div>

                        <div
                          className={`form-group ${
                            activeField === "email" ? "active" : ""
                          } ${formData.email ? "has-value" : ""}`}
                        >
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setActiveField("email")}
                            onBlur={() => setActiveField(null)}
                            required
                          />
                          <label htmlFor="email">Email Address *</label>
                          <small className="field-hint">We'll reply to this email address</small>
                        </div>
                      </div>

                      <div className="form-row">
                        <div
                          className={`form-group ${
                            activeField === "phone" ? "active" : ""
                          } ${formData.phone ? "has-value" : ""}`}
                        >
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={() => setActiveField("phone")}
                            onBlur={() => setActiveField(null)}
                          />
                          <label htmlFor="phone">Phone Number (Optional)</label>
                          <small className="field-hint">Include country code for international numbers</small>
                        </div>

                        <div
                          className={`form-group ${
                            activeField === "organization" ? "active" : ""
                          } ${formData.organization ? "has-value" : ""}`}
                        >
                          <input
                            type="text"
                            id="organization"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            onFocus={() => setActiveField("organization")}
                            onBlur={() => setActiveField(null)}
                          />
                          <label htmlFor="organization">Organization (Optional)</label>
                          <small className="field-hint">Company, NGO, school or other entity</small>
                        </div>
                      </div>
                    </div>

                    <div className="form-section">
                      <h4 className="section-subtitle">Message Details</h4>
                      <p className="section-description">Tell us more about your inquiry to help us address it properly.</p>
                      
                      <div className="form-row">
                        <div
                          className={`form-group select-group ${
                            activeField === "category" ? "active" : ""
                          }`}
                        >
                          <select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            onFocus={() => setActiveField("category")}
                            onBlur={() => setActiveField(null)}
                            required
                          >
                            <option value="general">General Inquiry</option>
                            <option value="projects">Project Information</option>
                            <option value="volunteer">Volunteering</option>
                            <option value="donate">Donation Query</option>
                            <option value="partnership">Partnership Opportunity</option>
                            <option value="issue">Report an Issue</option>
                            <option value="feedback">Feedback</option>
                          </select>
                          <label htmlFor="category">Inquiry Category *</label>
                          <small className="field-hint">Select the category that best matches your query</small>
                        </div>

                        <div
                          className={`form-group ${
                            activeField === "subject" ? "active" : ""
                          } ${formData.subject ? "has-value" : ""}`}
                        >
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            onFocus={() => setActiveField("subject")}
                            onBlur={() => setActiveField(null)}
                            required
                          />
                          <label htmlFor="subject">Subject *</label>
                          <small className="field-hint">Brief title for your message</small>
                        </div>
                      </div>

                      <div
                        className={`form-group ${
                          activeField === "message" ? "active" : ""
                        } ${formData.message ? "has-value" : ""}`}
                      >
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setActiveField("message")}
                          onBlur={() => setActiveField(null)}
                          required
                          rows="5"
                        />
                        <label htmlFor="message">Your Message *</label>
                        <small className="field-hint">Please provide details about your inquiry, including specific questions, village name, project references, etc.</small>
                      </div>
                    </div>
                  </div>

                  <div className="form-section preferences-section">
                    <h4 className="section-subtitle">Preferences</h4>
                    <p className="section-description">Let us know how best to handle your inquiry.</p>
                    
                    <div className="form-row three-columns">
                      <div
                        className={`form-group select-group ${
                          activeField === "urgency" ? "active" : ""
                        }`}
                      >
                        <select
                          id="urgency"
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleChange}
                          onFocus={() => setActiveField("urgency")}
                          onBlur={() => setActiveField(null)}
                        >
                          <option value="low">Low - General Information</option>
                          <option value="normal">Normal - Requires Response</option>
                          <option value="high">High - Time Sensitive</option>
                          <option value="urgent">Urgent - Immediate Attention Needed</option>
                        </select>
                        <label htmlFor="urgency">Response Priority</label>
                        <small className="field-hint">Help us understand how urgently you need a response</small>
                      </div>

                      <div
                        className={`form-group select-group ${
                          activeField === "preferredContact" ? "active" : ""
                        }`}
                      >
                        <select
                          id="preferredContact"
                          name="preferredContact"
                          value={formData.preferredContact}
                          onChange={handleChange}
                          onFocus={() => setActiveField("preferredContact")}
                          onBlur={() => setActiveField(null)}
                        >
                          <option value="email">Email</option>
                          <option value="phone">Phone</option>
                          <option value="either">Either Email or Phone</option>
                        </select>
                        <label htmlFor="preferredContact">Preferred Contact Method</label>
                        <small className="field-hint">How would you like us to respond to you?</small>
                      </div>
                    </div>
                    
                    <div className="form-checkbox">
                      <input
                        type="checkbox"
                        id="agreeToTerms"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={(e) => setFormData({...formData, agreeToTerms: e.target.checked})}
                        required
                      />
                      <label htmlFor="agreeToTerms">
                        I agree that my submitted data is being collected and stored as described in our <a href="/privacy-policy" className="inline-link">Privacy Policy</a>. *
                      </label>
                    </div>
                  </div>

                  <div className="form-note">
                    <i className="fas fa-info-circle"></i>
                    <p>Fields marked with an asterisk (*) are required. We typically respond within 1-2 business days.</p>
                  </div>

                  <button 
                    type="submit" 
                    className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting || !formData.agreeToTerms}
                  >
                    {isSubmitting ? (
                      <>
                        <span>Sending Message...</span>
                        <i className="fas fa-spinner fa-spin" />
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <i className="fas fa-paper-plane" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div id="faq-section" className="faq-section">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-container">
            {faqData.map((faq, index) => (
              <div key={index} className={`faq-item ${activeFAQ === index ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <h3>{faq.question}</h3>
                  <i className={`fas ${activeFAQ === index ? 'fa-minus' : 'fa-plus'}`}></i>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="cta-section">
          <div className="cta-content">
            <h2>Ready to Make a Difference?</h2>
            <p>Join our mission to transform rural communities across India. Every contribution matters.</p>
            <div className="cta-buttons">
              <a href="/join-us" className="cta-btn primary">Join Our Team</a>
              <a href="/donate" className="cta-btn secondary">Make a Donation</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;