import React from "react";
import Button from "@material-ui/core/Button";
import "./NumberPad.css";
import Ripples from "react-ripples";
function NumberPad() {
  // function activateRipple() {npm star

  return (
    <div className="numberContainer">
      <div className="tableRow">
        <Ripples>
          <button>1</button>
        </Ripples>
        <Ripples>
          <button>2</button>
        </Ripples>
        <Ripples>
          <button>3</button>
        </Ripples>
      </div>
      <div className="tableRow">
        <Ripples>
          <button>4</button>
        </Ripples>
        <Ripples>
          <button>5</button>
        </Ripples>
        <Ripples>
          <button>6</button>
        </Ripples>
      </div>
      <div className="tableRow">
        <Ripples>
          <button>7</button>
        </Ripples>
        <Ripples>
          <button>8</button>
        </Ripples>
        <Ripples>
          <button>9</button>
        </Ripples>
      </div>
      <div className="tableRow">
        <Ripples>
          <button>c</button>
        </Ripples>
        <Ripples>
          <button>0</button>
        </Ripples>
        <Ripples>
          <button>e</button>
        </Ripples>
      </div>
    </div>
  );
}

export default NumberPad;
