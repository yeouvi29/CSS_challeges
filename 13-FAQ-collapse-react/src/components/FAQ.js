import { useState } from "react";
// import Icons from "./Icons";

const Faq = (props) => {
  const [hidden, setHidden] = useState(false);

  const clickHandler = () => {
    setHidden((prev) => !prev);
  };

  return (
    <div className={`text-box ${hidden ? "active" : ""}`}>
      <div className="question-box">
        <h3 className="question">{props.question}</h3>
        <div className="icon" onClick={clickHandler} id={props.id}>
          <i className={`fas fa-chevron-down ${hidden ? "hidden" : ""}`}></i>
          <i className={`fas fa-times ${!hidden ? "hidden" : ""}`}></i>
        </div>
      </div>
      <p className={`answer ${!hidden ? "hidden" : ""}`}>{props.answer}</p>
    </div>
  );
};

export default Faq;
