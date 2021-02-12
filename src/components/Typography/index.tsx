import React from 'react';

import { TypographyProps } from './Typography.types';
import useStyles from './Typography.styles';

const Typography = ({
  tag = 'p',
  variant = 'body',
  ...props
}: TypographyProps) => {
  const CustomTag = tag as keyof JSX.IntrinsicElements;
  const classes = useStyles();

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <CustomTag className={classes[variant]} {...props} />
  );
};

export default Typography;
