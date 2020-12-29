import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function LoadingScreen() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
    // alert("errtty");
  };
  function displayLoadingScreen() {
    return (
      <div>
        <div>
          {/* <Button variant="outlined" color="primary" onLoad={handleToggle}>
          Show backdrop
        </Button> */}
          <Backdrop
            className={classes.backdrop}
            open={open}
            onClick={handleClose}
            onLoad={handleToggle}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                // justifyContent: "space-between",
                justifyContent: "space-around",
                height: "80vh",
              }}
            >
              <div
                style={{
                  alignSelf: "center",
                }}
              >
                <CircularProgress color="inherit" />
              </div>
              <div>
                <h1>PLEASE WAIT WHILE YOUR TRANSACTION IS PROCESSING</h1>
              </div>
            </div>
          </Backdrop>
        </div>
      </div>
    );
  }
  return displayLoadingScreen();
}

export default LoadingScreen;
