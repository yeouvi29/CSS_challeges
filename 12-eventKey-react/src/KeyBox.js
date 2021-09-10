import "./KeyBox.css";

const KeyBox = (props) => {
  console.log(props);
  return (
    <div className="box" style={{ display: props.key && "block" }}>
      <p>{props.tagName}</p>
      <div className="key-box" id="key">
        {props.keyValue}
      </div>
    </div>
  );
};

export default KeyBox;
