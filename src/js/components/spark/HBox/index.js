// react
import React, { Component, PropTypes } from 'react';
import { Paper } from 'material-ui';
// packages
// local
import baseTheme from '../theme.css'

class SparkHBox extends Component {

  static propTypes = {
    justifyContent: PropTypes.string,
    width: PropTypes.number
  }

  static defaultProps = {
    justifyContent: 'flex-start',
    width: '100%'
  }

  render() {

    this._style = {
      Container: {
        width: this.props.width,
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: this.props.justifyContent,
        border: 'solid red 2'
      }
    }

    return (
      <div style={ this._style.Container }>
        { this.props.children }
      </div>
    );

  }

}

export default SparkHBox;
