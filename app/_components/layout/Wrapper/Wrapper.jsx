import React from "react";
import "./Wrapper.scss";

function Wrapper(props) {
  return (
    <div className="Wrapper">
      {props.children}
    </div>
  );
}

export default Wrapper;
