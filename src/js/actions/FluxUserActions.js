// react
import cookie from 'react-cookie';
// packages
import Debug from 'debug';
import _ from 'lodash';
// local
import AppDispatcher from '../dispatcher/AppDispatcher';
import FluxUserConstants from '../constants/FluxUserConstants';

var debug = Debug('react:actions:user');

var FluxUserActions = {

  // login success
  loginSuccess: function(data) {
    debug('loginSuccess() data=%o', data);
    AppDispatcher.handleAction({
      actionType: FluxUserConstants.USER_LOGIN_SUCCESS,
      data: data
    })
  },

  // fail
  fail: function(error) {
    debug('fail() error=%o', error);
    let type = FluxUserConstants.USER_FAIL;
    if (error.message===FluxUserConstants.ERROR_INVALID_TOKEN) { type = FluxUserConstants.ERROR_INVALID_TOKEN; }
    AppDispatcher.handleAction({
      actionType: type,
      data: error
    })
  }

};

module.exports = FluxUserActions;
