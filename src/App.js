import React from 'react';
import {makeStyles} from "@material-ui/styles"
import Header from "./components/Header"
import Title from "./components/Title"
import { Route, BrowserRouter,Switch} from "react-router-dom"
import NavBar from "./components/NavBar"
import Button from "@material-ui/core/Button"


const useStyles = makeStyles({

  root: {
  
      
  },
  button: {
    maxWidth: '300px'
  }

})

function App() {
  const classes = useStyles()
  return (
    <div className="App">
      <div>
        <Header />
        <Title />
        <NavBar />
      </div>
      <div style={{margin: '0 auto',marginTop: '50px',width: '100%',display: 'flex', width: '40%',justifyContent: 'center'}}>
        <Button className={classes.button} variant="contained" color="primary">Detailed Overview</Button>
      </div>
    </div>
  );

}

export default App;
