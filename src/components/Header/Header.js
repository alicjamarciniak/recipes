import { AppBar, Toolbar, IconButton, Typography, makeStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    fontSize: 36
  }
}))

const Header = () => {
  const muiClasses = useStyles()

  return (
    <header className={muiClasses.root}>
      <AppBar className="Header" position="static">
        <Toolbar>
          <IconButton edge="start" className={muiClasses.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
          <Typography variant="h1" className={`title ${muiClasses.title}`}>
            My recipes
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header
