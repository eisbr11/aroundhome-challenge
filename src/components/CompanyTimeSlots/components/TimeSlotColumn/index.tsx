import moment from 'moment';
import 'moment/locale/de';

import { TimeSlotDate } from 'types/companies.type';
import Typography from 'components/Typography';
import ChosenTimeRange from '../ChosenTimeRange';

const TimeSlotColumn = ({
  timeSlotDates = [],
  companyId,
  companyName,
  chosenStartTime,
  chosenEndTime,
} : {
  timeSlotDates: TimeSlotDate[],
  companyId: number,
  companyName: string,
  chosenStartTime?: string,
  chosenEndTime?: string,
}) => {
  moment.locale('de');

  return (
    <div>
      <Typography variant="h1">{companyName}</Typography>
      <ChosenTimeRange startTime={chosenStartTime} endTime={chosenEndTime} />
      {timeSlotDates.map((timeSlotDate) => (
        <div key={`${companyId}_${timeSlotDate.date}`}>
          <div>
            {moment(timeSlotDate.date).format('YYYY-MM-DD')}
            {timeSlotDate.timeSlots.map((timeSlot) => (
              `${moment(timeSlot.startTime).format('LT')} - ${moment(timeSlot.endTime).format('LT')}`
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeSlotColumn;
