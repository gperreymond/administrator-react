// react
import React from 'react';
import { CircularProgress } from 'material-ui';
// packages
// local

const SparkLoader = React.createClass({

  render() {
    return(
      <CircularProgress size={ 2 } />
    );
  }

});

export default SparkLoader;
