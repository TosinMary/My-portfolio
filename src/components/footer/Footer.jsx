import React, { useState,useEffect } from 'react'
import linkedIn from "../../assets/linkedin.png"
import github from "../../assets/github.png"
import twitter from "../../assets/twitter.png"
import "./Footer.css"



function Footer() {
  const [date, setDate] = useState();
    const getYear = () =>  setDate(new Date().getFullYear())
    useEffect(() => {
        getYear();
    }, [])
  return (
    <div className='footer-container'>
      <section className='footer-layout'>
        <div className='social-links'>
            <a href='https://www.linkedin.com/in/tosin-bamidele-b357441b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='blank'><img src={linkedIn} alt='linkedIn-logo' className='social-logo'/></a>
            <a href='https://github.com/TosinMary' target='blank'><img src={github} alt='github-logo' className='social-logo'/></a>
            <a href='https://x.com/btosin241?t=AJtp9BMErB-wh2gXiGnh4g&s=09' target='blank'><img src={twitter} alt='twitter-logo' className='social-logo'/></a>
        </div>
        <p>All right and reserved by Bamidele Tosin 💡 {date}</p>
        </section>
    </div>
  )
}

export default Footer