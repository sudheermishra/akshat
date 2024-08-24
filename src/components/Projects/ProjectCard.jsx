import React from "react";
import "./ProjectCard.css";
function ProjectCards(props) {
  return (
    <div className="card">
      <div className="image">
        <img src={props.data.image} />
      </div>
      <div className="content">
        <h3>{props.data.title}</h3>
        <p className="projects-details">{props.data.description}</p>
        <div className="projects-link">
          <p>
            <span></span>
          </p>
          <p>
            <span></span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
