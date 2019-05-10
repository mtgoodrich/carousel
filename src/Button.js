import React from "react";

const Button = props => {
  return (
    <button className={`btn btn-${props.type} btn-${props.size}`}>
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  type: "secondary",
  size: "sm"
};

export default Button;
