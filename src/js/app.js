// react
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { browserHistory, Router, Route, IndexRoute, withRouter } from 'react-router';
import { render } from 'react-dom';
// packages
import Debug from 'debug';
// local
import reset from './../css/reset.css';
import Application from './containers/Application';
import Login from './containers/Login';
import ApplicationActions from './actions/ApplicationActions';

const debug = Debug('react:router');

injectTapEventPlugin();

function onEnterRoute(nextState, replace) {
  ApplicationActions.setLoading(true);
  ApplicationActions.getTokenFromCookie(function(token) {
    ApplicationActions.validateToken(token, function(error) {
      if (error) {
        debug('onEnterState error=%o', error);
        browserHistory.push('/login');
      } else {
        debug('onEnterState token=%s', token);
      }
    });
  });
}

render((
  <Router history={ browserHistory }>
    <Route path="/" component={ Application } onEnter={ onEnterRoute }>
      <Route path="/login" component={ Login } />
    </Route>
  </Router>
), document.getElementById('root'));
