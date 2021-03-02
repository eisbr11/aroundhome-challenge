import { useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

import { useChosenTimeRangesState } from 'context/chosenTimeRanges.context';
import { useCompaniesState } from 'context/companies.context';
import ChosenTimeRange from 'components/ChosenTimeRange';
import { Company } from 'types/companies.type';
import Typography from 'components/Typography';
import ContactForm from 'components/ContactForm';
import useStyles from './TimeSlotsSummary.styles';

const TimeSlotsSummary = () => {
  const { chosenTimeRangesState } = useChosenTimeRangesState();

  const { companyState } = useCompaniesState();

  const getNameById = (companyId: number): string => {
    const foundCompany = companyState.companies.find(
      (company: Company) => company.id === companyId,
    );
    return foundCompany?.name as string;
  };

  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <div className={classes.wrapper}>
      <div className={classes.backLink}>
        <Link to="/">
          <Typography>Zurück</Typography>
        </Link>
      </div>
      <div className={classes.appointmentsWrapper}>
        <Typography tag="h1" variant="h1">
          Selected Appointments
        </Typography>
        {chosenTimeRangesState.map((chosenTimeRange) => (
          <div className={classes.timeRange} key={`${chosenTimeRange.companyId}_${chosenTimeRange.timeslot.startTime}`}>
            <Typography variant="h2" tag="span" className={classes.companyName}>
              {getNameById(chosenTimeRange.companyId)}
            </Typography>
            <ChosenTimeRange
              key={`chosenTimeRange-${chosenTimeRange.companyId}`}
              startTime={chosenTimeRange.timeslot.startTime}
              endTime={chosenTimeRange.timeslot.endTime}
            />
          </div>
        ))}
      </div>
      <ContactForm chosenTimeSlots={chosenTimeRangesState} />
    </div>
  );
};

export default TimeSlotsSummary;
