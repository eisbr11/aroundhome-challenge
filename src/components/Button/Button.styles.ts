import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  button: {
    display: 'inline-block',
    color: (theme) => theme.colorPrimary,
    background: (theme) => theme.colorWhite,
    padding: [24, 32],
    justifyContent: 'center',
    borderRadius: 4,
    textAlign: 'center',
    fontSize: 16,
    border: (theme) => `3px solid ${theme.Primary}`,
  },
});

export default useStyles;
