import Typography from 'components/Typography';
import Layout from 'components/Layout';
import { useCompaniesState } from 'context/companies.context';
import CompanyTimeSlots from 'components/CompanyTimeSlots';

const TimeSlotsScreen = () => {
  const { companyState } = useCompaniesState();

  return (
    <Layout>
      {companyState.isFetching ? (
        <Typography>FETCHING DATA</Typography>
      ) : (
        <CompanyTimeSlots companies={companyState.companies} />
      )}
    </Layout>
  );
};

export default TimeSlotsScreen;
