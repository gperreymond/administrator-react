// react
import cookie from 'react-cookie';
// packages
import Debug from 'debug';
// local
import PubSub from './../utils/ApplicationPubSub';
import ApplicationApiUtils from './../utils/ApplicationApiUtils';

var debug = Debug('react:actions:user');

const onValidateToken = function(message) {
  let token = cookie.load('abibao_user_token');
  ApplicationApiUtils.loginWithToken(token).then((infos) => {
    let user = {
      token: token,
      globalInfos: infos
    }
    debug('onValidateToken user=%o', user);
    cookie.save('abibao_user_token', user.token, { path: '/' });
    this.receivedCurrentUser(user);
    PubSub.publish(PubSub.VALIDATE_TOKEN_COMPLETE, user);
  }).catch((error) => {
    debug('onValidateToken error=%o', error);
    cookie.remove('abibao_user_token');
    PubSub.publish(PubSub.VALIDATE_TOKEN_ERROR, error);
  })
}

class ApplicationActions {

  constructor() {
    PubSub.subscribe(PubSub.VALIDATE_TOKEN, onValidateToken);
  }

}

export default new ApplicationActions();
