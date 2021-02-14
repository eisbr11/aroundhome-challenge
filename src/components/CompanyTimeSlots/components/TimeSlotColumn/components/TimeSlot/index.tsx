import clsx from 'clsx';
import { useTheme } from 'react-jss';
import moment from 'moment';

import Typography from 'components/Typography';
import { useState } from 'react';
import useStyles from './TimeSlot.styles';

const TimeSlot = ({
  startTime,
  endTime,
}: {
  startTime: string,
  endTime: string,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [isOn, setOn] = useState(true);

  const handleClick = () => {
    setOn((prevState) => !prevState);
  };

  return (
    <a href="#" onClick={handleClick} className={clsx({ [classes.timeChooseActive]: !isOn }, classes.timeChoose)}>
      <Typography className={classes.timeRange} variant="body" tag="span">
        {moment(startTime).format('LT')}
        {' - '}
        {moment(endTime).format('LT')}
      </Typography>
    </a>
  );
};

export default TimeSlot;
