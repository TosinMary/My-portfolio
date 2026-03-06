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
        <h3>Tools and Technologies</h3>
        <div className='skills-sec'>
            <div className='lang-skills'>
            <div className='lang-skill'>
                <h4>Manual & Automation Testing</h4>
            </div>
            <div className='lang-skill'>
                <h4>API Testing (Postman)</h4>
            </div>
            <div className='lang-skill'>
                <h4>Agile Methodology (Jira/Testrail)</h4>
            </div>
            <div className='lang-skill'>
                <h4>Cypress</h4>
            </div>
            <div className='lang-skill'>
                <h4>k6</h4>
            </div>
            <div className='lang-skill'>
                <h4>JMeter</h4>
            </div>
            <div className='lang-skill'>
                <h4>Jerkins</h4>
            </div>
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
                <h4>React.js</h4>
            </div>
            <div className='lang-skill'>
                <FaGit className='skill-icon'/>
                <h4>Version Control</h4>
            </div>
            <div className='lang-skill'>
                <h4>Playwright</h4>
            </div>
            
            </div>
        </div>
    </section >
    </div>
  )
}

export default About
