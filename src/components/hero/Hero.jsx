import React from 'react'
import "./Hero.css"
import bg from "../../assets/hero-picture.png"
import CV from "../../assets/BamideleT.pdf"

const Hero = () => {
  return (
    <div className='hero-container' id='home'>
    <section className='intro'>
      <div className='hero-text'>
        <h1 className='hello'>Hi👋,</h1>
        <h3><span className='introText'>I'm</span> <span className='textline'>Tosin</span><br/>Software Developer</h3>
        <p>A passionate and skilled Frontend Developer with experience in creating visually appealing and creative website for 
          solution to real life problems and making the world an easy place to live .</p>
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
