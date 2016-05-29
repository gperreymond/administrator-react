import { theme, colors } from './mui.css';

const styles = {
  theme: theme,
  colors: colors,
  paperApplication: {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: colors.colorAbibaoWhite
  },
  paperContainer: {
    position: 'relative',
    width: 960,
    margin: 'auto',
    padding: 0,
    zIndex: 900,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  contentCenter: {
    margin: 'auto'
  },
  textfield: {
    input: {
      background: colors.colorAbibaoWhite
    },
    default: {
      fontSize: '1.25em'
    },
    underlineStyle: {
      borderColor: colors.colorAbibaoWhite,
      color: colors.colorAbibaoGrey
    },
    underlineFocusStyle: {
      borderColor: colors.colorAbibaoMediumBlue
    }
  }
};

export default styles;
