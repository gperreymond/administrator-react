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

var compStats = null;

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
  }

  // add change listeners to stores
  componentDidMount() {
    debug('componentDidMount()');
    UserStore.addChangeListener(this._onChange.bind(this));
    AuthAPI.getGlobalInformations();
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
      // this.handleTouchTap();
    }
    if ( _.isArray(this.state.infos.abibaoInProgress)===true ) {
      debug('abibaoInProgress is %s', this.state.infos.abibaoInProgress.length);
      compStats = <h3>abibaoInProgress: { this.state.infos.abibaoInProgress.length }</h3>;
    }
    debug('_onChange() %o', this.state);
    debug(getIndexState());
  }

  render() {
    debug('render()');
    return (
      <MuiThemeProvider muiTheme={ muiTheme }>
        <Paper style={ styles.paperPage } zDepth={ 0 } rounded={ false }>
          <Paper style={ styles.paperContainer } zDepth={ 0 } rounded={ true }>
            <h1>Loading in progress...</h1>
            { compStats }
          </Paper>
        </Paper>
      </MuiThemeProvider>
    );
  }
}


export default FluxIndex;
