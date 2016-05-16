import React, { Component } from 'react';

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

export default class App extends Component {
  /* constructor(props) {
    super(props);
  } */
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>

        </div>
      </MuiThemeProvider>
    );
  }
}
