import { Companies } from 'types/companies.type';
import { useChosenTimeRangesState } from 'context/chosenTimeRanges.context';
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
  const { getTimeSlotByCompanyId } = useChosenTimeRangesState();

  return (
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
  );
};

export default CompanyTimeSlots;
