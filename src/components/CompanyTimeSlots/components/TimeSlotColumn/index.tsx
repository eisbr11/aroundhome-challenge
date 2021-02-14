import { useTheme } from 'react-jss';
import moment from 'moment';
import 'moment/locale/de';

import { TimeSlotDate } from 'types/companies.type';
import Typography from 'components/Typography';
import ChosenTimeRange from '../ChosenTimeRange';
import useStyles from './TimeSlotColumn.styles';
import TimeSlot from './components/TimeSlot';
import Date from './components/Date';

const TimeSlotColumn = ({
  timeSlotDates = [],
  companyId,
  companyName,
  chosenStartTime = '',
  chosenEndTime = '',
} : {
  timeSlotDates: TimeSlotDate[],
  companyId: number,
  companyName: string,
  chosenStartTime?: string,
  chosenEndTime?: string,
}) => {
  moment.locale('de');
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <div className={classes.wrapper}>
      <div className={classes.stickyInfos}>
        <Typography className={classes.company} variant="h1">{companyName}</Typography>
        <ChosenTimeRange startTime={chosenStartTime} endTime={chosenEndTime} />
      </div>
      <div>
        {timeSlotDates.map((timeSlotDate) => (
          <div className={classes.timeslotWrapper} key={`${companyId}_${timeSlotDate.date}`}>
            <Date timeSlotDate={timeSlotDate} />
            {timeSlotDate.timeSlots.map((timeSlot) => (
              <TimeSlot key={`${companyId}_${timeSlotDate.date}_${timeSlot.startTime}`} startTime={timeSlot.startTime} endTime={timeSlot.endTime} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSlotColumn;

TimeSlotColumn.defaultProps = {
  chosenStartTime: '2018-07-09T08:00:00.000+02:00',
  chosenEndTime: '2018-07-09T09:30:00.000+02:00',
};
