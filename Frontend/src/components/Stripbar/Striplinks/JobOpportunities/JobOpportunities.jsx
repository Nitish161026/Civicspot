import React, { useState } from 'react';
import './JobOpportunities.css';

const JobOpportunities = () => {
  const [activeTab, setActiveTab] = useState('jobs');
  const [activeJobFilter, setActiveJobFilter] = useState('all');
  const [activeTrainingFilter, setActiveTrainingFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedJob, setExpandedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  
  // Form state for job application
  const [jobForm, setJobForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    qualification: '',
    experience: '',
    skills: '',
    resumeLink: '',
    coverLetter: '',
    preferredLocation: '',
    expectedSalary: '',
    noticePeriod: '',
    termsAgree: false
  });

  // Handle input change for form fields
  const handleFormChange = (e) => {
    const { id, value, type, checked } = e.target;
    setJobForm({
      ...jobForm,
      [id]: type === 'checkbox' ? checked : value
    });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Job application submitted:', jobForm);
    // Here you would typically send the form data to your backend
    alert('Your job application has been submitted successfully!');
  };

  // Job listings data
  const jobListings = {
    government: [
      {
        id: 'gov1',
        title: 'Municipal Engineering Officer',
        department: 'Public Works Department',
        location: 'City Municipal Corporation',
        type: 'Full-time',
        salary: '₹45,000 - ₹60,000 per month',
        deadline: '15 September, 2025',
        vacancies: 5,
        experience: '3-5 years',
        education: 'B.Tech/B.E in Civil Engineering',
        description: 'The Municipal Engineering Officer is responsible for planning, designing, and supervising the construction and maintenance of public infrastructure including roads, bridges, drainage systems, and public buildings.',
        responsibilities: [
          'Plan and design municipal infrastructure projects',
          'Supervise construction and maintenance activities',
          'Ensure compliance with safety standards and regulations',
          'Prepare technical reports and project documentation',
          'Coordinate with contractors and other government departments'
        ],
        requirements: [
          'B.Tech/B.E in Civil Engineering from recognized university',
          'Minimum 3 years of experience in civil engineering projects',
          'Knowledge of government regulations and building codes',
          'Proficiency in AutoCAD and project management software',
          'Good communication and leadership skills'
        ],
        benefits: [
          'Government pension scheme',
          'Healthcare benefits',
          'Housing allowance',
          'Education allowance for children',
          'Career advancement opportunities'
        ]
      },
      {
        id: 'gov2',
        title: 'Public Health Officer',
        department: 'Health Department',
        location: 'District Health Center',
        type: 'Full-time',
        salary: '₹40,000 - ₹55,000 per month',
        deadline: '30 September, 2025',
        vacancies: 8,
        experience: '2-4 years',
        education: 'MBBS/MD in Public Health',
        description: 'The Public Health Officer is responsible for implementing and monitoring public health programs, conducting health surveys, managing disease outbreaks, and ensuring community health standards.',
        responsibilities: [
          'Implement public health programs and initiatives',
          'Monitor and respond to disease outbreaks',
          'Conduct health surveys and collect data',
          'Educate the public on health matters',
          'Ensure compliance with health regulations'
        ],
        requirements: [
          'MBBS/MD in Public Health or related field',
          'Minimum 2 years of experience in public health',
          'Knowledge of epidemiology and disease control',
          'Experience with health program management',
          'Strong analytical and communication skills'
        ],
        benefits: [
          'Government pension scheme',
          'Healthcare benefits',
          'Research opportunities',
          'Professional development support',
          'Work-life balance'
        ]
      },
      {
        id: 'gov3',
        title: 'Urban Planner',
        department: 'Urban Development Authority',
        location: 'City Planning Office',
        type: 'Full-time',
        salary: '₹50,000 - ₹65,000 per month',
        deadline: '20 September, 2025',
        vacancies: 3,
        experience: '5-7 years',
        education: 'Master\'s in Urban Planning/Architecture',
        description: 'The Urban Planner is responsible for developing comprehensive plans for land use, transportation, housing, and infrastructure development to ensure sustainable and organized urban growth.',
        responsibilities: [
          'Develop urban development plans and strategies',
          'Analyze land use patterns and development trends',
          'Coordinate with various stakeholders for urban projects',
          'Ensure compliance with zoning regulations',
          'Prepare detailed project reports and presentations'
        ],
        requirements: [
          'Master\'s degree in Urban Planning or Architecture',
          'Minimum 5 years of experience in urban planning',
          'Knowledge of GIS and urban modeling tools',
          'Understanding of environmental and social impact assessment',
          'Strong analytical and problem-solving skills'
        ],
        benefits: [
          'Government pension scheme',
          'Healthcare benefits',
          'Housing allowance',
          'Professional development opportunities',
          'Flexible working hours'
        ]
      }
    ],
    private: [
      {
        id: 'pri1',
        title: 'Project Manager - Smart City Solutions',
        company: 'TechUrban Innovations Pvt. Ltd.',
        location: 'Bangalore, Karnataka',
        type: 'Full-time',
        salary: '₹80,000 - ₹1,20,000 per month',
        deadline: '10 September, 2025',
        experience: '5-8 years',
        education: 'B.Tech/MBA',
        description: 'TechUrban Innovations is seeking a Project Manager to lead our Smart City Solutions initiatives, including IoT-based traffic management, waste management, and public safety systems.',
        responsibilities: [
          'Lead a team of engineers and developers for smart city projects',
          'Coordinate with municipal corporations and government stakeholders',
          'Manage project budgets, timelines, and resources',
          'Ensure quality and compliance with project requirements',
          'Identify opportunities for innovation and improvement'
        ],
        requirements: [
          'B.Tech with MBA or equivalent qualification',
          'Minimum 5 years of experience in project management',
          'Experience with IoT, urban tech, or smart city solutions',
          'Strong leadership and communication skills',
          'PMP certification preferred'
        ],
        benefits: [
          'Competitive salary package',
          'Health insurance and wellness programs',
          'Performance bonuses',
          'Professional development support',
          'Flexible working options'
        ]
      },
      {
        id: 'pri2',
        title: 'Environmental Engineer',
        company: 'GreenSustain Solutions',
        location: 'Pune, Maharashtra',
        type: 'Full-time',
        salary: '₹50,000 - ₹70,000 per month',
        deadline: '25 September, 2025',
        experience: '3-6 years',
        education: 'B.Tech/M.Tech in Environmental Engineering',
        description: 'GreenSustain Solutions is looking for an Environmental Engineer to work on sustainable urban development projects, including water management, waste treatment, and pollution control systems.',
        responsibilities: [
          'Design and implement environmental management systems',
          'Conduct environmental impact assessments',
          'Develop waste management and recycling solutions',
          'Ensure compliance with environmental regulations',
          'Collaborate with urban planning teams for sustainable development'
        ],
        requirements: [
          'B.Tech/M.Tech in Environmental Engineering',
          'Minimum 3 years of experience in environmental projects',
          'Knowledge of environmental laws and regulations',
          'Experience with environmental modeling tools',
          'Strong analytical and problem-solving skills'
        ],
        benefits: [
          'Competitive salary package',
          'Health and life insurance',
          'Professional development opportunities',
          'Work from home options',
          'Team retreats and wellness programs'
        ]
      },
      {
        id: 'pri3',
        title: 'Community Engagement Specialist',
        company: 'Urban Connect Foundation',
        location: 'Delhi, NCR',
        type: 'Full-time',
        salary: '₹40,000 - ₹55,000 per month',
        deadline: '15 September, 2025',
        experience: '2-5 years',
        education: 'Master\'s in Social Work/Public Policy',
        description: 'Urban Connect Foundation is seeking a Community Engagement Specialist to develop and implement community outreach programs for urban development initiatives, focusing on citizen participation and inclusive growth.',
        responsibilities: [
          'Design and implement community engagement strategies',
          'Organize community workshops and public consultations',
          'Build relationships with local stakeholders and community leaders',
          'Collect and analyze community feedback',
          'Prepare reports and presentations on community initiatives'
        ],
        requirements: [
          'Master\'s degree in Social Work, Public Policy, or related field',
          'Minimum 2 years of experience in community development',
          'Strong communication and interpersonal skills',
          'Experience with participatory planning approaches',
          'Knowledge of urban issues and social inclusion'
        ],
        benefits: [
          'Competitive salary package',
          'Health insurance',
          'Flexible working hours',
          'Professional development opportunities',
          'Meaningful work with social impact'
        ]
      }
    ],
    contract: [
      {
        id: 'con1',
        title: 'Infrastructure Consultant',
        organization: 'City Development Authority',
        location: 'Mumbai, Maharashtra',
        type: 'Contract (12 months)',
        salary: '₹60,000 - ₹80,000 per month',
        deadline: '5 September, 2025',
        experience: '7+ years',
        education: 'Master\'s in Civil Engineering/Infrastructure Planning',
        description: 'The City Development Authority is seeking an Infrastructure Consultant to provide expert advice on major infrastructure projects, including transportation networks, utility systems, and public facilities.',
        responsibilities: [
          'Provide technical expertise for infrastructure planning and design',
          'Review and evaluate infrastructure project proposals',
          'Develop recommendations for infrastructure improvements',
          'Prepare technical reports and presentations',
          'Coordinate with various stakeholders and experts'
        ],
        requirements: [
          'Master\'s degree in Civil Engineering or Infrastructure Planning',
          'Minimum 7 years of experience in infrastructure development',
          'Strong technical knowledge and analytical skills',
          'Experience with public infrastructure projects',
          'Excellent communication and presentation skills'
        ],
        benefits: [
          'Competitive consulting fees',
          'Flexible working arrangements',
          'Networking opportunities',
          'Professional recognition',
          'Potential for contract extension'
        ]
      },
      {
        id: 'con2',
        title: 'Digital Transformation Specialist',
        organization: 'Smart City Mission',
        location: 'Hyderabad, Telangana',
        type: 'Contract (18 months)',
        salary: '₹70,000 - ₹90,000 per month',
        deadline: '20 September, 2025',
        experience: '5+ years',
        education: 'B.Tech/MBA with IT specialization',
        description: 'The Smart City Mission is seeking a Digital Transformation Specialist to lead the implementation of digital solutions for urban governance, citizen services, and smart infrastructure management.',
        responsibilities: [
          'Develop digital transformation strategies for urban governance',
          'Implement e-governance and digital service platforms',
          'Train government staff on digital tools and processes',
          'Monitor and evaluate digital transformation initiatives',
          'Identify opportunities for technology innovation'
        ],
        requirements: [
          'B.Tech with MBA or equivalent qualification with IT focus',
          'Minimum 5 years of experience in digital transformation projects',
          'Knowledge of e-governance platforms and digital service delivery',
          'Strong project management and change management skills',
          'Experience working with government organizations preferred'
        ],
        benefits: [
          'Competitive consulting fees',
          'Performance incentives',
          'Flexible working arrangements',
          'Professional development opportunities',
          'Networking with industry leaders'
        ]
      }
    ]
  };

  // Training programs data
  const trainingPrograms = {
    skill: [
      {
        id: 'skl1',
        title: 'Construction Skills Training',
        provider: 'Urban Skills Development Center',
        location: 'Multiple Centers Across the City',
        duration: '3 months',
        fee: 'Free (Government Sponsored)',
        startDate: '1 October, 2025',
        seats: 100,
        description: 'This training program focuses on developing practical skills in construction trades including masonry, carpentry, plumbing, and electrical work to enhance employability in the urban construction sector.',
        highlights: [
          'Hands-on practical training in construction skills',
          'Industry-recognized certification',
          'Placement assistance after completion',
          'Stipend during training period',
          'No prior experience required'
        ],
        eligibility: [
          'Minimum 10th standard education',
          'Age between 18-35 years',
          'Resident of the city/district',
          'Basic physical fitness',
          'Commitment to complete the full training duration'
        ]
      },
      {
        id: 'skl2',
        title: 'Digital Literacy Program',
        provider: 'Community Technology Centers',
        location: 'Various Community Centers',
        duration: '6 weeks',
        fee: 'Free (Government Sponsored)',
        startDate: '15 September, 2025',
        seats: 150,
        description: 'The Digital Literacy Program aims to equip citizens with basic computer skills, internet usage, digital communication, and online service access to bridge the digital divide and enhance employability.',
        highlights: [
          'Basic to intermediate computer skills training',
          'Internet navigation and online communication',
          'Digital government services access training',
          'Mobile app usage and digital payment systems',
          'Cybersecurity awareness'
        ],
        eligibility: [
          'Minimum 8th standard education',
          'All age groups welcome',
          'No prior computer experience required',
          'Resident of the city/district',
          'Regular attendance commitment'
        ]
      }
    ],
    professional: [
      {
        id: 'pro1',
        title: 'Urban Planning and Sustainable Development',
        provider: 'Institute of Urban Studies',
        location: 'Central Campus and Online',
        duration: '4 months',
        fee: '₹15,000 (Scholarships Available)',
        startDate: '10 October, 2025',
        seats: 50,
        description: 'This professional development program focuses on modern urban planning principles, sustainable development practices, and innovative approaches to urban challenges for professionals in urban management and related fields.',
        highlights: [
          'Comprehensive curriculum covering urban planning theories and practices',
          'Sustainable development frameworks and tools',
          'GIS and spatial analysis for urban planning',
          'Case studies of successful urban interventions',
          'Project-based learning with real-world applications'
        ],
        eligibility: [
          'Bachelor\'s degree in any discipline (preferably related to urban studies)',
          'Professionals working in urban development sector',
          'Government officials from urban local bodies',
          'Urban entrepreneurs and social innovators',
          'Strong interest in urban issues and solutions'
        ]
      },
      {
        id: 'pro2',
        title: 'Public Administration and Governance',
        provider: 'Academy of Administrative Excellence',
        location: 'Main Campus and Satellite Centers',
        duration: '6 months (Weekend Classes)',
        fee: '₹20,000 (Government Employees: 50% Discount)',
        startDate: '5 October, 2025',
        seats: 60,
        description: 'This program is designed to enhance the administrative capabilities, governance knowledge, and leadership skills of public servants, government officials, and those aspiring to work in public administration.',
        highlights: [
          'Modern public administration theories and practices',
          'E-governance and digital transformation in public sector',
          'Policy formulation, implementation, and evaluation',
          'Public finance and budget management',
          'Leadership and change management in government'
        ],
        eligibility: [
          'Bachelor\'s degree in any discipline',
          'Government officials and public servants',
          'Professionals interested in public administration',
          'NGO leaders and social sector professionals',
          'Minimum 2 years of work experience preferred'
        ]
      }
    ],
    entrepreneurship: [
      {
        id: 'ent1',
        title: 'Urban Entrepreneurship Incubation Program',
        provider: 'City Business Innovation Hub',
        location: 'Innovation Center and Online Sessions',
        duration: '6 months',
        fee: '₹5,000 (Refundable upon business registration)',
        startDate: '20 September, 2025',
        seats: 40,
        description: 'The Urban Entrepreneurship Incubation Program supports aspiring entrepreneurs in developing viable business models addressing urban challenges and opportunities, with mentoring, resources, and funding connections.',
        highlights: [
          'Business model development for urban ventures',
          'Mentorship from successful entrepreneurs and industry experts',
          'Access to coworking space and resources',
          'Networking with investors and funding agencies',
          'Legal and regulatory compliance guidance'
        ],
        eligibility: [
          'Individuals with innovative business ideas for urban contexts',
          'Small businesses looking to scale up operations',
          'Social entrepreneurs addressing urban challenges',
          'Minimum 12th standard education',
          'Strong commitment to entrepreneurship'
        ]
      }
    ]
  };

  // Handle search functionality
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Toggle expanded job details
  const toggleJobDetails = (id) => {
    if (expandedJob === id) {
      setExpandedJob(null);
    } else {
      setExpandedJob(id);
    }
  };

  // Filter job listings based on active filter and search term
  const getFilteredJobListings = () => {
    if (!activeTab === 'jobs') return [];
    
    let listings = [];
    if (activeJobFilter === 'all') {
      listings = [...jobListings.government, ...jobListings.private, ...jobListings.contract];
    } else {
      listings = jobListings[activeJobFilter] || [];
    }
    
    if (searchTerm) {
      return listings.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (job.department && job.department.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (job.company && job.company.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    return listings;
  };

  // Filter training programs based on active filter and search term
  const getFilteredTrainingPrograms = () => {
    if (!activeTab === 'training') return [];
    
    let programs = [];
    if (activeTrainingFilter === 'all') {
      programs = [...trainingPrograms.skill, ...trainingPrograms.professional, ...trainingPrograms.entrepreneurship];
    } else {
      programs = trainingPrograms[activeTrainingFilter] || [];
    }
    
    if (searchTerm) {
      return programs.filter(program => 
        program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return programs;
  };

  // Get filtered listings based on active tab
  const filteredListings = activeTab === 'jobs' 
    ? getFilteredJobListings() 
    : activeTab === 'training' 
      ? getFilteredTrainingPrograms()
      : [];

  return (
    <div className="jobs-container">
      {/* Header Section */}
      <div className="jobs-header">
        <div className="header-content">
          <h1>Job Opportunities & Career Development</h1>
          <p>Find employment opportunities, training programs, and career resources in your community</p>
          
          <div className="search-container">
            <input
              type="text"
              placeholder={`Search for ${activeTab === 'jobs' ? 'jobs' : activeTab === 'training' ? 'training programs' : 'opportunities'}...`}
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

      {/* Main Tabs */}
      <div className="jobs-tabs">
        <button 
          className={activeTab === 'jobs' ? 'active' : ''} 
          onClick={() => {
            setActiveTab('jobs');
            setSearchTerm('');
          }}
        >
          <i className="fas fa-briefcase"></i>
          <span>Job Listings</span>
        </button>
        <button 
          className={activeTab === 'training' ? 'active' : ''} 
          onClick={() => {
            setActiveTab('training');
            setSearchTerm('');
          }}
        >
          <i className="fas fa-graduation-cap"></i>
          <span>Training Programs</span>
        </button>
        <button 
          className={activeTab === 'resources' ? 'active' : ''} 
          onClick={() => {
            setActiveTab('resources');
            setSearchTerm('');
          }}
        >
          <i className="fas fa-book"></i>
          <span>Career Resources</span>
        </button>
        <button 
          className={activeTab === 'apply' ? 'active' : ''} 
          onClick={() => {
            setActiveTab('apply');
            setShowApplicationForm(true);
          }}
        >
          <i className="fas fa-file-alt"></i>
          <span>Apply for Jobs</span>
        </button>
      </div>

      {/* Jobs Tab Content */}
      {activeTab === 'jobs' && (
        <div className="jobs-section">
          <div className="jobs-filters">
            <button 
              className={activeJobFilter === 'all' ? 'active' : ''} 
              onClick={() => setActiveJobFilter('all')}
            >
              All Jobs
            </button>
            <button 
              className={activeJobFilter === 'government' ? 'active' : ''} 
              onClick={() => setActiveJobFilter('government')}
            >
              Government Jobs
            </button>
            <button 
              className={activeJobFilter === 'private' ? 'active' : ''} 
              onClick={() => setActiveJobFilter('private')}
            >
              Private Sector
            </button>
            <button 
              className={activeJobFilter === 'contract' ? 'active' : ''} 
              onClick={() => setActiveJobFilter('contract')}
            >
              Contract Positions
            </button>
          </div>

          <div className="listings-grid">
            {filteredListings && filteredListings.length > 0 ? (
              filteredListings.map(job => (
                <div key={job.id} className={`job-card ${expandedJob === job.id ? 'expanded' : ''}`}>
                  <div className="job-header">
                    <h3>{job.title}</h3>
                    <div className="job-badge">{job.type}</div>
                  </div>
                  
                  <div className="job-organization">
                    {job.department ? (
                      <span><i className="fas fa-building"></i> {job.department}</span>
                    ) : job.company ? (
                      <span><i className="fas fa-building"></i> {job.company}</span>
                    ) : job.organization ? (
                      <span><i className="fas fa-building"></i> {job.organization}</span>
                    ) : null}
                  </div>
                  
                  <p className="job-location"><i className="fas fa-map-marker-alt"></i> {job.location}</p>
                  
                  <div className="job-meta">
                    <div className="meta-item">
                      <i className="fas fa-money-bill-wave"></i>
                      <span>{job.salary}</span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-calendar-alt"></i>
                      <span>Deadline: {job.deadline}</span>
                    </div>
                  </div>
                  
                  {job.vacancies && (
                    <div className="vacancies">
                      <span>{job.vacancies} {job.vacancies === 1 ? 'Vacancy' : 'Vacancies'}</span>
                    </div>
                  )}
                  
                  <div className={`job-details ${expandedJob === job.id ? 'visible' : ''}`}>
                    <div className="details-section">
                      <h4><i className="fas fa-info-circle"></i> Job Description</h4>
                      <p>{job.description}</p>
                    </div>
                    
                    <div className="details-section">
                      <h4><i className="fas fa-tasks"></i> Key Responsibilities</h4>
                      <ul>
                        {job.responsibilities.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="details-section">
                      <h4><i className="fas fa-clipboard-check"></i> Requirements</h4>
                      <ul>
                        {job.requirements.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="details-section">
                      <h4><i className="fas fa-gift"></i> Benefits</h4>
                      <ul>
                        {job.benefits.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="job-actions">
                    <button className="view-btn" onClick={() => toggleJobDetails(job.id)}>
                      {expandedJob === job.id ? 'Show Less' : 'Show More'}
                    </button>
                    <button 
                      className="apply-btn" 
                      onClick={() => {
                        setActiveTab('apply');
                        setShowApplicationForm(true);
                      }}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-listings">
                <div className="no-results-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <h3>No job listings found</h3>
                <p>Try adjusting your search or browse different categories</p>
                {searchTerm && (
                  <button className="clear-search" onClick={() => setSearchTerm('')}>
                    Clear Search
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Training Programs Tab Content */}
      {activeTab === 'training' && (
        <div className="training-section">
          <div className="training-filters">
            <button 
              className={activeTrainingFilter === 'all' ? 'active' : ''} 
              onClick={() => setActiveTrainingFilter('all')}
            >
              All Programs
            </button>
            <button 
              className={activeTrainingFilter === 'skill' ? 'active' : ''} 
              onClick={() => setActiveTrainingFilter('skill')}
            >
              Skill Development
            </button>
            <button 
              className={activeTrainingFilter === 'professional' ? 'active' : ''} 
              onClick={() => setActiveTrainingFilter('professional')}
            >
              Professional Development
            </button>
            <button 
              className={activeTrainingFilter === 'entrepreneurship' ? 'active' : ''} 
              onClick={() => setActiveTrainingFilter('entrepreneurship')}
            >
              Entrepreneurship
            </button>
          </div>

          <div className="programs-grid">
            {filteredListings && filteredListings.length > 0 ? (
              filteredListings.map(program => (
                <div key={program.id} className="program-card">
                  <div className="program-header">
                    <h3>{program.title}</h3>
                    <div className="program-badge">{program.fee.includes('Free') ? 'Free' : 'Paid'}</div>
                  </div>
                  
                  <div className="program-provider">
                    <i className="fas fa-university"></i>
                    <span>{program.provider}</span>
                  </div>
                  
                  <p className="program-location"><i className="fas fa-map-marker-alt"></i> {program.location}</p>
                  
                  <div className="program-meta">
                    <div className="meta-item">
                      <i className="fas fa-clock"></i>
                      <span>Duration: {program.duration}</span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-calendar-alt"></i>
                      <span>Starts: {program.startDate}</span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-money-bill-wave"></i>
                      <span>Fee: {program.fee}</span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-user-friends"></i>
                      <span>Seats: {program.seats}</span>
                    </div>
                  </div>
                  
                  <div className="program-description">
                    <h4><i className="fas fa-info-circle"></i> Description</h4>
                    <p>{program.description}</p>
                  </div>
                  
                  <div className="program-features">
                    <div className="features-section">
                      <h4><i className="fas fa-star"></i> Program Highlights</h4>
                      <ul>
                        {program.highlights.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="features-section">
                      <h4><i className="fas fa-user-check"></i> Eligibility Criteria</h4>
                      <ul>
                        {program.eligibility.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="program-actions">
                    <button className="enroll-btn">
                      Enroll Now
                    </button>
                    <button className="details-btn">
                      Request More Info
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-programs">
                <div className="no-results-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3>No training programs found</h3>
                <p>Try adjusting your search or browse different categories</p>
                {searchTerm && (
                  <button className="clear-search" onClick={() => setSearchTerm('')}>
                    Clear Search
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Career Resources Tab Content */}
      {activeTab === 'resources' && (
        <div className="resources-section">
          <div className="resources-header">
            <h2>Career Development Resources</h2>
            <p>Access tools, guides, and services to help you advance your career</p>
          </div>
          
          <div className="resources-grid">
            <div className="resource-card">
              <div className="resource-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <h3>Resume Building</h3>
              <p>Learn how to create an effective resume that highlights your skills and experience</p>
              <ul>
                <li>Resume templates and examples</li>
                <li>Tips for different industries</li>
                <li>Cover letter guidance</li>
                <li>Professional profile optimization</li>
              </ul>
              <a href="#" className="resource-link">Access Resources</a>
            </div>
            
            <div className="resource-card">
              <div className="resource-icon">
                <i className="fas fa-user-tie"></i>
              </div>
              <h3>Interview Preparation</h3>
              <p>Prepare for job interviews with tips, common questions, and practice sessions</p>
              <ul>
                <li>Common interview questions</li>
                <li>Industry-specific guidance</li>
                <li>Mock interview services</li>
                <li>Body language and presentation tips</li>
              </ul>
              <a href="#" className="resource-link">Access Resources</a>
            </div>
            
            <div className="resource-card">
              <div className="resource-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Career Planning</h3>
              <p>Plan your career path with assessment tools, guides, and personalized advice</p>
              <ul>
                <li>Skills assessment tests</li>
                <li>Career path exploration</li>
                <li>Goal setting frameworks</li>
                <li>Industry trends and insights</li>
              </ul>
              <a href="#" className="resource-link">Access Resources</a>
            </div>
            
            <div className="resource-card">
              <div className="resource-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3>Digital Skills</h3>
              <p>Develop essential digital skills for the modern workplace with online courses</p>
              <ul>
                <li>Basic computer skills</li>
                <li>Office productivity software</li>
                <li>Digital communication tools</li>
                <li>Industry-specific software training</li>
              </ul>
              <a href="#" className="resource-link">Access Resources</a>
            </div>
            
            <div className="resource-card">
              <div className="resource-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Networking</h3>
              <p>Learn effective networking strategies to connect with professionals in your field</p>
              <ul>
                <li>Networking event calendar</li>
                <li>Online networking platforms</li>
                <li>Conversation starters and tips</li>
                <li>Professional association directory</li>
              </ul>
              <a href="#" className="resource-link">Access Resources</a>
            </div>
            
            <div className="resource-card">
              <div className="resource-icon">
                <i className="fas fa-users-cog"></i>
              </div>
              <h3>Soft Skills Development</h3>
              <p>Enhance your communication, leadership, and teamwork skills for professional success</p>
              <ul>
                <li>Communication workshops</li>
                <li>Leadership development</li>
                <li>Conflict resolution techniques</li>
                <li>Time management strategies</li>
              </ul>
              <a href="#" className="resource-link">Access Resources</a>
            </div>
          </div>
          
          <div className="career-services">
            <h3>In-Person Career Services</h3>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-comments"></i>
                </div>
                <h4>Career Counseling</h4>
                <p>One-on-one sessions with career advisors</p>
                <p className="service-location">Available at: Employment Centers</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>
                <h4>Workshops & Seminars</h4>
                <p>Group sessions on various career topics</p>
                <p className="service-location">Available at: Community Centers</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-clipboard-check"></i>
                </div>
                <h4>Skill Assessment</h4>
                <p>Evaluate your skills and identify areas for growth</p>
                <p className="service-location">Available at: Training Centers</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-building"></i>
                </div>
                <h4>Job Fairs</h4>
                <p>Connect with multiple employers in one location</p>
                <p className="service-location">Available at: Various Locations</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Application Form Tab Content */}
      {activeTab === 'apply' && showApplicationForm && (
        <div className="application-section">
          <div className="application-header">
            <h2>Job Application Form</h2>
            <p>Complete this form to apply for job opportunities in your field of interest</p>
          </div>
          
          <div className="raise-container">
            {/* Form Card with Glassmorphism effect */}
            <div className="form-card">
              <div className="form-header">
                <div className="header-icon">
                  <i className="fas fa-file-signature"></i>
                </div>
                <h2>Job Application</h2>
                <p>Complete the form below to apply for available positions</p>
              </div>
              
              <form onSubmit={handleFormSubmit}>
                {/* Personal Information */}
                <div className="input-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    value={jobForm.fullName}
                    onChange={handleFormChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div className="input-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={jobForm.email}
                    onChange={handleFormChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                
                <div className="input-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={jobForm.phone}
                    onChange={handleFormChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                
                {/* Qualifications */}
                <div className="input-group">
                  <label htmlFor="qualification">Educational Qualification</label>
                  <input
                    type="text"
                    id="qualification"
                    value={jobForm.qualification}
                    onChange={handleFormChange}
                    placeholder="Highest qualification with specialization"
                    required
                  />
                </div>
                
                <div className="input-group">
                  <label htmlFor="experience">Years of Experience</label>
                  <input
                    type="text"
                    id="experience"
                    value={jobForm.experience}
                    onChange={handleFormChange}
                    placeholder="E.g., 2 years in software development"
                    required
                  />
                </div>
                
                <div className="input-group">
                  <label htmlFor="skills">Key Skills</label>
                  <textarea
                    id="skills"
                    value={jobForm.skills}
                    onChange={handleFormChange}
                    placeholder="List your relevant skills separated by commas"
                    required
                  ></textarea>
                </div>
                
                {/* Job Preferences */}
                <div className="input-group">
                  <label htmlFor="preferredLocation">Preferred Work Location</label>
                  <input
                    type="text"
                    id="preferredLocation"
                    value={jobForm.preferredLocation}
                    onChange={handleFormChange}
                    placeholder="E.g., Mumbai, Pune, Remote, etc."
                  />
                </div>
                
                <div className="input-group">
                  <label htmlFor="expectedSalary">Expected Salary</label>
                  <input
                    type="text"
                    id="expectedSalary"
                    value={jobForm.expectedSalary}
                    onChange={handleFormChange}
                    placeholder="E.g., ₹50,000 per month"
                  />
                </div>
                
                <div className="input-group">
                  <label htmlFor="noticePeriod">Notice Period</label>
                  <input
                    type="text"
                    id="noticePeriod"
                    value={jobForm.noticePeriod}
                    onChange={handleFormChange}
                    placeholder="E.g., 30 days, Immediate, etc."
                  />
                </div>
                
                {/* Resume & Cover Letter */}
                <div className="input-group">
                  <label htmlFor="resumeLink">Resume Link</label>
                  <input
                    type="url"
                    id="resumeLink"
                    value={jobForm.resumeLink}
                    onChange={handleFormChange}
                    placeholder="Google Drive or Dropbox link to your resume"
                  />
                </div>
                
                <div className="input-group">
                  <label htmlFor="coverLetter">Cover Letter / Statement of Interest</label>
                  <textarea
                    id="coverLetter"
                    value={jobForm.coverLetter}
                    onChange={handleFormChange}
                    placeholder="Briefly describe why you're interested and what makes you suitable"
                    rows="5"
                  ></textarea>
                </div>
                
                {/* Terms Agreement */}
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="termsAgree"
                    checked={jobForm.termsAgree}
                    onChange={handleFormChange}
                    required
                  />
                  <label htmlFor="termsAgree">
                    I declare that the information provided is true to the best of my knowledge. I understand that any false statements may result in rejection of my application.
                  </label>
                </div>
                
                {/* Submit Button */}
                <button type="submit" className="submit-btn">
                  Submit Application
                  <span className="icon">
                    <i className="fas fa-paper-plane"></i>
                  </span>
                </button>
              </form>
            </div>
            
            {/* Info Card */}
            <div className="info-card">
              <h3>Application Guidelines</h3>
              
              <ul className="benefits-list">
                <li>
                  <div className="benefit-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div className="benefit-text">
                    <strong>Complete Profile</strong> - Provide all requested information for best results
                  </div>
                </li>
                <li>
                  <div className="benefit-icon">
                    <i className="fas fa-file-pdf"></i>
                  </div>
                  <div className="benefit-text">
                    <strong>Resume Format</strong> - PDF format is preferred for resumes
                  </div>
                </li>
                <li>
                  <div className="benefit-icon">
                    <i className="fas fa-user-edit"></i>
                  </div>
                  <div className="benefit-text">
                    <strong>Personalize</strong> - Tailor your cover letter for specific positions
                  </div>
                </li>
                <li>
                  <div className="benefit-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="benefit-text">
                    <strong>Response Time</strong> - You'll receive a response within 7-10 working days
                  </div>
                </li>
                <li>
                  <div className="benefit-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="benefit-text">
                    <strong>Be Available</strong> - Keep your contact information current
                  </div>
                </li>
              </ul>
              
              <div className="application-process">
                <h4><i className="fas fa-clipboard-list"></i> Application Process</h4>
                <div className="process-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h5>Submit Application</h5>
                    <p>Complete the form with accurate information</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h5>Initial Screening</h5>
                    <p>Your application will be reviewed by HR</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h5>Assessment</h5>
                    <p>Qualified candidates may be asked to complete tests</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h5>Interview</h5>
                    <p>Selected candidates will be invited for interviews</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">5</div>
                  <div className="step-content">
                    <h5>Offer & Onboarding</h5>
                    <p>Successful candidates receive job offers</p>
                  </div>
                </div>
              </div>
              
              <div className="help-section">
                <h4><i className="fas fa-headset"></i> Need Assistance?</h4>
                <div className="help-options">
                  <div className="help-option">
                    <i className="fas fa-phone-alt"></i>
                    <div>
                      <p className="help-label">Helpline</p>
                      <p className="help-value">+91 1800-456-7890</p>
                    </div>
                  </div>
                  <div className="help-option">
                    <i className="fas fa-envelope"></i>
                    <div>
                      <p className="help-label">Email</p>
                      <p className="help-value">careers@civicspot.gov.in</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Job Statistics Section */}
      <div className="job-stats-section">
        <div className="stats-header">
          <h2>Employment Statistics</h2>
          <p>Key employment figures and trends in your community</p>
        </div>
        
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="stat-info">
              <h3>6,500+</h3>
              <p>Jobs Added This Quarter</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-building"></i>
            </div>
            <div className="stat-info">
              <h3>350+</h3>
              <p>Active Hiring Companies</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="stat-info">
              <h3>2,800+</h3>
              <p>Training Program Graduates</p>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <div className="stat-info">
              <h3>12%</h3>
              <p>Growth in Job Placements</p>
            </div>
          </div>
        </div>
      </div>

      {/* Employment Resources */}
      <div className="employment-resources">
        <h3>Additional Employment Resources</h3>
        
        <div className="resources-links">
          <a href="#" className="resource-link">
            <div className="resource-icon">
              <i className="fas fa-landmark"></i>
            </div>
            <h4>Government Employment Exchange</h4>
          </a>
          
          <a href="#" className="resource-link">
            <div className="resource-icon">
              <i className="fas fa-laptop"></i>
            </div>
            <h4>Online Job Portals</h4>
          </a>
          
          <a href="#" className="resource-link">
            <div className="resource-icon">
              <i className="fas fa-hands-helping"></i>
            </div>
            <h4>Career Counseling Services</h4>
          </a>
          
          <a href="#" className="resource-link">
            <div className="resource-icon">
              <i className="fas fa-wheelchair"></i>
            </div>
            <h4>Jobs for Persons with Disabilities</h4>
          </a>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="job-feedback">
        <div className="feedback-header">
          <h3>Help Us Improve Employment Services</h3>
          <p>Share your feedback and suggestions about job services in your community</p>
        </div>
        
        <button className="feedback-btn">
          <i className="fas fa-comment"></i>
          Submit Feedback
        </button>
      </div>
    </div>
  );
};

export default JobOpportunities;
