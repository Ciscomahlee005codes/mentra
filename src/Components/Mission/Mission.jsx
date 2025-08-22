import React from "react";
import "./Mission.css";

export default function Mission() {
  return (
    <div className="mission-page">
      {/* Header */}
      <header className="mission-header">
        <h1>Our Mission & Objectives</h1>
        <p>
          At <span className="highlight">Mentra</span>, our mission is simple —
          to empower individuals through guided mentorship, real-world skills,
          and a supportive community.
        </p>
      </header>

      {/* Mission Statement */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          We aim to bridge the gap between aspiring learners and industry experts
          by providing an innovative platform for mentorship. Our approach focuses
          on personalized guidance, practical learning, and fostering confidence in
          every mentee.
        </p>
      </section>

      {/* Objectives */}
      <section className="objectives-section">
        <h2>Our Objectives</h2>
        <ul>
          <li>
            <strong>Mentorship for Struggling Developers:</strong> End the cycle of
            isolated learning and lonely building by connecting developers with
            experienced mentors who can guide, support, and inspire.
          </li>
          <li>
            <strong>Track Your Progress:</strong> Follow a clear roadmap and monitor
            your growth as you build skills step by step with real-time feedback.
          </li>
          <li>
            <strong>Share Your Journey:</strong> Document and share your learning
            journey with other developers, creating a culture of openness and mutual
            encouragement.
          </li>
          <li>
            <strong>Build with a Team:</strong> Find teammates or join project
            groups so you’re never coding alone — learn collaboration while creating
            meaningful projects.
          </li>
          <li>
            <strong>Skill-Boosting Challenges:</strong> Take on fun, practical coding
            challenges that push your limits and keep your skills sharp.
          </li>
          <li>
            <strong>Real-World Experience:</strong> Access internship opportunities
            that allow you to apply your knowledge and gain valuable industry
            exposure.
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="mission-footer">
        <p>
          Together, we’re building a world where mentorship changes lives. 🚀
        </p>
      </footer>
    </div>
  );
}
