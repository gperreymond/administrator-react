// react
import React from 'react';
import { browserHistory, Router, Route, IndexRoute, Link, withRouter } from 'react-router';
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
// packages
// local
import Login from './containers/Login';
import UserStore from './stores/UserStore';
import './../index.html';
import './../css/app.css';

injectTapEventPlugin();

function requireAuth(nextState, replace) {
  if (!UserStore.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

render((
  <Router history={ browserHistory }>
    <Route path="/" component={ Login } onEnter={ requireAuth } />
    <Route path="/login" component={ Login } />
  </Router>
), document.getElementById('root'));
