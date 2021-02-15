import Typography from 'components/Typography';
import { TimeSlotDate } from 'types/companies.type';
import timeStringFormat from 'helper/timeStringFormat';
import useStyles from './Date.styles';

/**
 * shows the date for a column with weekday and date
 *
 * @param {TimeSlotDate} timeSlotDate
 * @returns {JSX}
 * @constructor
 */
const Date = ({
  timeSlotDate,
}: {
  timeSlotDate: TimeSlotDate,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.dayWrapper}>
      <Typography variant="h2" tag="span" className={classes.weekDay}>
        {timeStringFormat.toWeekDay(timeSlotDate.date)}
      </Typography>
      <Typography variant="subtitle" tag="span">
        {timeStringFormat.toDate(timeSlotDate.date)}
      </Typography>
    </div>
  );
};

export default Date;
