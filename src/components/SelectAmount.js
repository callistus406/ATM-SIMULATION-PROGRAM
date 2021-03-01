import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import "./selectAmount.css";
import CustomNavigation from "./CustomNavigation";
import Amounts from "./Amounts";
import LoadingScreen from "./Interrupts/LoadingScreen";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "90%",
    },
  },
  center: {
    textAlign: "center",
  },
}));

function checkInput(e) {
  // var e = e ;
  var char =
    e.type == "keypress"
      ? String.fromCharCode(e.keyCode || e.which)
      : (e.clipboardData || window.clipboardData).getData("Text");
  if (/[^\d]/gi.test(char)) {
    return false;
  }
}

function SelectAmount() {
  const [amt, setAmt] = useState({
    amount: "",
  });

  const handleChange = (event) => {
    // var text = document.getElementById("outlined-basic");
    // text.onkeypress = text.onpaste = checkInput;

    setAmt({ ...amt, amount: Number(event.target.value) });
  };

  const initialState = 0;
  let [state, setState] = useState(initialState);

  const handleActionBtn = (e) => {
    if (e.target.textContent === "PROCEED") {
      setState((state = 1));
      // alert(amt);
    } else if (e.target.textContent === "CANCEL") {
      setState((state = 2));
    }
  };

  const classes = useStyles();
  const defaultValue = 0;
  function displaySelectAmount() {
    return (
      <>
        <CustomNavigation />
        <div className="topContainer">
          <div className="innerContainer">
            <h2>Enter Amount</h2>
            <form
              className={classes.root}
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "column",
                height: "42vh",
                alignItems: "center",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Amount"
                type="number"
                // defaultValue="{defaultValue}"
                variant="outlined"
                value={amt.amount}
                onChange={handleChange}
                style={{ fontSize: "1.5rem" }}
              />

              <div class="buttons">
                <Button
                  onClick={handleActionBtn}
                  variant="contained"
                  color="primary"
                  style={{ height: "8vh" }}
                >
                  PROCEED
                </Button>

                <Button
                  onClick={handleActionBtn}
                  variant="contained"
                  color="primary"
                  style={{ height: "8vh" }}
                >
                  CANCEL
                </Button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }

  function myRender() {
    if (state === 0) {
      return displaySelectAmount();
    } else if (state === 1) {
      return <LoadingScreen />;
    } else if (state === 2) {
      return <Amounts />;
    }
  }
  return myRender();
}

export default SelectAmount;
