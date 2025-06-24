import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor called");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount called");
  }

  render() {
    console.log("Parent Render called");
    return (
      <div>
        <h1> About Us </h1>
        <UserClass name={"Ashutosh Narayan 1"} location={"Jamshedpur"} />
        <UserClass name={"Ashutosh Narayan 2"} location={"Jamshedpur"} />
        <UserClass name={"Ashutosh Narayan 3"} location={"Jamshedpur"} />
      </div>
    );
  }
}

export default About;
