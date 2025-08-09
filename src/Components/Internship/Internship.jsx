import React, { useState } from "react";
import "./Internship.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const internshipRoles = [
  { title: "Frontend Developer", type: "Tech", company: "CodeVerse Inc.", location: "Remote" },
  { title: "Backend Developer", type: "Tech", company: "TechBase", location: "Remote" },
  { title: "UI/UX Designer", type: "Tech", company: "PixelCraft Studio", location: "Lagos" },
  { title: "Data Analyst", type: "Tech", company: "InsightEdge", location: "Remote" },
  { title: "Product Manager", type: "Tech", company: "LaunchHub", location: "Remote" },

  { title: "Digital Marketing", type: "Non-Tech", company: "BrightMarket", location: "Abuja" },
  { title: "Content Writer", type: "Non-Tech", company: "WriteHouse", location: "Remote" },
  { title: "Customer Support", type: "Non-Tech", company: "HelpDesk Pro", location: "Lagos" },
  { title: "HR Intern", type: "Non-Tech", company: "PeoplePlus", location: "Remote" },
  { title: "Graphic Designer", type: "Non-Tech", company: "CreativeBase", location: "Remote" },
];

const Internship = () => {
  const [filter, setFilter] = useState("All");

  const filteredRoles =
    filter === "All" ? internshipRoles : internshipRoles.filter(role => role.type === filter);

  return (
    <section className="internship-section">
      <h2>Available Internship Roles</h2>

      <div className="filter-buttons">
        {["All", "Tech", "Non-Tech"].map((btn) => (
          <button
            key={btn}
            onClick={() => setFilter(btn)}
            className={`filter-btn ${filter === btn ? "active" : ""}`}
          >
            {btn}
          </button>
        ))}
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {filteredRoles.map((role, index) => (
          <SwiperSlide key={index}>
            <div className="internship-card">
              <span className={`role-badge ${role.type === "Tech" ? "tech" : "non-tech"}`}>
                {role.type}
              </span>
              <h3>{role.title}</h3>
              <p><strong>Company:</strong> {role.company}</p>
              <p><strong>Location:</strong> {role.location}</p>
              <button className="apply-btn">Apply Now</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Internship;
