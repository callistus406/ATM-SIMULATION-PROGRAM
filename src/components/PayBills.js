import { React, useState } from "react";
import { CreateButton } from "./CreateButton";
import "./components_css.css";
import BankDetails from "./transferComponents/BankDetails";
import CashTransaction from "./CashTransaction";
import CustomNavigation from "./CustomNavigation";
import Betting from "./transferComponents/Betting";

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
    customClass: "bettingBtn",
    text: "BETTING",
  },
  {
    id: "5",

    customClass: "othersBtn",
    text: "OTHERS",
  },
  {
    id: "6",

    customClass: "cancelbtn",
    text: "CANCEL",
  },
];

function PayBills() {
  const initialState = 0;
  let [state, setState] = useState(initialState);

  const handleActionBtn = (e) => {
    // console.log("state");'
    // console.log(e.target.textContent);

    if (e.target.textContent === "LIGHT") {
      setState((state = 1));
    } else if (e.target.textContent === "TAX") {
      setState((state = 2));
    } else if (e.target.textContent === "SCHOOL FEE") {
      setState((state = 3));
    } else if (e.target.textContent === "BETTING") {
      setState((state = 4));
    } else if (e.target.textContent === " OTHERS") {
      setState((state = 5));
    } else if (e.target.textContent === "CANCEL") {
      setState((state = 6));
    } else if (e.target.textContent === "BETTING ") {
      setState((state = 7));
    } else if (e.target.textContent === "SUBSCRIPTION ") {
      setState((state = 8));
    }
  };

  function displayPayBills() {
    return (
      <>
        <CustomNavigation />
        <div className="layoutContainer">
          <div className="btnLayout" onClick={handleActionBtn}>
            {objectCol1.map((btn, index) => (
              <CreateButton
                text={btn.text}
                className={btn.customClass}
                key={btn.id}
              />
            ))}
          </div>
          <div className="btnLayout" onClick={handleActionBtn}>
            {objectCol2.map((btn, index) => (
              <CreateButton text={btn.text} key={btn.id} />
            ))}
          </div>
        </div>
      </>
    );
  }
  function myRender() {
    if (state === 0) {
      return displayPayBills();
    } else if (state === 1) {
      // return <BankDetails />;
    } else if (state === 2) {
      // return <BankDetails />;
    } else if (state === 3) {
      return <BankDetails />;
    } else if (state === 4) {
      return <Betting />;
    } else if (state === 5) {
      // return <BankDetails />;
    } else if (state === 6) {
      return <CashTransaction />;
    } else if (state === 7) {
      // return <Betting />;
    } else if (state === 6) {
      return <CashTransaction />;
    }
  }

  return myRender();
}

export default PayBills;
