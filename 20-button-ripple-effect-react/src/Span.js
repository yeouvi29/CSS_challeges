const Span = ({ position, className }) => {
  const { top, left } = position;
  const style = {
    top: `${top}px`,
    left: `${left}px`,
  };
  console.log("span is rendering");
  return <span className={`circle ${className}`} style={style}></span>;
};

export default Span;
