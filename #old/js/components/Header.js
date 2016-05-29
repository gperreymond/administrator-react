// react
import React, { Component } from 'react';
import { AppBar, Paper } from 'material-ui';
// packages
// local
import { colorAbibaoDarkBlue, colorAbibaoMediumBlue } from './../../css/colors.css';

const styles = {
  paperPage: {
    width: '100%',
    height: 120,
    margin: 0,
    padding: 0,
    background: '#ffffff'
  },
  headerRight: {
    position: 'absolute',
    width: '100%',
    height: 120,
    background: colorAbibaoMediumBlue,
    WebkitClipPath: 'polygon(100% 110px, 100% 0px, 0px 0px, 0px 30%)',
    clipPath: 'polygon(100% 110px, 100% 0px, 0px 0px, 0px 30%)',
    zIndex: 700
  },
  headerLeft: {
    position: 'absolute',
    width: '100%',
    height: 120,
    background: colorAbibaoDarkBlue,
    WebkitClipPath: 'polygon(100% 70px, 100% 0, 0 0, 0 120px)',
    clipPath: 'polygon(100% 70px, 100% 0, 0 0, 0 120px)',
    zIndex: 800
  },
  logo: {
    position: 'relative',
    width: 960,
    height: 60,
    margin: 'auto',
    padding: 20,
    zIndex: 900
  },
  logoImg: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    margin: 'auto'
  }
};

class Header extends Component {
  render() {
    return (
      <Paper style={ styles.paperPage } zDepth={ 0 } rounded={ false }>
        <AppBar showMenuIconButton={ false } style={ styles.headerRight } />
        <AppBar showMenuIconButton={ false } style={ styles.headerLeft } />
        <div style={ styles.logo }>
          <img style={ styles.logoImg } src="./img/abibao_logo.png" />
        </div>
      </Paper>
    );
  }
}

export default Header;
