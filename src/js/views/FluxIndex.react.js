// react
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Paper } from 'material-ui';
// packages
import Debug from 'debug';
// local
import UserStore from './../stores/UserStore';
import AuthAPI from './../utils/AuthAPI';

const debug = Debug('react:views:homepage');

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

// method to retrieve state from Stores
var getIndexState = function() {
  return {
    loading: true,
    autoHideDuration: 3000,
    open: false,
    message: UserStore.getMessage(),
    token: UserStore.getToken(),
    infos: UserStore.getInfos(),
    connected: UserStore.getConnected()
  };
};

class FluxIndex extends Component {

  constructor(props) {
    debug('constructor()');
    super(props);
    this.state = getIndexState();
    AuthAPI.getGlobalInformations();
  }

  // add change listeners to stores
  componentDidMount() {
    debug('componentDidMount()');
    UserStore.addChangeListener(this._onChange.bind(this));
  }

  // remove change listers from stores
  componentWillUnmount() {
    debug('componentWillUnmount()');
    UserStore.removeChangeListener(this._onChange);
  }

  // method to setState based upon store changes
  _onChange() {
    this.setState(getIndexState());
    if (this.state.message!=='') {
      this.handleTouchTap();
    }
    debug('_onChange()', this.state);
  }

  render() {
    debug('render()');
    return (
      <MuiThemeProvider muiTheme={ muiTheme }>
        <Paper style={ styles.paperPage } zDepth={ 0 } rounded={ false }>
          <Paper style={ styles.paperContainer } zDepth={ 0 } rounded={ true }>
            <h1>Loading in progress...</h1>
          </Paper>
        </Paper>
      </MuiThemeProvider>
    );
  }
}


export default FluxIndex;
