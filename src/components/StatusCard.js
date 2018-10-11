import React from "react";

const StatusCard = props => (
  <div>
    <div>
      <p>{"Date would be here"}</p>
    </div>
    <div>
      Status:
      {props.status.text}
    </div>
  </div>
);

export default StatusCard;
