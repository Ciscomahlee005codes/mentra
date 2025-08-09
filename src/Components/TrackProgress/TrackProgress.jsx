import React from "react";
import "./TrackProgress.css";

const progressData = [
  { skill: "Web Development", percent: 75 },
  { skill: "Digital Marketing", percent: 50 },
  { skill: "Graphic Design", percent: 30 },
  { skill: "Data Analysis", percent: 60 }
];

function TrackProgress() {
  return (
    <div className="track-progress">
      <header className="progress-hero">
        <h1>Track Your Progress</h1>
        <p>Stay motivated by seeing how far you’ve come in your learning journey.</p>
      </header>

      <div className="progress-list">
        {progressData.map(function(item, index) {
          return (
            <div className="progress-card" key={index}>
              <div className="progress-header">
                <span>{item.skill}</span>
                <span>{item.percent}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: item.percent + "%" }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="progress-cta">
        <a href="/learn" className="btn">Continue Learning</a>
      </div>
    </div>
  );
}

export default TrackProgress;
