import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <>
    <div className='contact-container' id='contact'>
      <section className='contact-layout'>
        <h3 className='contact-header'>Contact Me</h3>
        <p className='contact-paragraph'>Please fill out the form below to discuss any job opportunities</p>
        <section className='form-layout'>
            <form>
               <input type='text' placeholder="Your name"/>
                <input type='email'  placeholder="Your email"/>
               <textarea name='message' row="5" placeholder="Your message"></textarea>
               <button type='submit' value="send" className='btn'>Submit</button>
            </form>
        </section>
        </section>
    </div>
    </>
  )
}

export default Contact