import React, { Component } from "react";
import Header from "./Header";
import StatusFeed from "./StatusFeed";
import { connect } from "react-redux";
import { addStatus } from "../actions/status";
import "../firebase/firebase";

class DashboardPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Dashboard</h1>
        <StatusFeed />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addStatus: status => dispatch(addStatus(status))
});

export default connect(
  undefined,
  mapDispatchToProps
)(DashboardPage);
