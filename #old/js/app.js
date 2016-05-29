// react
import React from 'react';
import { browserHistory, Router, Route, IndexRoute, Link, withRouter } from 'react-router';
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
// packages
import Debug from 'debug';
// local
import Application from './containers/Application';
import PageNotFound from './containers/PageNotFound';
import Login from './containers/Login';
import Survey from './containers/Survey';
import ApplicationActions from './actions/ApplicationActions';
import './../index.html';
import './../css/reset.css';

const debug = Debug('react:application');

injectTapEventPlugin();

function onEnterApplication(nextState, replace) {
  debug('onEnterApplication');
  ApplicationActions.getTokenFromCookie(function(token) {
    debug('token=%s', token);
    ApplicationActions.validateToken(token, function(error) {
      if (error) {
        debug('onEnterApplication() error=%o', error);
        browserHistory.push('/login');
      }
    });
  });
}

/* function requireAuth(nextState, replace) {
  if (!UserStore.loggedIn()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
} */

render((
  <Router history={ browserHistory }>
    <Route path="/" component={ Application } onEnter={ onEnterApplication }>
      <Route path="/survey" component={ Survey } />
      <Route path="/login" component={ Login } />
    </Route>
    <Route path="*" component={ PageNotFound } />
  </Router>
), document.getElementById('root'));
