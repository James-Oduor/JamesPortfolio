import { send } from '@emailjs/browser';
import './contact.css';
import React, { useRef, useState } from "react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;
    const formData = new FormData(form);

    const data = {
      name: formData.get('Name'),
      email: formData.get('Email'),
      message: formData.get('Message')
    };

    // Send data to Google Sheets via Google Apps Script
    await fetch('YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    // Send email via EmailJS (Optional)
    send(
      'service_tslofto', // Service ID
      'template_d7svt9e', // Template ID
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      },
      'AmMj3HLJm3qK4FYqG' // User ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }).catch((err) => {
      console.error('FAILED...', err);
    });

    setIsSubmitted(true); // Show success message
  };

  return (
    <section id='contactPage'>
      <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>
          If you are ever in need of reaching out to me for any reason, whether it’s to ask a question,
          have a conversation, or discuss something important, please feel free to contact me
          using the methods or information I have provided.
        </span>
        <form ref={formRef} className='contactForm' onSubmit={handleSubmit}>
          <input type='text' className='name' placeholder='Your Name' name="Name" required />
          <input type='email' className='email' placeholder='Your Email' name="Email" required />
          <textarea className='msg' name='Message' rows={5} placeholder='Your Message' required />
          <button type='submit' className='submitBtn'>Submit</button>
        </form>
        {isSubmitted && <div>Thank you for your message! I will get back to you soon.</div>}
        <footer>copyright@James</footer>
      </div>
    </section>
  );
};

export default Contact;
