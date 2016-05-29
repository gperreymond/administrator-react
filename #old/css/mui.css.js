// react
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// packages
// local
import { colorAbibaoLightGrey, colorAbibaoMediumGrey, colorAbibaoGrey, colorAbibaoMediumBlue, colorAbibaoDarkBlue, colorAbibaoOrange, colorAbibaoWhite } from './colors.css';

const _theme = getMuiTheme({
  fontFamily: 'Lato, sans-serif',
});

const _colors = {
  colorAbibaoLightGrey: colorAbibaoLightGrey,
  colorAbibaoMediumGrey: colorAbibaoMediumGrey,
  colorAbibaoGrey: colorAbibaoGrey,
  colorAbibaoMediumBlue: colorAbibaoMediumBlue,
  colorAbibaoDarkBlue: colorAbibaoDarkBlue,
  colorAbibaoOrange: colorAbibaoOrange,
  colorAbibaoWhite: colorAbibaoWhite
};

export const theme = _theme;
export const colors = _colors;
