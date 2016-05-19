// react
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {fade} from 'material-ui/utils/colorManipulator';
import { Paper, TextField, Snackbar } from 'material-ui';
// packages
import Debug from 'debug';
// local
import Header from './../components/Header';
import RaisedButton from './../components/RaisedButton';
import AdministratorsAPI from './../utils/IndividualsAPI';
import UserStore from './../stores/UserStore';
import { colorAbibaoDarkBlue, colorAbibaoMediumBlue, colorAbibaoWhite, colorAbibaoLightGrey } from './../../css/colors';

const debug = Debug('react:views:login');

const muiTheme = getMuiTheme({
  fontFamily: 'Lato, sans-serif'
});

const styles = {
  paperPage: {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    background: colorAbibaoWhite
  },
  paperContainer: {
    position: 'relative',
    width: 960,
    margin: 'auto',
    padding: 0,
    paddingTop: 50,
    zIndex: 900
  },
  paperTitle: {
    height: 'auto',
    width: 600,
    margin: 'auto',
    padding: 5,
    background: colorAbibaoMediumBlue
  },
  paperBloc: {
    width: 600,
    height: 220,
    margin: 'auto',
    padding: 20,
    background: colorAbibaoLightGrey
  },
  textField: {
    background: colorAbibaoWhite,
    fontSize: '1.25em'
  },
  blocTitle: {
    color: colorAbibaoWhite,
    width: '100%',
    textAlign: 'center'
  },
  underlineStyle: {
    borderColor: colorAbibaoWhite
  },
  underlineFocusStyle: {
    borderColor: colorAbibaoMediumBlue
  },
  buttonLogin: {
    float: 'right',
    background: colorAbibaoWhite,
    height: 48,
    width: 220,
    borderRadius: 10
  },
  buttonLoginLabel: {
    fontSize: '1.25em',
    fontWeight: 800,
    letterSpacing: '.04em',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: colorAbibaoMediumBlue
  },
  toastError: {
    background: colorAbibaoDarkBlue
  }
};

// method to retrieve state from Stores
var getLoginState = function() {
  return {
    loading: false,
    autoHideDuration: 3000,
    open: false,
    message: UserStore.getMessage(),
    token: UserStore.getToken(),
    infos: UserStore.getInfos(),
    connected: UserStore.getConnected()
  };
};

class FluxLogin extends Component {

  constructor(props) {
    debug('constructor()');
    super(props);
    this.state = getLoginState();
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  };
  handleActionTouchTap = () => {
    this.setState({
      open: false,
    });
  };
  handleChangeDuration = (event) => {
    const value = event.target.value;
    this.setState({
      autoHideDuration: value.length > 0 ? parseInt(value) : 0,
    });
  };
  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

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

  loginHandler(event) {
    let email = this.refs.textFieldEmail.input.value;
    let password = this.refs.textFieldPassord.input.value;
    debug('loginHandler() with email=%s and password=%s', email, password);
    this.setState({loading: true})
    event.preventDefault();
    AdministratorsAPI.login(email, password);
  }

  // method to setState based upon store changes
  _onChange() {
    this.setState(getLoginState());
    if (this.state.message!=='') {
      this.handleTouchTap();
    }
    debug('_onChange()', this.state);
  }

  render() {
    debug('render()', this);
    return (
      <MuiThemeProvider muiTheme={ muiTheme }>
        <Paper style={ styles.paperPage } zDepth={ 0 } rounded={ false }>
          <Header />
          <Paper style={ styles.paperContainer } zDepth={ 0 } rounded={ false }>
            <Paper style={ styles.paperTitle } zDepth={ 0 } rounded={ true }>
              <h1 style={ styles.blocTitle }>Rentrez vos identifiants</h1>
            </Paper>
            <Paper style={ styles.paperBloc } zDepth={ 0 } rounded={ true }>
              <TextField fullWidth={ true } underlineStyle={styles.underlineStyle} underlineFocusStyle={styles.underlineFocusStyle} disabled={ this.state.loading } ref="textFieldEmail" hintText="votre adresse email" style={ styles.textField } /><br />
              <br />
              <TextField fullWidth={ true } underlineStyle={styles.underlineStyle} underlineFocusStyle={styles.underlineFocusStyle} disabled={ this.state.loading } ref="textFieldPassord" hintText="votre mot de passe" type="password" style={ styles.textField } /><br />
              <br />
              <RaisedButton label="Connexion" labelStyle={ styles.buttonLoginLabel } style={ styles.buttonLogin } onMouseDown={ this.loginHandler.bind(this) } disabled={ this.state.loading } />
            </Paper>
          </Paper>
          <Snackbar
            bodyStyle={ styles.toastError }
            open={ this.state.open }
            message={ this.state.message }
            action="fermer"
            autoHideDuration={ this.state.autoHideDuration }
            onActionTouchTap={ this.handleActionTouchTap }
            onRequestClose={ this.handleRequestClose }
          />
        </Paper>
      </MuiThemeProvider>
    );
  }

}

export default FluxLogin;
