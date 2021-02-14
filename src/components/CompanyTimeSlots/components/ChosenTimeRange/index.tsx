import { useTheme } from 'react-jss';
import moment from 'moment';

import Typography from 'components/Typography';
import useStyles from './ChosenTimeRange.styles';

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
            {`${moment(startTime).format('DD.MM YYYY')}, ${moment(startTime).format('LT')} - ${moment(endTime).format('LT')}`}
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
