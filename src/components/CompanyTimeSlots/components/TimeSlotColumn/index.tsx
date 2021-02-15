import { useTheme } from 'react-jss';

import { TimeSlotDate } from 'types/companies.type';
import Typography from 'components/Typography';
import ChosenTimeRange from './components/ChosenTimeRange';
import useStyles from './TimeSlotColumn.styles';
import TimeSlot from './components/TimeSlot';
import Date from './components/Date';

/**
 * a timeslot column component
 *
 * @param {TimeSlotDate[]} timeSlotDates
 * @param {number} companyId
 * @param {string} companyName
 * @param {string} chosenStartTime
 * @param {string} chosenEndTime
 * @returns {JSX}
 * @constructor
 */
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
              <TimeSlot
                key={`${companyId}_${timeSlotDate.date}_${timeSlot.startTime}`}
                startTime={timeSlot.startTime}
                endTime={timeSlot.endTime}
                companyId={companyId}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSlotColumn;

TimeSlotColumn.defaultProps = {
  chosenStartTime: '',
  chosenEndTime: '',
};
