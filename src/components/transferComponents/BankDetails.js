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

function PasswordInput() {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: "80%",
    },
  }));
  const classes = useStyles();
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      {" "}
      <FormControl
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-password">
          Confirm Password
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          autoFocus
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={133}
        />
      </FormControl>
    </div>
  );
}

function BankDetails() {
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

  function InputFields(props) {
    const classes = useStyles();
    return (
      <form
        className={classes.root}
        style={{ textAlign: "center" }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label={props.label} variant="outlined" />
      </form>
    );
  }
  function displayBankDetails() {
    return (
      <div>
        <div>
          <CustomNavigation />
        </div>
        <div className="bankDetailsParentContainer">
          <div className="bankDetailsContainer">
            <InputFields label="Account Number" />

            <InputFields label="Amount" />
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
                  Please Confirm Your Password !
                </DialogTitle>
                <div className="passwordConfirmationContainer">
                  <DialogContent>
                    <DialogContentText></DialogContentText>
                    <PasswordInput />
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
            <NumberPad />
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
