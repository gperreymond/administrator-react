// react
// packages
import Debug from 'debug';
// local
import alt from './../alt';
import UserActions from './../actions/UserActions';

var debug = Debug('react:stores:user');

class UserStore {

  constructor() {
    this.bindListeners({
      onReceivedCurrentUser: UserActions.RECEIVED_CURRENT_USER,
      onReceivedLoading: UserActions.RECEIVED_LOADING,
      onReceivedError: UserActions.RECEIVED_ERROR,
      onHandleRequestClose:  UserActions.HANDLE_REQUEST_CLOSE
    });
    this.state = {
      // Snackbar
      toastError: false,
      toastMessage: '',
      autoHideDuration: 2000,
      // Loading state
      loading: false,
      // User
      token: false,
      globalInfos: false,
      connected: false
    };
  }

  /* static loggedIn() {
    debug('loggedIn()');
    var _token = cookie.load('abibao_user_token');
    return !!_token;
  } */

  onHandleRequestClose() {
    this.setState({
      toastError: false,
      toastMessage: ''
    });
  }

  onReceivedLoading(loading) {
    debug('onReceivedLoading() loading=%s', loading);
    this.setState({
      loading: loading
    });
  }

  onReceivedCurrentUser(user) {
    debug('onReceivedCurrentUser() user=%o', user);
    this.setState({
      token: user.token,
      globalInfos: user.globalInfos,
      connected: true
    });
  }

  onReceivedError(error) {
    debug('onReceivedError() error=%o', error);
    this.setState({
      toastError: true,
      toastMessage: error.message
    });
  }
}

export default alt.createStore(UserStore, 'UserStore');
