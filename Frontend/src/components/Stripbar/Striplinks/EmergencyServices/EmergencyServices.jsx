import React, { useState } from 'react';
import './EmergencyServices.css';
import { 
  FaAmbulance, 
  FaFireExtinguisher, 
  FaPhoneAlt, 
  FaHospital,
  FaMapMarkerAlt,
  FaExclamationTriangle,
  FaHeartbeat,
  FaPhone,
  FaBriefcaseMedical,
  FaCarCrash,
  FaBandAid,
  FaStethoscope,
  FaRunning,
  FaShieldAlt
} from 'react-icons/fa';
import { MdLocalPolice, MdBloodtype, MdWaterDrop } from 'react-icons/md';
import { GiPoliceBadge, GiHealthNormal, GiElectric } from 'react-icons/gi';
import { BsInfoCircleFill } from 'react-icons/bs';
import { TbEmergencyBed } from 'react-icons/tb';

const EmergencyServices = () => {
  const [selectedService, setSelectedService] = useState('medical');

  const emergencyContacts = [
    { id: 1, name: 'Ambulance', number: '108', icon: <FaAmbulance /> },
    { id: 2, name: 'Police', number: '100', icon: <GiPoliceBadge /> },
    { id: 3, name: 'Fire', number: '101', icon: <FaFireExtinguisher /> },
    { id: 4, name: 'Disaster Management', number: '108', icon: <FaExclamationTriangle /> },
    { id: 5, name: 'Women Helpline', number: '1091', icon: <FaPhone /> },
    { id: 6, name: 'Child Helpline', number: '1098', icon: <FaPhone /> },
    { id: 7, name: 'National Emergency', number: '112', icon: <FaPhone /> },
    { id: 8, name: 'Senior Citizen Helpline', number: '14567', icon: <FaPhone /> }
  ];

  const medicalFacilities = [
    {
      id: 1,
      name: 'City General Hospital',
      address: '123 Health Ave, City Center',
      phone: '044-2345-6789',
      services: ['24/7 Emergency', 'ICU', 'Trauma Care', 'Ambulance'],
      icon: <FaHospital />
    },
    {
      id: 2,
      name: 'Victoria Medical Center',
      address: '45 Victoria Road, Westside',
      phone: '044-9876-5432',
      services: ['24/7 Emergency', 'Critical Care', 'Blood Bank', 'Pharmacy'],
      icon: <FaHospital />
    },
    {
      id: 3,
      name: 'Unity Health Clinic',
      address: '78 Unity Street, Northside',
      phone: '044-1122-3344',
      services: ['24/7 Emergency', 'General Medicine', 'Pediatrics'],
      icon: <FaHospital />
    },
    {
      id: 4,
      name: 'RedCross Blood Bank',
      address: '15 Donation Road, Eastside',
      phone: '044-5566-7788',
      services: ['Blood Donation', 'Blood Tests', 'Emergency Supply'],
      icon: <MdBloodtype />
    }
  ];

  const safetyTips = [
    {
      id: 1,
      category: 'Medical Emergency',
      tips: [
        'Check if the person is conscious and breathing',
        'Call 108 immediately for an ambulance',
        'If trained, provide basic first aid until help arrives',
        'Keep the person calm and comfortable'
      ],
      icon: <FaHeartbeat />
    },
    {
      id: 2,
      category: 'Fire Emergency',
      tips: [
        'Call 101 immediately',
        'Use fire extinguisher for small fires only',
        'Evacuate the building using stairs, not elevators',
        'Cover your nose and mouth with a wet cloth'
      ],
      icon: <FaFireExtinguisher />
    },
    {
      id: 3,
      category: 'Crime & Security',
      tips: [
        'Call 100 for police assistance',
        'Stay calm and provide clear information',
        'If safe, note identifying details like vehicle numbers',
        'Do not confront criminals directly'
      ],
      icon: <MdLocalPolice />
    },
    {
      id: 4,
      category: 'Natural Disasters',
      tips: [
        'Follow evacuation orders immediately',
        'Keep emergency kits ready',
        'Turn off utilities if instructed',
        'Listen to local authorities for guidance'
      ],
      icon: <MdWaterDrop />
    }
  ];

  const serviceCategories = [
    {
      id: 'medical',
      name: 'Medical',
      icon: <FaStethoscope />,
      color: '#fc5c65'
    },
    {
      id: 'police',
      name: 'Police',
      icon: <GiPoliceBadge />,
      color: '#3867d6'
    },
    {
      id: 'fire',
      name: 'Fire',
      icon: <FaFireExtinguisher />,
      color: '#fa8231'
    },
    {
      id: 'disaster',
      name: 'Disaster',
      icon: <FaExclamationTriangle />,
      color: '#8854d0'
    }
  ];

  const serviceDetails = {
    medical: {
      title: 'Medical Emergency Services',
      description: 'Immediate medical assistance, ambulances, and healthcare facilities available 24/7.',
      points: [
        'Ambulance services with advanced life support',
        'Emergency departments in all major hospitals',
        'Trauma care centers for critical injuries',
        'Blood banks for emergency transfusions'
      ],
      icon: <FaBriefcaseMedical />,
      hotlines: ['108 - Ambulance', '104 - Health Helpline']
    },
    police: {
      title: 'Police Emergency Services',
      description: 'Law enforcement assistance for security, crime, and public safety emergencies.',
      points: [
        'Rapid response police teams',
        'Emergency patrolling units',
        'Crime prevention and investigation',
        'Traffic emergency management'
      ],
      icon: <FaShieldAlt />,
      hotlines: ['100 - Police Emergency', '1090 - Women Safety Helpline']
    },
    fire: {
      title: 'Fire Emergency Services',
      description: 'Professional firefighting teams equipped to handle various fire emergencies.',
      points: [
        'Fire rescue and evacuation operations',
        'Hazardous material incident response',
        'Building collapse and structural fire expertise',
        'Fire safety inspections and prevention'
      ],
      icon: <FaFireExtinguisher />,
      hotlines: ['101 - Fire Emergency']
    },
    disaster: {
      title: 'Disaster Management Services',
      description: 'Coordinated response to natural and man-made disasters.',
      points: [
        'Search and rescue operations',
        'Relief distribution systems',
        'Temporary shelter facilities',
        'Disaster recovery assistance'
      ],
      icon: <GiElectric />,
      hotlines: ['1070 - Disaster Management', '1078 - National Disaster Response Force']
    }
  };

  const firstAidSteps = [
    {
      id: 1,
      title: 'Heart Attack',
      steps: [
        'Call 108 immediately',
        'Help the person sit down and rest',
        'Loosen tight clothing',
        'If the person is not allergic to aspirin, give them one adult aspirin',
        'Monitor vital signs until emergency services arrive'
      ],
      icon: <FaHeartbeat />
    },
    {
      id: 2,
      title: 'Severe Bleeding',
      steps: [
        'Apply direct pressure with a clean cloth or bandage',
        'If blood soaks through, add another cloth on top',
        'If possible, elevate the wound above heart level',
        'Secure the dressing with a bandage',
        'Seek medical attention immediately'
      ],
      icon: <MdBloodtype />
    },
    {
      id: 3,
      title: 'Road Accidents',
      steps: [
        'Ensure your safety first, then call 108',
        'Turn off the vehicle ignition if possible',
        'Do not move victims unless absolutely necessary',
        'Control any bleeding with direct pressure',
        'Comfort and reassure victims until help arrives'
      ],
      icon: <FaCarCrash />
    }
  ];

  return (
    <div className="emergency-container">
      <div className="em-hero">
        <div className="em-hero-overlay"></div>
        <div className="em-hero-content">
          <div className="em-hero-text">
            <h1>Emergency Services</h1>
            <p>Immediate assistance when you need it most</p>
          </div>
          <div className="em-hero-icons">
            <FaAmbulance className="em-hero-icon" />
            <MdLocalPolice className="em-hero-icon" />
            <FaFireExtinguisher className="em-hero-icon" />
          </div>
        </div>
        
        <div className="em-emergency-banner">
          <div className="em-banner-pulse"></div>
          <h2>Emergency? Call <span>112</span></h2>
          <p>National Emergency Number</p>
        </div>
      </div>

      <div className="em-contacts-section">
        <div className="em-section-header">
          <FaPhoneAlt className="em-section-icon" />
          <h2>Emergency Contacts</h2>
          <p>Save these numbers for quick access during emergencies</p>
        </div>
        
        <div className="em-contacts-grid">
          {emergencyContacts.map(contact => (
            <div className="em-contact-card" key={contact.id}>
              <div className="em-contact-icon">
                {contact.icon}
              </div>
              <h3>{contact.name}</h3>
              <div className="em-contact-number">{contact.number}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="em-services-section">
        <div className="em-section-header">
          <TbEmergencyBed className="em-section-icon" />
          <h2>Emergency Service Categories</h2>
          <p>Specialized assistance for different emergency situations</p>
        </div>
        
        <div className="em-service-tabs">
          {serviceCategories.map(category => (
            <div 
              key={category.id}
              className={`em-service-tab ${selectedService === category.id ? 'active' : ''}`}
              onClick={() => setSelectedService(category.id)}
              style={{
                '--tab-color': category.color
              }}
            >
              <div className="em-tab-icon">{category.icon}</div>
              <span>{category.name}</span>
            </div>
          ))}
        </div>
        
        <div className="em-service-details">
          <div className="em-service-icon" style={{ color: serviceCategories.find(c => c.id === selectedService)?.color }}>
            {serviceDetails[selectedService].icon}
          </div>
          <h3>{serviceDetails[selectedService].title}</h3>
          <p className="em-service-desc">{serviceDetails[selectedService].description}</p>
          
          <div className="em-service-features">
            {serviceDetails[selectedService].points.map((point, index) => (
              <div className="em-feature" key={index}>
                <div className="em-feature-bullet" style={{ backgroundColor: serviceCategories.find(c => c.id === selectedService)?.color }}></div>
                <p>{point}</p>
              </div>
            ))}
          </div>
          
          <div className="em-service-hotlines">
            <h4>Emergency Hotlines:</h4>
            {serviceDetails[selectedService].hotlines.map((hotline, index) => (
              <div className="em-hotline" key={index}>{hotline}</div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="em-map-section">
        <div className="em-section-header">
          <FaMapMarkerAlt className="em-section-icon" />
          <h2>Medical Emergency Facilities</h2>
          <p>Nearest hospitals and medical centers with emergency services</p>
        </div>
        
        <div className="em-facilities-grid">
          {medicalFacilities.map(facility => (
            <div className="em-facility-card" key={facility.id}>
              <div className="em-facility-icon">
                {facility.icon}
              </div>
              <h3>{facility.name}</h3>
              <p className="em-facility-address">
                <FaMapMarkerAlt /> {facility.address}
              </p>
              <p className="em-facility-phone">
                <FaPhoneAlt /> {facility.phone}
              </p>
              <div className="em-facility-services">
                {facility.services.map((service, index) => (
                  <span className="em-service-tag" key={index}>{service}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="em-safety-section">
        <div className="em-section-header">
          <GiHealthNormal className="em-section-icon" />
          <h2>Emergency Response Tips</h2>
          <p>What to do while waiting for emergency services</p>
        </div>
        
        <div className="em-safety-grid">
          {safetyTips.map(tip => (
            <div className="em-safety-card" key={tip.id}>
              <div className="em-safety-header">
                <div className="em-safety-icon">{tip.icon}</div>
                <h3>{tip.category}</h3>
              </div>
              <ul className="em-tips-list">
                {tip.tips.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div className="em-firstaid-section">
        <div className="em-section-header">
          <FaBandAid className="em-section-icon" />
          <h2>First Aid Procedures</h2>
          <p>Basic first aid for common emergency situations</p>
        </div>
        
        <div className="em-firstaid-accordion">
          {firstAidSteps.map(item => (
            <details className="em-firstaid-item" key={item.id}>
              <summary className="em-firstaid-header">
                <div className="em-firstaid-title">
                  <div className="em-firstaid-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                </div>
                <div className="em-firstaid-arrow">▼</div>
              </summary>
              <div className="em-firstaid-content">
                <ol className="em-steps-list">
                  {item.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            </details>
          ))}
        </div>
      </div>
      
      <div className="em-disclaimer">
        <BsInfoCircleFill className="em-disclaimer-icon" />
        <p>This information is for guidance only. In case of emergencies, always call professional emergency services immediately. First aid tips provided here are basic guidelines and not a substitute for professional medical care.</p>
      </div>
      
      <div className="em-footer">
        <div className="em-emergency-call">
          <FaRunning className="em-footer-icon" />
          <h3>In Emergency, Act Fast</h3>
          <p>Call <strong>112</strong> - National Emergency Number</p>
          <div className="em-pulse-ring"></div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyServices;
