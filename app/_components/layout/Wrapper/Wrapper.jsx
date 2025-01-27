import React from "react";
import "./Wrapper.scss";

function Wrapper(props) {
  return (
    <div className="Wrapper">
      <div className="children">{props.children}</div>
    </div>
  );
}

export default Wrapper;
