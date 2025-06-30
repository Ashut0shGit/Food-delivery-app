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
      <div className="user-card m-4 p-4 w-[300px] rounded-lg shadow-lg bg-gray-100">
        <img src={avatar_url} className="profile-img w-[300px]" alt={name} />
        <div className="m-4 p-4">
          <h3> Name : {name}</h3>
          <h3> Location : {location}</h3>
          <h3> Email : ashutosh75jsr@gmail.com</h3>
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
