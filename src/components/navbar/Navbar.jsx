import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import CV from "../../assets/Bamidele Tosin_Front-End Developer 01.pdf"

import menuBar from "../../assets/burger-bar.png"



const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="nav-container">
      <nav className='navbar'>
        <h6 className='logo'>BT</h6>
        <div className='nav-links-section'>
            <Link activeClass='active' to="home" spy={true} smooth={true} offset={-100} duration={500} className='nav-link'>Home</Link>
            <Link activeClass='active' to="about" spy={true} smooth={true} offset={-5} duration={500} className='nav-link'>About</Link>
            <Link activeClass='active' to="project" spy={true} smooth={true} offset={-50} duration={500}  className='nav-link'>Project</Link>
            <Link activeClass='active' to="contact" spy={true} smooth={true} offset={-50} duration={500} className='nav-link'>Contact</Link>
        </div>
        <a href={CV} download="Bamidele Tosin CV"><button className='navBtn'>Download CV</button></a>
        <img src={menuBar} alt='menuBar' className='menuBar' onClick={()=>setShowMenu(!showMenu)}  />
        <div className='nav-menu' style={{display:showMenu? 'flex':'none'}}>
            <Link activeClass='active' to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setShowMenu(false)}  className='nav-links'>Home</Link>
            <Link activeClass='active' to="about" spy={true} smooth={true} offset={-5} duration={500} onClick={()=>setShowMenu(false)}  className='nav-links'>About</Link>
            <Link activeClass='active' to="project" spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setShowMenu(false)}  className='nav-links'>Project</Link>
            <Link activeClass='active' to="contact" spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setShowMenu(false)}  className='nav-links'>Contact</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
