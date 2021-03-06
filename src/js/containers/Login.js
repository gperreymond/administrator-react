// react
import React, { Component } from 'react';
import { TextField, RaisedButton, FlatButton } from 'material-ui';
import MediaQuery from 'react-responsive';
// packages
import logger from 'debug';
// local
import SparkPanel from './../components/spark/Panel';
import SparkBoxCenter from './../components/spark/BoxCenter';
import SparkHBox from './../components/spark/HBox';

const debug = logger('react:containers:login');

const styles = {
  Page: {
    width: '100%',
    height: '100%',
    padding: 0,
    margin: 0,
    marginTop: -120
  }
};

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
    return (
      <div style={styles.Page}>
        <MediaQuery minDeviceWidth={641}>
          <SparkBoxCenter>
            <SparkPanel title="Rentrez vos identifiants" width={450} headerHeight={80} rounded>
              <TextField hintText="Votre adresse email" fullWidth /><br />
              <TextField hintText="Votre mot de passe" fullWidth /><br />
              <br />
              <SparkHBox width={'100%'} justifyContent="space-between">
                <FlatButton style={styles.ButtonRegister} label="S'enregistrer" primary />
                <RaisedButton
                  style={styles.ButtonLogin}
                  label="Connexion"
                  primary
                  fullWidth={false}
                />
              </SparkHBox>
            </SparkPanel>
          </SparkBoxCenter>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={640}>
          <SparkPanel title="Rentrez vos identifiants" width={'100%'} headerHeight={80} rounded>
            <TextField hintText="Votre adresse email" fullWidth /><br />
            <TextField hintText="Votre mot de passe" fullWidth /><br />
            <br />
            <SparkHBox width={'100%'} justifyContent="space-between">
              <FlatButton style={styles.ButtonRegister} label="S'enregistrer" primary />
              <RaisedButton
                style={styles.ButtonLogin}
                label="Connexion"
                primary
                fullWidth={false}
              />
            </SparkHBox>
          </SparkPanel>
        </MediaQuery>
      </div>
    );
  }

}

export default Login;
