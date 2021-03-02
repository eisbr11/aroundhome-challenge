import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapper: {
    fontSize: 24,
    fontWeight: 700,
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: 16,
  },
  label: {
    width: '100%',
    display: 'inline-block',
  },
});

export default useStyles;
