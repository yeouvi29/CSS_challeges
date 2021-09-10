const Result = (props) => {
  const classes = `result-text ${props.class}`;
  return <p className={classes}>{props.text}</p>;
};
export default Result;
