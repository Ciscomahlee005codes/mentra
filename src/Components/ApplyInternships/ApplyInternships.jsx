import React, { useState } from "react";
import "./ApplyInternships.css";

const skillsOptions = [
  "HTML/CSS", "JavaScript", "React", "TypeScript", "Node.js",
  "Python", "Django", "Java", "UI/UX", "Figma", "SQL", "Data Analysis",
];

const ApplyInternships = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    location: "",
    availability: "",
    startDate: "",
    portfolio: "",
    cv: null,
    coverLetter: "",
    skills: [],
    agree: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox" && name === "agree") {
      setFormData((p) => ({ ...p, agree: checked }));
    } else if (type === "file") {
      setFormData((p) => ({ ...p, [name]: files[0] || null }));
    } else {
      setFormData((p) => ({ ...p, [name]: value }));
    }
  };

  const toggleSkill = (skill) => {
    setFormData((p) => {
      const exists = p.skills.includes(skill);
      const skills = exists ? p.skills.filter((s) => s !== skill) : [...p.skills, skill];
      return { ...p, skills };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // simple validation
    if (!formData.agree) {
      alert("Please agree to the terms before submitting.");
      return;
    }
    setSubmitted(true);
    // Here you would post to your API / Firebase
    console.log("Internship application:", formData);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="apply-int-container">
      <header className="apply-int-header">
        <h1>Apply for Internships</h1>
        <p>Kickstart your career — fill the form and our team will get back to you.</p>
      </header>

      {submitted && (
        <div className="apply-int-toast">✅ Application received! We’ll review and contact you.</div>
      )}

      <form className="apply-int-form" onSubmit={handleSubmit}>
        <div className="grid two">
          <div className="form-group">
            <label>Full Name</label>
            <input
              name="fullName"
              type="text"
              placeholder="Your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              name="phone"
              type="tel"
              placeholder="+234 812 345 6789"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Preferred Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">Select role</option>
              <option value="Frontend Intern">Frontend Intern</option>
              <option value="Backend Intern">Backend Intern</option>
              <option value="Fullstack Intern">Fullstack Intern</option>
              <option value="UI/UX Intern">UI/UX Intern</option>
              <option value="Data Intern">Data Intern</option>
              <option value="Cybersecurity Intern">Cybersecurity Intern</option>
            </select>
          </div>

          <div className="form-group">
            <label>Location (City / Remote)</label>
            <input
              name="location"
              type="text"
              placeholder="Lagos / Remote"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Availability</label>
            <select
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              required
            >
              <option value="">Select availability</option>
              <option value="Full-time (40hrs/week)">Full-time (40hrs/week)</option>
              <option value="Part-time (20hrs/week)">Part-time (20hrs/week)</option>
              <option value="Weekends only">Weekends only</option>
            </select>
          </div>

          <div className="form-group">
            <label>Preferred Start Date</label>
            <input
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Portfolio / GitHub Link</label>
            <input
              name="portfolio"
              type="url"
              placeholder="https://github.com/you or portfolio site"
              value={formData.portfolio}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Relevant Skills</label>
          <div className="skills-chips">
            {skillsOptions.map((skill) => (
              <button
                type="button"
                key={skill}
                className={`chip ${formData.skills.includes(skill) ? "active" : ""}`}
                onClick={() => toggleSkill(skill)}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        <div className="grid two">
          <div className="form-group">
            <label>Upload CV (PDF/DOC)</label>
            <input
              name="cv"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Cover Letter</label>
          <textarea
            name="coverLetter"
            rows="6"
            placeholder="Briefly tell us why you’re a great fit…"
            value={formData.coverLetter}
            onChange={handleChange}
            required
          />
        </div>

        <label className="agree-line">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          I confirm all information provided is accurate.
        </label>

        <button type="submit" className="submit-btn">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplyInternships;
