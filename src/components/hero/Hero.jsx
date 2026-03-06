import React from 'react'
import "./Hero.css"
import bg from "../../assets/hero-picture.png"
import CV from "../../assets/Bamidele Tosin Mary QA-CV (3).pdf"
const Hero = () => {
  return (
    <div className='hero-container' id='home'>
    <section className='intro'>
      <div className='hero-text'>
        <h1 className='hello'>Hi👋,</h1>
        <h3><span className='introText'>I'm</span> <span className='textline'>Tosin</span><br/>Quality Assurance Engineer</h3>
        <p>Detail-oriented Quality Assurance Engineer with expertise in manual and automated testing across 
Web,  Mobile, Desktop, and API platforms. Proficient in designing and executing test plans, regression 
suites,  API validation and exploratory testing to ensure software reliability and security. API security 
verified by  APISec University, committed to delivering high-quality, user-focused software.</p>
        <a href={CV} download="Bamidele Tosin CV"><button className='heroBtn'>Download CV</button></a>
      </div> 
      <div className='hero-img'>
        <img src={bg} alt='hero-image' className='hero-image'></img>
      </div>
    </section>
    </div>
  )
}

export default Hero
