import { createContext, useContext } from 'react';
import { CompaniesStateType } from 'types/companies.type';

export type CompaniesContextType = {
  companyState: CompaniesStateType;
  setCompaniesState: (companiesState: CompaniesStateType) => void;
};

export const CompaniesContext = createContext<CompaniesContextType>({
  companyState: { companies: [], isFetching: false },
  // eslint-disable-next-line no-console
  setCompaniesState: () => console.warn('No provider found'),
});

export const useCompaniesState = () => useContext(CompaniesContext);
