import React, { useState } from 'react';
import './SkillTraining.css';

const SkillTraining = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  
  // Form state for course registration
  const [registrationForm, setRegistrationForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    education: '',
    age: '',
    address: '',
    course: '',
    experience: '',
    expectation: '',
    referral: '',
    termsAgree: false
  });

  // Handle input change for form fields
  const handleFormChange = (e) => {
    const { id, value, type, checked } = e.target;
    setRegistrationForm({
      ...registrationForm,
      [id]: type === 'checkbox' ? checked : value
    });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Course registration submitted:', registrationForm);
    // Here you would typically send the form data to your backend
    alert('Your registration has been submitted successfully!');
  };

  // Skills training courses data
  const skillsCourses = {
    upcoming: [
      {
        id: 'up1',
        title: 'Web Development Bootcamp',
        category: 'Technology',
        duration: '12 Weeks',
        mode: 'Hybrid',
        startDate: '15 Sep 2025',
        fee: '₹12,000',
        eligibility: 'Basic computer knowledge',
        seats: 30,
        registrationOpen: true,
        featured: true,
        description: 'Comprehensive full-stack web development bootcamp covering HTML, CSS, JavaScript, React, Node.js and database management. Get industry-ready with practical projects and expert mentoring.',
        curriculum: [
          'HTML5, CSS3 and Responsive Design',
          'JavaScript Fundamentals and ES6+',
          'Front-end Development with React',
          'Back-end Development with Node.js',
          'Database Design with MongoDB & MySQL',
          'API Development and Integration',
          'Authentication and Security',
          'Deployment and DevOps Basics'
        ],
        benefits: [
          'Portfolio of 5+ real-world projects',
          'Industry mentorship from experienced developers',
          'Job placement assistance',
          'Internship opportunities with partner companies',
          'Lifetime access to course materials and updates'
        ],
        instructor: {
          name: 'Arjun Mehta',
          qualification: 'Senior Developer with 10+ years of industry experience',
          company: 'TechSolutions India'
        },
        testimonials: [
          {
            name: 'Priya Singh',
            review: 'This bootcamp completely transformed my career. I went from knowing nothing about coding to landing a job as a junior developer within 3 months of completion.',
            rating: 5
          }
        ]
      },
      {
        id: 'up2',
        title: 'Digital Marketing Masterclass',
        category: 'Marketing',
        duration: '8 Weeks',
        mode: 'Online',
        startDate: '20 Sep 2025',
        fee: '₹8,500',
        eligibility: 'No prerequisites',
        seats: 50,
        registrationOpen: true,
        featured: false,
        description: 'Comprehensive digital marketing program covering SEO, social media marketing, content strategy, email campaigns, PPC advertising, analytics and more. Learn to create and execute effective digital marketing strategies.',
        curriculum: [
          'Digital Marketing Fundamentals',
          'SEO and Search Engine Marketing',
          'Social Media Strategy and Management',
          'Content Marketing and Creation',
          'Email Marketing Campaigns',
          'Google Ads and PPC Advertising',
          'Analytics and Performance Tracking',
          'Marketing Automation'
        ],
        benefits: [
          'Google Digital Marketing Certification',
          'Portfolio of real marketing campaigns',
          'Access to premium marketing tools',
          'Networking opportunities with industry professionals',
          'One-on-one strategy sessions'
        ],
        instructor: {
          name: 'Neha Sharma',
          qualification: 'Digital Marketing Consultant',
          company: 'DigiGrowth Agency'
        },
        testimonials: [
          {
            name: 'Rahul Kumar',
            review: "The hands-on approach of this course made complex marketing concepts easy to understand and implement. I've seen a 40% increase in engagement for my small business.",
            rating: 5
          }
        ]
      },
      {
        id: 'up3',
        title: 'Hospitality Management Training',
        category: 'Service Industry',
        duration: '6 Weeks',
        mode: 'Offline',
        startDate: '10 Oct 2025',
        fee: '₹9,000',
        eligibility: '10+2 or equivalent',
        seats: 25,
        registrationOpen: true,
        featured: false,
        description: 'Professional training program designed for individuals seeking careers in the hospitality industry. Learn customer service excellence, operations management, food and beverage service, and hospitality business practices.',
        curriculum: [
          'Introduction to Hospitality Industry',
          'Front Office Operations',
          'Food and Beverage Service',
          'Housekeeping Management',
          'Customer Service Excellence',
          'Hotel Management Systems',
          'Event Planning and Coordination',
          'Hospitality Marketing'
        ],
        benefits: [
          'Hands-on training in partner hotels',
          'Certification recognized by Hospitality Association of India',
          'Direct placement opportunities',
          'Soft skills development',
          'Industry visits and practical exposure'
        ],
        instructor: {
          name: 'Vikram Singh',
          qualification: 'Former Hotel Manager',
          company: 'Grand Hospitality Group'
        },
        testimonials: [
          {
            name: 'Meera Patel',
            review: 'The practical approach and industry connections from this course helped me secure a position at a 5-star hotel immediately after completion.',
            rating: 4
          }
        ]
      },
      {
        id: 'up4',
        title: 'Mobile App Development',
        category: 'Technology',
        duration: '10 Weeks',
        mode: 'Hybrid',
        startDate: '5 Oct 2025',
        fee: '₹15,000',
        eligibility: 'Basic programming knowledge',
        seats: 25,
        registrationOpen: true,
        featured: true,
        description: 'Hands-on training in mobile application development covering both Android and iOS platforms. Learn to design, develop, test, and publish mobile apps using modern frameworks and best practices.',
        curriculum: [
          'Mobile UI/UX Design Principles',
          'Android Development with Java/Kotlin',
          'iOS Development with Swift',
          'Cross-Platform Development with React Native',
          'Mobile App Architecture',
          'API Integration and Data Management',
          'App Testing and Debugging',
          'App Store Deployment'
        ],
        benefits: [
          'Build and publish your own mobile app',
          'Access to development devices and tools',
          'App monetization strategies',
          'Personalized feedback on projects',
          'Post-course support for app publishing'
        ],
        instructor: {
          name: 'Rajiv Kapoor',
          qualification: 'Mobile Development Specialist',
          company: 'AppCraft Technologies'
        },
        testimonials: [
          {
            name: 'Ankit Joshi',
            review: 'This course provided excellent hands-on experience. I developed and published two apps during the training which greatly boosted my portfolio.',
            rating: 5
          }
        ]
      }
    ],
    ongoing: [
      {
        id: 'on1',
        title: 'Artificial Intelligence & Machine Learning',
        category: 'Technology',
        duration: '16 Weeks',
        mode: 'Hybrid',
        startDate: '10 Jul 2025',
        endDate: '30 Oct 2025',
        fee: '₹25,000',
        progress: '60% Complete',
        description: 'Advanced course covering machine learning algorithms, neural networks, deep learning, and practical AI applications. Build intelligent systems and data-driven solutions for real-world problems.',
        currentModule: 'Deep Learning and Neural Networks',
        upcoming: 'Natural Language Processing',
        instructor: {
          name: 'Dr. Amit Kumar',
          qualification: 'PhD in Computer Science',
          company: 'AI Research Institute'
        },
        achievements: [
          'Successful completion of 3 machine learning projects',
          '85% average score in weekly assessments',
          'Team project selected for national AI competition'
        ]
      },
      {
        id: 'on2',
        title: 'Advanced Financial Accounting',
        category: 'Finance',
        duration: '10 Weeks',
        mode: 'Online',
        startDate: '1 Aug 2025',
        endDate: '10 Oct 2025',
        fee: '₹12,000',
        progress: '50% Complete',
        description: 'Comprehensive course on advanced financial accounting principles, corporate accounting, financial reporting standards, and accounting for complex business transactions.',
        currentModule: 'Corporate Financial Reporting',
        upcoming: 'Consolidated Financial Statements',
        instructor: {
          name: 'CA Priya Mehta',
          qualification: 'Chartered Accountant',
          company: 'Financial Excellence Institute'
        },
        achievements: [
          'Practical implementation of accounting standards',
          'Successfully completed mid-term case study',
          'Developed financial analysis skills through real company reports'
        ]
      }
    ],
    completed: [
      {
        id: 'comp1',
        title: 'Graphic Design Masterclass',
        category: 'Design',
        duration: '8 Weeks',
        completedOn: 'July 2025',
        participants: 35,
        successRate: '92%',
        description: 'Comprehensive graphic design course covering visual principles, typography, color theory, digital design tools, branding, and portfolio development.',
        outcomes: [
          'Portfolio development with 10+ professional projects',
          'Mastery of Adobe Creative Suite',
          'Understanding of design principles and client communication',
          'Branding strategy and implementation',
          'Print and digital design techniques'
        ],
        successStories: [
          {
            name: 'Kavita Sharma',
            achievement: 'Started freelance design business with 5 clients',
            testimonial: 'This course gave me the confidence and skills to transition from a hobbyist to a professional designer. The practical assignments were invaluable.'
          },
          {
            name: 'Aditya Patel',
            achievement: 'Hired as Junior Designer at Creative Solutions',
            testimonial: 'The portfolio I built during this course helped me stand out in interviews and showcase my abilities to potential employers.'
          }
        ]
      },
      {
        id: 'comp2',
        title: 'Professional Culinary Arts',
        category: 'Food & Hospitality',
        duration: '12 Weeks',
        completedOn: 'June 2025',
        participants: 20,
        successRate: '95%',
        description: 'Hands-on culinary training program covering cooking techniques, food preparation, menu planning, kitchen management, and food presentation.',
        outcomes: [
          'Mastery of essential cooking techniques',
          'Menu development and food costing skills',
          'Kitchen safety and management',
          'Food presentation and plating design',
          'Culinary business fundamentals'
        ],
        successStories: [
          {
            name: 'Rahul Singh',
            achievement: 'Opened a catering business',
            testimonial: 'The practical skills and business knowledge I gained gave me the confidence to start my own successful catering service.'
          },
          {
            name: 'Nisha Jain',
            achievement: 'Promoted to Sous Chef at Taj Hotel',
            testimonial: 'The advanced techniques taught in this course helped me improve my skills and advance my career in a prestigious hotel.'
          }
        ]
      }
    ]
  };

  // Industry partners data
  const partners = [
    {
      name: 'TechSolutions India',
      type: 'Technology',
      logo: 'tech-solutions-logo.png',
      collaboration: 'Internship placements and curriculum guidance'
    },
    {
      name: 'Grand Hospitality Group',
      type: 'Hospitality',
      logo: 'grand-hospitality-logo.png',
      collaboration: 'Practical training and job placements'
    },
    {
      name: 'Creative Design Studio',
      type: 'Design',
      logo: 'creative-design-logo.png',
      collaboration: 'Workshop facilitation and portfolio reviews'
    },
    {
      name: 'FinEx Consultancy',
      type: 'Finance',
      logo: 'finex-logo.png',
      collaboration: 'Expert lectures and certification'
    },
    {
      name: 'Digital Growth Marketing',
      type: 'Marketing',
      logo: 'dgm-logo.png',
      collaboration: 'Live project opportunities and mentorship'
    }
  ];

  // Success metrics data
  const successMetrics = [
    { label: 'Trained Participants', value: '5,000+', icon: 'users' },
    { label: 'Placement Rate', value: '85%', icon: 'briefcase' },
    { label: 'Courses Offered', value: '50+', icon: 'book-open' },
    { label: 'Industry Partners', value: '30+', icon: 'handshake' }
  ];

  // Filter courses based on search term and active filter
  const filteredCourses = () => {
    let courses = [];
    if (activeTab === 'courses') {
      courses = [...skillsCourses.upcoming];
    } else if (activeTab === 'ongoing') {
      courses = [...skillsCourses.ongoing];
    } else if (activeTab === 'completed') {
      courses = [...skillsCourses.completed];
    }

    if (activeFilter !== 'all') {
      courses = courses.filter(course => {
        if (activeFilter === 'tech' && ['Technology'].includes(course.category)) return true;
        if (activeFilter === 'business' && ['Marketing', 'Finance'].includes(course.category)) return true;
        if (activeFilter === 'design' && ['Design'].includes(course.category)) return true;
        if (activeFilter === 'service' && ['Service Industry', 'Food & Hospitality'].includes(course.category)) return true;
        return false;
      });
    }

    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      courses = courses.filter(course => 
        course.title.toLowerCase().includes(term) || 
        course.category.toLowerCase().includes(term) ||
        course.description.toLowerCase().includes(term)
      );
    }

    return courses;
  };

  // Toggle course expansion
  const toggleCourseExpansion = (id) => {
    if (expandedCourse === id) {
      setExpandedCourse(null);
    } else {
      setExpandedCourse(id);
    }
  };

  // Handle course registration
  const handleRegisterCourse = (courseTitle) => {
    setRegistrationForm({
      ...registrationForm,
      course: courseTitle
    });
    setActiveTab('register');
    setShowRegistrationForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="skills-container">
      {/* Header Section */}
      <div className="skills-header">
        <div className="header-content">
          <h1>Skills Training Programs</h1>
          <p>Develop your skills, enhance your career prospects, and unlock new opportunities</p>
          <div className="search-container">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search for courses, skills, or categories..." 
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
      <div className="skills-tabs">
        <button 
          className={`tab-btn ${activeTab === 'courses' ? 'active' : ''}`}
          onClick={() => setActiveTab('courses')}
        >
          <i className="fas fa-chalkboard-teacher"></i> Upcoming Courses
        </button>
        <button 
          className={`tab-btn ${activeTab === 'ongoing' ? 'active' : ''}`}
          onClick={() => setActiveTab('ongoing')}
        >
          <i className="fas fa-spinner"></i> Ongoing Programs
        </button>
        <button 
          className={`tab-btn ${activeTab === 'completed' ? 'active' : ''}`}
          onClick={() => setActiveTab('completed')}
        >
          <i className="fas fa-check-circle"></i> Completed Batches
        </button>
        <button 
          className={`tab-btn ${activeTab === 'partners' ? 'active' : ''}`}
          onClick={() => setActiveTab('partners')}
        >
          <i className="fas fa-handshake"></i> Industry Partners
        </button>
        <button 
          className={`tab-btn ${activeTab === 'register' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('register');
            setShowRegistrationForm(true);
          }}
        >
          <i className="fas fa-user-plus"></i> Register for Course
        </button>
      </div>

      {/* Sub-filters for Courses */}
      {(activeTab === 'courses' || activeTab === 'ongoing' || activeTab === 'completed') && (
        <div className="course-filters">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Categories
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'tech' ? 'active' : ''}`}
            onClick={() => setActiveFilter('tech')}
          >
            Technology
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'business' ? 'active' : ''}`}
            onClick={() => setActiveFilter('business')}
          >
            Business & Marketing
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'design' ? 'active' : ''}`}
            onClick={() => setActiveFilter('design')}
          >
            Design & Creative
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'service' ? 'active' : ''}`}
            onClick={() => setActiveFilter('service')}
          >
            Service Industry
          </button>
        </div>
      )}

      {/* Upcoming Courses Tab Content */}
      {activeTab === 'courses' && (
        <div className="courses-section">
          <div className="section-header">
            <h2>Upcoming Training Programs</h2>
            <p>Expand your skills with our upcoming courses and certifications</p>
          </div>

          {filteredCourses().length > 0 ? (
            <div className="courses-grid">
              {filteredCourses().map((course) => (
                <div className={`course-card ${course.featured ? 'featured-card' : ''}`} key={course.id}>
                  {course.featured && (
                    <div className="featured-badge">
                      <i className="fas fa-star"></i> Featured
                    </div>
                  )}
                  
                  <div className="course-header">
                    <h3>{course.title}</h3>
                    <span className="course-category">
                      {course.category}
                    </span>
                  </div>
                  
                  <div className="course-info">
                    <div className="info-item">
                      <i className="fas fa-clock"></i>
                      <span>{course.duration}</span>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-calendar-alt"></i>
                      <span>Starts: {course.startDate}</span>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-laptop"></i>
                      <span>Mode: {course.mode}</span>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-rupee-sign"></i>
                      <span>Fee: {course.fee}</span>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-user-graduate"></i>
                      <span>Eligibility: {course.eligibility}</span>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-users"></i>
                      <span>Seats: {course.seats}</span>
                    </div>
                  </div>

                  <p className="course-desc">{course.description}</p>
                  
                  <div className="course-actions">
                    <button 
                      className="details-btn"
                      onClick={() => toggleCourseExpansion(course.id)}
                    >
                      {expandedCourse === course.id ? 'Less Details' : 'More Details'}
                      <i className={`fas fa-chevron-${expandedCourse === course.id ? 'up' : 'down'}`}></i>
                    </button>
                    {course.registrationOpen && (
                      <button 
                        className="register-btn" 
                        onClick={() => handleRegisterCourse(course.title)}
                      >
                        <i className="fas fa-user-plus"></i> Register
                      </button>
                    )}
                  </div>
                  
                  {expandedCourse === course.id && (
                    <div className="course-details">
                      <div className="details-section">
                        <h4>Curriculum Highlights</h4>
                        <ul className="curriculum-list">
                          {course.curriculum.map((item, index) => (
                            <li key={index}>
                              <i className="fas fa-check-circle"></i>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="details-section">
                        <h4>Benefits</h4>
                        <ul className="benefits-list">
                          {course.benefits.map((benefit, index) => (
                            <li key={index}>
                              <i className="fas fa-trophy"></i>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="instructor-section">
                        <h4>Your Instructor</h4>
                        <div className="instructor-info">
                          <div className="instructor-avatar">
                            <i className="fas fa-user-tie"></i>
                          </div>
                          <div className="instructor-details">
                            <h5>{course.instructor.name}</h5>
                            <p className="instructor-qualification">{course.instructor.qualification}</p>
                            <p className="instructor-company">{course.instructor.company}</p>
                          </div>
                        </div>
                      </div>
                      
                      {course.testimonials && course.testimonials.length > 0 && (
                        <div className="testimonial-section">
                          <h4>Student Feedback</h4>
                          <div className="testimonial">
                            <div className="rating">
                              {Array(5).fill(0).map((_, i) => (
                                <i key={i} className={`fas fa-star ${i < course.testimonials[0].rating ? 'filled' : ''}`}></i>
                              ))}
                            </div>
                            <p>"{course.testimonials[0].review}"</p>
                            <span className="testimonial-author">- {course.testimonials[0].name}</span>
                          </div>
                        </div>
                      )}
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
              <h3>No courses found</h3>
              <p>Try adjusting your search or filters to find what you're looking for.</p>
            </div>
          )}
        </div>
      )}

      {/* Ongoing Programs Tab Content */}
      {activeTab === 'ongoing' && (
        <div className="courses-section">
          <div className="section-header">
            <h2>Ongoing Training Programs</h2>
            <p>Current programs in progress</p>
          </div>

          {filteredCourses().length > 0 ? (
            <div className="courses-grid">
              {filteredCourses().map((course) => (
                <div className="course-card ongoing-card" key={course.id}>
                  <div className="course-header">
                    <h3>{course.title}</h3>
                    <span className="course-category">
                      {course.category}
                    </span>
                  </div>
                  
                  <div className="course-info">
                    <div className="info-item">
                      <i className="fas fa-clock"></i>
                      <span>{course.duration}</span>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-calendar-alt"></i>
                      <span>{course.startDate} - {course.endDate}</span>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-rupee-sign"></i>
                      <span>Fee: {course.fee}</span>
                    </div>
                    <div className="progress-container">
                      <div className="progress-label">Progress</div>
                      <div className="progress-bar">
                        <div 
                          className="progress" 
                          style={{width: course.progress.split('%')[0] + '%'}}
                        ></div>
                      </div>
                      <div className="progress-percentage">{course.progress}</div>
                    </div>
                  </div>

                  <p className="course-desc">{course.description}</p>
                  
                  <button 
                    className="details-btn"
                    onClick={() => toggleCourseExpansion(course.id)}
                  >
                    {expandedCourse === course.id ? 'Less Details' : 'More Details'}
                    <i className={`fas fa-chevron-${expandedCourse === course.id ? 'up' : 'down'}`}></i>
                  </button>
                  
                  {expandedCourse === course.id && (
                    <div className="course-details">
                      <div className="current-status">
                        <div className="status-item">
                          <h5>Current Module</h5>
                          <p>{course.currentModule}</p>
                        </div>
                        <div className="status-item">
                          <h5>Upcoming Module</h5>
                          <p>{course.upcoming}</p>
                        </div>
                      </div>
                      
                      <div className="instructor-section">
                        <h4>Instructor</h4>
                        <div className="instructor-info">
                          <div className="instructor-avatar">
                            <i className="fas fa-user-tie"></i>
                          </div>
                          <div className="instructor-details">
                            <h5>{course.instructor.name}</h5>
                            <p className="instructor-qualification">{course.instructor.qualification}</p>
                            <p className="instructor-company">{course.instructor.company}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="details-section">
                        <h4>Course Achievements</h4>
                        <ul className="achievements-list">
                          {course.achievements.map((achievement, index) => (
                            <li key={index}>
                              <i className="fas fa-medal"></i>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
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
              <h3>No ongoing programs found</h3>
              <p>Try adjusting your search or filters to find what you're looking for.</p>
            </div>
          )}
        </div>
      )}

      {/* Completed Batches Tab Content */}
      {activeTab === 'completed' && (
        <div className="courses-section">
          <div className="section-header">
            <h2>Completed Training Programs</h2>
            <p>Success stories from our past training programs</p>
          </div>

          {filteredCourses().length > 0 ? (
            <div className="courses-grid">
              {filteredCourses().map((course) => (
                <div className="course-card completed-card" key={course.id}>
                  <div className="course-header">
                    <h3>{course.title}</h3>
                    <span className="course-category">
                      {course.category}
                    </span>
                  </div>
                  
                  <div className="course-info">
                    <div className="info-item">
                      <i className="fas fa-clock"></i>
                      <span>{course.duration}</span>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-calendar-check"></i>
                      <span>Completed: {course.completedOn}</span>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-users"></i>
                      <span>Participants: {course.participants}</span>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-chart-line"></i>
                      <span>Success Rate: {course.successRate}</span>
                    </div>
                  </div>

                  <p className="course-desc">{course.description}</p>
                  
                  <button 
                    className="details-btn"
                    onClick={() => toggleCourseExpansion(course.id)}
                  >
                    {expandedCourse === course.id ? 'Less Details' : 'More Details'}
                    <i className={`fas fa-chevron-${expandedCourse === course.id ? 'up' : 'down'}`}></i>
                  </button>
                  
                  {expandedCourse === course.id && (
                    <div className="course-details">
                      <div className="details-section">
                        <h4>Key Outcomes</h4>
                        <ul className="outcomes-list">
                          {course.outcomes.map((outcome, index) => (
                            <li key={index}>
                              <i className="fas fa-check-circle"></i>
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="success-stories">
                        <h4>Success Stories</h4>
                        {course.successStories.map((story, index) => (
                          <div className="success-story" key={index}>
                            <h5>{story.name}</h5>
                            <div className="achievement">
                              <i className="fas fa-trophy"></i>
                              <span>{story.achievement}</span>
                            </div>
                            <p className="testimonial">"{story.testimonial}"</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="gallery-placeholder">
                        <h4>Training Gallery</h4>
                        <div className="gallery-teaser">
                          <i className="fas fa-images"></i>
                          <p>View photo gallery of this training program</p>
                          <button className="view-gallery-btn">View Gallery</button>
                        </div>
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
              <h3>No completed programs found</h3>
              <p>Try adjusting your search or filters to find what you're looking for.</p>
            </div>
          )}
        </div>
      )}

      {/* Industry Partners Tab Content */}
      {activeTab === 'partners' && (
        <div className="partners-section">
          <div className="section-header">
            <h2>Our Industry Partners</h2>
            <p>Organizations that collaborate with our skills training programs</p>
          </div>

          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div className="partner-card" key={index}>
                <div className="partner-logo">
                  <i className={`fas fa-${partner.type === 'Technology' ? 'laptop-code' : 
                                partner.type === 'Hospitality' ? 'hotel' : 
                                partner.type === 'Design' ? 'palette' : 
                                partner.type === 'Finance' ? 'chart-line' : 'bullhorn'}`}></i>
                </div>
                <h3>{partner.name}</h3>
                <p className="partner-type">{partner.type}</p>
                <p className="partner-collab">{partner.collaboration}</p>
                <button className="partner-btn">Learn More</button>
              </div>
            ))}
          </div>

          <div className="become-partner">
            <div className="partner-cta">
              <div className="cta-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <div className="cta-content">
                <h3>Become Our Industry Partner</h3>
                <p>Collaborate with us to nurture talent and create employment opportunities</p>
                <button className="cta-btn">Partner With Us</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Registration Form Tab Content */}
      {activeTab === 'register' && showRegistrationForm && (
        <div className="registration-section">
          <div className="report-header">
            <h2>Course Registration</h2>
            <p>Fill out the form below to register for a training program</p>
          </div>
          
          <div className="raise-container">
            {/* Form Card with Glassmorphism effect */}
            <div className="form-card">
              <div className="form-header">
                <div className="header-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h2>Skill Training Registration</h2>
                <p>{registrationForm.course ? `Registration for: ${registrationForm.course}` : 'Select your preferred course'}</p>
              </div>
              
              <form onSubmit={handleFormSubmit}>
                <div className="input-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    placeholder="Enter your full name" 
                    value={registrationForm.fullName}
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
                      value={registrationForm.email}
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
                      value={registrationForm.phone}
                      onChange={handleFormChange}
                      required 
                    />
                  </div>
                </div>
                
                <div className="input-row">
                  <div className="input-group">
                    <label htmlFor="age">Age</label>
                    <input 
                      type="number" 
                      id="age" 
                      placeholder="Enter your age" 
                      value={registrationForm.age}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  
                  <div className="input-group">
                    <label htmlFor="education">Highest Education</label>
                    <select 
                      id="education" 
                      className="styled-select"
                      value={registrationForm.education}
                      onChange={handleFormChange}
                      required
                    >
                      <option value="">Select education level</option>
                      <option value="10th">10th Standard</option>
                      <option value="12th">12th Standard</option>
                      <option value="diploma">Diploma</option>
                      <option value="graduate">Graduation</option>
                      <option value="postgraduate">Post Graduation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="input-group">
                  <label htmlFor="address">Address</label>
                  <textarea 
                    id="address" 
                    rows="2" 
                    placeholder="Enter your complete address" 
                    value={registrationForm.address}
                    onChange={handleFormChange}
                    required
                  ></textarea>
                </div>
                
                {!registrationForm.course && (
                  <div className="input-group">
                    <label htmlFor="course">Preferred Course</label>
                    <select 
                      id="course" 
                      className="styled-select"
                      value={registrationForm.course}
                      onChange={handleFormChange}
                      required
                    >
                      <option value="">Select a course</option>
                      {skillsCourses.upcoming.map((course) => (
                        <option key={course.id} value={course.title}>
                          {course.title} ({course.startDate})
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                
                <div className="input-group">
                  <label htmlFor="experience">Relevant Experience (if any)</label>
                  <textarea 
                    id="experience" 
                    rows="3" 
                    placeholder="Please describe any relevant experience you have in this field" 
                    value={registrationForm.experience}
                    onChange={handleFormChange}
                  ></textarea>
                </div>
                
                <div className="input-group">
                  <label htmlFor="expectation">What do you expect to learn from this course?</label>
                  <textarea 
                    id="expectation" 
                    rows="3" 
                    placeholder="Please describe your expectations from this training program" 
                    value={registrationForm.expectation}
                    onChange={handleFormChange}
                    required
                  ></textarea>
                </div>
                
                <div className="input-group">
                  <label htmlFor="referral">How did you hear about us?</label>
                  <select 
                    id="referral" 
                    className="styled-select"
                    value={registrationForm.referral}
                    onChange={handleFormChange}
                  >
                    <option value="">Select an option</option>
                    <option value="friend">Friend/Family</option>
                    <option value="social">Social Media</option>
                    <option value="website">Website</option>
                    <option value="newspaper">Newspaper</option>
                    <option value="event">Event/Workshop</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="checkbox-group">
                  <input 
                    type="checkbox" 
                    id="termsAgree" 
                    checked={registrationForm.termsAgree}
                    onChange={handleFormChange}
                    required 
                  />
                  <label htmlFor="termsAgree">
                    I agree to the terms and conditions and understand that my information will be processed as described in the privacy policy
                  </label>
                </div>
                
                <div className="form-actions">
                  <button type="submit" className="submit-btn">
                    Submit Registration
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </form>
              
              <div className="form-footer">
                <div className="footer-note">
                  <i className="fas fa-info-circle"></i>
                  <p>After submitting your registration, you will receive a confirmation email with further details about the course, payment options, and orientation schedule.</p>
                </div>
                
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
                      <p className="help-value">training@civicspot.gov.in</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Metrics Section */}
      <div className="metrics-section">
        <div className="metrics-header">
          <h2>Our Impact</h2>
          <p>Making a difference through quality skills training</p>
        </div>
        
        <div className="metrics-grid">
          {successMetrics.map((metric, index) => (
            <div className="metric-card" key={index}>
              <div className="metric-icon">
                <i className={`fas fa-${metric.icon}`}></i>
              </div>
              <div className="metric-info">
                <h3>{metric.value}</h3>
                <p>{metric.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resources Section */}
      <div className="resources-section">
        <div className="resources-header">
          <h2>Learning Resources</h2>
          <p>Access additional resources to support your learning journey</p>
        </div>
        
        <div className="resources-grid">
          <div className="resource-card">
            <div className="resource-icon">
              <i className="fas fa-book"></i>
            </div>
            <h3>Free E-Books</h3>
            <p>Download free educational materials and e-books</p>
            <button className="resource-btn">Browse Library</button>
          </div>
          
          <div className="resource-card">
            <div className="resource-icon">
              <i className="fas fa-video"></i>
            </div>
            <h3>Video Tutorials</h3>
            <p>Watch instructional videos and tutorials</p>
            <button className="resource-btn">Watch Videos</button>
          </div>
          
          <div className="resource-card">
            <div className="resource-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <h3>Practice Tests</h3>
            <p>Test your knowledge with practice assessments</p>
            <button className="resource-btn">Take Test</button>
          </div>
          
          <div className="resource-card">
            <div className="resource-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Community Forum</h3>
            <p>Connect with peers and instructors</p>
            <button className="resource-btn">Join Forum</button>
          </div>
        </div>
      </div>

      {/* Testimonials Carousel Placeholder */}
      <div className="testimonials-section">
        <div className="testimonials-header">
          <h2>Success Stories</h2>
          <p>Hear from our past participants about their journey</p>
        </div>
        
        <div className="testimonials-carousel">
          <div className="testimonial-card">
            <div className="testimonial-image">
              <i className="fas fa-user-circle"></i>
            </div>
            <div className="testimonial-content">
              <p>"The digital marketing course completely transformed my career. I went from struggling to find direction to running successful campaigns for clients within months."</p>
              <div className="testimonial-info">
                <h4>Meera Sharma</h4>
                <p>Digital Marketer, Now employed at TechSolutions</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="carousel-controls">
          <button className="carousel-control prev">
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="carousel-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <button className="carousel-control next">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Answers to common questions about our training programs</p>
        </div>
        
        <div className="faq-grid">
          <div className="faq-item">
            <div className="faq-question">
              <h4>How do I register for a course?</h4>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="faq-answer">
              <p>You can register for a course through our online registration form or by visiting our center in person. Click on the "Register for Course" tab above to access the online registration form.</p>
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question">
              <h4>Are there scholarships available?</h4>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="faq-answer">
              <p>Yes, we offer scholarships based on merit and financial need. Additionally, government schemes may cover part or all of the course fee for eligible candidates.</p>
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question">
              <h4>Do you offer job placement?</h4>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="faq-answer">
              <p>We provide job placement assistance to all our students. We have partnerships with various companies and conduct regular placement drives for our students.</p>
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question">
              <h4>Can I get a certificate after completion?</h4>
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="faq-answer">
              <p>Yes, all participants receive a certificate upon successful completion of the course. Many of our courses also offer industry-recognized certifications.</p>
            </div>
          </div>
        </div>
        
        <div className="more-questions">
          <p>Still have questions?</p>
          <button className="contact-btn">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default SkillTraining;
