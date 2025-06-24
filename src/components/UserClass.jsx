import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log(this.props.name + "child Constructor called");
  }

  componentDidMount() {
    console.log(this.props.name + "Child ComponentDidMount called");
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    console.log(this.props.name + "Child Render called");
    return (
      <div className="user-card">
        <h1> Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
        <h3> Name : {name}</h3>
        <h3> Location : {location}</h3>
        <h3> Email : ashutosh75jsr@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
