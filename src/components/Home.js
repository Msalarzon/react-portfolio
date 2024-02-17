// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="container mt-5">
      <h2 className="display-4">Welcome to My Portfolio!</h2>
      <p className="lead">
        Hello there! I'm a passionate developer with a focus on creating meaningful and innovative
        projects. Explore my work and feel free to get in touch.
      </p>
      <img
        className="img-fluid rounded mb-4"
        src="https://placekitten.com/400/200"
        alt="A placeholder"
      />
      <div className="text-center">
        <Link to="/projects" className="btn btn-primary btn-lg mr-3">
          Explore My Projects
        </Link>
        <Link to="/contact" className="btn btn-secondary btn-lg">
          Contact Me
        </Link>
      </div>
    </div>
  );
}

export default Home;
