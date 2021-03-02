import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  formWrapper: {
    background: (theme) => theme.colorGrayLighter,
    padding: 16,
    flex: '0 1 400px',
  },
});

export default useStyles;
