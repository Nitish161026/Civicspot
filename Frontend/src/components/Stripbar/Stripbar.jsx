import React, { useRef, useEffect } from "react";
import "./Stripbar.css";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Stripbar = ({ searchTerm = "" }) => {
  const stripRef = useRef(null);

  const scrollLeft = () => {
    if (stripRef.current) {
      stripRef.current.scrollBy({
        left: -150,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (stripRef.current) {
      stripRef.current.scrollBy({
        left: 150,
        behavior: "smooth",
      });
    }
  };

  const links = [
    "Healthcare",
    "Education",
    "Job Opportunities",
    "Skill Training",
    "Government Schemes",
    "Agriculture Support",
    "Water & Sanitation",
    "Women Empowerment",
    "Youth Programs",
    "Events & Camps",
    "Cultural Activities",
    "Sports & Recreation",
    "Community News",
    "Local News",
    "Emergency Services",
    "Public Transport",
    "Disaster Relief",
    "Environment",
    "Road & Infrastructure",
    "Safety & Security",
    "Housing & Shelter",
    "Legal Aid",
    "Financial Services",
    "Local Business",
    "Volunteer",
    "Donations",
    "FAQs",
  ];

  // Function to check if a link matches the search term
  const isMatchingLink = (link, searchTerm) => {
    if (!searchTerm) return false;
    return link.toLowerCase().includes(searchTerm.toLowerCase());
  };

  // Get matching links count
  const matchingLinks = links.filter(link => isMatchingLink(link, searchTerm));
  const matchCount = matchingLinks.length;

  // Auto-scroll to first matching item when search term changes
  useEffect(() => {
    if (searchTerm && stripRef.current) {
      const firstMatch = links.findIndex(link => isMatchingLink(link, searchTerm));
      if (firstMatch !== -1) {
        const linkElement = stripRef.current.children[firstMatch];
        if (linkElement) {
          linkElement.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
          });
        }
      }
    }
  }, [searchTerm]);

  return (
    <div className="stripbar-wrapper">
      {searchTerm && (
        <div className="search-results-info">
          <span className="search-term">"{searchTerm}"</span>
          <span className="match-count">
            {matchCount > 0 ? `${matchCount} service${matchCount !== 1 ? 's' : ''} found` : 'No services found'}
          </span>
          {matchCount > 0 && <span className="scroll-hint">👆 Services highlighted below</span>}
        </div>
      )}
      <div className="stripbar">
        <MdOutlineArrowBackIosNew
          className="strip-arrow start"
          onClick={scrollLeft}
        />
        <ul className="strip-links" ref={stripRef}>
          {links.map((text, index) => (
            <li key={index} className={isMatchingLink(text, searchTerm) ? 'highlighted' : ''}>
              <Link to={`${text.toLowerCase()}`}>{text}</Link>
            </li>
          ))}
        </ul>
        <MdOutlineArrowForwardIos
          className="strip-arrow end"
          onClick={scrollRight}
        />
      </div>
    </div>
  );
};

export default Stripbar;
