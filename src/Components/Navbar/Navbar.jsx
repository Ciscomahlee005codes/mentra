import "./Navbar.css";
import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa"; 
import Logo from "../../assets/Mentra-logo.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); 
  const navigate = useNavigate();

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
        {/* Logo */}
        <div className="logo-container">
          <img className="logo-img" src={Logo} alt="Mentra Logo" />
          <span className="logo-text">ENTRA.</span>
        </div>

        {/* Hamburger Button */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Nav Links */}
        <ul className={`navBar ${menuOpen ? "active" : ""}`}>
          <li id="link"><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>

          <li id="link"><NavLink to="/aboutUs" onClick={() => setMenuOpen(false)}>About Us</NavLink></li>

          {/* Challenges Dropdown */}
          <li
            id="link"
            className={`dropdown-parent ${openDropdown === "mentors" ? "open" : ""}`}
            onClick={() => toggleDropdown("mentors")}
          >
            Challenges
            <FaChevronDown className="dropdown-icon" />
            {openDropdown === "mentors" && (
              <ul className="dropdown">
                <li><NavLink to="/allChallenges">All Challenges</NavLink></li>
                <li><NavLink to="/frontendChallenges">Frontend Challenges</NavLink></li>
                <li><NavLink to="/backendChallenges">Backend Challenges</NavLink></li>
                <li><NavLink to="/uiChallenges">UI/UX Challenges</NavLink></li>
                <li><NavLink to="/dataChallenges">Data Analysis Challenges</NavLink></li>
                <li><NavLink to="/aiChallenges">AI Challenges</NavLink></li>
                <li><NavLink to="/teamChallenges">Team Challenges</NavLink></li>
              </ul>
            )}
          </li>

          {/* Mentorship Dropdown */}
          <li
            id="link"
            className={`dropdown-parent ${openDropdown === "tracks" ? "open" : ""}`}
            onClick={() => toggleDropdown("tracks")}
          >
            Mentorship
            <FaChevronDown className="dropdown-icon" />
            {openDropdown === "tracks" && (
              <ul className="dropdown">
                <li><NavLink to="/findMentor">Find a Mentor</NavLink></li>
                <li><NavLink to="/beMentor">Become a Mentor</NavLink></li>
              </ul>
            )}
          </li>

          {/* Internship Dropdown */}
          <li
            id="link"
            className={`dropdown-parent ${openDropdown === "internships" ? "open" : ""}`}
            onClick={() => toggleDropdown("internships")}
          >
            Internship
            <FaChevronDown className="dropdown-icon" />
            {openDropdown === "internships" && (
              <ul className="dropdown">
                <li><NavLink to="/applyInternships">Apply for Internships</NavLink></li>
                <li><NavLink to="/joinCommunities">Join Communities</NavLink></li>
              </ul>
            )}
          </li>

          {/* Sign Up button (inside mobile menu) */}
          <button onClick={() => {navigate('/login'); setMenuOpen(false)}}>Sign Up</button>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
