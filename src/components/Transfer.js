import React from "react";
import { CreateButton } from "./CreateButton";
import "./components_css.css";

const objectCol1 = [
  {
    id: "1",
    customClass: "firstbankbtn",
    text: "FIRST BANK",
  },
  {
    id: "2",

    customClass: "oceanicbankBtn",
    text: "OCEANIC BANK",
  },
  {
    id: "3",

    customClass: "fcmbBtn",
    text: "FCMB",
  },
  {
    id: "3",

    customClass: "othersBtn",
    text: "OTHERS",
  },
];
const objectCol2 = [
  {
    id: "4",
    customClass: "skyebankBtn",
    text: "SKYE BANK",
  },
  {
    id: "5",

    customClass: "ubaBtn",
    text: "UBA",
  },
  {
    id: "6",

    customClass: "sterlingBtn",
    text: "STERLING BANK",
  },
  {
    id: "6",

    customClass: "exitbtn",
    text: "EXIT",
  },
];
function Transfer() {
  return (
    <div>
      {" "}
      <div className="layoutContainer">
        <div className="btnLayout">
          {objectCol1.map((btn, index) => (
            <CreateButton text={btn.text} />
          ))}
        </div>
        <div className="btnLayout">
          {objectCol2.map((btn, index) => (
            <CreateButton text={btn.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Transfer;
