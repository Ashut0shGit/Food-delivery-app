import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="m-4 p-4">
        <h1 className="text-2xl font-bold "> About Us </h1>
        <UserClass name={" "} location={""} />
      </div>
    );
  }
}

export default About;
