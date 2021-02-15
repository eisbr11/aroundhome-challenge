import clsx from 'clsx';
import { useTheme } from 'react-jss';

import Typography from 'components/Typography';
import { useChosenTimeRangesState } from 'context/chosenTimeRanges.context';
import isDisabledTimeSlot from 'helper/isDisabledTimeSlot';
import isActiveTimeSlot from 'helper/isActiveTimeSlot';
import timeStringFormat from 'helper/timeStringFormat';
import useStyles from './TimeSlot.styles';

const TimeSlot = ({
  startTime,
  endTime,
  companyId,
}: {
  startTime: string,
  endTime: string,
  companyId: number,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const {
    setTimeSlot,
    getDisabledTimeSlotsForCompany,
    getTimeSlotByCompanyId,
    removeTimeSlot,
  } = useChosenTimeRangesState();
  const disabledTimeSlots = getDisabledTimeSlotsForCompany(companyId);
  const isDisabled = isDisabledTimeSlot({ startTime, endTime }, disabledTimeSlots);
  const isActive = isActiveTimeSlot(getTimeSlotByCompanyId(companyId), { startTime, endTime });

  const handleClick = () => {
    if (!isDisabled) {
      if (isActive) {
        removeTimeSlot(companyId);
      } else {
        setTimeSlot(companyId, { startTime, endTime });
      }
    }
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      className={clsx(
        { [classes.isDisabled]: isDisabled },
        { [classes.timeChooseActive]: isActive },
        classes.timeChoose,
      )}
    >
      <Typography className={classes.timeRange} variant="body" tag="span">
        {timeStringFormat.toTime(startTime)}
        {' - '}
        {timeStringFormat.toTime(endTime)}
      </Typography>
    </a>
  );
};

export default TimeSlot;
