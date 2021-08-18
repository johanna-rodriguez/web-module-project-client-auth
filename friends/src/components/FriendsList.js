import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
  state = {
    friends: [],
    newFriend: { id: "", name: "", age: "", email: "" },
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        this.setState({ friends: res.data });
      });
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      newFriend: {
        ...this.state.newFriend,
        id: Date.now(),
        [e.target.name]: e.target.value,
      },
    });
  };

  addFriend = (e) => {
    e.preventDefault();

    console.log(this.state.newFriend);
    axiosWithAuth()
      .post("/friends", this.state.newFriend)
      .then((res) => {
        console.log(res.data);

        this.setState({
          ...this.state,
          friends: res.data,
        });
      })
      .catch((err) => {
        console.log(`YO Error:`, err);
      });
  };

  render() {
    return (
      <div className="">
        <form onSubmit={this.addFriend}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
        <div>
          {this.state.friends.map((friend) => (
            <div>
              <h3>Name: {friend.name}</h3>
              <h4>Age: {friend.age}</h4>
              <h4>Email: {friend.email}</h4>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FriendsList;
