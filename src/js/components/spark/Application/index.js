// react
import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Paper } from 'material-ui';
// packages
import Debug from 'debug';
import Loader from 'react-loader-advanced';
// local
import sparkTheme from './../theme.css';
import SkinApplication from './skin.css';
import SparkLoader from './../Loader';

const debug = Debug('react:spark:application');

const muiTheme = getMuiTheme(sparkTheme);

class SparkApplication extends Component {

  static propTypes = {
    loading: PropTypes.bool,
    style: PropTypes.object,
    children: PropTypes.node
  }

  static defaultProps = {
    loading: true
  }

  constructor(props) {
    debug('constructor');
    super(props);
  }

  render() {
    debug('render');
    const loader = new SparkLoader();
    return (
      <MuiThemeProvider muiTheme={ muiTheme }>
        <Loader backgroundStyle={ {backgroundColor: sparkTheme.palette.canvasColor} } style={ SkinApplication.page } message={ loader.render() } show={ this.props.loading } hideContentOnLoad={ true }>
          <Paper style={ SkinApplication.page }>
            { this.props.children }
          </Paper>
        </Loader>
      </MuiThemeProvider>
    );
  }

}

export default SparkApplication;
