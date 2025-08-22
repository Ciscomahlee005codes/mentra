import React, { useEffect, useState, useMemo } from "react";
import "./WhyChooseMentra.css";

export default function WhyChooseMentra() {
  const stats = useMemo(
    () => [
      { label: "Active Mentors", value: 250 },
      { label: "Happy Learners", value: 5000 },
      { label: "Challenges Covered", value: 120 },
      { label: "Projects Completed", value: 300 },
    ],
    []
  );

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < stat.value) {
            newCounts[index] += Math.ceil(stat.value / 100);
          }
          return newCounts;
        });
      }, 20);
    });

    return () => intervals.forEach(clearInterval);
  }, [stats]);

  return (
    <section className="why-choose-mentra">
      <div className="container">
        <h2>
          Why Choose <span>Mentra</span>?
        </h2>
        <p className="subtitle">
          We’re more than just a mentorship platform — we’re a movement to
          empower, connect, and grow developers worldwide.
        </p>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <h3>{counts[index]}+</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        <ul className="reasons">
          <li>✔ Learn directly from industry experts</li>
          <li>✔ Access exclusive real-world projects</li>
          <li>✔ Build a portfolio that gets you hired</li>
          <li>✔ Join a global community of learners & mentors</li>
          <li>✔ Flexible learning that fits your schedule</li>
        </ul>
      </div>
    </section>
  );
}
