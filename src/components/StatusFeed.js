import React, { Component } from "react";
import { connect } from "react-redux";
import StatusCard from "./StatusCard";

class StatusFeed extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>StatusFeed</h2>
        {this.props.statusList.map(status => (
          <StatusCard key={status.id} status={status} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  statusList: state.status
});

export default connect(mapStateToProps)(StatusFeed);
