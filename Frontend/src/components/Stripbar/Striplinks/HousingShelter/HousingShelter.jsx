import React, { useState } from 'react';
import './HousingShelter.css';

const HousingShelter = () => {
  const [activeTab, setActiveTab] = useState('housing');
  const [activeHousingFilter, setActiveHousingFilter] = useState('all');
  const [activeShelterFilter, setActiveShelterFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedListing, setExpandedListing] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  
  // Form state for the housing application
  const [housingForm, setHousingForm] = useState({
    fullName: '',
    dob: '',
    gender: '',
    maritalStatus: '',
    mobileNumber: '',
    email: '',
    currentAddress: '',
    employment: '',
    annualIncome: '',
    housingType: '',
    familySize: '',
    bedrooms: '',
    preferredLocation: '',
    termsAgree: false,
    consentAgree: false
  });

  // Handle input change
  const handleFormChange = (e) => {
    const { id, value, type, checked } = e.target;
    setHousingForm({
      ...housingForm,
      [id]: type === 'checkbox' ? checked : value
    });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Housing application form submitted:', housingForm);
    // Here you would typically send the form data to your backend
    alert('Your housing application has been submitted successfully!');
  };

  // Housing listings data
  const housingListings = {
    affordable: [
      {
        id: 'h1',
        title: 'Green Valley Apartments',
        location: 'East District, City Center',
        type: 'Apartment',
        bedrooms: 2,
        bathrooms: 1,
        area: '800 sq ft',
        rent: '₹12,000/month',
        deposit: '₹25,000',
        available: 'Immediately',
        image: 'housing1',
        amenities: ['24x7 Water Supply', 'Power Backup', 'Security', 'Parking', 'Children\'s Play Area'],
        description: 'Modern 2 BHK apartments in a well-maintained complex with essential amenities. Located close to schools, hospitals, and markets, making it ideal for families.',
        contact: {
          name: 'Affordable Housing Authority',
          phone: '+91 98765 43210',
          email: 'info@affordablehousing.org'
        }
      },
      {
        id: 'h2',
        title: 'Sunrise Homes',
        location: 'West District, Suburban Area',
        type: 'Row House',
        bedrooms: 1,
        bathrooms: 1,
        area: '550 sq ft',
        rent: '₹8,500/month',
        deposit: '₹15,000',
        available: 'From next month',
        image: 'housing2',
        amenities: ['Water Supply', 'Electricity', 'Common Garden', 'Community Hall'],
        description: '1 BHK row houses developed under the affordable housing scheme. Perfect for small families or working individuals looking for budget-friendly accommodation.',
        contact: {
          name: 'City Housing Department',
          phone: '+91 87654 32109',
          email: 'housing@cityauthority.gov.in'
        }
      },
      {
        id: 'h3',
        title: 'New Town Heights',
        location: 'North District, New Development Area',
        type: 'Apartment',
        bedrooms: 3,
        bathrooms: 2,
        area: '1100 sq ft',
        rent: '₹15,000/month',
        deposit: '₹30,000',
        available: 'Next week',
        image: 'housing3',
        amenities: ['24x7 Water Supply', 'Power Backup', 'Security', 'Lift', 'Gym', 'Community Hall'],
        description: 'Spacious 3 BHK apartments in a newly developed area with modern amenities. Part of the government\'s affordable housing initiative for middle-income families.',
        contact: {
          name: 'New Town Housing Society',
          phone: '+91 76543 21098',
          email: 'contact@newtownhousing.org'
        }
      }
    ],
    rental: [
      {
        id: 'r1',
        title: 'City View Apartments',
        location: 'Central District, Downtown',
        type: 'Apartment',
        bedrooms: 2,
        bathrooms: 2,
        area: '950 sq ft',
        rent: '₹18,000/month',
        deposit: '₹50,000',
        available: 'Immediately',
        image: 'rental1',
        amenities: ['24x7 Water Supply', 'Power Backup', 'Security', 'Lift', 'Gym', 'Swimming Pool'],
        description: 'Modern 2 BHK apartments with premium amenities in the heart of the city. Close to business districts, shopping malls, and entertainment venues.',
        contact: {
          name: 'City Rentals Agency',
          phone: '+91 98765 12345',
          email: 'info@cityrentals.com'
        }
      },
      {
        id: 'r2',
        title: 'Garden Residency',
        location: 'South District, Residential Area',
        type: 'Independent House',
        bedrooms: 3,
        bathrooms: 2,
        area: '1500 sq ft',
        rent: '₹25,000/month',
        deposit: '₹75,000',
        available: 'Next month',
        image: 'rental2',
        amenities: ['24x7 Water Supply', 'Power Backup', 'Security', 'Private Garden', 'Parking'],
        description: 'Spacious 3 BHK independent house in a quiet residential neighborhood. Features include a private garden, covered parking, and modern interiors.',
        contact: {
          name: 'Premium Properties',
          phone: '+91 87654 12345',
          email: 'rentals@premiumproperties.com'
        }
      },
      {
        id: 'r3',
        title: 'Metro Apartments',
        location: 'East District, Near Metro Station',
        type: 'Apartment',
        bedrooms: 1,
        bathrooms: 1,
        area: '600 sq ft',
        rent: '₹15,000/month',
        deposit: '₹30,000',
        available: 'Immediately',
        image: 'rental3',
        amenities: ['24x7 Water Supply', 'Security', 'Lift', 'Parking'],
        description: 'Cozy 1 BHK apartment located just 5 minutes from the metro station. Ideal for working professionals or students with easy access to transportation.',
        contact: {
          name: 'Metro Rentals',
          phone: '+91 76543 12345',
          email: 'info@metrorentals.com'
        }
      }
    ],
    government: [
      {
        id: 'g1',
        title: 'Pradhan Mantri Awas Yojana Housing',
        location: 'Multiple locations across the city',
        type: 'Apartment',
        bedrooms: '1-3',
        bathrooms: '1-2',
        area: '450-1100 sq ft',
        price: '₹15 - 40 Lakhs',
        subsidies: 'Interest subsidy up to ₹2.67 Lakhs',
        available: 'Applications open now',
        image: 'govt1',
        eligibility: 'Annual household income between ₹3-18 Lakhs, no existing home ownership',
        description: 'Housing units developed under the PMAY scheme to provide affordable housing for economically weaker sections and middle-income groups.',
        contact: {
          name: 'PMAY Help Desk',
          phone: '+91 1800 123 4567',
          email: 'helpdesk@pmay.gov.in'
        }
      },
      {
        id: 'g2',
        title: 'State Housing Board Flats',
        location: 'Various locations in the city outskirts',
        type: 'Apartment',
        bedrooms: '1-2',
        bathrooms: '1',
        area: '500-750 sq ft',
        price: '₹10 - 25 Lakhs',
        subsidies: 'Up to 10% discount for women applicants',
        available: 'Next allocation in 2 months',
        image: 'govt2',
        eligibility: 'State residents with annual income below ₹10 Lakhs',
        description: 'Affordable housing units built by the State Housing Board with basic amenities and good connectivity to the city center.',
        contact: {
          name: 'State Housing Board',
          phone: '+91 1800 234 5678',
          email: 'info@statehousingboard.gov.in'
        }
      }
    ]
  };

  // Shelter data
  const shelters = {
    emergency: [
      {
        id: 'e1',
        name: 'City Night Shelter',
        location: 'Central District, Near Railway Station',
        capacity: '100 beds',
        services: ['Beds', 'Blankets', 'Drinking Water', 'Toilet Facilities'],
        timing: '6:00 PM - 8:00 AM',
        contact: '+91 98765 43210',
        image: 'shelter1'
      },
      {
        id: 'e2',
        name: 'Rainy Day Shelter Home',
        location: 'North District, Market Area',
        capacity: '75 beds',
        services: ['Beds', 'Blankets', 'Drinking Water', 'Toilet Facilities', 'Medical Aid'],
        timing: '24x7 during extreme weather',
        contact: '+91 87654 32109',
        image: 'shelter2'
      }
    ],
    homeless: [
      {
        id: 'h1',
        name: 'Hope Foundation Shelter',
        location: 'West District, Community Center',
        capacity: '50 beds',
        services: ['Beds', 'Meals', 'Clothing', 'Toilet Facilities', 'Counseling'],
        timing: '24x7',
        contact: '+91 76543 21098',
        image: 'shelter3'
      },
      {
        id: 'h2',
        name: 'New Life Shelter Home',
        location: 'East District, Near Bus Terminal',
        capacity: '60 beds',
        services: ['Beds', 'Meals', 'Clothing', 'Toilet Facilities', 'Skill Development'],
        timing: '24x7',
        contact: '+91 65432 10987',
        image: 'shelter4'
      }
    ],
    women: [
      {
        id: 'w1',
        name: 'Women\'s Safety Shelter',
        location: 'South District, Residential Area',
        capacity: '40 beds',
        services: ['Beds', 'Meals', 'Clothing', 'Counseling', 'Legal Aid', 'Skill Development'],
        timing: '24x7',
        contact: '+91 54321 09876',
        image: 'shelter5'
      },
      {
        id: 'w2',
        name: 'Mother & Child Care Home',
        location: 'Central District, Near Hospital',
        capacity: '30 rooms',
        services: ['Private Rooms', 'Meals', 'Clothing', 'Medical Care', 'Child Care', 'Counseling'],
        timing: '24x7',
        contact: '+91 43210 98765',
        image: 'shelter6'
      }
    ]
  };

  // Housing schemes data
  const housingSchemes = [
    {
      id: 'scheme1',
      title: 'Pradhan Mantri Awas Yojana (PMAY)',
      description: 'Central government scheme to provide affordable housing to urban and rural poor',
      benefits: [
        'Interest subsidy on home loans',
        'Direct financial assistance for construction',
        'Public-private partnerships for affordable housing'
      ],
      eligibility: 'EWS and LIG households with annual income below ₹18 lakhs',
      deadline: 'Ongoing',
      link: 'https://pmaymis.gov.in/'
    },
    {
      id: 'scheme2',
      title: 'Credit Linked Subsidy Scheme (CLSS)',
      description: 'Interest subsidy for EWS, LIG and MIG categories on home loans',
      benefits: [
        'Interest subsidy of 6.5% for EWS and LIG',
        'Interest subsidy of 4% for MIG-I',
        'Interest subsidy of 3% for MIG-II'
      ],
      eligibility: 'Based on annual household income categories',
      deadline: 'March 31, 2026',
      link: 'https://pmaymis.gov.in/clss_guideline.aspx'
    },
    {
      id: 'scheme3',
      title: 'Affordable Rental Housing Complexes (ARHC)',
      description: 'Converting government-funded housing into affordable rental housing',
      benefits: [
        'Affordable rent for urban migrants/poor',
        'Basic amenities and security',
        'Close proximity to workplaces'
      ],
      eligibility: 'Urban migrants and poor from EWS/LIG categories',
      deadline: 'Ongoing',
      link: 'https://arhc.mohua.gov.in/'
    }
  ];

  // Handle search functionality
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Toggle expanded listing details
  const toggleListingDetails = (id) => {
    if (expandedListing === id) {
      setExpandedListing(null);
    } else {
      setExpandedListing(id);
    }
  };

  // Filter housing listings based on active filter and search term
  const getFilteredHousingListings = () => {
    if (!activeTab === 'housing') return [];
    
    let listings = [];
    if (activeHousingFilter === 'all') {
      listings = [...housingListings.affordable, ...housingListings.rental, ...housingListings.government];
    } else {
      listings = housingListings[activeHousingFilter] || [];
    }
    
    if (searchTerm) {
      return listings.filter(listing => 
        listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return listings;
  };

  // Filter shelters based on active filter and search term
  const getFilteredShelters = () => {
    if (!activeTab === 'shelter') return [];
    
    let filteredShelters = [];
    if (activeShelterFilter === 'all') {
      filteredShelters = [...shelters.emergency, ...shelters.homeless, ...shelters.women];
    } else {
      filteredShelters = shelters[activeShelterFilter] || [];
    }
    
    if (searchTerm) {
      return filteredShelters.filter(shelter => 
        shelter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        shelter.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filteredShelters;
  };

  // Get filtered listings based on active tab
  const filteredListings = activeTab === 'housing' 
    ? getFilteredHousingListings() 
    : activeTab === 'shelter' 
      ? getFilteredShelters()
      : [];

  return (
    <div className="housing-shelter-container">
      {/* Header Section */}
      <div className="housing-header">
        <div className="header-content">
          <h1>Housing & Shelter Services</h1>
          <p>Find affordable housing options and emergency shelter services in your community</p>
          
          <div className="search-container">
            <input
              type="text"
              placeholder={`Search for ${activeTab === 'housing' ? 'housing' : activeTab === 'shelter' ? 'shelters' : 'services'}...`}
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
      <div className="housing-tabs">
        <button 
          className={activeTab === 'housing' ? 'active' : ''} 
          onClick={() => {
            setActiveTab('housing');
            setSearchTerm('');
          }}
        >
          <i className="fas fa-home"></i>
          <span>Housing</span>
        </button>
        <button 
          className={activeTab === 'shelter' ? 'active' : ''} 
          onClick={() => {
            setActiveTab('shelter');
            setSearchTerm('');
          }}
        >
          <i className="fas fa-hands-helping"></i>
          <span>Shelters</span>
        </button>
        <button 
          className={activeTab === 'schemes' ? 'active' : ''} 
          onClick={() => {
            setActiveTab('schemes');
            setSearchTerm('');
          }}
        >
          <i className="fas fa-file-alt"></i>
          <span>Housing Schemes</span>
        </button>
        <button 
          className={activeTab === 'apply' ? 'active' : ''} 
          onClick={() => {
            setActiveTab('apply');
            setShowApplicationForm(true);
          }}
        >
          <i className="fas fa-clipboard-list"></i>
          <span>Apply for Housing</span>
        </button>
      </div>

      {/* Housing Tab Content */}
      {activeTab === 'housing' && (
        <div className="housing-section">
          <div className="housing-filters">
            <button 
              className={activeHousingFilter === 'all' ? 'active' : ''} 
              onClick={() => setActiveHousingFilter('all')}
            >
              All Listings
            </button>
            <button 
              className={activeHousingFilter === 'affordable' ? 'active' : ''} 
              onClick={() => setActiveHousingFilter('affordable')}
            >
              Affordable Housing
            </button>
            <button 
              className={activeHousingFilter === 'rental' ? 'active' : ''} 
              onClick={() => setActiveHousingFilter('rental')}
            >
              Rental Properties
            </button>
            <button 
              className={activeHousingFilter === 'government' ? 'active' : ''} 
              onClick={() => setActiveHousingFilter('government')}
            >
              Government Housing
            </button>
          </div>

          <div className="listings-grid">
            {filteredListings && filteredListings.length > 0 ? (
              filteredListings.map(listing => (
                <div key={listing.id} className={`listing-card ${expandedListing === listing.id ? 'expanded' : ''}`}>
                  <div className={`listing-image ${listing.image}`}></div>
                  <div className="listing-content">
                    <h3>{listing.title}</h3>
                    <p className="listing-location"><i className="fas fa-map-marker-alt"></i> {listing.location}</p>
                    
                    <div className="listing-details">
                      <div className="detail-item">
                        <i className="fas fa-building"></i>
                        <span>{listing.type}</span>
                      </div>
                      {listing.bedrooms && (
                        <div className="detail-item">
                          <i className="fas fa-bed"></i>
                          <span>{listing.bedrooms} {listing.bedrooms === '1' ? 'Bedroom' : 'Bedrooms'}</span>
                        </div>
                      )}
                      {listing.bathrooms && (
                        <div className="detail-item">
                          <i className="fas fa-bath"></i>
                          <span>{listing.bathrooms} {listing.bathrooms === '1' ? 'Bathroom' : 'Bathrooms'}</span>
                        </div>
                      )}
                      {listing.area && (
                        <div className="detail-item">
                          <i className="fas fa-ruler-combined"></i>
                          <span>{listing.area}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="pricing-details">
                      {listing.rent && (
                        <div className="price-item">
                          <span className="label">Rent:</span>
                          <span className="price">{listing.rent}</span>
                        </div>
                      )}
                      {listing.deposit && (
                        <div className="price-item">
                          <span className="label">Deposit:</span>
                          <span className="price">{listing.deposit}</span>
                        </div>
                      )}
                      {listing.price && (
                        <div className="price-item">
                          <span className="label">Price Range:</span>
                          <span className="price">{listing.price}</span>
                        </div>
                      )}
                      {listing.subsidies && (
                        <div className="price-item">
                          <span className="label">Subsidies:</span>
                          <span className="price">{listing.subsidies}</span>
                        </div>
                      )}
                      <div className="availability">
                        <span className="available-tag">Available: {listing.available}</span>
                      </div>
                    </div>

                    <div className={`expanded-details ${expandedListing === listing.id ? 'visible' : ''}`}>
                      {listing.amenities && (
                        <div className="section">
                          <h4><i className="fas fa-star"></i> Amenities</h4>
                          <ul className="amenities-list">
                            {listing.amenities.map((amenity, index) => (
                              <li key={index}>{amenity}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {listing.description && (
                        <div className="section">
                          <h4><i className="fas fa-info-circle"></i> Description</h4>
                          <p>{listing.description}</p>
                        </div>
                      )}
                      
                      {listing.eligibility && (
                        <div className="section">
                          <h4><i className="fas fa-check-circle"></i> Eligibility</h4>
                          <p>{listing.eligibility}</p>
                        </div>
                      )}
                      
                      {listing.contact && (
                        <div className="section contact-info">
                          <h4><i className="fas fa-phone-alt"></i> Contact</h4>
                          <p><strong>{listing.contact.name}</strong></p>
                          <p><i className="fas fa-phone"></i> {listing.contact.phone}</p>
                          <p><i className="fas fa-envelope"></i> {listing.contact.email}</p>
                        </div>
                      )}
                    </div>

                    <div className="listing-actions">
                      <button className="view-btn" onClick={() => toggleListingDetails(listing.id)}>
                        {expandedListing === listing.id ? 'Show Less' : 'Show More'}
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
                </div>
              ))
            ) : (
              <div className="no-listings">
                <div className="no-results-icon">
                  <i className="fas fa-home"></i>
                </div>
                <h3>No housing listings found</h3>
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

      {/* Shelter Tab Content */}
      {activeTab === 'shelter' && (
        <div className="shelter-section">
          <div className="shelter-filters">
            <button 
              className={activeShelterFilter === 'all' ? 'active' : ''} 
              onClick={() => setActiveShelterFilter('all')}
            >
              All Shelters
            </button>
            <button 
              className={activeShelterFilter === 'emergency' ? 'active' : ''} 
              onClick={() => setActiveShelterFilter('emergency')}
            >
              Emergency Shelters
            </button>
            <button 
              className={activeShelterFilter === 'homeless' ? 'active' : ''} 
              onClick={() => setActiveShelterFilter('homeless')}
            >
              Homeless Shelters
            </button>
            <button 
              className={activeShelterFilter === 'women' ? 'active' : ''} 
              onClick={() => setActiveShelterFilter('women')}
            >
              Women's Shelters
            </button>
          </div>

          <div className="emergency-banner">
            <div className="emergency-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <div className="emergency-content">
              <h3>Need immediate shelter?</h3>
              <p>Call our 24/7 helpline: <strong>1800-123-4567</strong></p>
            </div>
          </div>

          <div className="shelters-grid">
            {filteredListings && filteredListings.length > 0 ? (
              filteredListings.map(shelter => (
                <div key={shelter.id} className="shelter-card">
                  <div className={`shelter-image ${shelter.image}`}></div>
                  <div className="shelter-content">
                    <h3>{shelter.name}</h3>
                    <p className="shelter-location"><i className="fas fa-map-marker-alt"></i> {shelter.location}</p>
                    
                    <div className="shelter-meta">
                      <div className="meta-item">
                        <i className="fas fa-bed"></i>
                        <span>Capacity: {shelter.capacity}</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-clock"></i>
                        <span>Hours: {shelter.timing}</span>
                      </div>
                    </div>
                    
                    <div className="shelter-services">
                      <h4>Services Offered:</h4>
                      <ul className="services-list">
                        {shelter.services.map((service, index) => (
                          <li key={index}>{service}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="shelter-contact">
                      <a href={`tel:${shelter.contact}`} className="contact-btn">
                        <i className="fas fa-phone"></i> Call for Assistance
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-shelters">
                <div className="no-results-icon">
                  <i className="fas fa-hands-helping"></i>
                </div>
                <h3>No shelters found</h3>
                <p>Try adjusting your search or browse different categories</p>
                {searchTerm && (
                  <button className="clear-search" onClick={() => setSearchTerm('')}>
                    Clear Search
                  </button>
                )}
              </div>
            )}
          </div>

          <div className="shelter-resources">
            <h3>Additional Support Resources</h3>
            <div className="resources-grid">
              <div className="resource-card">
                <div className="resource-icon">
                  <i className="fas fa-utensils"></i>
                </div>
                <h4>Food Banks</h4>
                <p>Find locations where free meals and groceries are provided</p>
                <button className="resource-btn">View Locations</button>
              </div>
              <div className="resource-card">
                <div className="resource-icon">
                  <i className="fas fa-tshirt"></i>
                </div>
                <h4>Clothing Assistance</h4>
                <p>Access free clothing and essential personal items</p>
                <button className="resource-btn">Learn More</button>
              </div>
              <div className="resource-card">
                <div className="resource-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <h4>Job Assistance</h4>
                <p>Employment resources and job training programs</p>
                <button className="resource-btn">Find Programs</button>
              </div>
              <div className="resource-card">
                <div className="resource-icon">
                  <i className="fas fa-head-side-virus"></i>
                </div>
                <h4>Mental Health Services</h4>
                <p>Free or low-cost mental health support and counseling</p>
                <button className="resource-btn">Get Help</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Housing Schemes Tab Content */}
      {activeTab === 'schemes' && (
        <div className="schemes-section">
          <div className="schemes-header">
            <h2>Government Housing Schemes</h2>
            <p>Learn about various housing schemes and financial assistance programs available for different income groups</p>
          </div>
          
          <div className="schemes-grid">
            {housingSchemes.map(scheme => (
              <div key={scheme.id} className="scheme-card">
                <div className="scheme-header">
                  <h3>{scheme.title}</h3>
                  <div className="deadline-badge">
                    <i className="fas fa-calendar-alt"></i> Deadline: {scheme.deadline}
                  </div>
                </div>
                
                <p className="scheme-desc">{scheme.description}</p>
                
                <div className="scheme-details">
                  <div className="section">
                    <h4><i className="fas fa-gift"></i> Benefits</h4>
                    <ul>
                      {scheme.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="section">
                    <h4><i className="fas fa-user-check"></i> Eligibility</h4>
                    <p>{scheme.eligibility}</p>
                  </div>
                </div>
                
                <a href={scheme.link} target="_blank" rel="noopener noreferrer" className="scheme-link">
                  <i className="fas fa-external-link-alt"></i> Visit Official Website
                </a>
              </div>
            ))}
          </div>

          <div className="scheme-comparison">
            <h3>Which Housing Scheme is Right for You?</h3>
            <div className="comparison-content">
              <div className="income-groups">
                <div className="income-group">
                  <h4>Economically Weaker Section (EWS)</h4>
                  <p>Annual Income: Below ₹3 Lakhs</p>
                  <p>Best Scheme: PMAY-U (Beneficiary-led Construction)</p>
                </div>
                <div className="income-group">
                  <h4>Low Income Group (LIG)</h4>
                  <p>Annual Income: ₹3-6 Lakhs</p>
                  <p>Best Scheme: CLSS for EWS/LIG</p>
                </div>
                <div className="income-group">
                  <h4>Middle Income Group (MIG-I)</h4>
                  <p>Annual Income: ₹6-12 Lakhs</p>
                  <p>Best Scheme: CLSS for MIG-I</p>
                </div>
                <div className="income-group">
                  <h4>Middle Income Group (MIG-II)</h4>
                  <p>Annual Income: ₹12-18 Lakhs</p>
                  <p>Best Scheme: CLSS for MIG-II</p>
                </div>
              </div>
              
              <div className="scheme-advisor">
                <div className="advisor-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <div className="advisor-content">
                  <h4>Need Help Choosing?</h4>
                  <p>Use our housing scheme advisor tool to find the best option for your situation</p>
                  <button className="advisor-btn">Open Advisor Tool</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Application Form Tab Content */}
      {activeTab === 'apply' && showApplicationForm && (
        <div className="application-section">
          <div className="application-header">
            <h2>Apply for Housing Assistance</h2>
            <p>Fill out this form to apply for affordable housing programs or rental assistance</p>
          </div>
          
          <div className="raise-container">
            {/* Form Card with Glassmorphism effect */}
            <div className="form-card">
              <div className="form-header">
                <div className="header-icon">
                  <i className="fas fa-home"></i>
                </div>
                <h2>Housing Application</h2>
                <p>Complete the form below to apply for housing assistance</p>
              </div>
              
              <form onSubmit={handleFormSubmit}>
                {/* Personal Information */}
                <div className="input-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    value={housingForm.fullName}
                    onChange={handleFormChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div className="input-group">
                  <label htmlFor="dob">Date of Birth</label>
                  <input
                    type="date"
                    id="dob"
                    value={housingForm.dob}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                
                <div className="input-group">
                  <label htmlFor="gender">Gender</label>
                  <div className="select-wrapper">
                    <select
                      id="gender"
                      className="styled-select"
                      value={housingForm.gender}
                      onChange={handleFormChange}
                      required
                    >
                      <option value="" disabled>Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer_not">Prefer not to say</option>
                    </select>
                    <div className="select-arrow">
                      <i className="fas fa-chevron-down"></i>
                    </div>
                  </div>
                </div>
                
                <div className="input-group">
                  <label htmlFor="maritalStatus">Marital Status</label>
                  <div className="select-wrapper">
                    <select
                      id="maritalStatus"
                      className="styled-select"
                      value={housingForm.maritalStatus}
                      onChange={handleFormChange}
                      required
                    >
                      <option value="" disabled>Select marital status</option>
                      <option value="single">Single</option>
                      <option value="married">Married</option>
                      <option value="divorced">Divorced</option>
                      <option value="widowed">Widowed</option>
                    </select>
                    <div className="select-arrow">
                      <i className="fas fa-chevron-down"></i>
                    </div>
                  </div>
                </div>
                
                {/* Contact Information */}
                <div className="input-group">
                  <label htmlFor="mobileNumber">Mobile Number</label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    value={housingForm.mobileNumber}
                    onChange={handleFormChange}
                    placeholder="Enter your mobile number"
                    required
                  />
                </div>
                
                <div className="input-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={housingForm.email}
                    onChange={handleFormChange}
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div className="input-group">
                  <label htmlFor="currentAddress">Current Address</label>
                  <textarea
                    id="currentAddress"
                    value={housingForm.currentAddress}
                    onChange={handleFormChange}
                    rows="3"
                    placeholder="Enter your current address"
                    required
                  ></textarea>
                </div>
                
                {/* Financial Information */}
                <div className="input-group">
                  <label htmlFor="employment">Employment Status</label>
                  <div className="select-wrapper">
                    <select
                      id="employment"
                      className="styled-select"
                      value={housingForm.employment}
                      onChange={handleFormChange}
                      required
                    >
                      <option value="" disabled>Select employment status</option>
                      <option value="employed">Employed</option>
                      <option value="self-employed">Self-Employed</option>
                      <option value="unemployed">Unemployed</option>
                      <option value="retired">Retired</option>
                      <option value="student">Student</option>
                    </select>
                    <div className="select-arrow">
                      <i className="fas fa-chevron-down"></i>
                    </div>
                  </div>
                </div>
                
                <div className="input-group">
                  <label htmlFor="annualIncome">Annual Household Income (₹)</label>
                  <div className="select-wrapper">
                    <select
                      id="annualIncome"
                      className="styled-select"
                      value={housingForm.annualIncome}
                      onChange={handleFormChange}
                      required
                    >
                      <option value="" disabled>Select income range</option>
                      <option value="below3L">Below ₹3 Lakhs (EWS)</option>
                      <option value="3L-6L">₹3-6 Lakhs (LIG)</option>
                      <option value="6L-12L">₹6-12 Lakhs (MIG-I)</option>
                      <option value="12L-18L">₹12-18 Lakhs (MIG-II)</option>
                      <option value="above18L">Above ₹18 Lakhs</option>
                    </select>
                    <div className="select-arrow">
                      <i className="fas fa-chevron-down"></i>
                    </div>
                  </div>
                </div>
                
                {/* Housing Requirements */}
                <div className="input-group">
                  <label htmlFor="housingType">Type of Housing Needed</label>
                  <div className="select-wrapper">
                    <select
                      id="housingType"
                      className="styled-select"
                      value={housingForm.housingType}
                      onChange={handleFormChange}
                      required
                    >
                      <option value="" disabled>Select housing type</option>
                      <option value="rent">Rental Housing</option>
                      <option value="own">Ownership Housing</option>
                      <option value="shelter">Emergency Shelter</option>
                      <option value="subsidy">Rental Subsidy</option>
                    </select>
                    <div className="select-arrow">
                      <i className="fas fa-chevron-down"></i>
                    </div>
                  </div>
                </div>
                
                <div className="input-group">
                  <label htmlFor="familySize">Family Size</label>
                  <input
                    type="number"
                    id="familySize"
                    value={housingForm.familySize}
                    onChange={handleFormChange}
                    min="1"
                    max="20"
                    placeholder="Number of family members"
                    required
                  />
                </div>
                
                <div className="input-group">
                  <label htmlFor="bedrooms">Preferred Number of Bedrooms</label>
                  <div className="select-wrapper">
                    <select
                      id="bedrooms"
                      className="styled-select"
                      value={housingForm.bedrooms}
                      onChange={handleFormChange}
                      required
                    >
                      <option value="" disabled>Select preferred size</option>
                      <option value="1bhk">1 BHK</option>
                      <option value="2bhk">2 BHK</option>
                      <option value="3bhk">3 BHK</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="select-arrow">
                      <i className="fas fa-chevron-down"></i>
                    </div>
                  </div>
                </div>
                
                <div className="input-group">
                  <label htmlFor="preferredLocation">Preferred Location</label>
                  <input
                    type="text"
                    id="preferredLocation"
                    value={housingForm.preferredLocation}
                    onChange={handleFormChange}
                    placeholder="Enter preferred area/location"
                  />
                </div>
                
                {/* Terms and Consent */}
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="termsAgree"
                    checked={housingForm.termsAgree}
                    onChange={handleFormChange}
                    required
                  />
                  <label htmlFor="termsAgree">
                    I declare that the information provided is true to the best of my knowledge and I understand that providing false information may lead to rejection of application
                  </label>
                </div>
                
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="consentAgree"
                    checked={housingForm.consentAgree}
                    onChange={handleFormChange}
                    required
                  />
                  <label htmlFor="consentAgree">
                    I consent to the processing of my personal data for the purpose of housing application evaluation
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
              <h3>Housing Assistance Information</h3>
              
              <ul className="benefits-list">
                <li>
                  <div className="benefit-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div className="benefit-text">
                    <strong>Quick Processing</strong> - Applications are reviewed within 4-6 weeks
                  </div>
                </li>
                <li>
                  <div className="benefit-icon">
                    <i className="fas fa-id-card"></i>
                  </div>
                  <div className="benefit-text">
                    <strong>Documentation Required</strong> - ID proof, income proof, address proof
                  </div>
                </li>
                <li>
                  <div className="benefit-icon">
                    <i className="fas fa-user-check"></i>
                  </div>
                  <div className="benefit-text">
                    <strong>Eligibility Priority</strong> - Based on need, income, and family size
                  </div>
                </li>
                <li>
                  <div className="benefit-icon">
                    <i className="fas fa-handshake"></i>
                  </div>
                  <div className="benefit-text">
                    <strong>In-Person Interview</strong> - May be required as part of the process
                  </div>
                </li>
                <li>
                  <div className="benefit-icon">
                    <i className="fas fa-file-alt"></i>
                  </div>
                  <div className="benefit-text">
                    <strong>Complete Application</strong> - Incomplete applications will not be processed
                  </div>
                </li>
              </ul>
              
              <div className="housing-timeline">
                <h4><i className="fas fa-clock"></i> Application Timeline</h4>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h5>Day 1</h5>
                    <p>Application submitted and acknowledgment sent</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h5>Week 1-2</h5>
                    <p>Initial screening and document verification</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h5>Week 3-4</h5>
                    <p>Background check and eligibility assessment</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h5>Week 5-6</h5>
                    <p>Final decision and allocation notification</p>
                  </div>
                </div>
              </div>
              
              <div className="success-stories">
                <h4><i className="fas fa-quote-left"></i> Success Stories</h4>
                <div className="story-carousel">
                  <div className="story active">
                    <p>"The housing assistance program helped my family find an affordable apartment near my workplace. The process was smooth and the staff was very supportive."</p>
                    <p className="author">- Ramesh K., Teacher</p>
                  </div>
                  <div className="story">
                    <p>"After years of struggling with rent, we finally have a stable home through the ownership housing scheme. The monthly payments are manageable and we're building equity."</p>
                    <p className="author">- Priya S., Nurse</p>
                  </div>
                  <div className="story">
                    <p>"As a senior citizen on fixed income, I couldn't afford market rents. The subsidy program has allowed me to stay in my community with dignity."</p>
                    <p className="author">- Mohan J., Retired</p>
                  </div>
                </div>
                <div className="story-nav">
                  <span className="story-dot active"></span>
                  <span className="story-dot"></span>
                  <span className="story-dot"></span>
                </div>
              </div>
              
              <div className="document-checklist">
                <h4><i className="fas fa-clipboard-list"></i> Required Documents</h4>
                <div className="doc-grid">
                  <div className="doc-item">
                    <i className="fas fa-id-card"></i>
                    <span>Identity Proof</span>
                  </div>
                  <div className="doc-item">
                    <i className="fas fa-file-invoice-dollar"></i>
                    <span>Income Proof</span>
                  </div>
                  <div className="doc-item">
                    <i className="fas fa-home"></i>
                    <span>Address Proof</span>
                  </div>
                  <div className="doc-item">
                    <i className="fas fa-university"></i>
                    <span>Bank Statements</span>
                  </div>
                  <div className="doc-item">
                    <i className="fas fa-certificate"></i>
                    <span>Caste Certificate (if applicable)</span>
                  </div>
                  <div className="doc-item">
                    <i className="fas fa-portrait"></i>
                    <span>Passport Photos</span>
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
                      <p className="help-value">+91 1800-123-4567</p>
                    </div>
                  </div>
                  <div className="help-option">
                    <i className="fas fa-clock"></i>
                    <div>
                      <p className="help-label">Timing</p>
                      <p className="help-value">9:00 AM - 6:00 PM (Mon-Fri)</p>
                    </div>
                  </div>
                  <div className="help-option">
                    <i className="fas fa-envelope"></i>
                    <div>
                      <p className="help-label">Email</p>
                      <p className="help-value">housing@civicspot.gov.in</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Housing Rights Section */}
      <div className="housing-rights-section">
        <div className="rights-header">
          <h2>Know Your Housing Rights</h2>
          <p>Understanding your rights and protections as a tenant or homeowner</p>
        </div>
        
        <div className="rights-grid">
          <div className="rights-card">
            <div className="rights-icon">
              <i className="fas fa-gavel"></i>
            </div>
            <h4>Tenant Rights</h4>
            <ul>
              <li>Right to habitable living conditions</li>
              <li>Protection from unfair eviction</li>
              <li>Privacy rights and notice requirements</li>
              <li>Security deposit protection</li>
            </ul>
            <button className="learn-more-btn">Learn More</button>
          </div>
          
          <div className="rights-card">
            <div className="rights-icon">
              <i className="fas fa-ban"></i>
            </div>
            <h4>Anti-Discrimination Laws</h4>
            <ul>
              <li>Protection against discrimination based on race, religion, gender, etc.</li>
              <li>Rights for persons with disabilities</li>
              <li>Family status protection</li>
              <li>Equal access to housing opportunities</li>
            </ul>
            <button className="learn-more-btn">Learn More</button>
          </div>
          
          <div className="rights-card">
            <div className="rights-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h4>Homeowner Protections</h4>
            <ul>
              <li>Foreclosure prevention rights</li>
              <li>Property tax relief programs</li>
              <li>Home improvement assistance</li>
              <li>Homeowner association rights</li>
            </ul>
            <button className="learn-more-btn">Learn More</button>
          </div>
          
          <div className="rights-card">
            <div className="rights-icon">
              <i className="fas fa-balance-scale"></i>
            </div>
            <h4>Legal Assistance</h4>
            <ul>
              <li>Free legal aid for housing issues</li>
              <li>Mediation services</li>
              <li>Complaint filing procedures</li>
              <li>Housing court resources</li>
            </ul>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      </div>

      {/* Community Resources */}
      <div className="community-resources">
        <h3>Community Housing Resources</h3>
        
        <div className="resources-grid">
          <a href="#" className="resource-link">
            <div className="resource-icon">
              <i className="fas fa-hands-helping"></i>
            </div>
            <h4>Housing Counseling</h4>
          </a>
          
          <a href="#" className="resource-link">
            <div className="resource-icon">
              <i className="fas fa-tools"></i>
            </div>
            <h4>Home Repair Programs</h4>
          </a>
          
          <a href="#" className="resource-link">
            <div className="resource-icon">
              <i className="fas fa-file-invoice-dollar"></i>
            </div>
            <h4>Rent Payment Assistance</h4>
          </a>
          
          <a href="#" className="resource-link">
            <div className="resource-icon">
              <i className="fas fa-house-damage"></i>
            </div>
            <h4>Disaster Recovery</h4>
          </a>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="housing-feedback">
        <div className="feedback-header">
          <h3>Help Us Improve Housing Services</h3>
          <p>Share your feedback and suggestions about housing and shelter services in your community</p>
        </div>
        
        <button className="feedback-btn">
          <i className="fas fa-comment"></i>
          Submit Feedback
        </button>
      </div>
    </div>
  );
};

export default HousingShelter;
