// react
// packages
import Debug from 'debug';
// local
import alt from './../alt';
import UserApiUtils from './../utils/UserApiUtils';

var debug = Debug('react:actions:user');

class UserActions {

  constructor() {
  }

  login(email, password) {
    debug('login() email=%s', email);
    this.receivedLoading(true);
    UserApiUtils.login(email, password).then((user) => {
      this.receivedCurrentUser(user);
    }).catch((error) => {
      debug(error);
    });
  }

  receivedLoading(loading) {
    debug('receivedLoading() loading=%s', loading);
    alt.dispatch('UserActions.receivedLoading', loading);
  }

  receivedCurrentUser(user) {
    debug('receivedCurrentUser() user=%o', user);
    alt.dispatch('UserActions.receivedCurrentUser', user);
    this.receivedLoading(false);
  }

}

export default alt.createActions(UserActions);
