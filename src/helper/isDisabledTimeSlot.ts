import * as Moment from 'moment';
import { extendMoment } from 'moment-range';

import { TimeSlot } from 'types/companies.type';

const moment = extendMoment(Moment);

const isDisabledTimeSlot = (timeSlot: TimeSlot, disabledTimeSlots: TimeSlot[]): boolean => {
  let isDisabled = false;
  const currentTimeSlotRange = moment.range(moment(timeSlot.startTime), moment(timeSlot.endTime));
  disabledTimeSlots.forEach((disabledTimeSlot) => {
    const disabledRange = moment.range(
      moment(disabledTimeSlot.startTime),
      moment(disabledTimeSlot.endTime),
    );
    if (currentTimeSlotRange.overlaps(disabledRange)) {
      isDisabled = true;
    }
  });
  return isDisabled;
};

export default isDisabledTimeSlot;
