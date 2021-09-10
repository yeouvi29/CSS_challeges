import React from "react";
import Button from "./../UI/Button";
import Card from "./../UI/Card";
import classes from "./GenerateJoke.module.css";

const GenerateJoke = (props) => {
  const { jokes } = props;
  return (
    <Card className={classes.grid}>
      <h5>Don't Laugh Challenge</h5>
      <div className={classes.joke}>
        <p>{jokes[jokes.length - 1]}</p>
      </div>
      <Button clickHandler={props.onClick} />
    </Card>
  );
};

export default GenerateJoke;
