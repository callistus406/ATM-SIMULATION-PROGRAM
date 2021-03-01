import { React, useState } from "react";
import NumberPad from "../NumberPad";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import "./BankDetails.css";
import { Button } from "@material-ui/core";
import CustomNavigation from "../CustomNavigation";
import LoadingScreen from "../Interrupts/LoadingScreen";
// import PasswordConfirmation from "../Interrupts/PasswordConfirmation";

// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
// import { makeStyles } from "@material-ui/core/styles";

import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import "./interrupts.css";
import CashTransaction from "../CashTransaction";
import PayBills from "../PayBills";
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

function BankDetails() {
  let initialState = 0;
  let [state, setState] = useState(initialState);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleLoadingScreen = (e) => {
    setState((state = 1));
  };

  const handleActionBtn = (e) => {
    if (e.target.textContent === "TRANSFER") {
      setState((state = 1));
    } else if (e.target.textContent === "CANCEL") {
      setState((state = 2));
    }
  };
  const classes = useStyles();

  function displayBankDetails() {
    function InputFields(props) {
      const [acct, setAcct] = useState({
        account: "",
      });
      const [amt, setAmt] = useState({
        amount: "",
      });

      const handleChange2 = (event) => {
        setAmt({ ...amt, amount: event.target.value });
      };
      const handleChange = (event) => {
        setAcct({ ...acct, account: event.target.value });
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
            label="Account Number"
            variant="outlined"
            type="number"
            value={acct.account}
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
        </form>
      );
    }
    return (
      <div>
        <div>
          <CustomNavigation />
        </div>
        <div className="bankDetailsParentContainer">
          <div className="bankDetailsContainer">
            <h3>Fill Up The Fields</h3>
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
                onClick={handleClickOpen}
                style={{ height: "8vh" }}
              >
                TRANSFER
              </Button>
              {/* start of the dialog box */}
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle
                  id="form-dialog-title"
                  style={{ textAlign: "center" }}
                >
                  {" "}
                  <h3>Confirmation Msg</h3>
                </DialogTitle>
                <div className="passwordConfirmationContainer">
                  <DialogContent>
                    <DialogContentText>
                      {" "}
                      Do you Want To Perform This Transaction ?
                    </DialogContentText>
                    {/* <PasswordInput /> */}
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={handleLoadingScreen} color="primary">
                      Confirm
                    </Button>
                  </DialogActions>
                </div>
              </Dialog>
              {/* end of the dialog box */}
            </div>
          </div>
          <Divider orientation="vertical" flexItem />

          {/* <div className="bankDetailsNumberPad">
            <NumberPad
              action={(e) => {
                return selectAction(e);
              }}
            />
          </div> */}
        </div>
      </div>
    );
  }
  function renderBankDetails() {
    if (state === 0) {
      return displayBankDetails();
    } else if (state === 1) {
      return <LoadingScreen />;
    } else if (state === 2) {
      return <PayBills />;
    }
  }
  return renderBankDetails();
}

export default BankDetails;
