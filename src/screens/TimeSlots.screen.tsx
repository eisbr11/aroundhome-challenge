import Typography from 'components/Typography';
import Layout from 'components/Layout';
import { useCompaniesState } from 'context/companies.context';
import CompanyTimeSlots from 'components/CompanyTimeSlots';
import ChosenTimeRangesContextProvider from 'context/ChosenTimeRangesContextProvider.component';

const TimeSlotsScreen = () => {
  const { companyState } = useCompaniesState();

  return (
    <Layout>
      {companyState.isFetching ? (
        <Typography>FETCHING DATA</Typography>
      ) : (
        <ChosenTimeRangesContextProvider>
          <CompanyTimeSlots companies={companyState.companies} />
        </ChosenTimeRangesContextProvider>
      )}
    </Layout>
  );
};

export default TimeSlotsScreen;
