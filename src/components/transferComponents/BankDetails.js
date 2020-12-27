import React from "react";
import NumberPad from "../NumberPad";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import "./BankDetails.css";
import { Button } from "@material-ui/core";
import CustomNavigation from "../CustomNavigation";
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
            <Button variant="contained" color="primary">
              Transfer
            </Button>
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

export default BankDetails;
