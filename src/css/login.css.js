import { colorAbibaoDarkBlue, colorAbibaoMediumBlue, colorAbibaoWhite, colorAbibaoLightGrey } from './colors.css';

const styles = {
  paperPage: {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    background: colorAbibaoWhite
  },
  paperContainer: {
    position: 'relative',
    width: 960,
    margin: 'auto',
    padding: 0,
    paddingTop: 50,
    zIndex: 900
  },
  paperTitle: {
    height: 'auto',
    width: 600,
    margin: 'auto',
    padding: 5,
    background: colorAbibaoMediumBlue
  },
  paperBloc: {
    width: 600,
    height: 220,
    margin: 'auto',
    padding: 20,
    background: colorAbibaoLightGrey
  },
  textField: {
    background: colorAbibaoWhite,
    fontSize: '1.25em'
  },
  blocTitle: {
    color: colorAbibaoWhite,
    width: '100%',
    textAlign: 'center'
  },
  underlineStyle: {
    borderColor: colorAbibaoWhite
  },
  underlineFocusStyle: {
    borderColor: colorAbibaoMediumBlue
  },
  buttonLogin: {
    float: 'right',
    background: colorAbibaoWhite,
    height: 48,
    width: 220,
    borderRadius: 10
  },
  buttonLoginLabel: {
    fontSize: '1.25em',
    fontWeight: 800,
    letterSpacing: '.04em',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: colorAbibaoMediumBlue
  },
  toastError: {
    background: colorAbibaoDarkBlue
  }
};

export default styles;
