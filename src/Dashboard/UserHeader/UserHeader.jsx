import React from "react";
import "./UserHeader.css";
import { FaBell, FaEnvelope, FaCog, FaSearch } from "react-icons/fa";
import UserImg from "../../assets/customer-2.jpg"
import Logo from "../../assets/Mentra-logo.png";

const UserHeader = () => {
  const user = {
    name: "Anthony Raphael",
    role: "Frontend Developer",
    avatar: UserImg, 
  };

  return (
    <header className="user-header">
       {/* Logo */}
        <div className="logo-container">
          <img className="logo-img" src={Logo} alt="Mentra Logo" />
          <span className="logo-text">ENTRA.</span>
        </div>
      {/* Search Bar */}
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search challenges, mentors, or topics..."
          className="search-input"
        />
      </div>

      {/* Right Section */}
      <div className="header-right">
        <div className="icons">
          <FaBell className="icon" title="Notifications" />
          <FaEnvelope className="icon" title="Messages" />
        </div>

        {/* User Info */}
        <div className="user-info">
          <img src={user.avatar} alt="User Avatar" className="avatar" />
          <div className="user-details">
            <h4>{user.name}</h4>
            <p>{user.role}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;
