import React from "react";
import { CreateButton } from "./CreateButton";
import "./components_css.css";
import CustomNavigation from "./CustomNavigation";
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

function Deposite() {
  return (
    <div>
      <CustomNavigation />
      <div className="layoutContainer">
        {" "}
        <div className="btnLayout">
          {objectCol1.map((btn, index) => (
            <CreateButton text={btn.text} key={btn.id} />
          ))}
        </div>
        <div className="btnLayout">
          {objectCol2.map((btn, index) => (
            <CreateButton text={btn.text} key={btn.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Deposite;
