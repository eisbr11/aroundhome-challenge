import { createContext, useContext } from 'react';
import { CompaniesType } from '../types/companies.type';

export type CompaniesContextType = {
  companies: CompaniesType;
  setCompanies: (companies: CompaniesType) => void;
};

export const CompaniesContext = createContext<CompaniesContextType>({
  companies: [],
  setCompanies: () => console.warn('No provider found'),
});

export const useCompanies = () => useContext(CompaniesContext);
