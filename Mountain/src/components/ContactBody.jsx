import React from "react";
import "./contact.css";

const ContactBody = () => {
  return (
    <div className="contact-container pb-[40px] scroll-element">
      <div className="form-section">
        <h1 className="mb-[20px]">Get in Touch With Us!</h1>
        <p>
          We’d love to hear from you! Whether you have questions about our mountain
          adventures, need assistance with bookings, or just want to share your
          experiences, we're here to help.
        </p>
        <form className="contact-form">
          <label>Name</label>
          <input type="text" placeholder="Your Name..." />

          <label>Email</label>
          <input type="email" placeholder="Email..." />

          <label>Message</label>
          <textarea placeholder="Your message..."></textarea>

          <button type="submit">Send Now</button>
        </form>
      </div>
      <div className="info-section">
      <div className="contact-details">
      <div className="contact-item">
        <i className="fas fa-phone"></i>
        <strong>Phone</strong>
        <p>+12345678900</p>
      </div>
      <div className="contact-item">
        <i className="fas fa-envelope"></i>
        <strong>Email</strong>
        <p>alpineascents@gmail.com</p>
      </div>
      <div className="contact-item">
        <i className="fas fa-map-marker-alt"></i>
        <strong>Location</strong>
        <p>ancien marché, france</p>
      </div>
    </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?..."
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactBody;
