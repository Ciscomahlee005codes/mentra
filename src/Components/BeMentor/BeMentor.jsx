import React, { useState } from "react";
import "./BeMentor.css";

const BeMentor = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    expertise: "",
    portfolio: "",
    cv: null,
    documents: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Application submitted successfully! Our team will review it.");
    console.log(formData);
  };

  return (
    <div className="mentor-content2">
      <h1 className="mentor-title">Apply to Be a Mentor</h1>
      <p className="mentor-subtitle">
        Share your details below. Our team will review your application before
        approval.
      </p>

      <form className="mentor-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Area of Expertise</label>
          <select
            name="expertise"
            value={formData.expertise}
            onChange={handleChange}
            required
          >
            <option value="">Select expertise</option>
            <option value="Frontend Development">Frontend Development</option>
            <option value="Backend Development">Backend Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Fullstack Development">Fullstack Development</option>
            <option value="Data Science">Data Science</option>
            <option value="Cybersecurity">Cybersecurity</option>
          </select>
        </div>

        <div className="form-group">
          <label>Portfolio Link</label>
          <input
            type="url"
            name="portfolio"
            placeholder="https://yourportfolio.com"
            value={formData.portfolio}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Upload CV</label>
          <input
            type="file"
            name="cv"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Other Supporting Documents</label>
          <input
            type="file"
            name="documents"
            accept=".pdf,.doc,.docx,.jpg,.png"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default BeMentor;
