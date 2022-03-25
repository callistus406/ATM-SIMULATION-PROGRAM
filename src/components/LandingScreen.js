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
  const numberPadBtnAction = (e) => {
    let button = document.getElementsByTagName("button");
    console.log(e.target.textContent);
  };
  const initialState = 0;
  let [state, setState] = useState(initialState);
  const handleActionBtn = () => {
    setState((state = 1));
  };
  function LoginInput(props) {
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
    const [values, setValues] = useState({
      cardNumber: "",
      cvvNumber: "",
      password: "",
      showCardNumber: false,
      showCvvNumber: false,
      showPassword: false,
    });

    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };

    // correct
    const handleClickShowPassword = (prop) => (event) => {
      let propStore;
      if (prop === "showCvvNumber") {
        propStore = values.showCvvNumber;
      } else if (prop === "showCardNumber") {
        propStore = values.showCardNumber;
      } else if (prop === "showPassword") {
        propStore = values.showPassword;
      }
      setValues({ ...values, [prop]: !propStore });
      console.log(propStore);
    };

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const classes = useStyles();

    return (
      <div>
        <div className="spacer">
          {" "}
          <div>
            <FormControl className={clsx(classes.textField)} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Card Number
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showCardNumber ? "text" : "password"}
                value={values.cardNumber}
                onChange={handleChange("cardNumber")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword("showCardNumber")}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showCardNumber ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={100}
              />
            </FormControl>
          </div>
          <div>
            <FormControl className={clsx(classes.textField)} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Cvv Number
              </InputLabel>

              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showCvvNumber ? "text" : "password"}
                value={values.cvvNumber}
                onChange={handleChange("cvvNumber")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword("showCvvNumber")}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showCvvNumber ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={95}
              />
            </FormControl>
          </div>
          {/* retype password */}
          <div>
            <FormControl className={clsx(classes.textField)} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password{" "}
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "number" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword("showPassword")}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={75}
              />
            </FormControl>
          </div>
        </div>
      </div>
    );
  }
  function displayLandingScreen() {
    return (
      <div className="landingScreenContainer">
        <div class="header-msg">
          <h3 style={{ fontSize: "1.5rem" }}>
            WELCOME TO MY ATM SIMULATION PROGRAM
          </h3>
          <p className="write-up">
            install our mobile App on playStore(For Android) and apple Store(
            For IOS)
          </p>
          <p className="write-up">
            Dail *894# to Enjoy My new Mobile banking System.
          </p>
        </div>
        <div className="editSection">
          <div className="inputSection">
            <div className="inputs">
              <LoginInput />
              {/* <div className="center"> */}
              <Button
                variant="contained"
                color="primary"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  height: "3rem",
                  marginTop: "2.5vh",
                }}
                onClick={handleActionBtn}
              >
                Login
              </Button>
              {/* </div> */}
            </div>
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
