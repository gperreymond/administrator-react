// react
// packages
import Debug from 'debug';
// local
import xhr from './xhr';

var debug = Debug('react:utils:api:user');

const searchParams = function(params) {
  return Object.keys(params).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
  }).join('&');
}

export default {
  login(email, password) {
    debug('login() email=%s', email);
    let params = {
      method: 'post',
      body: searchParams({
        email: email,
        password: password
      })
    }
    return xhr('http://api.pprod.abibao.com/v1/individuals/login', params);
  },
  loginWithToken(token) {
    debug('loginWithToken() token=%s', token);
    let params = {
      method: 'get',
      headers: {
        'Authorization': token
      }
    }
    return xhr('http://api.pprod.abibao.com/v1/auth/global/informations', params);
  },
  loadSurvey(token, urn) {
    debug('loadSurvey() urn=%s', urn);
    let params = {
      method: 'get',
      headers: {
        'Authorization': token
      }
    }
    return xhr('http://api.pprod.abibao.com/v1/auth/surveys/'+urn, params);
  }
};
