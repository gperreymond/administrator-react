// react
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Paper } from 'material-ui';
// packages
import Debug from 'debug';
// local

const debug = Debug('react:views:register');

const muiTheme = getMuiTheme({

});

const styles = {
  paperPage: {
    height: '100%',
    width: '100%'
  },
  paperContainer: {
    width: 960,
    height: '100%',
    margin: 'auto',
    marginTop: 0,
    marginBottom: 0,
    padding: 20,
    paddingTop: 0
  }
};

class FluxRegister extends Component {
  constructor(props) {
    debug('constructor()');
    super(props);
  }
  render() {
    debug('render()');
    return (
      <MuiThemeProvider muiTheme={ muiTheme }>
        <Paper style={ styles.paperPage } zDepth={ 0 } rounded={ false }>
          <Paper style={ styles.paperContainer } zDepth={ 0 } rounded={ true }>
            <h1>FluxRegister</h1>
          </Paper>
        </Paper>
      </MuiThemeProvider>
    );
  }
}


export default FluxRegister;
