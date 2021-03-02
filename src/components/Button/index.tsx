import React from 'react';
import { useTheme } from 'react-jss';

import useStyles from './Button.styles';

const Button = ({
  children,
}: {
  children: React.ReactNode,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <button className={classes.button} type="button">
      {children}
    </button>
  );
};

export default Button;
