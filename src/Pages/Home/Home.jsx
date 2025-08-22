import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Testimonials from '../../Components/Testimonials/Testimonials'
import HowItWorks from '../../Components/HowItWorks/HowItWorks'
import Community from '../../Components/Community/Community'
import OurPartners from '../../Components/OurPartners/OurPartners'
import Contact from '../../Components/Contact/Contact'
import FeaturedChallenges from '../../Components/FeaturedChallenges/FeaturedChallenges'
import MentorshipHighlight from '../../Components/Mentorship/MentorshipHighlight'
import WhyChooseMentra from '../../Components/WhyChooseMentra/WhyChooseMentra'

const Home = () => {
  return (
    <div>
        <Hero /><br />
        <HowItWorks />
        <WhyChooseMentra />
        <Testimonials />
        <FeaturedChallenges />
        <MentorshipHighlight />
        <Community />
        <OurPartners />
        <Contact />
    </div>
  )
}

export default Home