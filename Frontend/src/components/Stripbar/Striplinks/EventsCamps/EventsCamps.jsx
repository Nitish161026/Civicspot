import React from 'react';
import './EventsCamps.css';

const EventsCamps = () => {
  return (
    <div className="events-camps-container">
      <div className="events-camps-header">
        <div className="header-content">
          <h1>Community Events & Camps</h1>
          <p>Bringing people together for positive change</p>
        </div>
      </div>

      <div className="events-camps-section">
        <h2>Upcoming Events & Camps</h2>
        <div className="events-grid">
          {/* Event Card 1 */}
          <div className="event-card">
            <div className="event-date">
              <span className="day">25</span>
              <span className="month">AUG</span>
            </div>
            <div className="event-details">
              <h3>Environmental Awareness Camp</h3>
              <p className="event-location"><i className="fas fa-map-marker-alt"></i> Green Park, City Center</p>
              <p className="event-time"><i className="far fa-clock"></i> 9:00 AM - 5:00 PM</p>
              <p className="event-desc">Join us for a day of learning about environmental conservation, sustainable practices, and community involvement.</p>
              <button className="register-btn">Register Now</button>
            </div>
          </div>

          {/* Event Card 2 */}
          <div className="event-card">
            <div className="event-date">
              <span className="day">10</span>
              <span className="month">SEP</span>
            </div>
            <div className="event-details">
              <h3>Health & Wellness Camp</h3>
              <p className="event-location"><i className="fas fa-map-marker-alt"></i> Community Center</p>
              <p className="event-time"><i className="far fa-clock"></i> 8:00 AM - 2:00 PM</p>
              <p className="event-desc">Free health check-ups, consultations with doctors, and wellness workshops for all community members.</p>
              <button className="register-btn">Register Now</button>
            </div>
          </div>

          {/* Event Card 3 */}
          <div className="event-card">
            <div className="event-date">
              <span className="day">15</span>
              <span className="month">SEP</span>
            </div>
            <div className="event-details">
              <h3>Skill Development Workshop</h3>
              <p className="event-location"><i className="fas fa-map-marker-alt"></i> Civic Center Auditorium</p>
              <p className="event-time"><i className="far fa-clock"></i> 10:00 AM - 4:00 PM</p>
              <p className="event-desc">Learn valuable skills in digital literacy, entrepreneurship, and vocational training to enhance career prospects.</p>
              <button className="register-btn">Register Now</button>
            </div>
          </div>

          {/* Event Card 4 */}
          <div className="event-card">
            <div className="event-date">
              <span className="day">22</span>
              <span className="month">SEP</span>
            </div>
            <div className="event-details">
              <h3>Youth Leadership Camp</h3>
              <p className="event-location"><i className="fas fa-map-marker-alt"></i> Municipal Park</p>
              <p className="event-time"><i className="far fa-clock"></i> 9:00 AM - 6:00 PM</p>
              <p className="event-desc">A three-day camp focused on developing leadership skills, teamwork, and civic responsibility among youth.</p>
              <button className="register-btn">Register Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="past-events-section">
        <h2>Past Events Highlights</h2>
        <div className="past-events-grid">
          <div className="past-event">
            <div className="past-event-img img1"></div>
            <div className="past-event-content">
              <h3>Annual Community Clean-up Drive</h3>
              <p>Over 500 community members participated in our annual clean-up drive, collecting more than 2 tons of waste and beautifying 5 public spaces.</p>
            </div>
          </div>
          
          <div className="past-event">
            <div className="past-event-img img2"></div>
            <div className="past-event-content">
              <h3>Children's Summer Camp</h3>
              <p>Our two-week summer camp provided educational activities, sports, and arts & crafts to 200 children from underserved communities.</p>
            </div>
          </div>
          
          <div className="past-event">
            <div className="past-event-img img3"></div>
            <div className="past-event-content">
              <h3>Elderly Wellness Program</h3>
              <p>A special week-long program focusing on the health, wellness, and social needs of our senior citizens with free health check-ups and recreational activities.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="host-event-section">
        <div className="host-content">
          <h2>Want to Host an Event?</h2>
          <p>If you're interested in organizing a community event or camp, we can help! Fill out the form below and our team will get back to you.</p>
          
          <form className="host-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Event Type" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Proposed Date" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Brief Description of the Event" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit Proposal</button>
          </form>
        </div>
      </div>
      
      <div className="events-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>How can I register for an event?</h3>
          <p>You can register for any event by clicking the "Register Now" button on the event card, or by visiting our office in person.</p>
        </div>
        <div className="faq-item">
          <h3>Are these events free to attend?</h3>
          <p>Most of our community events are free to attend. Some specialized workshops may have a nominal fee to cover materials.</p>
        </div>
        <div className="faq-item">
          <h3>Can I volunteer for these events?</h3>
          <p>Absolutely! We welcome volunteers for all our events. Please contact our volunteer coordinator at volunteers@civicspot.org</p>
        </div>
        <div className="faq-item">
          <h3>Do I need to bring anything to the camps?</h3>
          <p>Specific requirements will be sent to all registered participants prior to the event. Generally, we recommend bringing water, appropriate clothing, and any personal items you may need.</p>
        </div>
      </div>
    </div>
  );
};

export default EventsCamps;
