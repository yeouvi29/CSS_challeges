import React, { Fragment } from "react";
import Faq from "./components/FAQ";
import DUMMY from "./dummy";
import "./App.css";

function App() {
  const faq = DUMMY.map((qna, i) => (
    <Faq id={i} key={i} question={qna.q} answer={qna.a} />
  ));

  return (
    <Fragment>
      <h1>Frequently Asked Questions</h1>
      <div className="box">{faq}</div>
    </Fragment>
  );
}

export default App;
