import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    padding: [0],
    flexDirection: 'column',
    margin: [0, 8],
    flex: '0 1 100%',
    minWidth: 160,

    '@media (min-width: 768px)': {
      flexBasis: 200,
    },
  },
  stickyInfos: {
    position: 'sticky',
    top: 0,
    left: 0,
    right: 0,
    background: (theme) => theme.colorPrimary,
    marginBottom: 24,
    border: (theme) => `3px solid ${theme.colorPrimary}`,
    borderRadius: 4,
  },
  companyWrapper: {
    background: '#AAA',
  },
  company: {
    color: (theme) => theme.colorSecondary,
    textAlign: 'center',
  },
  timeslotWrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 16,
  },
});

export default useStyles;
