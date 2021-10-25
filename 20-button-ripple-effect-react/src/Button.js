import { useEffect, useState } from "react";
import Span from "./Span";
const Button = () => {
  const [position, setPosition] = useState("");
  const [className, setClassName] = useState("");
  const clickHandler = (e) => {
    setClassName("");
    const x = e.clientX;
    const y = e.clientY;
    const btnTop = e.target.offsetTop;
    const btnLeft = e.target.offsetLeft;
    setPosition({ top: y - btnTop, left: x - btnLeft });
  };
  useEffect(() => {
    setClassName("scale");
  }, [position]);
  console.log("button is rendering");
  return (
    <button className="ripple" onClick={clickHandler}>
      Click Me
      {position && <Span position={position} className={className} />}
    </button>
  );
};

export default Button;
