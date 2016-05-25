// react
import React from 'react';
import { browserHistory, Router, Route, IndexRoute, Link, withRouter } from 'react-router';
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
// packages
import Debug from 'debug';
// local
import Homepage from './containers/Homepage';
import Login from './containers/Login';
import Survey from './containers/Survey';
import UserActions from './actions/UserActions';
import './../index.html';
import './../css/reset.css';

const debug = Debug('react:application');

injectTapEventPlugin();

function onEnterHomepage(nextState, replace) {
  debug('onEnterHomepage');
  UserActions.getTokenFromCookie(function(token) {
    debug('token=%s', token);
    UserActions.validateToken(token);
  });
}

function onEnterSurvey(nextState, replace) {
  debug('onEnterSurvey');
}

function onEnterLogin(nextState, replace) {
  debug('onEnterLogin');
}

/*
function requireAuth(nextState, replace) {
  if (!UserStore.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
*/

render((
  <Router history={ browserHistory }>
    <Route path="/" component={ Homepage } onEnter={ onEnterHomepage } />
    <Route path="/survey" component={ Survey } onEnter={ onEnterSurvey } />
    <Route path="/login" component={ Login } onEnter={ onEnterLogin } />
  </Router>
), document.getElementById('root'));
