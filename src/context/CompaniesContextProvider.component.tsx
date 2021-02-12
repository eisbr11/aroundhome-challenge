import React, { useEffect } from 'react';

import getCompanies from 'api';
import { CompaniesStateType, Companies } from 'types/companies.type';
import { CompaniesContext } from './companies.context';

const CompaniesContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const defaultCompaniesState: CompaniesStateType = { companies: [], isFetching: false };
  const [companyState, setCompaniesState] = React.useState(defaultCompaniesState);

  const fetchData = async () => {
    setCompaniesState((prevState) => ({ ...prevState, isFetching: true }));
    const fetchedCompanies:Companies = await getCompanies();
    setCompaniesState({ companies: fetchedCompanies, isFetching: false });
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
