// react
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Paper, TextField } from 'material-ui';
// packages
import Debug from 'debug';
import connectToStores from 'alt-utils/lib/connectToStores';
// local
import muiTheme from './../../css/muiTheme.css';
import styles from './../../css/login.css';
import Header from './../components/Header';
import RaisedButton from './../components/RaisedButton';
import UserStore from './../stores/UserStore';
import UserActions from './../actions/UserActions';

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
    return UserStore.getState();
  }
  loginHandler(event) {
    let email = this.refs.textFieldEmail.input.value;
    let password = this.refs.textFieldPassord.input.value;
    UserActions.login(email, password);
  }
  render() {
    debug('render()');
    return (
      <MuiThemeProvider muiTheme={ muiTheme }>
        <Paper style={ styles.paperPage } zDepth={ 0 } rounded={ false }>
          <Header />
          <Paper style={ styles.paperContainer } zDepth={ 0 } rounded={ false }>
            <Paper style={ styles.paperTitle } zDepth={ 0 } rounded={ true }>
              <h1 style={ styles.blocTitle }>Rentrez vos identifiants</h1>
            </Paper>
            <Paper style={ styles.paperBloc } zDepth={ 0 } rounded={ true }>
              <TextField fullWidth={ true } underlineStyle={styles.underlineStyle} underlineFocusStyle={styles.underlineFocusStyle} disabled={ this.props.loading } ref="textFieldEmail" hintText="votre adresse email" style={ styles.textField } /><br />
              <br />
              <TextField fullWidth={ true } underlineStyle={styles.underlineStyle} underlineFocusStyle={styles.underlineFocusStyle} disabled={ this.props.loading } ref="textFieldPassord" hintText="votre mot de passe" type="password" style={ styles.textField } /><br />
              <br />
              <RaisedButton label="Connexion" labelStyle={ styles.buttonLoginLabel } style={ styles.buttonLogin } onMouseDown={ this.loginHandler.bind(this) } disabled={ this.props.loading } />
            </Paper>
          </Paper>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

export default connectToStores(Homepage);
