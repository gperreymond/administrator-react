// react
import cookie from 'react-cookie';
import { browserHistory } from 'react-router'
// packages
import JQuery from 'jquery';
import Debug from 'debug';
// local
import FluxUserActions from '../actions/FluxUserActions';

var debug = Debug('react:utils:api:auth');

var _token = cookie.load('abibao_user_token');

module.exports = {
  getGlobalInformations() {
    debug('getGlobalInformations() _token=%s', _token);
    JQuery.ajaxSetup({
      headers: {
        'Authorization': _token,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    JQuery.ajax({
      method: 'GET',
      url: 'http://api.pprod.abibao.com/v1/auth/global/informations',
    })
    .done((data) => {
      let newdata = {
        token: _token,
        globalInfos: data
      };
      debug('getGlobalInformations() done data=%o', newdata);
      FluxUserActions.loginSuccess(newdata);
    })
    .fail((error) => {
      debug('getGlobalInformations() fail error=%s', error.responseJSON.message);
      FluxUserActions.fail(error.responseJSON);
    })
  }
};
