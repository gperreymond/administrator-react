// react
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Paper, CircularProgress } from 'material-ui';
// packages
import Debug from 'debug';
import connectToStores from 'alt-utils/lib/connectToStores';
// local
import muiTheme from './../../css/muiTheme.css';
import styles from './../../css/homepage.css';
import { colorAbibaoDarkBlue, colorAbibaoMediumBlue } from './../../css/colors.css';
import UserStore from './../stores/UserStore';

const debug = Debug('react:containers:homepage');

class Homepage extends Component {

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
          <Paper style={ styles.paperContainer } zDepth={ 0 } rounded={ false }>
            <CircularProgress size={2} color={ colorAbibaoDarkBlue } />
            <h1 style={ styles.title }>chargement en cours</h1>
            <h2 style={ styles.subtitle }>tâche en cours</h2>
          </Paper>
        </Paper>
      </MuiThemeProvider>
    );
  }

}

  export default connectToStores(Homepage);
