// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import localImage from '../../src/images/profile-pic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faNode, faReact, faGithub } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <div className="container mt-5">
      <div className="img-container d-flex align-items-center justify-content-start">
        <img
          className="img-fluid rounded profile-image"
          src={localImage}
          alt="Meriam's profile picture"
        />
        <div className="text-container ml-3">
          <h2 className="display-4">Meriam</h2>
          <p className="lead">
            Junior Web Developer
          </p>
          <div className="btn-container d-flex mt-2">
            <Link to="/projects" className="btn btn-primary btn-lg mr-2">
              Explore My Projects
            </Link>
            <Link to="/contact" className="btn btn-custom-color btn-lg">
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section mt-4">
        <h4>Skills</h4>
        <ul className="skills-list">
          <li><FontAwesomeIcon icon={faHtml5} /> HTML</li>
          <li><FontAwesomeIcon icon={faCss3} /> CSS</li>
          <li><FontAwesomeIcon icon={faJs} /> JavaScript</li>
          <li><FontAwesomeIcon icon={faNode} /> Node.js</li>
          <li><FontAwesomeIcon icon={faReact} /> React</li>
          <li><FontAwesomeIcon icon={faGithub} /> GitHub</li>
        </ul>
      </div>

      {/* Footer Section */}
      <footer className="mt-5 text-center">
        <p>&copy; Meriam {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default Home;
