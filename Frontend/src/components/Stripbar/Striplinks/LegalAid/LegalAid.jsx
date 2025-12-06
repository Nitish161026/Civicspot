import React, { useState } from 'react';
import './LegalAid.css';
import { 
  FaGavel, 
  FaUserTie, 
  FaFileContract, 
  FaBalanceScale, 
  FaHandshake,
  FaShieldAlt,
  FaBuilding,
  FaCalendarAlt,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaSearch
} from 'react-icons/fa';

const LegalAid = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [activeServiceFilter, setActiveServiceFilter] = useState('all');
  const [activeLawyerFilter, setActiveLawyerFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedService, setExpandedService] = useState(null);
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  
  // Form state for the consultation request
  const [consultationForm, setConsultationForm] = useState({
    fullName: '',
    dob: '',
    gender: '',
    mobileNumber: '',
    email: '',
    address: '',
    caseType: '',
    caseDetails: '',
    preferredDate: '',
    preferredTime: '',
    termsAgree: false,
    consentAgree: false
  });

  // Handle input change
  const handleFormChange = (e) => {
    const { id, value, type, checked } = e.target;
    setConsultationForm({
      ...consultationForm,
      [id]: type === 'checkbox' ? checked : value
    });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Legal consultation form submitted:', consultationForm);
    // Here you would typically send the form data to your backend
    alert('Your legal consultation request has been submitted successfully!');
    setShowConsultationForm(false);
  };

  // Legal services data
  const legalServices = {
    free: [
      {
        id: 's1',
        title: 'Free Legal Aid Clinic',
        provider: 'District Legal Services Authority',
        location: 'District Court Complex, Main City',
        type: 'General Legal Aid',
        timing: 'Mon-Sat, 10:00 AM - 5:00 PM',
        eligibility: 'Income below ₹3 lakhs per annum, SC/ST, women, children, persons with disabilities',
        image: 'legal1',
        services: ['Legal Advice', 'Court Representation', 'Document Drafting', 'Mediation Services'],
        description: 'Free legal assistance provided by the government for economically disadvantaged sections of society. Services include legal consultation, representation in court, and document preparation.',
        contact: {
          name: 'District Legal Services Authority',
          phone: '+91 1800 123 4567',
          email: 'dlsa@legalservices.gov.in'
        }
      },
      {
        id: 's2',
        title: 'Women\'s Legal Aid Cell',
        provider: 'State Commission for Women',
        location: 'City Center, Near Police Headquarters',
        type: 'Women-specific Legal Aid',
        timing: 'Mon-Fri, 9:00 AM - 4:00 PM',
        eligibility: 'All women irrespective of income',
        image: 'legal2',
        services: ['Domestic Violence Cases', 'Divorce & Maintenance', 'Workplace Harassment', 'Property Rights'],
        description: 'Specialized legal aid services for women facing various legal issues including domestic violence, divorce, maintenance, property disputes and workplace harassment.',
        contact: {
          name: 'State Commission for Women',
          phone: '+91 98765 43210',
          email: 'women.legalaid@scw.org.in'
        }
      },
      {
        id: 's3',
        title: 'Senior Citizen Legal Help Desk',
        provider: 'Elder Rights Association',
        location: 'Community Center, East District',
        type: 'Senior Citizen Legal Aid',
        timing: 'Tue & Thu, 10:00 AM - 2:00 PM',
        eligibility: 'Senior citizens aged 60 and above',
        image: 'legal3',
        services: ['Property Disputes', 'Will & Testament', 'Pension Issues', 'Elder Abuse Cases'],
        description: 'Free legal assistance for senior citizens dealing with property disputes, will creation, pension problems, and cases of elder abuse or neglect.',
        contact: {
          name: 'Elder Rights Association',
          phone: '+91 87654 32109',
          email: 'help@elderrights.org'
        }
      }
    ],
    ngo: [
      {
        id: 'n1',
        title: 'People\'s Rights Foundation',
        provider: 'NGO',
        location: 'South District, Civil Lines',
        type: 'Human Rights Legal Aid',
        timing: 'Mon-Sat, 9:00 AM - 6:00 PM',
        eligibility: 'Open to all, focus on marginalized communities',
        image: 'legal4',
        services: ['Human Rights Cases', 'Public Interest Litigation', 'Legal Awareness Camps', 'Research & Advocacy'],
        description: 'Non-profit organization providing legal assistance for human rights violations, conducting legal awareness programs, and engaging in policy advocacy.',
        contact: {
          name: 'People\'s Rights Foundation',
          phone: '+91 76543 21098',
          email: 'contact@prf.org'
        }
      },
      {
        id: 'n2',
        title: 'Child Rights Legal Center',
        provider: 'NGO',
        location: 'West District, Near Children\'s Park',
        type: 'Child-focused Legal Aid',
        timing: 'Mon-Fri, 10:00 AM - 5:00 PM',
        eligibility: 'Children and their guardians',
        image: 'legal5',
        services: ['Child Rights Protection', 'Juvenile Justice', 'Education Rights', 'Child Labor Cases'],
        description: 'Dedicated legal support for children\'s rights issues, including education rights, protection from abuse, juvenile justice, and child labor cases.',
        contact: {
          name: 'Child Rights Legal Center',
          phone: '+91 65432 10987',
          email: 'info@childlegal.org'
        }
      }
    ],
    university: [
      {
        id: 'u1',
        title: 'University Law Clinic',
        provider: 'City Law University',
        location: 'University Campus, North District',
        type: 'Academic Legal Aid',
        timing: 'Wed & Fri, 2:00 PM - 6:00 PM',
        eligibility: 'Open to all, preference to low-income individuals',
        image: 'legal6',
        services: ['Legal Consultation', 'Document Review', 'Legal Research', 'Alternative Dispute Resolution'],
        description: 'Legal aid clinic run by law students under faculty supervision, providing basic legal advice, document review, and research assistance.',
        contact: {
          name: 'University Law Clinic',
          phone: '+91 54321 09876',
          email: 'lawclinic@citylawuniversity.edu'
        }
      }
    ]
  };

  // Lawyers data
  const lawyers = {
    pro_bono: [
      {
        id: 'pb1',
        name: 'Adv. Rajesh Kumar',
        specialization: 'Criminal Law',
        experience: '15 years',
        languages: 'Hindi, English',
        availability: 'Mon & Wed, 3:00 PM - 6:00 PM',
        contact: '+91 98765 43210',
        image: 'lawyer1'
      },
      {
        id: 'pb2',
        name: 'Adv. Priya Sharma',
        specialization: 'Family Law',
        experience: '12 years',
        languages: 'Hindi, English, Marathi',
        availability: 'Tue & Thu, 4:00 PM - 7:00 PM',
        contact: '+91 87654 32109',
        image: 'lawyer2'
      }
    ],
    panel: [
      {
        id: 'p1',
        name: 'Adv. Suresh Patel',
        specialization: 'Property Law',
        experience: '18 years',
        languages: 'Hindi, English, Gujarati',
        availability: 'Mon-Fri, 10:00 AM - 5:00 PM',
        contact: '+91 76543 21098',
        image: 'lawyer3'
      },
      {
        id: 'p2',
        name: 'Adv. Aisha Khan',
        specialization: 'Constitutional Law',
        experience: '20 years',
        languages: 'Hindi, English, Urdu',
        availability: 'Mon, Wed, Fri, 11:00 AM - 4:00 PM',
        contact: '+91 65432 10987',
        image: 'lawyer4'
      }
    ],
    specialized: [
      {
        id: 's1',
        name: 'Adv. Meenakshi Iyer',
        specialization: 'Women\'s Rights',
        experience: '14 years',
        languages: 'Hindi, English, Tamil',
        availability: 'Tue & Thu, 10:00 AM - 3:00 PM',
        contact: '+91 54321 09876',
        image: 'lawyer5'
      },
      {
        id: 's2',
        name: 'Adv. Vikram Singh',
        specialization: 'Labor & Employment',
        experience: '16 years',
        languages: 'Hindi, English, Punjabi',
        availability: 'Mon, Wed, Fri, 2:00 PM - 6:00 PM',
        contact: '+91 43210 98765',
        image: 'lawyer6'
      }
    ]
  };

  // Legal aid schemes data
  const legalAidSchemes = [
    {
      id: 'scheme1',
      title: 'National Legal Services Authority (NALSA)',
      description: 'Free legal services to the eligible candidates as per Section 12 of the Legal Services Authority Act',
      benefits: [
        'Free legal representation in court',
        'Legal consultation and advice',
        'Financial assistance for court fees and other expenses',
        'Alternative Dispute Resolution services'
      ],
      eligibility: 'Income below eligibility limit (currently ₹3 lakhs p.a.), SC/ST, women, children, disabled persons, victims of trafficking, disaster victims, industrial workmen',
      deadline: 'Ongoing',
      contact: {
        phone: '1516',
        email: 'nalsa-dla@nic.in'
      }
    },
    {
      id: 'scheme2',
      title: 'Nyaya Mitra Scheme',
      description: 'Initiative to facilitate expeditious disposal of cases pending in courts for more than 10 years',
      benefits: [
        'Assistance in case resolution',
        'Connection with appropriate legal aid service providers',
        'Monitoring and follow-up of cases'
      ],
      eligibility: 'Cases pending for more than 10 years, especially involving marginalized communities',
      deadline: 'Ongoing',
      contact: {
        phone: '1800 123 1221',
        email: 'nyayamitra@gov.in'
      }
    },
    {
      id: 'scheme3',
      title: 'Pro Bono Legal Services',
      description: 'Connecting litigants with volunteer lawyers who provide free legal services',
      benefits: [
        'Free legal representation by experienced advocates',
        'Legal consultation on various matters',
        'Document drafting and filing assistance'
      ],
      eligibility: 'Low-income individuals, senior citizens, persons with disabilities, victims of domestic violence',
      deadline: 'Ongoing',
      contact: {
        phone: '1800 123 4567',
        website: 'probono.gov.in'
      }
    }
  ];

  // Rights and laws data
  const legalKnowledge = [
    {
      category: "Fundamental Rights",
      rights: [
        {
          title: "Right to Equality",
          description: "Equality before law, prohibition of discrimination on grounds of religion, race, caste, sex or place of birth",
          articles: "Articles 14-18"
        },
        {
          title: "Right to Freedom",
          description: "Freedom of speech, assembly, association, movement, residence, and profession",
          articles: "Articles 19-22"
        },
        {
          title: "Right against Exploitation",
          description: "Prohibition of trafficking, forced labor, and child employment in hazardous jobs",
          articles: "Articles 23-24"
        }
      ]
    },
    {
      category: "Consumer Rights",
      rights: [
        {
          title: "Right to Safety",
          description: "Protection against products, production processes and services that are hazardous to health or life"
        },
        {
          title: "Right to Information",
          description: "Right to be informed about quality, quantity, potency, purity, standard and price of goods or services"
        },
        {
          title: "Right to Choose",
          description: "Right to access a variety of goods and services at competitive prices"
        }
      ]
    },
    {
      category: "Women's Rights",
      rights: [
        {
          title: "Protection from Domestic Violence",
          description: "Legal protection against physical, sexual, verbal, emotional, and economic abuse",
          act: "Domestic Violence Act, 2005"
        },
        {
          title: "Equal Remuneration",
          description: "Equal pay for equal work regardless of gender",
          act: "Equal Remuneration Act, 1976"
        },
        {
          title: "Maternity Benefits",
          description: "Paid maternity leave and other benefits for working women",
          act: "Maternity Benefit Act, 1961 (Amended 2017)"
        }
      ]
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "Who is eligible for free legal aid in India?",
      answer: "Free legal aid in India is available to: (1) Women and children, (2) Members of SC/ST communities, (3) Industrial workmen, (4) Victims of trafficking or beggars, (5) Persons with disabilities, (6) Victims of mass disaster, violence, flood, drought, earthquake, industrial disaster, (7) Persons in custody, and (8) Persons with annual income less than the specified limit (currently ₹3 lakhs)."
    },
    {
      question: "How can I apply for legal aid services?",
      answer: "You can apply for legal aid by: (1) Visiting the nearest Legal Services Authority office (at Taluk, District, or State level), (2) Applying online through the NALSA portal, (3) Calling the NALSA helpline at 1516, or (4) Writing an application addressed to the Secretary of the concerned Legal Services Authority."
    },
    {
      question: "What documents do I need to apply for legal aid?",
      answer: "Generally, you need to provide: (1) Identity proof (Aadhaar card, voter ID, etc.), (2) Income certificate or self-declaration of income, (3) Documents related to your case or legal issue, (4) Residence proof. Requirements may vary based on the type of case and the Legal Services Authority you approach."
    },
    {
      question: "Is there any fee charged for legal aid services?",
      answer: "No, legal aid services are provided free of cost to eligible persons. This includes legal advice, court representation, and payment of court fees and other expenses related to the litigation process."
    },
    {
      question: "Can legal aid be provided for all types of cases?",
      answer: "Yes, legal aid can be provided for almost all types of cases including criminal, civil, family matters, labor disputes, consumer issues, etc. However, certain limitations may exist for cases that are considered frivolous or have no legal merit."
    }
  ];

  // Filter services based on search term and active filter
  const filteredServices = () => {
    let services = [];

    if (activeServiceFilter === 'all') {
      services = [
        ...legalServices.free, 
        ...legalServices.ngo, 
        ...legalServices.university
      ];
    } else if (activeServiceFilter === 'free') {
      services = legalServices.free;
    } else if (activeServiceFilter === 'ngo') {
      services = legalServices.ngo;
    } else if (activeServiceFilter === 'university') {
      services = legalServices.university;
    }

    if (searchTerm) {
      return services.filter(service => 
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        service.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return services;
  };

  // Filter lawyers based on search term and active filter
  const filteredLawyers = () => {
    let lawyersList = [];

    if (activeLawyerFilter === 'all') {
      lawyersList = [
        ...lawyers.pro_bono, 
        ...lawyers.panel, 
        ...lawyers.specialized
      ];
    } else if (activeLawyerFilter === 'pro_bono') {
      lawyersList = lawyers.pro_bono;
    } else if (activeLawyerFilter === 'panel') {
      lawyersList = lawyers.panel;
    } else if (activeLawyerFilter === 'specialized') {
      lawyersList = lawyers.specialized;
    }

    if (searchTerm) {
      return lawyersList.filter(lawyer => 
        lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        lawyer.specialization.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return lawyersList;
  };

  return (
    <div className="legal-aid-container">
      {/* Header Section */}
      <div className="legal-header">
        <div className="header-content">
          <FaBalanceScale className="legal-hero-icon" />
          <h1>Legal Aid Services</h1>
          <p>Access to justice for all - Free and affordable legal assistance</p>
          <div className="search-container">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search for legal services, lawyers, or topics..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-btn">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>

      {/* Main Tabs */}
      <div className="legal-tabs">
        <button 
          className={`legal-tab ${activeTab === 'services' ? 'active' : ''}`}
          onClick={() => setActiveTab('services')}
        >
          <FaFileContract /> Legal Services
        </button>
        <button 
          className={`legal-tab ${activeTab === 'lawyers' ? 'active' : ''}`}
          onClick={() => setActiveTab('lawyers')}
        >
          <FaUserTie /> Find Lawyers
        </button>
        <button 
          className={`legal-tab ${activeTab === 'schemes' ? 'active' : ''}`}
          onClick={() => setActiveTab('schemes')}
        >
          <FaHandshake /> Legal Aid Schemes
        </button>
        <button 
          className={`legal-tab ${activeTab === 'know' ? 'active' : ''}`}
          onClick={() => setActiveTab('know')}
        >
          <FaGavel /> Know Your Rights
        </button>
        <button 
          className={`legal-tab ${activeTab === 'faq' ? 'active' : ''}`}
          onClick={() => setActiveTab('faq')}
        >
          <FaShieldAlt /> Legal FAQ
        </button>
      </div>

      {/* Services Tab Content */}
      {activeTab === 'services' && (
        <div className="legal-content">
          <div className="legal-filters">
            <h3>Filter Services</h3>
            <div className="filter-buttons">
              <button 
                className={`filter-btn ${activeServiceFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveServiceFilter('all')}
              >
                All Services
              </button>
              <button 
                className={`filter-btn ${activeServiceFilter === 'free' ? 'active' : ''}`}
                onClick={() => setActiveServiceFilter('free')}
              >
                Free Legal Aid
              </button>
              <button 
                className={`filter-btn ${activeServiceFilter === 'ngo' ? 'active' : ''}`}
                onClick={() => setActiveServiceFilter('ngo')}
              >
                NGO Services
              </button>
              <button 
                className={`filter-btn ${activeServiceFilter === 'university' ? 'active' : ''}`}
                onClick={() => setActiveServiceFilter('university')}
              >
                University Clinics
              </button>
            </div>
          </div>

          <div className="legal-listings">
            {filteredServices().length > 0 ? (
              filteredServices().map(service => (
                <div 
                  key={service.id} 
                  className={`legal-service-card ${expandedService === service.id ? 'expanded' : ''}`}
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                >
                  <div className="service-basic-info">
                    <div className="service-title-area">
                      <h3>{service.title}</h3>
                      <span className="service-provider">{service.provider}</span>
                    </div>
                    <div className="service-details">
                      <p><FaMapMarkerAlt /> {service.location}</p>
                      <p><FaCalendarAlt /> {service.timing}</p>
                      <p>Type: {service.type}</p>
                    </div>
                    <div className="service-expand">
                      {expandedService === service.id ? '▲ Less Details' : '▼ More Details'}
                    </div>
                  </div>
                  {expandedService === service.id && (
                    <div className="service-expanded-info">
                      <div className="service-description">
                        <h4>Description</h4>
                        <p>{service.description}</p>
                      </div>
                      <div className="service-eligibility">
                        <h4>Eligibility</h4>
                        <p>{service.eligibility}</p>
                      </div>
                      <div className="service-offerings">
                        <h4>Services Offered</h4>
                        <ul>
                          {service.services.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="service-contact">
                        <h4>Contact Information</h4>
                        <p><FaBuilding /> {service.contact.name}</p>
                        <p><FaPhoneAlt /> {service.contact.phone}</p>
                        <p><FaEnvelope /> {service.contact.email}</p>
                      </div>
                      <button 
                        className="request-consultation-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowConsultationForm(true);
                        }}
                      >
                        Request Consultation
                      </button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="no-results">
                <p>No legal services found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Lawyers Tab Content */}
      {activeTab === 'lawyers' && (
        <div className="legal-content">
          <div className="legal-filters">
            <h3>Filter Lawyers</h3>
            <div className="filter-buttons">
              <button 
                className={`filter-btn ${activeLawyerFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveLawyerFilter('all')}
              >
                All Lawyers
              </button>
              <button 
                className={`filter-btn ${activeLawyerFilter === 'pro_bono' ? 'active' : ''}`}
                onClick={() => setActiveLawyerFilter('pro_bono')}
              >
                Pro Bono Lawyers
              </button>
              <button 
                className={`filter-btn ${activeLawyerFilter === 'panel' ? 'active' : ''}`}
                onClick={() => setActiveLawyerFilter('panel')}
              >
                Panel Lawyers
              </button>
              <button 
                className={`filter-btn ${activeLawyerFilter === 'specialized' ? 'active' : ''}`}
                onClick={() => setActiveLawyerFilter('specialized')}
              >
                Specialized Lawyers
              </button>
            </div>
          </div>

          <div className="lawyers-grid">
            {filteredLawyers().length > 0 ? (
              filteredLawyers().map(lawyer => (
                <div key={lawyer.id} className="lawyer-card">
                  <div className="lawyer-image-placeholder"></div>
                  <div className="lawyer-info">
                    <h3>{lawyer.name}</h3>
                    <p className="lawyer-specialization">{lawyer.specialization}</p>
                    <div className="lawyer-details">
                      <p><strong>Experience:</strong> {lawyer.experience}</p>
                      <p><strong>Languages:</strong> {lawyer.languages}</p>
                      <p><strong>Availability:</strong> {lawyer.availability}</p>
                    </div>
                    <div className="lawyer-contact">
                      <button 
                        className="contact-lawyer-btn"
                        onClick={() => window.open(`tel:${lawyer.contact}`)}
                      >
                        <FaPhoneAlt /> Contact Lawyer
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <p>No lawyers found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Schemes Tab Content */}
      {activeTab === 'schemes' && (
        <div className="legal-content">
          <div className="schemes-intro">
            <h2>Legal Aid Schemes</h2>
            <p>The government provides various legal aid schemes to ensure access to justice for all citizens, particularly for the disadvantaged sections of society.</p>
          </div>
          
          <div className="schemes-grid">
            {legalAidSchemes.map(scheme => (
              <div key={scheme.id} className="scheme-card">
                <h3>{scheme.title}</h3>
                <p className="scheme-description">{scheme.description}</p>
                
                <div className="scheme-details">
                  <div className="scheme-benefits">
                    <h4>Benefits</h4>
                    <ul>
                      {scheme.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="scheme-eligibility">
                    <h4>Eligibility</h4>
                    <p>{scheme.eligibility}</p>
                  </div>
                  
                  <div className="scheme-contact">
                    <h4>Contact Information</h4>
                    {scheme.contact.phone && <p><FaPhoneAlt /> {scheme.contact.phone}</p>}
                    {scheme.contact.email && <p><FaEnvelope /> {scheme.contact.email}</p>}
                    {scheme.contact.website && <p><a href={`https://${scheme.contact.website}`} target="_blank" rel="noopener noreferrer">{scheme.contact.website}</a></p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="scheme-application">
            <h3>How to Apply</h3>
            <div className="application-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Identify the Right Scheme</h4>
                  <p>Determine which legal aid scheme is most suitable for your specific legal issue and eligibility.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Gather Required Documents</h4>
                  <p>Collect identity proof, income certificate, and documents related to your case.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Submit Application</h4>
                  <p>Visit the nearest Legal Services Authority or apply online through their portal.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Follow Up</h4>
                  <p>Track your application status and respond to any requests for additional information.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Know Your Rights Tab Content */}
      {activeTab === 'know' && (
        <div className="legal-content">
          <div className="know-rights-intro">
            <h2>Know Your Rights & Laws</h2>
            <p>Understanding your legal rights and responsibilities is essential for accessing justice and navigating the legal system effectively.</p>
          </div>
          
          <div className="rights-accordion">
            {legalKnowledge.map((category, index) => (
              <div key={index} className="rights-category">
                <h3 className="category-title">{category.category}</h3>
                <div className="rights-list">
                  {category.rights.map((right, rIndex) => (
                    <div key={rIndex} className="right-item">
                      <h4>{right.title}</h4>
                      <p>{right.description}</p>
                      {right.articles && <p className="legal-reference">Reference: {right.articles}</p>}
                      {right.act && <p className="legal-reference">Reference: {right.act}</p>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="rights-resources">
            <h3>Additional Resources</h3>
            <div className="resources-grid">
              <div className="resource-card">
                <h4>Constitution of India</h4>
                <p>The fundamental law of the Republic of India that defines the political principles, procedures, powers, rights and duties of the government and its citizens.</p>
                <a href="https://legislative.gov.in/constitution-of-india/" target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
              <div className="resource-card">
                <h4>Indian Penal Code</h4>
                <p>The official criminal code of India that covers all substantive aspects of criminal law and provides a penal code for all of India.</p>
                <a href="https://legislative.gov.in/sites/default/files/A1860-45.pdf" target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
              <div className="resource-card">
                <h4>Code of Civil Procedure</h4>
                <p>The procedural law that governs how all civil suits are conducted in courts throughout the country.</p>
                <a href="https://legislative.gov.in/sites/default/files/A1908-05.pdf" target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FAQ Tab Content */}
      {activeTab === 'faq' && (
        <div className="legal-content">
          <div className="faq-intro">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about legal aid, services, and procedures.</p>
          </div>
          
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3 className="faq-question">Q. {faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="helpline-section">
            <h3>Legal Aid Helplines</h3>
            <div className="helplines">
              <div className="helpline">
                <div className="helpline-number">1516</div>
                <div className="helpline-desc">National Legal Services Authority (NALSA) Toll-Free Number</div>
              </div>
              <div className="helpline">
                <div className="helpline-number">1800 123 4567</div>
                <div className="helpline-desc">State Legal Services Authority Helpline</div>
              </div>
              <div className="helpline">
                <div className="helpline-number">181</div>
                <div className="helpline-desc">Women Helpline</div>
              </div>
              <div className="helpline">
                <div className="helpline-number">1098</div>
                <div className="helpline-desc">Child Helpline</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Consultation Request Form Modal */}
      {showConsultationForm && (
        <div className="consultation-modal">
          <div className="consultation-form-container">
            <button 
              className="close-form-btn"
              onClick={() => setShowConsultationForm(false)}
            >
              ×
            </button>
            <h2>Legal Consultation Request</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-section">
                <h3>Personal Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input 
                      type="text" 
                      id="fullName" 
                      value={consultationForm.fullName} 
                      onChange={handleFormChange} 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <input 
                      type="date" 
                      id="dob" 
                      value={consultationForm.dob} 
                      onChange={handleFormChange} 
                      required 
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select 
                      id="gender" 
                      value={consultationForm.gender} 
                      onChange={handleFormChange} 
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="mobileNumber">Mobile Number</label>
                    <input 
                      type="tel" 
                      id="mobileNumber" 
                      pattern="[0-9]{10}" 
                      value={consultationForm.mobileNumber} 
                      onChange={handleFormChange} 
                      required 
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={consultationForm.email} 
                    onChange={handleFormChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Current Address</label>
                  <textarea 
                    id="address" 
                    value={consultationForm.address} 
                    onChange={handleFormChange} 
                    required 
                  />
                </div>
              </div>

              <div className="form-section">
                <h3>Case Information</h3>
                <div className="form-group">
                  <label htmlFor="caseType">Type of Legal Issue</label>
                  <select 
                    id="caseType" 
                    value={consultationForm.caseType} 
                    onChange={handleFormChange} 
                    required
                  >
                    <option value="">Select Type of Legal Issue</option>
                    <option value="family">Family Matters (Divorce, Maintenance, Custody)</option>
                    <option value="property">Property Disputes</option>
                    <option value="criminal">Criminal Cases</option>
                    <option value="civil">Civil Disputes</option>
                    <option value="consumer">Consumer Issues</option>
                    <option value="labor">Labor & Employment</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="caseDetails">Brief Description of Your Case</label>
                  <textarea 
                    id="caseDetails" 
                    value={consultationForm.caseDetails} 
                    onChange={handleFormChange} 
                    required 
                  />
                </div>
              </div>

              <div className="form-section">
                <h3>Preferred Consultation Time</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="preferredDate">Preferred Date</label>
                    <input 
                      type="date" 
                      id="preferredDate" 
                      value={consultationForm.preferredDate} 
                      onChange={handleFormChange} 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="preferredTime">Preferred Time</label>
                    <select 
                      id="preferredTime" 
                      value={consultationForm.preferredTime} 
                      onChange={handleFormChange} 
                      required
                    >
                      <option value="">Select Time</option>
                      <option value="morning">Morning (10:00 AM - 12:00 PM)</option>
                      <option value="afternoon">Afternoon (1:00 PM - 3:00 PM)</option>
                      <option value="evening">Evening (4:00 PM - 6:00 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-section">
                <div className="form-group checkbox-group">
                  <input 
                    type="checkbox" 
                    id="termsAgree" 
                    checked={consultationForm.termsAgree} 
                    onChange={handleFormChange} 
                    required 
                  />
                  <label htmlFor="termsAgree">I agree to the terms and conditions of the legal consultation service</label>
                </div>
                <div className="form-group checkbox-group">
                  <input 
                    type="checkbox" 
                    id="consentAgree" 
                    checked={consultationForm.consentAgree} 
                    onChange={handleFormChange} 
                    required 
                  />
                  <label htmlFor="consentAgree">I consent to the processing of my personal data for the purpose of this legal consultation</label>
                </div>
              </div>

              <div className="form-actions">
                <button type="button" onClick={() => setShowConsultationForm(false)}>Cancel</button>
                <button type="submit" className="submit-btn">Submit Request</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Call to Action Section */}
      <div className="legal-cta-section">
        <h2>Need Immediate Legal Assistance?</h2>
        <p>Our team is here to help you navigate through your legal challenges.</p>
        <div className="cta-buttons">
          <button className="cta-btn primary" onClick={() => setShowConsultationForm(true)}>
            Request Consultation
          </button>
          <a href="tel:+911800123456" className="cta-btn secondary">
            Call Helpline
          </a>
        </div>
      </div>

      {/* Footer Section */}
      <div className="legal-footer">
        <p>
          Disclaimer: This information is provided for general knowledge purposes only and 
          should not be construed as legal advice. For specific legal advice, please consult 
          with a qualified attorney or legal aid service.
        </p>
      </div>
    </div>
  );
};

export default LegalAid;
