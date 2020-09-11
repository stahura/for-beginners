import { createMuiTheme } from "@material-ui/core/styles";
const defaultTheme = createMuiTheme({});
const {
  breakpoints,
  typography: { pxToRem },
} = defaultTheme;

//Mui Theme Provider wrap around other Material UI components and override their styles
//https://material-ui.com/customization/theming/

export default createMuiTheme({
  palette: {
    primary: {
      main: '#550155'
    }
  },
  overrides: {
    MuiTypography: {
        root: {
            fontFamily: "Moon"
        }
    },
    MuiButtonBase: {
       
    }
  }
  
});