import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Testimonials from '../../Components/Testimonials/Testimonials'
import About from '../../Components/About/About'
import HowItWorks from '../../Components/HowItWorks/HowItWorks'
import SkillCategories from '../../Components/SkillCategories/SkillCategories'
import Community from '../../Components/Community/Community'
import Footer from '../../Components/Footer/Footer'
import FAQ from '../../Components/Internship/FAQ/FAQ'
import OurPartners from '../../Components/OurPartners/OurPartners'
import Contact from '../../Components/Contact/Contact'

const Home = () => {
  return (
    <div>
        <Hero /><br />
        <About />
        <HowItWorks />
        <SkillCategories />
        <Community />
        <OurPartners />
        <FAQ />
        <Testimonials />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home