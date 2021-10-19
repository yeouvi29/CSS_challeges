const Slide = ({ imgUrl, active }) => {
  return (
    <div
      className={`slide ${active ? "active" : ""}`}
      style={{ backgroundImage: `url(${imgUrl})` }}
    ></div>
  );
};

export default Slide;
