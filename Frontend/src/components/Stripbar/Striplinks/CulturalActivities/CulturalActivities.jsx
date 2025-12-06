import React from 'react';
import './CulturalActivities.css';
import { FaTheaterMasks, FaMusic, FaGuitar, FaPalette, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import { GiDrum, GiBookshelf, GiIndianPalace } from 'react-icons/gi';
import { RiBrushFill } from "react-icons/ri";
import { SiBytedance } from "react-icons/si";
import { BiCameraMovie } from 'react-icons/bi';

const CulturalActivities = () => {
  const culturalEvents = [
    {
      id: 1,
      title: "Classical Dance Festival",
      date: "September 15-20, 2025",
      description: "Experience the richness of Indian classical dance forms including Bharatanatyam, Kathak, Odissi, and more.",
      icon: <SiBytedance />
    },
    {
      id: 2,
      title: "Folk Music Night",
      date: "October 5, 2025",
      description: "A mesmerizing evening featuring traditional folk music from different states of India.",
      icon: <FaMusic />
    },
    {
      id: 3,
      title: "Heritage Arts Exhibition",
      date: "October 12-18, 2025",
      description: "Showcasing traditional paintings, sculptures, and crafts from across the country.",
      icon: <FaPalette />
    },
    {
      id: 4,
      title: "Theater Festival",
      date: "November 1-7, 2025",
      description: "Regional theater groups presenting plays in multiple languages highlighting Indian culture and values.",
      icon: <FaTheaterMasks />
    }
  ];

  const culturalActivities = [
    {
      id: 1,
      title: "Dance Classes",
      description: "Weekly classes for classical and folk dance forms for all age groups.",
      icon: <SiBytedance />
    },
    {
      id: 2,
      title: "Music Workshop",
      description: "Learn vocal and instrumental music from experienced maestros.",
      icon: <FaGuitar />
    },
    {
      id: 3,
      title: "Art & Craft Workshops",
      description: "Discover traditional painting styles and handicrafts every weekend.",
      icon: <RiBrushFill />
    },
    {
      id: 4,
      title: "Cultural Exchange Programs",
      description: "Interact with artists and performers from different parts of India and abroad.",
      icon: <FaUsers />
    },
    {
      id: 5,
      title: "Film Screenings",
      description: "Regional and classic cinema showcasing India's diverse cultural heritage.",
      icon: <BiCameraMovie />
    },
    {
      id: 6,
      title: "Literary Meetups",
      description: "Poetry recitations and book discussions focusing on Indian literature.",
      icon: <GiBookshelf />
    }
  ];

  return (
    <div className="cultural-activities-container">
      <div className="ca-hero">
        <div className="ca-hero-content">
          <h1>Cultural Activities</h1>
          <p>Celebrating India's rich cultural heritage through arts, music, dance, and more</p>
          <div className="ca-hero-icons">
            <GiIndianPalace />
            <FaTheaterMasks />
            <GiDrum />
          </div>
        </div>
      </div>

      <div className="ca-section">
        <h2 className="ca-section-title">
          <span className="ca-section-icon"><FaCalendarAlt /></span>
          Upcoming Cultural Events
        </h2>
        
        <div className="ca-events">
          {culturalEvents.map(event => (
            <div className="ca-event-card" key={event.id}>
              <div className="ca-event-icon">{event.icon}</div>
              <h3>{event.title}</h3>
              <div className="ca-event-date">{event.date}</div>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="ca-quote">
        <blockquote>
          "Culture is the widening of the mind and of the spirit"
          <cite>- Jawaharlal Nehru</cite>
        </blockquote>
      </div>

      <div className="ca-section ca-activities-section">
        <h2 className="ca-section-title">
          <span className="ca-section-icon"><FaUsers /></span>
          Regular Cultural Activities
        </h2>
        
        <div className="ca-activities">
          {culturalActivities.map(activity => (
            <div className="ca-activity-card" key={activity.id}>
              <div className="ca-activity-icon">{activity.icon}</div>
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="ca-participation">
        <h2>Join Our Cultural Community</h2>
        <p>Participate, learn, and celebrate the rich diversity of Indian art and culture</p>
        <div className="ca-contact">
          <p>For registrations and inquiries, contact: <strong>cultural@civicspot.org</strong> | Phone: <strong>+91 98765 43210</strong></p>
        </div>
      </div>
    </div>
  );
};

export default CulturalActivities;
