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
      title: "Learn New Skills with",
      brand: "Mentra",
      desc: "Start your journey in tech, business, or creative skills — one lesson at a time.",
      buttons: [
        { text: "Explore Skills", link: "/skills" },
        { text: "Join Now", link: "/signup" },
      ],
    },
    {
      id: 2,
      background: "/Hero-img-3.jpg",
      title: "Book Sessions with Mentors on",
      brand: "Mentra",
      desc: "Connect with expert mentors ready to guide your growth, step by step.",
      buttons: [
        { text: "Find a Mentor", link: "/mentors" },
        { text: "Become a Mentor", link: "/become-mentor" },
      ],
    },
    {
      id: 3,
      background: "/Hero-img-5.jpg",
      title: "Track Your Progress on",
      brand: "Mentra",
      desc: "Stay consistent. Track your learning, your wins, and how far you’ve come.",
      buttons: [
        { text: "Start Tracking", link: "/dashboard" },
      ],
    },
    {
      id: 4,
      background: "/Hero-img-4.jpg",
      title: "Share your journey with others on",
      brand: "Mentra",
      desc: "Post your progress and inspire others on the same path as you.",
      buttons: [
        { text: "Join Community", link: "/community" },
        { text: "Share Progress", link: "/post" },
      ],
    },
    {
      id: 5,
      background: "/Hero-img-1.jpg",
      title: "Gain Real Experience with",
      brand: "Mentra",
      desc: "Join internship programs, team projects, and real-world challenges organized through Mentra. Build your portfolio, gain confidence, and grow beyond theory.",
      buttons: [
        { text: "View Internships", link: "/internships" },
        { text: "Apply Now", link: "/apply" },
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
