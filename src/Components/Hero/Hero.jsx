import React from "react";
import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  const heroSlides = [
  {
    id: 1,
    background: "/Hero-img-2.jpg",
    title: "Level Up Your Skills with",
    brand: "Mentra",
    desc: "Tackle real-world challenges, improve your portfolio, and learn by doing — not just watching.",
    buttons: [
      { text: "Explore Challenges", link: "/challenges" },
      { text: "Get Started", link: "/signup" },
    ],
  },
  {
    id: 2,
    background: "/Hero-img-3.jpg",
    title: "Grow Faster with Mentorship on",
    brand: "Mentra",
    desc: "Work 1-on-1 with experienced tech mentors who guide your journey and boost your skills.",
    buttons: [
      { text: "Find a Mentor", link: "/mentorship" },
      { text: "Become a Mentor", link: "/become-mentor" },
    ],
  },
  {
    id: 3,
    background: "/Hero-img-1.jpg",
    title: "Build Together, Win Together on",
    brand: "Mentra",
    desc: "Team up with other developers to solve challenges, share skills, and create portfolio-worthy projects.",
    buttons: [
      { text: "Join a Team", link: "/teams" },
      { text: "Start a Team", link: "/teams/create" },
    ],
  },
  {
    id: 4,
    background: "/Hero-img-4.jpg",
    title: "Share. Inspire. Connect on",
    brand: "Mentra",
    desc: "Post your learning journey, get feedback, and be inspired by others in our vibrant tech community.",
    buttons: [
      { text: "Join Community", link: "/community" },
      { text: "Share Progress", link: "/community/post" },
    ],
  },
  {
    id: 5,
    background: "/Hero-img-5.jpg",
    title: "Turn Skills into Experience with",
    brand: "Mentra",
    desc: "Join internships, real-world projects, and company-sponsored challenges to grow beyond theory.",
    buttons: [
      { text: "View Internships", link: "/applyInternships" },
      { text: "Apply Now", link: "/internships/apply" },
    ],
  },
];


  return (
    <div className="hero-swiper">
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="header"
              style={{ backgroundImage: `url(${slide.background})` }}
            >
              <div className="header-container">
                <div className="header-content">
                  <h2>
                    {slide.title}{" "}
                    <span className="brand">{slide.brand}</span>
                  </h2>
                  <p>{slide.desc}</p>

                  {/* Dynamic buttons */}
                  <div className="hero-buttons">
                    {slide.buttons.map((btn, index) => (
                      <a
                        key={index}
                        href={btn.link}
                        className="hero-btn"
                      >
                        {btn.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
