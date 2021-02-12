import moment from 'moment';
import 'moment/locale/de';

import { TimeSlot } from 'types/companies.type';
import Typography from '../../../Typography';

const TimeSlotColumn = ({
  timeslots = [],
  companyId,
  companyName,
} : {
  timeslots: TimeSlot[],
  companyId: number,
  companyName: string,
}) => {
  console.log(moment.locale('de'));
  return (
    <div>
      <Typography variant="h1">{companyName}</Typography>
      {timeslots.map((timeslot) => (
        <div key={`${companyId}_${timeslot.start_time}`}>
          <div>
            {`${moment(timeslot.start_time).format()} - ${moment(timeslot.end_time).format('h:mm a')}`}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeSlotColumn;
