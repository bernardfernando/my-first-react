import React from "react";
import "./Grid.css";

import Row from "..row/Row";

export default function Grid() {
  return (
    <div className="grid-div">
      <Row className={1} />
      <Row className={4} />
      <Row className={7} />
    </div>

    /*<div className="grid-div">
      <div className="grid-box"></div>
      <div className="grid-box"></div>
      <div className="grid-box"></div>
      <div className="grid-box"></div>
      <div className="grid-box"></div>
      <div className="grid-box"></div>
      <div className="grid-box"></div>
      <div className="grid-box"></div>
      <div className="grid-box"></div>
    </div> */
  );
}
