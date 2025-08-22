import React from "react";
import { FaTrophy, FaClock, FaUsers } from "react-icons/fa";
import "./FeaturedChallenges.css";

const challenges = [
  {
    title: "30-Day JavaScript Challenge",
    description: "Sharpen your JavaScript skills with daily coding tasks and mentorship feedback.",
    duration: "30 Days",
    participants: "120+",
  },
  {
    title: "React UI Mastery",
    description: "Build and polish 5 complete React projects while collaborating with peers.",
    duration: "21 Days",
    participants: "85+",
  },
  {
    title: "Full-Stack Sprint",
    description: "Work in teams to develop a real-world application from start to finish.",
    duration: "45 Days",
    participants: "60+",
  },
];

export default function FeaturedChallenges() {
  return (
    <section className="featured-challenges">
      <h2 className="section-title">Featured Challenges</h2>
      <p className="section-subtitle">
        Join exciting hands-on challenges to level up your skills with community support.
      </p>
      <div className="challenges-grid">
        {challenges.map((challenge, index) => (
          <div key={index} className="challenge-card">
            <h3>{challenge.title}</h3>
            <p>{challenge.description}</p>
            <div className="challenge-meta">
              <span><FaClock /> {challenge.duration}</span>
              <span><FaUsers /> {challenge.participants}</span>
            </div>
            <button className="join-btn">Join Challenge</button>
          </div>
        ))}
      </div>
      <button className="all-btn">View All Challenges</button>
    </section>
  );
}
