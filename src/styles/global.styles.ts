import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  '@global': {
    'body, html': {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      margin: 0,
      padding: 0,
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue','sans-serif'",
    },
    code: {
      fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
    },
    body: {
      color: 'red',
      background: '#333333',
    },
    a: {
      textDecoration: 'underline',
    },
  },
});

export default useStyles;
