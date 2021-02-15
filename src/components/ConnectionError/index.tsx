import Typography from 'components/Typography';
import useStyles from './ConnectionError.styles';

/**
 * Connection Error Message Component
 *
 * @returns {JSX}
 * @constructor
 */
const ConnectionError = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Typography className={classes.errorMessage}>
        Es konnte keine Verbindung zum Server hergestellt werden.
      </Typography>
    </div>
  );
};

export default ConnectionError;
