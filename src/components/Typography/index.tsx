import React from 'react';

import { useTheme } from 'react-jss';
import { TypographyProps } from './Typography.types';
import useStyles from './Typography.styles';

const Typography = ({
  tag = 'p',
  variant = 'body',
  ...props
}: TypographyProps) => {
  const CustomTag = tag as keyof JSX.IntrinsicElements;
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <CustomTag className={classes[variant]} {...props} />
  );
};

export default Typography;
