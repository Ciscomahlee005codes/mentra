import React, { useState } from "react";
import "./Challenges.css";
import challenges from "../../../mentra_challenges";

const Challenges = () => {
  const [search, setSearch] = useState("");

  const filteredChallenges = challenges.filter(
    (challenge) =>
      challenge.title.toLowerCase().includes(search.toLowerCase()) ||
      challenge.category.toLowerCase().includes(search.toLowerCase()) ||
      challenge.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="all-challenges">
      <div className="challenges-header">
        <h1>All Challenges</h1>
        <p>
          Explore coding and design challenges across different categories. Pick
          one, practice your skills, and grow your career.
        </p>

        <input
          type="text"
          placeholder="Search challenges..."
          className="search-bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
          <p className="no-results">No challenges found. Try another search.</p>
        )}
      </div>
    </section>
  );
};

export default Challenges;
