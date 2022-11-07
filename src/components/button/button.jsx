import React from "react";
import "./button.css";


const data = {
  white: {
    content: "Get Started",
    style: "whitebutton",
  },
  black: {
    content: "Become a Pro",
    style: "blackbutton",
  },
  blue: {
    content: "Get Teams",
    style: "bluebutton",
  },
};

const Button = ({ type = "white", onclick }) => {
  const buttonStyle = data[type];
  console.log(type);

  return (
    <button onClick={onclick} className={buttonStyle.style}>
      {buttonStyle.content}
    </button>
  );
};

export default Button;
