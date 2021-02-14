import useStyles from './ChosenTimeRange.styles';

const ChosenTimeRange = ({
  startTime = '',
  endTime = '',
} : {
  startTime?: string | null,
  endTime?: string | null
}) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      {`${startTime} - ${endTime}`}
    </div>
  );
};

export default ChosenTimeRange;
