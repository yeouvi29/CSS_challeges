import React from "react";
import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <button className={classes.button} onClick={props.clickHandler}>
      Get Another Joke
    </button>
  );
};

export default Button;
