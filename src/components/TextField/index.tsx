import { Field } from 'formik';

import useStyles from './TextField.styles';

const TextField = ({
  type,
  name,
  label,
}: {
  type: string,
  name: string,
  label: string,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <span className={classes.label}>{label}</span>
      <Field className={classes.input} type={type} name={name} />
    </div>
  );
};

export default TextField;
