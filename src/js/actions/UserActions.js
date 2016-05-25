// react
import cookie from 'react-cookie';
import { browserHistory } from 'react-router';
// packages
import Debug from 'debug';
// local
import alt from './../alt';
import UserApiUtils from './../utils/UserApiUtils';

var debug = Debug('react:actions:user');

class UserActions {

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
    UserApiUtils.loginWithToken(token).then((infos) => {
      let user = {
        token: token,
        globalInfos: infos
      }
      cookie.save('abibao_user_token', user.token, { path: '/' });
      this.receivedCurrentUser(user);
      browserHistory.push('/survey');
    })
  }

  login(email, password) {
    debug('login() email=%s', email);
    this.receivedLoading(true);
    cookie.remove('abibao_user_token');
    UserApiUtils.login(email, password).then((user) => {
      cookie.save('abibao_user_token', user.token, { path: '/' });
      this.receivedCurrentUser(user);
      browserHistory.push('/survey');
    }).catch((error) => {
      this.receivedError(error);
    });
  }

  // close toast
  handleRequestClose() {
    debug('handleRequestClose()');
    alt.dispatch('UserActions.handleRequestClose');
  }

  // actions in progress
  receivedLoading(loading) {
    debug('receivedLoading() loading=%s', loading);
    alt.dispatch('UserActions.receivedLoading', loading);
  }

  // good authentification
  receivedCurrentUser(user) {
    debug('receivedCurrentUser() user=%o', user);
    alt.dispatch('UserActions.receivedCurrentUser', user);
    this.receivedLoading(false);
  }

  // bad authentification
  receivedError(error) {
    debug('receivedError() error=%o', error);
    alt.dispatch('UserActions.receivedError', error);
    this.receivedLoading(false);
  }

}

export default alt.createActions(UserActions);
