import Layout from 'components/Layout';
import { useCompaniesState } from 'context/companies.context';
import Loading from 'components/Loading';
import CompanyTimeSlots from 'components/CompanyTimeSlots';
import ConnectionError from 'components/ConnectionError';

/**
 * The Company TimeSlot screen
 * will show a loading indicator, while fetching data
 * will show an error message, is connection failed
 *
 * @returns {JSX}
 * @constructor
 */
const TimeSlotsScreen = () => {
  const { companyState } = useCompaniesState();
  if (companyState.hasError) {
    return (
      <Layout>
        <ConnectionError />
      </Layout>
    );
  }
  return (
    <Layout>
      {companyState.isFetching ? (
        <Loading />
      ) : (
        <CompanyTimeSlots companies={companyState.companies} />
      )}
    </Layout>
  );
};

export default TimeSlotsScreen;
