import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  pageWrap: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: '#C0FFEE',
  },
  container: {
    display: 'flex',
    flex: 1,
    background: 'green',
  },
  h1: {
    fontStyle: 'italic',
  },
});

export default useStyles;
