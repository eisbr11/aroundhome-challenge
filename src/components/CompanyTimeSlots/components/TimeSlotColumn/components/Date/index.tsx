import moment from 'moment';

import Typography from 'components/Typography';
import { TimeSlotDate } from 'types/companies.type';
import useStyles from './Date.styles';

const Date = ({
  timeSlotDate,
}: {
  timeSlotDate: TimeSlotDate,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.dayWrapper}>
      <Typography variant="h2" tag="span" className={classes.weekDay}>
        {moment(timeSlotDate.date).format('dddd')}
      </Typography>
      <Typography variant="subtitle" tag="span" className={classes.date}>
        {moment(timeSlotDate.date).format('DD.MM YYYY')}
      </Typography>
    </div>
  );
};

export default Date;
