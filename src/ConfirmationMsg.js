import { React, useState } from "react";
import "./ConfirmationMsg.css";
import { Button } from "@material-ui/core";
import CustomNavigation from "./components/CustomNavigation";
import { render } from "react-dom";
import Transaction from "./components/Transaction";
import LandingScreen from "./components/LandingScreen";
import Transfer from "./components/Transfer";
function ConfirmationMsg() {
  const initialState = 0;

  let [state, setState] = useState(initialState);
  const handleActionBtn = (e) => {
    if (e.target.textContent === "YES") {
      setState((state = 1));
    } else if (e.target.textContent === "NO") {
      setState((state = 2));
    } else {
      setState((state = 0));
    }
  };

  function displayConfirmationMsg() {
    return (
      <div>
        <CustomNavigation />
        <div className="paper spaceOutElements">
          <h1>Transaction Successful .</h1>
          <h3>Do You Want To Perform Another Transaction ?</h3>
          <div className="spaceBtn">
            <Button
              //   size="x-small"
              variant="outlined"
              style={{ fontWeight: "bold" }}
              className="positionBtn"
              onClick={handleActionBtn}
            >
              NO
            </Button>
            <Button
              variant="outlined"
              style={{ fontWeight: "bold" }}
              onClick={handleActionBtn}
            >
              YES
            </Button>
          </div>
        </div>
      </div>
    );
  }
  function renderConfirmationMsg() {
    if (state === 0) {
      return displayConfirmationMsg();
    } else if (state === 1) {
      return <Transaction />;
    } else if (state === 2) {
      return <LandingScreen />;
    }
  }
  return renderConfirmationMsg();
}

export default ConfirmationMsg;
