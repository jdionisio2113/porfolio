import React from "react";
import App from "./App";
// import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="home-content">
        <div className="text">
          <h1 className="intro-line">Justin Dionisio</h1>
          <div className="line" />
          <h2 className="front-end">Front End Developer</h2>
        </div>
        {/* <Link className="work" to="./projects"> */}
        <div className="work">
          <p>View my work</p>
        </div>
        {/* </Link> */}
      </div>
    );
  }
}

export default Home;
