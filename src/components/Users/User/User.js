import React, { Component } from "react";
import axios from "axios";
import "./User.scss";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styleTitle: {
        color: "red",
        backgroundColor: "pink",
        textAlign: "center",
      },
    };
  }
  // styleTitle = {
  //     color: 'red',
  //     backgroundColor: 'pink',
  //     textAlign: 'center'
  // }
  titleClick = () => {
    this.setState({
      styleTitle: {
        color: "blue",
        backgroundColor: "pink",
        textAlign: "center",
      },
    });
    // this.styleTitle = {
    //     color: 'blue',
    //     backgroundColor: 'pink',
    //     textAlign: 'center'
    // }
    // this.setState({clicked : true})
  };

  showPostHandler = (id) => {
    console.log(id);
    axios
      .patch()
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => {
        console.log(response.data);
      });
  };
  render() {
    return (
      <div className="user">
        <h2 style={this.state.styleTitle} onClick={this.titleClick}>
          {this.props.name}
        </h2>
        <h4>{this.props.username}</h4>
        <p>{this.props.email}</p>
        <p>{this.props.phone}</p>
        <button
          onClick={() => {
            this.showPostHandler(this.props.id);
          }}
        >
          Show Post
        </button>
      </div>
    );
  }
}
