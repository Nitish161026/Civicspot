import React, { useState } from "react";
import "./Healthcare.css";
import axios from "axios";

const Healthcare = () => {
  const [activeTab, setActiveTab] = useState("facilities");
  const [activeFacilityType, setActiveFacilityType] = useState("hospitals");
  const [searchTerm, setSearchTerm] = useState("");
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [expandedFacility, setExpandedFacility] = useState(null);
  const [showEmergencyInfo, setShowEmergencyInfo] = useState(false);
  
  // Appointment form data state
  const [formData, setFormData] = useState({
    patientName: "",
    patientAge: "",
    patientPhone: "",
    patientEmail: "",
    facilityType: "",
    facilityName: "",
    appointmentDate: "",
    appointmentTime: "",
    medicalConcern: "",
    termsAgree: false
  });

  // Healthcare facilities data
  const facilities = {
    hospitals: [
      {
        id: "hosp1",
        name: "City General Hospital",
        address: "123 Main Street, City Center",
        contact: "+91 9876543210",
        specialty: "Multi-Specialty",
        timing: "24/7 Emergency Services",
        image: "hospital1",
        rating: 4.5,
        services: [
          "Emergency Care",
          "Surgery",
          "Cardiology",
          "Neurology",
          "Pediatrics",
          "Obstetrics & Gynecology",
        ],
        doctors: [
          { name: "Dr. Rajesh Kumar", specialty: "Cardiology" },
          { name: "Dr. Priya Singh", specialty: "Neurology" },
          { name: "Dr. Amit Sharma", specialty: "Pediatrics" },
        ],
      },
      {
        id: "hosp2",
        name: "Community Health Center",
        address: "456 Park Avenue, Green District",
        contact: "+91 9765432180",
        specialty: "Primary Care",
        timing: "8:00 AM - 8:00 PM (Mon-Sat)",
        image: "hospital2",
        rating: 4.2,
        services: [
          "General Medicine",
          "Vaccination",
          "Maternity Care",
          "Pediatric Care",
          "Basic Emergency Services",
        ],
        doctors: [
          { name: "Dr. Neha Gupta", specialty: "General Medicine" },
          { name: "Dr. Sanjeev Patel", specialty: "Pediatrics" },
        ],
      },
      {
        id: "hosp3",
        name: "Super Specialty Medical Center",
        address: "789 Ring Road, Tech Park",
        contact: "+91 8976543210",
        specialty: "Advanced Care",
        timing: "24/7 Services",
        image: "hospital3",
        rating: 4.8,
        services: [
          "Oncology",
          "Orthopedics",
          "Cardiac Surgery",
          "Nephrology",
          "Gastroenterology",
          "Advanced Diagnostics",
        ],
        doctors: [
          { name: "Dr. Vikram Mehta", specialty: "Oncology" },
          { name: "Dr. Asha Reddy", specialty: "Orthopedics" },
          { name: "Dr. Karan Malhotra", specialty: "Cardiac Surgery" },
        ],
      },
    ],
    clinics: [
      {
        id: "clin1",
        name: "Family Care Clinic",
        address: "234 Lake View, Residential Area",
        contact: "+91 9876123450",
        specialty: "Family Medicine",
        timing: "9:00 AM - 6:00 PM (Mon-Fri), 9:00 AM - 1:00 PM (Sat)",
        image: "clinic1",
        rating: 4.3,
        services: [
          "General Checkups",
          "Preventive Care",
          "Vaccinations",
          "Minor Procedures",
        ],
        doctors: [{ name: "Dr. Mohan Verma", specialty: "Family Medicine" }],
      },
      {
        id: "clin2",
        name: "Dental Wellness Center",
        address: "567 Market Road, Shopping District",
        contact: "+91 9632587410",
        specialty: "Dental Care",
        timing: "10:00 AM - 7:00 PM (Mon-Sat)",
        image: "clinic2",
        rating: 4.7,
        services: [
          "Dental Checkups",
          "Root Canal Treatment",
          "Cosmetic Dentistry",
          "Orthodontics",
          "Dental Surgery",
        ],
        doctors: [
          { name: "Dr. Kavita Jain", specialty: "General Dentistry" },
          { name: "Dr. Rahul Khanna", specialty: "Orthodontics" },
        ],
      },
    ],
    pharmacies: [
      {
        id: "pharm1",
        name: "MedPlus Pharmacy",
        address: "345 Central Avenue, City Center",
        contact: "+91 9876543210",
        timing: "8:00 AM - 10:00 PM (All Days)",
        image: "pharmacy1",
        rating: 4.4,
        services: [
          "Prescription Medications",
          "OTC Drugs",
          "Medical Supplies",
          "Home Delivery",
        ],
      },
      {
        id: "pharm2",
        name: "24x7 MediStore",
        address: "678 Hospital Road, Medical District",
        contact: "+91 9765432180",
        timing: "24/7 Service",
        image: "pharmacy2",
        rating: 4.6,
        services: [
          "Round the Clock Service",
          "Emergency Medications",
          "Health Supplements",
          "Medical Equipment Rental",
        ],
      },
    ],
    laboratories: [
      {
        id: "lab1",
        name: "PathLab Diagnostics",
        address: "890 Science Park, Tech District",
        contact: "+91 9876123450",
        timing: "7:00 AM - 8:00 PM (All Days)",
        image: "lab1",
        rating: 4.5,
        services: [
          "Blood Tests",
          "Imaging Services",
          "Pathology",
          "Home Sample Collection",
        ],
      },
      {
        id: "lab2",
        name: "Advanced Medical Diagnostics",
        address: "901 Ring Road, Medical Hub",
        contact: "+91 9632587410",
        timing: "8:00 AM - 8:00 PM (Mon-Sat)",
        image: "lab2",
        rating: 4.7,
        services: [
          "MRI",
          "CT Scan",
          "Ultrasound",
          "X-Ray",
          "Advanced Diagnostics",
        ],
      },
    ],
  };

  // Health campaigns data
  const healthCampaigns = [
    {
      id: "camp1",
      title: "Vaccination Drive",
      description: "Free vaccination camp for children under 5 years",
      date: "September 5-10, 2025",
      location: "City Community Center",
      organizer: "Health Department",
    },
    {
      id: "camp2",
      title: "Blood Donation Camp",
      description: "Donate blood and save lives - all blood groups needed",
      date: "September 15, 2025",
      location: "City General Hospital",
      organizer: "Red Cross Society",
    },
    {
      id: "camp3",
      title: "Health Awareness Workshop",
      description: "Learn about diabetes prevention and management",
      date: "September 20-21, 2025",
      location: "Public Library Auditorium",
      organizer: "Diabetes Care Foundation",
    },
    {
      id: "camp4",
      title: "Eye Check-up Camp",
      description: "Free eye examination and discounted spectacles",
      date: "September 25-26, 2025",
      location: "Vision Care Center",
      organizer: "Eye Care Society",
    },
  ];

  // Health schemes data
  const healthSchemes = [
    {
      id: "scheme1",
      title: "Ayushman Bharat",
      description:
        "Health insurance scheme providing coverage up to ₹5 lakhs per family per year",
      eligibility: "Economically disadvantaged families as per SECC database",
      benefits: "Cashless and paperless access to healthcare services",
      link: "https://pmjay.gov.in/",
    },
    {
      id: "scheme2",
      title: "Janani Suraksha Yojana",
      description:
        "Safe motherhood intervention to reduce maternal and neonatal mortality",
      eligibility: "Pregnant women from BPL families",
      benefits: "Cash assistance for institutional delivery",
      link: "https://nhm.gov.in/janani-suraksha-yojana",
    },
    {
      id: "scheme3",
      title: "Central Government Health Scheme",
      description:
        "Comprehensive healthcare for central government employees and pensioners",
      eligibility:
        "Central government employees, pensioners and their dependents",
      benefits: "OPD, hospitalization, medicines, and specialized treatments",
      link: "https://cghs.gov.in/",
    },
  ];

  // Handle search functionality
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter facilities based on search term
  const filteredFacilities = searchTerm
    ? facilities[activeFacilityType].filter(
        (facility) =>
          facility.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          facility.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
          facility.specialty?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : facilities[activeFacilityType];

  // Toggle facility details
  const toggleFacilityDetails = (id) => {
    if (expandedFacility === id) {
      setExpandedFacility(null);
    } else {
      setExpandedFacility(id);
    }
  };
  
  // Handle appointment form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle appointment form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Here you would implement the API call to submit the appointment
      // For now we'll just show an alert
      console.log("Form submitted:", formData);
      alert(`Thank you ${formData.patientName}! Your appointment has been scheduled successfully.`);
      
      // Reset form after successful submission
      setFormData({
        patientName: "",
        patientAge: "",
        patientPhone: "",
        patientEmail: "",
        facilityType: "",
        facilityName: "",
        appointmentDate: "",
        appointmentTime: "",
        medicalConcern: "",
        termsAgree: false
      });
    } catch (err) {
      console.error("Appointment submission failed", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="healthcare-container">
      {/* Header Section */}
      <div className="healthcare-header">
        <div className="header-content">
          <h1>Healthcare Services</h1>
          <p>
            Access quality healthcare facilities and services in your community
          </p>

          <div className="search-container">
            <input
              type="text"
              placeholder="Search for healthcare facilities by name, location or specialty..."
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

      {/* Emergency Information */}
      <div className="emergency-banner">
        <div className="emergency-icon">
          <i className="fas fa-ambulance"></i>
        </div>
        <div className="emergency-content">
          <h3>Medical Emergency?</h3>
          <p>
            Call <strong>108</strong> for ambulance services
          </p>
        </div>
        <button
          className="more-info-btn"
          onClick={() => setShowEmergencyInfo(!showEmergencyInfo)}
        >
          {showEmergencyInfo ? "Hide Details" : "More Info"}
        </button>
      </div>

      {showEmergencyInfo && (
        <div className="emergency-details">
          <div className="emergency-grid">
            <div className="emergency-card">
              <div className="emergency-card-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h4>Emergency Numbers</h4>
              <ul>
                <li>
                  <strong>108:</strong> Ambulance Services
                </li>
                <li>
                  <strong>102:</strong> Pregnancy Related Emergency
                </li>
                <li>
                  <strong>104:</strong> Health Helpline
                </li>
                <li>
                  <strong>112:</strong> National Emergency Number
                </li>
              </ul>
            </div>
            <div className="emergency-card">
              <div className="emergency-card-icon">
                <i className="fas fa-first-aid"></i>
              </div>
              <h4>First Aid Tips</h4>
              <ul>
                <li>
                  For burns: Cool the area with running water for 10-15 minutes
                </li>
                <li>For bleeding: Apply direct pressure with clean cloth</li>
                <li>For choking: Perform Heimlich maneuver if trained</li>
                <li>
                  For heart attack: Chew aspirin if not allergic, call emergency
                </li>
              </ul>
            </div>
            <div className="emergency-card">
              <div className="emergency-card-icon">
                <i className="fas fa-hospital-alt"></i>
              </div>
              <h4>24/7 Emergency Hospitals</h4>
              <ul>
                <li>City General Hospital: +91 9876543210</li>
                <li>Super Specialty Medical Center: +91 8976543210</li>
                <li>District Government Hospital: +91 7896543210</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Main Tabs */}
      <div className="healthcare-tabs">
        <button
          className={activeTab === "facilities" ? "active" : ""}
          onClick={() => setActiveTab("facilities")}
        >
          <i className="fas fa-hospital"></i>
          <span>Healthcare Facilities</span>
        </button>
        <button
          className={activeTab === "campaigns" ? "active" : ""}
          onClick={() => setActiveTab("campaigns")}
        >
          <i className="fas fa-heartbeat"></i>
          <span>Health Campaigns</span>
        </button>
        <button
          className={activeTab === "schemes" ? "active" : ""}
          onClick={() => setActiveTab("schemes")}
        >
          <i className="fas fa-medkit"></i>
          <span>Health Schemes</span>
        </button>
        <button
          className={activeTab === "appointment" ? "active" : ""}
          onClick={() => {
            setActiveTab("appointment");
            setShowAppointmentForm(true);
          }}
        >
          <i className="fas fa-calendar-check"></i>
          <span>Book Appointment</span>
        </button>
      </div>

      {/* Facilities Tab Content */}
      {activeTab === "facilities" && (
        <div className="facilities-section">
          <div className="facility-types">
            <button
              className={activeFacilityType === "hospitals" ? "active" : ""}
              onClick={() => setActiveFacilityType("hospitals")}
            >
              <i className="fas fa-hospital-alt"></i>
              <span>Hospitals</span>
            </button>
            <button
              className={activeFacilityType === "clinics" ? "active" : ""}
              onClick={() => setActiveFacilityType("clinics")}
            >
              <i className="fas fa-stethoscope"></i>
              <span>Clinics</span>
            </button>
            <button
              className={activeFacilityType === "pharmacies" ? "active" : ""}
              onClick={() => setActiveFacilityType("pharmacies")}
            >
              <i className="fas fa-pills"></i>
              <span>Pharmacies</span>
            </button>
            <button
              className={activeFacilityType === "laboratories" ? "active" : ""}
              onClick={() => setActiveFacilityType("laboratories")}
            >
              <i className="fas fa-flask"></i>
              <span>Laboratories</span>
            </button>
          </div>

          <div className="facilities-grid">
            {filteredFacilities && filteredFacilities.length > 0 ? (
              filteredFacilities.map((facility) => (
                <div
                  key={facility.id}
                  className={`facility-card ${
                    expandedFacility === facility.id ? "expanded" : ""
                  }`}
                >
                  <div className={`facility-image ${facility.image}`}></div>
                  <div className="facility-content">
                    <h3>{facility.name}</h3>

                    <div className="facility-rating">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`fas fa-star ${
                            i < Math.floor(facility.rating) ? "filled" : ""
                          }`}
                        ></i>
                      ))}
                      <span>{facility.rating.toFixed(1)}</span>
                    </div>

                    <div className="facility-meta">
                      <div className="meta-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>{facility.address}</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-phone-alt"></i>
                        <span>{facility.contact}</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-clock"></i>
                        <span>{facility.timing}</span>
                      </div>
                      {facility.specialty && (
                        <div className="meta-item">
                          <i className="fas fa-user-md"></i>
                          <span>{facility.specialty}</span>
                        </div>
                      )}
                    </div>

                    <div
                      className={`facility-details ${
                        expandedFacility === facility.id ? "visible" : ""
                      }`}
                    >
                      {facility.services && (
                        <div className="details-section">
                          <h4>
                            <i className="fas fa-list-ul"></i> Services:
                          </h4>
                          <ul className="services-list">
                            {facility.services.map((service, index) => (
                              <li key={index}>{service}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {facility.doctors && (
                        <div className="details-section">
                          <h4>
                            <i className="fas fa-user-md"></i> Doctors:
                          </h4>
                          <ul className="doctors-list">
                            {facility.doctors.map((doctor, index) => (
                              <li key={index}>
                                <strong>{doctor.name}</strong> -{" "}
                                {doctor.specialty}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="facility-actions">
                      <button
                        className="view-btn"
                        onClick={() => toggleFacilityDetails(facility.id)}
                      >
                        {expandedFacility === facility.id
                          ? "Hide Details"
                          : "View Details"}
                      </button>
                      <button
                        className="appointment-btn"
                        onClick={() => {
                          setActiveTab("appointment");
                          setShowAppointmentForm(true);
                        }}
                      >
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-facilities">
                <div className="no-results-icon">
                  <i className="fas fa-search"></i>
                </div>
                <h3>No facilities found</h3>
                <p>Try adjusting your search or browse different categories</p>
                {searchTerm && (
                  <button
                    className="clear-search"
                    onClick={() => setSearchTerm("")}
                  >
                    Clear Search
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Campaigns Tab Content */}
      {activeTab === "campaigns" && (
        <div className="campaigns-section">
          <div className="campaigns-header">
            <h2>Upcoming Health Campaigns</h2>
            <p>
              Join these health initiatives to promote wellbeing in the
              community
            </p>
          </div>

          <div className="campaigns-grid">
            {healthCampaigns.map((campaign) => (
              <div key={campaign.id} className="campaign-card">
                <div
                  className={`campaign-banner campaign${campaign.id.slice(-1)}`}
                ></div>
                <div className="campaign-content">
                  <h3>{campaign.title}</h3>
                  <p className="campaign-desc">{campaign.description}</p>

                  <div className="campaign-details">
                    <div className="campaign-detail">
                      <i className="fas fa-calendar-alt"></i>
                      <span>{campaign.date}</span>
                    </div>
                    <div className="campaign-detail">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>{campaign.location}</span>
                    </div>
                    <div className="campaign-detail">
                      <i className="fas fa-users"></i>
                      <span>{campaign.organizer}</span>
                    </div>
                  </div>

                  <button className="register-btn">Register Now</button>
                </div>
              </div>
            ))}
          </div>

          <div className="organize-campaign">
            <div className="organize-content">
              <h3>Organize Your Own Health Campaign</h3>
              <p>Want to organize a health awareness event in your locality?</p>
              <button className="organize-btn">Get Started</button>
            </div>
          </div>
        </div>
      )}

      {/* Health Schemes Tab Content */}
      {activeTab === "schemes" && (
        <div className="schemes-section">
          <div className="schemes-header">
            <h2>Health Insurance & Welfare Schemes</h2>
            <p>
              Government and private healthcare schemes to support your medical
              needs
            </p>
          </div>

          <div className="schemes-grid">
            {healthSchemes.map((scheme) => (
              <div key={scheme.id} className="scheme-card">
                <div className={`scheme-icon ${scheme.id}`}></div>
                <div className="scheme-content">
                  <h3>{scheme.title}</h3>
                  <p className="scheme-desc">{scheme.description}</p>

                  <div className="scheme-details">
                    <div className="scheme-detail">
                      <h4>
                        <i className="fas fa-user-check"></i> Eligibility:
                      </h4>
                      <p>{scheme.eligibility}</p>
                    </div>
                    <div className="scheme-detail">
                      <h4>
                        <i className="fas fa-gift"></i> Benefits:
                      </h4>
                      <p>{scheme.benefits}</p>
                    </div>
                  </div>

                  <a
                    href={scheme.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apply-btn"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="insurance-partners">
            <h3>Insurance Partners</h3>
            <div className="partner-logos">
              <div className="partner-logo logo1"></div>
              <div className="partner-logo logo2"></div>
              <div className="partner-logo logo3"></div>
              <div className="partner-logo logo4"></div>
            </div>
          </div>
        </div>
      )}

      {/* Appointment Booking Tab Content - Redesigned to match RaiseIt form */}
      {activeTab === "appointment" && showAppointmentForm && (
        <div className="appointment-section">
          <div className="appointment-header">
            <h2>Book a Medical Appointment</h2>
            <p>Schedule your visit with healthcare professionals</p>
          </div>

          <div className="raise-container">
            <div className="form-card">
              <div className="form-header">
                <h2>Book Your Appointment 📅</h2>
                <p>Enter your details to schedule a consultation.</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <label htmlFor="patientName">Patient Name</label>
                  <input
                    type="text"
                    id="patientName"
                    name="patientName"
                    placeholder="Enter full name"
                    value={formData.patientName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="patientAge">Age</label>
                  <input
                    type="number"
                    id="patientAge"
                    name="patientAge"
                    placeholder="Enter age"
                    value={formData.patientAge}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="patientPhone">Phone Number</label>
                  <input
                    type="tel"
                    id="patientPhone"
                    name="patientPhone"
                    placeholder="Enter your contact number"
                    value={formData.patientPhone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="patientEmail">Email Address (Optional)</label>
                  <input
                    type="email"
                    id="patientEmail"
                    name="patientEmail"
                    placeholder="Enter your email address"
                    value={formData.patientEmail}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="facilityType">Facility Type</label>
                  <div className="select-wrapper">
                    <select
                      id="facilityType"
                      name="facilityType"
                      value={formData.facilityType}
                      onChange={handleChange}
                      required
                      className="styled-select"
                    >
                      <option value="">Select facility type</option>
                      <option value="hospital">🏥 Hospital</option>
                      <option value="clinic">🩺 Clinic</option>
                      <option value="laboratory">🔬 Laboratory</option>
                    </select>
                    <div className="select-arrow">▼</div>
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="facilityName">Facility Name</label>
                  <div className="select-wrapper">
                    <select
                      id="facilityName"
                      name="facilityName"
                      value={formData.facilityName}
                      onChange={handleChange}
                      required
                      className="styled-select"
                    >
                      <option value="">Select facility</option>
                      <option value="city_general">City General Hospital</option>
                      <option value="community">Community Health Center</option>
                      <option value="super_specialty">
                        Super Specialty Medical Center
                      </option>
                      <option value="family_care">Family Care Clinic</option>
                      <option value="dental">Dental Wellness Center</option>
                      <option value="pathlab">PathLab Diagnostics</option>
                      <option value="advanced">
                        Advanced Medical Diagnostics
                      </option>
                    </select>
                    <div className="select-arrow">▼</div>
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="appointmentDate">Preferred Date</label>
                  <input
                    type="date"
                    id="appointmentDate"
                    name="appointmentDate"
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.appointmentDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="appointmentTime">Preferred Time</label>
                  <div className="select-wrapper">
                    <select
                      id="appointmentTime"
                      name="appointmentTime"
                      value={formData.appointmentTime}
                      onChange={handleChange}
                      required
                      className="styled-select"
                    >
                      <option value="">Select time</option>
                      <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                      <option value="afternoon">Afternoon (12:00 PM - 3:00 PM)</option>
                      <option value="evening">Evening (3:00 PM - 6:00 PM)</option>
                      <option value="night">Night (6:00 PM - 9:00 PM)</option>
                    </select>
                    <div className="select-arrow">▼</div>
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="medicalConcern">Medical Concern</label>
                  <textarea
                    id="medicalConcern"
                    name="medicalConcern"
                    placeholder="Briefly describe your medical issue or purpose of visit..."
                    value={formData.medicalConcern}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group checkbox-group">
                  <input 
                    type="checkbox" 
                    id="termsAgree" 
                    name="termsAgree"
                    checked={formData.termsAgree}
                    onChange={handleChange}
                    required 
                  />
                  <label htmlFor="termsAgree">
                    I agree to the terms and conditions and consent to share my
                    information with the healthcare provider
                  </label>
                </div>

                <button type="submit" className="submit-btn">
                  <span>Book Appointment</span>
                  <span className="icon">📅</span>
                </button>
              </form>
            </div>

            <div className="info-card">
              <h3>Why Book Online?</h3>
              <ul className="benefits-list">
                <li>
                  <div className="benefit-icon">⏱️</div>
                  <div className="benefit-text">
                    Save time with quick online scheduling
                  </div>
                </li>
                <li>
                  <div className="benefit-icon">📱</div>
                  <div className="benefit-text">
                    Get appointment reminders on your phone
                  </div>
                </li>
                <li>
                  <div className="benefit-icon">📋</div>
                  <div className="benefit-text">
                    Fill medical forms in advance
                  </div>
                </li>
                <li>
                  <div className="benefit-icon">🕒</div>
                  <div className="benefit-text">
                    Choose from available time slots
                  </div>
                </li>
                <li>
                  <div className="benefit-icon">🔄</div>
                  <div className="benefit-text">
                    Easily reschedule if needed
                  </div>
                </li>
                <li>
                  <div className="benefit-icon">🩺</div>
                  <div className="benefit-text">
                    Select the right doctor for your needs
                  </div>
                </li>
              </ul>

              <div className="success-stories">
                <h4>Patient Experiences</h4>
                <div className="story">
                  <p>
                    "The online appointment system saved me hours of waiting time at the hospital. Highly recommended!"
                  </p>
                  <div className="author">- Rahul, Patient</div>
                </div>
                <div className="story">
                  <p>
                    "I was able to book an emergency dental appointment within minutes. The process was so simple!"
                  </p>
                  <div className="author">- Priya, Patient</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Health Tips Section */}
      <div className="health-tips-section">
        <div className="tips-header">
          <h2>Everyday Health Tips</h2>
          <p>Simple habits for a healthier lifestyle</p>
        </div>

        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-icon">
              <i className="fas fa-apple-alt"></i>
            </div>
            <h4>Nutrition</h4>
            <p>
              Eat a balanced diet with plenty of fruits, vegetables, and whole
              grains. Limit processed foods and excessive sugar intake.
            </p>
          </div>

          <div className="tip-card">
            <div className="tip-icon">
              <i className="fas fa-running"></i>
            </div>
            <h4>Physical Activity</h4>
            <p>
              Aim for at least 30 minutes of moderate exercise most days of the
              week. Include both cardiovascular and strength training exercises.
            </p>
          </div>

          <div className="tip-card">
            <div className="tip-icon">
              <i className="fas fa-bed"></i>
            </div>
            <h4>Sleep</h4>
            <p>
              Get 7-9 hours of quality sleep each night. Maintain a regular
              sleep schedule and create a relaxing bedtime routine.
            </p>
          </div>

          <div className="tip-card">
            <div className="tip-icon">
              <i className="fas fa-brain"></i>
            </div>
            <h4>Mental Wellness</h4>
            <p>
              Practice stress management techniques like meditation, deep
              breathing, or yoga. Don't hesitate to seek professional help when
              needed.
            </p>
          </div>
        </div>
      </div>

      {/* Health Resources */}
      <div className="health-resources">
        <h3>Health Resources & Tools</h3>

        <div className="resources-grid">
          <a href="#" className="resource-card">
            <div className="resource-icon">
              <i className="fas fa-calculator"></i>
            </div>
            <h4>BMI Calculator</h4>
          </a>

          <a href="#" className="resource-card">
            <div className="resource-icon">
              <i className="fas fa-heartbeat"></i>
            </div>
            <h4>Heart Risk Assessment</h4>
          </a>

          <a href="#" className="resource-card">
            <div className="resource-icon">
              <i className="fas fa-pills"></i>
            </div>
            <h4>Medication Reminder</h4>
          </a>

          <a href="#" className="resource-card">
            <div className="resource-icon">
              <i className="fas fa-book-medical"></i>
            </div>
            <h4>Health Encyclopedia</h4>
          </a>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="healthcare-feedback">
        <div className="feedback-header">
          <h3>Help Us Improve Healthcare Services</h3>
          <p>
            Share your feedback and suggestions about healthcare facilities in
            your area
          </p>
        </div>

        <button className="feedback-btn">
          <i className="fas fa-comment-medical"></i>
          Submit Feedback
        </button>
      </div>
    </div>
  );
};

export default Healthcare;
