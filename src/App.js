import { ThemeProvider } from '@material-ui/core/styles';

import Header from './components/Header/Header'
import theme from './theme'


function App() {
  return (
    <ThemeProvider theme={theme}>

      <div className="App">
        <Header></Header>
      </div>

    </ThemeProvider>
  );
}

export default App;
