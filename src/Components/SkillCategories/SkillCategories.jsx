// SkillCategories.jsx
import React, { useState } from "react";
import "./SkillCategories.css";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaChartBar,
  FaPenNib,
  FaProjectDiagram,
  FaHammer,
} from "react-icons/fa";

const techSkills = [
  {
    title: "Web Development",
    icon: <FaLaptopCode />,
    description: "Build websites & web apps with real-world tools.",
  },
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush />,
    description: "Design intuitive and beautiful user experiences.",
  },
  {
    title: "Data Analytics",
    icon: <FaChartBar />,
    description: "Analyze and visualize real data like a pro.",
  },
];

const otherSkills = [
  {
    title: "Content Writing",
    icon: <FaPenNib />,
    description: "Write compelling content that connects.",
  },
  {
    title: "Product Management",
    icon: <FaProjectDiagram />,
    description: "Manage teams and launch impactful products.",
  },
  {
    title: "Digital Crafts & More",
    icon: <FaHammer />,
    description: "Learn handmade & digital creative skills online.",
  },
];

const SkillCard = ({ skill }) => (
  <div className="skill-card">
    <div className="skill-icon">{skill.icon}</div>
    <h3>{skill.title}</h3>
    <p>{skill.description}</p>
    <div className="skill-buttons">
      <button className="btn-primary">View Mentors</button>
      <button className="btn-secondary">Start Learning</button>
    </div>
  </div>
);

const SkillCategories = () => {
  const [activeTab, setActiveTab] = useState("tech");

  const renderSkills = activeTab === "tech" ? techSkills : otherSkills;

  return (
    <section className="skill-section">
      <h2>Learn a Skill</h2>
      <p className="subtext">Pick a track and begin your growth journey.</p>

      {/* Category Toggle Buttons */}
      <div className="category-toggle">
        <button
          className={activeTab === "tech" ? "active" : ""}
          onClick={() => setActiveTab("tech")}
        >
          Tech Skills
        </button>
        <button
          className={activeTab === "non-tech" ? "active" : ""}
          onClick={() => setActiveTab("non-tech")}
        >
          Non-Tech Skills
        </button>
      </div>

      {/* Skill Cards */}
      <div className="skill-grid">
        {renderSkills.map((skill, i) => (
          <SkillCard key={i} skill={skill} />
        ))}
      </div><br />
      <button className="skill-btn">View More Skills</button>
    </section>
  );
};

export default SkillCategories;
