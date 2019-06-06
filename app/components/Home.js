import React from "react";
import App from "./App";

class Home extends React.Component {
  render() {
    return (
      <div className="home-content">
        <div className="text">
          <h1 className="intro-line">
            Hello, I'm <span className="highlight">Justin Dionisio</span>
          </h1>
          <h1 className="front-end">I'm a Front End Developer</h1>
        </div>
      </div>
    );
  }
}

export default Home;
