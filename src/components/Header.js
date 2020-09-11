import React from 'react';
import {makeStyles} from "@material-ui/styles"
import CardMedia from "@material-ui/core/CardMedia"
import logo from "../images/logo.svg"


const useStyles = makeStyles({

  root: {
   marginTop: '100px'
  },
  img: {
    width: '150px',
    height: '150px',
    margin: '0 auto'
  }


})

function Header() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
        <CardMedia className={classes.img} image={logo} />
    </div>
  );

}

export default Header;
