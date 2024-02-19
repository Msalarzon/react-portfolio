// Project.js

import React from 'react';
import '../styles/Project.css';

// Import images from the 'images' folder
import hotelHorizonScreenshot from '../images/hotel-horizon.png';
import cityWeatherHubScreenshot from '../images/city-weather-hub.png';
import buildAReadmeScreenshot from '../images/build-a-readme.png';
import codeQuizScreenshot from '../images/code-quiz-challenge.png';
import easyPlanTrackerScreenshot from '../images/easy-plan-tracker.png';
import bootstrapPortfolioScreenshot from '../images/bootstrap-portfolio.png'

function Project({ title, description, deployedLink, githubLink }) {
  // Map the 'title' prop to the corresponding imported image
  const projectImage = {
    'Hotel Horizon': hotelHorizonScreenshot,
    'City Weather Hub': cityWeatherHubScreenshot,
    'Build a README': buildAReadmeScreenshot,
    'Code Quiz': codeQuizScreenshot,
    'Easy Plan Tracker': easyPlanTrackerScreenshot,
    'Bootstrap Portfolio': bootstrapPortfolioScreenshot,
  }[title];

  return (
    <div className="project-container">
      <h3>{title}</h3>
      <img src={projectImage} alt={title} />
      <p>{description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}</p>
      <div className="button-container">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer"><button className="visit-site-button">Visit Site</button></a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer"><button className="view-code-button">View Code</button></a>
      </div>
    </div>
  );
}

export default Project;
