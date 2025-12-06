import React, { useState } from "react";
import axios from "axios";
import "./JoinUs.css";
import { GiThreeLeaves } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const JoinUs = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: "",
    thoughts: "",
    motivation: "",
  });
  const [portfolio, setPortfolio] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    setPortfolio(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("skills", formData.skills);
      data.append("thoughts", formData.thoughts);
      data.append("motivation", formData.motivation);
      if (portfolio) data.append("portfolio", portfolio);

      await axios.post("http://localhost:9000/api/joinus", data);
      alert("Form submitted successfully!");
      navigate("/about"); // Redirect to home or another page after submission
      setFormData({
        name: "",
        email: "",
        skills: "",
        thoughts: "",
        motivation: "",
      });
      setPortfolio(null);
    } catch (err) {
      console.error("Submission failed", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="joinus-wrapper">
      <div className="joinus-header">
        <GiThreeLeaves className="logo-icon" />
        <h1>Ready to be the Change</h1>
        <p>Be a part of rural transformation through innovation and compassion.</p>
      </div>

      <form className="joinus-form" onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Email Address:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Attach Your Portfolio:
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </label>

        <label>
          Your Skills:
          <input type="text" name="skills" value={formData.skills} onChange={handleChange} required />
        </label>

        <label>
          What do you think about CivicSpot?
          <textarea name="thoughts" value={formData.thoughts} onChange={handleChange} required />
        </label>

        <label>
          Why do you want to join us?
          <textarea name="motivation" value={formData.motivation} onChange={handleChange} required />
        </label>

        <button type="submit">Join Us</button>
      </form>
    </div>
  );
};

export default JoinUs;
