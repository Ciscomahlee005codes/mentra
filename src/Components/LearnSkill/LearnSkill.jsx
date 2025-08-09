import React from 'react'
import "./LearnSkill.css"
import SkillImage from '../../assets/Skill-img.jpg'

const LearnSkill = () => {
  return (
    <div className='skill-container'>
      <div className="skill-content">
        <h2>Learn a Skill with Mentra</h2>
        <p className="sub-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis vitae omnis quo.</p>

        <div className="content-text">
               <div className="img-content">
                 <img src={SkillImage} alt="" />
               </div>
              <div className="text-content">
                <h3>Empowering Careers, One Connection at a Time</h3>
                <p>
                 At Mentra, we believe that growth doesn’t happen in isolation — it happens in a community. Our platform connects aspiring talents with experienced mentors to unlock skills, track progress, and build real-world experience through mentorship and internships.Whether you're a beginner aiming to learn something new or an enthusiast seeking guidance from those ahead, Mentra is your launchpad. With flexible session bookings, a personalized progress dashboard, and a vibrant community to share your journey with — we help you grow, not just learn. We go a step further by providing internship opportunities to bridge the gap between learning and real-life experience.Learn. Connect. Grow.
                </p>
              </div>
            </div>
      </div>
    </div>
  )
}

export default LearnSkill