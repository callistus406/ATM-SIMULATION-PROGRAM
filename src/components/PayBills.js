import React from "react";
import { CreateButton } from "./CreateButton";
import "./components_css.css";

const objectCol1 = [
  {
    id: "1",
    customClass: "lightBtn",
    text: "LIGHT",
  },
  {
    id: "2",

    customClass: "taxBtn",
    text: "TAX",
  },
  {
    id: "3",

    customClass: "schoolBtn",
    text: "SCHOOL FEE",
  },
];
const objectCol2 = [
  {
    id: "4",
    customClass: "waterbillBtn",
    text: "WATER",
  },
  {
    id: "5",

    customClass: "maintainanceBtn",
    text: "ATM MAINTAINANCE",
  },
  {
    id: "6",

    customClass: "othersBtn",
    text: "OTHERS",
  },
];
function PayBills() {
  return (
    <div className="layoutContainer">
      <div className="btnLayout">
        {objectCol1.map((btn, index) => (
          <CreateButton text={btn.text} className={btn.customClass} />
        ))}
      </div>
      <div className="btnLayout">
        {objectCol2.map((btn, index) => (
          <CreateButton text={btn.text} />
        ))}
      </div>
    </div>
  );
}

export default PayBills;
