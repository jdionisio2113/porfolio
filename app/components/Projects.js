import React from "react";

class Projects extends React.Component {
  render() {
    return (
      <div className="project-section">
        <h2 className="projects-title">Projects</h2>
        <div className="about-line" />
        <div>
          <h3>Weather App</h3>
          <iframe
            src="https://giphy.com/embed/1n4iFEJ6Wb9ghxKsCG"
            width="480"
            height="300"
            frameBorder="0"
            className="gif"
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}

export default Projects;
