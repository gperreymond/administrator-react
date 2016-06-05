// react
import React, { Component, PropTypes } from 'react';
import { Paper } from 'material-ui';
// packages
// local
import baseTheme from '../theme.css'

class SparkBoxCenter extends Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  render() {

    this._style = {
      Container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
      },
      AlignerItem: {
        maxWidth: '50%'
      },
      AlignerItemTop: {
        maxWidth: '50%',
        alignSelf: 'flex-start'
      },
      AlignerItemBottom: {
        maxWidth: '50%',
        alignSelf: 'flex-end'
      },
      AlignerButtons: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        width: '100%'
      }
    }

    return (
      <div style={ this._style.Container }>
        <div style={ this._style.AlignerItemTop }></div>
        <div style={ this._style.AlignerItem }>
          { this.props.children }
        </div>
        <div style={ this._style.AlignerItemBottom }></div>
      </div>
    );

  }

}

export default SparkBoxCenter;
