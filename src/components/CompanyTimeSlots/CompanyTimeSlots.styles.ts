import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    padding: [16, 0],
    flexWrap: 'wrap',
  },
  submitRow: {
    flex: 1,
    position: 'sticky',
    bottom: 0,
    alignSelf: 'center',
    padding: 16,
  },
});

export default useStyles;
