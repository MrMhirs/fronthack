import React, { useState } from 'react';
import "./block.css";
import Button from "../button/button";
import image1 from "../../img/image1.png";
import image2 from "../../img/image2.png";
import image3 from "../../img/image3.png";
import image4 from "../../img/image4.png";
import image5 from "../../img/image5.png";
import Vector from "../../img/Vector.png";


const dataBlock = {
  list: [
    "Full courses library",
    "A new daily meditation",
    "Access to the meditation guru",
    "Sleep podcasts and exercices",
    "Mindfulness exercices",
    "Guided meditations",
    "Cooking recipes",
  ],

  Starter: {
    img: image4,
    price: "Free",
    checks: 3,
    typeButton: "white",
  },

  Pro: {
    img: image1,
    price: "49",
    checks: 5,
    typeButton: "black",
  },

  Teams: {
    img: image3,
    price: "99",
    checks: 7,
    typeButton: "blue",
  },
};

const Block = ({ type = "Pro", style = "blue", onclick }) => {
  const blockStyle = dataBlock[type];
  console.log(blockStyle);

  return (
    <div className={style}>
      <img src={blockStyle.img} />

      {/* <div className={`img${type}`}>{blockStyle.img}</div> */}

      <div className="blockAlign">
        <div className={`textSecundary${style}`}>{type}</div>
        <div className={`textPrimary${style}`}>{blockStyle.price}</div>
        <div className={`textGrey${style}`}>per month</div>
      </div>
      <div className="list">
        {dataBlock.list.map((text, index) => {
          if (style === "blue") {
            console.log(index);
            if (blockStyle.checks <= index) {
              return <div className={"noValidTextBlue"}>- {text}</div>;
            }
            return <div className="whiteTextInBlue">- {text}</div>;
          }
          if (blockStyle.checks > index) {
            return <div className={"validTextBlue"}>- {text}</div>;
          }
          return <div className={"noValidTextWhite"}>- {text}</div>;
        })}
      </div>
      <Button onclick= {onclick} type={blockStyle.typeButton} />
    </div>
  );
};

export default Block;
