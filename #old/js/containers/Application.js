// react
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Paper, CircularProgress } from 'material-ui';
// packages
import Debug from 'debug';
import connectToStores from 'alt-utils/lib/connectToStores';
// local
import styles from './../../css/application.css';
import Header from './../components/Header';
import ApplicationStore from './../stores/ApplicationStore';

const debug = Debug('react:containers:homepage');

class Application extends Component {

  constructor(props) {
    debug('constructor()');
    super(props);
    this.completed = false;
  }

  componentDidMount() {
    debug('componentDidMount()');
  }

  componentDidUpdate() {
    if (this.completed===true || this.props.globalInfos===false) {
    } else {
      this.completed = true;
      debug('componentDidUpdate() globalInfos=%o', this.props.globalInfos);
      // calculate redirection
      let nextState = ApplicationStore.getNextState();
      debug('nextState=%o', nextState);
      if (nextState.stateName==='survey') {
        browserHistory.push('/survey');
      }
    }
  }

  static getStores() {
    return [ApplicationStore];
  }

  static getPropsFromStores() {
    let _store = ApplicationStore.getState();
    return _store;
  }

  /*
  <Paper style={ styles.paperContainer } zDepth={ 0 } rounded={ false }>
    <CircularProgress size={2} color={ colorAbibaoDarkBlue } />
    <h2 style={ styles.title }>chargement en cours</h2>
  </Paper>
  */

  render() {
    debug('render()');
    return (
      <MuiThemeProvider muiTheme={ styles.theme }>
        <Paper style={ styles.paperApplication } zDepth={ 0 } rounded={ false }>
          <Header />
          { this.props.children }
        </Paper>
      </MuiThemeProvider>
    );
  }

}

export default connectToStores(Application);
