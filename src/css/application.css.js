import { theme, colors } from './mui.css';

const styles = {
  theme: theme,
  colors: colors,
  paperApplication: {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    background: colors.colorAbibaoWhite
  },
  paperContainer: {
    position: 'relative',
    width: 960,
    margin: 'auto',
    padding: 0,
    paddingTop: 50,
    zIndex: 900
  },
  paperContainerLoader: {
    textAlign: 'center',
    position: 'relative',
    width: 350,
    margin: 'auto',
    padding: 0,
    paddingTop: 50,
    background: '#ffcc00'
  },
  button: {
    content: {

    },
    label: {

    }
  },
  input: {

  },
  title: {
    textAlign: 'center',
    color: colors.colorAbibaoDarkBlue
  }
};

export default styles;
