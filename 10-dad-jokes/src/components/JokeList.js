import React from "react";
import JokeItem from "./JokeItem";

import classes from "./JokeList.module.css";

const JokeList = (props) => {
  const jokeItems = props.jokes.map((joke, i) => (
    <JokeItem key={i + joke} joke={joke} />
  ));
  return <div className={classes.scroll}>{jokeItems}</div>;
};

export default JokeList;
