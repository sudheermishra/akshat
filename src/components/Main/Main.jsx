// import React, { useState, useEffect } from "react";
import "./Main.css";
import akshatimg from "../../assets/two.jpeg";
import { Typewriter } from "react-simple-typewriter";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import ScrollButton from "../UI/ScrollButton";
import SliderCard from "../Projects/SliderCard";

function Main() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  // const [formIsValid, setFormIsValid] = useState(false);

  // useEffect(() => {
  //   setFormIsValid(
  //     enteredEmail.includes("@") && enteredPassword.trim().length > 6
  //   );
  // }, [enteredEmail, enteredPassword]);

  // const emailChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // };

  // const passwordChangeHandler = (event) => {
  //   setEnteredPassword(event.target.value);
  // };

  // const validateEmailHandler = () => {
  //   setEmailIsValid(enteredEmail.includes("@"));
  // };

  // const validatePasswordHandler = () => {
  //   setPasswordIsValid(enteredPassword.trim().length > 6);
  // };
  return (
    <main id="main" className="container">
      <div className="main">
        <div className="profile-details">
          <h1 className="main-title">
            Hi👋, <br />
            My name is <br />
            <span className="name"> Akshat Borwal </span>
            <br />
            I'm a{" "}
            <span className="changing-text">
              {" "}
              <Typewriter
                words={["Artist"]}
                loop={0}
                cursor
                cursorStyle=""
                typeSpeed={100}
                deleteSpeed={70}
                delaySpeed={2000}
              />
            </span>
          </h1>
        </div>
        <div className="profile-photo">
          <img src={akshatimg} alt="Profile Pic" />
        </div>
      </div>
      <About />
      <Projects />
      {/* <SliderCard /> */}
      <Contact />
    </main>
  );
}

export default Main;
