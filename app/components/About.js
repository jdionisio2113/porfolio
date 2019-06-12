import React from "react";
import img from "../img/js-logo.png";
import react from "../img/react-logo.png";
import redux from "../img/redux.png";
import css from "../img/css.svg";
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
              <p>Javascript</p>
            </li>
            <li>
              <img className="js_logo" src={react} />
              <p>React</p>
            </li>
            <li>
              <img className="js_logo" src={css} />
              <p>CSS3</p>
            </li>
          </ul>
          <ul>
            <li>
              <img className="js_logo" src={redux} />
              <p>Redux</p>
            </li>
            <li>
              <img className="js_logo" src={webpack} />
              <p>Webpack</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default About;
