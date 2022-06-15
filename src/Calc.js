import React from "react";
import "./Style.css";

export default function Calc() {
  return (
    <div>
      <div className="calc">
        <textarea
          className="textArea"
        ></textarea>

        <div className="btn-bg grid-container">
          <button className="btn  spanspan">AC</button>
          <button className="btn">DEL</button>
          <button className="btn">/</button>
          <button className="btn">1</button>
          <button className="btn">2</button>
          <button className="btn">3</button>
          <button className="btn">+</button>
          <button className="btn">4</button>
          <button className="btn">5</button>
          <button className="btn">6</button>
          <button className="btn">-</button>
          <button className="btn">7</button>
          <button className="btn">8</button>
          <button className="btn">9</button>
          <button className="btn">*</button>
          <button className="btn">0</button>
          <button className="btn">.</button>
          <button className="btn spanspan2">=</button>
          {/* <button className="btn spanspan">Clear All</button> */}
        </div>
      </div>
    </div>
  );
}
