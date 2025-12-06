import React, { useState } from 'react';
import './RoadInfrastructure.css';

const RoadInfrastructure = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [activeProjectFilter, setActiveProjectFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedProject, setExpandedProject] = useState(null);
  const [showReportForm, setShowReportForm] = useState(false);
  
  // Form state for issue reporting
  const [reportForm, setReportForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    issueType: '',
    location: '',
    description: '',
    severity: 'medium',
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
    console.log('Road issue report submitted:', reportForm);
    // Here you would typically send the form data to your backend
    alert('Your road infrastructure issue has been reported successfully!');
  };

  // Road infrastructure projects data
  const roadProjects = {
    ongoing: [
      {
        id: 'on1',
        title: 'Highway Expansion - NH27',
        department: 'National Highway Authority',
        location: 'North District',
        type: 'Major Highway',
        budget: '₹150 Crores',
        timeline: 'Jan 2025 - Dec 2027',
        status: 'Construction Phase',
        completion: '35%',
        description: 'Expansion of National Highway 27 from 4 lanes to 6 lanes to reduce traffic congestion and improve connectivity between industrial zones.',
        features: [
          'Six-lane highway with service roads',
          'Advanced traffic management systems',
          'Solar-powered lighting',
          'Rainwater harvesting structures',
          'Noise barriers in residential areas'
        ],
        benefits: [
          'Reduced travel time by 30%',
          'Improved safety with dedicated pedestrian crossings',
          'Enhanced connectivity to industrial zones',
          'Reduced fuel consumption and emissions',
          'Better emergency response access'
        ],
        challenges: [
          'Land acquisition in urban areas',
          'Maintaining traffic flow during construction',
          'Environmental clearances for forest areas',
          'Utility relocation in densely populated sections',
          'Monsoon-related construction delays'
        ]
      },
      {
        id: 'on2',
        title: 'City Flyover Project',
        department: 'Urban Development Authority',
        location: 'Central District',
        type: 'Urban Flyover',
        budget: '₹85 Crores',
        timeline: 'Mar 2025 - Jun 2026',
        status: 'Foundation Work',
        completion: '20%',
        description: 'Construction of a three-lane flyover to eliminate traffic bottlenecks at the city\'s busiest intersection, reducing congestion during peak hours.',
        features: [
          'Three-lane carriageway with emergency lanes',
          'LED lighting system with smart controls',
          'Earthquake-resistant design',
          'Integrated drainage system',
          'Beautification of spaces under the flyover'
        ],
        benefits: [
          'Elimination of traffic signals at major intersection',
          'Reduced travel time by 25 minutes during peak hours',
          'Improved air quality in the central district',
          'Enhanced urban mobility and connectivity',
          'Reduced fuel consumption'
        ],
        challenges: [
          'Construction in densely populated area',
          'Traffic management during foundation work',
          'Soil stabilization in riverbed section',
          'Coordination with underground utilities',
          'Minimizing business disruption along the route'
        ]
      },
      {
        id: 'on3',
        title: 'Rural Road Network Enhancement',
        department: 'Rural Development Department',
        location: 'Eastern Villages',
        type: 'Rural Connectivity',
        budget: '₹45 Crores',
        timeline: 'Feb 2025 - Oct 2026',
        status: 'Initial Phase',
        completion: '15%',
        description: 'Development and upgrading of rural road network connecting 25 villages to the main highway, improving access to markets and essential services.',
        features: [
          'All-weather road construction',
          'Bridges over seasonal water bodies',
          'Roadside drainage systems',
          'Culverts for cross-drainage',
          'Road signage and safety features'
        ],
        benefits: [
          'Year-round access to markets for agricultural produce',
          'Improved access to education and healthcare facilities',
          'Enhanced emergency services reach',
          'Economic development in rural areas',
          'Reduced vehicle maintenance costs for locals'
        ],
        challenges: [
          'Construction in remote areas with limited access',
          'Seasonal limitations due to monsoon',
          'Terrain variations across the project area',
          'Limited local skilled labor availability',
          'Maintaining ecological balance in sensitive areas'
        ]
      }
    ],
    completed: [
      {
        id: 'comp1',
        title: 'Smart Traffic Management System',
        department: 'Traffic Police Department',
        location: 'Metropolitan Region',
        type: 'Intelligent Transport System',
        budget: '₹35 Crores',
        completed: 'November 2024',
        description: 'Implementation of AI-powered traffic management system across 50 key intersections, including adaptive signal control, violation detection, and centralized monitoring.',
        features: [
          'Adaptive traffic signal control',
          'Automated violation detection cameras',
          'Variable message signs for real-time updates',
          'Emergency vehicle priority system',
          'Integration with mobile traffic app'
        ],
        outcomes: [
          'Traffic flow improvement by 22%',
          '18% reduction in travel time during peak hours',
          '35% decrease in traffic violations',
          'Improved emergency response time',
          'Real-time traffic data for urban planning'
        ],
        testimonial: {
          quote: "The smart traffic system has significantly improved our daily commute. The adaptive signals seem to actually understand traffic patterns now.",
          author: "Rajesh Kumar, Daily Commuter"
        }
      },
      {
        id: 'comp2',
        title: 'Bridge Rehabilitation Project',
        department: 'Public Works Department',
        location: 'River District',
        type: 'Infrastructure Rehabilitation',
        budget: '₹28 Crores',
        completed: 'September 2024',
        description: 'Structural rehabilitation and strengthening of the 50-year-old river bridge, including seismic retrofitting, deck replacement, and addition of pedestrian walkways.',
        features: [
          'Seismic retrofitting for earthquake resistance',
          'Composite deck replacement',
          'Expansion joint repairs',
          'New pedestrian walkways on both sides',
          'Modern lighting and monitoring systems'
        ],
        outcomes: [
          'Extended bridge life by 30 years',
          'Increased load capacity from 40 to 60 tons',
          'Enhanced pedestrian safety with dedicated walkways',
          'Improved structural integrity during flood conditions',
          'Reduced maintenance requirements for next decade'
        ],
        testimonial: {
          quote: "The renovated bridge with pedestrian walkways has made it much safer for those of us who walk to work daily across the river.",
          author: "Priya Singh, Local Resident"
        }
      },
      {
        id: 'comp3',
        title: 'Road Safety Enhancement Program',
        department: 'Transport Department',
        location: 'Citywide',
        type: 'Safety Infrastructure',
        budget: '₹15 Crores',
        completed: 'July 2024',
        description: 'Comprehensive road safety infrastructure improvements across accident-prone areas, including crash barriers, improved signage, pedestrian facilities, and speed management measures.',
        features: [
          'Crash barriers at accident-prone curves',
          'High-visibility road markings and signage',
          'Raised pedestrian crossings and refuge islands',
          'Speed calming measures near schools and hospitals',
          'Improved street lighting at intersections'
        ],
        outcomes: [
          'Reduction in road accidents by 28%',
          'Pedestrian accidents decreased by 35%',
          'Improved compliance with speed limits',
          'Enhanced safety perception among residents',
          'Decreased severity of accidents that do occur'
        ],
        testimonial: {
          quote: "As a school bus driver, I've noticed a significant improvement in safety around school zones with the new crossings and speed measures.",
          author: "Manoj Verma, School Bus Driver"
        }
      }
    ],
    planned: [
      {
        id: 'plan1',
        title: 'Metro-Highway Integration Corridor',
        department: 'Urban Transit Authority',
        location: 'Southern District to Airport',
        type: 'Integrated Transport Corridor',
        estimated_budget: '₹280 Crores',
        timeline: 'To begin Jan 2026',
        description: 'Development of an integrated transport corridor connecting the metro stations with highways, including dedicated bus lanes, park-and-ride facilities, and seamless interchange points.',
        proposed_features: [
          'Dedicated bus rapid transit lanes',
          'Five multi-modal interchange stations',
          'Integrated ticketing system across transport modes',
          'Intelligent transportation systems for real-time updates',
          'Green corridor with 5000+ trees and noise barriers'
        ],
        expected_benefits: [
          'Reduction in last-mile connectivity issues',
          'Decreased private vehicle usage by 15%',
          'Improved air quality through reduced emissions',
          'Enhanced accessibility to airport and business districts',
          'Efficient transfer between public transport modes'
        ],
        current_status: 'Detailed Project Report prepared, awaiting final approvals and funding allocation'
      },
      {
        id: 'plan2',
        title: 'Sustainable Pavement Technology Implementation',
        department: 'Highway Research Institute',
        location: 'Multiple Districts',
        type: 'Innovative Road Technology',
        estimated_budget: '₹120 Crores',
        timeline: 'To begin Apr 2026',
        description: 'Implementation of eco-friendly pavement technologies including plastic waste roads, permeable surfaces, and solar roads on selected stretches to test durability and environmental benefits.',
        proposed_features: [
          'Recycled plastic waste incorporated in road construction',
          'Solar panel embedded pavements for energy generation',
          'Permeable surfaces for improved water drainage',
          'Noise-reducing pavement materials',
          'Heat-reflective surfaces to reduce urban heat island effect'
        ],
        expected_benefits: [
          'Utilization of 500 tons of plastic waste annually',
          'Generation of renewable energy for roadside utilities',
          'Improved stormwater management and reduced flooding',
          'Reduced road noise in residential areas',
          'Extended pavement life and reduced maintenance costs'
        ],
        current_status: 'Technology assessment completed, pilot locations identified, funding approval pending'
      },
      {
        id: 'plan3',
        title: 'Mountain Pass All-Weather Road',
        department: 'Border Roads Organization',
        location: 'Northern Highland Region',
        type: 'Strategic Road Connection',
        estimated_budget: '₹175 Crores',
        timeline: 'To begin Mar 2026',
        description: 'Construction of an all-weather road through the highland mountain pass, including tunnels, snow protection galleries, and avalanche protection systems to ensure year-round connectivity.',
        proposed_features: [
          '3.2 km tunnel through the mountain ridge',
          'Snow protection galleries in avalanche-prone areas',
          'Heated pavement technology for ice prevention',
          'Early warning systems for landslides and avalanches',
          'Emergency shelters every 5 kilometers'
        ],
        expected_benefits: [
          'Year-round connectivity to remote highland villages',
          'Reduced travel time from 8 hours to 3 hours',
          'Improved strategic access for defense purposes',
          'Enhanced tourism potential for highland regions',
          'Economic development of previously isolated communities'
        ],
        current_status: 'Geological surveys completed, environmental impact assessment underway'
      }
    ]
  };

  // Road maintenance issues data
  const maintenanceIssues = [
    {
      id: 'issue1',
      type: 'Pothole Repair',
      location: 'Gandhi Road, Near City Hospital',
      reported_date: '10 Aug 2025',
      status: 'Scheduled',
      priority: 'High',
      description: 'Multiple deep potholes causing traffic slowdown and vehicle damage',
      estimated_fix: '25 Aug 2025'
    },
    {
      id: 'issue2',
      type: 'Drainage Blockage',
      location: 'Nehru Market Area',
      reported_date: '5 Aug 2025',
      status: 'In Progress',
      priority: 'Medium',
      description: 'Blocked roadside drains causing water accumulation during rains',
      estimated_fix: '20 Aug 2025'
    },
    {
      id: 'issue3',
      type: 'Street Light Failure',
      location: 'Airport Road, KM 5-7',
      reported_date: '12 Aug 2025',
      status: 'Completed',
      priority: 'Medium',
      description: 'Series of street lights not functioning, creating dark spots',
      completion_date: '18 Aug 2025'
    },
    {
      id: 'issue4',
      type: 'Traffic Signal Malfunction',
      location: 'Central Market Junction',
      reported_date: '15 Aug 2025',
      status: 'In Progress',
      priority: 'Critical',
      description: 'Traffic signal showing incorrect timing sequences, causing confusion',
      estimated_fix: '19 Aug 2025'
    },
    {
      id: 'issue5',
      type: 'Road Marking Fading',
      location: 'School Zone, Education Street',
      reported_date: '3 Aug 2025',
      status: 'Scheduled',
      priority: 'Low',
      description: 'Pedestrian crossing and lane markings faded and barely visible',
      estimated_fix: '30 Aug 2025'
    }
  ];

  // Filter projects based on search term and active filter
  const filteredProjects = () => {
    let projects = [];
    if (activeTab === 'current') {
      projects = roadProjects.ongoing;
    } else if (activeTab === 'completed') {
      projects = roadProjects.completed;
    } else if (activeTab === 'planned') {
      projects = roadProjects.planned;
    }

    if (activeProjectFilter !== 'all') {
      projects = projects.filter(project => {
        if (activeProjectFilter === 'major' && ['Major Highway', 'Urban Flyover', 'Integrated Transport Corridor'].includes(project.type)) return true;
        if (activeProjectFilter === 'urban' && ['Urban Flyover', 'Intelligent Transport System', 'Safety Infrastructure'].includes(project.type)) return true;
        if (activeProjectFilter === 'rural' && ['Rural Connectivity'].includes(project.type)) return true;
        if (activeProjectFilter === 'tech' && ['Intelligent Transport System', 'Innovative Road Technology'].includes(project.type)) return true;
        return false;
      });
    }

    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      projects = projects.filter(project => 
        project.title.toLowerCase().includes(term) || 
        project.location.toLowerCase().includes(term) ||
        project.description.toLowerCase().includes(term)
      );
    }

    return projects;
  };

  // Toggle project expansion
  const toggleProjectExpansion = (id) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
  };

  // Filter issues based on search term
  const filteredIssues = () => {
    if (searchTerm.trim() === '') {
      return maintenanceIssues;
    }
    
    const term = searchTerm.toLowerCase();
    return maintenanceIssues.filter(issue => 
      issue.type.toLowerCase().includes(term) || 
      issue.location.toLowerCase().includes(term) ||
      issue.description.toLowerCase().includes(term) ||
      issue.status.toLowerCase().includes(term)
    );
  };

  return (
    <div className="roads-container">
      {/* Header Section */}
      <div className="roads-header">
        <div className="header-content">
          <h1>Road Infrastructure</h1>
          <p>Stay informed about road projects, improvements, and maintenance in your community</p>
          <div className="search-container">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search for projects, locations, or issues..." 
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
      <div className="roads-tabs">
        <button 
          className={`tab-btn ${activeTab === 'current' ? 'active' : ''}`}
          onClick={() => setActiveTab('current')}
        >
          <i className="fas fa-road"></i> Current Projects
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
          <i className="fas fa-clipboard-list"></i> Planned Projects
        </button>
        <button 
          className={`tab-btn ${activeTab === 'maintenance' ? 'active' : ''}`}
          onClick={() => setActiveTab('maintenance')}
        >
          <i className="fas fa-tools"></i> Maintenance Issues
        </button>
        <button 
          className={`tab-btn ${activeTab === 'report' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('report');
            setShowReportForm(true);
          }}
        >
          <i className="fas fa-exclamation-triangle"></i> Report Issue
        </button>
      </div>

      {/* Sub-filters for Projects */}
      {(activeTab === 'current' || activeTab === 'completed' || activeTab === 'planned') && (
        <div className="project-filters">
          <button 
            className={`filter-btn ${activeProjectFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveProjectFilter('all')}
          >
            All Types
          </button>
          <button 
            className={`filter-btn ${activeProjectFilter === 'major' ? 'active' : ''}`}
            onClick={() => setActiveProjectFilter('major')}
          >
            Major Highways
          </button>
          <button 
            className={`filter-btn ${activeProjectFilter === 'urban' ? 'active' : ''}`}
            onClick={() => setActiveProjectFilter('urban')}
          >
            Urban Projects
          </button>
          <button 
            className={`filter-btn ${activeProjectFilter === 'rural' ? 'active' : ''}`}
            onClick={() => setActiveProjectFilter('rural')}
          >
            Rural Roads
          </button>
          <button 
            className={`filter-btn ${activeProjectFilter === 'tech' ? 'active' : ''}`}
            onClick={() => setActiveProjectFilter('tech')}
          >
            Smart Technology
          </button>
        </div>
      )}

      {/* Current Projects Tab Content */}
      {activeTab === 'current' && (
        <div className="projects-section">
          <div className="section-header">
            <h2>Current Road Projects</h2>
            <p>Ongoing road infrastructure development in your community</p>
          </div>

          {filteredProjects().length > 0 ? (
            <div className="projects-grid">
              {filteredProjects().map((project) => (
                <div className="project-card" key={project.id}>
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <span className={`project-status status-${project.status.toLowerCase().replace(/\s+/g, '-')}`}>
                      {project.status} - {project.completion}
                    </span>
                  </div>
                  
                  <div className="project-info">
                    <p><strong>Location:</strong> {project.location}</p>
                    <p><strong>Department:</strong> {project.department}</p>
                    <p><strong>Type:</strong> {project.type}</p>
                    <p><strong>Timeline:</strong> {project.timeline}</p>
                    <p><strong>Budget:</strong> {project.budget}</p>
                    <div className="progress-container">
                      <div className="progress-label">Completion</div>
                      <div className="progress-bar">
                        <div 
                          className="progress" 
                          style={{width: project.completion}}
                        ></div>
                      </div>
                      <div className="progress-percentage">{project.completion}</div>
                    </div>
                  </div>

                  <p className="project-desc">{project.description}</p>
                  
                  <button 
                    className="details-toggle"
                    onClick={() => toggleProjectExpansion(project.id)}
                  >
                    {expandedProject === project.id ? 'Less Details' : 'More Details'}
                    <i className={`fas fa-chevron-${expandedProject === project.id ? 'up' : 'down'}`}></i>
                  </button>
                  
                  {expandedProject === project.id && (
                    <div className="project-details">
                      <div className="details-section">
                        <h4>Key Features</h4>
                        <ul>
                          {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="details-section">
                        <h4>Expected Benefits</h4>
                        <ul>
                          {project.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="details-section">
                        <h4>Project Challenges</h4>
                        <ul>
                          {project.challenges.map((challenge, index) => (
                            <li key={index}>{challenge}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="project-actions">
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
              <h3>No projects found</h3>
              <p>Try adjusting your search or filters to find what you're looking for.</p>
            </div>
          )}
        </div>
      )}

      {/* Completed Projects Tab Content */}
      {activeTab === 'completed' && (
        <div className="projects-section">
          <div className="section-header">
            <h2>Completed Road Projects</h2>
            <p>Recently completed infrastructure improvements in your area</p>
          </div>

          {filteredProjects().length > 0 ? (
            <div className="projects-grid">
              {filteredProjects().map((project) => (
                <div className="project-card completed-card" key={project.id}>
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <span className="project-status status-completed">
                      Completed
                    </span>
                  </div>
                  
                  <div className="project-info">
                    <p><strong>Location:</strong> {project.location}</p>
                    <p><strong>Department:</strong> {project.department}</p>
                    <p><strong>Type:</strong> {project.type}</p>
                    <p><strong>Completed:</strong> {project.completed}</p>
                    <p><strong>Budget:</strong> {project.budget}</p>
                  </div>

                  <p className="project-desc">{project.description}</p>
                  
                  <button 
                    className="details-toggle"
                    onClick={() => toggleProjectExpansion(project.id)}
                  >
                    {expandedProject === project.id ? 'Less Details' : 'More Details'}
                    <i className={`fas fa-chevron-${expandedProject === project.id ? 'up' : 'down'}`}></i>
                  </button>
                  
                  {expandedProject === project.id && (
                    <div className="project-details">
                      <div className="details-section">
                        <h4>Key Features</h4>
                        <ul>
                          {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="details-section">
                        <h4>Project Outcomes</h4>
                        <ul>
                          {project.outcomes.map((outcome, index) => (
                            <li key={index}>{outcome}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="testimonial-section">
                        <h4>Community Feedback</h4>
                        <div className="testimonial">
                          <p>"{project.testimonial.quote}"</p>
                          <span className="testimonial-author">- {project.testimonial.author}</span>
                        </div>
                      </div>
                      
                      <div className="project-actions">
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

      {/* Planned Projects Tab Content */}
      {activeTab === 'planned' && (
        <div className="projects-section">
          <div className="section-header">
            <h2>Planned Road Projects</h2>
            <p>Upcoming infrastructure improvements planned for your community</p>
          </div>

          {filteredProjects().length > 0 ? (
            <div className="projects-grid">
              {filteredProjects().map((project) => (
                <div className="project-card planned-card" key={project.id}>
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <span className="project-status status-planned">
                      Planned
                    </span>
                  </div>
                  
                  <div className="project-info">
                    <p><strong>Location:</strong> {project.location}</p>
                    <p><strong>Department:</strong> {project.department}</p>
                    <p><strong>Type:</strong> {project.type}</p>
                    <p><strong>Timeline:</strong> {project.timeline}</p>
                    <p><strong>Estimated Budget:</strong> {project.estimated_budget}</p>
                    <p><strong>Status:</strong> {project.current_status}</p>
                  </div>

                  <p className="project-desc">{project.description}</p>
                  
                  <button 
                    className="details-toggle"
                    onClick={() => toggleProjectExpansion(project.id)}
                  >
                    {expandedProject === project.id ? 'Less Details' : 'More Details'}
                    <i className={`fas fa-chevron-${expandedProject === project.id ? 'up' : 'down'}`}></i>
                  </button>
                  
                  {expandedProject === project.id && (
                    <div className="project-details">
                      <div className="details-section">
                        <h4>Proposed Features</h4>
                        <ul>
                          {project.proposed_features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="details-section">
                        <h4>Expected Benefits</h4>
                        <ul>
                          {project.expected_benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="project-actions">
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
              <h3>No projects found</h3>
              <p>Try adjusting your search or filters to find what you're looking for.</p>
            </div>
          )}
        </div>
      )}

      {/* Maintenance Issues Tab Content */}
      {activeTab === 'maintenance' && (
        <div className="maintenance-section">
          <div className="section-header">
            <h2>Road Maintenance Issues</h2>
            <p>Current maintenance issues being addressed in your area</p>
          </div>

          {filteredIssues().length > 0 ? (
            <div className="issues-table-container">
              <table className="issues-table">
                <thead>
                  <tr>
                    <th>Issue Type</th>
                    <th>Location</th>
                    <th>Reported</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>Est. Completion</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredIssues().map((issue) => (
                    <tr key={issue.id} className={`priority-${issue.priority.toLowerCase()}`}>
                      <td>{issue.type}</td>
                      <td>{issue.location}</td>
                      <td>{issue.reported_date}</td>
                      <td>
                        <span className={`status-badge status-${issue.status.toLowerCase()}`}>
                          {issue.status}
                        </span>
                      </td>
                      <td>
                        <span className={`priority-badge priority-${issue.priority.toLowerCase()}`}>
                          {issue.priority}
                        </span>
                      </td>
                      <td>{issue.estimated_fix || issue.completion_date}</td>
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
              <h3>No maintenance issues found</h3>
              <p>Try adjusting your search or filters to find what you're looking for.</p>
            </div>
          )}
          
          <div className="maintenance-actions">
            <button className="action-btn">
              <i className="fas fa-map-marked-alt"></i>
              View Issues Map
            </button>
            <button className="action-btn" onClick={() => {
              setActiveTab('report');
              setShowReportForm(true);
            }}>
              <i className="fas fa-exclamation-triangle"></i>
              Report New Issue
            </button>
            <button className="action-btn">
              <i className="fas fa-bell"></i>
              Get Notifications
            </button>
          </div>
        </div>
      )}

      {/* Report Issue Tab Content */}
      {activeTab === 'report' && showReportForm && (
        <div className="report-section">
          <div className="report-header">
            <h2>Report Road Infrastructure Issue</h2>
            <p>Help improve your community by reporting road infrastructure problems</p>
          </div>
          
          <div className="raise-container">
            {/* Form Card with Glassmorphism effect */}
            <div className="form-card">
              <div className="form-header">
                <div className="header-icon">
                  <i className="fas fa-exclamation-circle"></i>
                </div>
                <h2>Road Issue Report</h2>
                <p>Please provide detailed information about the road issue</p>
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
                    <label htmlFor="issueType">Issue Type</label>
                    <select 
                      id="issueType" 
                      className="styled-select"
                      value={reportForm.issueType}
                      onChange={handleFormChange}
                      required
                    >
                      <option value="">Select issue type</option>
                      <option value="pothole">Pothole</option>
                      <option value="damaged_road">Damaged Road Surface</option>
                      <option value="drainage">Drainage Problem</option>
                      <option value="signage">Missing/Damaged Signage</option>
                      <option value="streetlight">Street Light Issue</option>
                      <option value="traffic_signal">Traffic Signal Problem</option>
                      <option value="road_marking">Faded Road Markings</option>
                      <option value="obstruction">Road Obstruction</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="input-group">
                    <label htmlFor="severity">Issue Severity</label>
                    <select 
                      id="severity" 
                      className="styled-select"
                      value={reportForm.severity}
                      onChange={handleFormChange}
                      required
                    >
                      <option value="low">Low - Not urgent</option>
                      <option value="medium">Medium - Needs attention</option>
                      <option value="high">High - Safety concern</option>
                      <option value="critical">Critical - Immediate danger</option>
                    </select>
                  </div>
                </div>
                
                <div className="input-group">
                  <label htmlFor="location">Location</label>
                  <input 
                    type="text" 
                    id="location" 
                    placeholder="Enter the specific location of the issue" 
                    value={reportForm.location}
                    onChange={handleFormChange}
                    required 
                  />
                </div>
                
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
                  <label htmlFor="description">Detailed Description</label>
                  <textarea 
                    id="description" 
                    rows="4" 
                    placeholder="Please describe the issue in detail" 
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
                    placeholder="Link to photo or video showing the issue" 
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
                  <p>For emergencies requiring immediate attention, please call the emergency hotline at 100</p>
                </div>
                
                <div className="help-options">
                  <div className="help-option">
                    <i className="fas fa-phone-alt"></i>
                    <div>
                      <p className="help-label">Helpline</p>
                      <p className="help-value">+91 1800-345-6789</p>
                    </div>
                  </div>
                  <div className="help-option">
                    <i className="fas fa-envelope"></i>
                    <div>
                      <p className="help-label">Email</p>
                      <p className="help-value">roads@civicspot.gov.in</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Road Statistics Section */}
      <div className="road-stats-section">
        <div className="stats-header">
          <h2>Road Infrastructure Statistics</h2>
          <p>Key figures about road infrastructure in your community</p>
        </div>
        
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-road"></i>
            </div>
            <div className="stat-info">
              <h3>2,500+ km</h3>
              <p>Total Road Network</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-project-diagram"></i>
            </div>
            <div className="stat-info">
              <h3>18</h3>
              <p>Active Projects</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-tools"></i>
            </div>
            <div className="stat-info">
              <h3>85%</h3>
              <p>Maintenance Coverage</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <div className="stat-info">
              <h3>₹350 Cr</h3>
              <p>Annual Infrastructure Budget</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="road-resources">
        <h3>Additional Road Infrastructure Resources</h3>
        
        <div className="resources-links">
          <a href="#" className="resource-link">
            <div className="resource-icon">
              <i className="fas fa-map-marked-alt"></i>
            </div>
            <h4>Interactive Road Map</h4>
          </a>
          
          <a href="#" className="resource-link">
            <div className="resource-icon">
              <i className="fas fa-car-crash"></i>
            </div>
            <h4>Road Safety Information</h4>
          </a>
          
          <a href="#" className="resource-link">
            <div className="resource-icon">
              <i className="fas fa-file-contract"></i>
            </div>
            <h4>Infrastructure Policies</h4>
          </a>
          
          <a href="#" className="resource-link">
            <div className="resource-icon">
              <i className="fas fa-hands-helping"></i>
            </div>
            <h4>Community Involvement</h4>
          </a>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="road-feedback">
        <div className="feedback-header">
          <h3>Help Us Improve Road Infrastructure</h3>
          <p>Share your feedback and suggestions about road infrastructure in your community</p>
        </div>
        
        <button className="feedback-btn">
          <i className="fas fa-comment"></i>
          Submit Feedback
        </button>
      </div>
    </div>
  );
};

export default RoadInfrastructure;
