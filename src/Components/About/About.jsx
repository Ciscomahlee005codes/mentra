import React from "react";
import AboutImage from '../../assets/About-img.jpg'
import { IoIosArrowRoundForward } from "react-icons/io";
import "./About.css";

const About = () => {
  return (
    <div id="aboutUs">
       <h2 className="about-head">About <span style={{letterSpacing: '3px'}}>MENTRA</span></h2>
      <div className="about-container">
        <img src={AboutImage} alt="" />
      <div className="about-content">
        <h3>Empowering Careers, One Connection at a Time</h3>
        <p>
         At Mentra, we believe that growth doesn’t happen in isolation — it happens in a community. Our platform connects aspiring talents with experienced mentors to unlock skills, track progress, and build real-world experience through mentorship and internships.Whether you're a beginner aiming to learn something new or an enthusiast seeking guidance from those ahead, Mentra is your launchpad. With flexible session bookings, a personalized progress dashboard, and a vibrant community to share your journey with — we help you grow, not just learn. We go a step further by providing internship opportunities to bridge the gap between learning and real-life experience.Learn. Connect. Grow.
        </p>
        <button>Explore MENTRA <IoIosArrowRoundForward /> </button>
      </div>
    </div>
    </div>
  );
};

export default About;