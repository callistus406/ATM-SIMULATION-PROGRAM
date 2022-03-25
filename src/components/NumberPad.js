import React from "react";
import Button from "@material-ui/core/Button";
import "./NumberPad.css";
import Ripples from "react-ripples";
function NumberPad(props) {
  // function activateRipple() {npm star
  const handleActionBtn = () => {
    let button = document.getElementsByTagName("button");
  };
  return (
    <div className="numberContainer">
      <div className="tableRow">
        <Ripples>
          <button onClick={props.action}>1</button>
        </Ripples>
        <Ripples>
          <button onClick={props.action}>2</button>
        </Ripples>
        <Ripples>
          <button onClick={props.action}>3</button>
        </Ripples>
      </div>
      <div className="tableRow">
        <Ripples>
          <button onClick={props.action}>4</button>
        </Ripples>
        <Ripples>
          <button onClick={props.action}>5</button>
        </Ripples>
        <Ripples>
          <button onClick={props.action}>6</button>
        </Ripples>
      </div>
      <div className="tableRow">
        <Ripples>
          <button onClick={props.action}>7</button>
        </Ripples>
        <Ripples>
          <button onClick={props.action}>8</button>
        </Ripples>
        <Ripples>
          <button onClick={props.action}>9</button>
        </Ripples>
      </div>
      <div className="tableRow">
        <Ripples>
          <button onClick={props.action}>c</button>
        </Ripples>
        <Ripples>
          <button onClick={props.action}>0</button>
        </Ripples>
        <Ripples>
          <button onClick={props.action}>e</button>
        </Ripples>
      </div>
    </div>
  );
}

export default NumberPad;
