// Contact.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact-wrapper">
      {/* Contact Me Card */}
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>
          If you have any questions or would like to get in touch, feel free to reach out.
        </p>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Contact Information Card */}
      <div className="contact-info-card">
        <h2>My Links</h2>
        <a href="https://github.com/Msalarzon" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/mbsalarzon/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
          LinkedIn
        </a>
        <a href="/cv/meriam-cv.pdf" download>
          <FontAwesomeIcon icon={faFileDownload} />
          Download CV
        </a>
      </div>
    </div>
  );
}

export default Contact;
