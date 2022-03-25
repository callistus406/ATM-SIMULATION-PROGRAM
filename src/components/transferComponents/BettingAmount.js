import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import "./betting.css";
import { Button } from "@material-ui/core";
import CustomNavigation from "../CustomNavigation";
import LoadingScreen from "../Interrupts/LoadingScreen";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PayBills from "../PayBills";
import Betting from "./Betting";

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
function BettingAmount() {
  const initialState = 0;

  let [state, setState] = useState(initialState);

  const handleActionBtn = (e) => {
    if (e.target.textContent === "PAY") {
      setState((state = 1));
    } else if (e.target.textContent === "CANCEL") {
      setState((state = 2));
    }
  };
  function InputFields(props) {
    const classes = useStyles();

    const [refNo, setRef] = useState({
      reference: "",
    });
    const [amt, setAmt] = useState({
      amount: "",
    });
    const [no, setNo] = useState({
      number: "",
    });

    const handleChange = (event) => {
      setRef({ ...refNo, account: event.target.value });
    };
    const handleChange2 = (event) => {
      setAmt({ ...amt, amount: event.target.value });
    };
    const handleChange3 = (event) => {
      setNo({ ...no, number: event.target.value });
    };

    return (
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
          label="Reference Number"
          variant="outlined"
          type="number"
          value={refNo.reference}
          onChange={handleChange}
        />

        <TextField
          id="outlined-basic"
          label="Amount"
          type="number"
          variant="outlined"
          value={amt.amount}
          onChange={handleChange2}
        />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          type="number"
          variant="outlined"
          value={no.number}
          onChange={handleChange3}
        />
      </form>
    );
  }

  function displayBettingAmount() {
    return (
      <>
        <CustomNavigation />
        <div className="bettingParentContainer">
          <div className="bettingContainer">
            <h5 className="h5">Please Enter The Reference Number and Amount</h5>
            <InputFields />
            <div className="centerBtn">
              <Button
                variant="contained"
                color="primary"
                onClick={handleActionBtn}
                style={{ height: "8vh" }}
              >
                CANCEL
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleActionBtn}
                style={{ height: "8vh" }}
              >
                PAY
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }

  function renderBetting() {
    if (state === 0) {
      return displayBettingAmount();
    } else if (state === 1) {
      return <LoadingScreen />;
    } else if (state === 2) {
      return <Betting />;
    }
  }
  return renderBetting();
}

export default BettingAmount;
