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
  }
};
