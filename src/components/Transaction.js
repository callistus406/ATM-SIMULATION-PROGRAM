import React, { useState } from "react";
import { CreateButton } from "./CreateButton";
import { Button } from "@material-ui/core/Button";
import { BlurOnTwoTone } from "@material-ui/icons";
import "./components_css.css";
import CashTransaction from "./CashTransaction";
import AccountType from "./AccountType";
import CustomNavigation from "./CustomNavigation";
import LandingScreen from "./LandingScreen";
import Balance from "./Balance";
import ChangePassword from "./ChangePassword";
import Error404 from "./Error404";
const objectCol1 = [
  {
    id: "1",
    customClass: "cashTransactionBtn",
    text: "CASH TRANSACTION",
  },
  {
    id: "2",

    customClass: "checkBalBtn",
    text: "CHECK BALANCE",
  },
  {
    id: "3",

    customClass: "changePinBtn",
    text: "CHANGE PIN",
  },
];
const objectCol2 = [
  {
    id: "4",
    customClass: "enquiryBtn",
    text: "ENQUIRY",
  },
  {
    id: "5",

    customClass: "helpBtn",
    text: "HELP",
  },
  {
    id: "6",

    customClass: "exitBtn",
    text: "EXIT",
  },
];
function Transaction() {
  const initialState = 0;
  let [state, setState] = useState(initialState);

  const handleActionBtn = (e) => {
    if (e.target.textContent === "CASH TRANSACTION") {
      setState((state = 1));
    } else if (e.target.textContent === "CHECK BALANCE") {
      setState((state = 2));
    } else if (e.target.textContent === "CHANGE PIN") {
      setState((state = 3));
    } else if (e.target.textContent === "ENQUIRY") {
      setState((state = 4));
    } else if (e.target.textContent === "HELP") {
      setState((state = 5));
    } else if (e.target.textContent === "EXIT") {
      setState((state = 6));
    }
  };

  function displayTransaction() {
    return (
      <div>
        <CustomNavigation />{" "}
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
      return displayTransaction();
    } else if (state === 1) {
      return <AccountType />;
    } else if (state === 2) {
      return <Balance />;
    } else if (state === 3) {
      return <ChangePassword />;
    } else if (state === 6) {
      return <LandingScreen />;
    } else if (state === 4) {
      return <Error404 />;
    } else if (state === 5) {
      return <Error404 />;
    }
  }
  return myRender();
}

export default Transaction;
