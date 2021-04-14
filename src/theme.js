import { createMuiTheme } from '@material-ui/core/styles';
import { grey, teal, lime }  from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[500],
      noImgBackground: grey[200] 
    },
    secondary: {
      main: lime[500],
    },

  },
});

export default theme