import { React, useState } from "react";
import BettingAmount from "./BettingAmount";
import PayBills from "../PayBills";
import { CreateButton } from "../CreateButton";
import CustomNavigation from "../CustomNavigation";
const objectCol1 = [
  {
    id: "1",
    customClass: "bet9jabtn",
    text: "BET9JA",
  },
  {
    id: "2",

    customClass: "betkingbtn",
    text: "BETKING",
  },
  {
    id: "3",

    customClass: "1960btn",
    text: "1960BET",
  },
  {
    id: "4",

    customClass: "sportyBtn",
    text: "SPORTYBET",
  },
];
const objectCol2 = [
  {
    id: "4",
    customClass: "nairaBetBtn",
    text: "NAIRABET",
  },
  {
    id: "5",

    customClass: "marryGoldBtn",
    text: "MERRYGOLDBET",
  },
  {
    id: "6",

    customClass: "sterlingBtn",
    text: "NAIJABET",
  },
  {
    id: "7",

    customClass: "exitbtn",
    text: "EXIT",
  },
];
function Betting() {
  const initialState = 0;

  let [state, setState] = useState(initialState);

  const handleActionBtn = (e) => {
    const banks = [
      "BET9JA",
      "1960BET",
      "BETKING",
      "NAIRABET",
      "MERRYGOLDBET",
      "SPORTYBET",
      "NAIJABET",
    ];
    if (banks.includes(e.target.textContent)) {
      setState((state = 1));
    } else if (e.target.textContent === "EXIT") {
      setState((state = 2));
    }
  };
  function displayBetting() {
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

  function renderBetting() {
    if (state === 0) {
      return displayBetting();
    } else if (state === 1) {
      return <BettingAmount />;
    } else if (state === 2) {
      return <PayBills />;
    }
  }
  return renderBetting();
}

export default Betting;
