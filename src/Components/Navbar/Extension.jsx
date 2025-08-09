import "./Navbar.css";
import { useState } from "react";
import { FaBell, FaHistory } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { BsBuildingsFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Mentra-logo.png";

const Extension = () => {
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

          <li id="link" onClick={() => toggleDropdown("mentors")}>
            Mentors
            {openDropdown === "mentors" && (
              <ul className="dropdown">
                <li><NavLink to="/mentors/frontend">Frontend</NavLink></li>
                <li><NavLink to="/mentors/backend">Backend</NavLink></li>
                <li><NavLink to="/mentors/uiux">UI/UX</NavLink></li>
              </ul>
            )}
          </li>

          <li id="link" onClick={() => toggleDropdown("tracks")}>
            Learning Tracks
            {openDropdown === "tracks" && (
              <ul className="dropdown">
                <li><NavLink to="/tracks/frontend">Frontend Dev</NavLink></li>
                <li><NavLink to="/tracks/design">Design</NavLink></li>
                <li><NavLink to="/tracks/marketing">Marketing</NavLink></li>
              </ul>
            )}
          </li>

          <li id="link"><NavLink to="/internships">Internships</NavLink></li>
          <li id="link"><NavLink to="/community">Community</NavLink></li>
          <li id="link"><NavLink to="/progress">Progress</NavLink></li>
        </ul>

        <FaBell id="bell-icon" />
        <button>Sign Up</button>
      </div>

      {/* 🔹 Bottom Mobile Nav (Optional) */}
    </header>
  );
};

export default Extension;
