// import React from "react";
// import { FaYoutube } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import "./ProjectCard.css";
// function ProjectCards(props) {
//   return (
//     <div className="card">
//       <div className="image">
//         <img src={props.data.image} />
//       </div>
//       <div className="content">
//         <h3>{props.data.title}</h3>
//         <p className="projects-details">{props.data.description}</p>
//         <div className="projects-link">
//           <p>
//             <span>
//               {" "}
//               <FaInstagram className="project-link-icon" />
//             </span>
//           </p>
//           <p>
//             <span>
//               {" "}
//               <a href={props.data.Instagram}>Instagram</a>
//             </span>
//           </p>{" "}
//           <p>
//             <span>
//               <FaYoutube className="project-link-icon" />
//             </span>
//             <span>
//               <a href={props.data.Youtube}>Youtube</a>
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProjectCards;

import React from "react";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import "./ProjectCard.css";

function ProjectCards(props) {
  return (
    <div className="card">
      <div className="image">
        <img src={props.data.image} alt={props.data.title} />
      </div>
      <div className="content">
        <h3>{props.data.title}</h3>
        <p className="projects-details">{props.data.description}</p>
        <div className="projects-link">
          <p>
            <FaInstagram className="project-link-icon" />
            <a href={props.data.Instagram}>Instagram</a>
          </p>
          <p>
            <FaYoutube className="project-link-icon" />
            <a href={props.data.Youtube}>Youtube</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
