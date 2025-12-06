import React, { useState } from 'react';
import './PublicTransport.css';
import { 
  FaBus, 
  FaTrain, 
  FaTaxi, 
  FaSubway, 
  FaSearch,
  FaRoute,
  FaClock,
  FaMapMarkedAlt,
  FaTicketAlt,
  FaWheelchair,
  FaExchangeAlt,
  FaInfoCircle,
  FaBell,
  FaStar
} from 'react-icons/fa';
import { MdDirectionsBike, MdTram, MdFlight, MdDirectionsBoat } from 'react-icons/md';

const PublicTransport = () => {
  const [activeTab, setActiveTab] = useState('routes');
  const [activeTransportFilter, setActiveTransportFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [showRouteDetails, setShowRouteDetails] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');

  // Handle route planner form submission
  const handleRoutePlannerSubmit = (e) => {
    e.preventDefault();
    console.log('Route search submitted:', { from: fromLocation, to: toLocation });
    alert('Route planning feature will connect to transportation API in production version.');
  };

  // Get user's current location for nearby stops
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          alert('Location detected! This would show nearby stops in production.');
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Unable to get your location. Please enable location services.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  // Transportation routes data
  const transportRoutes = {
    bus: [
      {
        id: 'bus1',
        routeNumber: 'B101',
        name: 'City Center - Suburbs Express',
        type: 'Bus',
        operator: 'City Transit Authority',
        frequency: '10 minutes',
        operatingHours: '05:00 - 23:00',
        fareRange: '₹10 - ₹25',
        stops: [
          { name: 'City Center Bus Terminal', time: '05:00, 05:10, 05:20, ...' },
          { name: 'Central Market', time: '05:07, 05:17, 05:27, ...' },
          { name: 'Gandhi Road', time: '05:15, 05:25, 05:35, ...' },
          { name: 'Hospital Complex', time: '05:22, 05:32, 05:42, ...' },
          { name: 'University Campus', time: '05:30, 05:40, 05:50, ...' },
          { name: 'IT Park', time: '05:38, 05:48, 05:58, ...' },
          { name: 'Residential Zone A', time: '05:45, 05:55, 06:05, ...' },
          { name: 'Suburban Mall', time: '05:52, 06:02, 06:12, ...' },
          { name: 'Suburban Terminal', time: '06:00, 06:10, 06:20, ...' }
        ],
        features: [
          'Air-conditioned',
          'WiFi connectivity',
          'USB charging ports',
          'GPS tracking',
          'Wheelchair accessible'
        ],
        description: 'Express bus service connecting the city center to suburban areas with limited stops for faster travel time. This service is designed for daily commuters and offers modern amenities for a comfortable journey.',
        realTimeStatus: 'On schedule',
        crowdLevel: 'Moderate'
      },
      {
        id: 'bus2',
        routeNumber: 'B203',
        name: 'Ring Road Circuit',
        type: 'Bus',
        operator: 'City Transit Authority',
        frequency: '15 minutes',
        operatingHours: '06:00 - 22:00',
        fareRange: '₹15 - ₹30',
        stops: [
          { name: 'Central Bus Station', time: '06:00, 06:15, 06:30, ...' },
          { name: 'West Market', time: '06:10, 06:25, 06:40, ...' },
          { name: 'Industrial Area', time: '06:20, 06:35, 06:50, ...' },
          { name: 'Sports Complex', time: '06:30, 06:45, 07:00, ...' },
          { name: 'North Residential Area', time: '06:40, 06:55, 07:10, ...' },
          { name: 'East Commercial Hub', time: '06:50, 07:05, 07:20, ...' },
          { name: 'Central Bus Station', time: '07:00, 07:15, 07:30, ...' }
        ],
        features: [
          'Low-floor buses',
          'Electronic display boards',
          'Wheelchair accessible',
          'CCTV surveillance',
          'Contactless payment'
        ],
        description: 'Circular route that runs along the city\'s ring road, connecting major residential, commercial, and industrial areas. Convenient for those who need to travel between different parts of the city without going through the congested center.',
        realTimeStatus: '10 minutes delayed',
        crowdLevel: 'High'
      },
      {
        id: 'bus3',
        routeNumber: 'B305',
        name: 'Airport Express',
        type: 'Bus',
        operator: 'Airport Authority',
        frequency: '30 minutes',
        operatingHours: '04:30 - 23:30',
        fareRange: '₹50 - ₹70',
        stops: [
          { name: 'Airport Terminal 1', time: '04:30, 05:00, 05:30, ...' },
          { name: 'Airport Terminal 2', time: '04:35, 05:05, 05:35, ...' },
          { name: 'Highway Toll', time: '04:45, 05:15, 05:45, ...' },
          { name: 'Central Railway Station', time: '05:10, 05:40, 06:10, ...' },
          { name: 'City Center Bus Terminal', time: '05:20, 05:50, 06:20, ...' }
        ],
        features: [
          'Luggage racks',
          'Air-conditioned',
          'WiFi connectivity',
          'Comfortable seating',
          'Real-time flight information'
        ],
        description: 'Premium bus service connecting the airport terminals to key locations in the city. Designed for travelers with extra space for luggage and real-time flight information displays.',
        realTimeStatus: 'On schedule',
        crowdLevel: 'Low'
      }
    ],
    metro: [
      {
        id: 'metro1',
        routeNumber: 'M1',
        name: 'North-South Line',
        type: 'Metro',
        operator: 'City Metro Rail Corporation',
        frequency: '5 minutes (peak), 8 minutes (off-peak)',
        operatingHours: '06:00 - 22:00',
        fareRange: '₹10 - ₹50',
        stops: [
          { name: 'North Terminal', time: '06:00, 06:05, 06:10, ...' },
          { name: 'Industrial Zone', time: '06:03, 06:08, 06:13, ...' },
          { name: 'Science City', time: '06:07, 06:12, 06:17, ...' },
          { name: 'Gandhi Nagar', time: '06:11, 06:16, 06:21, ...' },
          { name: 'Central Junction', time: '06:15, 06:20, 06:25, ...' },
          { name: 'Market Complex', time: '06:19, 06:24, 06:29, ...' },
          { name: 'Tech Park', time: '06:23, 06:28, 06:33, ...' },
          { name: 'South Terminal', time: '06:28, 06:33, 06:38, ...' }
        ],
        features: [
          'Air-conditioned coaches',
          'Women-only compartments',
          'WiFi connectivity',
          'Disability-friendly access',
          'Digital ticket system',
          'Real-time train tracking'
        ],
        description: 'The backbone of the city\'s rapid transit system, the North-South Line connects the northern suburbs to the southern residential areas, passing through the city center and key commercial districts.',
        realTimeStatus: 'On schedule',
        crowdLevel: 'Very high during peak hours'
      },
      {
        id: 'metro2',
        routeNumber: 'M2',
        name: 'East-West Corridor',
        type: 'Metro',
        operator: 'City Metro Rail Corporation',
        frequency: '6 minutes (peak), 10 minutes (off-peak)',
        operatingHours: '06:30 - 22:30',
        fareRange: '₹10 - ₹45',
        stops: [
          { name: 'East Terminal', time: '06:30, 06:36, 06:42, ...' },
          { name: 'Riverside Station', time: '06:34, 06:40, 06:46, ...' },
          { name: 'Heritage Zone', time: '06:38, 06:44, 06:50, ...' },
          { name: 'Central Junction', time: '06:43, 06:49, 06:55, ...' },
          { name: 'Stadium', time: '06:47, 06:53, 06:59, ...' },
          { name: 'Business District', time: '06:51, 06:57, 07:03, ...' },
          { name: 'West Terminal', time: '06:55, 07:01, 07:07, ...' }
        ],
        features: [
          'Underground stations with climate control',
          'Platform screen doors',
          'Mobile connectivity throughout',
          'Bicycle parking at stations',
          'Integrated smart card system'
        ],
        description: 'Connecting the eastern and western parts of the city, this line intersects with the North-South Line at Central Junction, forming an important interchange point in the metro network.',
        realTimeStatus: '3 minutes delayed',
        crowdLevel: 'Moderate'
      }
    ],
    train: [
      {
        id: 'train1',
        routeNumber: 'T15',
        name: 'City - Suburban Rail',
        type: 'Local Train',
        operator: 'Indian Railways',
        frequency: '20 minutes',
        operatingHours: '04:30 - 23:40',
        fareRange: '₹10 - ₹30',
        stops: [
          { name: 'Central Railway Station', time: '04:30, 04:50, 05:10, ...' },
          { name: 'Cantonment', time: '04:40, 05:00, 05:20, ...' },
          { name: 'Mahanagar', time: '04:50, 05:10, 05:30, ...' },
          { name: 'Industrial Township', time: '05:00, 05:20, 05:40, ...' },
          { name: 'New Colony', time: '05:10, 05:30, 05:50, ...' },
          { name: 'Suburban Terminal', time: '05:20, 05:40, 06:00, ...' }
        ],
        features: [
          'Ladies compartment',
          'First class coaches',
          'Luggage compartment',
          'Mobile ticket booking',
          'Season ticket option'
        ],
        description: 'The suburban rail network is the lifeline for thousands of daily commuters traveling between the city and surrounding suburbs. Trains run frequently and connect to other modes of transport including metro and bus services.',
        realTimeStatus: 'All services running normally',
        crowdLevel: 'Very high during morning and evening rush hours'
      }
    ],
    ferry: [
      {
        id: 'ferry1',
        routeNumber: 'F01',
        name: 'Riverside Ferry Service',
        type: 'Ferry',
        operator: 'City Water Transport Authority',
        frequency: '30 minutes',
        operatingHours: '07:00 - 19:00',
        fareRange: '₹20 - ₹40',
        stops: [
          { name: 'North Riverside Terminal', time: '07:00, 07:30, 08:00, ...' },
          { name: 'Heritage Pier', time: '07:10, 07:40, 08:10, ...' },
          { name: 'Central Jetty', time: '07:20, 07:50, 08:20, ...' },
          { name: 'Business District Dock', time: '07:30, 08:00, 08:30, ...' },
          { name: 'South Riverside Terminal', time: '07:45, 08:15, 08:45, ...' }
        ],
        features: [
          'Open-air and covered seating',
          'Bicycle transport allowed',
          'Café onboard',
          'Sightseeing commentary',
          'Accessible for wheelchair users'
        ],
        description: 'A scenic alternative to road transport, the riverside ferry service connects major points along the river while offering beautiful views of the city skyline. Popular with both commuters and tourists.',
        realTimeStatus: 'Operating normally',
        crowdLevel: 'Moderate, high on weekends'
      }
    ]
  };

  // Fare information
  const fareInformation = {
    bus: {
      singleJourney: 'From ₹10 (regular) to ₹70 (airport express)',
      dailyPass: '₹100 (unlimited travel for one day)',
      weeklyPass: '₹600 (unlimited travel for one week)',
      monthlyPass: '₹2000 (unlimited travel for one month)',
      seniorCitizen: '50% discount on all tickets',
      student: '40% discount with valid student ID',
      concessions: 'Available for differently-abled citizens (75% off)'
    },
    metro: {
      singleJourney: 'From ₹10 to ₹50 based on distance',
      dailyPass: '₹150 (unlimited travel for one day)',
      touristPass: '₹300 (3-day unlimited travel)',
      monthlyPass: '₹2500 (unlimited travel for one month)',
      groupDiscount: '10% discount for groups of 4 or more',
      seniorCitizen: '40% discount on all tickets',
      student: '50% discount with valid student ID'
    },
    train: {
      singleJourney: 'From ₹10 to ₹30 based on distance and class',
      monthlyPass: 'From ₹300 to ₹900 based on distance and class',
      quarterlyPass: 'From ₹800 to ₹2400 based on distance and class',
      seniorCitizen: '40% discount for citizens above 60 years',
      ladiesConcession: '25% discount for women travelers',
      seasonTicket: 'Available for 1, 3, 6 and 12 months at discounted rates'
    },
    ferry: {
      singleJourney: 'From ₹20 to ₹40 based on distance',
      roundTrip: 'From ₹35 to ₹70 (10% discount on return journey)',
      weeklyPass: '₹500 (unlimited travel for one week)',
      touristDay: '₹200 (unlimited travel for one day + audio guide)'
    },
    integrated: {
      cityPass: '₹200 per day (unlimited travel on all modes of transport)',
      touristCard: '₹500 (3-day unlimited travel on all modes of transport)',
      smartCard: 'One-time cost of ₹100 with 10% discount on all journeys',
      mobileTicketing: 'Additional 5% discount when booked through official app'
    }
  };

  // Service updates
  const serviceUpdates = [
    {
      id: 'update1',
      type: 'Disruption',
      mode: 'Metro',
      line: 'M1 (North-South Line)',
      status: 'Minor delays',
      description: 'Trains running with 10-15 minute delays due to technical issue at Central Junction station.',
      timestamp: '22 Aug 2025, 08:30',
      expectedResolution: '22 Aug 2025, 12:00',
      alternativeRoutes: 'Bus routes B101 and B203 are operational along similar routes.'
    },
    {
      id: 'update2',
      type: 'Planned Maintenance',
      mode: 'Bus',
      line: 'B203 (Ring Road Circuit)',
      status: 'Partial closure',
      description: 'Buses will not stop at Industrial Area and Sports Complex on 25-26 August due to road repairs.',
      timestamp: '20 Aug 2025, 10:00',
      expectedResolution: '26 Aug 2025, 20:00',
      alternativeRoutes: 'Temporary shuttle buses will operate between West Market and North Residential Area.'
    },
    {
      id: 'update3',
      type: 'Service Enhancement',
      mode: 'Ferry',
      line: 'F01 (Riverside Ferry)',
      status: 'Increased frequency',
      description: 'Additional ferries during evening hours (17:00-19:00) starting 1 September. Ferries will run every 15 minutes instead of 30 minutes.',
      timestamp: '21 Aug 2025, 14:00',
      expectedResolution: 'Permanent change',
      alternativeRoutes: 'N/A'
    },
    {
      id: 'update4',
      type: 'Special Service',
      mode: 'All',
      line: 'All routes',
      status: 'Extended hours',
      description: 'All public transport services will run until 02:00 on 15 September due to the City Festival celebrations.',
      timestamp: '22 Aug 2025, 09:00',
      expectedResolution: 'One-time event',
      alternativeRoutes: 'N/A'
    }
  ];

  // Filtered transportation routes based on active filter and search term
  const filteredRoutes = () => {
    let routes = [];
    
    if (activeTransportFilter === 'all') {
      Object.values(transportRoutes).forEach(modeRoutes => {
        routes = [...routes, ...modeRoutes];
      });
    } else {
      routes = transportRoutes[activeTransportFilter] || [];
    }
    
    if (searchTerm.trim() === '') return routes;
    
    return routes.filter(route => 
      route.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      route.routeNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.stops.some(stop => stop.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  return (
    <div className="public-transport-container">
      <div className="public-transport-header">
        <h1><FaBus /> Public Transport Information</h1>
        <p>Find routes, schedules, fares, and real-time updates for all public transportation in the city</p>
      </div>
      
      <div className="transport-tabs">
        <button 
          className={`tab-btn ${activeTab === 'routes' ? 'active' : ''}`}
          onClick={() => setActiveTab('routes')}
        >
          <FaRoute /> Routes & Schedules
        </button>
        <button 
          className={`tab-btn ${activeTab === 'planner' ? 'active' : ''}`}
          onClick={() => setActiveTab('planner')}
        >
          <FaMapMarkedAlt /> Route Planner
        </button>
        <button 
          className={`tab-btn ${activeTab === 'fares' ? 'active' : ''}`}
          onClick={() => setActiveTab('fares')}
        >
          <FaTicketAlt /> Fare Information
        </button>
        <button 
          className={`tab-btn ${activeTab === 'updates' ? 'active' : ''}`}
          onClick={() => setActiveTab('updates')}
        >
          <FaBell /> Service Updates
        </button>
      </div>
      
      {activeTab === 'routes' && (
        <div className="routes-container">
          <div className="search-and-filters">
            <div className="search-bar">
              <FaSearch />
              <input
                type="text"
                placeholder="Search by route number, name, or stop..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="transport-filters">
              <button 
                className={`filter-btn ${activeTransportFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTransportFilter('all')}
              >
                All
              </button>
              <button 
                className={`filter-btn ${activeTransportFilter === 'bus' ? 'active' : ''}`}
                onClick={() => setActiveTransportFilter('bus')}
              >
                <FaBus /> Bus
              </button>
              <button 
                className={`filter-btn ${activeTransportFilter === 'metro' ? 'active' : ''}`}
                onClick={() => setActiveTransportFilter('metro')}
              >
                <FaSubway /> Metro
              </button>
              <button 
                className={`filter-btn ${activeTransportFilter === 'train' ? 'active' : ''}`}
                onClick={() => setActiveTransportFilter('train')}
              >
                <FaTrain /> Train
              </button>
              <button 
                className={`filter-btn ${activeTransportFilter === 'ferry' ? 'active' : ''}`}
                onClick={() => setActiveTransportFilter('ferry')}
              >
                <MdDirectionsBoat /> Ferry
              </button>
            </div>
          </div>
          
          <div className="routes-list">
            {filteredRoutes().length > 0 ? (
              filteredRoutes().map(route => (
                <div 
                  key={route.id} 
                  className={`route-card ${selectedRoute === route.id ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedRoute(route.id);
                    setShowRouteDetails(true);
                  }}
                >
                  <div className="route-header">
                    <div className="route-type-icon">
                      {route.type === 'Bus' && <FaBus />}
                      {route.type === 'Metro' && <FaSubway />}
                      {route.type === 'Local Train' && <FaTrain />}
                      {route.type === 'Ferry' && <MdDirectionsBoat />}
                    </div>
                    <div className="route-basic-info">
                      <h3>{route.routeNumber}: {route.name}</h3>
                      <p className="route-operator">{route.operator}</p>
                    </div>
                    <div className="route-status" data-status={route.realTimeStatus.includes('delay') ? 'delayed' : 'normal'}>
                      {route.realTimeStatus}
                    </div>
                  </div>
                  
                  <div className="route-summary">
                    <div className="route-detail">
                      <FaClock /> <span>{route.operatingHours}</span>
                    </div>
                    <div className="route-detail">
                      <FaExchangeAlt /> <span>Every {route.frequency}</span>
                    </div>
                    <div className="route-detail">
                      <FaTicketAlt /> <span>{route.fareRange}</span>
                    </div>
                  </div>
                  
                  {selectedRoute === route.id && showRouteDetails && (
                    <div className="route-details">
                      <p className="route-description">{route.description}</p>
                      
                      <div className="route-stops">
                        <h4>Stops & Schedule</h4>
                        <ul className="stops-list">
                          {route.stops.map((stop, index) => (
                            <li key={index} className="stop-item">
                              <div className="stop-marker"></div>
                              <div className="stop-info">
                                <span className="stop-name">{stop.name}</span>
                                <span className="stop-time">{stop.time}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="route-features">
                        <h4>Features</h4>
                        <ul className="features-list">
                          {route.features.map((feature, index) => (
                            <li key={index} className="feature-item">
                              <FaStar className="feature-icon" /> {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="route-crowd-info">
                        <h4>Current Crowd Level</h4>
                        <p className={`crowd-level ${route.crowdLevel.toLowerCase().replace(' ', '-')}`}>
                          {route.crowdLevel}
                        </p>
                      </div>
                      
                      <button 
                        className="close-details-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowRouteDetails(false);
                          setSelectedRoute(null);
                        }}
                      >
                        Close Details
                      </button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="no-routes-found">
                <FaInfoCircle className="no-results-icon" />
                <p>No routes found matching your search criteria.</p>
              </div>
            )}
          </div>
        </div>
      )}
      
      {activeTab === 'planner' && (
        <div className="route-planner-container">
          <div className="planner-header">
            <h2>Plan Your Journey</h2>
            <p>Find the best route to your destination using public transportation</p>
          </div>
          
          <form className="route-planner-form" onSubmit={handleRoutePlannerSubmit}>
            <div className="form-group">
              <label>From:</label>
              <div className="location-input">
                <input
                  type="text"
                  placeholder="Enter starting location"
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                  required
                />
                <button 
                  type="button" 
                  className="current-location-btn"
                  onClick={getCurrentLocation}
                  title="Use current location"
                >
                  <FaMapMarkedAlt />
                </button>
              </div>
            </div>
            
            <div className="form-group">
              <label>To:</label>
              <input
                type="text"
                placeholder="Enter destination"
                value={toLocation}
                onChange={(e) => setToLocation(e.target.value)}
                required
              />
            </div>
            
            <div className="form-row">
              <div className="form-group half">
                <label>Date:</label>
                <input type="date" defaultValue={new Date().toISOString().split('T')[0]} />
              </div>
              
              <div className="form-group half">
                <label>Time:</label>
                <input type="time" defaultValue="12:00" />
              </div>
            </div>
            
            <div className="transport-preference">
              <span>Preferred transportation:</span>
              <div className="preference-options">
                <label className="preference-option">
                  <input type="checkbox" defaultChecked />
                  <FaBus /> Bus
                </label>
                <label className="preference-option">
                  <input type="checkbox" defaultChecked />
                  <FaSubway /> Metro
                </label>
                <label className="preference-option">
                  <input type="checkbox" defaultChecked />
                  <FaTrain /> Train
                </label>
                <label className="preference-option">
                  <input type="checkbox" defaultChecked />
                  <MdDirectionsBoat /> Ferry
                </label>
                <label className="preference-option">
                  <input type="checkbox" />
                  <MdDirectionsBike /> Bike Share
                </label>
              </div>
            </div>
            
            <div className="route-preferences">
              <span>Route preferences:</span>
              <div className="preference-options">
                <label className="preference-option">
                  <input type="radio" name="routePreference" defaultChecked />
                  Fastest
                </label>
                <label className="preference-option">
                  <input type="radio" name="routePreference" />
                  Fewest transfers
                </label>
                <label className="preference-option">
                  <input type="radio" name="routePreference" />
                  Least walking
                </label>
                <label className="preference-option">
                  <input type="radio" name="routePreference" />
                  Lowest fare
                </label>
              </div>
            </div>
            
            <div className="accessibility-options">
              <label className="accessibility-option">
                <input type="checkbox" />
                <FaWheelchair /> Wheelchair accessible routes only
              </label>
            </div>
            
            <button type="submit" className="plan-route-btn">
              Plan My Route
            </button>
          </form>
          
          <div className="popular-destinations">
            <h3>Popular Destinations</h3>
            <div className="popular-destination-buttons">
              <button onClick={() => setToLocation('Central Railway Station')}>Central Railway Station</button>
              <button onClick={() => setToLocation('City Center Mall')}>City Center Mall</button>
              <button onClick={() => setToLocation('University Campus')}>University Campus</button>
              <button onClick={() => setToLocation('Airport Terminal')}>Airport Terminal</button>
              <button onClick={() => setToLocation('Tech Park')}>Tech Park</button>
              <button onClick={() => setToLocation('General Hospital')}>General Hospital</button>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'fares' && (
        <div className="fares-container">
          <div className="fares-header">
            <h2>Fare Information</h2>
            <p>Details about tickets, passes, and concessions for all public transportation services</p>
          </div>
          
          <div className="fare-categories">
            <div className="fare-category">
              <div className="category-header">
                <FaBus /> Bus Fares
              </div>
              <div className="fare-details">
                <div className="fare-item">
                  <span className="fare-name">Single Journey:</span>
                  <span className="fare-value">{fareInformation.bus.singleJourney}</span>
                </div>
                <div className="fare-item">
                  <span className="fare-name">Daily Pass:</span>
                  <span className="fare-value">{fareInformation.bus.dailyPass}</span>
                </div>
                <div className="fare-item">
                  <span className="fare-name">Weekly Pass:</span>
                  <span className="fare-value">{fareInformation.bus.weeklyPass}</span>
                </div>
                <div className="fare-item">
                  <span className="fare-name">Monthly Pass:</span>
                  <span className="fare-value">{fareInformation.bus.monthlyPass}</span>
                </div>
                <div className="concessions">
                  <p><strong>Concessions:</strong></p>
                  <p>Senior Citizens: {fareInformation.bus.seniorCitizen}</p>
                  <p>Students: {fareInformation.bus.student}</p>
                  <p>Differently-abled: {fareInformation.bus.concessions}</p>
                </div>
              </div>
            </div>
            
            <div className="fare-category">
              <div className="category-header">
                <FaSubway /> Metro Fares
              </div>
              <div className="fare-details">
                <div className="fare-item">
                  <span className="fare-name">Single Journey:</span>
                  <span className="fare-value">{fareInformation.metro.singleJourney}</span>
                </div>
                <div className="fare-item">
                  <span className="fare-name">Daily Pass:</span>
                  <span className="fare-value">{fareInformation.metro.dailyPass}</span>
                </div>
                <div className="fare-item">
                  <span className="fare-name">Tourist Pass:</span>
                  <span className="fare-value">{fareInformation.metro.touristPass}</span>
                </div>
                <div className="fare-item">
                  <span className="fare-name">Monthly Pass:</span>
                  <span className="fare-value">{fareInformation.metro.monthlyPass}</span>
                </div>
                <div className="concessions">
                  <p><strong>Concessions:</strong></p>
                  <p>Senior Citizens: {fareInformation.metro.seniorCitizen}</p>
                  <p>Students: {fareInformation.metro.student}</p>
                  <p>Groups: {fareInformation.metro.groupDiscount}</p>
                </div>
              </div>
            </div>
            
            <div className="fare-category">
              <div className="category-header">
                <FaTrain /> Train Fares
              </div>
              <div className="fare-details">
                <div className="fare-item">
                  <span className="fare-name">Single Journey:</span>
                  <span className="fare-value">{fareInformation.train.singleJourney}</span>
                </div>
                <div className="fare-item">
                  <span className="fare-name">Monthly Pass:</span>
                  <span className="fare-value">{fareInformation.train.monthlyPass}</span>
                </div>
                <div className="fare-item">
                  <span className="fare-name">Quarterly Pass:</span>
                  <span className="fare-value">{fareInformation.train.quarterlyPass}</span>
                </div>
                <div className="concessions">
                  <p><strong>Concessions:</strong></p>
                  <p>Senior Citizens: {fareInformation.train.seniorCitizen}</p>
                  <p>Women Travelers: {fareInformation.train.ladiesConcession}</p>
                  <p>Season Tickets: {fareInformation.train.seasonTicket}</p>
                </div>
              </div>
            </div>
            
            <div className="fare-category">
              <div className="category-header">
                <MdDirectionsBoat /> Ferry Fares
              </div>
              <div className="fare-details">
                <div className="fare-item">
                  <span className="fare-name">Single Journey:</span>
                  <span className="fare-value">{fareInformation.ferry.singleJourney}</span>
                </div>
                <div className="fare-item">
                  <span className="fare-name">Round Trip:</span>
                  <span className="fare-value">{fareInformation.ferry.roundTrip}</span>
                </div>
                <div className="fare-item">
                  <span className="fare-name">Weekly Pass:</span>
                  <span className="fare-value">{fareInformation.ferry.weeklyPass}</span>
                </div>
                <div className="fare-item">
                  <span className="fare-name">Tourist Day Pass:</span>
                  <span className="fare-value">{fareInformation.ferry.touristDay}</span>
                </div>
              </div>
            </div>
            
            <div className="fare-category">
              <div className="category-header">
                <FaExchangeAlt /> Integrated Tickets
              </div>
              <div className="fare-details">
                <div className="fare-item">
                  <span className="fare-name">City Pass:</span>
                  <span className="fare-value">{fareInformation.integrated.cityPass}</span>
                </div>
                <div className="fare-item">
                  <span className="fare-name">Tourist Card:</span>
                  <span className="fare-value">{fareInformation.integrated.touristCard}</span>
                </div>
                <div className="fare-item">
                  <span className="fare-name">Smart Card:</span>
                  <span className="fare-value">{fareInformation.integrated.smartCard}</span>
                </div>
                <div className="fare-item">
                  <span className="fare-name">Mobile Ticketing:</span>
                  <span className="fare-value">{fareInformation.integrated.mobileTicketing}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="fare-info-footer">
            <p className="fare-note"><strong>Note:</strong> Fares are subject to change. Children below 5 years travel free on all modes of transport.</p>
            <button className="download-fare-chart-btn">
              <FaTicketAlt /> Download Complete Fare Chart
            </button>
          </div>
        </div>
      )}
      
      {activeTab === 'updates' && (
        <div className="updates-container">
          <div className="updates-header">
            <h2>Service Updates</h2>
            <p>Latest information about service changes, delays, and special services</p>
            <div className="last-updated">
              Last updated: 22 Aug 2025, 09:30
            </div>
          </div>
          
          <div className="service-updates-list">
            {serviceUpdates.map(update => (
              <div 
                key={update.id} 
                className={`update-card ${update.type.toLowerCase().replace(' ', '-')}`}
              >
                <div className="update-type-badge">{update.type}</div>
                <div className="update-header">
                  <div className="update-mode-icon">
                    {update.mode === 'Bus' && <FaBus />}
                    {update.mode === 'Metro' && <FaSubway />}
                    {update.mode === 'Train' && <FaTrain />}
                    {update.mode === 'Ferry' && <MdDirectionsBoat />}
                    {update.mode === 'All' && <FaExchangeAlt />}
                  </div>
                  <h3>{update.line}</h3>
                </div>
                
                <div className="update-status">
                  Status: <span className={update.status.toLowerCase().replace(' ', '-')}>{update.status}</span>
                </div>
                
                <p className="update-description">{update.description}</p>
                
                <div className="update-meta">
                  <div className="update-time">
                    <FaClock /> Posted: {update.timestamp}
                  </div>
                  <div className="update-resolution">
                    <FaInfoCircle /> Expected Resolution: {update.expectedResolution}
                  </div>
                </div>
                
                {update.alternativeRoutes !== 'N/A' && (
                  <div className="alternative-routes">
                    <strong>Alternative Routes:</strong> {update.alternativeRoutes}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="updates-footer">
            <p>Subscribe to receive service updates via SMS or email</p>
            <div className="subscription-form">
              <input type="text" placeholder="Your email or phone number" />
              <button className="subscribe-btn">Subscribe</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PublicTransport;
