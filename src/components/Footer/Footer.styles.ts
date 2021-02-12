import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  footer: {
    display: 'flex',
    color: '#FFFFFF',
    background: (theme) => theme.colorPrimary,
    padding: [24, 32],
    justifyContent: 'center',
  },
});

export default useStyles;
