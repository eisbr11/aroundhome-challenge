import * as Moment from 'moment';
import { extendMoment } from 'moment-range';

import { TimeSlot } from 'types/companies.type';

const moment = extendMoment(Moment);

const isActiveTimeSlot = (activeTimeSlot: TimeSlot, compareTimeSlot: TimeSlot): boolean => {
  const activeTimeSlotRange = moment.range(
    moment(activeTimeSlot.startTime),
    moment(activeTimeSlot.endTime),
  );
  const compareTimeSlotRange = moment.range(
    moment(compareTimeSlot.startTime),
    moment(compareTimeSlot.endTime),
  );
  return activeTimeSlotRange.isSame(compareTimeSlotRange);
};

export default isActiveTimeSlot;
