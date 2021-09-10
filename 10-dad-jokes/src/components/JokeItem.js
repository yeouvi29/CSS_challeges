import React from "react";
import randomColor from "randomcolor";
import Card from "./../UI/Card";
import classes from "./JokeItem.module.css";
const JokeItem = (props) => {
  const color = randomColor();
  return (
    <Card
      className={classes["card-design"]}
      style={{
        border: `2px solid ${color}`,
      }}
    >
      <p>{props.joke}</p>
    </Card>
  );
};

export default JokeItem;
