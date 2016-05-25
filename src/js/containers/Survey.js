// react
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Paper, Snackbar } from 'material-ui';
// packages
import Debug from 'debug';
import connectToStores from 'alt-utils/lib/connectToStores';
// local
import muiTheme from './../../css/muiTheme.css';
import styles from './../../css/survey.css';
import Header from './../components/Header';
import RaisedButton from './../components/RaisedButton';
import UserStore from './../stores/UserStore';

const debug = Debug('react:containers:survey');

class Survey extends Component {

  constructor(props) {
    debug('constructor()');
    super(props);
  }

  static getStores() {
    return [UserStore];
  }

  static getPropsFromStores() {
    let _store = UserStore.getState();
    return _store;
  }

  render() {
    debug('render()');
    return (
      <MuiThemeProvider muiTheme={ muiTheme }>
        <Paper style={ styles.paperPage } zDepth={ 0 } rounded={ false }>
          <Header />
          <Paper style={ styles.paperContainer } zDepth={ 0 } rounded={ false }>
            <h2>{ this.props.connected.toString() }</h2>
          </Paper>
        </Paper>
      </MuiThemeProvider>
    );
  }

}

  export default connectToStores(Survey);
