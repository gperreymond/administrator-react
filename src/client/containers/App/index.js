import React, { Component } from 'react';

import individuals from './../../api/individuals';

import { cyan500 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});

const styles = {
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: cyan500
  }
};

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <button onClick={individuals.login}>LOGIN</button>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
