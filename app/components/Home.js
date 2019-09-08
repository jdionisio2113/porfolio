import React from "react";
import App from "./App";
import Nav from './Nav'
// import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="home-content">
        <div className="text">
          <h1 className="intro-line">Justin Dionisio</h1>
          <div className="line" />
          <h2 className="front-end">Front End Developer</h2>
          <div className="reference">
            <i className="fa fa-github fa-2x"></i>
            <i className="fa fa-linkedin fa-2x"></i>
          </div>
          <Nav />
        </div>
      </div>
    );
  }
}

export default Home;
