import React from "react";
import "./button.css";

const data = {
  white: {
    content: "Get Started",
    style: "white",
  },
  black: {
    content: "Become a Pro",
    style: "black",
  },
  blue: {
    content: "Get Teams",
    style: "blue",
  },
};

const Button = ({type = "white"}) => {
  const buttonStyle = data[type];
  console.log(type);

  return <div className={buttonStyle.style}>{buttonStyle.content}</div>;
};

export default Button;
