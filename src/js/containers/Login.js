// react
import React, { Component } from 'react';
import { AppBar, TextField, RaisedButton, FlatButton } from 'material-ui';
// packages
import Debug from 'debug';
// local
import SparkPanelComponent from './../components/spark/Panel';

const debug = Debug('react:containers:login');

const styles = {
  Page: {
    width: '100%',
    height: '100%',
    padding: 0,
    margin: 0
  },
  Aligner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  AlignerItem: {
    maxWidth: '50%'
  },
  AlignerItemTop: {
    maxWidth: '50%',
    alignSelf: 'flex-start'
  },
  AlignerItemBottom: {
    maxWidth: '50%',
    alignSelf: 'flex-end'
  },
  AlignerButtons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%'
  }
}

class Login extends Component {

  constructor(props) {
    debug('constructor');
    super(props);
  }

  componentDidMount() {
    debug('componentDidMount');
  }

  componentDidUpdate() {
    debug('componentDidUpdate');
  }

  render() {
    return(
      <div style={ styles.Page }>
        <AppBar showMenuIconButton={ false } />
        <div style={ styles.Aligner }>
          <div style={ styles.AlignerItemTop }></div>
          <div style={ styles.AlignerItem }>
            <SparkPanelComponent title="Rentrez vos identifiants" headerHeight={ 80 } rounded={ true }>
              <TextField hintText="Votre adresse email" fullWidth={ true } /><br />
              <TextField hintText="Votre mot de passe" fullWidth={ true } /><br />
              <br />
              <div style={ styles.AlignerButtons }>
                <FlatButton style={ styles.ButtonRegister } label="S'enregistrer" primary={ true } />
                <RaisedButton style={ styles.ButtonLogin } label="Connexion" primary={ true } fullWidth={ false } />
              </div>
            </SparkPanelComponent>
          </div>
          <div style={ styles.AlignerItemBottom }></div>
        </div>
      </div>
    );
  }

}

export default Login;
