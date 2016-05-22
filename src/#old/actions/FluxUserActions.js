// react
// packages
import Debug from 'debug';
import _ from 'lodash';
// local
import AppDispatcher from '../dispatcher/AppDispatcher';
import FluxAppConstants from '../constants/FluxAppConstants';

var debug = Debug('react:actions:user');

var FluxUserActions = {

  // login success
  loginSuccess: function(data) {
    debug('loginSuccess() data=%o', data);
    AppDispatcher.handleAction({
      actionType: FluxAppConstants.USER_LOGIN_SUCCESS,
      data: data
    })
  },

  // fail
  fail: function(error) {
    debug('fail() error=%o', error);
    let type = FluxAppConstants.USER_FAIL;
    if (error.message===FluxAppConstants.ERROR_TOKEN_EXPIRED) { type = FluxAppConstants.ERROR_TOKEN_EXPIRED; }
    if (error.message===FluxAppConstants.ERROR_INVALID_TOKEN) { type = FluxAppConstants.ERROR_INVALID_TOKEN; }
    AppDispatcher.handleAction({
      actionType: type,
      data: error
    })
  }

};

module.exports = FluxUserActions;
