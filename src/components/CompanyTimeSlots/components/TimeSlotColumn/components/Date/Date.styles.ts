import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  dayWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  weekDay: {
    fontWeight: 700,
  },
});

export default useStyles;
