import React from 'react'
import "./MentorshipHighlight.css"
import MentorImg from "../../assets/Hero-img-3.jpg"
import { IoIosArrowRoundForward } from "react-icons/io";

const MentorshipHighlight = () => {
  return (
    <div className='mentorShip'>
      <div className="mentor-container" style={{padding: '30px'}}>
           <h2 className="mentor-head">Get a Mentor at <span style={{letterSpacing: '3px'}}>MENTRA</span></h2>
           <div className="mentor-content">
                   <img src={MentorImg} alt="" />
                 <div className="mentor-content-text">
                   <h3>Empowering Careers, One Connection at a Time</h3>
                   <p>
                    At Mentra, we believe that growth doesn’t happen in isolation — it happens in a community. Our platform connects aspiring talents with experienced mentors to unlock skills, track progress, and build real-world experience through mentorship and internships.Whether you're a beginner aiming to learn something new or an enthusiast seeking guidance from those ahead, Mentra is your launchpad. With flexible session bookings, a personalized progress dashboard, and a vibrant community to share your journey with — we help you grow, not just learn. We go a step further by providing internship opportunities to bridge the gap between learning and real-life experience.Learn. Connect. Grow.
                   </p>
                  <div className="ment-btn">
                     <button>Get a Mentor <IoIosArrowRoundForward /> </button>
                   <button>Become a Mentor <IoIosArrowRoundForward /> </button>
                  </div>
                 </div>
               </div>
      </div>
    </div>
  )
}

export default MentorshipHighlight
