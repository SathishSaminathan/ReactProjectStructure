import React, { Component } from "react";
import { Link } from "react-router-dom";

class Projects extends Component {
  render() {
    return <div><Link to="/project/overview/1">Project 1</Link></div>;
  }
}

export default Projects;
