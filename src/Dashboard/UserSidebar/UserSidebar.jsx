import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import UserImg from "../../assets/customer-2.jpg"
import {
  FaTachometerAlt,
  FaTasks,
  FaUsers,
  FaEnvelope,
  FaClipboardList,
  FaUserCog,
  FaBell,
  FaQuestionCircle,
  FaSignOutAlt,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import "./UserSidebar.css";

const UserSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button className="hamburger" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* User Info */}
        <div className="user-info">
          <img
            src={UserImg}
            alt="User Avatar"
            className="user-avatar"
          />
         <div className="placement">
           <h3>Hi, Anthony</h3>
          <p className="role">Mentee</p>
         </div>
        </div>

        {/* Sidebar Links */}
        <ul>
          <li>
            <NavLink to="/dashboard" className="link">
              <FaTachometerAlt /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/challenges" className="link">
              <FaTasks /> All Challenges
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/mentorship" className="link">
              <FaUsers /> Mentorship
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/messages" className="link">
              <FaEnvelope /> Messages
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/profile" className="link">
              <FaUserCog /> Profile & Settings
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/notifications" className="link">
              <FaBell /> Notifications
            </NavLink>
          </li>
          <li>
            <NavLink to="/help" className="link">
              <FaQuestionCircle /> Help & Support
            </NavLink>
          </li>
        </ul>

        {/* Logout Button */}
        <div className="logout">
          <button>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default UserSideBar;
