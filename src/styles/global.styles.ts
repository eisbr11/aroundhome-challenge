import { createUseStyles } from 'react-jss';
import ptSans from './ptSans.font';

const useStyles = createUseStyles({
  '@global': {
    '@font-face': [ptSans.regular, ptSans.fw700],
    'body, html': {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      margin: 0,
      padding: 0,
      fontFamily: "PT Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue','sans-serif'",
    },
    '*': {
      boxSizing: 'border-box',
    },
    code: {
      fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
    },
    body: {
      color: 'black',
      background: '#333333',
      fontSize: '1.25rem',
      lineHeight: 1.44,
      fontWeight: 400,
    },
    a: {
      textDecoration: 'underline',
    },
  },
});

export default useStyles;
