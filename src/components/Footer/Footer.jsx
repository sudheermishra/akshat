import React from "react";
import "./Footer.css";
import { animateScroll as scroll } from "react-scroll";

function Footer() {
  return (
    <footer className="container">
      <div
        className="footer-1"
        onClick={() => {
          scroll.scrollToTop();
        }}>
        <span className="gradient-text">Akshat</span>
        <div>
          <span className="info-1"> +91 7000360692</span>
          <span className="info-2"> AkshatBorwal3344.com</span>
        </div>
      </div>
      <div className="footer-2">
        <h4>
          Designed and built by <span>Sudheer Mishra</span>
        </h4>
      </div>
    </footer>
  );
}

export default Footer;
