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
import SparkLoader from './../Loader';

const debug = Debug('react:spark:application');

class SparkApplication extends Component {

  static propTypes = {
    loading: PropTypes.bool,
    theme: PropTypes.object,
    style: PropTypes.object,
    children: PropTypes.node
  }

  static defaultProps = {
    loading: true,
    theme: sparkTheme
  }

  constructor(props) {
    debug('constructor');
    super(props);
  }

  render() {
    debug('render');
    const loader = new SparkLoader();

    this._style = {
      BackgroundStyle: {
        width: '100%',
        height: '100%',
        padding: 0,
        margin: 0,
        backgroundColor: sparkTheme.palette.canvasColor
      }
    };

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(this.props.theme)}>
        <Loader
          contentStyle={this._style.BackgroundStyle}
          foregroundStyle={this._style.BackgroundStyle}
          backgroundStyle={this._style.BackgroundStyle}
          style={this._style.BackgroundStyle}
          message={loader.render()}
          show={this.props.loading}
          hideContentOnLoad
        >
          <Paper style={this._style.BackgroundStyle}>
            {this.props.children}
          </Paper>
        </Loader>
      </MuiThemeProvider>
    );
  }

}

export default SparkApplication;
