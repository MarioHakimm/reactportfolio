import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div id="footerMain">
      <div className="footer-links">
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/mariohakim/"
        >
          <img
            id="linkedinlogo"
            src="/assets/images/linkedin-logo.png"
            alt="LinkedIn"
            className="footer-icon"
          />
        </a>
        <a className="footer-link" href="https://www.facebook.com/mario0021/">
          <img
            id="facebooklogo"
            src="/assets/images/facebook-logo.png"
            alt="Facebook"
            className="footer-icon"
          />
        </a>
      </div>
      <p id="copyright">&copy; 2023 Mario Hakim | Dubai UAE | +971 83 00 3949</p>
    </div>
  );
}

export default Footer;
