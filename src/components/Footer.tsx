import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

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
              <Link to="./login">Hospital List</Link>
            </li>
            <li>
              <Link to="./signup">Sign Up</Link>
            </li>
            <li>
              <Link to="./login">Log In</Link>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="contact-info">
          <h4>Contact Us</h4>
          <address>
            
            <img src="/assets/carbon_location-filled.svg" className="loc" alt="location pin icon"/>123 Street Court, Ikoyi, Lagos, Nigeria
            <br />
            <img src="/assets/Vector (3).svg" className="loc" alt="telephone icon"/>+234-806-133-4092
            <br />
            <img src="/assets/material-symbols_mail-outline.svg" className="loc" alt="email icon"/>carefinder@gmail.com
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
