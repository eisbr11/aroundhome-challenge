import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  timeChoose: {
    border: (theme) => `3px solid ${theme.colorGrayLight}`,
    flex: 1,
    padding: 8,
    margin: [4, 0],
    display: 'flex',
    justifyContent: 'center',
    transition: 'border-color 300ms ease',
    borderRadius: 4,
    background: (theme) => theme.colorWhite,
    color: (theme) => theme.colorPrimary,

    '&:hover': {
      borderColor: (theme) => theme.colorPrimary,
    },
  },
  timeChooseActive: {
    background: (theme) => theme.colorPrimary,
    color: (theme) => theme.colorWhite,
    borderColor: (theme) => theme.colorPrimary,
  },
  timeRange: {
    textAlign: 'center',
    color: 'inherit',
  },
});

export default useStyles;
