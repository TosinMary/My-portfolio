import React from 'react'
import "./Hero.css"
import bg from "../../assets/hero-picture.png"
import CV from "../../assets/Bamidele-Tosin-Mary-QA-CV.pdf"
const Hero = () => {
  return (
    <div className='hero-container' id='home'>
    <section className='intro'>
      <div className='hero-text'>
        <h1 className='hello'>Hi👋,</h1>
        <h3><span className='introText'>I'm</span> <span className='textline'>Tosin</span><br/>Quality Analyst</h3>
        <p>Detail-driven QA Analyst with a strong foundation in manual testing, API validation, and frontend technologies, ensuring seamless functionality, robust performance, 
        and exceptional user experience across every layer of the software stack.</p>
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
