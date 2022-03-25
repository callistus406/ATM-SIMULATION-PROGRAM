import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { React } from "react";
import CashTransaction from "./CashTransaction";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export function CreateButton(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();
  const handleActionBtn = (e) => {
    if (e.target.textContent === "SAVINGS") {
      console.log("fine");
    }
  };
  return (
    <Button variant="contained" color="primary">
      {props.text}
    </Button>
  );
}
// export default CreateButton;
