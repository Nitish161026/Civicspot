import React, { useState } from 'react';
import './GovernmentSchemes.css';

const GovernmentSchemes = () => {
  const [activeCategory, setActiveCategory] = useState('education');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedScheme, setExpandedScheme] = useState(null);

  const schemes = {
    education: [
      {
        id: 'edu1',
        title: 'National Education Scholarship',
        eligibility: 'Students from families with annual income less than ₹8 lakhs',
        benefits: 'Full tuition coverage, monthly stipend of ₹2,500, and annual book allowance',
        deadline: 'June 30th, 2025',
        image: 'education1'
      },
      {
        id: 'edu2',
        title: 'Digital Learning Initiative',
        eligibility: 'Government schools and colleges in rural areas',
        benefits: 'Smart classroom setup, teacher training, and digital curriculum development',
        deadline: 'Open year-round',
        image: 'education2'
      },
      {
        id: 'edu3',
        title: 'Higher Education Research Grant',
        eligibility: 'PhD students and research scholars in STEM fields',
        benefits: 'Research funding up to ₹15 lakhs and international conference opportunities',
        deadline: 'September 15th, 2025',
        image: 'education3'
      },
    ],
    healthcare: [
      {
        id: 'health1',
        title: 'Universal Health Coverage Program',
        eligibility: 'All citizens with annual income below ₹5 lakhs',
        benefits: 'Free healthcare services, including hospitalization up to ₹5 lakhs per family per year',
        deadline: 'Registration open year-round',
        image: 'healthcare1'
      },
      {
        id: 'health2',
        title: 'Rural Health Infrastructure Development',
        eligibility: 'Primary Health Centers in villages with population under 10,000',
        benefits: 'Infrastructure funding, equipment grants, and staff salary support',
        deadline: 'December 1st, 2025',
        image: 'healthcare2'
      },
      {
        id: 'health3',
        title: 'Maternal & Child Health Initiative',
        eligibility: 'Pregnant women and mothers with children under 5 years',
        benefits: 'Free vaccinations, nutritional supplements, and cash benefits of ₹6,000',
        deadline: 'Registration open year-round',
        image: 'healthcare3'
      },
    ],
    agriculture: [
      {
        id: 'agri1',
        title: 'Sustainable Farming Subsidy',
        eligibility: 'Small and marginal farmers with land holding below 2 hectares',
        benefits: '₹10,000 per hectare for organic farming conversion and certification',
        deadline: 'April 15th, 2025',
        image: 'agriculture1'
      },
      {
        id: 'agri2',
        title: 'Irrigation Infrastructure Support',
        eligibility: 'Farmer collectives and rural water management committees',
        benefits: 'Up to 90% subsidy on micro-irrigation systems and water conservation infrastructure',
        deadline: 'October 31st, 2025',
        image: 'agriculture2'
      },
      {
        id: 'agri3',
        title: 'Farm Mechanization Program',
        eligibility: 'Farmer Producer Organizations and Cooperative Societies',
        benefits: 'Up to 50% subsidy on agricultural machinery and equipment',
        deadline: 'July 31st, 2025',
        image: 'agriculture3'
      },
    ],
    housing: [
      {
        id: 'house1',
        title: 'Affordable Housing Scheme',
        eligibility: 'Families with monthly income below ₹25,000 without own house',
        benefits: 'Interest subsidy of 6.5% on home loans and ₹2.5 lakh direct subsidy',
        deadline: 'March 31st, 2026',
        image: 'housing1'
      },
      {
        id: 'house2',
        title: 'Rural Housing Development',
        eligibility: 'BPL families in rural areas without pucca houses',
        benefits: '₹1.2 lakh financial assistance for house construction',
        deadline: 'Registration open year-round',
        image: 'housing2'
      },
      {
        id: 'house3',
        title: 'Rental Housing Voucher Program',
        eligibility: 'Urban poor, migrant workers, and students from low-income families',
        benefits: 'Monthly rental subsidy of up to ₹3,000 for 3 years',
        deadline: 'Applications accepted quarterly',
        image: 'housing3'
      },
    ],
    employment: [
      {
        id: 'emp1',
        title: 'Rural Employment Guarantee',
        eligibility: 'Adult members of rural households willing to do unskilled manual work',
        benefits: 'Legal guarantee of 100 days of wage employment per fiscal year',
        deadline: 'Registration open year-round',
        image: 'employment1'
      },
      {
        id: 'emp2',
        title: 'Skill Development & Training',
        eligibility: 'Unemployed youth aged 18-35 years',
        benefits: 'Free vocational training and ₹5,000 monthly stipend during training period',
        deadline: 'Multiple batches throughout the year',
        image: 'employment2'
      },
      {
        id: 'emp3',
        title: 'Women Entrepreneurship Fund',
        eligibility: 'Women entrepreneurs from rural and semi-urban areas',
        benefits: 'Collateral-free loans up to ₹10 lakhs with 4% interest subvention',
        deadline: 'August 15th, 2025',
        image: 'employment3'
      },
    ],
    welfare: [
      {
        id: 'wel1',
        title: 'Senior Citizen Pension Scheme',
        eligibility: 'Citizens above 60 years with no regular income source',
        benefits: 'Monthly pension of ₹3,000 directly transferred to bank account',
        deadline: 'Registration open year-round',
        image: 'welfare1'
      },
      {
        id: 'wel2',
        title: 'Disability Support Program',
        eligibility: 'Persons with benchmark disabilities as certified by medical authority',
        benefits: 'Monthly allowance of ₹1,500, aids and appliances, and educational support',
        deadline: 'Registration open year-round',
        image: 'welfare2'
      },
      {
        id: 'wel3',
        title: 'Widow Rehabilitation Scheme',
        eligibility: 'Widows below 60 years with annual income less than ₹3 lakhs',
        benefits: 'Financial assistance of ₹2,000 monthly and skill training opportunities',
        deadline: 'Registration open year-round',
        image: 'welfare3'
      },
    ],
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleSchemeDetails = (id) => {
    if (expandedScheme === id) {
      setExpandedScheme(null);
    } else {
      setExpandedScheme(id);
    }
  };

  // Improved search functionality - case insensitive
  const getFilteredSchemes = () => {
    if (!searchTerm.trim()) {
      return schemes[activeCategory];
    }
    
    const lowerSearchTerm = searchTerm.toLowerCase().trim();
    
    // Search across all categories and fields
    const allSchemes = Object.values(schemes).flat();
    
    const filtered = allSchemes.filter(scheme => {
      return (
        scheme.title.toLowerCase().includes(lowerSearchTerm) ||
        scheme.eligibility.toLowerCase().includes(lowerSearchTerm) ||
        scheme.benefits.toLowerCase().includes(lowerSearchTerm) ||
        scheme.deadline.toLowerCase().includes(lowerSearchTerm)
      );
    });
    
    return filtered;
  };
  
  const filteredSchemes = getFilteredSchemes();

  return (
    <div className="govt-schemes-container">
      <div className="govt-header">
        <div className="header-content">
          <h1>Government Schemes</h1>
          <p>Empowering citizens through welfare and development initiatives</p>
          
          <div className="search-container">
            <input
              type="text"
              placeholder="Search by scheme name, benefits, eligibility, or deadline..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
            <button className="search-btn">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="category-tabs">
        <button 
          className={activeCategory === 'education' && !searchTerm ? 'active' : ''} 
          onClick={() => {
            setActiveCategory('education');
            setSearchTerm('');
          }}
        >
          <i className="fas fa-graduation-cap"></i>
          <span>Education</span>
        </button>
        <button 
          className={activeCategory === 'healthcare' && !searchTerm ? 'active' : ''} 
          onClick={() => {
            setActiveCategory('healthcare');
            setSearchTerm('');
          }}
        >
          <i className="fas fa-heartbeat"></i>
          <span>Healthcare</span>
        </button>
        <button 
          className={activeCategory === 'agriculture' && !searchTerm ? 'active' : ''} 
          onClick={() => {
            setActiveCategory('agriculture');
            setSearchTerm('');
          }}
        >
          <i className="fas fa-tractor"></i>
          <span>Agriculture</span>
        </button>
        <button 
          className={activeCategory === 'housing' && !searchTerm ? 'active' : ''} 
          onClick={() => {
            setActiveCategory('housing');
            setSearchTerm('');
          }}
        >
          <i className="fas fa-home"></i>
          <span>Housing</span>
        </button>
        <button 
          className={activeCategory === 'employment' && !searchTerm ? 'active' : ''} 
          onClick={() => {
            setActiveCategory('employment');
            setSearchTerm('');
          }}
        >
          <i className="fas fa-briefcase"></i>
          <span>Employment</span>
        </button>
        <button 
          className={activeCategory === 'welfare' && !searchTerm ? 'active' : ''} 
          onClick={() => {
            setActiveCategory('welfare');
            setSearchTerm('');
          }}
        >
          <i className="fas fa-hands-helping"></i>
          <span>Social Welfare</span>
        </button>
      </div>

      {searchTerm && (
        <div className="search-status">
          <p>
            {filteredSchemes.length > 0 
              ? `Found ${filteredSchemes.length} scheme(s) matching "${searchTerm}"` 
              : `No schemes found matching "${searchTerm}"`
            }
            <button className="clear-search-inline" onClick={() => setSearchTerm('')}>
              Clear Search
            </button>
          </p>
        </div>
      )}

      <div className="schemes-grid">
        {filteredSchemes.length > 0 ? (
          filteredSchemes.map(scheme => (
            <div key={scheme.id} className={`scheme-card ${expandedScheme === scheme.id ? 'expanded' : ''}`}>
              <div className={`scheme-image ${scheme.image}`}></div>
              <div className="scheme-content">
                <h3>{scheme.title}</h3>
                
                <div className="scheme-meta">
                  <div className="meta-item">
                    <i className="fas fa-users"></i>
                    <span>Eligibility</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-gift"></i>
                    <span>Benefits</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-calendar-alt"></i>
                    <span>Deadline</span>
                  </div>
                </div>
                
                <div className={`scheme-details ${expandedScheme === scheme.id ? 'visible' : ''}`}>
                  <div className="details-section">
                    <h4><i className="fas fa-users"></i> Eligibility:</h4>
                    <p>{scheme.eligibility}</p>
                  </div>
                  
                  <div className="details-section">
                    <h4><i className="fas fa-gift"></i> Benefits:</h4>
                    <p>{scheme.benefits}</p>
                  </div>
                  
                  <div className="details-section">
                    <h4><i className="fas fa-calendar-alt"></i> Application Deadline:</h4>
                    <p>{scheme.deadline}</p>
                  </div>
                </div>
                
                <div className="scheme-actions">
                  <button className="view-btn" onClick={() => toggleSchemeDetails(scheme.id)}>
                    {expandedScheme === scheme.id ? 'Hide Details' : 'View Details'}
                  </button>
                  <button className="apply-btn">Apply Now</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-schemes">
            <div className="no-schemes-icon">
              <i className="fas fa-search"></i>
            </div>
            <h3>{searchTerm ? 'No matching schemes found' : 'No schemes available'}</h3>
            <p>{searchTerm ? 'Try different keywords or browse by category' : 'Select a category to view schemes'}</p>
            {searchTerm && (
              <button className="clear-search" onClick={() => setSearchTerm('')}>
                Clear Search
              </button>
            )}
          </div>
        )}
      </div>

     <div className="application-process">
        <div className="process-header">
          <h2>How to Apply for Government Schemes</h2>
          <p>Follow these simple steps to access benefits from government welfare programs</p>
        </div>
        
        <div className="process-steps">
          <div className="process-step">
            <div className="step-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h3>Step 1: Eligibility Check</h3>
            <p>Verify if you meet the eligibility criteria for the scheme of interest. Each scheme has specific requirements based on factors like income, age, and location.</p>
          </div>
          
          <div className="process-step">
            <div className="step-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <h3>Step 2: Document Collection</h3>
            <p>Gather all necessary documents such as ID proof, income certificate, residence proof, and other scheme-specific documentation.</p>
          </div>
          
          <div className="process-step">
            <div className="step-icon">
              <i className="fas fa-edit"></i>
            </div>
            <h3>Step 3: Application Submission</h3>
            <p>Complete the application form either online through the official portal or offline at designated facilitation centers.</p>
          </div>
          
          <div className="process-step">
            <div className="step-icon">
              <i className="fas fa-sync"></i>
            </div>
            <h3>Step 4: Track Application</h3>
            <p>Monitor your application status using the provided reference number through online tracking systems or helpline services.</p>
          </div>
        </div>
      </div>

      <div className="assistance-section">
        <div className="assistance-content">
          <h2>Need Help Applying?</h2>
          <p>Our team is available to assist you with the application process for any government scheme</p>
          
          <div className="assistance-options">
            <div className="assistance-option">
              <div className="option-icon">
                <i className="fas fa-building"></i>
              </div>
              <h3>Visit Our Center</h3>
              <p>Meet with our trained facilitators at the nearest CivicSpot assistance center</p>
              <button className="locate-btn">Find Nearest Center</button>
            </div>
            
            <div className="assistance-option">
              <div className="option-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3>Helpline Support</h3>
              <p>Call our dedicated helpline for guidance on scheme eligibility and application</p>
              <button className="call-btn">1800-123-4567</button>
            </div>
            
            <div className="assistance-option">
              <div className="option-icon">
                <i className="fas fa-laptop"></i>
              </div>
              <h3>Virtual Assistance</h3>
              <p>Schedule a video call with our experts for step-by-step application guidance</p>
              <button className="schedule-btn">Book Appointment</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="feedback-section">
        <div className="feedback-content">
          <div className="feedback-text">
            <h2>Share Your Experience</h2>
            <p>Have you benefited from a government scheme? Share your story to help others understand the impact and process</p>
          </div>
          
          <form className="feedback-form">
            <div className="form-row">
              <div className="form-group">
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" />
              </div>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Scheme You Applied For" />
            </div>
            <div className="form-group">
              <textarea placeholder="Share your experience with the scheme application process and benefits received..."></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit Your Story</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GovernmentSchemes;