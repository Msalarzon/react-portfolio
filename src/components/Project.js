// Project.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Project.css';

function Project({ title, description, deployedLink, githubLink, image }) {
  return (
    <div className="project-container">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{description || "HELLO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}</p>
      <div className="button-container">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer"><button className="visit-site-button">Visit Site</button></a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer"><button className="view-code-button">View Code</button></a>
      </div>
    </div>
  );
}

export default Project;
