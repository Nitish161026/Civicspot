import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ onSearchChange }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Popular search suggestions
  const searchSuggestions = [
    "Healthcare", "Education", "Water", "Agriculture", 
    "Women Empowerment", "Youth Programs", "Emergency", 
    "Environment", "Safety", "Jobs"
  ];

  const filteredSuggestions = searchSuggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(searchQuery.toLowerCase()) && 
    searchQuery.length > 0
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // Close suggestions on search
      setShowSuggestions(false);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      clearSearch();
    }
  };

  const handleSearchInput = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setShowSuggestions(query.length > 0);
    // Pass search term to parent component
    if (onSearchChange) {
      onSearchChange(query);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    if (onSearchChange) {
      onSearchChange(suggestion);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setShowSuggestions(false);
    if (onSearchChange) {
      onSearchChange("");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" title="Home" className="nav-item">
          <span className="nav-icon">🏠</span>
          <span className="nav-label">Home</span>
        </Link>
        <Link to="/about" title="About" className="nav-item">
          <span className="nav-icon">🧭</span>
          <span className="nav-label">About</span>
        </Link>
        <Link to="/contact" title="Contact" className="nav-item">
          <span className="nav-icon">📞</span>
          <span className="nav-label">Contact</span>
        </Link>
        <Link to="/services" title="Services" className="nav-item">
          <span className="nav-icon">🛠️</span>
          <span className="nav-label">Services</span>
        </Link>
        <Link to="/projects" title="Projects" className="nav-item">
          <span className="nav-icon">🏗️</span>
          <span className="nav-label">Projects</span>
        </Link>
        <Link to="/raiseit" title="Report an Issue" className="nav-item">
          <span className="nav-icon">🚨</span>
          <span className="nav-label">RaiseIt</span>
        </Link>
      </div>

      <div className="navbar-logo">
        <Link to="/">
          <img src="/logo.png" alt="Logo" />
        </Link>
      </div>

      <div className="navbar-right">
        <div className="search-container">
          <form className="search-box" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search services... (try 'health', 'education')"
              value={searchQuery}
              onChange={handleSearchInput}
              onFocus={() => setShowSuggestions(searchQuery.length > 0)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              onKeyDown={handleKeyDown}
            />
            {searchQuery && (
              <button 
                type="button" 
                className="clear-search" 
                onClick={clearSearch}
                title="Clear search"
              >
                ✕
              </button>
            )}
          </form>
          
          {showSuggestions && filteredSuggestions.length > 0 && (
            <div className="search-suggestions">
              {filteredSuggestions.slice(0, 5).map((suggestion, index) => (
                <div
                  key={index}
                  className="suggestion-item"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  🔍 {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>

        <Link to="/login" className="btn">Login</Link>
        <Link to="/register" className="btn">Register</Link>

        <button className="mode-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
