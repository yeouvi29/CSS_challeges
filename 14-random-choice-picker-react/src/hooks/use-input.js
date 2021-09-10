import { useReducer } from "react";

const initialInputStatus = {
  value: "",
  textArr: [],
  keyEnterPressed: false,
  count: 0,
};

const inputStateReducer = (state, action) => {
  if (action.mode === "INPUT") {
    const text = action.value
      .split(",")
      .filter((text) => text.trim() !== "")
      .map((text) => ({ text: text, class: "" }));

    return {
      ...state,
      value: action.value,
      keyEnterPressed: false,
      textArr: text,
    };
  } else if (action.mode === "BLUR") {
    return {
      ...state,
      keyEnterPressed: true,
    };
  } else if (action.mode === "RANDOM") {
    const newArr = state.textArr.map((text) => ({
      text: text.text,
      class: "",
    }));
    const randomNum = Math.floor(Math.random() * newArr.length);
    newArr[randomNum].class = "navy";
    return {
      ...state,
      textArr: newArr,
      count: state.count + 1,
    };
  } else if (action.mode === "FINISH") {
    return {
      ...state,
      keyEnterPressed: false,
      count: 0,
    };
  }
  return initialInputStatus;
};

const useInput = () => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputStatus
  );

  const valueChangeHandler = (e) => {
    dispatch({ mode: "INPUT", value: e.target.value });
  };

  const blurHandler = (e) => {
    if (e.key === "Enter") {
      dispatch({ mode: "BLUR" });
    }
  };

  const randomPicker = () => {
    dispatch({ mode: "RANDOM" });
  };

  const finisher = () => {
    dispatch({ mode: "FINISH" });
  };

  return {
    value: inputState.value,
    textArr: inputState.textArr,
    keyEnterPressed: inputState.keyEnterPressed,
    count: inputState.count,
    valueChangeHandler,
    blurHandler,
    randomPicker,
    finisher,
  };
};
export default useInput;
