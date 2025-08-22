import React, { useState } from "react";
import "./FindMentorsPublic.css";

const FindMentorsPublic = () => {
  const categories = [
    "Frontend Mentors",
    "Backend Mentors",
    "UI/UX Mentors",
    "Fullstack Mentors",
    "Data Science Mentors",
    "Cybersecurity Mentors",
  ];

  // Sample mentors
  const mentors = {
    "Frontend Mentors": [
      { id: 1, name: "Ada Lovelace", role: "Frontend Engineer" },
      { id: 2, name: "Grace Hopper", role: "React Developer" },
      { id: 3, name: "Marcus Larry", role: "Flutter Developer" },
    ],
    "Backend Mentors": [
      { id: 4, name: "Linus Torvalds", role: "Backend Engineer" },
      { id: 5, name: "James Gosling", role: "Java Developer" },
      { id: 6, name: "Tobenna Makuochi", role: "MERN Stack Developer" },
    ],
    "UI/UX Mentors": [
      { id: 7, name: "Don Norman", role: "UX Designer" },
      { id: 8, name: "Susan Kare", role: "UI Designer" },
    ],
    "Fullstack Mentors": [
      { id: 9, name: "Guido van Rossum", role: "Fullstack Engineer" },
      { id: 10, name: "Mairiam Oluwatosin", role: "MERN Stack Engineer" },
    ],
    "Data Science Mentors": [
      { id: 11, name: "Andrew Ng", role: "ML Engineer" },
    ],
    "Cybersecurity Mentors": [
      { id: 12, name: "Kevin Mitnick", role: "Security Specialist" },
    ],
  };

  // ✅ Featured mentors (mix from different categories)
  const featuredMentors = [
    { id: 1, name: "Ada Lovelace", role: "Frontend Engineer" },
    { id: 5, name: "James Gosling", role: "Java Developer" },
    { id: 7, name: "Don Norman", role: "UX Designer" },
    { id: 11, name: "Andrew Ng", role: "ML Engineer" },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  // Function to get mentors (either featured or selected category)
  const getDisplayedMentors = () => {
    if (selectedCategory) {
      return mentors[selectedCategory];
    }
    return featuredMentors;
  };

  return (
    <section className="find-mentor-public">
      {/* Hero Section */}
      <div className="mentor-hero">
        <h1>Find Your Perfect Mentor</h1>
        <p>
          Connect with experienced professionals who can guide your career
          journey. Explore by category and get started today!
        </p>
      </div>

      {/* Category Buttons */}
      <div className="categories">
        <button
          className={`category-btn ${selectedCategory === null ? "active" : ""}`}
          onClick={() => setSelectedCategory(null)}
        >
          Featured Mentors
        </button>
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Mentor Cards */}
      <div className="mentor-section">
        <h2>{selectedCategory || "Featured Mentors"}</h2>
        <div className="mentor-list">
          {getDisplayedMentors().map((mentor) => (
            <div className="mentor-card" key={mentor.id}>
              <div className="avatar">👩🏽‍💻</div>
              <h3>{mentor.name}</h3>
              <p>Role: {mentor.role}</p>
              <p className="blur">Sign in to view full details</p>
              <button
                className="get-mentored-btn"
                onClick={() => (window.location.href = "/login")}
              >
                Get Mentored
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindMentorsPublic;
