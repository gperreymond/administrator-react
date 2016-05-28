// react
import React, { Component, PropTypes } from 'react';
import { Paper } from 'material-ui';
// packages
// local

class SparkPanel extends Component {

  static propTypes = {
    showHeader: PropTypes.bool,
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
    showHeader: true,
    title: 'Panel title',
    rounded: false,
    zDepth: 1,
    width: 500,
    backgroundTitleColor: '#dedede',
    textTitleColor: '#101010',
    backgroundContentColor: '#f0f0f0'
  }

  showHeader() {
    if (this.props.showHeader===true) {
      return(
        <Paper zDepth={ 0 } rounded={ this.props.rounded } style={ this._style.title }>
          <h1 style={ this._style.titleText }>{ this.props.title }</h1>
        </Paper>
      );
    } else {
      return(<div></div>);
    }
  }

  render() {

    this._style = {
      panel: {
        width: this.props.width
      },
      title: {
        background: this.props.backgroundTitleColor,
        textAlign: 'center',
        width: '100%',
        height: 60
      },
      titleText: {
        color: this.props.textTitleColor,
        position: 'relative',
        top: '50%',
        transform: 'translateY(-50%)',
        WebkitTransform: 'translateY(-50%)',
        margin: 'auto',
        padding: 0
      },
      content: {
        padding: 10,
        background: this.props.backgroundContentColor,
        display: 'flex',
        flexDirection: 'column'
      }
    }

    return (
      <Paper zDepth={ this.props.zDepth } rounded={ this.props.rounded } style={ this._style.panel }>
        { this.showHeader(true) }
        <Paper zDepth={ 0 } rounded={ this.props.rounded } style={ this._style.content }>
          { this.props.children }
        </Paper>
      </Paper>
    );

  }

}

export default SparkPanel;
