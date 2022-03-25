import { React, useState } from "react";
import "./components_css.css";
import { CreateButton } from "./CreateButton";
import CashTransaction from "./CashTransaction";
import { CloudUploadTwoTone } from "@material-ui/icons";
import CustomNavigation from "./CustomNavigation";
import Transaction from "./Transaction";

const objectCol1 = [
  {
    id: "1",
    customClass: "currentBtn",
    text: "CURRENT ACCOUNT",
  },
  {
    id: "1",

    customClass: "othersBtn",
    text: "OTHERS",
  },
];
const objectCol2 = [
  {
    id: "2",

    customClass: "savingsBtn",
    text: "SAVINGS",
  },
  {
    id: "2",

    customClass: "cancelBtn",
    text: "CANCEL",
  },
];
const pageHolder = "";
function AccountType() {
  const initialState = 0;
  let [state, setState] = useState(initialState);

  const handleActionBtn = (e) => {
    if (e.target.textContent === "SAVINGS") {
      setState((state = 1));
    } else if (e.target.textContent === "CANCEL") {
      setState((state = 2));
    }
  };
  function displayButton() {
    return (
      <>
        <CustomNavigation />
        <div
          className="layoutContainer"
          // style={{ width: "100%", border: "2px solid blue" }}
        >
          {/* <div style={{ marginBottom: "10vh" }}></div> */}
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
      </>
    );
  }
  function myRender() {
    if (state === 0) {
      return displayButton();
    } else if (state === 1) {
      return <CashTransaction />;
    } else if (state === 2) {
      return <Transaction />;
    }
  }

  return myRender();
}

export default AccountType;
