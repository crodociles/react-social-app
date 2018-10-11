import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/create">
          <h3>Create</h3>
        </Link>
      </div>
    );
  }
}

export default Header;
