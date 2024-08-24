import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import DarkMode from "../UI/DarkMode";
import BackDrop from "../UI/BackDrop";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleNavigationClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="nav">
      <div className="nav-content container">
        <h2 className="gradient-text">Akshat</h2>
        <DarkMode />
        <div className="group">
          <ul
            id="nav-links"
            className={`${clicked ? "#nav-links active" : "#nav-links"}`}>
            <li>
              <NavLink to="/" onClick={handleNavigationClick}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={handleNavigationClick}>
                ABOUT
              </NavLink>
            </li>

            <li>
              <NavLink to="/projects" onClick={handleNavigationClick}>
                PHOTOS
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={handleNavigationClick}>
                CONTACT
              </NavLink>
            </li>

            <li>
              <a
                href="https://www.instagram.com/sonu_arts_10?igsh=Yms4dm01eHU5b3B6"
                target="_blank"
                onClick={handleNavigationClick}>
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@artsonu10/featured"
                target="_blank"
                onClick={handleNavigationClick}>
                <FaYoutube />
              </a>
            </li>
          </ul>
          <div className="mobile">
            {/* <p className="responsive-contact last-para">
              <a href="https://drive.google.com/uc?export=download&id=1Z9diylRsrH5C_D_qXNmZ6TUXai70_3bt">
                CV
              </a>
            </p> */}
            <p className="responsive-contact last-para">
              <NavLink to="contact">Contact</NavLink>
            </p>
            <p className="last-para" onClick={handleClick}>
              {clicked ? <RxCross2 id="close" /> : <FaBars id="open" />}
            </p>
          </div>
        </div>
      </div>
      {clicked && <BackDrop handleClick={handleClick} />}
    </nav>
  );
}

export default Navbar;
