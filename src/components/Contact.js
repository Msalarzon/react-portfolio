// Contact.js
import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
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

      <div className="additional-info">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula risus eu mauris
          lacinia, vel accumsan urna accumsan. Vestibulum tempus enim a eros ultrices, at cursus ex
          varius. Sed vitae accumsan felis. In hac habitasse platea dictumst.
        </p>
        <p>
          Nullam vel turpis sit amet metus fringilla dignissim in in neque. Duis vitae sapien at
          risus luctus luctus. Aliquam euismod tortor in pharetra posuere.
        </p>
      </div>
    </div>
  );
}

export default Contact;
