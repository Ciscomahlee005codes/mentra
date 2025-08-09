import "./Navbar.css";
import { useState } from "react";
import { FaBell } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa"; 
import Logo from "../../assets/Mentra-logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  window.addEventListener("scroll", () => {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header>
      <div className="nav-container">
        <div className="logo-container">
          <img className="logo-img" src={Logo} alt="Mentra Logo" />
          <span className="logo-text">MENTRA.</span>
        </div>

        <ul className="navBar">
          <li id="link">
            <NavLink to="/">Home</NavLink>
          </li>

          <li
            id="link"
            className={`dropdown-parent ${openDropdown === "mentors" ? "open" : ""}`}
            onClick={() => toggleDropdown("mentors")}
          >
            Explore Mentra
            <FaChevronDown className="dropdown-icon" />
            {openDropdown === "mentors" && (
              <ul className="dropdown">
                <li><NavLink to="/learnSkills">Learn a Skill</NavLink></li>
                <li><NavLink to="/trackProgress">Track your Progress</NavLink></li>
                <li><a href="">Entrepreneurship</a></li>
              </ul>
            )}
          </li>

          <li
            id="link"
            className={`dropdown-parent ${openDropdown === "tracks" ? "open" : ""}`}
            onClick={() => toggleDropdown("tracks")}
          >
            Mentorship
            <FaChevronDown className="dropdown-icon" />
            {openDropdown === "tracks" && (
              <ul className="dropdown">
                <li><a href="">Be a Mentor</a></li>
                <li><a href="">Get Mentored</a></li>
                <li><a href="">Publish Your Course</a></li>
              </ul>
            )}
          </li>

          <li
            id="link"
            className={`dropdown-parent ${openDropdown === "internships" ? "open" : ""}`}
            onClick={() => toggleDropdown("internships")}
          >
            Internship
            <FaChevronDown className="dropdown-icon" />
            {openDropdown === "internships" && (
              <ul className="dropdown">
                <li><a href="">Apply for Internships</a></li>
                <li><a href="">Join Communities</a></li>
              </ul>
            )}
          </li>
        </ul>

        <FaBell id="bell-icon" />
        <button>Sign Up</button>
      </div>
    </header>
  );
};

export default Navbar;
