import React, { useState } from "react";
import { CreateButton } from "./CreateButton";
import "./components_css.css";
import Transfer from "./Transfer";
import Amounts from "./Amounts";
import PayBills from "./PayBills";
import Error404 from "./Error404";
import AccountType from "./AccountType";
import { Navigation } from "@material-ui/icons";
import CustomNavigation from "./CustomNavigation";
import Transaction from "./Transaction";

const objectCol1 = [
  {
    id: "1",
    customClass: "depositeBtn",
    text: "DEPOSIT",
  },
  {
    id: "2",

    customClass: "withdrawalBtn",
    text: "WITHDRAW",
  },
  {
    id: "3",

    customClass: "transferBtn",
    text: "TRANSFER",
  },
];
const objectCol2 = [
  {
    id: "4",
    customClass: "billsBtn",
    text: "PAY BILLS",
  },
  {
    id: "5",

    customClass: "othersBtn",
    text: "OTHERS",
  },
  {
    id: "6",

    customClass: "cancelBtn",
    text: "CANCEL",
  },
];

function CashTransaction() {
  const initialState = 0;
  const initialNavState = 0;

  let [state, setState] = useState(initialState);
  let [navState, setNavState] = useState(initialNavState);

  const handleActionBtn = (e) => {
    if (e.target.textContent === "DEPOSIT") {
      setState((state = 1));
    } else if (e.target.textContent === "WITHDRAW") {
      setState((state = 2));
    } else if (e.target.textContent === "TRANSFER") {
      setState((state = 3));
    } else if (e.target.textContent === "PAY BILLS") {
      setState((state = 4));
    } else if (e.target.textContent === "OTHERS") {
      setState((state = 5));
    } else if (e.target.textContent === "CANCEL") {
      setState((state = 6));
    }
  };
  function displayDeposit() {
    const actionBtnHandler = () => {};
    return (
      <div style={{ height: "100vh" }}>
        <CustomNavigation action4={actionBtnHandler} />
        <div className="layoutContainer">
          <div className="btnLayout" onClick={handleActionBtn}>
            {objectCol1.map((btn, index) => (
              <CreateButton text={btn.text} key={btn.id} />
            ))}
          </div>
          <div className="btnLayout" onClick={handleActionBtn}>
            {objectCol2.map((btn, index) => (
              <CreateButton
                text={btn.text}
                key={btn.id}
                className={btn.customClass}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  function myRender() {
    if (state === 0) {
      return displayDeposit();
    } else if (state === 1) {
      return <Amounts />;
    } else if (state === 2) {
      return <Amounts />;
    } else if (state === 3) {
      return <Transfer />;
    } else if (state === 4) {
      return <PayBills />;
      // return <Transaction />;
    } else if (state === 5) {
      return <Error404 />;
    } else if (state === 6) {
      return <AccountType />;
    } else if (navState === 1) {
      return <Transaction />;
    }
  }
  return myRender();
}

export default CashTransaction;
