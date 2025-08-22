import React from "react";
import AboutImage from '../../assets/About-img.jpg'
import FAQ from '../FAQ/FAQ'
import "./About.css";
import Mission from "../Mission/Mission";

const About = () => {
  return (
    <div id="aboutUs">
       <h2 className="about-head">About <span style={{letterSpacing: '3px'}}>MENTRA</span></h2>
      <div className="about-container">
        <img src={AboutImage} alt="" />
      <div className="about-content">
   <h3>Fueling Growth Through Meaningful Mentorship</h3>
  <p>
    At Mentra, we believe growth happens in a thriving community — not in isolation. 
    Our platform bridges the gap between aspiring talents and experienced mentors, 
    enabling you to gain skills, track progress, and build real-world experience 
    through mentorship and internships.
    <br /><br />
    Whether you're just starting your journey or looking to refine your expertise, 
    Mentra is your launchpad. With flexible session bookings, a personalized progress 
    dashboard, and a vibrant network of learners and professionals, we help you grow, 
    not just learn.
    <br /><br />
    We go beyond traditional learning by connecting you to internship opportunities 
    that turn skills into experience. Learn. Connect. Grow. — that’s the Mentra way.
  </p>
</div>

    </div>
    {/* About Us */}
    <Mission />
    <FAQ />
    </div>
  );
};

export default About;