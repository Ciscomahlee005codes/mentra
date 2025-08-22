import React, { useState } from "react";
import challenges from "../../../mentra_challenges";
import "./Frontend.css";

const Frontend = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter only "Frontend" challenges
  const frontendChallenges = challenges.filter(
    (challenge) => challenge.category === "Frontend"
  );

  // Apply search filter on frontend challenges
  const filteredChallenges = frontendChallenges.filter((challenge) =>
    challenge.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    challenge.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="frontend-challenges">
      <div className="challenges-header">
        <h1>Frontend Challenges</h1>
        <p>
          Test and grow your frontend development skills with real-world coding tasks.
        </p>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search frontend challenges..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>

      <div className="challenges-grid">
        {filteredChallenges.length > 0 ? (
          filteredChallenges.map((challenge) => (
            <div key={challenge.id} className="challenge-card">
              <h3>{challenge.title}</h3>
              <span className="tag category">{challenge.category}</span>
              <span className="tag level">{challenge.level}</span>
              <p>{challenge.description}</p>
              <button className="join-btn">Start Challenge</button>
            </div>
          ))
        ) : (
          <p className="no-results">No frontend challenges match your search.</p>
        )}
      </div>
    </section>
  );
};

export default Frontend;
