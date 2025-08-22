// HowItWorks.jsx
import React from "react";
import "./HowItWorks.css";
import { FaBookOpen, FaCalendarCheck, FaChartLine, FaShareAlt, FaBriefcase, FaUsers } from "react-icons/fa";

const steps = [
  {
    icon: <FaBookOpen />,
    title: "Learn & Grow",
    description:
      "Access structured learning paths, courses, and resources curated by expert mentors to help you master in-demand skills.",
  },
  {
    icon: <FaCalendarCheck />,
    title: "Book Mentorship Sessions",
    description:
      "Easily schedule one-on-one or group mentorship sessions that align with your goals and availability.",
  },
  {
    icon: <FaUsers />,
    title: "Team Up with Developers",
    description:
      "Collaborate with other learners and developers on projects, challenges, and hackathons to grow faster together.",
  },
  {
    icon: <FaChartLine />,
    title: "Track Your Growth",
    description:
      "Use your personal dashboard to track progress, completed milestones, and upcoming goals in real time.",
  },
  {
    icon: <FaBriefcase />,
    title: "Get Real-World Opportunities",
    description:
      "Apply your skills through internships, collaborations, and client projects from our global partner network.",
  },
  {
    icon: <FaShareAlt />,
    title: "Showcase & Inspire",
    description:
      "Share your portfolio, achievements, and project work with the community to inspire and attract opportunities.",
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
