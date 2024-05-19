import { useRef } from "react"
import React from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
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