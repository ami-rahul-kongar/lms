import React from "react";
import "./Footer.css";
import course1 from "../../../assets/Images/course-1.jpg";
import course2 from "../../../assets/Images/course-2.jpg";
import course3 from "../../../assets/Images/course-3.jpg";
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">FAQs & Help</a>
        </div>

        <div className="footer-section contact">
          <h4>Contact</h4>
          <div className="contact-info">
            <p>
              <FaMapMarkerAlt />
              123 Street, New York, USA
            </p>
            <div className="contact-icons">
              <p>
                <FaPhoneAlt />
                +012 345 67890
              </p>
              <p>
                <FaEnvelope />
                info@example.com
              </p>
            </div>
          </div>
          <div className="social-links">
            <a href="#" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="#" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="#" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="#" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="footer-section gallery">
          <h4>Gallery</h4>
          <div className="gallery-images">
            <img src={course1} alt="Course 1" />
            <img src={course2} alt="Course 2" />
            <img src={course3} alt="Course 3" />
          </div>
        </div>

        <div className="footer-section newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe to our newsletter for updates.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; <a href="#">ARS Technologies</a>, All Rights Reserved.
        </p>
        <p>
          Designed by <a href="https://vitereact.com">Vite+ReactJS</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
