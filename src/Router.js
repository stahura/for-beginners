
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App" 
import MuiThemeProvider from "@material-ui/core//styles/MuiThemeProvider"
import fonttheme from "./styles/fonttheme"

const Router = () => (
    <MuiThemeProvider theme={fonttheme}>
    <BrowserRouter>
        <Switch>
            <Route path="/web" component={App} />
            <Route path="/programming" component={App} />
            <Route path="/" component={App} />
        </Switch>
    </BrowserRouter>
    </MuiThemeProvider>
);

export default Router;