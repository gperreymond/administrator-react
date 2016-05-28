// react
import React, { Component } from 'react';
import { Link } from 'react-router';
// packages
// local

class PageNotFound extends React.Component {
  render() {
    return (
      <div>
        <h1>Page Not Found.</h1>
        <p>Go to <Link to="/">Homepage</Link></p>
      </div>
    )
  }
}

export default PageNotFound;
