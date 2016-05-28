// react
import React, { Component, PropTypes } from 'react';
import { Paper } from 'material-ui';
// packages
// local

class SparkPanel extends Component {

  static propTypes = {
    title: PropTypes.string,
    rounded: PropTypes.bool,
    zDepth: PropTypes.number,
    width: PropTypes.number,
    backgroundTitleColor: PropTypes.string,
    textTitleColor: PropTypes.string,
    backgroundContentColor: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node
  }

  static defaultProps = {
    title: 'New title',
    rounded: false,
    zDepth: 1,
    width: 650,
    backgroundTitleColor: '#dedede',
    textTitleColor: '#101010',
    backgroundContentColor: '#f0f0f0'
  }

  render() {
    const {
      title,
      rounded,
      zDepth,
      width,
      backgroundTitleColor,
      textTitleColor,
      backgroundContentColor,
      children,
      style
    } = this.props;

    const _style = {
      panel: {
        width: width
      },
      title: {
        background: backgroundTitleColor,
        textAlign: 'center',
        width: '100%',
        height: 60
      },
      titleText: {
        color: textTitleColor,
        position: 'relative',
        top: '50%',
        transform: 'translateY(-50%)',
        WebkitTransform: 'translateY(-50%)',
        margin: 'auto',
        padding: 0
      },
      content: {
        padding: 10,
        background: backgroundContentColor,
      }
    }

    return (
      <Paper zDepth={ zDepth } rounded={ rounded } style={ _style.panel }>
        <Paper zDepth={ 0 } rounded={ rounded } style={ _style.title }>
          <h1 style={ _style.titleText }>{ title }</h1>
        </Paper>
        <Paper zDepth={ 0 } rounded={ rounded } style={ _style.content }>
          { children }
        </Paper>
      </Paper>
    );
  }

}

export default SparkPanel;
