import { Fragment, useRef, useEffect } from "react";
import { useInterval } from "rooks";

import useInput from "../hooks/use-input";
import Result from "./Result";

const Textarea = (props) => {
  useEffect(() => {
    inputTxt.current.focus();
  }, []);

  const inputTxt = useRef(null);
  const {
    value: enteredText,
    textArr,
    count,
    keyEnterPressed,
    blurHandler,
    randomPicker,
    finisher,
    valueChangeHandler: changeHandler,
  } = useInput();

  const { start, stop } = useInterval(() => {
    randomPicker();
  }, 100);

  if (!count && keyEnterPressed) start();

  if (count === 30) {
    stop();
    finisher();
  }

  return (
    <Fragment>
      <textarea
        className="text"
        ref={inputTxt}
        value={enteredText}
        onKeyUp={blurHandler}
        onChange={changeHandler}
        disabled={keyEnterPressed}
      ></textarea>
      <div className="result">
        {textArr.map((word, i) => (
          <Result key={i + word.text + i} text={word.text} class={word.class} />
        ))}
      </div>
    </Fragment>
  );
};

export default Textarea;
