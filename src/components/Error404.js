import { Container } from "@material-ui/core";
import { React, useState } from "react";
import "./Error404.css";
import Button from "@material-ui/core/Button";
import { CreateButton } from "./CreateButton";
import CashTransaction from "./CashTransaction";
import Transaction from "./Transaction";
function Error404() {
  const initialState = 0;
  let [state, setState] = useState(initialState);

  const handleActionBtn = (e) => {
    if (e.target.textContent === "Cancel") {
      setState((state = 1));
    }
  };

  function displayMsg() {
    return (
      <div>
        <div className="parentContainer">
          <div className="container">
            <h1>This section is temporarily unavailable</h1>
          </div>
          <div className="button">
            <Button
              onClick={handleActionBtn}
              variant="contained"
              color="primary"
              style={{ background: "red" }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    );
  }
  function myRender() {
    if (state === 0) {
      return displayMsg();
    } else if (state === 1) {
      return (
        // setState(state=0)

        <Transaction />
      );
    }
  }

  return myRender();
}

export default Error404;
