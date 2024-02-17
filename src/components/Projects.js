// Projects.js
import React from 'react';
import Project from './Project';
import projectsData from '../data/projectsData.json';
import '../styles/Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      {projectsData.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
}

export default Projects;
