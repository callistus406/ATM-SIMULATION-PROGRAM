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
  // const [valuesBtn, setValuesBtn] = useState({
  //   accountNumber: "",
  //   amount: "",
  // });
  let accountNumber = "";
  let amount = "";

  let [acctNo, setAcctNo] = useState(accountNumber);
  let [amt, setAmount] = useState(amount);
  let bool = 0;

  const setAction = (e) => {
    setAcctNo((acctNo += e.target.textContent));
    // bool = 1;
    console.log(acctNo);
  };

  const setAction2 = (e) => {
    setAmount((amt += e.target.textContent));
    bool = 1;
    console.log(amt);
  };

  const selectAction = (e) => {
    setAction(e);
  };

  const selectAction2 = (e) => {
    setAction2(e);
  };

  // const check =;
  let initialState = 0;
  let [state, setState] = useState(initialState);
  // const handleActionBtn = (e) => {
  //   setState((state = 1));
  // };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleLoadingScreen = () => {
    setState((state = 1));
    // alert(state);
  };
  const classes = useStyles();

  function displayBankDetails() {
    function InputFields(props) {
      console.log(props);
      return (
        <form
          className={classes.root}
          style={{ textAlign: "center" }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label={props.label}
            variant="outlined"
            value={props.value}
            // onClick={selectAction}
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
            <InputFields label="Account Number" value={acctNo} />

            {/* <InputFields label="Amount" value={amt} /> */}
            <form
              className={classes.root}
              style={{ textAlign: "center" }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Amount"
                variant="outlined"
                value={amt}
                onClick={(e) => {
                  // bool = 1;
                  selectAction2(e);
                }}
                // onChange={() => (bool = 1)}
              />
            </form>
            <div className="centerBtn">
              <Button
                variant="contained"
                color="primary"
                onClick={handleClickOpen}
              >
                Transfer
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

          <div className="bankDetailsNumberPad">
            <NumberPad
              action={(e) => {
                switch (bool) {
                  case 0:
                    return selectAction(e);

                  case 1:
                    return selectAction2(e);
                  default:
                    selectAction2(e);
                }
              }}
            />
          </div>
        </div>
      </div>
    );
  }
  function renderBankDetails() {
    if (state === 0) {
      return displayBankDetails();
    } else if (state === 1) {
      return <LoadingScreen />;
    }
  }
  return renderBankDetails();
}

export default BankDetails;
