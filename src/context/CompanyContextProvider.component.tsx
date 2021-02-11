import React, { useEffect } from 'react';

import getCompanies from 'api';
import { CompaniesContext } from './companies.context';
import { CompaniesType } from '../types/companies.type';

const CompanyContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const defaultCompanies: CompaniesType = [];
  const [companies, setCompanies] = React.useState(defaultCompanies);

  const fetchData = async () => {
    const fetchedCompanies:CompaniesType = await getCompanies();
    setCompanies(fetchedCompanies);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CompaniesContext.Provider value={{ companies, setCompanies }}>
      {children}
    </CompaniesContext.Provider>
  );
};

export default CompanyContextProvider;
