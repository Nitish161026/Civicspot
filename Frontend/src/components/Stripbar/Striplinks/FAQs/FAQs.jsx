import React, { useState } from 'react';
import './FAQS.css';

const FAQS = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedQuestions, setExpandedQuestions] = useState({});

  const toggleQuestion = (id) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqData = {
    general: [
      {
        id: 'gen1',
        question: 'What is CivicSpot?',
        answer: 'CivicSpot is a community-focused platform designed to connect citizens with local government services, community initiatives, and civic engagement opportunities. Our mission is to enhance the quality of life in communities through technology-enabled civic participation and accessible public services.'
      },
      {
        id: 'gen2',
        question: 'How can I get involved in community activities?',
        answer: 'You can get involved by creating an account on CivicSpot, browsing our "Projects" and "Events" sections, and signing up as a volunteer. You can also join community groups, attend local meetings announced on our platform, or propose your own community initiatives through our "Raise It" feature.'
      },
      {
        id: 'gen3',
        question: 'Is CivicSpot available in my area?',
        answer: 'CivicSpot is expanding to new communities regularly. Check our coverage map in the "About" section to see if we\'re active in your area. If not, you can register your interest, and we\'ll notify you when we launch in your community.'
      },
      {
        id: 'gen4',
        question: 'Do I need to create an account to use CivicSpot?',
        answer: 'While you can browse most of our content without an account, creating a free account gives you access to features like submitting issues, volunteering for projects, receiving notifications about events in your area, and tracking the status of your submitted concerns.'
      }
    ],
    services: [
      {
        id: 'srv1',
        question: 'How do I report an issue in my community?',
        answer: 'To report an issue, navigate to the "Raise It" section, select the appropriate category for your concern (e.g., infrastructure, public safety, environment), provide details about the issue including location and photos if available, and submit. You\'ll receive updates as your report is processed.'
      },
      {
        id: 'srv2',
        question: 'What types of issues can I report through CivicSpot?',
        answer: 'You can report a wide range of community issues including but not limited to: road maintenance needs, streetlight outages, waste management problems, public safety concerns, environmental issues, accessibility barriers, and suggestions for community improvements.'
      },
      {
        id: 'srv3',
        question: 'How long does it take for reported issues to be addressed?',
        answer: 'Resolution times vary depending on the nature and complexity of the issue, available resources, and local government processes. Once reported, issues are categorized by priority. You can track the status of your reported issues in your account dashboard, and you\'ll receive notifications as progress is made.'
      },
      {
        id: 'srv4',
        question: 'Are the services on CivicSpot free to use?',
        answer: 'Yes, most services on CivicSpot are free for community members. Some specialized services or features may have associated costs, but these will be clearly indicated before you engage with them.'
      }
    ],
    projects: [
      {
        id: 'prj1',
        question: 'How can I volunteer for community projects?',
        answer: 'Browse the "Projects" section to find initiatives that interest you. Each project listing includes details about volunteer needs and a "Volunteer Now" button. Click this button, provide your information and availability, and the project coordinator will contact you with next steps.'
      },
      {
        id: 'prj2',
        question: 'Can I propose my own community project?',
        answer: 'Yes! Visit the "Projects" section and click on "Propose a Project." You\'ll need to provide details about your project idea, its potential impact, resource requirements, and timeline. Our team will review your proposal and reach out to discuss feasibility and next steps.'
      },
      {
        id: 'prj3',
        question: 'How are projects funded on CivicSpot?',
        answer: 'Projects on CivicSpot may be funded through various channels: local government budgets, community fundraising campaigns, corporate sponsorships, or grants. Some projects may use our integrated crowdfunding feature to raise money directly from community members who wish to support the initiative.'
      },
      {
        id: 'prj4',
        question: 'Can I track the progress of projects in my community?',
        answer: 'Yes, all projects on CivicSpot have a progress tracker showing their current status, milestones achieved, and upcoming activities. You can also opt to receive notifications about specific projects you\'re interested in, even if you\'re not directly involved as a volunteer.'
      }
    ],
    account: [
      {
        id: 'acc1',
        question: 'How do I create an account on CivicSpot?',
        answer: 'Click the "Register" button in the top right corner of the homepage. Fill out the registration form with your name, email address, password, and community location. Verify your email address through the link sent to you, and your account will be active and ready to use.'
      },
      {
        id: 'acc2',
        question: 'Is my personal information secure on CivicSpot?',
        answer: 'Yes, we take data security seriously. All personal information is encrypted, and we adhere to strict privacy policies in compliance with data protection regulations. We never share your personal information with third parties without your explicit consent. You can review our detailed privacy policy in the footer section of the website.'
      },
      {
        id: 'acc3',
        question: 'Can I delete my account if I no longer wish to use CivicSpot?',
        answer: 'Yes, you can delete your account at any time by going to your account settings and selecting "Delete Account." Please note that while your personal information will be removed, any public contributions you\'ve made (such as comments on projects or submitted ideas) may remain visible but will be anonymized.'
      },
      {
        id: 'acc4',
        question: 'What if I forget my password?',
        answer: 'If you forget your password, click on "Login" and then select "Forgot Password." Enter the email address associated with your account, and we\'ll send you instructions to reset your password. For security reasons, password reset links are only valid for 24 hours.'
      }
    ],
    technical: [
      {
        id: 'tech1',
        question: 'Is CivicSpot available as a mobile app?',
        answer: 'Yes, CivicSpot is available as a mobile app for both iOS and Android devices. You can download it from the App Store or Google Play Store. The mobile app offers the same features as the web platform, with additional location-based services and push notifications for updates about your community.'
      },
      {
        id: 'tech2',
        question: 'What should I do if I encounter a technical issue while using CivicSpot?',
        answer: 'If you experience technical difficulties, please visit our "Help" section for troubleshooting guides. If the issue persists, you can contact our support team through the "Contact" page or by emailing support@civicspot.org. Please provide details about the issue and screenshots if possible to help us resolve it quickly.'
      },
      {
        id: 'tech3',
        question: 'Is CivicSpot accessible for users with disabilities?',
        answer: 'Yes, we are committed to making CivicSpot accessible to all users. Our platform complies with WCAG 2.1 guidelines and includes features like screen reader compatibility, keyboard navigation, text-to-speech functionality, and customizable text sizes. If you encounter any accessibility barriers, please contact us so we can address them.'
      },
      {
        id: 'tech4',
        question: 'Can I use CivicSpot in languages other than English?',
        answer: 'Currently, CivicSpot supports English, Spanish, French, and Mandarin. You can change your language preference in your account settings. We\'re continually working to add more languages to make our platform accessible to diverse communities.'
      }
    ],
    donations: [
      {
        id: 'don1',
        question: 'How can I donate to community projects?',
        answer: 'You can donate to specific projects by visiting the project page and clicking the "Donate" button. You can make one-time or recurring donations using credit/debit cards, PayPal, or bank transfers. All transactions are secure and processed through our certified payment partners.'
      },
      {
        id: 'don2',
        question: 'Are donations tax-deductible?',
        answer: 'Many projects on CivicSpot are run by registered non-profit organizations, making donations tax-deductible. Each project page clearly indicates whether donations are tax-deductible. After donation, you\'ll receive a receipt that can be used for tax purposes where applicable.'
      },
      {
        id: 'don3',
        question: 'Can I see how my donations are being used?',
        answer: 'Yes, transparency is important to us. All projects that receive donations provide regular updates on fund utilization and project progress. These updates are posted on the project page and sent directly to donors. Additionally, many projects provide financial reports detailing how funds were allocated.'
      },
      {
        id: 'don4',
        question: 'Can businesses make donations or sponsor projects?',
        answer: 'Absolutely! We welcome business contributions and sponsorships. Businesses can donate to specific projects or become community sponsors with various levels of involvement. For corporate donations or sponsorship opportunities, please contact our partnerships team at partnerships@civicspot.org.'
      }
    ]
  };

  const categories = [
    { id: 'general', name: 'General Information' },
    { id: 'services', name: 'Services & Issue Reporting' },
    { id: 'projects', name: 'Community Projects' },
    { id: 'account', name: 'Account Management' },
    { id: 'technical', name: 'Technical Support' },
    { id: 'donations', name: 'Donations & Funding' }
  ];

  const filteredFAQs = searchTerm 
    ? Object.values(faqData).flat().filter(faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : faqData[activeCategory];

  return (
    <div className="faqs-container">
      <div className="faqs-header">
        <div className="header-content">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about CivicSpot and our services</p>
          
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Search for questions or keywords..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-btn">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="faqs-main">
        {!searchTerm && (
          <div className="category-tabs">
            {categories.map(category => (
              <button 
                key={category.id}
                className={activeCategory === category.id ? 'active' : ''}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}

        <div className="faqs-list">
          {searchTerm && filteredFAQs.length === 0 ? (
            <div className="no-results">
              <h3>No results found</h3>
              <p>Try different keywords or browse our FAQ categories</p>
              <button className="clear-search" onClick={() => setSearchTerm('')}>
                Clear Search
              </button>
            </div>
          ) : (
            filteredFAQs.map(faq => (
              <div 
                key={faq.id} 
                className={`faq-item ${expandedQuestions[faq.id] ? 'expanded' : ''}`}
              >
                <div className="faq-question" onClick={() => toggleQuestion(faq.id)}>
                  <h3>{faq.question}</h3>
                  <span className="toggle-icon">{expandedQuestions[faq.id] ? '−' : '+'}</span>
                </div>
                {expandedQuestions[faq.id] && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      <div className="additional-help">
        <h2>Didn't Find What You're Looking For?</h2>
        <div className="help-options">
          <div className="help-card">
            <div className="card-icon">
              <i className="fas fa-comments"></i>
            </div>
            <h3>Contact Support</h3>
            <p>Our support team is ready to assist you with any questions or concerns.</p>
            <button className="help-btn">Contact Us</button>
          </div>
          
          <div className="help-card">
            <div className="card-icon">
              <i className="fas fa-book-open"></i>
            </div>
            <h3>User Guides</h3>
            <p>Access detailed guides and tutorials for using CivicSpot effectively.</p>
            <button className="help-btn">View Guides</button>
          </div>
          
          <div className="help-card">
            <div className="card-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Community Forum</h3>
            <p>Join discussions with other users and share experiences and solutions.</p>
            <button className="help-btn">Join Forum</button>
          </div>
        </div>
      </div>
      
      <div className="feedback-section">
        <div className="feedback-content">
          <h2>Help Us Improve</h2>
          <p>Your feedback helps us provide better answers and improve our services.</p>
          <div className="feedback-form">
            <textarea placeholder="Suggest a new FAQ or improvements to existing ones..."></textarea>
            <button className="submit-btn">Submit Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQS;
