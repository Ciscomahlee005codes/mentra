// HowItWorks.jsx
import React from "react";
import "./HowItWorks.css";
import { FaBookOpen, FaCalendarCheck, FaChartLine, FaShareAlt, FaBriefcase } from "react-icons/fa";

const steps = [
  {
    icon: <FaBookOpen />,
    title: "Learn a New Skill",
    description: "Access curated learning paths and resources designed by expert mentors to help you build real-world skills.",
  },
  {
    icon: <FaCalendarCheck />,
    title: "Book a Session",
    description: "Connect with your mentor by booking one-on-one sessions that fit your schedule and learning pace.",
  },
  {
    icon: <FaChartLine />,
    title: "Track Your Progress",
    description: "Use your personal dashboard to monitor your goals, session history, and growth milestones.",
  },
  {
    icon: <FaShareAlt />,
    title: "Share Your Journey",
    description: "Document and share your learning experiences, challenges, and wins with a supportive community.",
  },
  {
    icon: <FaBriefcase />,
    title: "Gain Real Experience",
    description: "Apply your skills in real-life scenarios through exclusive internship opportunities offered by partners.",
  },
];

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <h2>How Mentra Works</h2>
      <p className="intro">
        Here’s a simple breakdown of how you can grow with Mentra.
      </p>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
