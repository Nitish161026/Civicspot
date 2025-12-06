import React from 'react';
import './CommunityNews.css';
import { FaNewspaper, FaCalendarAlt, FaMicrophone, FaUsers, FaHeart, FaFilm, FaMapMarkerAlt, FaRegBell } from 'react-icons/fa';
import { MdEventNote, MdCelebration, MdSportsVolleyball, MdOutlineLocalActivity } from 'react-icons/md';
import { BsFillAwardFill, BsStars } from 'react-icons/bs';
import { RiCommunityFill } from 'react-icons/ri';

const CommunityNews = () => {
  const newsItems = [
    {
      id: 1,
      title: "Community Clean-up Drive",
      date: "August 25, 2025",
      location: "Parkland Community Center",
      category: "Event",
      description: "Join us for our monthly community clean-up initiative. Bring gloves and wear comfortable shoes!",
      icon: <MdOutlineLocalActivity />
    },
    {
      id: 2,
      title: "New Library Extension Opening",
      date: "September 3, 2025",
      location: "Central Library",
      category: "Development",
      description: "The new digital resources section of our community library will be inaugurated next month.",
      icon: <FaRegBell />
    },
    {
      id: 3,
      title: "Community Cricket Tournament",
      date: "September 10-15, 2025",
      location: "Community Sports Ground",
      category: "Sports",
      description: "Annual cricket tournament featuring 16 teams from across the district.",
      icon: <MdSportsVolleyball />
    },
    {
      id: 4,
      title: "Health Camp Success",
      date: "August 10, 2025",
      location: "Primary Health Center",
      category: "Health",
      description: "Recent health camp served over 500 residents with free check-ups and consultations.",
      icon: <FaHeart />
    },
    {
      id: 5,
      title: "Cultural Evening",
      date: "August 30, 2025",
      location: "Community Hall",
      category: "Culture",
      description: "Celebrate our diverse heritage with dance, music, and food from different regions.",
      icon: <MdCelebration />
    },
    {
      id: 6,
      title: "Youth Skills Workshop",
      date: "September 5, 2025",
      location: "Youth Center",
      category: "Education",
      description: "Free workshop on digital skills and entrepreneurship for youth aged 16-24.",
      icon: <FaUsers />
    }
  ];

  const highlights = [
    {
      id: 1,
      title: "Student Wins National Award",
      description: "Ananya Sharma from our community school won the National Science Innovation Award.",
      icon: <BsFillAwardFill />
    },
    {
      id: 2,
      title: "Community Radio Launch",
      description: "Our new community radio station 'Voice of the People' goes live next month.",
      icon: <FaMicrophone />
    },
    {
      id: 3,
      title: "Documentary Feature",
      description: "Our town's sustainable practices are featured in a national documentary.",
      icon: <FaFilm />
    },
    {
      id: 4,
      title: "Community Achievement",
      description: "Our district recognized as one of the cleanest in the state.",
      icon: <BsStars />
    }
  ];

  return (
    <div className="community-news-container">
      <div className="cn-header">
        <div className="cn-header-content">
          <RiCommunityFill className="cn-main-icon" />
          <h1>Community News</h1>
          <p>Stay connected with what's happening in your neighborhood</p>
        </div>
      </div>

      <div className="cn-upcoming-section">
        <div className="cn-section-header">
          <div className="cn-section-icon">
            <FaCalendarAlt />
          </div>
          <h2>Upcoming Events & News</h2>
          <p>Latest updates from our community</p>
        </div>
        
        <div className="cn-cards-container">
          {newsItems.map(item => (
            <div className="cn-news-card" key={item.id} data-category={item.category.toLowerCase()}>
              <div className="cn-news-category">
                <span>{item.category}</span>
              </div>
              <div className="cn-news-icon">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <div className="cn-news-details">
                <div className="cn-news-date">
                  <FaCalendarAlt /> <span>{item.date}</span>
                </div>
                <div className="cn-news-location">
                  <FaMapMarkerAlt /> <span>{item.location}</span>
                </div>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="cn-newsletter">
        <div className="cn-newsletter-content">
          <div className="cn-newsletter-text">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Get weekly updates delivered straight to your inbox</p>
          </div>
          <div className="cn-newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="cn-highlights-section">
        <div className="cn-section-header">
          <div className="cn-section-icon">
            <FaNewspaper />
          </div>
          <h2>Community Highlights</h2>
          <p>Celebrating our community's achievements</p>
        </div>
        
        <div className="cn-highlights-container">
          {highlights.map(highlight => (
            <div className="cn-highlight-card" key={highlight.id}>
              <div className="cn-highlight-icon">
                {highlight.icon}
              </div>
              <div className="cn-highlight-content">
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cn-community-voice">
        <h2>Share Your News</h2>
        <p>Have something to share with the community? Submit your news or event!</p>
        <button className="cn-submit-button">Submit News</button>
      </div>
    </div>
  );
};

export default CommunityNews;
