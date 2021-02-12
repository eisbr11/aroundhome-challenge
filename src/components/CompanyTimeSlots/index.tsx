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
      {companies.map((company) => (
        <TimeSlotColumn
          companyName={company.name}
          companyId={company.id}
          timeslots={company.time_slots}
          key={company.id}
        />
      ))}
    </div>
  );
};

export default CompanyTimeSlots;
