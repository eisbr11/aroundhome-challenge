import React, { useEffect } from 'react';

import getCompanies from 'api';
import { CompaniesStateType } from 'types/companies.type';
import transformCompanyData from 'helper/transformApiData.helper';
import { CompaniesContext } from './companies.context';

/**
 * The Company Data Context Provider Wrapper
 *
 * @param {*} children
 * @returns {JSX}
 * @constructor
 */
const CompaniesContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const defaultCompaniesState: CompaniesStateType = {
    companies: [],
    isFetching: false,
    hasError: false,
  };
  const [companyState, setCompaniesState] = React.useState(defaultCompaniesState);

  const fetchData = async () => {
    setCompaniesState((prevState) => ({ ...prevState, isFetching: true }));
    try {
      const fetchedCompanies = await getCompanies();
      const transformedCompanyData = transformCompanyData(fetchedCompanies);

      setCompaniesState({ companies: transformedCompanyData, isFetching: false, hasError: false });
    } catch (e) {
      setCompaniesState({ companies: [], isFetching: false, hasError: true });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CompaniesContext.Provider value={{ companyState, setCompaniesState }}>
      {children}
    </CompaniesContext.Provider>
  );
};

export default CompaniesContextProvider;
