import React from "react";
import "./UserHero.css";
import { FaMedal, FaBookOpen, FaUserFriends, FaTasks } from "react-icons/fa";


const UserHero = () => {
  const user = {
    name: "John Doe",
    role: "Frontend Developer",
    challengesCompleted: 12,
    track: "Frontend Track",
    mentorStatus: "Mentee",
    badges: 3,
    progress: 5
  };

  return (
    <div className="user-hero">
      {/* Greeting */}
      <div className="user-greeting">
        <h2>Welcome back, {user.name} 👋</h2>
        <p>Keep pushing, greatness is near!</p>
      </div>

      {/* User Stats */}
      <div className="user-stats">
        <div className="stat-card">
          <FaTasks className="stat-icon" />
          <h3>{user.challengesCompleted}</h3>
          <p>Challenges Completed</p>
          <div className="progress-section">
        <p>Track Progress</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${user.progress}%` }}></div>
        </div>
        <span>{user.progress}% Completed</span>
      </div>
        </div>
        <div className="stat-card">
          <FaBookOpen className="stat-icon" />
          <h3>{user.track}</h3>
          <p>Learning Track</p>
        </div>
        <div className="stat-card">
          <FaUserFriends className="stat-icon" />
          <h3>{user.mentorStatus}</h3>
          <p>Mentorship</p>
        </div>
        <div className="stat-card">
          <FaMedal className="stat-icon" />
          <h3>{user.badges}</h3>
          <p>Badges Earned</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="progress-section">
        <p>Track Progress</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${user.progress}%` }}></div>
        </div>
        <span>{user.progress}% Completed</span>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <button>Continue Learning</button>
        <button>Find a Mentor</button>
        <button>Start Challenge</button>
      </div>
    </div>
  );
};

export default UserHero;
