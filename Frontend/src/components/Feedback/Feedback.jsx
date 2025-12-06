import React, { useState } from 'react';
import './Feedback.css';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGoogle,
  FaLinkedin,
  FaStar,
} from 'react-icons/fa';
import axios from 'axios';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
  });

  const [rating, setRating] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('http://localhost:9000/api/feedback', {
      name: formData.name,
      email: formData.email,
      feedback: formData.feedback,
      rating: rating
    });

    alert(res.data.message);
    setFormData({ name: '', email: '', feedback: '' });
    setRating(0);
  } catch (error) {
    alert("Submission failed: " + error.response?.data?.message || error.message);
  }
};

  return (
    <div className="feedback-container">
      <div className="logo-row">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaGoogle />
        <FaLinkedin />
      </div>

      <div className="feedback-card">
        <h2>We Value Your Feedback</h2>
        <p>Help us improve by sharing your thoughts</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="feedback"
            placeholder="Write your feedback here..."
            value={formData.feedback}
            onChange={handleChange}
            required
          />

          <div className="stars-row">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`star ${index < rating ? 'active' : ''}`}
                onClick={() => handleStarClick(index)}
              />
            ))}
          </div>

          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
