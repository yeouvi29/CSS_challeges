import React, { useState, useEffect } from "react";

import GenerateJoke from "./components/GenerateJoke";
import JokeList from "./components/JokeList";
import classes from "./App.module.css";

const App = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [count, setCount] = useState(0);
  const [jokes, setJokes] = useState([]);

  const clickHandler = () => {
    setIsClicked(true);
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    (async () => {
      const response = await fetch("https://icanhazdadjoke.com", {
        headers: {
          Accept: "application/json",
        },
      });
      const data = await response.json();
      setJokes((prev) => [...prev, data.joke]);
    })();
  }, [isClicked, count]);

  return (
    <div className={classes.app}>
      <GenerateJoke jokes={jokes} onClick={clickHandler} />
      <JokeList jokes={jokes} />
    </div>
  );
};

export default App;
