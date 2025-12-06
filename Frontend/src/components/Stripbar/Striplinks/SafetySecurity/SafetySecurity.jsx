import React, { useState } from 'react';
import './SafetySecurity.css';

const SafetySecurity = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [activeInitiativeFilter, setActiveInitiativeFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedInitiative, setExpandedInitiative] = useState(null);
  const [showReportForm, setShowReportForm] = useState(false);
  
  // Form state for safety incident reporting
  const [reportForm, setReportForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    incidentType: '',
    location: '',
    description: '',
    urgency: 'medium',
    dateTime: '',
    landmark: '',
    attachmentLink: '',
    termsAgree: false
  });

  // Handle input change for form fields
  const handleFormChange = (e) => {
    const { id, value, type, checked } = e.target;
    setReportForm({
      ...reportForm,
      [id]: type === 'checkbox' ? checked : value
    });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Safety incident report submitted:', reportForm);
    // Here you would typically send the form data to your backend
    alert('Your safety/security incident has been reported successfully!');
  };

  // Safety and security initiatives data
  const safetyInitiatives = {
    ongoing: [
      {
        id: 'on1',
        title: 'Community Surveillance System',
        department: 'Public Safety Department',
        location: 'City-wide',
        type: 'Surveillance Infrastructure',
        budget: '₹85 Crores',
        timeline: 'Mar 2025 - Nov 2026',
        status: 'Installation Phase',
        completion: '40%',
        description: 'Implementation of an advanced AI-powered surveillance system with over 5,000 cameras across the city to enhance public safety and reduce crime rates.',
        features: [
          'AI-powered facial recognition',
          'Automatic incident detection',
          'Night vision capabilities',
          'Emergency response integration',
          'Public safety mobile app connectivity'
        ],
        benefits: [
          'Expected crime reduction of 30%',
          'Faster emergency response times',
          'Better traffic incident monitoring',
          'Enhanced public confidence in safety',
          'Data-driven policing strategies'
        ],
        challenges: [
          'Privacy concerns and data protection',
          'Integration with existing systems',
          'Power supply reliability in certain areas',
          'Weather-resistant hardware implementation',
          'Public acceptance and community engagement'
        ]
      },
      {
        id: 'on2',
        title: 'Women Safety Initiative',
        department: 'Gender Safety Cell',
        location: 'Metropolitan Region',
        type: 'Public Safety Program',
        budget: '₹35 Crores',
        timeline: 'Jan 2025 - Dec 2025',
        status: 'Implementation',
        completion: '55%',
        description: 'Comprehensive program focusing on women\'s safety through infrastructure improvements, education, helplines, and emergency response systems.',
        features: [
          'Safety mobile app with SOS features',
          'Women-only transport services',
          'Well-lit walkways and public spaces',
          '24/7 helpline with trained counselors',
          'Self-defense training programs'
        ],
        benefits: [
          'Increased mobility and confidence for women',
          'Reduction in harassment incidents',
          'Better reporting mechanisms',
          'Faster response to distress calls',
          'Greater awareness of women\'s safety issues'
        ],
        challenges: [
          'Behavioral and cultural change',
          'Ensuring app adoption',
          'Coordinating multiple agencies',
          'Consistent implementation across all areas',
          'Long-term funding sustainability'
        ]
      },
      {
        id: 'on3',
        title: 'Disaster Preparedness Program',
        department: 'Disaster Management Authority',
        location: 'Regional',
        type: 'Emergency Readiness',
        budget: '₹50 Crores',
        timeline: 'Apr 2025 - Mar 2026',
        status: 'Planning Phase',
        completion: '25%',
        description: 'Comprehensive disaster preparedness program including early warning systems, evacuation planning, community training, and infrastructure resilience.',
        features: [
          'Multi-hazard early warning systems',
          'Community evacuation drills',
          'Emergency shelter network',
          'Disaster response training for citizens',
          'Critical infrastructure protection'
        ],
        benefits: [
          'Reduced casualties during disasters',
          'Faster community recovery post-disaster',
          'Better coordination among response agencies',
          'Enhanced community resilience',
          'Protection of essential services'
        ],
        challenges: [
          'Reaching vulnerable populations',
          'Maintaining long-term engagement',
          'Balancing multiple disaster risks',
          'Integrating with existing emergency services',
          'Securing funding for ongoing training'
        ]
      }
    ],
    completed: [
      {
        id: 'comp1',
        title: 'Smart Street Lighting Project',
        department: 'Municipal Corporation',
        location: 'City-wide',
        type: 'Public Safety Infrastructure',
        budget: '₹28 Crores',
        completed: 'December 2024',
        description: 'Installation of 15,000 smart LED street lights with motion sensors, remote monitoring, and automatic maintenance alerts to improve public safety.',
        features: [
          'Energy-efficient LED technology',
          'Motion-activated brightness control',
          'Remote monitoring and management',
          'Integrated emergency call points',
          'Solar-powered backup systems'
        ],
        outcomes: [
          'Crime reduction of 22% in well-lit areas',
          'Energy savings of 65% compared to old systems',
          '30% reduction in maintenance costs',
          'Improved perception of safety in public spaces',
          'Faster identification of non-functioning lights'
        ],
        testimonial: {
          quote: "I feel much safer walking home in the evening now that our streets are properly lit. The emergency call buttons are a great feature too.",
          author: "Priya Singh, Local Resident"
        }
      },
      {
        id: 'comp2',
        title: 'School Safety Program',
        department: 'Education Department',
        location: 'District Schools',
        type: 'Child Safety',
        budget: '₹18 Crores',
        completed: 'October 2024',
        description: 'Comprehensive school safety program implementing security measures, emergency protocols, and safety training across 200 schools in the district.',
        features: [
          'Access control systems at school entrances',
          'CCTV monitoring of school premises',
          'Emergency response training for staff',
          'Safe transportation protocols',
          'Child protection policies'
        ],
        outcomes: [
          'Zero major security incidents since implementation',
          '95% of schools now have functioning safety committees',
          'Improved emergency response readiness',
          'Better visitor management and access control',
          'Increased safety awareness among students and staff'
        ],
        testimonial: {
          quote: "As a parent, knowing my children attend a school with such comprehensive safety measures gives me peace of mind every day.",
          author: "Rajesh Kumar, Parent"
        }
      },
      {
        id: 'comp3',
        title: 'Senior Citizen Safety Network',
        department: 'Social Welfare Department',
        location: 'City-wide',
        type: 'Vulnerable Population Safety',
        budget: '₹12 Crores',
        completed: 'November 2024',
        description: 'Creation of a safety network for senior citizens including emergency response systems, community volunteer programs, and regular check-ins.',
        features: [
          'One-touch emergency call devices',
          'Regular wellness check-ins',
          'Volunteer buddy system',
          'Medical emergency response protocol',
          'Elder fraud protection program'
        ],
        outcomes: [
          'Emergency response time reduced to under 10 minutes',
          '85% of registered seniors report feeling more secure',
          '40% reduction in reported elder abuse cases',
          'Improved social connection for isolated seniors',
          'Better coordination between healthcare and emergency services'
        ],
        testimonial: {
          quote: "The emergency pendant they gave me saved my life when I fell last month. The response was quick and the volunteers check on me regularly.",
          author: "Kamala Devi, 78, Program Beneficiary"
        }
      }
    ],
    planned: [
      {
        id: 'plan1',
        title: 'Integrated Emergency Response System',
        department: 'Emergency Services Department',
        location: 'Metropolitan Region',
        type: 'Emergency Services',
        estimated_budget: '₹120 Crores',
        timeline: 'Planning for 2026-2028',
        description: 'Next-generation emergency response system integrating police, fire, medical, and disaster management services under a unified platform with advanced technology.',
        proposed_features: [
          'Single emergency number for all services',
          'GPS-based responder dispatch',
          'Real-time incident management',
          'Video call capability for emergency assessment',
          'Multilingual AI support system'
        ],
        expected_benefits: [
          'Response time reduction by 40%',
          'Better resource allocation during major incidents',
          'Enhanced coordination between different agencies',
          'Improved data collection for future planning',
          'Accessibility for differently-abled citizens'
        ],
        current_status: 'Feasibility study completed, stakeholder consultations underway'
      },
      {
        id: 'plan2',
        title: 'Cyber Security Awareness Program',
        department: 'IT Department',
        location: 'City-wide',
        type: 'Digital Safety',
        estimated_budget: '₹25 Crores',
        timeline: 'Planned for 2026',
        description: 'Comprehensive program to enhance cyber security awareness and capabilities among citizens, businesses, and government offices to combat increasing digital threats.',
        proposed_features: [
          'Public awareness campaigns',
          'School cyber safety curriculum',
          'Free security software for citizens',
          'Small business cyber security assistance',
          'Cyber crime reporting platform'
        ],
        expected_benefits: [
          'Reduced incidence of cyber fraud',
          'Better protection of personal data',
          'Improved cyber hygiene practices',
          'Enhanced reporting of cyber crimes',
          'Greater resilience against cyber attacks'
        ],
        current_status: 'Program design phase, expert committee formed'
      }
    ]
  };

  // Safety issues data
  const safetyIssues = [
    {
      id: 'issue1',
      type: 'Street Light Failure',
      location: 'Gandhi Road, Near City Hospital',
      reported_date: '15 Aug 2025',
      status: 'Assigned',
      priority: 'High',
      description: 'Multiple street lights not functioning, creating a dark stretch of 200m',
      estimated_fix: '23 Aug 2025'
    },
    {
      id: 'issue2',
      type: 'CCTV Camera Damaged',
      location: 'Central Market Junction',
      reported_date: '10 Aug 2025',
      status: 'In Progress',
      priority: 'High',
      description: 'Surveillance camera appears to have been vandalized, not operational',
      estimated_fix: '21 Aug 2025'
    },
    {
      id: 'issue3',
      type: 'Emergency Call Box Malfunction',
      location: 'City Park, East Entrance',
      reported_date: '12 Aug 2025',
      status: 'Completed',
      priority: 'Critical',
      description: 'Emergency call button not connecting to control room',
      completion_date: '18 Aug 2025'
    },
    {
      id: 'issue4',
      type: 'Abandoned Vehicle',
      location: 'Residential Block B, Lane 3',
      reported_date: '8 Aug 2025',
      status: 'Scheduled',
      priority: 'Medium',
      description: 'Suspicious vehicle parked for over 2 weeks with no movement',
      estimated_fix: '24 Aug 2025'
    },
    {
      id: 'issue5',
      type: 'Unsafe Construction Site',
      location: 'Commercial Complex, Main Road',
      reported_date: '14 Aug 2025',
      status: 'In Progress',
      priority: 'High',
      description: 'Construction site without proper barriers, posing risk to pedestrians',
      estimated_fix: '22 Aug 2025'
    }
  ];

  // Filter initiatives based on search term and active filter
  const filteredInitiatives = () => {
    let initiatives = [];
    if (activeTab === 'current') {
      initiatives = safetyInitiatives.ongoing;
    } else if (activeTab === 'completed') {
      initiatives = safetyInitiatives.completed;
    } else if (activeTab === 'planned') {
      initiatives = safetyInitiatives.planned;
    }

    if (activeInitiativeFilter !== 'all') {
      initiatives = initiatives.filter(initiative => {
        if (activeInitiativeFilter === 'surveillance' && ['Surveillance Infrastructure'].includes(initiative.type)) return true;
        if (activeInitiativeFilter === 'public' && ['Public Safety Program', 'Public Safety Infrastructure'].includes(initiative.type)) return true;
        if (activeInitiativeFilter === 'emergency' && ['Emergency Readiness', 'Emergency Services'].includes(initiative.type)) return true;
        if (activeInitiativeFilter === 'vulnerable' && ['Child Safety', 'Vulnerable Population Safety'].includes(initiative.type)) return true;
        return false;
      });
    }

    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      initiatives = initiatives.filter(initiative => 
        initiative.title.toLowerCase().includes(term) || 
        initiative.location.toLowerCase().includes(term) ||
        initiative.description.toLowerCase().includes(term)
      );
    }

    return initiatives;
  };

  // Toggle initiative expansion
  const toggleInitiativeExpansion = (id) => {
    if (expandedInitiative === id) {
      setExpandedInitiative(null);
    } else {
      setExpandedInitiative(id);
    }
  };

  // Filter issues based on search term
  const filteredIssues = () => {
    if (searchTerm.trim() === '') {
      return safetyIssues;
    }
    
    const term = searchTerm.toLowerCase();
    return safetyIssues.filter(issue => 
      issue.type.toLowerCase().includes(term) || 
      issue.location.toLowerCase().includes(term) ||
      issue.description.toLowerCase().includes(term) ||
      issue.status.toLowerCase().includes(term)
    );
  };

  return (
    <div className="safety-container">
      {/* Header Section */}
      <div className="safety-header">
        <div className="header-content">
          <h1>Safety & Security</h1>
          <p>Stay informed about safety initiatives, security projects, and report incidents in your community</p>
          <div className="search-container">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search for initiatives, locations, or issues..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-btn">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Main Tabs */}
      <div className="safety-tabs">
        <button 
          className={`tab-btn ${activeTab === 'current' ? 'active' : ''}`}
          onClick={() => setActiveTab('current')}
        >
          <i className="fas fa-shield-alt"></i> Current Initiatives
        </button>
        <button 
          className={`tab-btn ${activeTab === 'completed' ? 'active' : ''}`}
          onClick={() => setActiveTab('completed')}
        >
          <i className="fas fa-check-circle"></i> Completed Projects
        </button>
        <button 
          className={`tab-btn ${activeTab === 'planned' ? 'active' : ''}`}
          onClick={() => setActiveTab('planned')}
        >
          <i className="fas fa-clipboard-list"></i> Planned Initiatives
        </button>
        <button 
          className={`tab-btn ${activeTab === 'issues' ? 'active' : ''}`}
          onClick={() => setActiveTab('issues')}
        >
          <i className="fas fa-exclamation-circle"></i> Safety Issues
        </button>
        <button 
          className={`tab-btn ${activeTab === 'report' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('report');
            setShowReportForm(true);
          }}
        >
          <i className="fas fa-bullhorn"></i> Report Incident
        </button>
      </div>

      {/* Sub-filters for Initiatives */}
      {(activeTab === 'current' || activeTab === 'completed' || activeTab === 'planned') && (
        <div className="initiative-filters">
          <button 
            className={`filter-btn ${activeInitiativeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveInitiativeFilter('all')}
          >
            All Types
          </button>
          <button 
            className={`filter-btn ${activeInitiativeFilter === 'surveillance' ? 'active' : ''}`}
            onClick={() => setActiveInitiativeFilter('surveillance')}
          >
            Surveillance
          </button>
          <button 
            className={`filter-btn ${activeInitiativeFilter === 'public' ? 'active' : ''}`}
            onClick={() => setActiveInitiativeFilter('public')}
          >
            Public Safety
          </button>
          <button 
            className={`filter-btn ${activeInitiativeFilter === 'emergency' ? 'active' : ''}`}
            onClick={() => setActiveInitiativeFilter('emergency')}
          >
            Emergency Services
          </button>
          <button 
            className={`filter-btn ${activeInitiativeFilter === 'vulnerable' ? 'active' : ''}`}
            onClick={() => setActiveInitiativeFilter('vulnerable')}
          >
            Vulnerable Groups
          </button>
        </div>
      )}

      {/* Current Initiatives Tab Content */}
      {activeTab === 'current' && (
        <div className="initiatives-section">
          <div className="section-header">
            <h2>Current Safety Initiatives</h2>
            <p>Ongoing safety and security programs in your community</p>
          </div>

          {filteredInitiatives().length > 0 ? (
            <div className="initiatives-grid">
              {filteredInitiatives().map((initiative) => (
                <div className="initiative-card" key={initiative.id}>
                  <div className="initiative-header">
                    <h3>{initiative.title}</h3>
                    <span className={`initiative-status status-${initiative.status.toLowerCase().replace(/\s+/g, '-')}`}>
                      {initiative.status} - {initiative.completion}
                    </span>
                  </div>
                  
                  <div className="initiative-info">
                    <p><strong>Location:</strong> {initiative.location}</p>
                    <p><strong>Department:</strong> {initiative.department}</p>
                    <p><strong>Type:</strong> {initiative.type}</p>
                    <p><strong>Timeline:</strong> {initiative.timeline}</p>
                    <p><strong>Budget:</strong> {initiative.budget}</p>
                    <div className="progress-container">
                      <div className="progress-label">Completion</div>
                      <div className="progress-bar">
                        <div 
                          className="progress" 
                          style={{width: initiative.completion}}
                        ></div>
                      </div>
                      <div className="progress-percentage">{initiative.completion}</div>
                    </div>
                  </div>

                  <p className="initiative-desc">{initiative.description}</p>
                  
                  <button 
                    className="details-toggle"
                    onClick={() => toggleInitiativeExpansion(initiative.id)}
                  >
                    {expandedInitiative === initiative.id ? 'Less Details' : 'More Details'}
                    <i className={`fas fa-chevron-${expandedInitiative === initiative.id ? 'up' : 'down'}`}></i>
                  </button>
                  
                  {expandedInitiative === initiative.id && (
                    <div className="initiative-details">
                      <div className="details-section">
                        <h4>Key Features</h4>
                        <ul>
                          {initiative.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="details-section">
                        <h4>Expected Benefits</h4>
                        <ul>
                          {initiative.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="details-section">
                        <h4>Project Challenges</h4>
                        <ul>
                          {initiative.challenges.map((challenge, index) => (
                            <li key={index}>{challenge}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="initiative-actions">
                        <button className="action-btn">
                          <i className="fas fa-map-marker-alt"></i>
                          View on Map
                        </button>
                        <button className="action-btn">
                          <i className="fas fa-file-alt"></i>
                          Project Documents
                        </button>
                        <button className="action-btn">
                          <i className="fas fa-bell"></i>
                          Get Updates
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <div className="no-results-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>No initiatives found</h3>
              <p>Try adjusting your search or filters to find what you're looking for.</p>
            </div>
          )}
        </div>
      )}

      {/* Completed Projects Tab Content */}
      {activeTab === 'completed' && (
        <div className="initiatives-section">
          <div className="section-header">
            <h2>Completed Safety Projects</h2>
            <p>Recently completed safety and security improvements in your area</p>
          </div>

          {filteredInitiatives().length > 0 ? (
            <div className="initiatives-grid">
              {filteredInitiatives().map((initiative) => (
                <div className="initiative-card completed-card" key={initiative.id}>
                  <div className="initiative-header">
                    <h3>{initiative.title}</h3>
                    <span className="initiative-status status-completed">
                      Completed
                    </span>
                  </div>
                  
                  <div className="initiative-info">
                    <p><strong>Location:</strong> {initiative.location}</p>
                    <p><strong>Department:</strong> {initiative.department}</p>
                    <p><strong>Type:</strong> {initiative.type}</p>
                    <p><strong>Completed:</strong> {initiative.completed}</p>
                    <p><strong>Budget:</strong> {initiative.budget}</p>
                  </div>

                  <p className="initiative-desc">{initiative.description}</p>
                  
                  <button 
                    className="details-toggle"
                    onClick={() => toggleInitiativeExpansion(initiative.id)}
                  >
                    {expandedInitiative === initiative.id ? 'Less Details' : 'More Details'}
                    <i className={`fas fa-chevron-${expandedInitiative === initiative.id ? 'up' : 'down'}`}></i>
                  </button>
                  
                  {expandedInitiative === initiative.id && (
                    <div className="initiative-details">
                      <div className="details-section">
                        <h4>Key Features</h4>
                        <ul>
                          {initiative.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="details-section">
                        <h4>Project Outcomes</h4>
                        <ul>
                          {initiative.outcomes.map((outcome, index) => (
                            <li key={index}>{outcome}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="testimonial-section">
                        <h4>Community Feedback</h4>
                        <div className="testimonial">
                          <p>"{initiative.testimonial.quote}"</p>
                          <span className="testimonial-author">- {initiative.testimonial.author}</span>
                        </div>
                      </div>
                      
                      <div className="initiative-actions">
                        <button className="action-btn">
                          <i className="fas fa-images"></i>
                          Before/After Photos
                        </button>
                        <button className="action-btn">
                          <i className="fas fa-file-alt"></i>
                          Project Report
                        </button>
                        <button className="action-btn">
                          <i className="fas fa-star"></i>
                          Rate This Project
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <div className="no-results-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>No projects found</h3>
              <p>Try adjusting your search or filters to find what you're looking for.</p>
            </div>
          )}
        </div>
      )}

      {/* Planned Initiatives Tab Content */}
      {activeTab === 'planned' && (
        <div className="initiatives-section">
          <div className="section-header">
            <h2>Planned Safety Initiatives</h2>
            <p>Upcoming safety and security improvements planned for your community</p>
          </div>

          {filteredInitiatives().length > 0 ? (
            <div className="initiatives-grid">
              {filteredInitiatives().map((initiative) => (
                <div className="initiative-card planned-card" key={initiative.id}>
                  <div className="initiative-header">
                    <h3>{initiative.title}</h3>
                    <span className="initiative-status status-planned">
                      Planned
                    </span>
                  </div>
                  
                  <div className="initiative-info">
                    <p><strong>Location:</strong> {initiative.location}</p>
                    <p><strong>Department:</strong> {initiative.department}</p>
                    <p><strong>Type:</strong> {initiative.type}</p>
                    <p><strong>Timeline:</strong> {initiative.timeline}</p>
                    <p><strong>Estimated Budget:</strong> {initiative.estimated_budget}</p>
                    <p><strong>Status:</strong> {initiative.current_status}</p>
                  </div>

                  <p className="initiative-desc">{initiative.description}</p>
                  
                  <button 
                    className="details-toggle"
                    onClick={() => toggleInitiativeExpansion(initiative.id)}
                  >
                    {expandedInitiative === initiative.id ? 'Less Details' : 'More Details'}
                    <i className={`fas fa-chevron-${expandedInitiative === initiative.id ? 'up' : 'down'}`}></i>
                  </button>
                  
                  {expandedInitiative === initiative.id && (
                    <div className="initiative-details">
                      <div className="details-section">
                        <h4>Proposed Features</h4>
                        <ul>
                          {initiative.proposed_features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="details-section">
                        <h4>Expected Benefits</h4>
                        <ul>
                          {initiative.expected_benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="initiative-actions">
                        <button className="action-btn">
                          <i className="fas fa-map-marker-alt"></i>
                          View Proposed Location
                        </button>
                        <button className="action-btn">
                          <i className="fas fa-file-alt"></i>
                          Project Proposal
                        </button>
                        <button className="action-btn">
                          <i className="fas fa-comment"></i>
                          Submit Feedback
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <div className="no-results-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>No initiatives found</h3>
              <p>Try adjusting your search or filters to find what you're looking for.</p>
            </div>
          )}
        </div>
      )}

      {/* Safety Issues Tab Content */}
      {activeTab === 'issues' && (
        <div className="issues-section">
          <div className="section-header">
            <h2>Current Safety Issues</h2>
            <p>Reported safety concerns and their status in your community</p>
          </div>

          {filteredIssues().length > 0 ? (
            <div className="issues-table-container">
              <table className="issues-table">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Location</th>
                    <th>Reported</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>Resolution</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredIssues().map((issue) => (
                    <tr key={issue.id} className={`issue-row priority-${issue.priority.toLowerCase()}`}>
                      <td>
                        <div className="issue-type">
                          <span className={`issue-icon ${issue.type.toLowerCase().includes('light') ? 'light' : 
                                             issue.type.toLowerCase().includes('camera') ? 'camera' : 
                                             issue.type.toLowerCase().includes('emergency') ? 'emergency' :
                                             issue.type.toLowerCase().includes('vehicle') ? 'vehicle' : 'other'}`}>
                            <i className={`fas ${issue.type.toLowerCase().includes('light') ? 'fa-lightbulb' : 
                                          issue.type.toLowerCase().includes('camera') ? 'fa-video' : 
                                          issue.type.toLowerCase().includes('emergency') ? 'fa-phone-alt' :
                                          issue.type.toLowerCase().includes('vehicle') ? 'fa-car' : 'fa-exclamation-triangle'}`}></i>
                          </span>
                          {issue.type}
                        </div>
                      </td>
                      <td>{issue.location}</td>
                      <td>{issue.reported_date}</td>
                      <td>
                        <span className={`status-badge status-${issue.status.toLowerCase().replace(/\s+/g, '-')}`}>
                          {issue.status}
                        </span>
                      </td>
                      <td>
                        <span className={`priority-indicator priority-${issue.priority.toLowerCase()}`}>
                          {issue.priority}
                        </span>
                      </td>
                      <td>{issue.estimated_fix || issue.completion_date || 'TBD'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="no-results">
              <div className="no-results-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>No issues found</h3>
              <p>Try adjusting your search to find what you're looking for.</p>
            </div>
          )}
          
          <div className="issues-map-section">
            <h3>Issues Map</h3>
            <div className="issues-map-placeholder">
              <div className="map-overlay">
                <i className="fas fa-map-marked-alt"></i>
                <p>Interactive map showing reported safety issues</p>
                <button className="view-map-btn">View Full Map</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Report Incident Form Tab Content */}
      {activeTab === 'report' && showReportForm && (
        <div className="report-section">
          <div className="report-header">
            <h2>Report Safety or Security Issue</h2>
            <p>Help keep your community safe by reporting incidents or concerns</p>
          </div>
          
          <div className="raise-container">
            {/* Form Card with Glassmorphism effect */}
            <div className="form-card">
              <div className="form-header">
                <div className="header-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h2>Safety Incident Report</h2>
                <p>Please provide detailed information about the safety or security concern</p>
              </div>
              
              <form onSubmit={handleFormSubmit}>
                <div className="input-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    placeholder="Enter your full name" 
                    value={reportForm.fullName}
                    onChange={handleFormChange}
                    required 
                  />
                </div>
                
                <div className="input-row">
                  <div className="input-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="Enter your email address" 
                      value={reportForm.email}
                      onChange={handleFormChange}
                      required 
                    />
                  </div>
                  
                  <div className="input-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder="Enter your phone number" 
                      value={reportForm.phone}
                      onChange={handleFormChange}
                      required 
                    />
                  </div>
                </div>
                
                <div className="input-row">
                  <div className="input-group">
                    <label htmlFor="incidentType">Incident Type</label>
                    <select 
                      id="incidentType" 
                      className="styled-select"
                      value={reportForm.incidentType}
                      onChange={handleFormChange}
                      required
                    >
                      <option value="">Select incident type</option>
                      <option value="lighting">Street Light Issue</option>
                      <option value="surveillance">Surveillance Camera Problem</option>
                      <option value="emergency">Emergency System Failure</option>
                      <option value="suspicious">Suspicious Activity</option>
                      <option value="vandalism">Vandalism</option>
                      <option value="infrastructure">Unsafe Infrastructure</option>
                      <option value="other">Other Safety Concern</option>
                    </select>
                  </div>
                  
                  <div className="input-group">
                    <label htmlFor="urgency">Urgency Level</label>
                    <select 
                      id="urgency" 
                      className="styled-select"
                      value={reportForm.urgency}
                      onChange={handleFormChange}
                      required
                    >
                      <option value="low">Low - Not Urgent</option>
                      <option value="medium">Medium - Needs Attention</option>
                      <option value="high">High - Urgent Issue</option>
                      <option value="critical">Critical - Immediate Response Needed</option>
                    </select>
                  </div>
                </div>
                
                <div className="input-group">
                  <label htmlFor="location">Incident Location</label>
                  <input 
                    type="text" 
                    id="location" 
                    placeholder="Enter the specific location of the incident" 
                    value={reportForm.location}
                    onChange={handleFormChange}
                    required 
                  />
                </div>
                
                <div className="input-row">
                  <div className="input-group">
                    <label htmlFor="landmark">Nearest Landmark (Optional)</label>
                    <input 
                      type="text" 
                      id="landmark" 
                      placeholder="Enter a nearby landmark to help locate the issue" 
                      value={reportForm.landmark}
                      onChange={handleFormChange}
                    />
                  </div>
                  
                  <div className="input-group">
                    <label htmlFor="dateTime">Date & Time (if applicable)</label>
                    <input 
                      type="datetime-local" 
                      id="dateTime" 
                      value={reportForm.dateTime}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>
                
                <div className="input-group">
                  <label htmlFor="description">Detailed Description</label>
                  <textarea 
                    id="description" 
                    rows="4" 
                    placeholder="Please describe the safety concern in detail" 
                    value={reportForm.description}
                    onChange={handleFormChange}
                    required
                  ></textarea>
                </div>
                
                <div className="input-group">
                  <label htmlFor="attachmentLink">Photo/Video Link (Optional)</label>
                  <input 
                    type="url" 
                    id="attachmentLink" 
                    placeholder="Link to photo or video evidence of the safety issue" 
                    value={reportForm.attachmentLink}
                    onChange={handleFormChange}
                  />
                  <small>You can upload images to a service like Imgur and share the link here</small>
                </div>
                
                <div className="checkbox-group">
                  <input 
                    type="checkbox" 
                    id="termsAgree" 
                    checked={reportForm.termsAgree}
                    onChange={handleFormChange}
                    required 
                  />
                  <label htmlFor="termsAgree">
                    I certify that the information provided is accurate and I understand that my report may be shared with relevant authorities
                  </label>
                </div>
                
                <div className="form-actions">
                  <button type="submit" className="submit-btn">
                    Submit Report
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </form>
              
              <div className="form-footer">
                <div className="footer-note">
                  <i className="fas fa-info-circle"></i>
                  <p>For emergencies requiring immediate attention, please call the emergency services directly using the numbers below</p>
                </div>
                
                <div className="help-options">
                  <div className="help-option">
                    <i className="fas fa-phone-alt"></i>
                    <div>
                      <p className="help-label">Police</p>
                      <p className="help-value">100</p>
                    </div>
                  </div>
                  <div className="help-option">
                    <i className="fas fa-ambulance"></i>
                    <div>
                      <p className="help-label">Ambulance</p>
                      <p className="help-value">102</p>
                    </div>
                  </div>
                  <div className="help-option">
                    <i className="fas fa-fire"></i>
                    <div>
                      <p className="help-label">Fire</p>
                      <p className="help-value">101</p>
                    </div>
                  </div>
                  <div className="help-option">
                    <i className="fas fa-phone-volume"></i>
                    <div>
                      <p className="help-label">Women Helpline</p>
                      <p className="help-value">1090</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Info Section */}
      <div className="safety-info-section">
        <div className="info-card emergency-info-card">
          <div className="info-icon">
            <i className="fas fa-phone-alt"></i>
          </div>
          <h3>Emergency Contacts</h3>
          <p>Access important emergency phone numbers for immediate assistance</p>
          <div className="emergency-quick-contacts">
            <div className="quick-contact">
              <div className="quick-icon police">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="quick-details">
                <span className="quick-label">Police</span>
                <span className="quick-number">100</span>
              </div>
            </div>
            <div className="quick-contact">
              <div className="quick-icon ambulance">
                <i className="fas fa-ambulance"></i>
              </div>
              <div className="quick-details">
                <span className="quick-label">Ambulance</span>
                <span className="quick-number">102</span>
              </div>
            </div>
            <div className="quick-contact">
              <div className="quick-icon fire">
                <i className="fas fa-fire-extinguisher"></i>
              </div>
              <div className="quick-details">
                <span className="quick-label">Fire</span>
                <span className="quick-number">101</span>
              </div>
            </div>
          </div>
          <button className="info-btn">More Emergency Contacts</button>
        </div>
        
        <div className="info-card">
          <div className="info-icon">
            <i className="fas fa-book"></i>
          </div>
          <h3>Safety Guidelines</h3>
          <p>Learn about safety protocols and guidelines for various situations</p>
          <button className="info-btn">Read Guidelines</button>
        </div>
        
        <div className="info-card">
          <div className="info-icon">
            <i className="fas fa-chart-line"></i>
          </div>
          <h3>Safety Statistics</h3>
          <p>View safety and security metrics and trends for your community</p>
          <button className="info-btn">See Statistics</button>
        </div>
        
        <div className="info-card">
          <div className="info-icon">
            <i className="fas fa-users"></i>
          </div>
          <h3>Community Watch</h3>
          <p>Join or learn about community watch programs in your neighborhood</p>
          <button className="info-btn">Get Involved</button>
        </div>
      </div>
    </div>
  );
};

export default SafetySecurity;