import React from "react";
import "./styles.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src="/assets/fxemoji_hospital.svg" alt="Carefinder Logo" />
        <div className="carefinder-info">
          <h3>Carefinder</h3>
          <p>
            Discover nearby hospitals, contribute data, and share information
            effortlessly with the CareFinder App.
          </p>
        </div>
        <div className="useful-links">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <a href="#">Hospital List</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
            <li>
              <a href="#">Log In</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="contact-info">
          <h4>Contact Us</h4>
          <address>
            
            <img src="/assets/carbon_location-filled.svg" className="loc"/>123 Street Court, Ikoyi, Lagos, Nigeria
            <br />
            <img src="/assets/Vector (3).svg" className="loc"/>+234-806-133-4092
            <br />
            <img src="/assets/material-symbols_mail-outline.svg" className="loc"/>carefinder@gmail.com
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
