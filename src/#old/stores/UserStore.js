// react
import cookie from 'react-cookie';
import { browserHistory } from 'react-router';
// packages
import Debug from 'debug';
import _ from 'lodash';
import { EventEmitter } from 'events';
// local
import AppDispatcher from './../dispatcher/AppDispatcher';
import FluxAppConstants from './../constants/FluxAppConstants';

var debug = Debug('react:stores:user');

// define initial data
var _message = '';
var _token = false;
var _infos = false;
var _connected = false;

// method if success
function loginSuccess(data) {
  debug('loginSuccess() token=%s', data.token);
  _message = '';
  _token = data.token;
  _infos = data.globalInfos
  _connected = true;
  cookie.save('abibao_user_token', _token, { path: '/' });
}

// method if fail
function fail(error) {
  debug('fail() error=%s', error.message);
  if ( error.message===FluxAppConstants.ERROR_BAD_AUTHENTIFICATION) {
    _message = 'Email/Password incorrect(s)'
  } else {
    _message = error.message;
  }
  _token = false;
  _infos = false;
  _connected = false;
}

// extend UserStore with EventEmitter to add eventing capabilities
const UserStore = _.extend({}, EventEmitter.prototype, {

  // ******************************
  // auth
  // ******************************

  loggedIn() {
    var _token = cookie.load('abibao_user_token');
    return !!_token;
  },

  // ******************************
  // user
  // ******************************

  // return message
  getMessage: function() {
    debug('getMessage() _message=%s', _message);
    return _message;
  },

  // return message
  getToken: function() {
    debug('getToken() _token=%s', _token);
    return _token;
  },

  // return infos
  getInfos: function() {
    debug('getInfos() _infos=%o', _infos);
    return _infos;
  },

  // return connected
  getConnected: function() {
    debug('getConnected() _connected=%s', _connected);
    return _connected;
  },

  // emit Change event
  emitChange: function() {
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  debug(action);

  switch(action.actionType) {

    // fail
    case FluxAppConstants.ERROR_TOKEN_EXPIRED:
      cookie.remove('abibao_user_token')
      browserHistory.push('/login');
      break;

    // fail
    case FluxAppConstants.ERROR_INVALID_TOKEN:
      browserHistory.push('/login');
      break;

    // login success
    case FluxAppConstants.USER_LOGIN_SUCCESS:
      loginSuccess(action.data);
      break;

    // fail
    case FluxAppConstants.USER_FAIL:
      fail(action.data);
      break;

    default:
      return true;
  }

  // if action was responded to, emit change event
  UserStore.emitChange();

  return true;

});

module.exports = UserStore;
