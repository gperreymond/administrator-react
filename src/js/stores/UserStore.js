// react
import cookie from 'react-cookie';
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
      onReceivedLoading: UserActions.RECEIVED_LOADING
    });
    this.state = {
      message: '',
      loading: false,
      token: false,
      globalInfos: false,
      connected: false
    };
  }

  static loggedIn() {
    debug('loggedIn()');
    var _token = cookie.load('abibao_user_token');
    return !!_token;
  }

  onReceivedLoading(loading) {
    debug('onReceivedLoading() loading=%s', loading);
    this.setState({
      loading: loading
    });
  }

  onReceivedCurrentUser(user) {
    debug('onReceivedCurrentUser() user=%o', user);
    cookie.save('abibao_user_token', user.token, { path: '/' });
    this.setState({
      token: user.token,
      globalInfos: user.globalInfos,
      connected: true
     });
  }

}

export default alt.createStore(UserStore, 'UserStore');
