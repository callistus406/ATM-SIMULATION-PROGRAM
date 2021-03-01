import { React, useState } from "react";
import { CreateButton } from "./CreateButton";
import "./components_css.css";
import CustomNavigation from "./CustomNavigation";
import LoadingScreen from "./Interrupts/LoadingScreen";
import SelectAmount from "./SelectAmount";
const objectCol1 = [
  {
    id: "1",
    customClass: "_1000Btn",
    text: "1000",
  },
  {
    id: "2",

    customClass: "_5000Btn",
    text: "5000",
  },
  {
    id: "3",

    customClass: "_15000Btn",
    text: "15000",
  },
];
const objectCol2 = [
  {
    id: "4",
    customClass: "_2000Btn",
    text: "2000",
  },
  {
    id: "5",

    customClass: "_10000Btn",
    text: "10000",
  },
  {
    id: "6",

    customClass: "otherBtn",
    text: "OTHERS",
  },
];

function Amounts() {
  const initialState = 0;
  let [state, setState] = useState(initialState);

  const handleActionBtn = (e) => {
    if (e.target.textContent === "1000") {
      setState((state = 1));
    } else if (e.target.textContent === "5000") {
      setState((state = 2));
    } else if (e.target.textContent === "10000") {
      setState((state = 3));
    } else if (e.target.textContent === "15000") {
      setState((state = 4));
    } else if (e.target.textContent === "20000") {
      setState((state = 5));
    } else if (e.target.textContent === "OTHERS") {
      setState((state = 6));
    }
  };

  function displayAmounts() {
    return (
      <div>
        <CustomNavigation />
        <div className="layoutContainer">
          {" "}
          <div className="btnLayout" onClick={handleActionBtn}>
            {objectCol1.map((btn, index) => (
              <CreateButton text={btn.text} key={btn.id} />
            ))}
          </div>
          <div className="btnLayout" onClick={handleActionBtn}>
            {objectCol2.map((btn, index) => (
              <CreateButton text={btn.text} key={btn.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  function myRender() {
    if (state === 0) {
      return displayAmounts();
    } else if (state === 1) {
      return <LoadingScreen />;
    } else if (state === 2) {
      return <LoadingScreen />;
    } else if (state === 3) {
      return <LoadingScreen />;
    } else if (state === 6) {
      return <SelectAmount />;
    } else if (state === 4) {
      return <LoadingScreen />;
    } else if (state === 5) {
      return <LoadingScreen />;
    }
  }
  return myRender();
}

export default Amounts;
