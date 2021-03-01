import { React, useState } from "react";
// import React from "react";
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
import Divider from "@material-ui/core/Divider";
// Button
import "./ChangePassword.css";
import NumberPad from "./NumberPad";
import CustomNavigation from "./CustomNavigation";
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
function ChangePassword(props) {
  //   export default function InputAdornments() {(
  let initialState = 0;
  let [state, setState] = useState(initialState);

  const handleActionBtn = (e) => {
    if (e.target.textContent === "CONFIRM") {
      setState((state = 1));
    } else if (e.target.textContent === "CANCEL") {
      setState((state = 2));
    }
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
    const [values, setValues] = useState({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      one: false,
      two: false,
      three: false,
      showPassword: false,
    });

    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };

    // correct
    const handleClickShowPassword = (prop) => (event) => {
      let propStore;
      if (prop === "two") {
        propStore = values.two;
      } else if (prop === "one") {
        propStore = values.one;
      } else if (prop === "three") {
        propStore = values.three;
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
                Old Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.one ? "text" : "password"}
                value={values.oldPassword}
                onChange={handleChange("oldPassword")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword("one")}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.one ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={125}
              />
            </FormControl>
          </div>
          <div>
            <FormControl className={clsx(classes.textField)} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                New Password{" "}
              </InputLabel>

              <OutlinedInput
                id="outlined-adornment-password"
                type={values.two ? "text" : "password"}
                value={values.newPassword}
                onChange={handleChange("newPassword")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword("two")}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.two ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={125}
              />
            </FormControl>
          </div>
          {/* retype password */}
          <div>
            <FormControl className={clsx(classes.textField)} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Retype Password{" "}
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.three ? "text" : "password"}
                value={values.confirmPassword}
                onChange={handleChange("confirmPassword")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword("three")}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.three ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={125}
              />
            </FormControl>
          </div>
        </div>
      </div>
    );
  }

  function displayChangePassword() {
    return (
      <div>
        <CustomNavigation />

        <div className="parentInputContainer">
          <div className="passwordContainer">
            <PasswordInput />
            <div className="styleBtn">
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
                CANCEL
              </Button>

              <Button
                variant="contained"
                color="primary"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  height: "3rem",
                  marginTop: "2.5vh",
                }}
                // onClick={handleActionBtn}
              >
                CONFIRM
              </Button>
            </div>
          </div>
          {/* <Divider orientation="vertical" flexItem /> */}
        </div>
      </div>
    );
  }
  function myRender() {
    if (state === 0) {
      return displayChangePassword();
    } else if (state === 1) {
      // return <LoadingScreen />;
    } else if (state === 2) {
      return <Transaction />;
    }
  }
  return myRender();
}

export default ChangePassword;
