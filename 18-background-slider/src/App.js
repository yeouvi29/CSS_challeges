import { useState } from "react";
import Slide from "./Slide";
import img_1 from "./assets/aaron-burden-GVnUVP8cs1o-unsplash.jpg";
import img_2 from "./assets/darryl-brian-bDn1Wi1ixLw-unsplash.jpg";
import img_3 from "./assets/david-marcu-78A265wPiO4-unsplash.jpg";
import img_4 from "./assets/fabian-quintero-UWQP2mh5YJI-unsplash.jpg";
import img_5 from "./assets/henry-be-IicyiaPYGGI-unsplash.jpg";
import img_6 from "./assets/kevin-lanceplaine-sO-JmQj95ec-unsplash.jpg";
import img_7 from "./assets/lukasz-szmigiel-jFCViYFYcus-unsplash.jpg";
import "./App.css";
const imgUrl = [img_1, img_2, img_3, img_4, img_5, img_6, img_7];
function App() {
  const [imgIdx, setImgIdx] = useState(0);

  const prevClickHandler = () => {
    if (imgIdx > 0) setImgIdx((prev) => prev - 1);
    else if (imgIdx === 0) setImgIdx(imgUrl.length - 1);
  };
  const nextClickHandler = () => {
    if (imgIdx < imgUrl.length - 1) setImgIdx((prev) => prev + 1);
    else if (imgIdx === imgUrl.length - 1) setImgIdx(0);
  };

  let slides = imgUrl.map((img, i) => {
    return <Slide key={i} imgUrl={img} active={i === imgIdx ? true : false} />;
  });

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${imgUrl[imgIdx]})`,
      }}
    >
      <div className="container--before">
        <button className="buttons">
          <i
            className={"fas fa-chevron-left arrow arrows"}
            onClick={prevClickHandler}
          ></i>
        </button>
        <div className="slider--container">{slides}</div>
        <button className="buttons">
          <i
            className={"fas fa-chevron-right arrow arrows"}
            onClick={nextClickHandler}
          ></i>
        </button>
      </div>
    </div>
  );
}

export default App;
