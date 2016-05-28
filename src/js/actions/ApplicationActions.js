// react
import cookie from 'react-cookie';
import { browserHistory } from 'react-router';
// packages
import Debug from 'debug';
// local
import alt from './../alt';
import ApplicationApiUtils from './../utils/ApplicationApiUtils';

var debug = Debug('react:actions:user');

class ApplicationActions {

  constructor() {
  }

  getTokenFromCookie(callback) {
    debug('getTokenFromCookie()');
    this.receivedLoading(true);
    var _token = cookie.load('abibao_user_token');
    callback(_token);
  }

  validateToken(token, callback) {
    debug('validateToken() token=%s', token);
    this.receivedLoading(true);
    ApplicationApiUtils.loginWithToken(token)
    .then((infos) => {
      let user = {
        token: token,
        globalInfos: infos
      }
      cookie.save('abibao_user_token', user.token, { path: '/' });
      this.receivedCurrentUser(user);
      callback(null);
    })
    .catch((error) => {
      this.receivedLoading(false);
      cookie.remove('abibao_user_token');
      callback(error);
    })
  }

  login(email, password) {
    debug('login() email=%s', email);
    this.receivedLoading(true);
    cookie.remove('abibao_user_token');
    ApplicationApiUtils.login(email, password).then((user) => {
      cookie.save('abibao_user_token', user.token, { path: '/' });
      this.receivedCurrentUser(user);
      browserHistory.push('/');
    }).catch((error) => {
      this.receivedError(error);
    });
  }

  loadSurvey(token, urn) {
    debug('loadSurvey() urn=%s', urn);
    // this.receivedLoading(true);
    ApplicationApiUtils.loadSurvey(token, urn).then((survey) => {
      this.receivedCurrentSurvey(survey);
    }).catch((error) => {
      this.receivedError(error);
    });
  }

  // close toast
  handleRequestClose() {
    debug('handleRequestClose()');
    alt.dispatch('ApplicationActions.handleRequestClose');
  }

  // actions in progress
  receivedLoading(loading) {
    debug('receivedLoading() loading=%s', loading);
    alt.dispatch('ApplicationActions.receivedLoading', loading);
  }

  // good authentification
  receivedCurrentUser(user) {
    debug('receivedCurrentUser() user=%o', user);
    alt.dispatch('ApplicationActions.receivedCurrentUser', user);
    this.receivedLoading(false);
  }

  // bad authentification
  receivedError(error) {
    debug('receivedError() error=%o', error);
    alt.dispatch('ApplicationActions.receivedError', error);
    this.receivedLoading(false);
  }

  // survey to loading
  receivedCurrentSurvey(survey) {
    debug('receivedCurrentSurvey() survey=%o', survey);
    alt.dispatch('ApplicationActions.receivedCurrentSurvey', survey);
    // this.receivedLoading(false);
  }
}

export default alt.createActions(ApplicationActions);
