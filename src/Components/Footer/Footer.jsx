import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & About */}
        <div className="footer-brand">
          <h2>Mentra</h2>
          <p>Empowering minds, connecting mentors and mentees for real growth and experience.</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Mentra</a></li>
            <li><a href="/how-it-works">How It Works</a></li>
            <li><a href="/skills">Contact Us</a></li>
            <li><a href="/skills">Get Help</a></li>
          </ul>
        </div>

         {/* Other Links */}
        <div className="footer-links">
          <h3>Other Links</h3>
          <ul>
            <li><a href="/skills">Learn a Skill</a></li>
            <li><a href="/mentors">Mentorships</a></li>
            <li><a href="/internships">Internships</a></li>
            <li><a href="/skills">Track Your Progress</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-socials">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mentra. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
