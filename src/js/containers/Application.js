// react
import React, { Component } from 'react';
import { AppBar } from 'material-ui';
// packages
import Debug from 'debug';
import connectToStores from 'alt-utils/lib/connectToStores';
// local
import SparkApplicationComponent from './../components/spark/Application';
import ApplicationStore from './../stores/ApplicationStore';
import ApplicationActions from './../actions/ApplicationActions';

const debug = Debug('react:containers:application');

const styles = {
  AppBar: {
    width: '100%',
    position: 'fixed',
    top: 0
  }
}

class Application extends Component {

  static getStores() {
    return [ApplicationStore];
  }

  static getPropsFromStores() {
    return ApplicationStore.getState();
  }

  constructor(props) {
    debug('constructor');
    super(props);
  }

  componentDidMount() {
    debug('componentDidMount');
    ApplicationActions.setLoading(false);
  }

  componentDidUpdate() {
    debug('componentDidUpdate');
  }

  render() {
    return(
      <SparkApplicationComponent loading={ this.props.loading }>
        <AppBar style={ styles.AppBar } showMenuIconButton={ false } />
        { this.props.children }
      </SparkApplicationComponent>
    )
  }

}

export default connectToStores(Application);
