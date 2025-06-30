import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="m-4 p-4">
        <h1 className="text-3xl font-bold "> About Us </h1>
        <UserClass name={" "} location={""} />
      </div>
    );
  }
}

export default About;
