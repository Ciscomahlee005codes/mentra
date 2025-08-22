import React, { useState } from "react";
import challenges from "../../../mentra_challenges";
import "./Data.css"; 

const Data = () => {
  const [search, setSearch] = useState("");

  // Filter challenges that are backend only
  const filteredChallenges = challenges.filter(
    (challenge) =>
      challenge.category.toLowerCase() === "data/ai" &&
      (challenge.title.toLowerCase().includes(search.toLowerCase()) ||
        challenge.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <section className="all-challenges">
      <div className="challenges-header">
        <h1>Data Analysis Challenges</h1>
        <p>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus perspiciatis aut magni! Ratione?
        </p>

        <input
          type="text"
          placeholder="Search Data Analysis challenges..."
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
          <p className="no-results">
            No Data Analysis challenges found. Try another search.
          </p>
        )}
      </div>
    </section>
  );
};

export default Data;
