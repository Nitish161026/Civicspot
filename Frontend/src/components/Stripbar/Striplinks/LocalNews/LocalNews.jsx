import React, { useState } from 'react';
import './LocalNews.css';
import { FaSearch, FaFilter, FaRegNewspaper, FaCity, FaFlag, 
         FaGlobeAsia, FaUserTie, FaChartLine, FaCalendarAlt } from 'react-icons/fa';
import { MdHealthAndSafety, MdSportsBasketball, MdOutlineBusinessCenter } from 'react-icons/md';
import { GiIndianPalace, GiElectric, GiRoad } from 'react-icons/gi';
import { BiSolidTrafficCone, BiNews } from 'react-icons/bi';

const LocalNews = () => {
  const [activeCategory, setActiveCategory] = useState('latest');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedNews, setExpandedNews] = useState(null);

  const categories = [
    { id: 'latest', name: 'Latest News', icon: <FaRegNewspaper /> },
    { id: 'civic', name: 'Civic Updates', icon: <FaCity /> },
    { id: 'health', name: 'Public Health', icon: <MdHealthAndSafety /> },
    { id: 'infra', name: 'Infrastructure', icon: <GiRoad /> },
    { id: 'politics', name: 'Local Politics', icon: <FaUserTie /> },
    { id: 'culture', name: 'Cultural Events', icon: <GiIndianPalace /> },
    { id: 'sports', name: 'Sports', icon: <MdSportsBasketball /> },
    { id: 'business', name: 'Business News', icon: <MdOutlineBusinessCenter /> },
    { id: 'traffic', name: 'Traffic Updates', icon: <BiSolidTrafficCone /> },
    { id: 'utility', name: 'Utility Services', icon: <GiElectric /> }
  ];

  const newsData = {
    latest: [
      {
        id: 'news001',
        title: 'New Smart City Project Launched',
        summary: 'Municipal Corporation unveils Rs 500 crore Smart City initiative focusing on digital infrastructure.',
        date: 'August 22, 2025',
        source: 'City Herald',
        imageUrl: 'https://example.com/smart-city.jpg',
        category: 'Civic',
        content: `In a major boost to urban development, the Municipal Corporation today launched a Rs 500 crore Smart City project that aims to transform the city's infrastructure over the next three years. The project will include intelligent traffic management systems, smart streetlights, digital governance portals, and public Wi-Fi zones across major areas of the city.

        "This initiative represents our commitment to embracing technology for better civic management and improved quality of life for our citizens," said the Municipal Commissioner at the launch event. The first phase of the project will focus on establishing a command and control center that will integrate various municipal services.

        The project is being implemented under the national Smart Cities Mission and is expected to generate over 2000 jobs in the technology and urban planning sectors. Citizens can track the progress of the project through a dedicated portal that will be launched next month.`
      },
      {
        id: 'news002',
        title: 'Water Conservation Drive Shows Positive Results',
        summary: 'City\'s water conservation campaign records 20% reduction in consumption in just two months.',
        date: 'August 20, 2025',
        source: 'Environmental Times',
        imageUrl: 'https://example.com/water-conservation.jpg',
        category: 'Civic',
        content: `The water conservation awareness campaign launched by local authorities two months ago has shown remarkable results, with a 20% reduction in overall water consumption across the city. The 'Save Every Drop' initiative included awareness programs in schools, residential societies, and commercial establishments.

        The campaign introduced innovative methods like rainwater harvesting systems in public buildings, water recycling units in large housing complexes, and incentives for low water consumption. "The response from citizens has been overwhelming, showing that with proper awareness and infrastructure, we can make significant progress in resource conservation," said the Water Resources Department Director.

        The success has prompted authorities to extend the campaign for another six months with additional features including subsidies for water-efficient appliances and recognition for establishments showing exemplary water management practices.`
      },
      {
        id: 'news003',
        title: 'Local Tech Startup Secures Major Funding',
        summary: 'Homegrown AI startup receives Rs 75 crore investment to expand operations.',
        date: 'August 18, 2025',
        source: 'Business Daily',
        imageUrl: 'https://example.com/tech-startup.jpg',
        category: 'Business',
        content: `Local artificial intelligence startup InnovateTech has secured Rs 75 crore in Series B funding from a consortium of national and international investors. The company, founded by three engineering graduates from the city, specializes in AI solutions for healthcare and education sectors.

        "This investment will help us scale our operations and expand our research capabilities," said the CEO and co-founder. "We're proud to be representing Indian innovation in the global technology landscape." The startup plans to hire 150 new employees in the next year and establish a new research and development center in the city's tech park.

        InnovateTech's flagship product, an AI-powered diagnostic tool for rural healthcare centers, has already been adopted by over 200 primary health centers across five states. The company's success highlights the growing ecosystem of technology entrepreneurship in the city.`
      },
      {
        id: 'news004',
        title: 'City Celebrates Independence Day with Grand Parade',
        summary: 'Thousands gather for patriotic celebrations featuring cultural performances and tributes to freedom fighters.',
        date: 'August 15, 2025',
        source: 'National Daily',
        imageUrl: 'https://example.com/independence-day.jpg',
        category: 'Culture',
        content: `The city came alive with patriotic fervor as thousands of citizens gathered at the central parade ground to celebrate the 79th Independence Day. The event featured a grand parade by police and armed forces, cultural performances by school and college students, and tributes to freedom fighters.

        The Chief Minister hoisted the national flag and addressed the gathering, highlighting the state's achievements and future development plans. "As we celebrate our freedom, let us recommit ourselves to building a stronger, more inclusive India that our freedom fighters envisioned," he said in his speech.

        The celebrations included special performances showcasing the cultural diversity of India, with artists from different states presenting traditional dance forms. The event concluded with a spectacular drone show depicting key moments from India's freedom struggle and its journey since independence.`
      },
      {
        id: 'news005',
        title: 'New COVID Variant: Health Department on Alert',
        summary: 'Health officials monitoring situation after detection of new variant in neighboring states.',
        date: 'August 14, 2025',
        source: 'Health Bulletin',
        imageUrl: 'https://example.com/covid-update.jpg',
        category: 'Health',
        content: `The city's Health Department has issued an advisory following reports of a new COVID-19 variant detected in neighboring states. While no cases have been reported in the city yet, health officials are implementing enhanced surveillance measures at entry points and increasing testing capacity.

        "We are closely monitoring the situation and have activated our rapid response teams," said the Health Director. "There's no need for panic, but we advise citizens to follow basic precautions including mask-wearing in crowded places and maintaining hand hygiene."

        Vaccination centers across the city have been instructed to increase their capacity, and mobile vaccination units will be deployed to ensure wider coverage. The Health Department is also coordinating with hospitals to ensure adequate bed capacity and medical supplies in case of any surge in cases.`
      }
    ],
    civic: [
      {
        id: 'news101',
        title: 'City Council Approves New Waste Management System',
        summary: 'Advanced segregation and recycling system to be implemented citywide by December.',
        date: 'August 19, 2025',
        source: 'Municipal Times',
        imageUrl: 'https://example.com/waste-management.jpg',
        category: 'Civic',
        content: `The City Council has unanimously approved a new comprehensive waste management system that aims to achieve 80% waste recycling by 2026. The Rs 120 crore project will introduce advanced waste segregation facilities, biogas generation units, and plastic recycling centers across all city zones.

        "This system will not only address our waste management challenges but also create a circular economy around waste," said the Municipal Chairperson. The project includes door-to-door collection of segregated waste, incentives for households practicing proper waste segregation, and penalties for violations.

        The implementation will begin next month with a pilot program in three wards, followed by citywide rollout by December. The initiative is expected to create over 500 green jobs and significantly reduce the city's carbon footprint.`
      },
      {
        id: 'news102',
        title: 'Property Tax Deadline Extended',
        summary: 'Municipal Corporation extends property tax payment deadline to September 30.',
        date: 'August 17, 2025',
        source: 'City Herald',
        imageUrl: 'https://example.com/property-tax.jpg',
        category: 'Civic',
        content: `The Municipal Corporation has announced a one-month extension for property tax payments, moving the deadline from August 31 to September 30. The decision comes in response to requests from citizen welfare associations and considering the recent technical issues with the online payment portal.

        "We understand the challenges faced by some residents and have therefore granted this extension," said the Municipal Commissioner. "However, we encourage citizens to complete their payments well before the new deadline to avoid last-minute rush."

        The 5% early payment discount will continue to be available until the new deadline. The Corporation has also announced additional payment counters at zonal offices and mobile collection units that will visit different residential areas on weekends to facilitate payments.`
      }
    ],
    // Additional news categories data would be added here similarly
  };

  const filteredNews = () => {
    const categoryNews = activeCategory === 'latest' 
      ? [...newsData.latest]
      : newsData[activeCategory] || [];
    
    if (searchTerm.trim() === '') return categoryNews;
    
    return categoryNews.filter(news => 
      news.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      news.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const toggleExpandNews = (id) => {
    if (expandedNews === id) {
      setExpandedNews(null);
    } else {
      setExpandedNews(id);
    }
  };

  return (
    <div className="local-news-container">
      <div className="local-news-header">
        <div className="flag-stripe saffron"></div>
        <h1><FaFlag className="flag-icon" /> Local News and Updates</h1>
        <div className="flag-stripe green"></div>
      </div>
      
      <div className="news-search-bar">
        <div className="search-input">
          <FaSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Search for local news..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="news-categories">
        {categories.map(category => (
          <div 
            key={category.id}
            className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            <span className="category-icon">{category.icon}</span>
            <span className="category-name">{category.name}</span>
          </div>
        ))}
      </div>
      
      <div className="news-content">
        <div className="news-ashoka-chakra">
          <div className="chakra-center"></div>
          <div className="chakra-spokes">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="chakra-spoke" style={{ transform: `rotate(${i * 15}deg)` }}></div>
            ))}
          </div>
        </div>
        
        {filteredNews().length > 0 ? (
          <div className="news-list">
            {filteredNews().map(news => (
              <div 
                key={news.id} 
                className={`news-card ${expandedNews === news.id ? 'expanded' : ''}`}
              >
                <div className="news-card-header">
                  <div className="news-category-badge">{news.category}</div>
                  <h3 className="news-title">{news.title}</h3>
                </div>
                
                <div className="news-meta">
                  <span className="news-date"><FaCalendarAlt /> {news.date}</span>
                  <span className="news-source">{news.source}</span>
                </div>
                
                <p className="news-summary">{news.summary}</p>
                
                {expandedNews === news.id && (
                  <div className="news-full-content">
                    <p>{news.content}</p>
                  </div>
                )}
                
                <button 
                  className="news-read-more"
                  onClick={() => toggleExpandNews(news.id)}
                >
                  {expandedNews === news.id ? 'Show Less' : 'Read More'}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-news-found">
            <BiNews className="no-news-icon" />
            <p>No news found for your search criteria</p>
          </div>
        )}
      </div>
      
      <div className="local-news-footer">
        <p>Stay informed with latest updates from your city. News is refreshed daily.</p>
        <p className="disclaimer">Disclaimer: All information is verified from official sources. Report inaccuracies to the editorial team.</p>
      </div>
    </div>
  );
};

export default LocalNews;
