import React,{useState} from 'react';
import {makeStyles} from "@material-ui/styles"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import { useMediaQuery } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({

  root: {
      margin: '0 auto'
  },
  text: {
    marginTop: '50px',
    marginBottom: '50px',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Moon',
    [theme.breakpoints.down("xs")]: {
      fontSize: '23px',
      marginBottom: '25px'
    },
    divider: {
      margin: '0 auto',
      width: '50%',
      height: '10px',
      backgroundColor: 'white',
      marginBottom: '100px'
    }
  }

}))

function Title() {

  const classes = useStyles()
  

  return (
      <div className={classes.root}>
      <Typography gutterBottom className={classes.text} variant="h3">FOR BEGINNERS BY A BEGINNER</Typography>
      <Divider style={{margin: '0 auto',width: '50%',height: '10px',backgroundColor: 'white'}} />
    </div>
  );

}

export default Title;
