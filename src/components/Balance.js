import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import "./Balance.css";
import CustomNavigation from "./CustomNavigation";
import CashTransaction from "./CashTransaction";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
function Balance() {
  const initialState = 0;
  let [state, setState] = useState(initialState);
  const btnActionHandler = () => {
    setState((state = 1));
  };
  function displayBalance() {
    return (
      <div>
        {" "}
        <CustomNavigation actionBtn={btnActionHandler} />
        <div className="balanceContainer">
          <h2>YOUR BALANCE IS </h2>
          <h1>$100000</h1>
        </div>
      </div>
    );
  }
  const classes = useStyles();
  function renderBalance() {
    if (state === 0) {
      return displayBalance();
    } else if (state === 1) {
      //   setState((state = 1));

      return <CashTransaction />;
    }
  }
  return renderBalance();
}

export default Balance;
