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
        const startTime = '2018-07-09T08:00:00.000+02:00';
        const endTime = '2018-07-09T09:30:00.000+02:00';
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
