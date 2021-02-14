import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    background: (theme) => theme.colorWhite,
    borderRadius: 4,
  },
  label: {
    color: (theme) => theme.colorPrimary,
    textAlign: 'center',
    fontWeight: '700',
    padding: 8,
  },
  chosenDate: {
    color: (theme) => theme.colorPrimary,
    textAlign: 'center',
    marginBottom: 4,
  },
});

export default useStyles;
