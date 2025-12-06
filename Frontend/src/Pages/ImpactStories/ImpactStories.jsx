import React, { useState, useEffect } from "react";
import "./ImpactStories.css";
import { FaStar, FaMapMarkerAlt, FaUsers, FaHeart, FaFilter, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ImpactStories = () => {
  const [stories, setStories] = useState([]);
  const [filteredStories, setFilteredStories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // Sample impact stories data based on your project's theme
  const impactStoriesData = [
    {
      id: 1,
      title: "Village Water Supply System",
      location: "Rural Maharashtra",
      category: "Infrastructure",
      beforeImage: "/water-before.jpg",
      afterImage: "/water-after.jpg",
      description: "Installed clean water pipelines to 500+ homes in a drought-affected village.",
      impact: "Reduced waterborne diseases by 70%",
      beneficiaries: 2500,
      testimonial: {
        text: "No more walking miles for water. Our children can now focus on education instead of fetching water.",
        author: "Mrs. Sunita Patil",
        role: "Village Elder",
        rating: 5
      },
      stats: {
        timeframe: "6 months",
        investment: "₹25 lakhs",
        sustainability: "95%"
      }
    },
    {
      id: 2,
      title: "School Renovation Drive",
      location: "Odisha Tribal Area",
      category: "Education",
      beforeImage: "/school-before.jpg",
      afterImage: "/school-after.jpg",
      description: "Complete transformation of deteriorated school infrastructure with modern facilities.",
      impact: "Increased school attendance by 45%",
      beneficiaries: 450,
      testimonial: {
        text: "The children are excited to come to school now. We have proper classrooms, clean toilets, and a library!",
        author: "Mr. Rajesh Das",
        role: "Headteacher",
        rating: 5
      },
      stats: {
        timeframe: "4 months",
        investment: "₹18 lakhs",
        sustainability: "98%"
      }
    },
    {
      id: 3,
      title: "Solar Electrification Initiative",
      location: "Rajasthan Villages",
      category: "Energy",
      beforeImage: "/solar-before.jpg",
      afterImage: "/solar-after.jpg",
      description: "Bringing renewable energy to remote villages through solar panel installations.",
      impact: "3 villages completely electrified",
      beneficiaries: 1200,
      testimonial: {
        text: "Studying after sunset is now possible! Our children can pursue their dreams even after dark.",
        author: "Mr. Vikram Singh",
        role: "Village Head",
        rating: 5
      },
      stats: {
        timeframe: "8 months",
        investment: "₹35 lakhs",
        sustainability: "100%"
      }
    },
    {
      id: 4,
      title: "Women's Skill Development Center",
      location: "Uttar Pradesh",
      category: "Empowerment",
      beforeImage: "/skill-before.jpg",
      afterImage: "/skill-after.jpg",
      description: "Establishing vocational training centers for women to develop marketable skills.",
      impact: "120 women trained in Phase 1",
      beneficiaries: 500,
      testimonial: {
        text: "I now earn ₹8,000 per month from my tailoring work. My family's life has completely changed!",
        author: "Ms. Fatima Khan",
        role: "Trainee",
        rating: 5
      },
      stats: {
        timeframe: "12 months",
        investment: "₹15 lakhs",
        sustainability: "92%"
      }
    },
    {
      id: 5,
      title: "Community Tree Plantation",
      location: "Alwar, Rajasthan",
      category: "Environment",
      beforeImage: "/plantation-before.jpg",
      afterImage: "/plantation-after.jpg",
      description: "Massive afforestation drive to combat climate change and improve air quality.",
      impact: "10,000+ trees planted",
      beneficiaries: 3000,
      testimonial: {
        text: "Our village is greener and cooler now. The air feels fresh, and birds have returned!",
        author: "Mrs. Laxmi Devi",
        role: "Farmer",
        rating: 5
      },
      stats: {
        timeframe: "3 months",
        investment: "₹8 lakhs",
        sustainability: "88%"
      }
    },
    {
      id: 6,
      title: "Mobile Health Camps",
      location: "West Bengal",
      category: "Healthcare",
      beforeImage: "/health-before.jpg",
      afterImage: "/health-after.jpg",
      description: "Regular medical checkups and healthcare services brought directly to villages.",
      impact: "8 villages covered so far",
      beneficiaries: 1800,
      testimonial: {
        text: "No need to travel 50km for basic checkups. The mobile clinic has saved many lives here.",
        author: "Dr. Basanti Chakraborty",
        role: "Village Doctor",
        rating: 4
      },
      stats: {
        timeframe: "Ongoing",
        investment: "₹22 lakhs",
        sustainability: "85%"
      }
    }
  ];

  const categories = ["all", "Infrastructure", "Education", "Energy", "Empowerment", "Environment", "Healthcare"];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setStories(impactStoriesData);
      setFilteredStories(impactStoriesData);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = stories;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(story => story.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(story =>
        story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredStories(filtered);
  }, [selectedCategory, searchTerm, stories]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={index < rating ? "star-filled" : "star-empty"}
      />
    ));
  };

  if (loading) {
    return (
      <div className="impact-loading">
        <div className="loading-spinner"></div>
        <h2>Loading Impact Stories...</h2>
      </div>
    );
  }

  return (
    <div className="impact-stories-container">
      {/* Hero Section */}
      <section className="impact-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Impact Stories</span>
          </h1>
          <p className="hero-subtitle">
            Witness the transformation of rural communities through our collaborative efforts. 
            Every story represents lives changed, hopes restored, and futures brightened.
          </p>
          <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Villages Transformed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Lives Impacted</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="filters-section">
          <div className="filters-container">
            <div className="search-bar">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search stories by location, title, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
                style={{ color: '#000000' }}
              />
            </div>
            <div className="category-filters">
              <FaFilter className="filter-icon" />
              <span className="filter-label">Filter by:</span>
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === "all" ? "All Stories" : category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Stories Grid */}
        <section className="stories-grid">
          <div className="grid-container">
            {filteredStories.length > 0 ? (
              filteredStories.map(story => (
                <div key={story.id} className="story-card">
                  <div className="card-header">
                    <div className="category-badge">{story.category}</div>
                    <div className="location">
                      <FaMapMarkerAlt /> {story.location}
                    </div>
                  </div>
                  
                  <div className="before-after-container">
                    <div className="image-comparison">
                      <div className="before-section">
                        <img src={story.beforeImage} alt="Before" className="comparison-image" />
                        <div className="image-label before-label">Before</div>
                      </div>
                      <div className="after-section">
                        <img src={story.afterImage} alt="After" className="comparison-image" />
                        <div className="image-label after-label">After</div>
                      </div>
                    </div>
                  </div>

                  <div className="card-content">
                    <h3 className="story-title">{story.title}</h3>
                    <p className="story-description">{story.description}</p>
                    
                    <div className="impact-highlight">
                      <FaHeart className="impact-icon" />
                      <span className="impact-text">{story.impact}</span>
                    </div>

                    <div className="beneficiaries">
                      <FaUsers className="users-icon" />
                      <span>{story.beneficiaries.toLocaleString()} people benefited</span>
                    </div>

                    <div className="story-stats">
                      <div className="stat">
                        <span className="stat-label">Duration:</span>
                        <span className="stat-value">{story.stats.timeframe}</span>
                      </div>
                      <div className="stat">
                        <span className="stat-label">Investment:</span>
                        <span className="stat-value">{story.stats.investment}</span>
                      </div>
                      <div className="stat">
                        <span className="stat-label">Sustainability:</span>
                        <span className="stat-value">{story.stats.sustainability}</span>
                      </div>
                    </div>

                    <div className="testimonial">
                      <div className="testimonial-content">
                        <p className="testimonial-text">"{story.testimonial.text}"</p>
                        <div className="testimonial-author">
                          <div className="author-info">
                            <strong>{story.testimonial.author}</strong>
                            <span>{story.testimonial.role}</span>
                          </div>
                          <div className="rating">
                            {renderStars(story.testimonial.rating)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <h3>No stories found</h3>
                <p>Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Be Part of the Next Success Story</h2>
            <p>Your contribution can create the next transformation. Join us in making a difference.</p>
            <div className="cta-buttons">
              <button className="cta-btn primary">Start a Project</button>
              <button onClick={() => navigate("/donations")} className ="cta-btn secondary">Donate Now</button>
            </div>
          </div>
        </section>
      </div>
  );
};

export default ImpactStories;