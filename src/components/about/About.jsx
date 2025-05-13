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
        <h3>About Me</h3>
        <div className='about-me'>
            <p>Tosin is a Quality Analyst with a strong frontend development background, 
                proficient in HTML, CSS, JavaScript, and modern frameworks like React.js, Tailwind CSS, 
                and Bootstrap. She combines in-depth testing expertise with UI/UX insight to ensure responsive, 
                accessible, and high-performing web applications. With a focus on functionality, reliability, 
                and user experience, Tosin bridges the gap between quality assurance and frontend engineering.</p>
        </div>
        <div className='skills-sec'>
            <div className='lang-skills'>
            <div className='lang-skill'>
                <h4>Manual Testing</h4>
            </div>
            <div className='lang-skill'>
                <h4>API Testing (Postman)</h4>
            </div>
            <div className='lang-skill'>
                <h4>Agile Methodology</h4>
            </div>
            <div className='lang-skill'>
                <h4>Test Planning</h4>
            </div>
            <div className='lang-skill'>
                <h4>Functional Testing</h4>
            </div>
            <div className='lang-skill'>
                <h4>Performance Testing</h4>
            </div>
            <div className='lang-skill'>
                <h4>Usability Testing</h4>
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
