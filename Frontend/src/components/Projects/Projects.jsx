import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('ongoing');
  const [projects, setProjects] = useState({ ongoing: [], completed: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('http://localhost:9000/api/projects');
        const data = res.data;

        const ongoing = data.filter(project => project.type === 'ongoing');
        const completed = data.filter(project => project.type === 'completed');

        setProjects({ ongoing, completed });
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const renderRatingStars = (rating) => {
    return (
      <div className="rating-stars">
        {[...Array(5)].map((_, i) => (
          <motion.span 
            key={i} 
            className={`star ${i < rating ? 'filled' : ''}`}
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >★</motion.span>
        ))}
      </div>
    );
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  if (isLoading) {
    return (
      <motion.div 
        className="loading-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="loading-spinner">
          <div className="spinner-circle"></div>
          <div className="spinner-text">Loading Projects...</div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="projects-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <motion.div 
        className="projects-hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-gradient-overlay"></div>
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our <span className="gradient-text">Transformative</span> Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Witness the impact through interactive before/after comparisons and community testimonials
          </motion.p>
        </div>
      </motion.div>

      {/* Tabs */}
      <motion.div 
        className="projects-tabs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <button
          onClick={() => setActiveTab('ongoing')}
          className={`tab-button ${activeTab === 'ongoing' ? 'active ongoing-tab' : ''}`}
        >
          <span>Ongoing Initiatives</span>
          {activeTab === 'ongoing' && (
            <motion.div 
              className="tab-indicator"
              layoutId="tabIndicator"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
        </button>
        <button
          onClick={() => setActiveTab('completed')}
          className={`tab-button ${activeTab === 'completed' ? 'active completed-tab' : ''}`}
        >
          <span>Completed Projects</span>
          {activeTab === 'completed' && (
            <motion.div 
              className="tab-indicator"
              layoutId="tabIndicator"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
        </button>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        className="projects-grid"
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {projects[activeTab].map((project, index) => (
            <motion.div
              key={project._id}
              className={`project-card ${activeTab === 'completed' ? 'completed-project' : 'ongoing-project'}`}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              custom={index}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="project-images">
                <div className="image-container before">
                  <img src={project.beforeImage} alt={`Before ${project.title}`} />
                  <span className="image-label">BEFORE</span>
                </div>
                <div className="image-container after">
                  <img src={project.afterImage} alt={`After ${project.title}`} />
                  <span className="image-label">AFTER</span>
                </div>
              </div>

              <div className="project-details">
                <div className="project-header">
                  <h2>{project.title}</h2>
                  <span className="location">{project.location}</span>
                </div>

                <p className="description">{project.description}</p>

                {activeTab === 'completed' ? (
                  <div className="impact-section">
                    <h3>Impact Created:</h3>
                    <p>{project.impact}</p>
                  </div>
                ) : (
                  <div className="progress-section">
                    <h3>Current Progress:</h3>
                    <p>{project.progress}</p>
                    <div className="progress-bar">
                      <motion.div 
                        className="progress-fill" 
                        initial={{ width: 0 }}
                        animate={{ width: `${project.progress?.split('%')[0]}%` }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                      />
                    </div>
                    <h3>Expected Impact:</h3>
                    <p>{project.expectedImpact}</p>
                  </div>
                )}

                <div className="testimonial">
                  <div className="testimonial-content">
                    <p>"{project.testimonial?.text}"</p>
                    <div className="testimonial-author">
                      <span>- {project.testimonial?.author}</span>
                      {renderRatingStars(project.testimonial?.rating || 0)}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Projects;