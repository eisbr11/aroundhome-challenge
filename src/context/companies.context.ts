import { createContext, useContext } from 'react';
import { CompaniesStateType } from 'types/companies.type';

export type CompaniesContextType = {
  companyState: CompaniesStateType;
  setCompaniesState: (companiesState: CompaniesStateType) => void;
};

/**
 * the company data context
 *
 * @returns {Context}
 */
export const CompaniesContext = createContext<CompaniesContextType>({
  companyState: { companies: [], isFetching: false, hasError: false },
  // eslint-disable-next-line no-console
  setCompaniesState: () => console.warn('No provider found'),
});

export const useCompaniesState = () => useContext(CompaniesContext);
