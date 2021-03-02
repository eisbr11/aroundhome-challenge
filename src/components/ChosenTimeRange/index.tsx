import { useTheme } from 'react-jss';

import Typography from 'components/Typography';
import timeStringFormat from 'helper/timeStringFormat';
import useStyles from './ChosenTimeRange.styles';

/**
 * show a chosen Time Range
 *
 * @param {string} startTime
 * @param {string} endTime
 * @returns {JSX}
 * @constructor
 */
const ChosenTimeRange = ({
  startTime = '',
  endTime = '',
} : {
  startTime?: string | null,
  endTime?: string | null
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <div className={classes.wrapper}>
      {(startTime && endTime) ? (
        <>
          <Typography tag="span" variant="body" className={classes.label}>
            Gewählter Zeitraum
          </Typography>
          <Typography tag="span" variant="subtitle" className={classes.chosenDate}>
            {`${timeStringFormat.toDate(startTime)}, ${timeStringFormat.toTime(startTime)} - ${timeStringFormat.toTime(endTime)}`}
          </Typography>
        </>
      ) : (
        <>
          <Typography tag="span" variant="body" className={classes.label}>
            Kein Zeitraum gewählt
          </Typography>
        </>
      )}
    </div>
  );
};

export default ChosenTimeRange;

ChosenTimeRange.defaultProps = {
  startTime: '',
  endTime: '',
};
