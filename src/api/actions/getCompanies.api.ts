import { CompaniesApi } from 'types/companies.type';
import companyServer from '../server/company.api';

const getCompanies = ():Promise<CompaniesApi> => companyServer.get(
  '/companies',
);

export default getCompanies;
