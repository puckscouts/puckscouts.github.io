import React from 'react';
import './ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        If you have any questions, comments, or inquiries, please feel free to reach out to us at:
      </p>
      <p>
        <a href="mailto:dev@puckscouts.com">dev@puckscouts.com</a>
      </p>
    </div>
  );
}

export default ContactPage;
