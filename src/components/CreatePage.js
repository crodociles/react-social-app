import React, { Component } from "react";
import { connect } from "react-redux";
import uuid from "uuid";
import { addStatus } from "../actions/status";
import Header from "./Header";

class CreatePage extends Component {
  state = {
    status: {
      id: "",
      text: "",
      createdAt: ""
    }
  };
  onStatusChange = e => {
    this.setState({
      status: {
        id: uuid(),
        text: e.target.value,
        createdAt: "thursday maybe"
      }
    });
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.status);
    this.props.addStatus(this.state.status);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <Header />
        <h1>Create</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" onChange={this.onStatusChange} />
        </form>
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
)(CreatePage);
