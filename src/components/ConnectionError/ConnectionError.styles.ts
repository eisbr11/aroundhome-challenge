import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  errorMessage: {
    color: 'red',
    fontWeight: 700,
    textAlign: 'center',
  },
});

export default useStyles;
