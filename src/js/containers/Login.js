// react
import React, { Component } from 'react';
// packages
import Debug from 'debug';
// local

const debug = Debug('react:containers:login');

class Login extends Component {

  constructor(props) {
    debug('constructor');
    super(props);
  }

  componentDidMount() {
    debug('componentDidMount');
  }

  componentDidUpdate() {
    debug('componentDidUpdate');
  }

  render() {
    return(
      <h1>LOGIN</h1>
    );
  }

}

export default Login;
