import React from 'react'
import "./Features.css"
import picture1 from "../../assets/dictionary.png"
import picture2 from "../../assets/ecommerce.png"
import picture3 from "../../assets/random-quote.png"
import picture4 from "../../assets/Foodieloo.png"
import { FaGit } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const Features = () => {
  return (
    <div className='feature-container' id='project'>
      <h3>Software Testing Sample Projects</h3>
       <section className='project-container'>
            <div className='project'>
                <div className='img-container'>
                  <h4>Zedu App Test Cases</h4>
                </div>
                <div className='project-summary'>
                  <div >
                   <h4>Test Case Doc: <a href='https://docs.google.com/spreadsheets/d/1zGsv2sYxnTYTzOZYHcdTD_88PlRGNMpVZDbXvUoj2b4/edit?usp=sharing' className='project-icon' target='_blank'><FaExternalLinkAlt /></a></h4> <br></br>
                    <h4>Live Demo: <a href='https://zedu.chat/'className='project-icon' target='_blank'><FaExternalLinkAlt /></a></h4>
                  </div>
                </div>
            </div> <div className='project'>
                <div className='img-container'>
                  <h4>Gradiffic App Test Cases</h4>
                </div>
                <div className='project-summary'>
                  <div >
                   <h4>Test Case Doc: <a href='https://docs.google.com/spreadsheets/d/1mJkLJNjSWQaXLog9q2zl8ViU5dvsHuJkPy07TrTWEE0/edit?usp=sharing' className='project-icon' target='_blank'><FaExternalLinkAlt /></a></h4> <br></br>
                    <h4>Live Demo: <a href='https://api.dev.gradific.com'className='project-icon' target='_blank'><FaExternalLinkAlt /></a></h4>
                  </div>
                </div>
            </div>
             <div className='project'>
                <div className='img-container'>
                  <h4>API Automation Link with Postman</h4>
                </div>
                <div className='project-summary'>
                  <div >
                   <h4>Zedu App API Automation Link: <a href='https://www.postman.com/api-test-1186/workspace/zedu/collection/42497516-cce2356d-6dbb-40c3-88ee-b790282f7c29?action=share&source=copy-link&creator=42497516' className='project-icon' target='_blank'><FaExternalLinkAlt /></a></h4>
                  </div>
                </div>
            </div>
             <div className='project'>
                <div className='img-container'>
                  <h4>Sample Test Plan</h4>
                </div>
                <div className='project-summary'>
                  <div >
                   <h4>Telex App Test Plan Doc: <a href='https://docs.google.com/document/d/12a5yGWC5Uct5lvKhu4-JhK2fbalOsxaRNj74mAu281w/edit?usp=sharing' className='project-icon' target='_blank'><FaExternalLinkAlt /></a></h4> <br></br>
                    <h4>Delve App Test Plan Doc: <a href='https://docs.google.com/document/d/1HEbXRRAHDmnChEyl1kE0cUXgSYN2OPwx8V92mmV1hlo/edit?usp=sharing'className='project-icon' target='_blank'><FaExternalLinkAlt /></a></h4>
                  </div>
                </div>
            </div>
            <div className='project'>
                <div className='img-container'>
                  <h4>Sample Bug Report</h4>
                </div>
                <div className='project-summary'>
                  <div >
                   <h4>TCN App Bug Report: <a href='https://docs.google.com/spreadsheets/d/1TlcBE5JuGI3nrOYt04eqRx8XVK2Z46zRlKz_gYtIvlc/edit?usp=sharing' className='project-icon' target='_blank'><FaExternalLinkAlt /></a></h4> <br></br>
                    <h4>Telex API Bug Report: <a href='https://docs.google.com/spreadsheets/d/1jZL_R9qFHs0dz-j-C-2__Dp0of4dN1gchQ3F63jiMUk/edit?usp=sharing'className='project-icon' target='_blank'><FaExternalLinkAlt /></a></h4>
                  </div>
                  </div>
                  </div>
                    <div className='project'>
                <div className='img-container'>
                  <h4>PetStore App Automation with RestAsured, Java and TestNG</h4>
                </div>
                <div className='project-summary'>
                  <div >
                   <h4>PetStore User Feature Automation: <a href='https://github.com/TosinMary/dictionary-app' className='project-icon' target='_blank'><FaGit /></a></h4> <br></br>
                    <h4>PetStore OrderPurchase Feature Automation: <a href='https://github.com/TosinMary/PetStore-OrderPurchase-API-Automation.git'className='project-icon' target='_blank'><FaGit /></a></h4>
                  </div>
                  </div>
                  </div>
            </section>
      <h3>Application Development Sample Projects</h3>
         <section className='project-container'>
            <div className='project'>
                <div className='img-container'>
                  <img src={picture1} className='project-image'></img>
                </div>
                <div className='project-summary'>
                  <h4 className='project-title'>WordFinder</h4>
                  <div className='project-icons'>
                    <a href='https://github.com/TosinMary/dictionary-app' className='project-icon' target='_blank'><FaGit /></a>
                    <a href='https://dictionary-app-pi-bay.vercel.app/'className='project-icon' target='_blank'><FaExternalLinkAlt /></a>
                  </div>
                </div>
            </div>
            <div className='project'>
                <div className='img-container'>
                  <img src={picture2} className='project-image'></img>
                </div>
                <div className='project-summary'>
                  <h4 className='project-title'>Ecommerce</h4>
                  <div className='project-icons'>
                  <a href='https://brizbeauty-ecommerce.vercel.app/' className='project-icon' target='_blank'><FaGit /></a>
                    <a href='https://brizbeauty-ecommerce.vercel.app/'className='project-icon' target='_blank'><FaExternalLinkAlt /></a>
                  </div>
                </div>
            </div>
            <div className='project'>
            <div className='img-container'>
              <img src={picture3} className='project-image'></img>
              </div>
                <div className='project-summary'>
                  <h4 className='project-title'>Quote Generator</h4>
                  <div className='project-icons'>
                  <a href='https://random-quote-generator-one-zeta.vercel.app/' className='project-icon' target='_blank'><FaGit /></a>
                    <a href='https://random-quote-generator-one-zeta.vercel.app/'className='project-icon' target='_blank'><FaExternalLinkAlt /></a>
                  </div>
                </div>
            </div>
            <div className='project'>
            <div className='img-container'>
              <img src={picture4} className='project-image'></img>
              </div>
                <div className='project-summary'>
                  <h4 className='project-title'>FoodieLoo</h4>
                  <div className='project-icons'>
                  <a href='https://foodieloo-project-practise.vercel.app/' className='project-icon' target='_blank'><FaGit /></a>
                    <a href='https://foodieloo-project-practise.vercel.app/'className='project-icon' target='_blank'><FaExternalLinkAlt /></a>
                  </div>
                </div>
            </div>
      </section>
    </div>
  )
}

export default Features
