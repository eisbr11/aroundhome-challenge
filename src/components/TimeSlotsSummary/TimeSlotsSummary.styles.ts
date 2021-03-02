import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapper: {
    fontSize: 24,
    fontWeight: 700,
    display: 'flex',
    justifyContent: 'space-around',
    padding: 16,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  timeRange: {
    background: (theme) => theme.colorPrimary,
    padding: 8,
    margin: [8, 0],
    borderRadius: 8,
    textAlign: 'center',
  },
  companyName: {
    color: (theme) => theme.colorSecondary,
  },
  appointmentsWrapper: {
    padding: 16,
    flex: '0 1 400px',
    textAlign: 'center',
  },
  backLink: {
    flex: 1,
    flexBasis: '100%',
    textAlign: 'center',
  },
});

export default useStyles;
