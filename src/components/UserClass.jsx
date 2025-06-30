import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "User",
        location: "Unknown",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Ashut0shGit");
    const JSON = await data.json();
    console.log(JSON);

    this.setState({
      userInfo: JSON,
    });
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate called");
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount called");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
        <img
          src={avatar_url}
          className="profile-img w-[300px] h-[300px]  rounded-full object-cover shadow-2xl transition transform hover:scale-110 duration-500"
          alt={name}
        />
        <div className="m-4 p-6 bg-gray-200 rounded-xl shadow-2xl transition transform hover:scale-105 hover:rotate-1 duration-500">
          <h3 className="text-xl font-semibold text-gray-800 animate-fade-in delay-100">
            {" "}
            Name : <span className="text-indigo-600"></span> {name}
          </h3>
          <h3 className="text-xl font-semibold text-gray-800 animate-fade-in delay-200">
            {" "}
            Location : {location}
          </h3>
          <h3 className="text-xl font-semibold text-gray-800 animate-fade-in delay-300">
            {" "}
            Email : ashutosh75jsr@gmail.com
          </h3>
        </div>
      </div>
    );
  }
}

export default UserClass;

/***
 *
 *Constructor is called
 *Render Phase is called with dummy data 
  *ComponentDidMount is called which contains API call
  Now when State variable is updated the render phase is again called but this time with Api data.

  Now when the component is unmounted (the component is removed from the DOM (webpage is changed)) componentWillUnmount is called.

 */
