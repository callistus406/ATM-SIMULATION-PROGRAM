import { React, useState } from "react";
import "./components_css.css";
import { CreateButton } from "./CreateButton";
import CashTransaction from "./CashTransaction";
import { CloudUploadTwoTone } from "@material-ui/icons";
import CustomNavigation from "./CustomNavigation";

const objectCol1 = [
  {
    id: "1",
    customClass: "currentBtn",
    text: "CURRENT ACCOUNT",
  },
  {
    id: "2",

    customClass: "savingsBtn",
    text: "SAVINGS",
  },
  {
    id: "3",

    customClass: "othersBtn",
    text: "OTHERS",
  },
];
const pageHolder = "";
function AccountType() {
  const initialState = 0;
  let [state, setState] = useState(initialState);

  const handleActionBtn = (e) => {
    if (e.target.textContent === "SAVINGS") {
      setState((state = 1));
    }
  };
  function displayButton() {
    return (
      <div>
        <CustomNavigation /> <div style={{ marginBottom: "10vh" }}></div>
        <div className="btnLayoutSingle" onClick={handleActionBtn}>
          {objectCol1.map((btn, index) => (
            <CreateButton text={btn.text} key={btn.id} />
          ))}
        </div>
      </div>
    );
  }
  function myRender() {
    if (state === 0) {
      return displayButton();
    } else if (state === 1) {
      return (
        // setState(state=0)

        <CashTransaction />
      );
    }
  }

  return myRender();
}

export default AccountType;
