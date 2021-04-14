import { ThemeProvider } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router';

import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Recipe from './components/Recipe/Recipe';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header></Header>

        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Dashboard {...props} />}
          ></Route>
          <Route
            exact
            path="/:recipeId"
            render={(props) => <Recipe {...props} />}
          ></Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
