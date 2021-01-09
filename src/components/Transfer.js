import { React, useState } from "react";
import { CreateButton } from "./CreateButton";
import "./components_css.css";
import TransferAccess from "./TransferAccess";
import BankDetails from "./transferComponents/BankDetails";
import CustomNavigation from "./CustomNavigation";

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
  const initialState = 0;

  let [state, setState] = useState(initialState);

  const handleActionBtn = (e) => {
    const banks = [
      "FIRST BANK",
      "OCEANIC BANK",
      "FCMB",
      "SKYE BANK",
      "UBA",
      "STERLING BANK",
      "EXIT",
    ];
    if (banks.includes(e.target.textContent)) {
      setState((state = 1));
    } else {
      setState((state = 0));
    }
  };
  function displayCashTransaction() {
    return (
      <div>
        <CustomNavigation />
        <div className="layoutContainer">
          <div className="btnLayout" onClick={handleActionBtn}>
            {objectCol1.map((btn, index) => (
              <CreateButton text={btn.text} />
            ))}
          </div>
          <div className="btnLayout" onClick={handleActionBtn}>
            {objectCol2.map((btn, index) => (
              <CreateButton text={btn.text} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  function renderCashTransaction() {
    if (state === 0) {
      return displayCashTransaction();
    } else if (state === 1) {
      return <BankDetails />;
    }
  }
  return renderCashTransaction();
}

export default Transfer;
