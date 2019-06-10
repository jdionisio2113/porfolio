import React from "react";
import img from "../img/js-logo.png";
import react from "../img/react-logo.png";
import redux from "../img/redux.png";
import webpack from "../img/webpack.png";

class About extends React.Component {
  render() {
    return (
      <div className="about_section">
        <h2>About</h2>
        <div className="about-line" />
        <p>
          Hi I'm Justin! I'm a Front End Developer with a current skillset
          specializing in HTML, CSS, and Javascript.
        </p>
        <div className="skill_section">
          <h2 className="skills">Skills</h2>
          <div className="about-line" />
          <ul>
            <li>
              <img className="js_logo" src={img} />
            </li>
            <li>
              <img className="js_logo" src={react} />
            </li>
          </ul>
          <ul>
            <li>
              <img className="js_logo" src={redux} />
            </li>
            <li>
              <img className="js_logo" src={webpack} />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default About;
