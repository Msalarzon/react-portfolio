// Project.js
import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projectsData.json';  // Adjust the import path
import '../styles/Project.css';

function Project({ title, deployedLink, githubLink, image }) {
  return (
    <div className="project-container">
      <h3>{title}</h3>
      <p>Deployed Version: <Link to={deployedLink}>{deployedLink}</Link></p>
      <p>GitHub Repository: <Link to={githubLink}>{githubLink}</Link></p>
      <img src={image} alt={title} />
    </div>
  );
}

// Placeholder data for testing
const placeholderProject = {
  title: 'Sample Project',
  deployedLink: 'https://example.com/deployed',
  githubLink: 'https://github.com/example/sample-project',
  image: 'https://placekitten.com/300/150',
};

// Example usage
const ExampleProject = () => <Project {...placeholderProject} />;

export default ExampleProject;
