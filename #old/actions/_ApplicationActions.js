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

  setLoading(value) {
    debug('setLoading=%s', value);
    this.receivedLoading(value);
  }

  setEmailForRegister(e) {
    debug('setEmailForRegister=%s', e.currentTarget.value);
    this.receivedEmailForRegister(e.currentTarget.value);
  }

  getTokenFromCookie(callback) {
    debug('getTokenFromCookie');
    var _token = cookie.load('abibao_user_token');
    callback(_token);
  }

  validateToken(token, callback) {
    debug('validateToken token=%s', token);
    ApplicationApiUtils.loginWithToken(token).then((infos) => {
      let user = {
        token: token,
        globalInfos: infos
      }
      cookie.save('abibao_user_token', user.token, { path: '/' });
      this.receivedCurrentUser(user);
      callback(null);
    }).catch((error) => {
      cookie.remove('abibao_user_token');
      callback(error);
    })
  }

  // email with register
  receivedEmailForRegister(email) {
    debug('receivedEmailForRegister email=%s', email);
    alt.dispatch('ApplicationActions.receivedEmailForRegister', email);
  }

  // actions in progress
  receivedLoading(loading) {
    debug('receivedLoading loading=%s', loading);
    alt.dispatch('ApplicationActions.receivedLoading', loading);
  }

  // good authentification
  receivedCurrentUser(user) {
    debug('receivedCurrentUser user=%o', user);
    alt.dispatch('ApplicationActions.receivedCurrentUser', user);
  }

  // bad authentification
  receivedError(error) {
    debug('receivedError error=%o', error);
    alt.dispatch('ApplicationActions.receivedError', error);
  }

}

export default alt.createActions(ApplicationActions);
