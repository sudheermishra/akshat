import React from "react";
import "./Footer.css";
import { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  const [clicked, setClicked] = useState(false);

  const handleNavigationClick = () => {
    setClicked(!clicked);
  };
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
          <span className="info-2"> akshatBorwal@gmail.com</span>
          <span>
            <a
              href="https://www.instagram.com/sonu_arts_10?igsh=Yms4dm01eHU5b3B6"
              target="_blank"
              onClick={handleNavigationClick}>
              <FaInstagram />
            </a>
          </span>
          <span>
            {" "}
            <a
              href="https://www.youtube.com/@artsonu10/featured"
              target="_blank"
              onClick={handleNavigationClick}>
              <FaYoutube />
            </a>
          </span>
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
