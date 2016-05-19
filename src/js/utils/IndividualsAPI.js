// react
// packages
import JQuery from 'jquery';
import Debug from 'debug';
// local
import FluxUserActions from '../actions/FluxUserActions';

var debug = Debug('react:utils:api:individuals');

module.exports = {
  login(email, password) {
    debug('login() email=%s password=%s', email, password);
    JQuery.ajaxSetup({
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    JQuery.ajax({
      method: 'POST',
      url: 'http://api.pprod.abibao.com/v1/individuals/login',
      data: {
        email,
        password
      }
    })
    .done((data) => {
      debug('login() done data=%s', data.token);
      FluxUserActions.loginSuccess(data);
    })
    .fail((error) => {
      debug('login() fail error=%s', error.responseJSON.message);
      FluxUserActions.fail(error.responseJSON);
    })
  }
};
