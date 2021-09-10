import { useState } from "react";

const Icons = (props) => {
  const [hidden, setHidden] = useState(true);

  const clickHandler = () => {
    setHidden((prevState) => !prevState);
  };

  return (
    <div className="icon" onClick={clickHandler} id={props.id}>
      <i className={`fas fa-chevron-down ${hidden ? "hidden" : ""}`}></i>
      <i className={`fas fa-times ${!hidden ? "hidden" : ""}`}></i>
    </div>
  );
};

export default Icons;
