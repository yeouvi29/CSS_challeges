import { useState, useEffect } from "react";
import KeyBox from "./KeyBox";
import "./App.css";
const keyNames = ["key", "keyCode", "code"];
const App = () => {
  const [keyProperty, setKeyProperty] = useState({
    keyData: [],
  });

  const keyDownHandler = (e) => {
    setKeyProperty({ keyData: [e.key, e.keyCode, e.code] });
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);

    return () => {
      window.addEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <div className="container">
      <div className="box-container">
        {keyProperty.keyData.map((data, i) => (
          <KeyBox key={data + i} keyValue={data} tagName={keyNames[i]} />
        ))}
        {/* <KeyBox keyValue={keyProperty.key} tagName={"key"} />
        <KeyBox keyValue={keyProperty.keyCode} tagName={"keyCode"} />
        <KeyBox keyValue={keyProperty.code} tagName={"code"} /> */}
      </div>
      <div className="press">Press any key to get the keyCode</div>
    </div>
  );
};

export default App;
