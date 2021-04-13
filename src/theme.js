import { createMuiTheme } from '@material-ui/core/styles';
import { teal, lime }  from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: lime[500],
    },
  },
});

export default theme