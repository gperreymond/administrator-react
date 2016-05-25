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
    textAlign: 'center',
    position: 'relative',
    width: 350,
    margin: 'auto',
    padding: 0,
    paddingTop: 50,
    zIndex: 900
  },
  title: {
    textAlign: 'center',
    color: colorAbibaoDarkBlue
  },
  subtitle: {
    textAlign: 'center',
    color: colorAbibaoMediumBlue
  },
};

export default styles;
