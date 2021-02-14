import { Companies } from 'types/companies.type';
import TimeSlotColumn from './components/TimeSlotColumn';
import useStyles from './CompanyTimeSlots.styles';

const CompanyTimeSlots = ({
  companies = [],
} : {
  companies: Companies
}) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {companies.map((company) => {
        const startTime = '';
        const endTime = '';
        return (
          <TimeSlotColumn
            companyName={company.name}
            companyId={company.id}
            timeSlotDates={company.timeSlotDates}
            key={company.id}
            chosenStartTime={startTime}
            chosenEndTime={endTime}
          />
        );
      })}
    </div>
  );
};

export default CompanyTimeSlots;
