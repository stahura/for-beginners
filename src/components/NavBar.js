import React from "react";
import { makeStyles } from "@material-ui/styles";
import { NavLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import MuiThemeProvider from "@material-ui/core//styles/MuiThemeProvider";
import fonttheme from "../styles/fonttheme";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "90px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "30px",
    },
  },
  text: {
    color: "white",
    marginLeft: "10px",
    "&:hover": {
      color: "#d1c4e9",
      transform: "scaleY(1.2)",
    },
  },
  ptext: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
}));

function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={fonttheme}>
        <NavLink className={classes.text} to="/page2">
          <Typography className={classes.ptext} variant="h5">
            Tools
          </Typography>
        </NavLink>
        <NavLink className={classes.text} to="/App">
          <Typography className={classes.ptext} variant="h5">
            Web
          </Typography>
        </NavLink>
        <NavLink className={classes.text} to="/App">
          <Typography className={classes.ptext} variant="h5">
            Programming
          </Typography>
        </NavLink>
        <NavLink className={classes.text} to="/App">
          <Typography className={classes.ptext} variant="h5">
            React.js
          </Typography>
        </NavLink>
      </MuiThemeProvider>
    </div>
  );
}

export default NavBar;
