import React from 'react';
import './Community.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const communities = [
  {
    name: 'Developer Community',
    description: 'Join fellow web & mobile developers to learn, build and grow together.',
    image: '/images/dev-community.jpg',
  },
  {
    name: 'Business & Startup Mentees',
    description: 'Connect with business mentors and like-minded founders.',
    image: '/images/business-community.jpg',
  },
  {
    name: 'Content Creators Hub',
    description: 'Perfect space for writers, designers, and creative minds.',
    image: '/images/content-creator.jpg',
  },
  {
    name: 'Tech Careers Corner',
    description: 'Explore different tech career paths with experienced professionals.',
    image: '/images/tech-career.jpg',
  },
];

const Community = () => {
  return (
    <div className="community-showcase">
      <h2>Join a Community</h2>
      <p>Be part of an active group of learners just like you</p>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {communities.map((community, index) => (
          <SwiperSlide key={index}>
            <div className="community-card">
              <img src={community.image} alt={community.name} />
              <h3>{community.name}</h3>
              <p>{community.description}</p>
              <button>Join Community</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Community;
