import { Link } from 'react-router-dom';

import { Companies } from 'types/companies.type';
import { useChosenTimeRangesState } from 'context/chosenTimeRanges.context';
import Button from 'components/Button';
import Typography from 'components/Typography';
import TimeSlotColumn from './components/TimeSlotColumn';
import useStyles from './CompanyTimeSlots.styles';

/**
 * The Timeslots UI Component
 *
 * @param {Companies} companies
 * @returns {JSX}
 * @constructor
 */
const CompanyTimeSlots = ({
  companies = [],
} : {
  companies: Companies
}) => {
  const classes = useStyles();
  const { getTimeSlotByCompanyId, isValid } = useChosenTimeRangesState();

  return (
    <>
      <div className={classes.wrapper}>
        {companies.map((company) => {
          const setTimeSlot = getTimeSlotByCompanyId(company.id);

          return (
            <TimeSlotColumn
              companyName={company.name}
              companyId={company.id}
              timeSlotDates={company.timeSlotDates}
              key={company.id}
              chosenStartTime={setTimeSlot.startTime}
              chosenEndTime={setTimeSlot.endTime}
            />
          );
        })}
      </div>
      <div className={classes.submitRow}>
        {isValid(companies) && (
          <Button>
            <Link to="/submit">
              <Typography variant="body">Submit</Typography>
            </Link>
          </Button>
        )}
      </div>
    </>
  );
};

export default CompanyTimeSlots;
