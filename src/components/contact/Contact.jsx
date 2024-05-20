import { useRef } from "react"
import React from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9afwywd', 'template_uxp31zf', form.current, {
        publicKey: '8_TegB158ayA5Im61',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("Email sent !")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
    <div className='contact-container' id='contact'>
      <section className='contact-layout'>
        <h3 className='contact-header'>Contact Me</h3>
        <p className='contact-paragraph'>Please fill out the form below to discuss any job opportunities</p>
        <section className='form-layout'>
            <form ref={form} onSubmit={sendEmail}>
               <input type='text' placeholder="Your name" name="your_name"/>
                <input type='email'  placeholder="Your email" name="your_email" />
               <textarea name='message' row="5" placeholder="Your message"></textarea>
               <button type='submit' value="Send" className='btn'>Submit</button>
            </form>
        </section>
        </section>
    </div>
    </>
  )
}

export default Contact