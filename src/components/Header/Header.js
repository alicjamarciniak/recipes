import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './../../images/logo.png';

const useStyles = makeStyles((theme) => ({
  header: {
    flexGrow: 1,
  },
  appBar: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
    fontSize: 25,
  },
  logo: {
    maxWidth: 60,
    marginRight: theme.spacing(2),
  },
}));

const Header = () => {
  const muiClasses = useStyles();

  return (
    <header className={muiClasses.header}>
      <AppBar className={muiClasses.appBar} position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            className={muiClasses.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="My recipes" className={muiClasses.logo} />
          <Typography variant="h1" className={`title ${muiClasses.title}`}>
            My recipes
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
