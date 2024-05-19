import React from 'react'
import "./About.css"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const About = () => {
  return (
    <div className='about-container' id='about'>
    <section className='skills'>
        <h3>What i do</h3>
        <div className='about-me'>
            <p>Tosin is a skilled frontend developer proficient in HTML, CSS, and JavaScript
                 with expertise in modern frameworks like React.js, Tailwind.css and Bootstrap.css.
                  Dedicated to crafting user-centric digital experiences by seamlessly weaving
                   together functionality and aesthetics. Excels at transforming design concepts 
                   into responsive web applications with visually appealing and intuitive interfaces
                    that enhance user engagement.</p>
        </div>
        <div className='skills-sec'>
            <div className='lang-skills'>
            <div className='lang-skill'>
                <FaHtml5 className='skill-icon' />
                <h4>HTML5</h4>
            </div>
            <div className='lang-skill'>
                <FaCss3 className='skill-icon'/>
                <h4>CSS</h4>
            </div>
            <div className='lang-skill'>
                <IoLogoJavascript className='skill-icon'/>
                <h4>JAVASCIPT</h4>
            </div>
            <div className='lang-skill'>
                <SiTailwindcss className='skill-icon'/>
                <h4>Tailwind Css</h4>
            </div>
            <div className='lang-skill'>
                <FaBootstrap className='skill-icon'/>
                <h4>Bootstrap Css</h4>
            </div>
            <div className='lang-skill'>
                <FaReact className='skill-icon'/>
                <h4>React.js / Redux</h4>
            </div>
            <div className='lang-skill'>
                <FaGit className='skill-icon'/>
                <h4>Version Control</h4>
            </div>
            <div className='lang-skill'>
                <h4>RestApi Consumption</h4>
            </div>
            
            </div>
        </div>
    </section >
    </div>
  )
}

export default About
