import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  pageWrap: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: (theme) => theme.colorWhite,
  },
  main: {
    display: 'flex',
    flex: 1,
    padding: [0, 32],
    background: (theme) => theme.colorWhite,
    flexDirection: 'column',
  },
});

export default useStyles;
