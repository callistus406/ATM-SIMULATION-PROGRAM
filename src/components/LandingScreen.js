import { React, useState } from "react";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import "./LandingScreen.css";
import NumberPad from "./NumberPad";
import Button from "@material-ui/core/Button";
import Transaction from "./Transaction";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "fit-content",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    "& svg": {
      margin: theme.spacing(1.5),
    },
    "& hr": {
      margin: theme.spacing(0, 0.5),
    },
  },
}));
function LandingScreen() {
  const initialState = 0;
  let [state, setState] = useState(initialState);
  const handleActionBtn = () => {
    setState((state = 1));
  };
  function PasswordInput(props) {
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
        width: "100%",
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
            {props.label}
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
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
            labelWidth={125}
          />
        </FormControl>
      </div>
    );
  }
  function displayLandingScreen() {
    return (
      <div className="landingScreenContainer">
        <div class="header-msg">
          <h1>WELCOME TO MY ATM SIMULATION PROGRAM</h1>
          <p>
            install our mobile App on playStore(For Android) and apple Store(
            For IOS)
          </p>
          <p>Dail *894# to Enjoy My new Mobile banking System.</p>
        </div>
        <div className="editSection">
          <div className="inputSection">
            <div className="inputs">
              <PasswordInput label="Card Number" />
              <PasswordInput label="Cvv Number" />
              <PasswordInput label="Password" />
              {/* <div className="center"> */}
              <Button
                variant="contained"
                color="primary"
                style={{ marginLeft: "auto", marginRight: "auto" }}
                onClick={handleActionBtn}
              >
                Login
              </Button>
              {/* </div> */}
            </div>
          </div>
          <div className="numberPadSection">
            <NumberPad />
          </div>
        </div>
      </div>
    );
  }
  function renderLandingScreen() {
    if (state === 0) {
      return displayLandingScreen();
    } else if (state === 1) {
      return <Transaction />;
    }
  }
  return renderLandingScreen();
}

export default LandingScreen;
