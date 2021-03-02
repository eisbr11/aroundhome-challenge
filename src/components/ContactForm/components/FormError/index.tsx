import Typography from 'components/Typography';
import useStyles from './FormError.styles';

const FormError = ({
  children,
}: {
  children: React.ReactNode,
}) => {
  const classes = useStyles();
  return (
    <Typography tag="span" variant="subtitle" className={classes.errorMessage}>
      {children}
    </Typography>
  );
};

export default FormError;
