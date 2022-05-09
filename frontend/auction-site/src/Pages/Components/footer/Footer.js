import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <nav className="footer-main">
        <ul>
          <h3>EXPLORE</h3>
          <li>About</li>
          <li>Join</li>
          <li>Advertise</li>
        </ul>
        <ul>
          <h3>INFO</h3>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Posting</li>
          <li>Support</li>
        </ul>
        <ul>
          <h3>SUPPORT</h3>
          <li>Contact</li>
          <li>ESP</li>
          <li>Accessibility</li>
        </ul>
      </nav>
      <ul className="footer-social-media">
        <i className="fab fa-facebook fa-2x"></i>
        <i className="fab fa-google-plus-square fa-2x"></i>
        <i className="fab fa-twitter fa-2x"></i>
        <i className="fab fa-instagram-square fa-2x"></i>
      </ul>
      <small>Copyright &copy; 2022, All Right Reserved</small>
    </div>
  );
};
