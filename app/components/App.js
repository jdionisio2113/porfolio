import React from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <About />
        <Projects />
      </div>
    );
  }
}

export default App;
