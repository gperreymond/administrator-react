// react
import React, { Component } from 'react';
import { Paper, TextField, Snackbar } from 'material-ui';
// packages
import Debug from 'debug';
import connectToStores from 'alt-utils/lib/connectToStores';
// local
import styles from './../../css/application.css';
import SparkPanel from './../components/spark/Panel';
import RaisedButton from './../components/RaisedButton';
import ApplicationActions from './../actions/ApplicationActions';
import ApplicationStore from './../stores/ApplicationStore';

const debug = Debug('react:containers:login');

class Login extends Component {

  constructor(props) {
    debug('constructor()');
    super(props);
  }

  static getStores() {
    return [ApplicationStore];
  }

  static getPropsFromStores() {
    let _store = ApplicationStore.getState();
    return _store;
  }

  loginHandler(event) {
    let email = this.refs.textFieldEmail.input.value;
    let password = this.refs.textFieldPassord.input.value;
    ApplicationActions.login(email, password);
  }

  /*
  <Paper style={ styles.login.panel.header } zDepth={ 0 } rounded={ true }>
    <h1 style={ styles.login.panel.header_title }>Rentrez vos identifiants</h1>
  </Paper>
  <Paper style={ styles.login.panel.content } zDepth={ 0 } rounded={ true }>
    <TextField style={ styles.login.panel.content_input } fullWidth={ true } underlineStyle={styles.underlineStyle} underlineFocusStyle={styles.underlineFocusStyle} disabled={ this.props.loading } ref="textFieldEmail" hintText="votre adresse email" /><br />
    <br />
    <TextField style={ styles.login.panel.content_input } fullWidth={ true } underlineStyle={styles.underlineStyle} underlineFocusStyle={styles.underlineFocusStyle} disabled={ this.props.loading } ref="textFieldPassord" hintText="votre mot de passe" type="password" /><br />
    <br />
    <RaisedButton label="Connexion" labelStyle={ styles.button.label } style={ styles.button.content } onMouseDown={ this.loginHandler.bind(this) } disabled={ this.props.loading } />
  </Paper>
  */

  render() {
    debug('render()');
    return (
      <Paper style={ styles.paperContainer } zDepth={ 0 } rounded={ false }>
        <SparkPanel
          style={ styles.contentCenter }
          title="Rentrez vos identifiants"
          width={ 450 }
          rounded={ true }
          zDepth={ 0 }
          backgroundTitleColor={ styles.colors.colorAbibaoMediumBlue }
          textTitleColor={ styles.colors.colorAbibaoWhite }
          backgroundContentColor={ styles.colors.colorAbibaoLightGrey }>
          <TextField inputStyle={ styles.input } fullWidth={ true } ref="textFieldEmail" hintText="votre adresse email" />
          <TextField fullWidth={ true } ref="textFieldPassord" hintText="votre mot de passe" type="password" />
          <RaisedButton label="Connexion" onMouseDown={ this.loginHandler.bind(this) } disabled={ this.props.loading } />
        </SparkPanel>
        <Snackbar
          bodyStyle={ styles.toastError }
          open={ this.props.toastError }
          message={ this.props.toastMessage }
          action="fermer"
          autoHideDuration={ this.props.autoHideDuration }
          onActionTouchTap={ ApplicationActions.handleRequestClose }
          onRequestClose={ ApplicationActions.handleRequestClose }
        />
      </Paper>
    );
  }

}

export default connectToStores(Login);
